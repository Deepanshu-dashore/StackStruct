'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderTree } from './folder-tree';
import { CodePreview } from './code-preview';
import { FolderKanban, FileCode2 } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

export function PreviewPanel({ fileTree }) {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <Card className="w-full glass bg-transparent border-white/5 h-full flex flex-col overflow-hidden shadow-none">
            <CardHeader className="flex flex-row items-center gap-3 border-b border-white/5 bg-transparent py-6 px-5">
                <div className="text-emerald-500/70">
                    <FolderKanban className="h-6 w-6 mt-1.5" />
                </div>
                <CardTitle className='text-2xl font-bold tracking-tight text-white/90'>Project Structure</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 grid grid-cols-1 md:grid-cols-10 gap-6 p-6 h-full overflow-hidden">
                <div className="flex flex-col gap-2 md:col-span-4 h-full">
                    <div className="glass-card bg-white/2 border-white/5 h-full flex flex-col overflow-hidden rounded-xl">
                        <ScrollArea>
                            <CardContent className="p-2">
                                <FolderTree tree={fileTree} onFileSelect={setSelectedFile} />
                            </CardContent>
                        </ScrollArea>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:col-span-6 h-full">
                    {selectedFile ? (
                        <CodePreview
                            fileName={selectedFile.name}
                            content={selectedFile.content || `# ${selectedFile.name} is empty.`}
                            language='jsx'
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full border border-dashed border-white/5 rounded-xl bg-white/2 p-12 text-center">
                            <div className="p-4 bg-emerald-500/5 rounded-full mb-4">
                                <FileCode2 className="h-8 w-8 text-emerald-500/30" />
                            </div>
                            <p className="text-sm font-semibold text-white/40 tracking-tight">System Ready</p>
                            <p className="text-[12px] text-muted-foreground/30 max-w-[200px] mt-1">Select a configuration file to inspect the architecture.</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
