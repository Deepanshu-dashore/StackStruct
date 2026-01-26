import iconMap from "./icon-map.json";

const FALLBACK_FOLDER = "catppuccin:folder";
const FALLBACK_FILE = "catppuccin:file";

export function resolveFolderIcon(name, isOpen = false) {
  const normalizedName = name.toLowerCase();

  if (normalizedName.startsWith(".")) return "catppuccin:folder-config";
  if (normalizedName.includes("test")) return "catppuccin:folder-test";
  if (normalizedName.includes("api")) return "catppuccin:folder-api";

  const icon = iconMap[normalizedName] || FALLBACK_FOLDER;

  // Catppuccin folders often have -open variants
  return isOpen ? `${icon}-open` : icon;
}

export function resolveFileIcon(name) {
  const normalized = name.toLowerCase();

  // Next.js specific files
  if (normalized.startsWith("page.")) return "catppuccin:nextjs";
  if (normalized.startsWith("layout.")) return "catppuccin:nextjs";
  if (normalized.startsWith("route.")) return "catppuccin:nextjs";
  if (normalized.startsWith("loading.")) return "catppuccin:nextjs";
  if (normalized.startsWith("error.")) return "catppuccin:nextjs";
  if (normalized.startsWith("not-found.")) return "catppuccin:nextjs";

  const ext = normalized.split(".").pop();

  const extMap = {
    js: "catppuccin:javascript",
    jsx: "catppuccin:react",
    ts: "catppuccin:typescript",
    tsx: "catppuccin:react", // Changed from react_ts to react
    css: "catppuccin:css",
    scss: "catppuccin:sass",
    html: "catppuccin:html",
    json: "catppuccin:json",
    md: "catppuccin:markdown",
    png: "catppuccin:image",
    jpg: "catppuccin:image",
    jpeg: "catppuccin:image",
    svg: "catppuccin:svg",
    gitignore: "catppuccin:git",
    "env.local": "catppuccin:info",
    env: "catppuccin:info",
    py: "catppuccin:python",
    java: "catppuccin:java",
    cpp: "catppuccin:cpp",
    c: "catppuccin:c",
    sh: "catppuccin:bash",
    yml: "catppuccin:yaml",
    yaml: "catppuccin:yaml",
    xml: "catppuccin:xml",
  };

  return extMap[ext] || FALLBACK_FILE;
}
