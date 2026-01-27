'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
    Layout,
    Server,
    Database,
    Lock,
    Box,
    Cpu,
    ExternalLink
} from 'lucide-react';

const layers = [
    {
        name: 'Frontend Frameworks',
        icon: <Layout className="h-6 w-6" />,
        color: 'cyan',
        description: 'Configure React, Next.js, or Vue with premium presets and scalable architecture.',
        glow: 'rgba(34, 211, 238, 0.1)'
    },
    {
        name: 'Backend Frameworks',
        icon: <Server className="h-6 w-6" />,
        color: 'emerald',
        description: 'Deploy Node, NestJS, or Go backends with optimized boilerplate and middleware.',
        glow: 'rgba(16, 185, 129, 0.1)'
    },
    {
        name: 'Databases',
        icon: <Database className="h-6 w-6" />,
        color: 'blue',
        description: 'Provision PostgreSQL, MongoDB, or Redis with pre-configured schemas and connections.',
        glow: 'rgba(59, 130, 246, 0.1)'
    },
    {
        name: 'Authentication',
        icon: <Lock className="h-6 w-6" />,
        color: 'purple',
        description: 'Secure your app with Lucia, Clerk, or NextAuth integrations out of the box.',
        glow: 'rgba(168, 85, 247, 0.1)'
    },
    {
        name: 'Monorepo Architecture',
        icon: <Box className="h-6 w-6" />,
        color: 'indigo',
        description: 'Scale with Turborepo or Nx presets for efficient workspace and package management.',
        glow: 'rgba(99, 102, 241, 0.1)'
    },
    {
        name: 'Infrastructure',
        icon: <Cpu className="h-6 w-6" />,
        color: 'rose',
        description: 'Automate CI/CD and deployments to Vercel, AWS, or Docker with ease.',
        glow: 'rgba(225, 29, 72, 0.1)'
    }
];

const CircuitLines = () => {
    const mainPaths = [
        { d: "M600 50 V120 H200 V200", color: "#00f3ff", delay: 0 }, // Electric Cyan
        { d: "M600 50 V200", color: "#00ff8c", delay: 0.5 }, // Neon Green
        { d: "M600 50 V120 H1000 V200", color: "#f4d638", delay: 1 }, // Shining Yellow
        { d: "M600 50 V350 H200 V500", color: "#bf00ff", delay: 1.5 }, // Electric Purple
        { d: "M600 50 V500", color: "#4d4dff", delay: 0.2 }, // Bright Blue
        { d: "M600 50 V350 H1000 V500", color: "#ff0055", delay: 1.2 } // Vivid Rose
    ];

    const decorativePaths = [
        // Top decorative paths
        { d: "M580 50 V20 H450 V0", color: "#f4d638", delay: 2, label: "top-1" },
        { d: "M620 50 V10 H750 V-20", color: "#00ff8c", delay: 2.5, label: "top-2" },
        { d: "M600 50 V-30", color: "#ff00ff", delay: 3, label: "top-3" },

        // Left decorative paths
        { d: "M550 50 H400 V80 H300", color: "#00f3ff", delay: 1.8, label: "left-1" },
        { d: "M550 40 H350 V150 H250", color: "#bc13fe", delay: 2.2, label: "left-2" },
        { d: "M550 60 H480 V-20", color: "#f4d638", delay: 2.8, label: "left-3" },

        // Right decorative paths
        { d: "M650 50 H800 V80 H950", color: "#00ff8c", delay: 1.4, label: "right-1" },
        { d: "M650 40 H850 V150 H1050", color: "#f4d638", delay: 2.6, label: "right-2" },
        { d: "M650 60 H720 V-10", color: "#3131ff", delay: 3.2, label: "right-3" }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                {/* Static Path Traces for Main Connections */}
                {mainPaths.map((p, i) => (
                    <motion.path
                        key={`main-trace-${i}`}
                        d={p.d}
                        stroke={p.color}
                        strokeWidth="1"
                        strokeOpacity="0.9"
                    />
                ))}

                {/* Static Path Traces for Decorative Connections */}
                {decorativePaths.map((p, i) => (
                    <motion.path
                        key={`deco-trace-${i}`}
                        d={p.d}
                        stroke={p.color}
                        strokeWidth="1"
                        strokeOpacity="0.8"
                    />
                ))}

                {/* Main Flowing Pulses - Enhanced Shining Sparks */}
                {mainPaths.map((path, i) => (
                    [0, 1.5].map((delayOffset) => (
                        <g key={`main-pulse-${i}-${delayOffset}`} style={{ mixBlendMode: 'plus-lighter' }}>
                            {/* Outer Glow */}
                            <motion.rect
                                width="12"
                                height="4"
                                rx="2"
                                fill={path.color}
                                fillOpacity="1"
                                initial={{ offsetDistance: "0%" }}
                                animate={{ offsetDistance: "100%" }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: path.delay + delayOffset,
                                    ease: "linear"
                                }}
                                style={{
                                    offsetPath: `path("${path.d}")`,
                                    filter: `blur(2px)`
                                }}
                            />
                            {/* Spark Body */}
                            <motion.rect
                                width="10"
                                height="3"
                                rx="1.5"
                                fill={path.color}
                                initial={{ offsetDistance: "0%" }}
                                animate={{ offsetDistance: "100%" }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: path.delay + delayOffset,
                                    ease: "linear"
                                }}
                                style={{
                                    offsetPath: `path("${path.d}")`,
                                    filter: `drop-shadow(0 0 8px ${path.color}) drop-shadow(0 0 12px ${path.color})`
                                }}
                            />
                            {/* Shining White Core */}
                            <motion.rect
                                width="6"
                                height="1.5"
                                rx="0.75"
                                fill="white"
                                initial={{ offsetDistance: "0%" }}
                                animate={{ offsetDistance: "100%" }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: path.delay + delayOffset,
                                    ease: "linear"
                                }}
                                style={{
                                    offsetPath: `path("${path.d}")`,
                                }}
                            />
                        </g>
                    ))
                ))}

                {/* Decorative Flowing Sparks - Enhanced Shining */}
                {decorativePaths.map((path, i) => (
                    <g key={`deco-pulse-${i}`} style={{ mixBlendMode: 'plus-lighter' }}>
                        <motion.rect
                            width="10"
                            height="1.5"
                            rx="0.5"
                            fill={path.color}
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: path.delay,
                                ease: "linear"
                            }}
                            style={{
                                offsetPath: `path("${path.d}")`,
                                filter: `drop-shadow(0 0 6px ${path.color})`
                            }}
                        />
                        {/* Shining Core for Deco */}
                        <motion.rect
                            width="4"
                            height="0.8"
                            rx="0.4"
                            fill="white"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: path.delay,
                                ease: "linear"
                            }}
                            style={{
                                offsetPath: `path("${path.d}")`,
                            }}
                        />
                        {/* Terminal Nodes as Rectangles for consistency or keep as circles? User said use rectangle on mini line for flow */}
                        <motion.circle
                            cx={path.d.split(' ').pop().substring(1).split(',')[0] || 0}
                            cy={path.d.split(' ').pop().substring(1).split(',')[1] || 0}
                            r="2"
                            fill={path.color}
                            fillOpacity="1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        />
                    </g>
                ))}

                {/* Decorative terminal junctions */}
                {decorativePaths.map((p, i) => {
                    const coords = p.d.split(' ').pop();
                    if (!coords.includes('V') && !coords.includes('H')) {
                        // This is a bit hacky due to path string format, but let's add some manual nodes
                    }
                    return null;
                })}

                <circle cx="600" cy="50" r="6" fill="white" fillOpacity="0.1" />
            </svg>
        </div>
    );
};

