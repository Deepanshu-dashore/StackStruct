"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function StructurePage() {
    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:folder-tree" className="h-4 w-4" />
                    Docs / Project Structure
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Project Structure</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    Understanding the opinionated organization of a StackStruct project.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12 pb-20">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Standard Structure</h2>
                    <p className="text-muted-foreground font-light text-lg">
                        Our "Standard" preset provides a balanced structure suitable for most medium-sized applications.
                    </p>
                    <div className="bg-white/2 border border-white/5 rounded-2xl p-8 font-mono text-sm leading-relaxed">
                        <div className="flex items-center gap-2 text-white">
                            <Icon icon="lucide:folder" className="h-4 w-4 text-cyan-400" /> my-app/
                        </div>
                        <div className="pl-6 border-l border-white/10 ml-2 space-y-2 py-2">
                            <div className="flex items-center gap-2 text-white/50">
                                <Icon icon="lucide:file" className="h-4 w-4" /> package.json
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <Icon icon="lucide:folder" className="h-4 w-4 text-cyan-400" /> src/
                            </div>
                            <div className="pl-6 border-l border-white/10 ml-2 space-y-2 py-2">
                                <div className="flex items-center gap-2 text-white">
                                    <Icon icon="lucide:folder" className="h-4 w-4 text-purple-400" /> components/
                                    <span className="text-white/20 ml-2 italic">— Shared UI pieces</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Icon icon="lucide:folder" className="h-4 w-4 text-purple-400" /> hooks/
                                    <span className="text-white/20 ml-2 italic">— Reusable logic</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Icon icon="lucide:folder" className="h-4 w-4 text-purple-400" /> lib/
                                    <span className="text-white/20 ml-2 italic">— Utilities & API clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8 pt-12 border-t border-white/5">
                    <h2 className="text-2xl font-semibold italic">Core Directories</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-white font-medium flex items-center gap-2">
                                <Icon icon="lucide:component" className="text-cyan-400" /> Components
                            </h4>
                            <p className="text-sm text-muted-foreground/60 leading-relaxed font-light">
                                This is where your shared React/Vue components live. We recommend splitting them into <code>atoms</code>, <code>molecules</code>, and <code>organisms</code> for larger projects.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-medium flex items-center gap-2">
                                <Icon icon="lucide:package" className="text-cyan-400" /> Lib
                            </h4>
                            <p className="text-sm text-muted-foreground/60 leading-relaxed font-light">
                                Think of this as the "engines" directory. It contains configuration files (Tailwind, Supabase, Axios) and pure utility functions.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-3xl mx-auto py-12">
                    <div className="p-10 rounded-[2.5rem] bg-linear-to-br from-cyan-500/10 to-transparent border border-white/5 text-center">
                        <h3 className="text-2xl font-semibold mb-4 italic">Advanced Preset</h3>
                        <p className="text-muted-foreground/70 font-light mb-8">
                            Looking for a more enterprise-ready design? The Advanced preset adds <code>services/</code>, <code>store/</code>, and <code>features/</code> directories to strictly decouple your data layer.
                        </p>
                        <a href="/create" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-widest underline underline-offset-8">Configure Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
