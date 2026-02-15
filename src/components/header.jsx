'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from './icons';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { MobileNav } from './mobile-nav';

export function Header() {
    const pathname = usePathname();
    const isCreatePage = pathname === '/create';

    return (
        <header className={`sticky top-0 z-40 w-full border-b border-white/5 bg-[#020206]/80 backdrop-blur-xl transition-all duration-300 ${isCreatePage ? 'lg:pl-64' : ''}`}>
            <div className={`container flex h-16 items-center justify-between gap-4 ${isCreatePage ? 'max-w-full px-4 md:px-8' : ''}`}>
                {!isCreatePage ? (
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <img src="/NewLogo.png" alt="Stack Struct" className="h-8 w-8 transition-transform group-hover:scale-105" />
                            <span className="font-bold text-xl tracking-tight bg-white bg-clip-text">Stack Struct</span>
                        </Link>
                    </div>
                ) : (
                    <div className="lg:hidden flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <img src="/NewLogo.png" alt="Stack Struct" className="h-6 w-6" />
                            <span className="font-bold text-sm tracking-tight text-white">Stack Struct</span>
                        </Link>
                    </div>
                )}

                <div className={`flex items-center gap-2 md:gap-6 ml-auto`}>
                    {!isCreatePage && (
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground mr-4">
                            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
                            <Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                            <Link href="/doc" className="hover:text-white transition-colors">Documentation</Link>
                        </nav>
                    )}

                    <div className={`flex items-center gap-2 md:gap-4 ${!isCreatePage ? 'md:border-l border-white/10 md:pl-6' : ''}`}>
                        <Button variant="ghost" size="sm" asChild className="hidden md:flex text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all rounded-full px-4">
                            <a href="https://github.com/Deepanshu-dashore/StackStruct" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Icons.github className="h-4 w-4" />
                                <span className={isCreatePage ? 'text-xs' : ''}>GitHub</span>
                            </a>
                        </Button>

                        {!isCreatePage && (
                            <Link href="/create" className="hidden sm:block">
                                <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full px-6 font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    Start Building
                                </Button>
                            </Link>
                        )}

                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
