import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves the base structure for an Astro project.
 */
export function astroFramework(config) {
  return [
    getFolder("src", [
      getFolder("layouts", [
        getFile(
          "BaseLayout.astro",
          `
---
const logoUrl = import.meta.env.PUBLIC_LOGOURL || "https://stack-struct.vercel.app/NewLogo.png";
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>StackStruct Astro App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
      }

      body {
        min-height: 100vh;
        background: radial-gradient(circle at 20% 20%, #1e293b, #020617);
        color: #f1f5f9;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
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

      .container {
        text-align: center;
        padding: 40px 20px;
      }

      .logo {
        width: 140px;
        height: 140px;
        margin: 0 auto 40px;
      }

      .logo img {
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
        font-size: 24px;
        font-weight: 500;
        color: #e2e8f0;
      }

      p {
        margin-top: 10px;
        font-size: 14px;
        color: #94a3b8;
      }

      footer {
        margin-top: 60px;
        font-size: 12px;
        color: #64748b;
      }
    </style>
  </head>
  <body>
    <div class="background">
      <div class="blur blur-1"></div>
      <div class="blur blur-2"></div>
    </div>
    <slot />
  </body>
</html>
          `.trim(),
        ),
      ]),

      getFolder("pages", [
        getFile(
          "index.astro",
          `
---
import BaseLayout from "../layouts/BaseLayout.astro";
const logoUrl = import.meta.env.PUBLIC_LOGOURL || "https://stack-struct.vercel.app/NewLogo.png";
---

<BaseLayout>
  <main class="container">
    <div class="logo">
      <img src={logoUrl} alt="StackStruct Logo" />
    </div>

    <h1>STACK-STRUCT</h1>
    <h2>Your Astro project is ready.</h2>
    <p>Generated professionally with StackStruct.</p>

    <footer>
      Built with Astro · Powered by StackStruct © 2026
    </footer>
  </main>
</BaseLayout>
          `.trim(),
        ),
      ]),
    ]),

    getFile(
      "astro.config.mjs",
      `
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stack-struct.vercel.app',
});
      `.trim(),
    ),

    getFile(
      "package.json",
      JSON.stringify(
        {
          name: "stackstruct-astro-app",
          private: true,
          version: "0.0.1",
          type: "module",
          scripts: {
            dev: "astro dev",
            build: "astro build",
            preview: "astro preview",
          },
          dependencies: {
            astro: "^4.0.0",
          },
        },
        null,
        2,
      ),
    ),
  ];
}
