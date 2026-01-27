'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Aurora from './ui/Aurora';
import { ArrowRight } from 'lucide-react/dist/cjs/lucide-react';

export function CTASection() {
    return (
        <section className="py-28 relative border-t border-white/5">
            <div className='absolute inset-0 rotate-180 -bottom-32'>
                <Aurora
                    colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={1}
                />
            </div>
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
                                className="inline-flex gap-3 items-center justify-center h-14 rounded-full bg-white px-10 text-sm font-bold text-black hover:bg-white/90 transition-all hover:scale-[1.05] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                                Create Your Project
                                <ArrowRight className="h-5 w-5 text-inherit animation-pulse " />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