export function StackCustomization() {
    return (
        <section className="py-0 h-[110dvh] relative overflow-hidden bg-[#020206]">
            {/* Background Grain/Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center space-y-6 text-center mb-24">
                    <div className="space-y-4 relative">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold tracking-tight text-white inline-block uppercase"
                        >
                            Built for speed,
                            <span className="text-white/60"> scale, and developer experience</span>
                        </motion.h2>

                        {/* Heading Suitable Decorative Line */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "80%", opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-px mx-auto bg-linear-to-r from-transparent via-cyan-500 to-transparent"
                        />
                    </div>
                </div>

                <div className="relative min-h-[900px]">
                    {/* Central Chip */}
                    <div className="flex justify-center mb-28 relative z-20">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-linear-to-br from-[#171a20] to-[#171a20] via-[#23272c] border-2 z-30 border-white/5 px-10 py-5 rounded-lg flex items-center gap-4 shadow-[0_30px_60px_rgba(0,0,0,0.8)] group hover:border-white/10 transition-all cursor-default relative"
                        >
                            {/* Chip Pins Mockup - Left */}
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                                {[1, 2, 3, 4].map(i => <div key={i} className="w-2.5 h-1.5 bg-linear-to-br from-white/50 to-white/50 via-white/30 border border-l-2 border-gray-500/20 border-l-white/60" />)}
                            </div>
                            {/* Chip Pins Mockup - Right */}
                            <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                                {[1, 2, 3, 4].map(i => <div key={i} className="w-2.5 h-1.5 bg-linear-to-bl from-white/50 to-white/50 via-white/30 border border-r-2 border-gray-500/20 border-r-white/60" />)}
                            </div>
                            {/* Chip Pins Mockup - Top */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-3">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="h-2.5 w-1.5 bg-linear-to-r from-white/50 to-white/50 via-white/30 border border-r-2 border-gray-500/20 border-r-white/60" />)}
                            </div>
                            {/* Chip Pins Mockup - Bottom */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="h-2.5 w-1.5 bg-linear-to-r from-white/50 to-white/50 via-white/30 border border-r-2 border-gray-500/20 border-r-white/60" />)}
                            </div>

                            <span className="text-2xl font-bold tracking-tight text-white/90">Powered By</span>
                        </motion.div>
                    </div>

                    {/* Circuit lines connecting chip to cards */}
                    <CircuitLines />

                    {/* Tech Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {layers.map((layer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                                viewport={{ once: true }}
                                className="group h-full"
                            >
                                <Card className="h-full bg-[#0a0a0f]/80 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden relative shadow-2xl flex flex-col p-6 rounded-3xl">
                                    <div style={{ background: `linear-gradient(to right, transparent, ${layer.color}, transparent)` }} className={`absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="flex flex-col gap-6 h-full">
                                        <div className={`h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 shadow-inner text-${layer.color}-400 group-hover:scale-110 transition-transform duration-500`}>
                                            {layer.icon}
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 group/title">
                                                <h3 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                                                    {layer.name}
                                                </h3>
                                                <ExternalLink className="h-3 w-3 text-white/10 group-hover/title:text-white/40 transition-colors" />
                                            </div>
                                            <p className="text-sm text-white/40 leading-relaxed font-light">
                                                {layer.description}
                                            </p>
                                        </div>

                                        {/* <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30 group-hover:text-cyan-400 transition-colors">
                                            <span>Customize</span>
                                            <div className="h-px flex-1 bg-white/5 group-hover:bg-cyan-500/10 transition-colors" />
                                        </div> */}
                                    </div>

                                    {/* Subtle hover glow */}
                                    <div
                                        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[80px] transition-all duration-700 opacity-0 group-hover:opacity-20 pointer-events-none"
                                        style={{ backgroundColor: layer.glow }}
                                    />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
