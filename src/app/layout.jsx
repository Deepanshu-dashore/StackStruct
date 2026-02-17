import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: {
        default: 'Stack Struct - Build Your Project in Seconds',
        template: '%s | Stack Struct',
    },
    description: 'The ultimate project generator for production-ready code. Scaffold your next full-stack application with customized architectures in seconds.',
    keywords: [
        'project generator',
        'boilerplate',
        'scaffold',
        'fullstack',
        'nextjs',
        'springboot',
        'react',
        'architecture',
        'development tools',
        'developer productivity',
        'Stack Struct',
    ],
    authors: [{ name: 'Stack Struct Team' }],
    creator: 'Stack Struct',
    publisher: 'Stack Struct',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Stack Struct - Build Your Project in Seconds',
        description: 'The Project Generator for Production-Ready Code. Rapidly scaffold complex architectures with ease.',
        url: 'https://stackstruct.com',
        siteName: 'Stack Struct',
        images: [
            {
                url: '/HeroImage.png',
                width: 1200,
                height: 630,
                alt: 'Stack Struct - Project Generator',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Stack Struct - Build Your Project in Seconds',
        description: 'The Project Generator for Production-Ready Code. Rapidly scaffold complex architectures with ease.',
        images: ['/HeroImage.png'],
        creator: '@stackstruct',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Stack Struct',
        description: 'The ultimate project generator for production-ready code. Scaffold your next full-stack application with customized architectures in seconds.',
        url: 'https://stackstruct.com',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        creator: {
            '@type': 'Organization',
            name: 'Stack Struct Team',
        },
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={cn('font-sans antialiased', inter.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}
