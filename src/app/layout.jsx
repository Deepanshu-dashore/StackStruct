import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: 'Stack Struct - Build Your Project in Seconds',
    description: 'The Project Generator for Production-Ready Code.',
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en" suppressHydrationWarning>
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
