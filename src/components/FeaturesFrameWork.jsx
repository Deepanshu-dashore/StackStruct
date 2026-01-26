export default function FeaturesFrameWork() {
    const features = [
        ['Configure', 'Select your preferred framework, language, database, and folder presets to build your ideal base.'],
        ['Preview', 'Explore the live folder structure and file contents in real-time before generating a single line of code.'],
        ['Generate', 'Copy the optimized bash script and run it locally to scaffold your entire project architecture in seconds.'],
    ];

    return (
        <section className="py-24 border-t border-white/5 bg-white/1">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {features.map(([title, desc], index) => (
                        <div key={title} className="space-y-6 group">
                            <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-muted-foreground/30 uppercase">
                                <span>[ 0{index + 1} ]</span>
                                <div className="h-px flex-1 bg-white/5 group-hover:bg-cyan-500/20 transition-colors" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold tracking-tight text-white/90">{title}</h3>
                                <p className="text-base text-muted-foreground/60 leading-relaxed font-light">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
