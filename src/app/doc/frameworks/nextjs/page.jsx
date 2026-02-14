"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function NextjsDocPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="logos:nextjs-icon" className="h-4 w-4" />
                    Docs / Frameworks / Next.js
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Next.js Integration</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    The ultimate full-stack framework with zero-config project generation.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">App Router by Default</h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        StackStruct generates Next.js projects using the modern **App Router** (`/app` directory). This enables powerful features like Server Components, Streaming, and sophisticated data fetching patterns.
                    </p>
                    <div className="bg-linear-to-br from-black to-white/5 border border-white/5 rounded-2xl p-8 shadow-2xl">
                        <div className="flex items-center gap-2 text-white/40 text-xs font-mono mb-4 uppercase tracking-widest">
                            <Icon icon="lucide:folder-tree" /> Directory Preview
                        </div>
                        <div className="font-mono text-sm space-y-2 text-white/70">
                            <div className="text-white">app/</div>
                            <div className="pl-6 border-l border-white/10 ml-2">layout.tsx <span className="text-white/20 italic">— Root Layout</span></div>
                            <div className="pl-6 border-l border-white/10 ml-2">page.tsx <span className="text-white/20 italic">— Home Page</span></div>
                            <div className="pl-6 border-l border-white/10 ml-2 text-white">components/</div>
                            <div className="pl-12 border-l border-white/10 ml-2">ui/ <span className="text-white/20 italic">— UI Library</span></div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8 pt-8 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Pre-configured Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <NextFeature
                            title="React Server Components"
                            desc="Reduce client-side bundle size by shifting logic to the server."
                        />
                        <NextFeature
                            title="Next-Intl Ready"
                            desc="Project is structured to easily add multi-language support."
                        />
                        <NextFeature
                            title="Optimized Asset Loading"
                            desc="Configured for next/image and next/font out of the box."
                        />
                        <NextFeature
                            title="API Routes"
                            desc="A dedicated /api directory for serverless functions."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

function NextFeature({ title, desc }) {
    return (
        <div className="space-y-2">
            <h4 className="text-white font-medium flex items-center gap-2">
                <Icon icon="lucide:check-square" className="text-cyan-400 h-4 w-4" />
                {title}
            </h4>
            <p className="text-sm text-muted-foreground/60 font-light leading-relaxed">{desc}</p>
        </div>
    );
}
