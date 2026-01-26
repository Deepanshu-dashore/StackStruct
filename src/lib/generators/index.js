import { validateConfig } from "./validation";
import { getFile, getFolder } from "./helpers";
import { generateFrontendStructure } from "./frontend";
import { generateBackendStructure } from "./backend";
import { generateScript as buildScript } from "./script";

/**
 * Main function to generate the virtual project structure.
 * @param {AppConfig} config
 * @returns {FolderNode}
 */
export function generateFileTree(config) {
  validateConfig(config);

  const hasFrontend = config.projectType !== "backend-only";
  const hasBackend = config.projectType !== "frontend-only";

  const frontendTree = hasFrontend ? generateFrontendStructure(config) : [];
  const backendTree = hasBackend ? generateBackendStructure(config) : [];

  let children = [];

  if (config.projectType === "frontend-only") {
    children = frontendTree;
  } else if (config.projectType === "backend-only") {
    children = backendTree;
  } else if (config.projectType === "frontend-backend") {
    if (config.monorepo) {
      children = [
        getFolder("frontend", frontendTree),
        getFolder("backend", backendTree),
        getFile(
          "package.json",
          JSON.stringify(
            {
              name: config.projectName,
              private: true,
              workspaces: ["frontend", "backend"],
            },
            null,
            2,
          ),
        ),
        getFile(".gitignore", "node_modules\n.env\n.DS_Store\ndist\n.next"),
      ];
    } else {
      // Standard full-stack: frontend in root, backend in /server
      children = [...frontendTree, getFolder("server", backendTree)];
    }
  }

  return getFolder(config.projectName, children);
}

/**
 * Main function to generate the bash script and components.
 * @param {FolderNode} tree
 * @param {AppConfig} config
 * @returns {Object}
 */
export function generateScript(tree, config) {
  return buildScript(tree, config);
}

// Re-export specific generators if needed
export { generateFrontendStructure, generateBackendStructure };
