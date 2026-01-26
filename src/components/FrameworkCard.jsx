import { Icon } from "@iconify/react";

export default function FrameworkCard({ name, icon, type, desc }) {
    const isFrontend = type === 'frontend' || type === 'fullstack';
    const isBackend = type === 'backend' || type === 'fullstack';

    return (
        <div className="flex gap-5 p-6 rounded-2xl glass-card border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group shadow-2xl relative overflow-hidden">
            {/* Type Indicator Icons */}
            <div className="absolute top-4 right-4 flex gap-2">
                {isFrontend && (
                    <div className="group/type relative">
                        <div className="h-6 w-6 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <Icon icon="lucide:layout" className="text-[12px]" />
                        </div>
                    </div>
                )}
                {isBackend && (
                    <div className="group/type relative">
                        <div className="h-6 w-6 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <Icon icon="lucide:server" className="text-[12px]" />
                        </div>
                    </div>
                )}
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all shrink-0">
                <Icon icon={icon} className="text-2xl transition-all duration-500" />
            </div>

            <div className="space-y-1.5 text-left pr-8">
                <h3 className="text-lg font-semibold tracking-tight text-white/95 group-hover:text-white transition-colors">{name}</h3>
                <p className="text-[13px] text-muted-foreground/50 leading-relaxed font-light line-clamp-2">
                    {desc}
                </p>
            </div>
        </div>
    )
}
