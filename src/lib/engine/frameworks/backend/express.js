import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves the base structure for an Express backend.
 */
export function expressFramework(config) {
  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";

  return [
    getFolder("src", [
      getFile(
        `index.${ext}`,
        `
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
      `.trim(),
      ),
    ]),
    getFile(".env", "PORT=3001\nDATABASE_URL=mongodb://localhost:27017/mydb"),
    getFile(".gitignore", "node_modules\n.env\ndist\n.DS_Store"),
  ];
}
