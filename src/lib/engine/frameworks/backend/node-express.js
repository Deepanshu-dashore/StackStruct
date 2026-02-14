import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Node + Express base backend structure
 */
export function expressFramework(config) {
  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";

  return [
    getFolder("src", [
      // =========================
      // ENTRY POINT
      // =========================
      getFile(
        `index.${ext}`,
        `
import app from './app.${ext}';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
        `.trim(),
      ),

      // =========================
      // APP CONFIGURATION
      // =========================
      getFile(
        `app.${ext}`,
        `
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes/index.${ext}';
import errorHandler from './middlewares/error.middleware.${ext}';

dotenv.config();

const app = express();

// Core Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// Global Error Handler
app.use(errorHandler);

export default app;
        `.trim(),
      ),

      // =========================
      // ROUTES
      // =========================
      getFolder("routes", [
        getFile(
          `index.${ext}`,
          `
import { Router } from 'express';

const router = Router();

router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date()
  });
});

export default router;
          `.trim(),
        ),
      ]),

      // =========================
      // MIDDLEWARES
      // =========================
      getFolder("middlewares", [
        getFile(
          `error.middleware.${ext}`,
          `
export default function errorHandler(err, req, res, next) {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
}
          `.trim(),
        ),
      ]),

      // =========================
      // UTILITIES
      // =========================
      getFolder("utils", [
        getFile(
          `apiResponse.${ext}`,
          `
export const apiResponse = (res, options) => {
  const {
    success = true,
    message = 'Success',
    data = null,
    statusCode = 200
  } = options;

  return res.status(statusCode).json({
    success,
    message,
    data
  });
};
          `.trim(),
        ),
      ]),
    ]),

    // =========================
    // ROOT FILES
    // =========================
    getFile(
      ".env",
      `
PORT=3001
      `.trim(),
    ),

    getFile(
      "package.json",
      JSON.stringify(
        {
          name: "stackstruct-express-backend",
          version: "1.0.0",
          type: "module",
          scripts: {
            dev: "nodemon src/index.js",
            start: "node src/index.js",
          },
          dependencies: {
            express: "^4.18.2",
            cors: "^2.8.5",
            dotenv: "^16.4.0",
            morgan: "^1.10.0",
          },
          devDependencies: {
            nodemon: "^3.0.0",
          },
        },
        null,
        2,
      ),
    ),

    getFile(".gitignore", "node_modules\n.env\ndist\n.DS_Store"),
  ];
}
