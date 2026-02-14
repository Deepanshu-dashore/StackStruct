import { Icon } from "@iconify/react";

export default function FrameworkCard({ name, icon, type, desc, secondaryIcon, isComingSoon }) {
    const isFrontend = type === 'frontend' || type === 'fullstack';
    const isBackend = type === 'backend' || type === 'fullstack';
    const isFullstackCombination = isFrontend && isBackend && secondaryIcon;

    return (
        <div className={`flex gap-5 p-6 rounded-2xl glass-card border-white/5 transition-all duration-300 group shadow-2xl relative overflow-hidden ${isComingSoon ? 'opacity-60 grayscale-[0.5]' : 'hover:border-white/20 hover:bg-white/5'}`}>
            {/* Coming Soon Badge */}
            {isComingSoon && (
                <div className="absolute top-0 right-0">
                    <div className="bg-white/10 backdrop-blur-md border-b border-l border-white/10 px-3 py-1 rounded-bl-xl">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Soon</span>
                    </div>
                </div>
            )}

            {/* Type Indicator Icons */}
            {!isComingSoon && (
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
            )}

            {/* Icon(s) Display */}
            {isFullstackCombination ? (
                <div className="flex items-center gap-2 shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all">
                        <Icon icon={icon} className="text-2xl transition-all duration-500" />
                    </div>
                    <div className="text-white/30 text-lg">+</div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all">
                        <Icon icon={secondaryIcon} className="text-2xl transition-all duration-500" />
                    </div>
                </div>
            ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all shrink-0">
                    <Icon icon={icon} className="text-2xl transition-all duration-500" />
                </div>
            )}

            <div className={`space-y-1.5 text-left ${isComingSoon ? 'pr-2' : 'pr-8'}`}>
                <h3 className="text-lg font-semibold tracking-tight text-white/95 group-hover:text-white transition-colors">{name}</h3>
                <p className="text-[13px] text-muted-foreground/50 leading-relaxed font-light line-clamp-2">
                    {desc}
                </p>
            </div>
        </div>
    )
}
