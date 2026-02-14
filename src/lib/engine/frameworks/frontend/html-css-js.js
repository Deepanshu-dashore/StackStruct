import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves the base structure for a Vanilla HTML/CSS/JS project.
 */
export function htmlFramework(config) {
  const logoUrl =
    process.env.LOGOURL || "https://stack-struct.vercel.app/NewLogo.png";

  return [
    getFolder("assets", []),

    getFolder("css", [
      getFile(
        "style.css",
        `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  background: radial-gradient(circle at 20% 20%, #1e293b, #020617);
  color: #f1f5f9;
  min-height: 100vh;
  overflow-x: hidden;
}

.background-blur {
  position: fixed;
  inset: 0;
  z-index: -1;
}

.blur-1,
.blur-2 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
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
  padding: 80px 20px;
}

.logo-wrapper {
  position: relative;
  width: 160px;
  height: 160px;
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
  justify-content: center;
  gap: 20px;
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
  background: #ffffff;
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
  margin-top: 80px;
  font-size: 12px;
  color: #64748b;
}
        `.trim(),
      ),
    ]),

    getFolder("js", [
      getFile(
        "script.js",
        `
document.addEventListener("DOMContentLoaded", () => {
  console.log("StackStruct project initialized.");
});
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
  <title>StackStruct App</title>
  <link rel="stylesheet" href="css/style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>

  <div class="background-blur">
    <div class="blur-1"></div>
    <div class="blur-2"></div>
  </div>

  <div class="container">
    <div class="logo-wrapper">
      <img src="${logoUrl}" alt="StackStruct Logo" />
    </div>

    <h1>STACK-STRUCT</h1>
    <h2>Your project is ready.</h2>
    <p>Your application was successfully generated using StackStruct.</p>

    <div class="buttons">
      <button class="primary" onclick="window.open('https://github.com/Deepanshu-dashore/StackStruct','_blank')">
        GitHub
      </button>
      <button class="secondary" onclick="window.open('https://stack-struct.vercel.app/','_blank')">
        Documentation
      </button>
    </div>

    <footer>
      Generated with StackStruct © 2026
    </footer>
  </div>

  <script src="js/script.js"></script>
</body>
</html>
      `.trim(),
    ),

    getFile(
      "package.json",
      JSON.stringify(
        {
          name: "stackstruct-html-app",
          version: "1.0.0",
          private: true,
          scripts: {
            start: "live-server .",
          },
          devDependencies: {
            "live-server": "^1.2.2",
          },
        },
        null,
        2,
      ),
    ),
  ];
}
