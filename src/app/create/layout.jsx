import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
    title: 'Create Project',
    description: 'Configure and generate your custom full-stack project structure. Choose your frontend, backend, styling, and architecture preferences to scaffold production-ready code instantly.',
    keywords: [
        'create project',
        'project generator',
        'scaffold project',
        'fullstack generator',
        'code generator',
        'boilerplate creator',
        'project setup',
        'development tools',
    ],
    openGraph: {
        title: 'Create Project - StackStruct',
        description: 'Configure and generate your custom full-stack project structure with StackStruct.',
        type: 'website',
    },
};

export default function CreateLayout({ children }) {
    return <>{children}</>;
}
