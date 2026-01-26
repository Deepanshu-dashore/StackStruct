import { getFile, getFolder } from "./helpers";

// --- Presets ---

export const standardPreset = {
  folders: ["src", "components", "lib", "styles"],
  files: ["package.json", "tsconfig.json"],
};

export const minimalPreset = {
  folders: ["src"],
  files: ["package.json"],
};

export const advancedPreset = {
  folders: [
    "src/api",
    "src/components",
    "src/features",
    "src/hooks",
    "src/layouts",
    "src/services",
    "src/store",
    "src/utils",
  ],
  files: ["package.json", "tsconfig.json", "vite.config.ts"],
};

// --- Framework Generators ---

const nextjsGenerator = {
  build: (preset, config) => {
    return [
      getFolder("app", [
        getFile(
          "layout.tsx",
          "export default function RootLayout({ children }) { return <html><body>{children}</body></html>; }",
        ),
        getFile(
          "page.tsx",
          "export default function HomePage() { return <h1>Hello Next.js!</h1>; }",
        ),
        getFile(
          "globals.css",
          "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
        ),
      ]),
      getFolder("components", [getFolder("ui")]),
      getFolder("lib", [getFile("utils.ts")]),
      getFile(
        "package.json",
        JSON.stringify(
          {
            name: config.projectName + "-nextjs",
            private: true,
            dependencies: {
              next: "latest",
              react: "latest",
              "react-dom": "latest",
            },
            devDependencies: { typescript: "latest", tailwindcss: "latest" },
          },
          null,
          2,
        ),
      ),
      getFile(
        "tailwind.config.ts",
        'module.exports = { content: ["./app/**/*.tsx", "./components/**/*.tsx"] }',
      ),
      getFile(
        "tsconfig.json",
        JSON.stringify(
          {
            compilerOptions: {
              jsx: "preserve",
              lib: ["dom", "dom.iterable", "esnext"],
            },
          },
          null,
          2,
        ),
      ),
    ];
  },
};

const reactGenerator = {
  build: (preset, config) => {
    const children = [];

    // Build based on preset folders
    preset.folders.forEach((folder) => {
      children.push(getFolder(folder));
    });

    children.push(
      getFile(
        "src/main.tsx",
        'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\n\nReactDOM.createRoot(document.getElementById("root")!).render(<App />);',
      ),
    );
    children.push(
      getFile(
        "src/App.tsx",
        "export default function App() { return <h1>Hello React!</h1>; }",
      ),
    );

    children.push(
      getFile(
        "package.json",
        JSON.stringify(
          {
            name: config.projectName + "-react",
            private: true,
            dependencies: { react: "latest", "react-dom": "latest" },
            devDependencies: { vite: "latest", typescript: "latest" },
          },
          null,
          2,
        ),
      ),
    );

    return children;
  },
};

const frameworks = {
  nextjs: nextjsGenerator,
  react: reactGenerator,
};

const getPreset = (name) => {
  switch (name) {
    case "minimal":
      return minimalPreset;
    case "advanced":
      return advancedPreset;
    case "standard":
    default:
      return standardPreset;
  }
};

export function generateFrontendStructure(config) {
  const preset = getPreset(config.frontend.folderPreset);
  const generator = frameworks[config.frontend.framework] || reactGenerator;
  return generator.build(preset, config);
}
