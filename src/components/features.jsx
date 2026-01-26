'use client';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { GitFork, TerminalSquare, Layers } from 'lucide-react';
import { Icons } from './icons';
import * as React from 'react';

const features = [
    {
        icon: <GitFork />,
        title: 'Visual Structure',
        description: 'Design your perfect folder architecture.',
    },
    {
        icon: <TerminalSquare />,
        title: 'One-Shot Script',
        description: 'Generate & copy Git Bash commands.',
    },
    {
        icon: (
            <div className="relative">
                <Layers className="h-6 w-6" />
                <Icons.nextjs className="h-3 w-3 absolute -bottom-1 -right-1 text-foreground" />
            </div>
        ),
        title: 'Scalable Blueprints',
        description: 'Framework presets, front-end & back-end.',
    },
];

export const Features = () => {
    return (
        <section id="features" className="container py-24 sm:py-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                Many{' '}
                <span className="bg-linear-to-r from-primary to-secondary-foreground text-transparent bg-clip-text">
                    Great Features
                </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({ icon, title, description }) => (
                    <Card
                        key={title}
                        className="bg-card/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-card/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-2"
                    >
                        <CardHeader>
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
                                {icon}
                            </div>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription className="text-lg">
                                {description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
};
