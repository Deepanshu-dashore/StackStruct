"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const docNavItems = [
    {
        title: "Getting Started",
        items: [
            { name: "Introduction", href: "/doc", icon: "lucide:book-open" },
            { name: "How it Works", href: "/doc/how-it-works", icon: "lucide:settings" },
            { name: "Installation", href: "/doc/installation", icon: "lucide:terminal" },
            { name: "Project Structure", href: "/doc/structure", icon: "lucide:folder-tree" },
        ],
    },
    {
        title: "Architecture",
        items: [
            { name: "Engine Logic", href: "/doc/architecture/logic", icon: "lucide:cpu" },
            { name: "Preset System", href: "/doc/architecture/presets", icon: "lucide:layers" },
        ],
    },
    {
        title: "Frameworks",
        items: [
            { name: "React", href: "/doc/frameworks/react", icon: "logos:react" },
            { name: "Next.js", href: "/doc/frameworks/nextjs", icon: "logos:nextjs-icon" },
            { name: "Vue.js", href: "/doc/frameworks/vue", icon: "logos:vue" },
            { name: "Astro", href: "/doc/frameworks/astro", icon: "vscode-icons:file-type-astro" },
        ],
    },
    {
        title: "Community",
        items: [
            { name: "Support", href: "/doc/community/support", icon: "lucide:help-circle" },
            { name: "Contributing", href: "/doc/community/contributing", icon: "lucide:users" },
            { name: "Code of Conduct", href: "/doc/community/coc", icon: "lucide:shield-check" },
        ],
    },
];

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
