import { normalizeConfig } from "./normalizer";
import { getFolder, getFile } from "./utils/tree-nodes";
import { frontendPipeline } from "./pipelines/frontend";
import { backendPipeline } from "./pipelines/backend";
import { fullstackFramework } from "./frameworks/fullstack";

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
    // Fullstack: Always separate into frontend/ and backend/ folders
    rootChildren.push(getFolder("frontend", frontendTree));
    rootChildren.push(getFolder("backend", backendTree));

    // Root package.json to manage the workspace
    rootChildren.push(
      getFile(
        "package.json",
        JSON.stringify(
          {
            name: config.projectName,
            private: true,
            workspaces: ["frontend", "backend"],
            scripts: {
              "dev:frontend": "npm run dev --workspace=frontend",
              "dev:backend": "npm run dev --workspace=backend",
              dev: 'concurrently "npm run dev:frontend" "npm run dev:backend"',
              "install:all": "npm install",
            },
            devDependencies: {
              concurrently: "^8.2.0",
            },
          },
          null,
          2,
        ),
      ),
    );

    // Add fullstack-specific nodes (shared logic, docker, root files)
    const fullstackNodes = fullstackFramework(config);
    rootChildren.push(...fullstackNodes);
  } else if (config.frontend) {
    rootChildren.push(...frontendTree);
  } else if (config.backend) {
    rootChildren.push(...backendTree);
  }

  // 4. Final Final Wrap
  return getFolder(config.projectName, rootChildren);
}
