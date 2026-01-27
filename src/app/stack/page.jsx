'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, Info } from 'lucide-react';
import { Icon } from '@iconify/react';
import * as stackData from '@/lib/config-options';

// Architecture rules configuration
const architectureRules = [
    {
        id: 'feature-based',
        label: 'Feature-based folders',
        tooltip: 'Group logic by domain instead of file type',
        defaultEnabled: true
    },
    {
        id: 'shared-components',
        label: 'Shared components allowed',
        tooltip: 'Allow reusable components across features',
        defaultEnabled: true
    },
    {
        id: 'absolute-imports',
        label: 'Absolute imports',
        tooltip: 'Use @/ prefix for imports instead of relative paths',
        defaultEnabled: false
    },
    {
        id: 'barrel-exports',
        label: 'Strict barrel exports',
        tooltip: 'Enforce index.ts files for clean imports',
        defaultEnabled: true
    },
    {
        id: 'domain-isolation',
        label: 'Domain isolation',
        tooltip: 'Features cannot import from each other directly',
        defaultEnabled: true
    }
];

export default function StackStructPage() {
    const [selectedStack, setSelectedStack] = useState({
        frontend: 'nextjs',
        backend: 'express',
        language: 'typescript',
        styling: 'tailwind',
        state: null,
        testing: false,
        database: null,
        orm: null
    });

    const [folderPreset, setFolderPreset] = useState('standard');

    const [enabledRules, setEnabledRules] = useState(
        architectureRules.reduce((acc, rule) => {
            acc[rule.id] = rule.defaultEnabled;
            return acc;
        }, {})
    );

    const toggleRule = (ruleId) => {
        setEnabledRules(prev => ({
            ...prev,
            [ruleId]: !prev[ruleId]
        }));
    };

    const selectOption = (category, value) => {
        setSelectedStack(prev => ({
            ...prev,
            [category]: value
        }));
    };

    // Generate folder preview based on preset and rules
    const generateFolderPreview = () => {
        const isFeatureBased = enabledRules['feature-based'];
        const hasShared = enabledRules['shared-components'];

        if (folderPreset === 'minimal') {
            return `src/
 ├─ components/
 │   └─ Button.tsx
 ├─ pages/
 │   └─ Home.tsx
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css
package.json
tailwind.config.js
vite.config.js`;
        } else if (folderPreset === 'advanced') {
            return `src/
 ├─ modules/
 │   ├─ auth/
 │   │   ├─ components/
 │   │   ├─ hooks/
 │   │   ├─ services/
 │   │   └─ pages/
 │   └─ dashboard/
 │       ├─ components/
 │       ├─ hooks/
 │       ├─ services/
 │       └─ pages/
 ├─ shared/
 │   ├─ ui/
 │   ├─ layout/
 │   ├─ hooks/
 │   └─ lib/
 └─ assets/
package.json
tailwind.config.js
vite.config.js`;
        } else {
            // Standard preset
            return `src/
 ├─ components/
 │   ├─ ui/
 │   │   ├─ Button.tsx
 │   │   ├─ Card.tsx
 │   │   └─ Input.tsx
 │   └─ layout/
 │       ├─ Navbar.tsx
 │       └─ Footer.tsx
 ├─ pages/
 ├─ hooks/
 ├─ services/
 ├─ lib/
 ├─ assets/
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css
package.json
tailwind.config.js
vite.config.js`;
        }
    };

    return (
        <div className="min-h-screen bg-[#1E1E2E]">
            <Header />

            {/* Header Section */}
            <section className="border-b border-[rgba(255,255,255,0.08)] bg-[#181825] py-12">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-3xl font-semibold text-[#CDD6F4] mb-2">
                        Stack Struct
                    </h1>
                    <p className="text-[#6C7086] text-base">
                        Choose your technologies and enforce structure rules
                    </p>
                </div>
            </section>

            {/* Main Content - Two Column Layout */}
            <section className="container mx-auto px-6 max-w-7xl py-12">
                {/* Folder Structure Preset Selection */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-[#CDD6F4] mb-4">
                        Folder Structure Preset
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Minimal */}
                        <motion.button
                            onClick={() => setFolderPreset('minimal')}
                            className={`border rounded-lg p-5 text-left transition-all duration-300 ${
                                folderPreset === 'minimal'
                                    ? 'border-[#89B4FA] bg-[#89B4FA]/10 shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                    : 'border-[rgba(255,255,255,0.08)] bg-[#181825] hover:border-[rgba(255,255,255,0.15)]'
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className={`font-semibold ${folderPreset === 'minimal' ? 'text-[#89B4FA]' : 'text-[#CDD6F4]'}`}>
                                    Minimal
                                </h3>
                                <span className="text-xs px-2 py-1 rounded bg-[#A6E3A1]/20 text-[#A6E3A1]">
                                    MVP
                                </span>
                            </div>
                            <p className="text-sm text-[#6C7086] mb-3">
                                Fast setup, zero abstractions. Perfect for small apps and quick prototypes.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.08)] text-[#CDD6F4]">
                                    ~5 files
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.08)] text-[#CDD6F4]">
                                    Quick start
                                </span>
                            </div>
                        </motion.button>

                        {/* Standard */}
                        <motion.button
                            onClick={() => setFolderPreset('standard')}
                            className={`border rounded-lg p-5 text-left transition-all duration-300 ${
                                folderPreset === 'standard'
                                    ? 'border-[#89B4FA] bg-[#89B4FA]/10 shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                    : 'border-[rgba(255,255,255,0.08)] bg-[#181825] hover:border-[rgba(255,255,255,0.15)]'
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className={`font-semibold ${folderPreset === 'standard' ? 'text-[#89B4FA]' : 'text-[#CDD6F4]'}`}>
                                    Standard
                                </h3>
                                <span className="text-xs px-2 py-1 rounded bg-[#89B4FA]/20 text-[#89B4FA]">
                                    ⭐ Recommended
                                </span>
                            </div>
                            <p className="text-sm text-[#6C7086] mb-3">
                                Clear separation of concerns. Scales to medium–large projects without complexity.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.08)] text-[#CDD6F4]">
                                    ~20 files
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.08)] text-[#CDD6F4]">
                                    Balanced
                                </span>
                            </div>
                        </motion.button>

                        {/* Advanced */}
                        <motion.button
                            onClick={() => setFolderPreset('advanced')}
                            className={`border rounded-lg p-5 text-left transition-all duration-300 ${
                                folderPreset === 'advanced'
                                    ? 'border-[#89B4FA] bg-[#89B4FA]/10 shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                    : 'border-[rgba(255,255,255,0.08)] bg-[#181825] hover:border-[rgba(255,255,255,0.15)]'
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className={`font-semibold ${folderPreset === 'advanced' ? 'text-[#89B4FA]' : 'text-[#CDD6F4]'}`}>
                                    Advanced
                                </h3>
                                <span className="text-xs px-2 py-1 rounded bg-[#F9E2AF]/20 text-[#F9E2AF]">
                                    Production
                                </span>
                            </div>
                            <p className="text-sm text-[#6C7086] mb-3">
                                Feature-based architecture. Isolated modules for dashboards, SaaS platforms, and enterprise apps.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.08)] text-[#CDD6F4]">
                                    ~40+ files
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.08)] text-[#CDD6F4]">
                                    Scalable
                                </span>
                            </div>
                        </motion.button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-8">
                    {/* Left Column - Stack Picker */}
                    <div className="space-y-4">
                        <Accordion type="multiple" defaultValue={['frontend', 'backend', 'styling']} className="space-y-3">
                            {/* Frontend */}
                            <AccordionItem 
                                value="frontend" 
                                className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg px-4 data-[state=open]:border-[#89B4FA]/30 transition-colors duration-200"
                            >
                                <AccordionTrigger className="hover:no-underline text-[#CDD6F4] font-medium">
                                    Frontend
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-2 pt-2">
                                        {stackData.frontendFrameworks.map((fw) => (
                                            <motion.button
                                                key={fw.id}
                                                onClick={() => selectOption('frontend', fw.id)}
                                                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center gap-2.5 justify-start ${
                                                    selectedStack.frontend === fw.id
                                                        ? 'border-[#89B4FA] bg-[#89B4FA]/10 text-[#89B4FA] shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                                        : 'border-[rgba(255,255,255,0.08)] bg-[#1E1E2E] text-[#CDD6F4] hover:border-[rgba(255,255,255,0.15)]'
                                                }`}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon icon={fw.icon} className="text-lg shrink-0" />
                                                <span className="truncate">{fw.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Backend */}
                            <AccordionItem 
                                value="backend" 
                                className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg px-4 data-[state=open]:border-[#89B4FA]/30 transition-colors duration-200"
                            >
                                <AccordionTrigger className="hover:no-underline text-[#CDD6F4] font-medium">
                                    Backend
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-2 pt-2">
                                        {stackData.backendFrameworks.slice(0, 6).map((fw) => (
                                            <motion.button
                                                key={fw.id}
                                                onClick={() => selectOption('backend', fw.id)}
                                                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center gap-2.5 justify-start ${
                                                    selectedStack.backend === fw.id
                                                        ? 'border-[#89B4FA] bg-[#89B4FA]/10 text-[#89B4FA] shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                                        : 'border-[rgba(255,255,255,0.08)] bg-[#1E1E2E] text-[#CDD6F4] hover:border-[rgba(255,255,255,0.15)]'
                                                }`}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon icon={fw.icon} className="text-lg shrink-0" />
                                                <span className="truncate">{fw.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Styling */}
                            <AccordionItem 
                                value="styling" 
                                className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg px-4 data-[state=open]:border-[#89B4FA]/30 transition-colors duration-200"
                            >
                                <AccordionTrigger className="hover:no-underline text-[#CDD6F4] font-medium">
                                    Styling
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-2 pt-2">
                                        {stackData.stylingOptions.map((style) => (
                                            <motion.button
                                                key={style.id}
                                                onClick={() => selectOption('styling', style.id)}
                                                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center gap-2.5 justify-start ${
                                                    selectedStack.styling === style.id
                                                        ? 'border-[#89B4FA] bg-[#89B4FA]/10 text-[#89B4FA] shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                                        : 'border-[rgba(255,255,255,0.08)] bg-[#1E1E2E] text-[#CDD6F4] hover:border-[rgba(255,255,255,0.15)]'
                                                }`}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon icon={style.icon} className="text-lg shrink-0" />
                                                <span className="truncate">{style.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Database */}
                            <AccordionItem 
                                value="database" 
                                className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg px-4 data-[state=open]:border-[#89B4FA]/30 transition-colors duration-200"
                            >
                                <AccordionTrigger className="hover:no-underline text-[#CDD6F4] font-medium">
                                    Database
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-2 pt-2">
                                        {stackData.databaseOptions.map((db) => (
                                            <motion.button
                                                key={db.id}
                                                onClick={() => selectOption('database', db.id)}
                                                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center gap-2.5 justify-start ${
                                                    selectedStack.database === db.id
                                                        ? 'border-[#89B4FA] bg-[#89B4FA]/10 text-[#89B4FA] shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                                        : 'border-[rgba(255,255,255,0.08)] bg-[#1E1E2E] text-[#CDD6F4] hover:border-[rgba(255,255,255,0.15)]'
                                                }`}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon icon={db.icon} className="text-lg shrink-0" />
                                                <span className="truncate">{db.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Tooling */}
                            <AccordionItem 
                                value="tooling" 
                                className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg px-4 data-[state=open]:border-[#89B4FA]/30 transition-colors duration-200"
                            >
                                <AccordionTrigger className="hover:no-underline text-[#CDD6F4] font-medium">
                                    Tooling
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-2 pt-2">
                                        {stackData.languages.map((lang) => (
                                            <motion.button
                                                key={lang.id}
                                                onClick={() => selectOption('language', lang.id)}
                                                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center gap-2.5 justify-start ${
                                                    selectedStack.language === lang.id
                                                        ? 'border-[#89B4FA] bg-[#89B4FA]/10 text-[#89B4FA] shadow-[0_0_10px_rgba(137,180,250,0.3)]'
                                                        : 'border-[rgba(255,255,255,0.08)] bg-[#1E1E2E] text-[#CDD6F4] hover:border-[rgba(255,255,255,0.15)]'
                                                }`}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon icon={lang.icon} className="text-lg shrink-0" />
                                                <span className="truncate">{lang.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Right Column - Live Stack Summary */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg p-6">
                            <h3 className="text-sm font-medium text-[#6C7086] mb-4 uppercase tracking-wider">
                                Stack Configuration
                            </h3>
                            <div className="font-mono text-sm text-[#CDD6F4] space-y-1">
                                <div className="text-[#6C7086]">{'{'}</div>
                                <AnimatePresence mode="wait">
                                    {Object.entries(selectedStack).map(([key, value]) => (
                                        <motion.div
                                            key={key}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="pl-4"
                                        >
                                            <span className="text-[#89B4FA]">"{key}"</span>
                                            <span className="text-[#6C7086]">: </span>
                                            <span className="text-[#A6E3A1]">
                                                {value === null ? 'null' : 
                                                 typeof value === 'boolean' ? value.toString() : 
                                                 `"${value}"`}
                                            </span>
                                            <span className="text-[#6C7086]">,</span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                <div className="text-[#6C7086]">{'}'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Rules - Full Width */}
            <section className="container mx-auto px-6 max-w-7xl py-12 border-t border-[rgba(255,255,255,0.08)]">
                <h2 className="text-2xl font-semibold text-[#CDD6F4] mb-6">
                    Architecture Rules
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {architectureRules.map((rule) => (
                        <motion.div
                            key={rule.id}
                            className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg p-5 flex items-start justify-between group hover:border-[rgba(255,255,255,0.15)] transition-colors duration-200"
                            whileHover={{ y: -2 }}
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-sm font-medium text-[#CDD6F4]">
                                        {rule.label}
                                    </h3>
                                    <div className="relative group/tooltip">
                                        <Info className="w-3.5 h-3.5 text-[#6C7086] cursor-help" />
                                        <motion.div 
                                            className="absolute left-0 bottom-full mb-2 w-48 p-2 bg-[#1E1E2E] border border-[rgba(255,255,255,0.08)] rounded text-xs text-[#CDD6F4] z-10 pointer-events-none"
                                            initial={{ opacity: 0, y: 5 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {rule.tooltip}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => toggleRule(rule.id)}
                                className={`w-12 h-6 rounded-full relative transition-colors ${
                                    enabledRules[rule.id]
                                        ? 'bg-[#A6E3A1]'
                                        : 'bg-[rgba(255,255,255,0.12)]'
                                }`}
                            >
                                <motion.div
                                    className={`absolute top-0.5 w-5 h-5 rounded-full ${
                                        enabledRules[rule.id]
                                            ? 'bg-[#1E1E2E]'
                                            : 'bg-[#6C7086]'
                                    }`}
                                    animate={{ x: enabledRules[rule.id] ? 26 : 2 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Folder Impact Preview - Full Width */}
            <section className="container mx-auto px-6 max-w-7xl py-12 border-t border-[rgba(255,255,255,0.08)]">
                <h2 className="text-2xl font-semibold text-[#CDD6F4] mb-6">
                    Folder Impact Preview
                </h2>
                <div className="border border-[rgba(255,255,255,0.08)] bg-[#181825] rounded-lg p-8">
                    <AnimatePresence mode="wait">
                        <motion.pre
                            key={generateFolderPreview()}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="font-mono text-sm text-[#CDD6F4] whitespace-pre"
                        >
                            {generateFolderPreview()}
                        </motion.pre>
                    </AnimatePresence>
                    <p className="text-xs text-[#6C7086] mt-6">
                        This structure updates based on your stack selections and architecture rules.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
