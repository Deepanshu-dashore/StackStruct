import { resolveDependencies } from "../dependencies";
import frameworkCommands from "../data/framework-commands.json";
import { normalizeConfig } from "../normalizer";

/**
 * Consumes a pure JSON file tree and produces a structured script object.
 */
export function generateBashScript(tree, rawConfig) {
  const config = normalizeConfig(rawConfig);
  const safeProjectName = tree.name.replace(/[^a-zA-Z0-9-_]/g, "");

  const header = [
    "#!/usr/bin/env bash",
    `# Project: ${safeProjectName}`,
    `# Generated: ${new Date().toLocaleString()}`,
    "set -e",
    "",
    `echo "🚀 Scaffolding ${safeProjectName}..."`,
    `mkdir -p "${safeProjectName}"`,
    `cd "${safeProjectName}"`,
  ];

  const dirCommands = traverseDirs(tree, "");
  const fileCommands = traverseFiles(tree, "");

  // Build commands from registry
  const { scaffoldCmds, installCmds } = buildInstallCommands(config);

  const finalScript = [
    ...header,
    "",
    'echo "Step 1: Framework Scaffolding"',
    "# -------------------------------------",
    ...scaffoldCmds,
    "",
    'echo "Step 2: Custom File Injection"',
    "# -------------------------------------",
    ...dirCommands,
    ...fileCommands,
    "",
    'echo "Step 3: Feature Installation"',
    "# -------------------------------------",
    ...installCmds,
    "",
    'echo "✅ Done!"',
    'echo "cd ' + safeProjectName + ' to start coding."',
  ].join("\n");

  return {
    projectName: safeProjectName,
    frameworkScaffold: scaffoldCmds,
    scaffoldingCommands: [...dirCommands, ...fileCommands],
    installCommands: installCmds,
    finalScript,
  };
}

/**
 * Simple template renderer for {{var}} and {{#var}}...{{/var}}
 */
function renderTemplate(str, data) {
  if (!str) return "";
  let result = str;
  // Handle conditionals {{#typescript}}-ts{{/typescript}}
  result = result.replace(
    /\{\{#(.*?)\}\}(.*?)\{\{\/\1\}\}/g,
    (match, key, content) => {
      return data[key] ? content : "";
    },
  );
  // Handle variables {{projectName}}
  result = result.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    const value = data[key.trim()];
    return value !== undefined ? value : match;
  });

  return result;
}

function buildInstallCommands(config) {
  const scaffoldCmds = [];
  const installCmds = [];

  const addRawCmd = (cmd, path = "", targetArr) => {
    if (!cmd) return;
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (path && path !== ".") {
      targetArr.push(`echo "📦 In ${path}: ${trimmed}"`);
      targetArr.push(`(cd ${path} && ${trimmed})`);
    } else {
      // Don't echo for root path if it's just a simple scaffold/install
      // It makes the UI output cleaner.
      // And definitely don't cd .
      targetArr.push(trimmed);
    }
  };

  const processFeature = (featureKey, path) => {
    const feat = frameworkCommands.features[featureKey];
    if (!feat) return;

    if (feat.dependencies?.length) {
      addRawCmd(
        `npm install ${feat.dependencies.join(" ")}`,
        path === "." ? "" : path,
        installCmds,
      );
    }
    if (feat.devDependencies?.length) {
      addRawCmd(
        `npm install -D ${feat.devDependencies.join(" ")}`,
        path === "." ? "" : path,
        installCmds,
      );
    }
    if (feat.postInstall?.length) {
      feat.postInstall.forEach((c) =>
        addRawCmd(c, path === "." ? "" : path, installCmds),
      );
    }
  };

  // 1. Frontend
  if (config.frontend) {
    const fePath = config.frontend && config.backend ? "frontend" : ".";
    // Map framework ID to command key if needed
    let feFramework = config.frontend.framework;
    if (feFramework === "react") feFramework = "react-vite";
    if (feFramework === "vue") feFramework = "vue-vite";

    const feData = frameworkCommands.frontend[feFramework];

    const templateData = {
      projectName: fePath,
      typescript: !!(
        config.frontend.language === "typescript" ||
        config.language === "typescript"
      ),
    };

    if (feData) {
      if (feData.scaffold) {
        let cmd = renderTemplate(feData.scaffold, templateData);
        // If the command manually does "mkdir", don't wrap it.
        // Otherwise, assume the framework CLI expects to be impactful,
        // but let's just run it as is.
        // Wait, the user wants "cd {{projectName}}" *after* scaffold.
        // The scaffold command *creates* the folder.
        // So we run scaffold in Current Dir (.) and it creates {{projectName}}.
        addRawCmd(cmd, ".", scaffoldCmds);
      }
      if (feData.install) {
        addRawCmd(
          renderTemplate(feData.install, templateData),
          ".",
          installCmds,
        );
      }
    }

    // Frontend Features
    if (config.frontend.style === "tailwind" || config.styling === "tailwind") {
      processFeature("tailwind", fePath);
    }
  }

  // 2. Backend
  if (config.backend) {
    const bePath = config.frontend && config.backend ? "backend" : ".";
    const beFramework = config.backend.framework;
    const beData = frameworkCommands.backend[beFramework];

    const templateData = {
      projectName: bePath,
      typescript: !!(
        config.backend.language === "typescript" ||
        config.language === "typescript"
      ),
    };

    if (beData) {
      if (beData.scaffold) {
        addRawCmd(
          renderTemplate(beData.scaffold, templateData),
          ".",
          scaffoldCmds,
        );
      }
      if (beData.install) {
        addRawCmd(
          renderTemplate(beData.install, templateData),
          ".",
          installCmds,
        );
      }
    }

    // Backend Features
    if (config.backend.auth === "jwt") processFeature("jwt", bePath);
    if (config.backend.orm === "prisma") processFeature("prisma", bePath);
    if (
      config.backend.database === "mongodb" ||
      config.backend.orm === "mongoose"
    ) {
      processFeature("mongoose", bePath);
    }
    if (config.backend.fileUploads) processFeature("multer", bePath);
  }

  return { scaffoldCmds, installCmds };
}

function traverseDirs(node, currentPath) {
  if (node.type === "file") return [];
  const cmds = [];

  // Don't create the root project dir (currentPath will be empty for root)
  if (currentPath) {
    cmds.push(`mkdir -p "${currentPath}"`);
  }

  if (node.children) {
    node.children.forEach((child) => {
      const childPath = currentPath
        ? `${currentPath}/${child.name}`
        : child.name;
      // If we are at the root project node, we don't want to include its name in the path
      // because we already cd'd into it.
      // The Orchestrator wraps the tree in a root folder.
      if (!currentPath && node.type === "folder") {
        // Special case: children of the absolute root project folder
        cmds.push(...traverseDirs(child, child.name));
      } else {
        cmds.push(...traverseDirs(child, childPath));
      }
    });
  }
  return [...new Set(cmds)]; // Deduplicate mkdir commands
}

function traverseFiles(node, currentPath) {
  if (node.type === "file") {
    return [`cat << 'EOF' > "${currentPath}"`, node.content, "EOF", ""];
  }

  const cmds = [];
  if (node.children) {
    node.children.forEach((child) => {
      const childPath = currentPath
        ? `${currentPath}/${child.name}`
        : child.name;
      if (!currentPath && node.type === "folder") {
        cmds.push(...traverseFiles(child, child.name));
      } else {
        cmds.push(...traverseFiles(child, childPath));
      }
    });
  }
  return cmds;
}
