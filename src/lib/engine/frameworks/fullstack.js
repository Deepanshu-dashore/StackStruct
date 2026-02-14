import { getFolder, getFile } from "../utils/tree-nodes";

/**
 * Resolves shared fullstack components and root-level orchestrations.
 */
export function fullstackFramework(config) {
  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";
  const nodes = [];

  // 1. Shared logic if enabled
  if (config.sharedLogic) {
    nodes.push(
      getFolder("shared", [
        getFile(
          `types.${ext}`,
          isTS
            ? `// Shared TypeScript types for both frontend and backend\nexport interface User {\n  id: string;\n  name: string;\n  email: string;\n}`
            : `// Shared constants for both frontend and backend\nexport const VERSION = "1.0.0";`,
        ),
        getFile(
          `utils.${ext}`,
          `export const formatDate = (date) => new Date(date).toLocaleDateString();`,
        ),
      ]),
    );
  }

  // 2. Docker orchestration
  if (config.docker) {
    nodes.push(
      getFile(
        "docker-compose.yml",
        `
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=\${DATABASE_URL}
      `.trim(),
      ),
    );
  }

  // 3. CI/CD (GitHub Actions)
  if (config.fullstackPreset !== "custom") {
    nodes.push(
      getFolder(".github", [
        getFolder("workflows", [
          getFile(
            "main.yml",
            `
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
                  `.trim(),
          ),
        ]),
      ]),
    );
  }

  // 4. Root Level Boilerplate
  nodes.push(
    getFile(
      "README.md",
      `
# ${config.projectName}

Generated with **StackStruct**. This is a full-stack project with both frontend and backend components.

## Getting Started

1. Install dependencies at the root:
   \`\`\`bash
   npm install
   \`\`\`

2. Set up environment variables:
   \`\`\`bash
   cp .env.example .env
   \`\`\`

3. Run development mode:
   \`\`\`bash
   npm run dev
   \`\`\`

${config.docker ? "## Docker Support\n\nRun the entire stack with Docker:\n```bash\ndocker-compose up\n```" : ""}
      `.trim(),
    ),
  );

  nodes.push(
    getFile(
      ".env.example",
      "PORT=3000\nDATABASE_URL=mongodb://localhost:27017/mydb\nNODE_ENV=development",
    ),
  );
  nodes.push(
    getFile(".gitignore", "node_modules/\n.env\n.DS_Store\ndist/\nbuild/"),
  );

  return nodes;
}
