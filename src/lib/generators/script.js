import { generateDirs, generateFiles } from "./helpers";

/**
 * Generates the full bash script based on the file tree and config.
 * @param {import('./helpers').FolderNode} tree
 * @param {import('./validation').AppConfig} config
 * @returns {Object}
 */
export function generateScript(tree, config) {
  const commands = [];

  commands.push("#!/usr/bin/env bash");
  commands.push("# StackStruct Project Generation Script");
  commands.push("# Generated on " + new Date().toISOString());
  commands.push("set -e"); // Exit on error
  commands.push("");

  commands.push(`echo "🚀 Scaffolding project: ${config.projectName}..."`);
  commands.push(`mkdir -p "${tree.name}"`);
  commands.push(`cd "${tree.name}"`);
  commands.push("");

  // 1. Create directory structure
  commands.push("# 1. Creating directory structure...");
  commands.push(...generateDirs(tree, ""));
  commands.push("");

  // 2. Create files
  commands.push("# 2. Populating files...");
  commands.push(...generateFiles(tree, ""));
  commands.push("");

  // 3. Install dependencies
  commands.push("# 3. Installing dependencies...");

  const installCommands = [];

  if (config.projectType !== "backend-only") {
    const feMsg = 'echo "📦 Installing frontend dependencies..."';
    const feCmd = config.monorepo
      ? "(cd frontend && npm install)"
      : "npm install";
    installCommands.push(`${feMsg}\n${feCmd}`);
  }

  if (config.projectType !== "frontend-only") {
    const beMsg = 'echo "📦 Installing backend dependencies..."';
    let beCmd;
    if (config.monorepo) {
      beCmd = "(cd backend && npm install)";
    } else if (config.projectType === "frontend-backend") {
      beCmd = "(cd server && npm install)";
    } else {
      beCmd = "npm install";
    }
    installCommands.push(`${beMsg}\n${beCmd}`);
  }

  commands.push(...installCommands);
  commands.push("");

  commands.push("# -------------------------------------");
  commands.push('echo "✅ Project scaffolded successfully!"');
  commands.push(`echo "Navigate to your project: cd ${config.projectName}"`);

  // We return the components for the UI to display
  return {
    projectName: config.projectName,
    scaffoldingCommands: [
      ...generateDirs(tree, ""),
      ...generateFiles(tree, ""),
    ],
    installCommands: installCommands,
    finalScript: commands.join("\n"),
  };
}
