import { getFile, getFolder } from "../../utils/tree-nodes";

/**
 * Injects Tailwind CSS configuration into the project tree for Tailwind 4.0.
 */
export function injectTailwind(nodes, config) {
  const isTS =
    config.language === "typescript" || config.language === undefined;

  // 1. Update/Add vite.config
  const viteConfigName = isTS ? "vite.config.ts" : "vite.config.js";

  // We overwrite the existing vite config to include the plugin
  nodes.push(
    getFile(
      viteConfigName,
      `
import { defineConfig } from 'vite'
import ${config.framework === "react" ? "react" : "vue"} from '@vitejs/plugin-${config.framework === "react" ? "react" : "vue"}'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ${config.framework === "react" ? "react()" : "vue()"},
    tailwindcss(),
  ],
})
      `.trim(),
    ),
  );

  // 2. Add/Update index.css with new @import syntax
  // We search for src folder to place the css file correctly
  const srcNode = nodes.find((n) => n.name === "src" && n.type === "folder");

  if (srcNode) {
    if (srcNode.children) {
      srcNode.children.push(getFile("index.css", `@import "tailwindcss";`));
    }
  } else {
    // If src folder not found in root (e.g. monorepo or weird structure),
    // we assume the platform will handle 'src/index.css' path creation via traverseDirs
    nodes.push(getFile("src/index.css", `@import "tailwindcss";`));
  }

  return nodes;
}
