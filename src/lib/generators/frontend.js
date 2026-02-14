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
// HTML (Pure) Generator
const htmlGenerator = {
  build: (presetName, config) => {
    const children = [];

    const makeIndex = (links = []) => {
      const headLinks = links
        .filter((l) => l.rel === "stylesheet")
        .map((l) => `<link rel="stylesheet" href="${l.href}">`) // css
        .join("\n");
      const scripts = links
        .filter((l) => l.rel === "script")
        .map(
          (l) => `<script src="${l.href}"${l.defer ? " defer" : ""}></script>`,
        ) // js
        .join("\n");
      return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${config.projectName}</title>
${headLinks}
  </head>
  <body>
    <div id="app">
      <h1>${config.projectName}</h1>
    </div>
${scripts}
  </body>
</html>`;
    };

    if (presetName === "minimal") {
      children.push(
        getFile(
          "index.html",
          makeIndex([
            { rel: "stylesheet", href: "./style.css" },
            { rel: "script", href: "./script.js", defer: true },
          ]),
        ),
      );
      children.push(
        getFile(
          "style.css",
          "/* Global styles */\nbody { font-family: system-ui, sans-serif; background:#1E1E2E; color:#CDD6F4; }",
        ),
      );
      children.push(
        getFile("script.js", "// Page logic\nconsole.log('Hello HTML');"),
      );
      return children;
    }

    if (presetName === "advanced") {
      children.push(getFile("index.html", makeIndex()));
      children.push(
        getFolder("modules", [
          getFolder("auth", [
            getFile(
              "auth.html",
              `<!doctype html>\n<html><head>\n<link rel=\"stylesheet\" href=\"/shared/css/base.css\">\n<link rel=\"stylesheet\" href=\"./auth.css\">\n</head><body>\n<section class=\"auth\">Auth</section>\n<script src=\"/shared/js/utils.js\"></script>\n<script src=\"./auth.js\" defer></script>\n</body></html>`,
            ),
            getFile("auth.css", ".auth { padding: 1rem; }"),
            getFile("auth.js", "console.log('auth module');"),
          ]),
          getFolder("dashboard", [
            getFile(
              "dashboard.html",
              `<!doctype html>\n<html><head>\n<link rel=\"stylesheet\" href=\"/shared/css/base.css\">\n<link rel=\"stylesheet\" href=\"./dashboard.css\">\n</head><body>\n<section class=\"dashboard\">Dashboard</section>\n<script src=\"/shared/js/utils.js\"></script>\n<script src=\"./dashboard.js\" defer></script>\n</body></html>`,
            ),
            getFile("dashboard.css", ".dashboard { padding: 1rem; }"),
            getFile("dashboard.js", "console.log('dashboard module');"),
          ]),
        ]),
      );
      children.push(
        getFolder("shared", [
          getFolder("css", [
            getFile("base.css", "/* base */"),
            getFile("layout.css", "/* layout */"),
          ]),
          getFolder("js", [
            getFile(
              "utils.js",
              "export const q = (s)=>document.querySelector(s);",
            ),
            getFile("constants.js", "export const APP='APP';"),
          ]),
        ]),
      );
      children.push(
        getFolder("assets", [getFolder("images"), getFolder("icons")]),
      );
      children.push(getFolder("pages"));
      return children;
    }

    // standard (default)
    children.push(
      getFile(
        "index.html",
        makeIndex([
          { rel: "stylesheet", href: "/css/main.css" },
          { rel: "script", href: "/js/main.js", defer: true },
        ]),
      ),
    );
    children.push(
      getFolder("pages", [
        getFile("about.html", "<h2>About</h2>"),
        getFile("contact.html", "<h2>Contact</h2>"),
      ]),
    );
    children.push(
      getFolder("css", [
        getFile("main.css", "/* global */"),
        getFile("components.css", "/* reusable components */"),
      ]),
    );
    children.push(
      getFolder("js", [
        getFile("main.js", "console.log('main');"),
        getFile(
          "api.js",
          "export async function get(){ return fetch('/api').then(r=>r.json()); }",
        ),
      ]),
    );
    children.push(
      getFolder("assets", [getFolder("images"), getFolder("icons")]),
    );
    return children;
  },
};

