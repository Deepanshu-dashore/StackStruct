'use client';

import { CodePreview } from './code-preview';
import { CheckCircle, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';

export function InstructionalScriptViewer({ script }) {
    const { toast } = useToast();

    const handleCopyAll = () => {
        navigator.clipboard.writeText(script.finalScript).then(() => {
            toast({ title: 'Copied to clipboard!', description: 'You can now paste the full script in your terminal.' });
        });
    };

    return (
        <div className="relative bg-[#020206] text-foreground rounded-xl overflow-hidden h-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-5 right-6 z-10">
                <Button onClick={handleCopyAll} variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 text-white gap-2 rounded-full backdrop-blur-md transition-all hover:border-cyan-500/50 px-5">
                    <Copy className="h-3.5 w-3.5 opacity-70" />
                    <span className="text-[11px] font-bold tracking-wider uppercase">Copy Script</span>
                </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-22rem)]">
                <div className="p-10 md:p-12">
                    <div className="flex flex-col gap-20">
                        {/* Step 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            <div className="space-y-5">
                                <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-muted-foreground/40">
                                    <span>[ 01 ]</span>
                                    <div className="h-px flex-1 bg-white/5" />
                                </div>
                                <h1 className="text-2xl font-bold tracking-tight text-white/95">Create your project</h1>
                                <p className="text-[15px] text-muted-foreground/60 leading-relaxed font-light max-w-md">
                                    Start by creating a new framework project if you don't have one set up already. This command will create the main workspace.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                <CodePreview
                                    content={`mkdir -p "${script.projectName}" && cd "${script.projectName}"`}
                                    language="bash"
                                    fileName="Terminal"
                                    allowCopy={true}
                                />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            <div className="space-y-5">
                                <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-muted-foreground/40">
                                    <span>[ 02 ]</span>
                                    <div className="h-px flex-1 bg-white/5" />
                                </div>
                                <h1 className="text-2xl font-bold tracking-tight text-white/95">Scaffold Files & Folders</h1>
                                <p className="text-[15px] text-muted-foreground/60 leading-relaxed font-light max-w-md">
                                    Generate the initial directory structure and boilerplate files for your frontend and backend modules.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                <CodePreview
                                    content={script.scaffoldingCommands.join('\n\n')}
                                    language="bash"
                                    fileName="Terminal"
                                    allowCopy={true}
                                />
                            </div>
                        </div>

                        {/* Step 3 */}
                        {script.installCommands.length > 0 && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div className="space-y-5">
                                    <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-muted-foreground/40">
                                        <span>[ 03 ]</span>
                                        <div className="h-px flex-1 bg-white/5" />
                                    </div>
                                    <h1 className="text-2xl font-bold tracking-tight text-white/95">Install Dependencies</h1>
                                    <p className="text-[15px] text-muted-foreground/60 leading-relaxed font-light max-w-md">
                                        Download and install all necessary npm packages for your selected framework and component libraries.
                                    </p>
                                </div>
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-linear-to-r from-purple-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                    <CodePreview
                                        content={script.installCommands.join('\n\n')}
                                        language="bash"
                                        fileName="Terminal"
                                        allowCopy={true}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Final Step */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/2 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-emerald-400">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <h1 className="text-xl font-bold">All Done!</h1>
                                </div>
                                <p className="text-[14px] text-muted-foreground/50 leading-relaxed">
                                    Your project architecture is ready. Copy the full script or run these steps individually to start coding.
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Open Project Folder
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
