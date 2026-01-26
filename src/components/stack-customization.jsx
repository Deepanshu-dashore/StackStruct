'use client';

import { motion } from 'framer-motion';
import {
    Layout,
    Server,
    Database,
    Lock,
    Box,
    Cpu
} from 'lucide-react';

const layers = [
    {
        name: 'Frontend Frameworks',
        icon: <Layout className="text-cyan-400" />,
        color: 'cyan'
    },
    {
        name: 'Backend Frameworks',
        icon: <Server className="text-emerald-400" />,
        color: 'emerald'
    },
    {
        name: 'Databases',
        icon: <Database className="text-blue-400" />,
        color: 'blue'
    },
    {
        name: 'Authentication',
        icon: <Lock className="text-purple-400" />,
        color: 'purple'
    },
    {
        name: 'Monorepo Architecture',
        icon: <Box className="text-indigo-400" />,
        color: 'indigo'
    },
    {
        name: 'Infrastructure',
        icon: <Cpu className="text-rose-400" />,
        color: 'rose'
    }
];

export function StackCustomization() {
    return (
        <section className="py-24 relative">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stack Customization</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Mix and match your favorite technologies to create the perfect blueprint.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="glass-card p-6 h-full flex flex-col items-start gap-4 cursor-pointer relative z-10 overflow-hidden border-white/5 group-hover:border-white/20 transition-all duration-300">
                                {/* Subtle background gradient glow */}
                                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${layer.color}-500/10 rounded-full blur-2xl group-hover:bg-${layer.color}-500/20 transition-all duration-500`} />

                                <div className={`p-3 rounded-xl bg-white/5 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                                    {layer.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl tracking-tight text-white/90 group-hover:text-white transition-colors">
                                        {layer.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Configure {layer.name.toLowerCase()} with premium presets and scalable architecture.
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 group-hover:text-cyan-400 transition-colors">
                                    <span>Customize</span>
                                    <div className="h-px flex-1 bg-white/5 group-hover:bg-cyan-500/20 transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
