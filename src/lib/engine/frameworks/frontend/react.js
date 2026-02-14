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
  const logoUrl =  ${logoUrl}; // Placeholder logo or use local

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="flex items-center justify-center flex-col gap-6 mb-16">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute inset-0 border border-gray-700/60 rounded-full animate-[spin_4s_linear_infinite]">
                 <div className="h-2.5 w-2.5 bg-gray-400 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
              </div>
              
              {/* Inner Ring */}
              <div className="absolute inset-4 border border-gray-700/60 rounded-full animate-[spin_4s_linear_infinite_reverse]">
                 <div className="h-2.5 w-2.5 bg-gray-400 rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
              </div>

              {/* Logo */}
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="StackStruct Logo"
                  className="h-26 w-26 object-contain rounded-full p-3  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              ):(<div className="relative z-10 bg-gray-900 rounded-full p-4">
                 <span className="text-4xl">🚀</span>
              </div>)}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Stack-Struct App
            </h1>
          </div>
          
          <h2 className="text-xl font-medium mb-4 text-gray-200">
            Your project is ready.
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Start building inside <code className="text-indigo-400 font-mono bg-indigo-500/10 px-1 py-0.5 rounded">src/</code>.
            This structure was generated using StackStruct.
          </p>

          <div className="mt-8 text-sm text-gray-500 rounded-lg p-4 bg-gray-900/50 border border-gray-800">
            Edit <code className="text-gray-300">App.${ext}</code> to get started.
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-600">
        Generated with StackStruct
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
        "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
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
    <title>My App</title>
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
