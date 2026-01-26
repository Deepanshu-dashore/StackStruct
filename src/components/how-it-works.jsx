'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Layout, Eye, Terminal, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: '1. Configure',
        description: 'Choose your tech stack and define your architecture.',
        icon: <Layout className="h-5 w-5 text-cyan-400" />,
        mockup: (
            <div className="space-y-2 p-4 bg-white/2 rounded border border-white/5">
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
                <div className="flex justify-between items-center mt-4">
                    <div className="h-4 w-12 bg-emerald-500/30 rounded-full" />
                    <div className="h-4 w-8 bg-white/10 rounded" />
                </div>
            </div>
        )
    },
    {
        title: '2. Preview',
        description: 'Visualize your folders and files before generating.',
        icon: <Eye className="h-5 w-5 text-emerald-400" />,
        mockup: (
            <div className="flex gap-2 p-2 bg-white/2 rounded border border-white/5 overflow-hidden">
                <div className="w-1/3 space-y-1">
                    <div className="h-1 w-full bg-blue-400/20 rounded" />
                    <div className="h-1 w-full bg-white/10 rounded ml-1" />
                    <div className="h-1 w-full bg-white/10 rounded ml-1" />
                    <div className="h-1 w-full bg-blue-400/20 rounded" />
                </div>
                <div className="flex-1 space-y-1">
                    <div className="h-1 w-full bg-white/10 rounded" />
                    <div className="h-1 w-2/3 bg-white/10 rounded" />
                    <div className="h-1 w-full bg-white/10 rounded" />
                </div>
            </div>
        )
    },
    {
        title: '3. Generate',
        description: 'Run the one-shot script to create your production-ready project.',
        icon: <Terminal className="h-5 w-5 text-purple-400" />,
        mockup: (
            <div className="p-3 bg-black/40 rounded border border-white/5 font-mono text-[8px] text-emerald-400/70">
                <div>$ npx struct-gen@latest</div>
                <div className="text-white/40 mt-1">Downloading template...</div>
                <div className="mt-1">Done! Project ready in ./my-app</div>
            </div>
        )
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">How it Works</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The fastest path from design to production-ready code.
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 w-full relative group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="glass-card relative overflow-hidden p-6 aspect-square max-w-[320px] mx-auto flex flex-col gap-6 border-white/5 hover:border-white/10 transition-all hover:bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded-md">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-medium tracking-tight whitespace-nowrap">{step.title}</h3>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="relative w-full aspect-video flex items-center justify-center mb-4">
                                            <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent blur-[20px] transform scale-90" />
                                            <div className="w-full relative z-10 transition-transform group-hover:scale-105 duration-500">
                                                {step.mockup}
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Step Connector arrow for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-y-[-50%] z-20 text-white/10">
                                    <ArrowRight className="h-8 w-8 text-cyan-500/30" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
