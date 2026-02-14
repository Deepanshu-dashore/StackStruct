'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FrameworkCard from './FrameworkCard';
import stackData from "@/lib/data/stack.json";

const categories = ["All", "Frontend", "Backend", "Fullstack", "Monorepo"];

// Fullstack Combinations - Production-Ready Stacks
const fullstackCombinations = [
    // MERN Stack
    {
        name: "MERN Stack",
        icon: "logos:react",
        secondaryIcon: "logos:mongodb-icon",
        type: "fullstack",
        desc: "MongoDB + Express + React + Node.js - The most popular full-stack JavaScript combination for modern web apps."
    },
    // MEVN Stack
    {
        name: "MEVN Stack",
        icon: "logos:vue",
        secondaryIcon: "logos:mongodb-icon",
        type: "fullstack",
        desc: "MongoDB + Express + Vue.js + Node.js - Progressive framework with flexible NoSQL database."
    },
    // PERN Stack
    {
        name: "PERN Stack",
        icon: "logos:react",
        secondaryIcon: "logos:postgresql",
        type: "fullstack",
        desc: "PostgreSQL + Express + React + Node.js - Enterprise-grade stack with relational database reliability."
    },
    // Next.js Full Stack with MongoDB
    {
        name: "Next.js + MongoDB",
        icon: "logos:nextjs-icon",
        secondaryIcon: "logos:mongodb-icon",
        type: "fullstack",
        desc: "Next.js with API Routes + MongoDB - Modern SSR/SSG framework with flexible NoSQL database."
    },
    // Next.js Full Stack with PostgreSQL
    {
        name: "Next.js + PostgreSQL",
        icon: "logos:nextjs-icon",
        secondaryIcon: "logos:postgresql",
        type: "fullstack",
        desc: "Next.js with API Routes + PostgreSQL - Server-side rendering with enterprise SQL database."
    },
    // Next.js + Express + MongoDB
    {
        name: "Next.js + Express + MongoDB",
        icon: "logos:nextjs-icon",
        secondaryIcon: "simple-icons:express",
        type: "fullstack",
        desc: "Next.js frontend with dedicated Express backend and MongoDB - Separation of concerns architecture."
    },
    // React + Node.js + Express + MongoDB
    {
        name: "React + Node + Express + MongoDB",
        icon: "logos:react",
        secondaryIcon: "logos:nodejs-icon",
        type: "fullstack",
        desc: "Classic MERN with explicit Node.js runtime - Complete JavaScript ecosystem from UI to database."
    },
    // React + Node.js + Express + PostgreSQL
    {
        name: "React + Node + Express + PostgreSQL",
        icon: "logos:react",
        secondaryIcon: "logos:nodejs-icon",
        type: "fullstack",
        desc: "PERN with explicit Node.js - Structured SQL database with React's component architecture."
    },
    // Vue + Node.js + Express + MongoDB
    {
        name: "Vue + Node + Express + MongoDB",
        icon: "logos:vue",
        secondaryIcon: "logos:nodejs-icon",
        type: "fullstack",
        desc: "MEVN with explicit Node.js - Progressive Vue framework with scalable backend infrastructure."
    },
    // Vue + Node.js + Express + PostgreSQL
    {
        name: "Vue + Node + Express + PostgreSQL",
        icon: "logos:vue",
        secondaryIcon: "logos:postgresql",
        type: "fullstack",
        desc: "Vue.js with Express backend and PostgreSQL - Elegant frontend with robust relational database."
    },
    // React + NestJS + PostgreSQL (Enterprise)
    {
        name: "React + NestJS + PostgreSQL",
        icon: "logos:react",
        secondaryIcon: "logos:nestjs",
        type: "fullstack",
        desc: "Enterprise TypeScript stack - React UI with NestJS microservices architecture and SQL database."
    },
    // Next.js + NestJS (TypeScript Full Stack)
    {
        name: "Next.js + NestJS",
        icon: "logos:nextjs-icon",
        secondaryIcon: "logos:nestjs",
        type: "fullstack",
        desc: "Ultimate TypeScript full-stack - Next.js for frontend and NestJS for enterprise backend services."
    },
    // Django Full Stack
    {
        name: "Django + PostgreSQL",
        icon: "logos:django-icon",
        secondaryIcon: "logos:postgresql",
        type: "fullstack",
        desc: "Python-powered full-stack - Django's batteries-included framework with PostgreSQL database."
    },
    // Flask + SQLite
    {
        name: "Flask + SQLite",
        icon: "fa6-brands:python",
        secondaryIcon: "logos:sqlite",
        type: "fullstack",
        desc: "Lightweight Python stack - Flask microframework with embedded SQLite for rapid prototyping."
    },
    // Spring Boot Full Stack
    {
        name: "Spring Boot + PostgreSQL",
        icon: "logos:spring-icon",
        secondaryIcon: "logos:postgresql",
        type: "fullstack",
        desc: "Java enterprise stack - Spring Boot's robust framework with PostgreSQL for large-scale applications."
    },
    // Svelte + Node + Express
    {
        name: "Svelte + Node + Express",
        icon: "logos:svelte-icon",
        secondaryIcon: "logos:nodejs-icon",
        type: "fullstack",
        desc: "Modern performance stack - Svelte's compiled approach with Node.js backend for blazing-fast apps."
    },
    // Angular + Node + Express
    {
        name: "Angular + Node + Express",
        icon: "logos:angular-icon",
        secondaryIcon: "logos:nodejs-icon",
        type: "fullstack",
        desc: "MEAN Stack variant - Angular's comprehensive framework with Node.js + Express backend."
    },
    // Static HTML + Express API
    {
        name: "HTML + Express API",
        icon: "logos:html-5",
        secondaryIcon: "simple-icons:express",
        type: "fullstack",
        desc: "Simple full-stack - Vanilla HTML/CSS/JS frontend with Express REST API backend."
    },
    // Astro + Node + Express
    {
        name: "Astro + Express",
        icon: "vscode-icons:file-type-astro",
        secondaryIcon: "simple-icons:express",
        type: "fullstack",
        desc: "Content-focused stack - Astro's static-first approach with Express API for dynamic features."
    },
    // React + Fastify (Performance)
    {
        name: "React + Fastify + MongoDB",
        icon: "logos:react",
        secondaryIcon: "logos:fastify-icon",
        type: "fullstack",
        desc: "High-performance stack - React UI with Fastify's speed and MongoDB's flexibility."
    }
];

