import { normalizeConfig } from "./normalizer";
import { getFolder, getFile } from "./utils/tree-nodes";
import { frontendPipeline } from "./pipelines/frontend";
import { backendPipeline } from "./pipelines/backend";

/**
 * Main entrance to the generation engine.
 * Takes a raw UI config and returns a pure JSON file tree.
 */
export function generateProject(rawConfig) {
  // 1. Normalize & Validate
  const config = normalizeConfig(rawConfig);

  let frontendTree = null;
  let backendTree = null;

  // 2. Run Pipelines
  if (config.frontend) {
    frontendTree = frontendPipeline(config.frontend, config);
  }

  if (config.backend) {
    backendTree = backendPipeline(config.backend, config);
  }

  // 3. Tree Merger (Handle Monorepo vs Standard)
  const rootChildren = [];

  if (config.frontend && config.backend) {
    if (config.monorepo) {
      // /frontend and /backend folders
      rootChildren.push(getFolder("frontend", frontendTree));
      rootChildren.push(getFolder("backend", backendTree));

      // Monorepo package.json
      rootChildren.push(
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
      );
    } else {
      // Standard: Frontend in root, Backend in /server
      rootChildren.push(...frontendTree);
      rootChildren.push(getFolder("server", backendTree));
    }
  } else if (config.frontend) {
    rootChildren.push(...frontendTree);
  } else if (config.backend) {
    rootChildren.push(...backendTree);
  }

  // 4. Final Final Wrap
  return getFolder(config.projectName, rootChildren);
}
