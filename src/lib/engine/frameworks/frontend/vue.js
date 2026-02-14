import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves the base structure for a Vue + Vite project.
 */
export function vueFramework(config) {
  const isTS =
    config.language === "typescript" || config.language === undefined;

  const ext = isTS ? "vue" : "vue";
  const mainExt = isTS ? "ts" : "js";

  return [
    getFolder("src", [
      getFile(
        "App.vue",
        `
<script setup>
const logoUrl = import.meta.env.VITE_LOGOURL || "https://stack-struct.vercel.app/NewLogo.png"
</script>

<template>
  <div class="app">
    <div class="background">
      <div class="blur blur-1"></div>
      <div class="blur blur-2"></div>
    </div>

    <main class="container">
      <div class="logo-wrapper">
        <img :src="logoUrl" alt="StackStruct Logo" />
      </div>

      <h1>STACK-STRUCT</h1>
      <h2>Your project is ready.</h2>
      <p>Your Vue application was successfully generated using StackStruct.</p>

      <div class="buttons">
        <a href="https://github.com/Deepanshu-dashore/StackStruct" target="_blank">
          <button class="primary">GitHub</button>
        </a>
        <a href="https://stack-struct.vercel.app/" target="_blank">
          <button class="secondary">Documentation</button>
        </a>
      </div>
    </main>

    <footer>
      Generated with StackStruct © 2026
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

.app {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, #1e293b, #020617);
  color: #f1f5f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 40px 20px;
}

.background {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.blur {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.25;
  animation: float 8s ease-in-out infinite;
}

.blur-1 {
  background: #2563eb;
  top: -100px;
  left: -100px;
}

.blur-2 {
  background: #7c3aed;
  bottom: -100px;
  right: -100px;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

.logo-wrapper {
  width: 150px;
  height: 150px;
  margin: 0 auto 40px;
}

.logo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
  background: #0f172a;
  padding: 20px;
}

h1 {
  font-size: 40px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  margin-top: 20px;
  font-size: 26px;
  font-weight: 500;
  color: #e2e8f0;
}

p {
  margin-top: 10px;
  color: #94a3b8;
  font-size: 14px;
}

.buttons {
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 12px 24px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;
}

.primary {
  background: white;
  color: #0f172a;
}

.primary:hover {
  transform: translateY(-2px);
}

.secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: #cbd5e1;
}

.secondary:hover {
  border-color: white;
}

footer {
  margin-top: 60px;
  font-size: 12px;
  color: #64748b;
}
</style>
        `.trim(),
      ),

      getFile(
        `main.${mainExt}`,
        `
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
        `.trim(),
      ),
    ]),

    getFile(
      "index.html",
      `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StackStruct Vue App</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.${mainExt}"></script>
  </body>
</html>
      `.trim(),
    ),

    getFile(
      "package.json",
      JSON.stringify(
        {
          name: "stackstruct-vue-app",
          private: true,
          version: "0.0.0",
          type: "module",
          scripts: {
            dev: "vite",
            build: "vite build",
            preview: "vite preview",
          },
          dependencies: {
            vue: "^3.4.0",
          },
          devDependencies: {
            vite: "^5.0.0",
            "@vitejs/plugin-vue": "^5.0.0",
          },
        },
        null,
        2,
      ),
    ),
  ];
}
