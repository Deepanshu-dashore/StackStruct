"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

import { docNavItems } from "@/lib/doc-config";

export function DocSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-white/5 h-[calc(100vh-64px)] overflow-y-auto sticky top-16 hidden md:block py-8 px-4 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
            <div className="space-y-6">
                {docNavItems.map((section) => (
                    <div key={section.title} className="space-y-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 px-3 py-1">
                            {section.title}
                        </h4>
                        <nav className="space-y-0.5">
                            {section.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 group border border-transparent",
                                        pathname === item.href
                                            ? "text-cyan-400"
                                            : "text-white/40 hover:text-white/90"
                                    )}
                                >
                                    <Icon
                                        icon={item.icon}
                                        className={cn(
                                            "h-4 w-4 transition-all duration-300",
                                            pathname === item.href ? "opacity-100 scale-110 text-cyan-400" : "opacity-30 group-hover:opacity-70 group-hover:scale-105"
                                        )}
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                ))}
            </div>
        </aside>
    );
}
