import { Icons } from "@/components/icons";
import { Layers, Monitor, Server } from "lucide-react";

export const projectTypes = [
  {
    id: "frontend-backend",
    label: "Frontend + Backend",
    icon: "lucide:layers",
  },
  { id: "frontend-only", label: "Frontend only", icon: "lucide:monitor" },
  { id: "backend-only", label: "Backend only", icon: "lucide:server" },
];

export const frontendFrameworks = [
  { id: "nextjs", label: "Next.js", icon: "logos:nextjs-icon" },
  { id: "react", label: "React (Vite)", icon: "logos:react" },
  { id: "vue", label: "Vue", icon: "logos:vue" },
  { id: "sveltekit", label: "SvelteKit", icon: "logos:svelte-icon" },
  { id: "angular", label: "Angular", icon: "logos:angular-icon" },
];

export const backendFrameworks = [
  { id: "express", label: "Express", icon: "logos:express" },
  { id: "nestjs", label: "NestJS", icon: "logos:nestjs" },
  { id: "fastify", label: "Fastify", icon: "logos:fastify-icon" },
  { id: "hapi", label: "Hapi", icon: "logos:hapi" },
  { id: "koa", label: "Koa", icon: "logos:koa" },
];

export const languages = [
  { id: "typescript", label: "TypeScript", icon: "logos:typescript-icon" },
  { id: "javascript", label: "JavaScript", icon: "logos:javascript" },
];

export const stylingOptions = [
  { id: "tailwind", label: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { id: "css-modules", label: "CSS Modules", icon: "lucide:file-code" },
  {
    id: "styled-components",
    label: "Styled Components",
    icon: "logos:styled-components",
  },
  { id: "none", label: "None", icon: "lucide:x" },
];

export const componentLibraries = [
  { id: "shadcn", label: "ShadCN/UI", icon: "simple-icons:shadcnui" },
  { id: "mui", label: "Material UI", icon: "logos:material-ui" },
  { id: "chakra", label: "Chakra UI", icon: "logos:chakra-ui" },
  { id: "none", label: "None", icon: "lucide:x" },
];

export const folderPresets = [
  { id: "minimal", label: "Minimal", icon: "lucide:minus" },
  { id: "standard", label: "Standard", icon: "lucide:check" },
  { id: "advanced", label: "Advanced", icon: "lucide:plus" },
];

export const authOptions = [
  { id: "none", label: "None", icon: "lucide:x" },
  { id: "jwt", label: "JWT Auth Routes", icon: "logos:jwt-icon" },
  { id: "oauth", label: "OAuth 2.0 Stubs", icon: "lucide:shield-lock" },
];

export const databaseOptions = [
  { id: "none", label: "None", icon: "lucide:x" },
  { id: "mongodb", label: "MongoDB", icon: "logos:mongodb-icon" },
  { id: "postgresql", label: "PostgreSQL", icon: "logos:postgresql" },
  { id: "sqlite", label: "SQLite", icon: "logos:sqlite" },
];

export const ormOptions = [
  { id: "none", label: "None", icon: "lucide:x" },
  { id: "prisma", label: "Prisma", icon: "logos:prisma" },
  { id: "mongoose", label: "Mongoose", icon: "logos:mongoose" },
  { id: "drizzle", label: "Drizzle", icon: "logos:drizzle-icon" },
];
