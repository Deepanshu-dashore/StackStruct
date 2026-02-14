"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function ContributingPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:users" className="h-4 w-4" />
                    Docs / Community / Contributing
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contributing</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    How to contribute to the StackStruct engine and UI.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Our Philosophy</h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        StackStruct is an open-source project. We welcome contributions that make project generation faster, safer, and cleaner for the community.
                    </p>
                </section>

                <section className="space-y-8 pt-8 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Way to Contribute</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ContributionCard
                            icon="lucide:bug-play"
                            title="Bug Reports"
                            desc="Open an issue describing the bug, environment, and steps to reproduce."
                        />
                        <ContributionCard
                            icon="lucide:git-pull-request"
                            title="Pull Requests"
                            desc="Fix a bug or implement a new feature. Please ensure consistent coding style."
                        />
                        <ContributionCard
                            icon="lucide:message-square"
                            title="Discussions"
                            desc="Propose new frameworks, folder presets, or architecture rules."
                        />
                        <ContributionCard
                            icon="lucide:book-open-check"
                            title="Documentation"
                            desc="Help improve these guides. Documentation is as valuable as code."
                        />
                    </div>
                </section>

                <section className="space-y-6 pt-12 border-t border-white/5">
                    <h2 className="text-2xl font-semibold italic">Development Setup</h2>
                    <div className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-sm leading-relaxed text-cyan-400">
                        git clone https://github.com/your-repo/StackStruct.git<br />
                        cd StackStruct<br />
                        npm install<br />
                        npm run dev
                    </div>
                </section>
            </div>
        </div>
    );
}

function ContributionCard({ icon, title, desc }) {
    return (
        <div className="p-6 rounded-2xl bg-white/2 border border-white/5 space-y-4 hover:bg-white/5 transition-all">
            <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                <Icon icon={icon} className="h-5 w-5" />
            </div>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm text-muted-foreground/60 font-light leading-relaxed">{desc}</p>
        </div>
    );
}
