import { expressFramework } from "../frameworks/backend/express";
import { getFolder, getFile } from "../utils/tree-nodes";

/**
 * Orchestrates the creation of the backend structure.
 */
export function backendPipeline(backendConfig, fullConfig) {
  // 1. Resolve Framework Base
  let nodes = [];
  if (backendConfig.framework === "express") {
    nodes = expressFramework(backendConfig);
  }

  // 2. Apply Preset (Folder Philosophy)
  nodes = applyPreset(nodes, backendConfig.folderPreset, backendConfig);

  // 3. Inject Features
  if (backendConfig.auth === "jwt") {
    // injectJWT(nodes, backendConfig);
  }

  if (backendConfig.orm === "prisma") {
    // injectPrisma(nodes, backendConfig);
  }

  return nodes;
}

function applyPreset(nodes, preset, config) {
  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";
  const srcNode = nodes.find((n) => n.name === "src");

  if (!srcNode) return nodes;

  if (preset === "standard" || preset === "advanced") {
    srcNode.children.push(getFolder("controllers"));
    srcNode.children.push(getFolder("services"));
    srcNode.children.push(getFolder("routes"));
  }

  if (preset === "advanced") {
    srcNode.children.push(getFolder("modules"));
    srcNode.children.push(getFolder("middleware"));
    srcNode.children.push(getFolder("config"));
  }

  return nodes;
}
