'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { ChevronRight } from 'lucide-react';

export default function FolderStructure() {
    return (
        <section className="bg-black/20 py-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight text-white/90">
                        Opinionated Project Structure
                    </h2>
                    <p className="text-lg text-muted-foreground/40 leading-relaxed font-light">
                        Stack Struct generates clean, scalable folder structures tailored to
                        each framework and preset. We follow industry best practices for every stack.
                    </p>
                </div>

                <div className="mt-20 relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
                    <div className="relative rounded-2xl bg-[#020206] border border-white/5 overflow-hidden shadow-3xl max-w-2xl">
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-white/2">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 opacity-20">
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                </div>
                                <span className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">Architecture Blueprint</span>
                            </div>
                        </div>
                        <div className="p-10 space-y-4 overflow-y-auto max-h-[500px] custom-scrollbar">
                            <TreeItem label="my-stack-project" icon="catppuccin:folder-root" open>
                                <TreeItem label="frontend" icon="catppuccin:folder-src" open>
                                    <TreeItem label="app" icon="catppuccin:folder-app" open>
                                        <TreeItem label="layout.tsx" icon="catppuccin:nextjs" />
                                        <TreeItem label="page.tsx" icon="catppuccin:nextjs" />
                                    </TreeItem>
                                    <TreeItem label="components" icon="catppuccin:folder-components" />
                                    <TreeItem label="lib" icon="catppuccin:folder-lib" />
                                </TreeItem>
                                <TreeItem label="backend" icon="catppuccin:folder-api" open>
                                    <TreeItem label="src" icon="catppuccin:folder-src" />
                                    <TreeItem label="prisma" icon="catppuccin:folder-database" />
                                    <TreeItem label="package.json" icon="catppuccin:json" />
                                </TreeItem>
                                <TreeItem label="README.md" icon="catppuccin:markdown" />
                            </TreeItem>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TreeItem({ label, icon, children, open = false }) {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-3 hover:bg-white/3 p-2 rounded-lg cursor-pointer transition-all group border border-transparent hover:border-white/5">
                {children ? (
                    <ChevronRight className={`h-3 w-3 text-white/20 transition-transform ${open ? 'rotate-90 text-white/60' : ''}`} />
                ) : (
                    <div className="w-3" />
                )}
                <Icon icon={icon} className="h-4 w-4 shrink-0 transition-opacity opacity-70 group-hover:opacity-100" />
                <span className="text-[13px] font-medium text-white/50 group-hover:text-white transition-colors">{label}</span>
            </div>
            {open && children && (
                <div className="ml-5 border-l border-white/5 pl-4 space-y-3">
                    {children}
                </div>
            )}
        </div>
    );
}
