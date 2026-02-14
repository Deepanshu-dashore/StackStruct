'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FuzzyText from '../components/FuzzyText';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#020206] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-30" />
                <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] opacity-20" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[110px] opacity-20" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] bg-repeat" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center px-6"
            >
                {/* The Fuzzy 404 */}
                <div className="mb-4">
                    <FuzzyText
                        baseIntensity={0.2}
                        hoverIntensity={0.5}
                        enableHover
                        fontSize="clamp(6rem, 20vw, 15rem)"
                        fontWeight={900}
                        color="#ffffff"
                        className="cursor-default"
                        transitionDuration={300}
                    >
                        404
                    </FuzzyText>
                </div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="space-y-4 max-w-md"
                >
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90">
                        Lost in the <span className="text-blue-400">Stack?</span>
                    </h1>
                    <p className="text-lg text-white/40 font-light leading-relaxed">
                        The resource you are looking for has been moved, deleted, or never existed in this architecture.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 mt-12"
                >
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-none h-12 px-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Return Home
                        </Link>
                    </Button>

                    <Button variant="outline" size="lg" onClick={() => window.history.back()} className="border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white h-12 px-8 rounded-full backdrop-blur-sm transition-all">
                        <span className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </span>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Subtle bottom text or link */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 text-[10px] tracking-[0.2em] uppercase font-bold text-white/30"
            >
                Error Code: ERR_PROJECT_STRUCTURE_NOT_FOUND
            </motion.div>
        </div>
    );
}
