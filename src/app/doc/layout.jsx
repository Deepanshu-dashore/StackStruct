import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DocSidebar } from "@/components/doc-sidebar";
import { DocTOC } from "@/components/doc-toc";
import { Icon } from "@iconify/react";

export default function DocLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-[#020206] text-white selection:bg-cyan-500/30">
            <Header />

            <div className="flex-1 max-w-[1440px] mx-auto w-full flex items-start px-4 lg:px-0 font-sans">
                <DocSidebar />

                <main className="flex-1 w-full min-w-0 flex gap-6 lg:gap-16 py-8 lg:py-16">
                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0 max-w-3xl lg:pl-12 xl:pl-20">
                        {children}
                    </div>

                    {/* Table of Contents - Right Sidebar */}
                    <div className="hidden xl:block w-64 shrink-0 h-[calc(100vh-128px)] sticky top-32">
                        <div className="flex flex-col h-full">
                            <div className="flex-1">
                                <DocTOC />

                                {/* LinkedIn Card */}
                                <div className="mt-8 relative group cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-cyan-500/20 transition-all duration-500 shadow-2xl shadow-cyan-500/0 hover:shadow-cyan-500/10">
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80 z-10" />
                                    <img
                                        src="/OnPageImg.png"
                                        alt="Community"
                                        className="w-full h-32 object-cover opacity-60 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="p-4 space-y-3 relative z-20">
                                        <p className="text-[11px] font-medium animate-pulse text-white/80 leading-relaxed group-hover:text-white/80 transition-colors">
                                            <span className="italic text-white/50">"Building StackStruct in public. Let's connect!"</span><br />
                                            If your here so you say hay to me 👋
                                        </p>
                                        <a
                                            href="https://linkedin.com/in/deepanshu-dashore"
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors"
                                        >
                                            <Icon icon="lucide:linkedin" className="h-3 w-3" />
                                            Message Me
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Divider and GitHub Link at the bottom of TOC */}
                            <div className="pt-8 border-t border-white/5 space-y-4">
                                <a
                                    href="https://github.com/Deepanshu-dashore/StackStruct"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[13px] text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    Edit this page on GitHub
                                    <Icon icon="lucide:external-link" className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
