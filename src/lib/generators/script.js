import { generateDirs, generateFiles } from "./helpers";

/**
 * Generates the full bash script based on the file tree and config.
 * @param {import('./helpers').FolderNode} tree
 * @param {import('./validation').AppConfig} config
 */
export function generateScript(tree, config) {
  const commands = [];
  const safeProjectName = sanitizeName(config.projectName);

  const dirCommands = generateDirs(tree, "");
  const fileCommands = generateFiles(tree, "");

  // -------------------------------------
  // Header
  // -------------------------------------

  commands.push(
    "#!/usr/bin/env bash",
    "# StackStruct Project Generation Script",
    `# Generated on ${new Date().toISOString()}`,
    "set -e",
    "",
    `echo "🚀 Scaffolding project: ${safeProjectName}..."`,
    `mkdir -p "${safeProjectName}"`,
    `cd "${safeProjectName}"`,
    ""
  );

  // -------------------------------------
  // 1. Directory Structure
  // -------------------------------------

  commands.push("# 1. Creating directory structure...");
  commands.push(...dirCommands, "");

  // -------------------------------------
  // 2. File Creation
  // -------------------------------------

  commands.push("# 2. Creating files...");
  commands.push(...fileCommands, "");

  // -------------------------------------
  // 3. Installing Dependencies
  // -------------------------------------

  commands.push("# 3. Installing dependencies...");

  const installCommands = buildInstallCommands(config);
  commands.push(...installCommands, "");

  // -------------------------------------
  // 4. Tailwind Guidance
  // -------------------------------------

  const tailwindMeta = buildTailwindGuidance(config);

  if (tailwindMeta) {
    commands.push("# Tailwind v4.x setup tips (manual step)");
    tailwindMeta.install.forEach(cmd =>
      commands.push(`echo "Run manually: ${cmd}"`)
    );

    if (tailwindMeta.run) {
      commands.push(`echo "Start dev server: ${tailwindMeta.run}"`);
    }

    tailwindMeta.notes.forEach(note =>
      commands.push(`echo "${note}"`)
    );

    commands.push("");
  }

  // -------------------------------------
  // Final Message
  // -------------------------------------

  commands.push(
    "# -------------------------------------",
    'echo "✅ Project scaffolded successfully!"',
    `echo "cd ${safeProjectName} to start working."`
  );

  return {
    projectName: safeProjectName,
    scaffoldingCommands: [...dirCommands, ...fileCommands],
    installCommands,
    tailwind: tailwindMeta || undefined,
    finalScript: commands.join("\n"),
  };
}

/* =====================================================
   Helper Builders
===================================================== */

function buildInstallCommands(config) {
  const cmds = [];

  const hasFrontend = config.projectType !== "backend-only";
  const hasBackend = config.projectType !== "frontend-only";

  if (hasFrontend) {
    cmds.push('echo "📦 Installing frontend dependencies..."');

    if (config.monorepo) {
      cmds.push("(cd frontend && npm install)");
    } else {
      cmds.push("npm install");
    }
  }

  if (hasBackend) {
    cmds.push('echo "📦 Installing backend dependencies..."');

    if (config.monorepo) {
      cmds.push("(cd backend && npm install)");
    } else if (config.projectType === "frontend-backend") {
      cmds.push("(cd server && npm install)");
    } else {
      cmds.push("npm install");
    }
  }

  return cmds;
}

function buildTailwindGuidance(config) {
  if (config.styling !== "tailwind") return null;

  const framework =
    typeof config.frontend === "object"
      ? config.frontend.framework
      : config.frontend || "react";

  const install = [];
  let run = "";
  const notes = [];

  switch (framework) {
    case "react":
    case "vue":
    case "astro":
      install.push("npm install tailwindcss @tailwindcss/vite");
      run = "npm run dev";
      break;

    case "nextjs":
      install.push("npm install tailwindcss @tailwindcss/postcss postcss");
      run = "npm run dev";
      break;

    case "angular":
      install.push(
        "npm install tailwindcss @tailwindcss/postcss postcss --force"
      );
      run = "ng serve";
      notes.push(
        "Angular CLI configuration required. This scaffold provides structure only."
      );
      break;
  }

  return {
    framework,
    install,
    run,
    notes,
  };
}

function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9-_]/g, "");
}