// Vue Generator (Vue 3 + Vite mindset)
const vueGenerator = {
  build: (presetName, config) => {
    const children = [];
    const isTS =
      (config.frontend?.language || config.language) === "typescript";
    const useTailwind = config.styling === "tailwind";
    const ext = isTS ? "ts" : "js";

    const appVueJS = `<template>\n  <main class=\"p-6\"><h1>{{ title }}</h1></main>\n</template>\n<script setup>\nconst title = '${config.projectName}'\n</script>`;
    const appVueTS = `<template>\n  <main class=\"p-6\"><h1>{{ title }}</h1></main>\n</template>\n<script lang=\"ts\" setup>\nconst title: string = '${config.projectName}'\n</script>`;

    const mainBase = (imports = []) => {
      const tail = useTailwind ? "\nimport './index.css'" : "";
      return `import { createApp } from 'vue'\nimport App from './App.vue'\n${imports.join("\n")}\ncreateApp(App)${imports.length ? ".use(router)" : ""}.mount('#app')${tail}`;
    };

    const routerIndexJS = `import { createRouter, createWebHistory } from 'vue-router'\nexport default createRouter({ history: createWebHistory(), routes: [] })`;
    const routerIndexTS = `import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'\nconst routes: RouteRecordRaw[] = []\nexport default createRouter({ history: createWebHistory(), routes })`;

    // Build src children once per preset
    let srcChildren = [];
    if (presetName === "minimal") {
      srcChildren = [
        getFile("App.vue", isTS ? appVueTS : appVueJS),
        getFile(`main.${ext}`, mainBase([])),
      ];
    } else if (presetName === "advanced") {
      srcChildren = [
        getFolder("modules", [
          getFolder("auth", [
            getFolder("components"),
            getFolder("pages"),
            getFolder("services"),
          ]),
          getFolder("dashboard", [
            getFolder("components"),
            getFolder("pages"),
            getFolder("services"),
          ]),
        ]),
        getFolder("shared", [
          getFolder("components"),
          getFolder("composables"),
          getFolder("utils"),
        ]),
        getFolder("router", [
          getFile(`index.${ext}`, isTS ? routerIndexTS : routerIndexJS),
        ]),
        ...(isTS
          ? [
              getFolder("types", [
                getFile("api.ts", "export type ApiResponse = unknown"),
                getFile("user.ts", "export type User = { id: string }"),
              ]),
            ]
          : []),
        getFile("App.vue", isTS ? appVueTS : appVueJS),
        getFile(`main.${ext}`, mainBase(["import router from './router'"])),
      ];
    } else {
      // standard
      srcChildren = [
        getFolder("components"),
        getFolder("pages"),
        getFolder("router", [
          getFile(`index.${ext}`, isTS ? routerIndexTS : routerIndexJS),
        ]),
        getFile("App.vue", isTS ? appVueTS : appVueJS),
        getFile(`main.${ext}`, mainBase(["import router from './router'"])),
      ];
    }

    if (useTailwind) {
      // Tailwind v4.1 using Vite plugin
      srcChildren.push(getFile("index.css", '@import "tailwindcss";'));
    }

    children.push(getFolder("src", srcChildren));

    if (useTailwind) {
      children.push(
        getFile(
          isTS ? "vite.config.ts" : "vite.config.js",
          `import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [vue(), tailwindcss()],\n})`,
        ),
      );
    }

    if (isTS) {
      children.push(
        getFile(
          "tsconfig.json",
          JSON.stringify(
            { compilerOptions: { strict: true, jsx: "preserve" } },
            null,
            2,
          ),
        ),
      );
      children.push(
        getFile("env.d.ts", '/// <reference types="vite/client" />'),
      );
    }

    return children;
  },
};

