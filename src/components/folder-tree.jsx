'use client';

import { resolveFolderIcon, resolveFileIcon } from '@/lib/icon-utils';
import { Icon } from '@iconify/react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function FolderTree({ tree, level = 0, onFileSelect }) {
    const [isOpen, setIsOpen] = useState(level < 2);

    if (tree.type === 'file') {
        const fileIcon = resolveFileIcon(tree.name);
        return (
            <div
                style={{ paddingLeft: `${level * 1.5}rem` }}
                className="flex items-center gap-2.5 cursor-pointer text-muted-foreground/50 hover:text-white hover:bg-white/5 rounded-lg p-1.5 transition-all group"
                onClick={() => onFileSelect({ name: tree.name, content: tree.content })}
            >
                <Icon icon={fileIcon} className="h-4 w-4 shrink-0 transition-colors" />
                <span className="text-sm font-medium tracking-tight whitespace-nowrap">{tree.name}</span>
            </div>
        );
    }

    const folderIcon = resolveFolderIcon(tree.name, isOpen);

    return (
        <div>
            <div
                style={{ paddingLeft: `${level * 1.5}rem` }}
                className="flex items-center justify-between gap-2.5 cursor-pointer hover:bg-white/5 rounded-lg p-1.5 transition-all group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center gap-2.5'>
                    <Icon icon={folderIcon} className="h-4 w-4 flex-shrink-0 transition-colors" />
                    <span className="text-[13px] font-semibold tracking-tight text-white/70 group-hover:text-white">{tree.name}</span>
                </div>
                <ChevronRight
                    className={cn(
                        'h-3 w-3 text-muted-foreground/30 transform transition-all group-hover:text-white/60',
                        isOpen && 'rotate-90 text-white/60'
                    )}
                />
            </div>
            {isOpen && (
                <div className="flex flex-col">
                    {tree.children.map((child, index) => (
                        <FolderTree key={index} tree={child} level={level + 1} onFileSelect={onFileSelect} />
                    ))}
                </div>
            )}
        </div>
    );
}
