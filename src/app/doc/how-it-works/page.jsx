"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:settings" className="h-4 w-4" />
                    Docs / Getting Started / How it Works
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">How it Works</h1>
                <p className="text-xl text-white/50 font-light leading-relaxed">
                    Understand the journey from selection to a fully scaffolded project.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none pb-20">
                <section className="space-y-6" id="core-concept">
                    <h2 className="text-2xl font-semibold text-white/90">The Core Concept</h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                        StackStruct isn't just a boilerplate generator. It's a <strong>deterministic scaffolding engine</strong> that builds your project piece-by-piece based on your architecture preferences. Instead of cloning a repository, we construct a <strong>Virtual File Tree</strong> in memory and then serialize it into an optimized execution script.
                    </p>
                </section>

                <hr className="border-white/5 my-12" />

                <section className="space-y-10" id="process">
                    <h2 className="text-2xl font-semibold text-white/90">The 4-Step Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProcessCard
                            icon="lucide:list-checks"
                            title="1. Configuration"
                            desc="Your UI selections (Framework, Language, Styling, Presets) are bundled into a single JSON configuration object."
                        />
                        <ProcessCard
                            icon="lucide:git-branch"
                            title="2. Tree Construction"
                            desc="The engine resolves your framework and builds a hierarchical node structure representing every file and folder in your project."
                        />
                        <ProcessCard
                            icon="lucide:plug"
                            title="3. Feature Injection"
                            desc="Add-ons like Tailwind CSS, TypeScript, and Folder Presets are dynamically 'injected' into the virtual tree."
                        />
                        <ProcessCard
                            icon="lucide:terminal"
                            title="4. Script Serialization"
                            desc="The virtual tree is transformed into a robust, safe Bash script that handles directory creation and file writing."
                        />
                    </div>
                </section>

                <hr className="border-white/5 my-12" />

                <section className="space-y-6 pt-4" id="deep-dive">
                    <h2 className="text-2xl font-semibold text-white/90 italic">Technical Deep Dive</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/40 text-sm">01</div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-white">The Virtual Tree</h3>
                                <p className="text-white/50 leading-relaxed font-light font-sans">
                                    Every project starts as a set of recursive <code>FolderNodes</code> and <code>FileNodes</code>. This structure allows us to perform validations and clean-ups before any physical changes occur.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/40 text-sm">02</div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-white">The Pipeline</h3>
                                <p className="text-white/50 leading-relaxed font-light font-sans">
                                    The <code>frontendPipeline</code> manages framework-specific logic. It decides whether to use <code>reactFramework</code> or <code>nextFramework</code>, and then applies "Folder Philosophy" presets like <i>Standard</i> or <i>Advanced</i>.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/40 text-sm">03</div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-white">Execution Safety</h3>
                                <p className="text-white/50 leading-relaxed font-light font-sans">
                                    The generated script uses <code>EOF</code> heredocs to ensure that special characters or complex code snippets don't break during the writing process. We also bundle all <code>npm install</code> commands at the end to ensure a smooth setup.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-white/5 my-12" />

                <div className="p-8 rounded-3xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20" id="summary">
                    <div className="flex items-start gap-4">
                        <Icon icon="lucide:info" className="h-6 w-6 text-cyan-400 shrink-0 mt-1" />
                        <div className="space-y-2">
                            <h4 className="text-lg font-bold text-white">Did you know?</h4>
                            <p className="text-white/60 text-sm font-light leading-relaxed">
                                Because StackStruct is deterministic, the same configuration will always produce the exact same project structure. This makes it perfect for teams who want to standardize their workspace across different developers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProcessCard({ icon, title, desc }) {
    return (
        <div className="p-6 rounded-2xl bg-white/2 border border-white/5 space-y-4 hover:border-cyan-500/20 transition-colors group">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Icon icon={icon} className="h-5 w-5" />
            </div>
            <h4 className="text-lg font-semibold text-white/90">{title}</h4>
            <p className="text-sm text-white/40 font-light leading-relaxed">{desc}</p>
        </div>
    );
}
