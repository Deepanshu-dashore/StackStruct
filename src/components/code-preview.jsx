'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, File as FileIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

export function CodePreview({ content, language, fileName, allowCopy = true }) {
    const [hasCopied, setHasCopied] = useState(false);
    const { toast } = useToast();

    const handleCopy = () => {
        if (!allowCopy) return;
        navigator.clipboard.writeText(content).then(() => {
            setHasCopied(true);
            toast({ title: 'Copied to clipboard!' });
            setTimeout(() => setHasCopied(false), 2000);
        });
    };

    const isTerminal = language === 'bash';
    const lang = language === 'typescript' ? 'tsx' : language || 'jsx';

    return (
        <Card className="relative bg-[#020206] overflow-hidden h-full border-white/5 flex flex-col shadow-none rounded-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-transparent">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">{fileName}</span>
                </div>
                {allowCopy && (
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleCopy}
                        className="h-8 w-8 p-0 text-white/20 hover:text-white/60 hover:bg-white/5 transition-all rounded-lg"
                    >
                        {hasCopied ? (
                            <Check className="h-3 w-3 text-emerald-500" />
                        ) : (
                            <Copy className="h-3.5 w-3.5" />
                        )}
                    </Button>
                )}
            </div>
            <CardContent className="p-0 flex-1 bg-[#020206]">
                <ScrollArea className='h-full'>
                    <SyntaxHighlighter
                        language={lang}
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            padding: '1rem',
                            backgroundColor: 'transparent',
                            fontSize: '0.875rem',
                            lineHeight: '1.5rem',
                            height: '100%',
                        }}
                        codeTagProps={{
                            className: 'font-code'
                        }}
                        showLineNumbers
                    >
                        {content}
                    </SyntaxHighlighter>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
