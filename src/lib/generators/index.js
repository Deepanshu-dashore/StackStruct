import { generateProject } from "../engine/orchestrator";
import { generateBashScript } from "../engine/generators/bash";

/**
 * Legacy wrapper for the new Project Generation Engine.
 * Redirects to the modular pipeline architecture.
 */
export function generateFileTree(config) {
  return generateProject(config);
}

/**
 * Legacy wrapper for the new Bash Script Generator.
 */
export function generateScript(tree, config) {
  return generateBashScript(tree, config);
}

// Re-export new patterns for transitional use
export { generateProject, generateBashScript };
