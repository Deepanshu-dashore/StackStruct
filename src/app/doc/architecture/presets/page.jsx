"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function PresetSystemPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:layers" className="h-4 w-4" />
                    Docs / Architecture / Preset System
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Preset System</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    How we separate concerns through intelligent folder presets.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">The Philosophy</h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        StackStruct is architected to prevent "combinational explosion". Instead of writing unique generators for every combination of tech, we use a separate **Preset Layer**.
                    </p>
                    <div className="bg-linear-to-r from-cyan-500/10 to-transparent border border-cyan-500/10 rounded-2xl p-8 italic font-light text-white/70">
                        "A framework defines what features you have. A preset defines where they live."
                    </div>
                </section>

                <section className="space-y-8 pt-8 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Available Presets</h2>

                    <div className="space-y-10">
                        <PresetDetail
                            title="Minimal"
                            tag="MVP & Prototypes"
                            color="text-emerald-400"
                            desc="Zero mental overhead. Everything you need to get a screen on the wall in 5 minutes. No abstraction layers or complex services."
                            tree={`src/
  components/
  pages/
  App.jsx`}
                        />

                        <PresetDetail
                            title="Standard"
                            tag="Production Recommended"
                            color="text-cyan-400"
                            desc="Our industry-standard structure. Separates UI from hooks and API logic. Scales perfectly to medium-sized production applications."
                            tree={`src/
  components/   (ui, layout)
  hooks/
  services/     (API calls)
  lib/          (utils)`}
                        />

                        <PresetDetail
                            title="Advanced"
                            tag="Feature-Sliced"
                            color="text-purple-400"
                            desc="For enterprise SaaS and large teams. Deeply decouples features using a module-based architecture. Built for monorepos."
                            tree={`src/
  modules/      (auth, dashboard)
  shared/       (ui, hooks)
  assets/`}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

function PresetDetail({ title, tag, color, desc, tree }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-8 group">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <h3 className={cn("text-2xl font-semibold", color)}>{title}</h3>
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-tight text-white/40">{tag}</span>
                </div>
                <p className="text-muted-foreground/70 font-light leading-relaxed">{desc}</p>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-xl p-6 font-mono text-[11px] leading-tight text-white/30 group-hover:text-white/60 transition-colors">
                <pre>{tree}</pre>
            </div>
        </div>
    );
}

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
