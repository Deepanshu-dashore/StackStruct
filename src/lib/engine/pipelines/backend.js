import { expressFramework } from "../frameworks/backend/express";
import { expressFramework as nodeExpressFramework } from "../frameworks/backend/node-express";
import { nestFramework } from "../frameworks/backend/nest";
import { djangoFramework } from "../frameworks/backend/django";
import { springBootFramework } from "../frameworks/backend/springboot";
import { fastifyFramework } from "../frameworks/backend/fastify";
import { flaskFramework } from "../frameworks/backend/flask";
import { nodejsFramework } from "../frameworks/backend/nodejs";
import { getFolder, getFile } from "../utils/tree-nodes";

/**
 * Orchestrates the creation of the backend structure.
 */
export function backendPipeline(backendConfig, fullConfig) {
  // 1. Resolve Framework Base
  let nodes = [];
  if (backendConfig.framework === "express") {
    nodes = expressFramework(backendConfig);
  } else if (backendConfig.framework === "node-express") {
    nodes = nodeExpressFramework(backendConfig);
  } else if (backendConfig.framework === "nestjs") {
    nodes = nestFramework(backendConfig);
  } else if (backendConfig.framework === "django") {
    nodes = djangoFramework(backendConfig);
  } else if (backendConfig.framework === "springboot") {
    nodes = springBootFramework(backendConfig);
  } else if (backendConfig.framework === "fastify") {
    nodes = fastifyFramework(backendConfig);
  } else if (backendConfig.framework === "flask") {
    nodes = flaskFramework(backendConfig);
  } else if (backendConfig.framework === "nodejs") {
    nodes = nodejsFramework(backendConfig);
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
