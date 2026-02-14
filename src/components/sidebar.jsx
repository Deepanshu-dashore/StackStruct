'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { Icons } from './icons';

const mainNavItems = [
    { name: 'Home', href: '/', icon: 'lucide:home' },
    { name: 'Templates', href: '/templates', icon: 'lucide:layout-template' },
];

const supportNavItems = [
    { name: 'Documentation', href: '/docs', icon: 'lucide:book-open' },
    { name: 'Support', href: '/support', icon: 'lucide:help-circle' },
    { name: 'GitHub Support', href: 'https://github.com/Deepanshu-dashore/StackStruct', icon: 'mdi:github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/deepanshu-dashore', icon: 'lucide:linkedin' },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-white/5 bg-[#020206] lg:flex z-50">
            {/* Branding */}
            <div className="flex h-16 items-center gap-2 px-6 border-b border-white/5">
                <img src="/NewLogo.png" alt="Stack Struct" className="h-8 w-8" />
                <span className="text-lg font-bold tracking-tight text-white">Stack Struct</span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-4 px-6 overflow-y-auto">
                <div className="space-y-8">
                    {/* Main Nav */}
                    <nav className="space-y-1">
                        {mainNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                                    pathname === item.href
                                        ? "bg-white/5 text-white"
                                        : "text-muted-foreground hover:text-white hover:bg-white/2"
                                )}
                            >
                                <Icon icon={item.icon} className="h-4 w-4" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Special Section */}
                    <div className="space-y-3">
                        <Link
                            href="/templates"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-white bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all shadow-lg"
                        >
                            <Icon icon="lucide:layers" className="h-4 w-4 text-white/70" />
                            Templates & Guides
                        </Link>
                    </div>

                    <div className="h-px bg-white/5 mx-2" />

                    {/* Support Nav */}
                    <nav className="space-y-1">
                        {supportNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-all duration-200 group"
                            >
                                <Icon icon={item.icon} className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom User Section (Placeholder) */}
                {/* <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/2 border border-white/5">
                        <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold">DS</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white truncate text-left">Deepak S.</p>
                            <p className="text-[10px] text-muted-foreground truncate text-left underline">Personal Pro</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </aside>
    );
}
