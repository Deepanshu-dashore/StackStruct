import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves base structure for a pure Node.js backend (no framework).
 */
export function nodejsFramework(config) {
  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";

  return [
    getFolder("src", [
      getFile(
        `index.${ext}`,
        `
import http from 'http';

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  if (req.url === '/api/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', timestamp: new Date() }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
        `.trim(),
      ),
    ]),
    getFile(
      "package.json",
      JSON.stringify(
        {
          name: "node-backend",
          version: "1.0.0",
          type: "module",
          scripts: {
            start: `node src/index.${ext}`,
          },
        },
        null,
        2,
      ),
    ),
    getFile(".gitignore", "node_modules\n.env\ndist"),
  ];
}
