/**
 * Validates and cleans the configuration object.
 * This is the first step in the pipeline.
 */
export function normalizeConfig(config) {
  const cleanConfig = { ...config };

  // Ensure project name exists
  if (!cleanConfig.projectName || !cleanConfig.projectName.trim()) {
    cleanConfig.projectName = "my-project";
  }

  // Handle Backend Presence
  if (cleanConfig.projectType === "frontend-only") {
    cleanConfig.backend = null;
  } else if (!cleanConfig.backend || !cleanConfig.backend.framework) {
    if (cleanConfig.projectType === "frontend-backend") {
      // If fullstack but backend missing, default or warn
      cleanConfig.backend = { framework: "express", language: "javascript" };
    } else {
      cleanConfig.backend = null;
    }
  }

  // Handle Frontend Presence
  if (cleanConfig.projectType === "backend-only") {
    cleanConfig.frontend = null;
  } else if (!cleanConfig.frontend || !cleanConfig.frontend.framework) {
    cleanConfig.frontend = { framework: "react", language: "javascript" };
  }

  // Feature Validation
  if (cleanConfig.backend?.auth === "jwt" && !cleanConfig.backend.database) {
    console.warn(
      "JWT Auth usually requires a database. Proceeding with boilerplate only.",
    );
  }

  // Fullstack Flags
  if (cleanConfig.projectType === "frontend-backend") {
    if (cleanConfig.sharedLogic === undefined) cleanConfig.sharedLogic = true;
    if (cleanConfig.docker === undefined) cleanConfig.docker = false;
  } else {
    cleanConfig.sharedLogic = false;
    cleanConfig.docker = false;
  }

  return cleanConfig;
}
