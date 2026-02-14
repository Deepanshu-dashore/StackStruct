"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function ReactDocPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="logos:react" className="h-4 w-4" />
                    Docs / Frameworks / React
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">React Integration</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    The foundation of the StackStruct ecosystem. Optimized for speed and scalability.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Base Template</h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        Our React template is powered by **Vite** for the fastest development experience. It comes pre-configured with Tailwind CSS, a consistent project structure, and essential developer tools.
                    </p>
                    <div className="bg-white/2 border border-white/5 rounded-2xl p-6 flex items-center justify-between group cursor-help">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                                <Icon icon="vscode-icons:file-type-vite" className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Vite 6.0</h4>
                                <p className="text-xs text-white/30 italic">Lighting fast Hot Module Replacement (HMR)</p>
                            </div>
                        </div>
                        <Icon icon="lucide:info" className="h-4 w-4 text-white/10 group-hover:text-cyan-400 transition-colors" />
                    </div>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Features Included</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                        <ServiceFeature icon="lucide:palette" title="Tailwind CSS" desc="Pre-configured with modern design tokens." />
                        <ServiceFeature icon="lucide:shield-check" title="TypeScript" desc="Type-safe components and hooks." />
                        <ServiceFeature icon="lucide:component" title="Component Library" desc="Ready to drop in ShadCN or MUI." />
                        <ServiceFeature icon="lucide:test-tube" title="Testing Ready" desc="Configured for Vitest and Testing Library." />
                    </ul>
                </section>
            </div>
        </div>
    );
}

function ServiceFeature({ icon, title, desc }) {
    return (
        <li className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex gap-4">
            <Icon icon={icon} className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
                <h4 className="text-white text-sm font-semibold">{title}</h4>
                <p className="text-white/40 text-xs font-light mt-1">{desc}</p>
            </div>
        </li>
    );
}
