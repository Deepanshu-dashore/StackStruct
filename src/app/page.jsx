import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { StackCustomization } from '@/components/stack-customization';
import { LivePreview } from '@/components/live-preview';
import { ScriptGeneration } from '@/components/script-generation';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#020206] text-white">
            <Header />
            <main className="flex-1">
                <Hero />
                <div className="space-y-32 pb-32">
                    <HowItWorks />
                    <StackCustomization />
                    <LivePreview />
                    <ScriptGeneration />
                    <CTASection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
