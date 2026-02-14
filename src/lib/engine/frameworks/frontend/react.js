import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves the base structure for a React + Vite project.
 */
export function reactFramework(config) {
  const isTS =
    config.language === "typescript" || config.language === undefined;
  const ext = isTS ? "tsx" : "jsx";
  const mainExt = isTS ? "ts" : "js";
  const logoUrl = process.env.LOGOURL;

  return [
    getFolder("src", [
      getFile(
        `App.${ext}`,
        `
export default function App() {
  const logoUrl = "https://stack-struct.vercel.app/NewLogo.png"; // Placeholder logo or use local

  return (
    <div className="min-h-screen bg-gray-950/60 text-gray-100 flex flex-col">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
        {/* Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse-slow ml-20"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-cyan-900/10 blur-[100px] animate-float"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: \`radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)\`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 relative z-20">
        <div className="text-center max-w-xl">
          <div className="flex items-center justify-center flex-col gap-6 mb-14">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute inset-0 border border-gray-700/70 rounded-full animate-[spin_4s_linear_infinite]">
                <div className="h-2.5 w-2.5 bg-gray-400 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
              </div>

              {/* Inner Ring */}
              <div className="absolute inset-4 border border-gray-700/70 rounded-full animate-[spin_4s_linear_infinite_reverse]">
                <div className="h-2.5 w-2.5 bg-gray-400 rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
              </div>

              {/* Logo */}
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="StackStruct Logo"
                  className="h-26 w-26 object-contain rounded-full p-3  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              ) : (<div className="relative z-10 bg-gray-900 rounded-full p-4">
                <span className="text-4xl">🚀</span>
              </div>)}
            </div>

            <h1 className="text-4xl uppercase font-bold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Stack-Struct
            </h1>
          </div>

          <h2 className="text-4xl font-medium mb-4 text-gray-200">
            Your project is ready.
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Your application successfully created using StackStruct.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="https://github.com/StackStruct/StackStruct" target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer font-semibold text-sm text-gray-900 flex gap-2 items-center rounded-full p-3 h-full px-6 bg-white backdrop-blur-xs border border-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
                </svg>
                Git hub
              </button>
            </a>
            <a href="https://stack-struct.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer font-semibold text-sm text-white/60 rounded-full p-4 px-6 bg-gray-800/10 backdrop-blur-xs border border-white/20">
                View Documentation
              </button>
            </a>
            <a href="https://linkedin.com/in/deepanshu-dashore" target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer font-semibold text-sm text-white flex gap-2 items-center rounded-full px-3.5 h-full bg-gray-800/10 backdrop-blur-xs border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t relative z-20 border-gray-800 py-6 text-center flex justify-between px-20 text-xs text-gray-600">
        Generated with StackStruct © 2026 StackStruct. All rights reserved.<span className="text-white/60"> Built with <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className="inline-block animate-pulse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4z"></path>
        </svg> by Deepanshu Dashore</span>
      </footer>
    </div>
  );
}
        `.trim(),
      ),
      getFile(
        `main.${mainExt}x`,
        `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
      `.trim(),
      ),
      getFile(
        "index.css",
        `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-pulse-slow {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
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
    <title>Stack-Struct App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.${mainExt}x"></script>
  </body>
</html>
    `.trim(),
    ),
    getFile(
      "package.json",
      JSON.stringify(
        {
          name: "my-app",
          private: true,
          version: "0.0.0",
          type: "module",
          scripts: {
            dev: "vite",
            build: "vite build",
            preview: "vite preview",
          },
        },
        null,
        2,
      ),
    ),
  ];
}
