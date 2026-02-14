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
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white" id="overview">
                    What is StackStruct?
                </h1>
                <div className="space-y-6 text-[17px] leading-[1.6] text-white/90 font-light">
                    <p>
                        StackStruct is a React framework for building full-stack web applications. You use React Components to build user interfaces, and StackStruct for additional features and optimizations.
                    </p>
                    <p>
                        It also automatically configures lower-level tools like bundlers and compilers. You can instead focus on building your product and shipping quickly.
                    </p>
                    <p>
                        Whether you're an individual developer or part of a larger team, StackStruct can help you build interactive, dynamic, and fast React applications.
                    </p>
                </div>
            </motion.div>

            <hr className="border-white/5" />

            <section className="space-y-8" id="quick-start">
                <h2 className="text-3xl font-bold tracking-tight text-white">How to use the docs</h2>
                <p className="text-[17px] text-white/90 font-light">The docs are organized into 3 sections:</p>

                <ul className="space-y-4 text-[17px] font-light">
                    <li className="flex items-start gap-3">
                        <span className="text-white/20 mt-1">—</span>
                        <div className="flex-1">
                            <span className="text-cyan-400 hover:underline cursor-pointer">Getting Started</span>
                            <span className="text-white/60">: Step-by-step tutorials to help you create a new application and learn the core StackStruct features.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-white/20 mt-1">—</span>
                        <div className="flex-1">
                            <span className="text-cyan-400 hover:underline cursor-pointer">Guides</span>
                            <span className="text-white/60">: Tutorials on specific use cases, choose what's relevant to you.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-white/20 mt-1">—</span>
                        <div className="flex-1">
                            <span className="text-cyan-400 hover:underline cursor-pointer">API Reference</span>
                            <span className="text-white/60">: Detailed technical reference for every feature.</span>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="space-y-8" id="why-opinionated">
                <h2 className="text-2xl font-bold text-white">Why Opinionated?</h2>
                <p className="text-[17px] text-white/70 leading-relaxed font-light">
                    We believe that making initial architectural decisions can be the biggest bottleneck in project development. By providing stable, community-vetted folder structures and patterns (like feat-based or modular designs), we let you focus on what matters most: **your code.**
                </p>
            </section>

            <section className="space-y-8 pt-4" id="next-steps">
                <h2 className="text-2xl font-bold text-white">Next Steps</h2>
                <p className="text-[17px] text-white/70 leading-relaxed font-light">
                    Ready to build? Jump into the installation guide or explore our project structure philosophy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="/doc/installation" className="p-6 rounded-xl border border-white/5 hover:bg-white/2 transition-all">
                        <h4 className="font-bold text-white mb-1">Installation Guide</h4>
                        <p className="text-sm text-white/40">Step-by-step environment setup.</p>
                    </a>
                    <a href="/doc/how-it-works" className="p-6 rounded-xl border border-white/5 hover:bg-white/2 transition-all text-cyan-400">
                        <h4 className="font-bold text-white mb-1">How it Works</h4>
                        <p className="text-sm text-white/40">Understand the generation engine.</p>
                    </a>
                    <a href="/doc/structure" className="p-6 rounded-xl border border-white/5 hover:bg-white/2 transition-all">
                        <h4 className="font-bold text-white mb-1">Architecture</h4>
                        <p className="text-sm text-white/40">Our folder structure philosophy.</p>
                    </a>
                </div>
            </section>
        </div>
    );
}
