'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Aurora from '@/components/ui/Aurora';
import { Settings, Eye, FileCode, ArrowRight, File, Folder } from 'lucide-react';

// Enhanced SVG Components with advanced animations
const ConfigureSVG = () => {
    const configs = [
        { label: 'Frontend', sublabel: 'Next.js', color: 'cyan', enabled: true },
        { label: 'Backend', sublabel: 'Express', color: 'white', enabled: false },
        { label: 'Language', sublabel: 'TypeScript', color: 'purple', enabled: true },
        { label: 'Database', sublabel: 'PostgreSQL', color: 'rose', enabled: true },
        { label: 'Monorepo', sublabel: 'Enabled', color: 'amber', enabled: true },
    ];

    return (
        <div className="relative w-full aspect-video bg-gradient-to-br from-[#050508] via-[#0a0a0f] to-[#050508] rounded-xl border border-white/10 overflow-hidden group/svg shadow-2xl">
            {/* Window Controls */}
            <div className="absolute top-2 left-3 flex gap-1.5 z-10">
                <motion.div 
                    className="w-2 h-2 rounded-full bg-red-500/70 hover:bg-red-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                    className="w-2 h-2 rounded-full bg-amber-500/70 hover:bg-amber-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                    className="w-2 h-2 rounded-full bg-emerald-500/70 hover:bg-emerald-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                />
            </div>

            {/* Title Bar */}
            <motion.div 
                className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-medium"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Project Configuration
            </motion.div>

            {/* Configuration Options */}
            <div className="mt-10 px-6 space-y-3.5">
                {configs.map((config, i) => (
                    <motion.div 
                        key={i} 
                        className="flex items-center justify-between group/item hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    >
                        <div className="space-y-1 flex-1">
                            <motion.div 
                                className="h-2 w-20 bg-gradient-to-r from-white/20 to-white/10 rounded-full relative overflow-hidden"
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{ x: [-100, 100] }}
                                    transition={{ delay: 1.5 + i * 0.2, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                />
                            </motion.div>
                            <motion.div 
                                className="h-1.5 w-16 bg-white/5 rounded-full"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                            />
                        </div>

                        {/* Animated Toggle Switch */}
                        <div className="relative">
                            <div className="w-10 h-5 bg-white/5 rounded-full border border-white/10 relative overflow-hidden">
                                <motion.div
                                    className={`absolute inset-y-0.5 left-0.5 w-4 h-4 rounded-full shadow-lg ${
                                        config.color === 'cyan' ? 'bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-cyan-500/50' :
                                        config.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-500/50' :
                                        config.color === 'rose' ? 'bg-gradient-to-br from-rose-400 to-rose-600 shadow-rose-500/50' :
                                        config.color === 'amber' ? 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/50' :
                                        'bg-white/20'
                                    }`}
                                    initial={{ x: 0 }}
                                    animate={{ x: config.enabled ? 20 : 0 }}
                                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5, type: "spring", stiffness: 200 }}
                                />
                                {config.enabled && (
                                    <motion.div
                                        className={`absolute inset-0 ${
                                            config.color === 'cyan' ? 'bg-cyan-500/20' :
                                            config.color === 'purple' ? 'bg-purple-500/20' :
                                            config.color === 'rose' ? 'bg-rose-500/20' :
                                            config.color === 'amber' ? 'bg-amber-500/20' :
                                            'bg-white/10'
                                        }`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 + i * 0.15 }}
                                    />
                                )}
                            </div>
                            {/* Ripple Effect on Enable */}
                            {config.enabled && (
                                <motion.div
                                    className={`absolute inset-0 rounded-full ${
                                        config.color === 'cyan' ? 'bg-cyan-500' :
                                        config.color === 'purple' ? 'bg-purple-500' :
                                        config.color === 'rose' ? 'bg-rose-500' :
                                        config.color === 'amber' ? 'bg-amber-500' :
                                        'bg-white'
                                    }`}
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{ scale: 2, opacity: 0 }}
                                    transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Animated Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.06),transparent_60%)] pointer-events-none" />
            
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
                    style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        delay: i * 0.3,
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Bottom Glow */}
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyan-500/5 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            />
        </div>
    );
};

