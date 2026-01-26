/**
 * Validates the project configuration before generation.
 * @param {import('./types').AppConfig} config
 */
export function validateConfig(config) {
  if (!config.projectName || !config.projectName.trim()) {
    throw new Error("Project name is required");
  }

  if (config.monorepo && config.projectType !== "frontend-backend") {
    throw new Error("Monorepo is only valid for full-stack projects");
  }

  if (config.projectType !== "backend-only" && !config.frontend) {
    throw new Error("Frontend configuration is missing");
  }

  if (config.projectType !== "frontend-only" && !config.backend) {
    throw new Error("Backend configuration is missing");
  }

  if (
    config.frontend?.framework === "nextjs" &&
    config.frontend.language === "javascript"
  ) {
    console.warn("Next.js is recommended with TypeScript");
  }
}
