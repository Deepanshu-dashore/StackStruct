import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
    title: 'Stack Configuration',
    description: 'Choose your technologies and enforce structure rules. Select from popular frontend frameworks, backend technologies, databases, and architectural patterns.',
    keywords: [
        'stack configuration',
        'technology stack',
        'framework selection',
        'architecture patterns',
        'project structure',
        'development stack',
        'fullstack configuration',
    ],
    openGraph: {
        title: 'Stack Configuration - StackStruct',
        description: 'Choose your technologies and enforce structure rules for your next project.',
        type: 'website',
    },
};

export default function StackLayout({ children }) {
    return <>{children}</>;
}
