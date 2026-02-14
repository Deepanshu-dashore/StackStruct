/**
 * Validates the project configuration before generation.
 * @param {import('./types').AppConfig} config
 */
export function validateConfig(config) {
  if (!config.projectName || !config.projectName.trim()) {
    alert("Project name is required");
  }

  if (config.monorepo && config.projectType !== "frontend-backend") {
    alert("Monorepo is only valid for full-stack projects");
  }

  if (config.projectType !== "backend-only" && !config.frontend) {
    alert("Frontend configuration is missing");
  }

  if (config.projectType !== "frontend-only" && !config.backend) {
    alert("Backend configuration is missing");
  }

  if (
    config.frontend?.framework === "nextjs" &&
    config.frontend.language === "javascript"
  ) {
    console.warn("Next.js is recommended with TypeScript");
  }
}
