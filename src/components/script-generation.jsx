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
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Script Generation</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Ready-to-run commands for your customized stack.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto glass-card rounded-lg overflow-hidden border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
                >
                    <div className="flex items-center justify-between px-6 py-3 bg-white/2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <Terminal className="h-4 w-4 text-emerald-400" />
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Bash Script</span>
                        </div>
                        <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                            <Copy className="h-3 w-3" />
                            Copy Command
                        </button>
                    </div>
                    <div className="p-8 font-mono text-sm sm:text-base bg-black/40">
                        <pre className="text-emerald-400/90 leading-relaxed overflow-x-auto whitespace-pre">
                            {script}
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
