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
  commands.push("");

  // Tailwind v4.1 guidance (commands only, not executed)
  const frameworkId = config.frontend?.framework || config.frontend || 'react';
  const usingTailwind = config.styling === 'tailwind';
  const tailwindInstall = [];
  let runCmd = '';
  let tailwindNotes = [];

  if (usingTailwind) {
    switch (frameworkId) {
      case 'react':
      case 'vue':
      case 'astro':
        tailwindInstall.push('npm install tailwindcss @tailwindcss/vite');
        runCmd = 'npm run dev';
        break;
      case 'nextjs':
        tailwindInstall.push('npm install tailwindcss @tailwindcss/postcss postcss');
        runCmd = 'npm run dev';
        break;
      case 'angular':
        tailwindInstall.push('npm install tailwindcss @tailwindcss/postcss postcss --force');
        runCmd = 'ng serve';
        tailwindNotes.push('Note: Angular CLI setup required for ng serve. This scaffold provides structure only.');
        break;
      default:
        break;
    }

    commands.push('# Tailwind v4.1 setup tips (not executed)');
    tailwindInstall.forEach((c) => commands.push(`echo "To add Tailwind manually: ${c}"`));
    if (runCmd) commands.push(`echo "Start dev server: ${runCmd}"`);
    tailwindNotes.forEach((n) => commands.push(`echo "${n}"`));
  }

  // We return the components for the UI to display
  return {
    projectName: config.projectName,
    scaffoldingCommands: [
      ...generateDirs(tree, ""),
      ...generateFiles(tree, ""),
    ],
    installCommands: installCommands,
    tailwind: usingTailwind
      ? {
          framework: frameworkId,
          install: tailwindInstall,
          run: runCmd,
          notes: tailwindNotes,
        }
      : undefined,
    finalScript: commands.join("\n"),
  };
}