const PreviewSVG = () => {
    const files = [
        { name: 'package.json', type: 'file', color: 'cyan', indent: 1 },
        { name: 'tsconfig.json', type: 'file', color: 'blue', indent: 1 },
        { name: 'src/', type: 'folder', color: 'yellow', indent: 1 },
        { name: 'app.ts', type: 'file', color: 'indigo', indent: 2 },
        { name: 'server.ts', type: 'file', color: 'purple', indent: 2 },
        { name: 'components/', type: 'folder', color: 'yellow', indent: 1 },
        { name: 'Button.tsx', type: 'file', color: 'cyan', indent: 2 },
        { name: 'utils/', type: 'folder', color: 'yellow', indent: 1 },
        { name: 'helpers.ts', type: 'file', color: 'amber', indent: 2 },
    ];

    const codeLines = [
        { width: 45, color: 'purple', text: 'import' },
        { width: 60, color: 'default', text: '' },
        { width: 70, color: 'cyan', text: 'function' },
        { width: 55, color: 'default', text: '' },
        { width: 65, color: 'amber', text: 'const' },
        { width: 50, color: 'default', text: '' },
        { width: 75, color: 'rose', text: 'return' },
        { width: 80, color: 'default', text: '' },
        { width: 50, color: 'emerald', text: 'export' },
        { width: 40, color: 'default', text: '' },
    ];

    return (
        <div className="relative w-full aspect-video bg-gradient-to-br from-[#050508] via-[#0a0a0f] to-[#050508] rounded-xl border border-white/10 overflow-hidden flex group/svg text-[8px] font-mono shadow-2xl">
            {/* Left Panel: Folder Tree */}
            <div className="w-2/5 border-r border-white/10 p-4 space-y-2.5 bg-black/20">
                {/* Panel Header */}
                <motion.div 
                    className="flex items-center gap-2 pb-3 border-b border-white/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Folder className="w-3 h-3 text-cyan-500/70 fill-cyan-500/30" />
                    <div className="h-1.5 w-16 bg-gradient-to-r from-white/30 to-white/10 rounded-full" />
                </motion.div>

                {/* Root Folder */}
                <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Folder className="w-3 h-3 text-blue-500/70 fill-blue-500/40" />
                    <motion.div 
                        className="h-1.5 w-16 bg-blue-500/30 rounded-full"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* File Tree */}
                <div className="space-y-1.5">
                    {files.map((file, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-1.5 group/file hover:bg-white/5 px-2 py-1 rounded transition-colors cursor-pointer"
                            style={{ paddingLeft: `${file.indent * 12}px` }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                            whileHover={{ x: 2 }}
                        >
                            {/* Tree Branch */}
                            <svg className="w-2 h-2 opacity-20" viewBox="0 0 10 10">
                                <motion.path
                                    d="M0 0 L5 5"
                                    stroke="white"
                                    strokeWidth="1"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                                />
                            </svg>

                            {/* File/Folder Icon */}
                            {file.type === 'folder' ? (
                                <Folder className={`w-2.5 h-2.5 text-${file.color}-500/60 fill-${file.color}-500/30`} />
                            ) : (
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <File className={`w-2 h-2 ${
                                        file.color === 'cyan' ? 'text-cyan-500 fill-cyan-500/40' :
                                        file.color === 'indigo' ? 'text-indigo-500 fill-indigo-500/40' :
                                        file.color === 'amber' ? 'text-amber-500 fill-amber-500/40' :
                                        file.color === 'purple' ? 'text-purple-500 fill-purple-500/40' :
                                        file.color === 'blue' ? 'text-blue-500 fill-blue-500/40' :
                                        'text-white/20 fill-white/10'
                                    }`} />
                                </motion.div>
                            )}

                            {/* File Name */}
                            <motion.div 
                                className={`h-1 rounded-full ${
                                    file.color === 'cyan' ? 'w-12 bg-gradient-to-r from-cyan-500/50 to-cyan-500/20' :
                                    file.color === 'indigo' ? 'w-11 bg-gradient-to-r from-indigo-500/50 to-indigo-500/20' :
                                    file.color === 'amber' ? 'w-13 bg-gradient-to-r from-amber-500/50 to-amber-500/20' :
                                    file.color === 'purple' ? 'w-12 bg-gradient-to-r from-purple-500/50 to-purple-500/20' :
                                    file.color === 'blue' ? 'w-14 bg-gradient-to-r from-blue-500/50 to-blue-500/20' :
                                    file.color === 'yellow' ? 'w-10 bg-gradient-to-r from-yellow-500/50 to-yellow-500/20' :
                                    'w-10 bg-white/10'
                                }`}
                                initial={{ width: 0 }}
                                whileInView={{ width: 'auto' }}
                                transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                            />

                            {/* Hover Indicator */}
                            <motion.div
                                className="w-1 h-1 rounded-full bg-cyan-500/0 group-hover/file:bg-cyan-500/80 transition-colors"
                                whileHover={{ scale: 1.5 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Scanning Animation */}
                <motion.div
                    className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                    animate={{ y: [0, 200, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                />
            </div>

            {/* Right Panel: Code Preview */}
            <div className="flex-1 p-4 py-6 bg-black/10 relative">
                {/* Code Header */}
                <motion.div 
                    className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                    <div className="h-1 w-20 bg-white/10 rounded-full" />
                </motion.div>

                {/* Code Lines */}
                <div className="space-y-2">
                    {codeLines.map((line, i) => (
                        <motion.div
                            key={i}
                            className="relative"
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                        >
                            {/* Line Number */}
                            <motion.div
                                className="absolute -left-3 top-0 text-white/20 text-[6px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7 + i * 0.08 }}
                            >
                                {i + 1}
                            </motion.div>

                            {/* Code Line */}
                            <motion.div
                                className={`h-1.5 rounded-full relative overflow-hidden ${
                                    line.color === 'purple' ? 'bg-gradient-to-r from-purple-500/30 to-purple-500/10' :
                                    line.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500/30 to-cyan-500/10' :
                                    line.color === 'amber' ? 'bg-gradient-to-r from-amber-500/30 to-amber-500/10' :
                                    line.color === 'rose' ? 'bg-gradient-to-r from-rose-500/30 to-rose-500/10' :
                                    line.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500/30 to-emerald-500/10' :
                                    'bg-white/5'
                                }`}
                                style={{ width: `${line.width}%` }}
                                whileHover={{ scale: 1.02, x: 2 }}
                            >
                                {/* Syntax Highlighting Shimmer */}
                                {line.color !== 'default' && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ x: [-100, 200] }}
                                        transition={{ 
                                            delay: 2 + i * 0.3, 
                                            duration: 1.5, 
                                            repeat: Infinity, 
                                            repeatDelay: 4 
                                        }}
                                    />
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Typing Cursor */}
                <motion.div
                    className="absolute right-4 top-20 w-1 h-3 bg-white/70"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }} />
            </div>

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(6,182,212,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.06),transparent_50%)] pointer-events-none" />
        </div>
    );
};

const GenerateSVG = () => {
    const terminalLines = [
        { text: '✓ Creating project structure...', color: 'emerald', delay: 0.5 },
        { text: '✓ Installing dependencies...', color: 'cyan', delay: 1.0 },
        { text: '✓ Configuring TypeScript...', color: 'blue', delay: 1.5 },
        { text: '✓ Setting up ESLint...', color: 'purple', delay: 2.0 },
        { text: '✨ Project ready!', color: 'amber', delay: 2.5 },
    ];

    const progressSteps = [
        { label: 'Files', icon: '📁', progress: 100, color: 'cyan' },
        { label: 'Deps', icon: '📦', progress: 75, color: 'purple' },
        { label: 'Config', icon: '⚙️', progress: 60, color: 'emerald' },
    ];

    return (
        <div className="relative w-full aspect-video bg-gradient-to-br from-[#0a0a0f] via-[#050508] to-[#0a0a0f] rounded-xl border border-white/10 overflow-hidden group/svg font-mono shadow-2xl">
            {/* Terminal Header */}
            <div className="h-7 bg-gradient-to-b from-white/5 to-white/2 border-b border-white/10 flex items-center px-3 gap-2">
                {/* Window Controls */}
                <div className="flex gap-1.5">
                    <motion.div 
                        className="w-2 h-2 rounded-full bg-red-500/70 hover:bg-red-500 cursor-pointer"
                        whileHover={{ scale: 1.3 }}
                    />
                    <motion.div 
                        className="w-2 h-2 rounded-full bg-yellow-500/70 hover:bg-yellow-500 cursor-pointer"
                        whileHover={{ scale: 1.3 }}
                    />
                    <motion.div 
                        className="w-2 h-2 rounded-full bg-green-500/70 hover:bg-green-500 cursor-pointer"
                        whileHover={{ scale: 1.3 }}
                    />
                </div>

                {/* Terminal Title */}
                <motion.div 
                    className="flex-1 text-center text-[9px] text-white/40 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    bash — struct-generator
                </motion.div>

                {/* Minimize/Maximize Icons */}
                <div className="flex gap-2 text-white/30 text-[8px]">
                    <span className="hover:text-white/60 cursor-pointer">−</span>
                    <span className="hover:text-white/60 cursor-pointer">□</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 space-y-3 relative">
                {/* Command Input */}
                <motion.div 
                    className="flex items-center gap-2 text-[9px]"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.span 
                        className="text-emerald-400 font-bold"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        $
                    </motion.span>
                    <motion.span 
                        className="text-white/90"
                        initial={{ width: 0 }}
                        whileInView={{ width: 'auto' }}
                        transition={{ delay: 0.4, duration: 1.5 }}
                    >
                        npx create-stack-struct my-app
                    </motion.span>
                    <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 1.5 }}
                        className="w-1 h-3 bg-emerald-400/80"
                    />
                </motion.div>

                <div className="h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 my-3" />

                {/* Terminal Output Lines */}
                <div className="space-y-2 text-[8px]">
                    {terminalLines.map((line, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: line.delay, duration: 0.3 }}
                        >
                            <motion.span
                                className={`${
                                    line.color === 'emerald' ? 'text-emerald-400' :
                                    line.color === 'cyan' ? 'text-cyan-400' :
                                    line.color === 'blue' ? 'text-blue-400' :
                                    line.color === 'purple' ? 'text-purple-400' :
                                    line.color === 'amber' ? 'text-amber-400' :
                                    'text-white/70'
                                }`}
                                animate={line.color === 'amber' ? {
                                    scale: [1, 1.1, 1],
                                    opacity: [1, 0.8, 1]
                                } : {}}
                                transition={{ duration: 0.5, repeat: line.color === 'amber' ? Infinity : 0 }}
                            >
                                {line.text}
                            </motion.span>

                            {/* Progress Indicator */}
                            {i < terminalLines.length - 1 && (
                                <motion.div
                                    className="flex-1 h-0.5 bg-white/5 rounded-full overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: line.delay + 0.2 }}
                                >
                                    <motion.div
                                        className={`h-full ${
                                            line.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' :
                                            line.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-cyan-400' :
                                            line.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                                            line.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-400' :
                                            'bg-white/20'
                                        }`}
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ delay: line.delay + 0.3, duration: 0.6, ease: "easeOut" }}
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Progress Cards */}
                <motion.div 
                    className="flex gap-3 pt-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 }}
                >
                    {progressSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0, scale: 0.8 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ 
                                delay: 3 + i * 0.15, 
                                type: "spring", 
                                stiffness: 200,
                                damping: 15
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="relative flex flex-col items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                        >
                            {/* Icon */}
                            <motion.div 
                                className="text-[14px]"
                                animate={{ 
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    delay: 3.5 + i * 0.2,
                                    duration: 0.5 
                                }}
                            >
                                {step.icon}
                            </motion.div>

                            {/* Progress Ring */}
                            <svg className="w-10 h-10" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="2"
                                />
                                <motion.path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke={
                                        step.color === 'cyan' ? 'rgb(6, 182, 212)' :
                                        step.color === 'purple' ? 'rgb(168, 85, 247)' :
                                        step.color === 'emerald' ? 'rgb(16, 185, 129)' :
                                        'white'
                                    }
                                    strokeWidth="2"
                                    strokeDasharray={`${step.progress}, 100`}
                                    strokeLinecap="round"
                                    initial={{ strokeDasharray: '0, 100' }}
                                    whileInView={{ strokeDasharray: `${step.progress}, 100` }}
                                    transition={{ delay: 3.2 + i * 0.15, duration: 1, ease: "easeOut" }}
                                />
                            </svg>

                            {/* Label */}
                            <div className="text-[7px] text-white/60 font-medium">{step.label}</div>

                            {/* Glow Effect */}
                            <motion.div
                                className={`absolute inset-0 rounded-lg ${
                                    step.color === 'cyan' ? 'bg-cyan-500' :
                                    step.color === 'purple' ? 'bg-purple-500' :
                                    step.color === 'emerald' ? 'bg-emerald-500' :
                                    'bg-white'
                                }/10 blur-md -z-10`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 3.5 + i * 0.15 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Success Message */}
                <motion.div
                    className="flex items-center justify-center gap-2 mt-4 text-[9px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 4, type: "spring", stiffness: 200 }}
                >
                    <motion.span
                        className="text-emerald-400 text-[12px]"
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ delay: 4.2, duration: 0.6 }}
                    >
                        ✓
                    </motion.span>
                    <span className="text-white/80 font-medium">Project scaffolded successfully!</span>
                </motion.div>

                {/* Ambient Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
                        style={{ 
                            left: `${15 + i * 12}%`, 
                            top: `${25 + (i % 4) * 15}%` 
                        }}
                        animate={{
                            y: [-5, 5, -5],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                            delay: 2 + i * 0.2,
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.06),transparent_50%)] pointer-events-none" />

            {/* Scanline Effect */}
            <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
                animate={{ y: [0, 160, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
            />
        </div>
    );
};

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-[#020206]">
            <Header />
            {/* Hero Section - Purpose Statement */}
            <section className="py-24 text-center container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        How Struct Builds Your Project — Step by Step
                    </h1>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                        No hidden magic. Just predictable, reproducible project scaffolding.
                        Configure your stack, preview the output, and generate a complete
                        project setup — all before touching your terminal.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/create">
                            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                                Create Your Project
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="rounded-full px-8">
                            View Example Output
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Step 1 - Configure */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                <Settings className="w-5 h-5 text-cyan-500" />
                            </div>
                            <h2 className="text-2xl font-medium">1. Configure</h2>
                        </div>
                        <p className="mt-3 text-muted-foreground">
                            Select your frontend, backend, language, and structure.
                            Struct converts your choices into a single configuration object.
                        </p>

                        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                Frontend & backend frameworks
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                TypeScript or JavaScript
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                Folder presets (Minimal → Advanced)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                Monorepo or single repo
                            </li>
                        </ul>

                        <div className="mt-8 p-4 rounded-lg bg-black/40 border border-white/10">
                            <p className="text-xs text-muted-foreground mb-2">Configuration Object</p>
                            <pre className="text-xs text-green-400 font-mono">
{`{
  frontend: "Next.js",
  backend: "Express",
  language: "TypeScript",
  structure: "Advanced",
  monorepo: true
}`}
                            </pre>
                        </div>
                    </motion.div>

                    {/* Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <ConfigureSVG />
                    </motion.div>
                </div>
            </section>

            {/* Step 2 - Preview (Most Important) */}
            <section className="container mx-auto px-4 py-20 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1"
                    >
                        <PreviewSVG />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                <Eye className="w-5 h-5 text-purple-500" />
                            </div>
                            <h2 className="text-2xl font-medium">2. Preview</h2>
                        </div>
                        <p className="mt-3 text-muted-foreground">
                            Instantly see the exact folder structure and boilerplate code
                            before anything is generated.
                        </p>

                        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-purple-500" />
                                Live folder tree visualization
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-purple-500" />
                                Click files to preview content
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-purple-500" />
                                No guessing what gets created
                            </li>
                        </ul>

                        <div className="mt-8 p-4 rounded-lg bg-black/40 border border-white/10">
                            <p className="text-xs text-muted-foreground mb-2">What You'll See</p>
                            <div className="text-xs font-mono text-blue-400 space-y-1">
                                <div>📁 my-app/</div>
                                <div className="pl-4">📁 src/</div>
                                <div className="pl-8">📄 app.ts</div>
                                <div className="pl-8">📄 server.ts</div>
                                <div className="pl-4">📁 components/</div>
                                <div className="pl-4">📄 package.json</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Step 3 - Generate */}
            <section className="container mx-auto px-4 py-20 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                <FileCode className="w-5 h-5 text-emerald-500" />
                            </div>
                            <h2 className="text-2xl font-medium">3. Generate</h2>
                        </div>
                        <p className="mt-3 text-muted-foreground">
                            Struct generates a transparent shell script that you control.
                            Nothing runs automatically.
                        </p>

                        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                Copy & run in your terminal
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                Fully readable bash script
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                Safe, predictable setup
                            </li>
                        </ul>

                        <div className="mt-8 p-4 rounded-lg bg-black/40 border border-white/10">
                            <p className="text-xs text-muted-foreground mb-2">Generated Script</p>
                            <pre className="text-xs text-yellow-400 font-mono">
{`#!/bin/bash
mkdir -p my-app/src
cd my-app
echo "package.json" > package.json
npm install
# ... more commands`}
                            </pre>
                        </div>
                    </motion.div>

                    {/* Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <GenerateSVG />
                    </motion.div>
                </div>
            </section>

            {/* Under the Hood - For Serious Devs */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-medium text-center">
                            What Happens Under the Hood
                        </h2>
                        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
                            A transparent, deterministic pipeline that converts your selections into executable code.
                        </p>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { icon: Settings, title: 'UI Inputs', desc: 'Framework selections and configuration options', color: 'cyan' },
                                { icon: FileCode, title: 'AppConfig', desc: 'Normalized configuration object', color: 'purple' },
                                { icon: Folder, title: 'Virtual File Tree', desc: 'In-memory representation of project structure', color: 'emerald' },
                                { icon: File, title: 'Shell Script', desc: 'Executable bash commands you run manually', color: 'amber' }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="border border-white/10 rounded-xl p-6 bg-black/20 text-center hover:border-white/20 transition-colors group"
                                >
                                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${step.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <step.icon className={`w-6 h-6 text-${step.color}-500`} />
                                    </div>
                                    <h3 className="font-medium mb-2">{step.title}</h3>
                                    <p className="text-xs text-muted-foreground">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-12 p-6 rounded-xl bg-black/40 border border-white/10 max-w-3xl mx-auto"
                        >
                            <h3 className="font-medium mb-3 flex items-center gap-2">
                                <span>🔒</span>
                                <span>Zero Side Effects</span>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Nothing is installed, created, or executed until you explicitly run the generated script.
                                Struct operates entirely in-browser, generating a deterministic output based on your configuration.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA with Aurora */}
            <section className="py-32 relative overflow-hidden border-t border-white/5">
                <div className='absolute inset-0 rotate-180 -bottom-32'>
                    <Aurora
                        colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={1}
                    />
                </div>
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Ready to scaffold your next project?
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                            Start with your stack, preview the structure, and generate production-ready code in seconds.
                        </p>

                        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                            <Link href="/create">
                                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.05] transition-all">
                                    <span>Create Project</span>
                                    <ArrowRight className="h-5 w-5 ml-2" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-white/20 hover:bg-white/10">
                                View Example
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
