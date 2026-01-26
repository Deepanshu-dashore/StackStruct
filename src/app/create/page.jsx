'use client';

import { useState, useMemo } from 'react';
import { generateFileTree, generateScript } from '@/lib/generators';
import { ConfigPanel } from '@/components/config-panel';
import { PreviewPanel } from '@/components/preview-panel';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCode2 } from 'lucide-react';
import { InstructionalScriptViewer } from '@/components/instructional-script-viewer';

export default function CreatePage() {
    const [config, setConfig] = useState({
        projectName: 'my-stackstruct-app',
        projectType: 'frontend-backend',
        monorepo: true,
        frontend: {
            framework: 'nextjs',
            language: 'typescript',
            style: 'tailwind',
            components: 'shadcn',
            dependencies: [],
            folderPreset: 'standard',
        },
        backend: {
            framework: 'express',
            language: 'typescript',
            auth: 'none',
            database: 'none',
            orm: 'none',
            fileUploads: false,
            folderPreset: 'standard',
        },
    });

    const fileTree = useMemo(() => generateFileTree(config), [config]);
    const script = useMemo(() => generateScript(fileTree, config), [fileTree, config]);

    return (
        <div className="flex min-h-screen bg-[#020206] text-white">
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main className="flex-1 transition-all duration-300 pl-64">
                    <div className="px-6 py-12 pt-8 md:px-8">
                        <div className="mx-auto w-full max-w-[1600px]">
                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-12">
                                <div className="xl:col-span-5">
                                    <ConfigPanel config={config} setConfig={setConfig} />
                                </div>
                                <div className="xl:col-span-7">
                                    <PreviewPanel fileTree={fileTree} />
                                </div>
                            </div>

                            <div className="mt-20">
                                <Card className="w-full glass-card border-white/5 overflow-hidden shadow-3xl">
                                    <CardHeader className="flex flex-row items-center gap-4 border-b border-white/5 bg-white/2 py-8 px-10">
                                        <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/10">
                                            <FileCode2 className="h-6 w-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <CardTitle className='text-2xl font-bold tracking-tight'>Scaffold Your Architecture</CardTitle>
                                            <p className="text-sm text-muted-foreground/50 font-light">Follow these steps to initialize your project locally.</p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <InstructionalScriptViewer script={script} />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
