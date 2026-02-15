"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const mainNavItems = [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "Templates", href: "/templates", icon: "lucide:layout-template" },
    { name: "Documentation", href: "/doc", icon: "lucide:book-open" },
];

import { docNavItems } from "@/lib/doc-config";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isDocPage = pathname.startsWith("/doc");

    // Close sidebar when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Disable scroll when sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    return (
        <div className="lg:hidden">
            <Button
                variant="ghost"
                size="icon"
                className="relative z-50 text-white hover:bg-white/5"
                onClick={() => setOpen(!open)}
            >
                <Icon icon={open ? "lucide:x" : "lucide:menu"} className="h-6 w-6" />
            </Button>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 right-0 z-45 h-screen w-[280px] bg-[#020206] border-l border-white/5 p-6 pt-20 transition-transform duration-300 ease-in-out shadow-2xl",
                    open ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
                    {/* Main Nav Section */}
                    <div className="space-y-4 mb-8">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 px-3">
                            Navigation
                        </h4>
                        <nav className="flex flex-col gap-1">
                            {mainNavItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all",
                                        pathname === item.href
                                            ? "bg-white/5 text-cyan-400"
                                            : "text-white/40 hover:text-white"
                                    )}
                                >
                                    <Icon icon={item.icon} className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Documentation Section (only if on a doc page or if intentional) */}
                    {isDocPage && (
                        <div className="space-y-8">
                            {docNavItems.map((section) => (
                                <div key={section.title} className="space-y-3">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 px-3">
                                        {section.title}
                                    </h4>
                                    <nav className="flex flex-col gap-1">
                                        {section.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl transition-all",
                                                    pathname === item.href
                                                        ? "text-cyan-400 bg-cyan-400/5 border border-cyan-400/10"
                                                        : "text-white/40 hover:text-white border border-transparent"
                                                )}
                                            >
                                                <Icon icon={item.icon} className="h-4 w-4" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-auto pt-8 border-t border-white/5">
                        <Link href="/create" className="w-full">
                            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-xl font-bold">
                                Start Building
                            </Button>
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    );
}