const implementedFrontend = ["React", "Next.js", "HTML + CSS + JS", "Vue.js", "Astro"];
const implementedBackend = ["Express.js"];

const allFrameworks = [
    ...stackData.frontend.map(f => ({
        name: f.label,
        icon: f.icon,
        type: f.type,
        desc: f.description,
        isComingSoon: !implementedFrontend.includes(f.label)
    })),
    ...stackData.backend.map(b => ({
        name: b.label,
        icon: b.icon,
        type: b.type,
        desc: b.description,
        isComingSoon: !implementedBackend.includes(b.label)
    })),
    ...fullstackCombinations.map(c => {
        // A fullstack combination is implemented if both its parts are implemented
        const isImplemented =
            implementedFrontend.some(f => c.name.includes(f)) &&
            implementedBackend.some(b => c.name.includes(b));

        // Special case for Next.js which can be fullstack on its own
        const isNextJS = c.name.includes("Next.js") && !c.name.includes("Express") && !c.name.includes("NestJS");

        return {
            ...c,
            isComingSoon: !(isImplemented || isNextJS)
        }
    }),
    { name: "Turborepo", icon: "logos:turborepo", type: "monorepo", desc: "High-performance build system for JavaScript and TypeScript monorepos.", isComingSoon: true },
    { name: "Nx", icon: "logos:nx", type: "monorepo", desc: "Smart, fast and extensible build system with first-class monorepo support.", isComingSoon: true },
    { name: "Lerna", icon: "logos:lerna", type: "monorepo", desc: "A tool for managing JavaScript projects with multiple packages.", isComingSoon: true }
];

export default function FrameworkGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredFrameworks = allFrameworks.filter(fw => {
        if (activeCategory === "All") return true;
        if (activeCategory === "Monorepo") return fw.type === "monorepo";
        return fw.type === activeCategory.toLowerCase();
    });

    return (
        <div className="space-y-10 mt-16">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-white/5 pb-4 px-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative py-2 text-sm font-medium transition-all duration-300 ${activeCategory === cat ? "text-white" : "text-white/40 hover:text-white/70"
                            }`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="activeTabUnderline"
                                className="absolute bottom-[-17px] left-0 right-0 h-[1.5px] bg-white z-10"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Frameworks Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredFrameworks.map((fw) => (
                        <motion.div
                            key={fw.name}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FrameworkCard {...fw} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
