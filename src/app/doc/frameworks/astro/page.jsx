"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function AstroDocPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="vscode-icons:file-type-astro" className="h-4 w-4" />
                    Docs / Frameworks / Astro
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Astro Integration</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    The all-in-one web framework for content-focused websites.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="p-12 rounded-3xl bg-white/2 border border-white/5 text-center">
                    <Icon icon="lucide:construction" className="h-12 w-12 text-yellow-500 mx-auto mb-6 opacity-20" />
                    <h2 className="text-2xl font-semibold mb-4 italic text-white/40">Coming Soon</h2>
                    <p className="text-muted-foreground/40 font-light max-w-lg mx-auto leading-relaxed">
                        Astro integration is currently in the experimental branch. We are optimizing our script-based installation for island-architecture projects.
                    </p>
                </section>
            </div>
        </div>
    );
}
