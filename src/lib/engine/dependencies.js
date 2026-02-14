/**
 * Centralized registry for all dependencies.
 * Pipelinines and injectors use this to ensure consistent versions and naming.
 */
export const dependencyMap = {
  // Styling
  tailwind: {
    dev: ["tailwindcss", "postcss", "autoprefixer", "@tailwindcss/vite"],
  },

  // Frontend Utils
  "react-query": {
    prod: ["@tanstack/react-query"],
  },
  axios: {
    prod: ["axios"],
  },
  lucide: {
    prod: ["lucide-react"],
  },
  "framer-motion": {
    prod: ["framer-motion"],
  },

  // Backend Core
  express: {
    prod: ["express"],
  },

  // Auth
  jwt: {
    prod: ["jsonwebtoken", "bcryptjs"],
  },

  // Database / ORM
  prisma: {
    dev: ["prisma"],
    prod: ["@prisma/client"],
  },
  mongoose: {
    prod: ["mongoose"],
  },

  // Utils
  multer: {
    prod: ["multer"],
  },
  cors: {
    prod: ["cors"],
  },
  dotenv: {
    prod: ["dotenv"],
  },
};

/**
 * Resolves all dependencies for a given config.
 */
export function resolveDependencies(config) {
  const prod = new Set();
  const dev = new Set();

  function add(key) {
    const entry = dependencyMap[key];
    if (entry) {
      if (entry.prod) entry.prod.forEach((d) => prod.add(d));
      if (entry.dev) entry.dev.forEach((d) => dev.add(d));
    }
  }

  // Frontend Additions
  if (config.frontend) {
    if (config.styling === "tailwind") add("tailwind");
    if (config.frontend.extraPackages) {
      config.frontend.extraPackages.forEach(add);
    }
  }

  // Backend Additions
  if (config.backend) {
    add(config.backend.framework);
    if (config.backend.auth === "jwt") add("jwt");
    if (config.backend.orm) add(config.backend.orm);
    if (config.backend.database) add(config.backend.database);
    if (config.backend.fileUploads) add("multer");
    add("cors");
    add("dotenv");
  }

  return {
    dependencies: Array.from(prod),
    devDependencies: Array.from(dev),
  };
}
