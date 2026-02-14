import { reactFramework } from "../frameworks/frontend/react";
import { nextFramework } from "../frameworks/frontend/nextjs";
import { htmlFramework } from "../frameworks/frontend/html-css-js";
import { vueFramework } from "../frameworks/frontend/vue";
import { astroFramework } from "../frameworks/frontend/astro";
import { injectTailwind } from "../features/frontend/tailwind";
import { getFolder, getFile } from "../utils/tree-nodes";

/**
 * Orchestrates the creation of the frontend structure.
 */
export function frontendPipeline(frontendConfig, fullConfig) {
  // 1. Resolve Framework Base
  let nodes = [];

  if (frontendConfig.framework === "react") {
    nodes = reactFramework(frontendConfig);
  } else if (frontendConfig.framework === "nextjs") {
    nodes = nextFramework(frontendConfig);
  } else if (frontendConfig.framework === "vanilla") {
    nodes = htmlFramework(frontendConfig);
  } else if (frontendConfig.framework === "vue") {
    nodes = vueFramework(frontendConfig);
  } else if (frontendConfig.framework === "astro") {
    nodes = astroFramework(frontendConfig);
  }

  // 2. Apply Preset (Folder Philosophy)
  nodes = applyPreset(nodes, frontendConfig.folderPreset, frontendConfig);

  // 3. Inject Features
  if (
    frontendConfig.style === "tailwind" ||
    frontendConfig.styling === "tailwind"
  ) {
    nodes = injectTailwind(nodes, frontendConfig);
  }

  return nodes;
}

function applyPreset(nodes, preset, config) {
  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";
  const srcNode = nodes.find((n) => n.name === "src");

  if (!srcNode) return nodes;

  if (preset === "standard" || preset === "advanced") {
    srcNode.children.push(getFolder("components", [getFolder("ui")]));
    srcNode.children.push(getFolder("hooks"));
    srcNode.children.push(getFolder("lib"));
  }

  if (preset === "advanced") {
    srcNode.children.push(getFolder("features"));
    srcNode.children.push(getFolder("services"));
    srcNode.children.push(getFolder("store"));
    srcNode.children.push(getFolder("utils"));
  }

  return nodes;
}
