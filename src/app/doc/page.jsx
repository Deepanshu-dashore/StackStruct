"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function DocIntroductionPage() {
    return (
        <div className="space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90" id="overview">
                    What is StackStruct?
                </h1>
                <div className="space-y-6 text-[17px] leading-[1.6] text-white/60 font-light">
                    <p>
                        StackStruct is a React-first framework for building full-stack web applications. It simplifies the bridge between user interfaces and complex backend configurations.
                    </p>
                    <p>
                        By automatically configuring lower-level tools like bundlers and project hierarchies, we allow you to focus on building features rather than wrestling with configuration.
                    </p>
                    <p>
                        Whether you're an individual developer or part of a larger team, StackStruct helps you scaffold interactive, dynamic, and production-ready applications in seconds.
                    </p>
                </div>
            </motion.div>

            <hr className="border-white/5 my-12" />

            <section className="space-y-8" id="quick-start">
                <h2 className="text-2xl font-bold tracking-tight text-white/90">How to use the docs</h2>
                <p className="text-[17px] text-white/60 font-light">The docs are organized into logical sections:</p>

                <ul className="space-y-6 text-[17px] font-light">
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-500/30 mt-1">—</span>
                        <div className="flex-1">
                            <span className="text-cyan-400 font-medium">Getting Started</span>
                            <span className="text-white/50">: Guided tours to help you create your first application and learn core features.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-500/30 mt-1">—</span>
                        <div className="flex-1">
                            <span className="text-cyan-400 font-medium">Architecture</span>
                            <span className="text-white/50">: Technical deep dives into the engine logic and preset systems.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-cyan-500/30 mt-1">—</span>
                        <div className="flex-1">
                            <span className="text-cyan-400 font-medium">Frameworks</span>
                            <span className="text-white/50">: Specific instructions and patterns for React, Next.js, Vue, and more.</span>
                        </div>
                    </li>
                </ul>
            </section>

            <hr className="border-white/5 my-12" />

            <section className="space-y-8" id="why-opinionated">
                <h2 className="text-2xl font-bold text-white/90">Why Opinionated?</h2>
                <p className="text-[17px] text-white/60 leading-relaxed font-light">
                    We believe that making initial architectural decisions can be the biggest bottleneck in project development. By providing stable, community-vetted folder structures and patterns, we let you focus on what matters most: **your code.**
                </p>
            </section>

            <hr className="border-white/5 my-12" />

            <section className="space-y-8" id="next-steps">
                <h2 className="text-2xl font-bold text-white/90 italic">Next Steps</h2>
                <p className="text-[17px] text-white/60 leading-relaxed font-light">
                    Ready to build? Jump into the installation guide or explore our project structure philosophy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="/doc/installation" className="p-6 rounded-2xl border border-white/5 hover:bg-white/2 hover:border-cyan-500/20 transition-all group">
                        <h4 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Installation Guide</h4>
                        <p className="text-sm text-white/40">Step-by-step environment setup.</p>
                    </a>
                    <a href="/doc/how-it-works" className="p-6 rounded-2xl border border-white/5 hover:bg-white/2 hover:border-cyan-500/20 transition-all group">
                        <h4 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">How it Works</h4>
                        <p className="text-sm text-white/40">Understand the generation engine.</p>
                    </a>
                    <a href="/doc/structure" className="p-6 rounded-2xl border border-white/5 hover:bg-white/2 hover:border-cyan-500/20 transition-all group">
                        <h4 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Architecture</h4>
                        <p className="text-sm text-white/40">Our folder structure philosophy.</p>
                    </a>
                </div>
            </section>
        </div>
    );
}
