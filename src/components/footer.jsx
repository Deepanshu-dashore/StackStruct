import Link from 'next/link';
import { Icons } from './icons';
import { Button } from './ui/button';

export function Footer() {
    return (
        <footer className="py-8 border-t border-border/40">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src="/NewLogo.png" alt="Stack Struct" className="h-6 w-6" />
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Stack Struct v0.1.0. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <nav className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Documentation
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Support
                        </Link>
                    </nav>

                    <Button variant="outline" size="sm" asChild className="bg-white/5 border-white/10 hover:bg-white/10 text-white gap-2 rounded-full">
                        <a href="https://github.com/Deepanshu-dashore/StackStruct" target="_blank" rel="noopener noreferrer">
                            <Icons.github className="h-4 w-4" />
                            <span>GitHub</span>
                        </a>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