// Angular Generator (TS-only)
const angularGenerator = {
  build: (presetName, config) => {
    const children = [];
    const useTailwind = config.styling === "tailwind";

    const appComponentTs = `import { Component } from '@angular/core'\n@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })\nexport class AppComponent { title = '${config.projectName}' }`;
    const appComponentHtml = `<main><h1>{{ title }}</h1></main>`;

    let srcChildren = [];
    if (presetName === "minimal") {
      srcChildren = [
        getFolder("app", [
          getFile("app.component.ts", appComponentTs),
          getFile("app.component.html", appComponentHtml),
          getFile("app.component.css", ":root{}"),
        ]),
        getFile(
          "main.ts",
          "import { bootstrapApplication } from '@angular/platform-browser';\nimport { AppComponent } from './app/app.component';\nbootstrapApplication(AppComponent);",
        ),
        getFile(
          "index.html",
          `<!doctype html><html><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><title>${config.projectName}</title></head><body><app-root></app-root></body></html>`,
        ),
      ];
    } else if (presetName === "advanced") {
      srcChildren = [
        getFolder("app", [
          getFolder("modules", [
            getFolder("auth", [
              getFolder("pages"),
              getFolder("components"),
              getFolder("services"),
              getFile("auth.routes.ts", "export const authRoutes = []"),
            ]),
            getFolder("dashboard", [
              getFolder("pages"),
              getFolder("components"),
              getFolder("services"),
              getFile(
                "dashboard.routes.ts",
                "export const dashboardRoutes = []",
              ),
            ]),
          ]),
          getFolder("shared", [
            getFolder("components"),
            getFolder("pipes"),
            getFolder("directives"),
            getFolder("services"),
          ]),
          getFolder("core", [
            getFolder("guards"),
            getFolder("interceptors"),
            getFolder("services"),
          ]),
          getFile("app.routes.ts", "export const routes = []"),
          getFile("app.component.ts", appComponentTs),
          getFile("app.component.html", appComponentHtml),
        ]),
        getFile(
          "main.ts",
          "import { bootstrapApplication } from '@angular/platform-browser';\nimport { AppComponent } from './app/app.component';\nbootstrapApplication(AppComponent);",
        ),
      ];
    } else {
      // standard
      srcChildren = [
        getFolder("app", [
          getFolder("components"),
          getFolder("pages"),
          getFolder("services"),
          getFile("app.routes.ts", "export const routes = []"),
          getFile("app.component.ts", appComponentTs),
          getFile("app.component.html", appComponentHtml),
        ]),
        getFile(
          "main.ts",
          "import { bootstrapApplication } from '@angular/platform-browser';\nimport { AppComponent } from './app/app.component';\nbootstrapApplication(AppComponent);",
        ),
        getFile(
          "index.html",
          `<!doctype html><html><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><title>${config.projectName}</title></head><body><app-root></app-root></body></html>`,
        ),
      ];
    }

    if (useTailwind) {
      // Angular Tailwind v4.1 via PostCSS plugin
      children.push(
        getFile(
          ".postcssrc.json",
          '{\n  "plugins": {\n    "@tailwindcss/postcss": {}\n  }\n}',
        ),
      );
      srcChildren.push(getFile("styles.css", '@import "tailwindcss";'));
    }

    children.push(getFolder("src", srcChildren));

    return children;
  },
};

// Astro Generator
const astroGenerator = {
  build: (presetName, config) => {
    const useTailwind = config.styling === "tailwind";
    const children = [];

    const indexAstro = `---\n${useTailwind ? "import '../styles.css'" : ""}\n---\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>${config.projectName}</title>\n  </head>\n  <body>\n    <main class=\"p-6\"><h1>${config.projectName}</h1></main>\n  </body>\n</html>`;

    const srcChildren = [
      getFolder("pages", [getFile("index.astro", indexAstro)]),
    ];
    if (useTailwind) {
      srcChildren.push(getFile("styles.css", '@import "tailwindcss";'));
    }

    children.push(getFolder("src", srcChildren));

    const astroCfg = useTailwind
      ? `// @ts-check\nimport { defineConfig } from 'astro/config'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  vite: {\n    plugins: [tailwindcss()],\n  },\n})`
      : `// @ts-check\nimport { defineConfig } from 'astro/config'\nexport default defineConfig({})`;

    children.push(getFile("astro.config.mjs", astroCfg));

    const pkg = {
      name: config.projectName + "-astro",
      private: true,
      dependencies: { astro: "latest" },
      devDependencies: {},
    };
    if (useTailwind) {
      pkg.devDependencies = {
        ...pkg.devDependencies,
        tailwindcss: "latest",
        "@tailwindcss/vite": "latest",
      };
    }
    children.push(getFile("package.json", JSON.stringify(pkg, null, 2)));

    return children;
  },
};

