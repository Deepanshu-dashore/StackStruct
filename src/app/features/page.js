import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import CTA from "@/components/CTA";
import FeaturesFrameWork from "@/components/FeaturesFrameWork";
import FolderStructure from "@/components/FolderStructure";
import FrameworkGrid from "@/components/FrameworkGrid";

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#020206] text-white selection:bg-cyan-500/30">
      <Header />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 pt-18 pb-24 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Supported Frameworks & Languages
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground/60 max-w-4xl mx-auto font-light leading-relaxed">
            Struct supports modern frontend and backend frameworks with
            opinionated folder structures and ready-to-run boilerplate for
            developers who move fast.
          </p>

          <FrameworkGrid />
        </section>

        <FeaturesFrameWork />
        <FolderStructure />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
