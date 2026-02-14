"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function SupportDocPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:help-circle" className="h-4 w-4" />
                    Docs / Community / Project Support
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Project Support</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    How to get help, report issues, and stay updated with StackStruct.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Getting Help</h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        If you encounter issues or have questions about using the engine, we recommend checking existing resources before opening a new ticket.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SupportCard
                            title="Bug Reports"
                            desc="Report technical errors with clear steps to reproduce."
                            action="Open Issue"
                            href="https://github.com/Deepanshu-dashore/StackStruct/issues"
                        />
                        <SupportCard
                            title="Technical Support"
                            desc="Ask questions or share ideas in our GitHub Discussions."
                            action="Ask Community"
                            href="https://github.com/Deepanshu-dashore/StackStruct/discussions"
                        />
                    </div>
                </section>

                <section className="space-y-8 pt-8 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Expected Response Times</h2>
                    <div className="bg-white/2 border border-white/5 rounded-2xl overflow-hidden">
                        <table className="w-full text-left text-sm font-light">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/5 font-medium">
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4 text-right">Target Response</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-white/50">
                                <tr>
                                    <td className="px-6 py-4 text-white">Bugs & Security</td>
                                    <td className="px-6 py-4 text-right">48-72 hours</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-white">Feature Requests</td>
                                    <td className="px-6 py-4 text-right">1 week</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-white">Pull Requests</td>
                                    <td className="px-6 py-4 text-right">1 week</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}

function SupportCard({ title, desc, action, href }) {
    return (
        <a href={href} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all group">
            <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground/60 font-light leading-relaxed mb-6">{desc}</p>
            <div className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                {action}
                <Icon icon="lucide:arrow-up-right" className="h-3 w-3" />
            </div>
        </a>
    );
}