const nextjsGenerator = {
  build: (preset, config) => {
    const useTailwind = config.styling === "tailwind";
    const children = [];

    children.push(
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
          useTailwind ? '@import "tailwindcss";' : "/* global styles */",
        ),
      ]),
    );
    children.push(getFolder("components", [getFolder("ui")]));
    children.push(getFolder("lib", [getFile("utils.ts")]));

    const pkg = {
      name: config.projectName + "-nextjs",
      private: true,
      dependencies: {
        next: "latest",
        react: "latest",
        "react-dom": "latest",
      },
      devDependencies: { typescript: "latest" },
    };
    if (useTailwind) {
      pkg.devDependencies = {
        ...pkg.devDependencies,
        tailwindcss: "latest",
        postcss: "latest",
        "@tailwindcss/postcss": "latest",
      };
      children.push(
        getFile(
          "postcss.config.mjs",
          'const config = {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n};\nexport default config;',
        ),
      );
    }
    children.push(getFile("package.json", JSON.stringify(pkg, null, 2)));

    children.push(
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
    );

    return children;
  },
};

const reactGenerator = {
  build: (preset, config) => {
    const children = [];
    const isTS =
      (config.frontend?.language || config.language) !== "javascript";
    const useTailwind = config.styling === "tailwind";

    // Build based on preset folders
    preset.folders.forEach((folder) => {
      children.push(getFolder(folder));
    });

    const mainContent = `import React from "react";\nimport ReactDOM from "react-dom/client";\n${useTailwind ? "import './index.css'\n" : ""}import App from "./App";\n\nReactDOM.createRoot(document.getElementById("root")!).render(<App />);`;
    children.push(getFile(isTS ? "src/main.tsx" : "src/main.jsx", mainContent));
    children.push(
      getFile(
        isTS ? "src/App.tsx" : "src/App.jsx",
        "export default function App() { return <h1>Hello React!</h1>; }",
      ),
    );
    if (useTailwind) {
      children.push(getFile("src/index.css", '@import "tailwindcss";'));
      children.push(
        getFile(
          isTS ? "vite.config.ts" : "vite.config.js",
          `import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n})`,
        ),
      );
    }

    children.push(
      getFile(
        "package.json",
        JSON.stringify(
          {
            name: config.projectName + "-react",
            private: true,
            dependencies: { react: "latest", "react-dom": "latest" },
            devDependencies: {
              vite: "latest",
              ...(isTS ? { typescript: "latest" } : {}),
              ...(useTailwind
                ? {
                    tailwindcss: "latest",
                    "@tailwindcss/vite": "latest",
                    "@vitejs/plugin-react": "latest",
                  }
                : { "@vitejs/plugin-react": "latest" }),
            },
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
  html: htmlGenerator,
  vue: vueGenerator,
  angular: angularGenerator,
  vanilla: htmlGenerator,
  astro: astroGenerator,
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
  const presetName =
    config.frontend?.folderPreset || config.folderPreset || "standard";
  const frameworkId = config.frontend?.framework || config.frontend || "react";
  const generator = frameworks[frameworkId] || reactGenerator;

  // For React/Next use object presets; others use name
  if (frameworkId === "react" || frameworkId === "nextjs") {
    const presetObj = getPreset(presetName);
    return generator.build(presetObj, config);
  }

  return generator.build(presetName, config);
}
