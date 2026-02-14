"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export function DocTOC() {
    const [activeId, setActiveId] = useState("");
    const [headings, setHeadings] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        let observer = null;

        const timer = setTimeout(() => {
            const elements = Array.from(document.querySelectorAll("main section[id] h2, main div[id] h4, main h2[id]"));

            const headingData = elements.map((el) => {
                const section = el.closest("[id]");
                return { id: section.id, text: el.innerText };
            }).filter((value, index, self) =>
                index === self.findIndex((t) => t.id === value.id)
            );

            setHeadings(headingData);

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActiveId(entry.target.id);
                    });
                },
                { rootMargin: "-80px 0% -70% 0%", threshold: 0 }
            );

            headingData.forEach((h) => {
                const el = document.getElementById(h.id);
                if (el) observer.observe(el);
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            if (observer) observer.disconnect();
        };
    }, [pathname]);

    if (headings.length === 0) return null;

    return (
        <div className="space-y-4 flex-1">
            <h5 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-cyan-500" />
                Page Highlights
            </h5>
            <nav className="flex flex-col gap-3">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={cn(
                            "text-[13px] leading-relaxed transition-all duration-300 hover:text-white border-l-2 pl-4 py-0.5",
                            activeId === heading.id
                                ? "text-cyan-400 border-cyan-500 font-medium"
                                : "text-white/40 border-transparent hover:border-white/10"
                        )}
                    >
                        {heading.text}
                    </a>
                ))}
            </nav>

            {/* LinkedIn Card stays here or moved to layout? User didn't specify, but I'll keep it in layout for now and just replace the TOC part */}
        </div>
    );
}
