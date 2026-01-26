'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTASection() {
    return (
        <section className="py-32 relative border-t border-white/5">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                            Ready to Build?
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Start creating your production-ready folder architecture today.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/create">
                            <Button
                                size="lg"
                                className="h-16 px-12 text-xl bg-white/5 hover:bg-white/10 text-white border border-cyan-500/50 backdrop-blur-xl transition-all shadow-[0_0_30_px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50_px_rgba(6,182,212,0.5)] rounded-full group font-semibold cursor-pointer"
                            >
                                Create Your Project
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
