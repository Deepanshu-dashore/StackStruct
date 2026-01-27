'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, File, Folder } from 'lucide-react/dist/cjs/lucide-react';

const ConfigureSVG = () => (
    <div className="relative w-full aspect-video bg-[#050508] rounded-xl border border-white/5 overflow-hidden group/svg">
        <div className="absolute top-2 left-3 flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
        </div>
        <div className="mt-8 px-6 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="h-1.5 w-16 bg-white/10 rounded animate-pulse" />
                        <div className="h-1 w-10 bg-white/5 rounded" />
                    </div>
                    <div className="w-8 h-4 bg-white/5 rounded-full relative  border border-white/5 overflow-hidden">
                        <motion.div
                            className={`absolute inset-y-0.5 left-0.5 w-3 h-3 rounded-full ${i === 1 ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : i === 3 ? 'bg-purple-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : i === 4 ? 'bg-rose-600 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : i === 5 ? 'bg-orange-300 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'bg-white/10'}`}
                            initial={false}
                            animate={{ x: i !== 2 ? 16 : 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "easeInOut" }}
                        />
                        {i !== 2 && (
                            <motion.div
                                className="absolute inset-0 bg-cyan-500/10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                            />
                        )}
                        {i === 3 && (
                            <motion.div
                                className="absolute inset-0 bg-indigo-500/30"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                            />
                        )}
                        {i === 4 && (
                            <motion.div
                                className="absolute inset-0 bg-rose-500/30"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                            />
                        )}
                        {i === 5 && (
                            <motion.div
                                className="absolute inset-0 bg-amber-500/30"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />
    </div>
);

const PreviewSVG = () => (
    <div className="relative w-full aspect-video bg-[#050508] rounded-xl border border-white/5 overflow-hidden flex group/svg text-[8px] font-mono font-light">
        {/* Left: Folder Tree */}
        <div className="w-1/3 border-r border-white/5 p-4 space-y-3">
            <div className="flex items-center gap-1.5">
                <Folder className="w-2.5 h-2.5 text-blue-500/50 fill-blue-500/50" />
                <div className="h-1 w-12 bg-white/20 rounded-full" />
            </div>
            <div className="pl-3 space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="flex items-center gap-1.5">
                        <svg className="w-2 h-2 opacity-20" viewBox="0 0 10 10">
                            <motion.path
                                d="M0 0 L5 5"
                                stroke="white"
                                strokeWidth="1"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                            />
                        </svg>
                        <File className={`w-2 h-2 ${i === 2 ? 'text-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)] fill-cyan-500/50' : i === 4 ? 'text-indigo-500 shadow-[0_0_5px_rgba(6,182,212,0.5)] fill-indigo-500/50' : i === 6 ? 'text-amber-500 shadow-[0_0_5px_rgba(6,182,212,0.5)] fill-amber-500/50' : i === 8 ? 'text-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)] fill-cyan-500' : 'text-white/10 fill-white/10'}`} />
                        <div className={`h-1 ${i === 2 ? 'w-10 bg-cyan-500/50' : i === 4 ? 'w-10 bg-indigo-500/50' : i === 6 ? 'w-10 bg-amber-500/50' : i === 8 ? 'w-10 bg-cyan-500' : 'w-8 bg-white/10'} rounded-full`} />
                    </div>
                ))}
            </div>
        </div>
        {/* Right: Code Window */}
        <div className="flex-1 p-4 py-6">
            <div className="space-y-2.5">
                {[64, 48, 80, 56, 72, 53, 79, 89, 45, 33].map((width, i) => (
                    <motion.div
                        key={i}
                        className={`h-1.5 rounded-full ${i === 2 ? 'bg-purple-500/30 animate-pulse' : i === 4 ? 'bg-cyan-500/30 animate-pulse' : i === 6 ? 'bg-rose-500/30 animate-pulse' : i === 8 ? 'bg-blue-500/50 animate-pulse' : 'bg-white/5'}`}
                        style={{ width: `${width}%` }}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    />
                ))}
            </div>
        </div>
    </div>
);

const GenerateSVG = () => (
    <div className="relative w-full aspect-video bg-[#050508] rounded-xl border border-white/5 overflow-hidden group/svg font-mono text-[9px]">
        {/* Terminal Header */}
        <div className="h-6 bg-white/2 border-b border-white/5 flex items-center px-3 gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
        </div>
        {/* Terminal Content */}
        <div className="p-4 space-y-4">
            <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">$</span>
                <span className="text-white/80">npx stack-struct-gen@latest</span>
                <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-1.5 h-3 bg-white/50"
                />
            </div>

            <div className="flex gap-4 pt-4 overflow-hidden justify-center">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 20, opacity: 0, scale: 0.8 }}
                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-8 h-6 bg-cyan-500/20 rounded border border-cyan-500/30 flex items-center justify-center">
                            <div className="w-4 h-3 border border-cyan-500/40 rounded-sm" />
                        </div>
                        <div className="h-1 w-6 bg-white/10 rounded-full" />
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

const steps = [
    {
        title: 'Configure',
        subtitle: 'Choose stack, structure & presets',
        description: 'Tailor your project architecture with our intuitive control panel. Toggle frameworks, databases, and monorepo settings with one click.',
        mockup: <ConfigureSVG />
    },
    {
        title: 'Preview',
        subtitle: 'Visualize folders & boilerplate',
        description: 'See your complete folder hierarchy and boilerplate code in real-time before generating a single file. Perfect transparency.',
        mockup: <PreviewSVG />
    },
    {
        title: 'Generate',
        subtitle: 'One command. Full project ready.',
        description: 'Execute the optimized one-shot script to scaffold your entire production-grade project locally in seconds.',
        mockup: <GenerateSVG />
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#020206]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl text-white">How it Works</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light mx-auto">
                            The fastest path from design to production-ready code.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex gap-1"
                        >
                            <Card className="glass-card h-full bg-black/40 border-white/5 hover:border-white/20 transition-all duration-500 p-8 flex flex-col gap-8 overflow-hidden relative shadow-none">
                                {/* Subtle radial background glow */}
                                <div className="absolute inset-0 bg-[radial-gradient(300px_circle_at_center,rgba(6,182,212,0.03),transparent)] pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-700" />

                                <div className="space-y-4 relative z-10">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-[0.2em] mb-1">Step {index + 1}</div>
                                        <h3 className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">{step.title}</h3>
                                        <p className="text-sm font-medium text-muted-foreground/60">{step.subtitle}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-auto relative z-10 pt-4 group-hover:translate-y-[-8px] transition-transform duration-500">
                                    <div className="p-1 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors shadow-2xl">
                                        {step.mockup}
                                    </div>
                                </div>
                            </Card>
                            {index !== steps.length - 1 && <div className=" bg-linear-to-r from-transparent mt-15 to-black/20 pointer-events-none right-0" >
                                <ArrowRight className="h-10 w-10 text-cyan-500/30" />
                            </div>}

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
