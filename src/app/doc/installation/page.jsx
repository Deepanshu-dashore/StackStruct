"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function InstallationPage() {
    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:terminal" className="h-4 w-4" />
                    Docs / Installation
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Installation</h1>
                <p className="text-xl text-gray-400/70 font-light leading-relaxed">
                    Learn how to use the StackStruct CLI and scripts to initialize your projects.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12 pb-20">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Prerequisites</h2>
                    <p className="text-gray-400 font-light text-lg">
                        Before running any StackStruct scripts, ensure you have the following installed on your system:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 font-light">
                        <li>Node.js (v18 or higher)</li>
                        <li>npm, yarn, or pnpm</li>
                        <li>Git (optional but recommended)</li>
                        <li>A Unix-like terminal (Bash, Zsh) or WSL for Windows users</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Generating via Visual UI</h2>
                    <p className="text-gray-400 font-light text-lg">
                        The primary way to install a StackStruct project is through our <a href="/create" className="text-white hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-white/10">interactive creator</a>.
                    </p>
                    <div className="space-y-4">
                        <p className="text-gray-400 font-light leading-relaxed">
                            1. Navigate to the creator and select your frontend/backend frameworks. <br />
                            2. Customize your project name and folder presets. <br />
                            3. In the "Scaffold Your Architecture" section, you will see a bash script.
                        </p>
                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-sm leading-relaxed text-cyan-400">
                            # Example Generation Script <br />
                            curl -sSL https://stackstruct.com/gen?framework=react&style=tailwind | bash
                        </div>
                    </div>
                </section>

                <section className="space-y-6 pt-12 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Manual Setup</h2>
                    <p className="text-gray-400 font-light text-lg">
                        If you prefer to manually clone our reference boilerplates, you can find them on our GitHub organization. However, we recommend using the generator to ensure dependencies are always up to date and correctly namespaced.
                    </p>
                </section>

                <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-6 flex gap-4">
                    <Icon icon="lucide:alert-triangle" className="text-yellow-500 h-6 w-6 mt-1 shrink-0" />
                    <p className="text-sm text-yellow-500/80 leading-relaxed font-light">
                        Note: Our scripts currently require a bash-compatible environment. If you are on Windows, please use Git Bash or WSL (Windows Subsystem for Linux) for the best experience.
                    </p>
                </div>

                <section className="space-y-6 pt-8 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Ready to dive deeper?</h2>
                    <p className="text-gray-400 font-light text-lg italic">
                        Want to know what happens under the hood when you click "Generate"? Check out our <a href="/doc/how-it-works" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">How it Works</a> guide.
                    </p>
                </section>
            </div>
        </div>
    );
}
