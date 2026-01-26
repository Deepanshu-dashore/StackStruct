import { getFile, getFolder } from "./helpers";

// --- Shared Content ---

const jwtMiddlewareContent = `
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }

    return next();
};
`;

// --- Helpers ---

const getBaseBackendFolders = (backendConfig) => {
  const folders = [];

  if (backendConfig.auth === "jwt") {
    folders.push(
      getFolder("middleware", [
        getFile("verifyToken.ts", jwtMiddlewareContent),
      ]),
    );
  }

  if (backendConfig.orm === "prisma") {
    folders.push(
      getFolder("prisma", [
        getFile("schema.prisma", "// This is your Prisma schema file"),
      ]),
    );
  }

  if (backendConfig.orm === "mongoose") {
    folders.push(getFolder("models"));
  }

  if (backendConfig.fileUploads) {
    folders.push(getFolder("uploads"));
    folders.push(
      getFolder("middleware", [
        getFile("multer.config.ts", "// Multer config here"),
      ]),
    );
  }

  return folders;
};

// --- Framework Generators ---

const expressGenerator = {
  build: (preset, config) => {
    const children = [];
    const backend = config.backend;
    const isTS = backend.language === "typescript";
    const ext = isTS ? "ts" : "js";

    if (preset === "minimal") {
      children.push(
        getFolder("src", [
          ...getBaseBackendFolders(backend),
          getFile(`server.${ext}`, 'console.log("Hello Express Backend");'),
        ]),
      );
    } else if (preset === "advanced") {
      children.push(
        getFolder("src", [
          getFolder("config", [getFile(`env.${ext}`), getFile(`db.${ext}`)]),
          getFolder("modules", [
            getFolder("user", [
              getFile(`user.controller.${ext}`),
              getFile(`user.service.${ext}`),
              getFile(`user.routes.${ext}`),
              getFile(`user.schema.${ext}`),
            ]),
            getFolder("auth", [
              getFile(`auth.controller.${ext}`),
              getFile(`auth.service.${ext}`),
              getFile(`auth.routes.${ext}`),
              getFile(`auth.schema.${ext}`),
            ]),
          ]),
          getFolder("middleware", [
            getFile(`errorHandler.${ext}`),
            getFile(`rateLimiter.${ext}`),
          ]),
          getFolder("lib", [getFile(`logger.${ext}`)]),
          ...getBaseBackendFolders(backend),
          getFile(`app.${ext}`),
          getFile(`server.${ext}`),
        ]),
      );
    } else {
      // Standard
      children.push(
        getFolder("src", [
          getFolder("controllers"),
          getFolder("services"),
          getFolder("routes"),
          ...getBaseBackendFolders(backend),
          getFile(`server.${ext}`),
        ]),
      );
    }

    children.push(
      getFile(
        "package.json",
        JSON.stringify(
          {
            name: config.projectName + "-backend",
            private: true,
            dependencies: { express: "latest" },
            devDependencies: isTS
              ? { typescript: "latest", "@types/express": "latest" }
              : {},
          },
          null,
          2,
        ),
      ),
    );

    children.push(
      getFile(".env.example", "PORT=3001\nJWT_SECRET=your_secret_key"),
    );

    if (isTS) {
      children.push(
        getFile(
          "tsconfig.json",
          JSON.stringify(
            { compilerOptions: { outDir: "dist", rootDir: "src" } },
            null,
            2,
          ),
        ),
      );
    }

    return children;
  },
};

const frameworks = {
  express: expressGenerator,
  // nestjs, fastify etc would go here
};

export function generateBackendStructure(config) {
  const framework = frameworks[config.backend.framework] || expressGenerator;
  return framework.build(config.backend.folderPreset, config);
}
