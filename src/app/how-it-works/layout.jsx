import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
    title: 'How It Works',
    description: 'Learn how StackStruct builds your project step by step. Understand the configuration, preview, and generation process for creating production-ready applications.',
    keywords: [
        'how it works',
        'project generation process',
        'stackstruct guide',
        'scaffold workflow',
        'project setup guide',
        'development workflow',
    ],
    openGraph: {
        title: 'How It Works - StackStruct',
        description: 'Learn how StackStruct builds your project step by step with predictable, reproducible scaffolding.',
        type: 'website',
    },
};

export default function HowItWorksLayout({ children }) {
    return <>{children}</>;
}
