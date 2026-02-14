"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function CoCPage() {
    return (
        <div className="space-y-12 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium tracking-wide uppercase">
                    <Icon icon="lucide:shield-check" className="h-4 w-4" />
                    Docs / Community / Code of Conduct
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Code of Conduct</h1>
                <p className="text-xl text-muted-foreground/70 font-light leading-relaxed">
                    Establishing a safe and inclusive environment for all contributors.
                </p>
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold underline decoration-white/10 underline-offset-8">Our Pledge</h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Our Standards</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Examples of behavior that contributes to creating a positive environment include:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground font-light">
                        <li>Using welcoming and inclusive language</li>
                        <li>Being respectful of differing viewpoints and experiences</li>
                        <li>Gracefully accepting constructive criticism</li>
                        <li>Focusing on what is best for the community</li>
                        <li>Showing empathy towards other community members</li>
                    </ul>
                </section>

                <section className="space-y-6 pt-12 border-t border-white/5">
                    <h2 className="text-2xl font-semibold">Enforcement</h2>
                    <p className="text-muted-foreground font-light leading-relaxed italic">
                        Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at <a href="mailto:support@stackstruct.com" className="text-cyan-400">support@stackstruct.com</a>. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances.
                    </p>
                </section>
            </div>
        </div>
    );
}
