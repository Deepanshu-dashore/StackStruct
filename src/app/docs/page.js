"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#020206] text-white selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] opacity-30" />
      </div>

      <Header />

      <main className="flex-1 relative z-10 max-w-4xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground/60 font-light leading-relaxed">
            Everything you need to know about building projects with
            StackStruct.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <DocCard
            title="Getting Started"
            description="Learn how to generate your first production-ready project in seconds."
            icon="lucide:rocket"
            href="#getting-started"
            delay={0.1}
          />
          <DocCard
            title="Architecture"
            description="Deep dive into our opinionated folder structures and philosophy."
            icon="lucide:layers"
            href="#architecture"
            delay={0.2}
          />
          <DocCard
            title="Frameworks"
            description="Detailed guides for React, Next.js, Vue, and Express integration."
            icon="lucide:cpu"
            href="/features"
            delay={0.3}
          />
          <DocCard
            title="CLI Reference"
            description="Master the bash scripts and automation tools provided by Struct."
            icon="lucide:terminal"
            href="#cli"
            delay={0.4}
          />
        </div>

        <div className="prose prose-invert max-w-none space-y-20">
          <motion.section
            id="getting-started"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-24"
          >
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-sm border border-white/10 text-white/40 font-mono">
                01
              </span>
              Getting Started
            </h2>
            <p className="text-muted-foreground/80 leading-7 text-lg font-light">
              To begin, navigate to the{" "}
              <a
                href="/create"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline decoration-cyan-500/20 underline-offset-4"
              >
                Create
              </a>{" "}
              page. Choose your preferred tech stack, customize folders, and
              generate your initialization script.
            </p>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 mt-8 group relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <code className="text-sm md:text-base text-cyan-400 font-mono">
                curl -sSL https://stackstruct.com/install.sh | bash
              </code>
            </div>
          </motion.section>

          <motion.section
            id="architecture"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-24 pt-12 border-t border-white/5"
          >
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-sm border border-white/10 text-white/40 font-mono">
                02
              </span>
              Architecture Philosophy
            </h2>
            <p className="text-muted-foreground/80 leading-8 text-lg font-light">
              StackStruct follows a modular, feature-based architecture. We
              prioritize scalability and clean separation of concerns, ensuring
              your project remains maintainable as it grows from a prototype to
              a full-scale application. Our folder structures are optimized for
              both solo developers and large teams.
            </p>
          </motion.section>

          <motion.section
            id="cli"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-24 pt-12 border-t border-white/5"
          >
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-sm border border-white/10 text-white/40 font-mono">
                03
              </span>
              Automation & Tooling
            </h2>
            <div className="p-8 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/10">
              <p className="text-muted-foreground/70 leading-7 text-lg italic font-light">
                Documentation for our automation layer is currently being
                updated. Check back soon for detailed CLI references and
                advanced configuration options.
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function DocCard({ title, description, icon, href }) {
  return (
    <a
      href={href}
      className="group relative p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
          <Icon icon={icon} className="h-6 w-6" />
        </div>
        <Icon
          icon="lucide:chevron-right"
          className="h-5 w-5 opacity-0 group-hover:opacity-40 transition-all translate-x-[-10px] group-hover:translate-x-0"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground/60 leading-relaxed font-light">
        {description}
      </p>
    </a>
  );
}
