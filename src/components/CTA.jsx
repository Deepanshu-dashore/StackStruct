export default function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Start Your Project in Minutes
                </h2>
                <p className="text-lg text-muted-foreground/60 font-light max-w-xl mx-auto">
                    No setup. No guessing. Just tell us your stack and run the script.
                </p>
                <div className="pt-4">
                    <a
                        href="/create"
                        className="inline-flex items-center justify-center h-14 rounded-full bg-white px-10 text-sm font-bold text-black hover:bg-white/90 transition-all hover:scale-[1.05] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        Create Your Project Now
                    </a>
                </div>
            </div>
        </section>
    )
}
