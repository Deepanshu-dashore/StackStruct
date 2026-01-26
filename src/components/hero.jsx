'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Hero() {
    const techWords = ["Next", "React", "Nest", "Node"];
    const [text, setText] = useState("");
    const [techIndex, setTechIndex] = useState(-1); // -1 = typing "Generate.", >=0 = cycling techs
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            if (techIndex === -1) {
                const fullWord = "Generate.";
                const nextText = fullWord.substring(0, text.length + 1);
                setText(nextText);

                if (nextText === fullWord) {
                    setTypingSpeed(2000); // Pause on "Generate."
                    setTechIndex(0);
                    setText(""); // Clear for tech loop
                } else {
                    setTypingSpeed(150);
                }
            } else {
                const i = techIndex % techWords.length;
                const fullWord = techWords[i];

                const nextText = isDeleting
                    ? fullWord.substring(0, text.length - 1)
                    : fullWord.substring(0, text.length + 1);

                setText(nextText);

                if (!isDeleting && nextText === fullWord) {
                    setTypingSpeed(2000); // Pause at end of tech
                    setIsDeleting(true);
                } else if (isDeleting && nextText === "") {
                    setIsDeleting(false);
                    setTechIndex(techIndex + 1);
                    setTypingSpeed(500); // Pause before next tech
                } else {
                    setTypingSpeed(isDeleting ? 50 : 150);
                }
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, techIndex, typingSpeed]);

    return (
        <section className="relative w-full py-24 md:py-32 lg:py-10 pt-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                {/* Background code depth layer */}
                <div className="absolute inset-0 opacity-[0.03] font-mono text-[10px] leading-none select-none p-10 rotate-[-5deg] translate-y-[-10%] scale-110">
                    {Array.from({ length: 70 }).map((_, i) => (
                        <div key={i} className="whitespace-nowrap mb-1">
                            {`const project = await struct.generate({ frontend: 'nextjs', backend: 'express', auth: 'lucia' }); // Layer ${i} const project = await struct.generate({ frontend: 'nextjs', backend: 'express', auth: 'lucia' }); // Layer ${i}`}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container z-10 relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex flex-col justify-center space-y-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <main className="text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold tracking-tighter leading-[1.1] relative">
                            <h1 className="text-foreground neon-text-glow flex flex-wrap gap-x-3 text-nowrap items-baseline">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Design.
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Preview.
                                </motion.span>
                                <div className="relative inline-flex items-center min-w-[400px]">
                                    <span className="bg-linear-to-br from-cyan-500 via-blue-500 to-emerald-500 text-transparent bg-clip-text min-h-[1em]">
                                        {techIndex === -1 ? text : `Generate ${text}`}
                                    </span>
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                                        className="inline-block w-[3px] h-[0.9em] ml-2 bg-linear-to-br from-cyan-500 via-blue-500 to-emerald-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                                    />
                                </div>
                            </h1>
                        </main>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-w-[550px] text-xl md:text-2xl text-muted-foreground/90 font-light"
                    >
                        Scaffold modern frontend and backend projects in minutes — not hours.
                    </motion.p>

                    {/* <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-4 sm:flex-row pt-2"
                    >
                        <Link href="/create">
                            <Button
                                size="lg"
                                className="h-14 px-10 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 rounded-lg group cursor-pointer"
                            >
                                Create Your Project
                                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                        </Link>
                    </motion.div> */}
                </div>

                <div className="flex items-center justify-center lg:justify-end relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                        className="relative z-10 perspective-1000"
                    >
                        <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center">
                            {/* Floating animation wrapper */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                {/* Neon glow behind the image */}
                                <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[60px] transform scale-75 opacity-50" />

                                <Image
                                    src="/HeroImage.png"
                                    alt="StackStruct Architecture Visualization"
                                    width={1000}
                                    height={1000}
                                    className="object-contain scale-120 drop-shadow-2xl brightness-110"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
