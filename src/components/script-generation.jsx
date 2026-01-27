'use client';

import { motion } from 'framer-motion';
import { Copy, Terminal } from 'lucide-react';

export function ScriptGeneration() {
    const script = `npx struct-gen@latest --template fullstack-monorepo \\
  --frontend nextjs-tailwind \\
  --backend express-prisma \\
  --auth lucia-auth \\
  --db postgresql`;

    return (
        <section className="py-24 relative overflow-hidden bg-[#020206]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2"
                    >
                        <Terminal className="h-3 w-3" />
                        CLI First
                    </motion.div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Script Generation</h2>
                    <p className="max-w-[700px] text-white/40 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                        Deploy your entire stack with a single command. No manual setup required.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto group shadow-[0_0_100px_rgba(16,185,129,0.05)]"
                >
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0d12]/90 backdrop-blur-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
                                </div>
                                <div className="ml-4 flex items-center gap-2">
                                    <span className="text-[11px] font-medium text-white/30 tracking-wider flex items-center gap-1.5 uppercase font-mono">
                                        user — bash — 80×24
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => navigator.clipboard.writeText(script)}
                                className="group/copy flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 transition-all active:scale-95"
                            >
                                <Copy className="h-3.5 w-3.5 text-white/40 group-hover/copy:text-emerald-400 transition-colors" />
                                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover/copy:text-white transition-colors">Copy</span>
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 md:p-8 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto min-h-[220px]">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-start gap-3">
                                    <span className="text-emerald-500/50 shrink-0 select-none">stack-struct %</span>
                                    <div className="text-white/90">
                                        <span className="text-emerald-400">npx</span>
                                        <span className="text-white/60"> struct-gen@latest</span>
                                        <span className="text-cyan-400"> --template</span>
                                        <span className="text-white/90"> fullstack-monorepo</span>
                                        <span className="text-white/60"> \\</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pl-[110px]">
                                    <div className="text-white/90">
                                        <span className="text-cyan-400">--frontend</span>
                                        <span className="text-white/90"> nextjs-tailwind</span>
                                        <span className="text-white/60"> \\</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pl-[110px]">
                                    <div className="text-white/90">
                                        <span className="text-cyan-400">--backend</span>
                                        <span className="text-white/90"> express-prisma</span>
                                        <span className="text-white/60"> \\</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pl-[110px]">
                                    <div className="text-white/90">
                                        <span className="text-cyan-400">--auth</span>
                                        <span className="text-white/90"> lucia-auth</span>
                                        <span className="text-white/60"> \\</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pl-[110px]">
                                    <div className="text-white/90 flex items-center">
                                        <span className="text-cyan-400">--db</span>
                                        <span className="text-white/90"> postgresql</span>
                                        {/* Blinking Cursor */}
                                        <motion.div
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                                            className="ml-1 w-2.5 h-5 bg-emerald-400/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Reflection Effect */}
                    <div className="h-6 w-[90%] mx-auto bg-emerald-500/5 blur-2xl rounded-full -mt-2 opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}
