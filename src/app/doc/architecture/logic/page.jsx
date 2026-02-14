"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function EngineLogicPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:cpu" className="h-4 w-4" />
                    Docs / Architecture / Engine Logic
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Engine Logic</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    A deep dive into the deterministic generation core of StackStruct.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none pb-20">
                <section className="space-y-6" id="lifecycle">
                    <h2 className="text-2xl font-semibold text-white/90">Generation Lifecycle</h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                        The StackStruct engine follows a strict multi-pass process to transform your visual selections into a working codebase. This ensures that every project is valid, consistent, and predictable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <LogicStep
                            num="1"
                            title="Validation"
                            desc="Strong type checking ensures your config is valid before a single file is created."
                        />
                        <LogicStep
                            num="2"
                            title="Tree Building"
                            desc="A virtual file tree is constructed in memory based on your framework and preset."
                        />
                        <LogicStep
                            num="3"
                            title="Scripting"
                            desc="The tree is serialized into a bash-safe installation script for local execution."
                        />
                    </div>
                </section>

                <hr className="border-white/5 my-12" />

                <section className="space-y-6" id="deterministic">
                    <h2 className="text-2xl font-semibold text-white/90">Deterministic Files</h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                        Unlike many generic boilerplates, our engine uses a "build from parts" approach. Instead of string matching, we use a structured node system:
                    </p>
                    <div className="bg-black/40 border border-white/5 rounded-2xl p-8 font-mono text-sm leading-relaxed text-blue-300 shadow-inner">
                        <span className="text-white/30 italic">// Internal File Representation</span><br />
                        export type FileNode = &#123;<br />
                        &nbsp;&nbsp;type: "file";<br />
                        &nbsp;&nbsp;name: string;<br />
                        &nbsp;&nbsp;content: string;<br />
                        &#125;;
                    </div>
                </section>

                <hr className="border-white/5 my-12" />

                <section className="space-y-6 pt-4" id="safety">
                    <h2 className="text-2xl font-semibold text-white/90 italic">Script Generation (Safe Mode)</h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                        Our script generator is designed for safety. It uses 2-pass traversal:
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-white/50 font-light">
                        <li><span className="text-white font-medium underline underline-offset-4 decoration-white/10">Pass 1 (Directories):</span> All <code>mkdir -p</code> commands are generated first.</li>
                        <li><span className="text-white font-medium underline underline-offset-4 decoration-white/10">Pass 2 (Files):</span> Files are written using <code>cat &lt;&lt; 'EOF'</code> to ensure content integrity and bash compatibility.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

function LogicStep({ num, title, desc }) {
    return (
        <div className="p-6 rounded-2xl bg-white/2 border border-white/5 space-y-4">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/20">
                {num}
            </div>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm text-muted-foreground/60 font-light leading-relaxed">{desc}</p>
        </div>
    );
}
