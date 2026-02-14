"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function SupportPage() {
  const faqs = [
    {
      question: "Which frameworks are currently supported?",
      answer:
        "We currently support React, Next.js, Vue.js, Astro, and Vanilla HTML/CSS/JS for frontend. Express.js is our primary supported backend framework, with more on the way.",
    },
    {
      question: "How do I use the generated bash script?",
      answer:
        "Copy the script from the 'Scaffold Your Architecture' section on the Create page, paste it into your terminal in an empty directory, and run it. It will automatically initialize the project for you.",
    },
    {
      question: "Can I contribute to StackStruct?",
      answer:
        "Absolutely! We are open-source. Visit our GitHub repository to find issues, submit pull requests, or start a discussion.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#020206] text-white selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] opacity-50" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <Header />

      <main className="flex-1 relative z-10 w-full">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-muted-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
              Technical assistance and community resources to help you build
              your vision.
            </p>
          </motion.div>
        </section>

        {/* Contact Methods Grid */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <SupportOption
              title="Direct & Professional"
              description="Connect with the founder on LinkedIn for partnerships, business inquiries, or direct feedback."
              icon="lucide:linkedin"
              actionText="LinkedIn Profile"
              href="https://www.linkedin.com/in/deepanshu-dashore"
              variant="premium"
              delay={0.1}
            />
            <SupportOption
              title="Technical Assistance"
              description="Open a GitHub issue to report bugs, suggest technical improvements, or request engine features."
              icon="lucide:github"
              actionText="GitHub Repository"
              href="https://github.com/Deepanshu-dashore/StackStruct/issues"
              delay={0.2}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
              >
                <h4 className="text-lg font-medium text-white/90 mb-2 flex items-center gap-3">
                  <Icon
                    icon="lucide:help-circle"
                    className="text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                  {faq.question}
                </h4>
                <p className="text-muted-foreground/70 font-light leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Stack CTA */}
        <section className="max-w-5xl mx-auto px-6 py-32">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-card rounded-[32px] p-12 md:p-16 relative overflow-hidden text-center shadow-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />

            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Need a custom stack?
            </h2>
            <p className="text-muted-foreground/80 text-lg mb-10 font-light max-w-2xl mx-auto">
              If your preferred framework or integration isn&apos;t supported
              yet, let us know. We are constantly expanding our engine to
              support more technologies.
            </p>
            <a
              href="https://github.com/Deepanshu-dashore/StackStruct/issues/new"
              target="_blank"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 group"
            >
              Request Feature
              <Icon
                icon="lucide:arrow-right"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SupportOption({
  title,
  description,
  icon,
  actionText,
  href,
  variant,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col items-start gap-8 group relative overflow-hidden h-full ${
        variant === "premium"
          ? "bg-white/[0.04] border-white/10 shadow-2xl"
          : "bg-white/[0.01] border-white/5 hover:border-white/10"
      }`}
    >
      {variant === "premium" && (
        <div className="absolute top-0 right-0 p-4">
          <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-cyan-400">
            Recommended
          </div>
        </div>
      )}

      <div
        className={`p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-all duration-500 ${
          variant === "premium"
            ? "text-cyan-400 border-cyan-500/20 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            : "text-white"
        }`}
      >
        <Icon icon={icon} className="h-10 w-10" />
      </div>

      <div className="space-y-3 text-left">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground/60 font-light leading-relaxed text-base">
          {description}
        </p>
      </div>

      <a
        href={href}
        target="_blank"
        className={`mt-auto w-full py-4 rounded-2xl text-center text-sm font-bold border transition-all active:scale-[0.98] ${
          variant === "premium"
            ? "bg-white text-black border-transparent hover:bg-white/90"
            : "border-white/10 hover:bg-white/5"
        }`}
      >
        {actionText}
      </a>
    </motion.div>
  );
}
