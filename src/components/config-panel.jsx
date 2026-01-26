'use client';

import {
    projectTypes,
    frontendFrameworks,
    backendFrameworks,
    languages,
    stylingOptions,
    componentLibraries,
    folderPresets,
    authOptions,
    databaseOptions,
    ormOptions
} from '@/lib/config-options';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Settings, Code, Braces } from 'lucide-react';
import { Icon } from '@iconify/react';

export function ConfigPanel({ config, setConfig }) {

    const handleUpdate = (key, value) => {
        setConfig({ ...config, [key]: value });
    };

    const handleFrontendUpdate = (key, value) => {
        setConfig({ ...config, frontend: { ...config.frontend, [key]: value } });
    };

    const handleBackendUpdate = (key, value) => {
        setConfig({ ...config, backend: { ...config.backend, [key]: value } });
    };

    const showFrontend = config.projectType.includes('frontend');
    const showBackend = config.projectType.includes('backend');

    return (
        <Card className="w-full glass px-5 bg-transparent border-white/5 h-full overflow-hidden shadow-none">
            <CardHeader className="border-b border-white/5 bg-transparent py-6 px-0">
                <CardTitle className="text-2xl font-bold tracking-tight text-white/90">Project Configuration</CardTitle>
                <CardDescription className="text-muted-foreground/40 text-sm mt-1">Tailor your project stack to your specific needs.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <Accordion type="multiple" defaultValue={['general', 'frontend', 'backend']} className="w-full divide-y divide-white/5">
                    <AccordionItem value="general" className="border-none px-0">
                        <AccordionTrigger className="hover:no-underline py-6">
                            <div className="flex items-center gap-3">
                                <div className="text-blue-500/70">
                                    <Settings className="h-4 w-4" />
                                </div>
                                <h2 className="text-base font-semibold tracking-tight text-white/80">General Settings</h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8 pt-0 grid gap-6">
                            <div className="space-y-2.5">
                                <Label htmlFor="project-name" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Project Name</Label>
                                <Input
                                    id="project-name"
                                    value={config.projectName}
                                    onChange={(e) => handleUpdate('projectName', e.target.value)}
                                    placeholder="e.g., my-app"
                                    className="bg-white/3 border-white/5 h-10 text-sm focus:border-blue-500/30 transition-all rounded-lg"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <Label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Project Type</Label>
                                <Select value={config.projectType} onValueChange={(value) => handleUpdate('projectType', value)}>
                                    <SelectTrigger id="project-type" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                    <SelectContent className="bg-[#050508] border-white/10">
                                        {projectTypes.map(type => (
                                            <SelectItem key={type.id} value={type.id} className="focus:bg-white/5 py-2.5">
                                                <div className="flex items-center gap-2.5">
                                                    <Icon icon={type.icon} className="h-4 w-4 text-muted-foreground/30" />
                                                    <span className="text-sm">{type.label}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            {config.projectType === 'frontend-backend' && (
                                <div className="flex items-center justify-between p-3.5 rounded-lg bg-white/3 border border-white/5">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="monorepo" className="text-sm font-medium text-white/70 leading-none">Monorepo Structure</Label>
                                        <p className="text-[10px] text-muted-foreground/30">Frontend and Backend in root</p>
                                    </div>
                                    <Switch id="monorepo" checked={config.monorepo} onCheckedChange={(checked) => handleUpdate('monorepo', checked)} className="scale-75 origin-right" />
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>

                    {showFrontend && (
                        <AccordionItem value="frontend" className="border-none px-0">
                            <AccordionTrigger className="hover:no-underline py-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-cyan-500/70">
                                        <Code className="h-4 w-4" />
                                    </div>
                                    <h2 className="text-base font-semibold tracking-tight text-white/80">Frontend</h2>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-8 pt-0 grid gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="fe-framework" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Framework</Label>
                                        <Select value={config.frontend.framework} onValueChange={(v) => handleFrontendUpdate('framework', v)}>
                                            <SelectTrigger id="fe-framework" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {frontendFrameworks.map(f => (
                                                    <SelectItem key={f.id} value={f.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={f.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{f.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="fe-lang" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Language</Label>
                                        <Select value={config.frontend.language} onValueChange={(v) => handleFrontendUpdate('language', v)}>
                                            <SelectTrigger id="fe-lang" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {languages.map(l => (
                                                    <SelectItem key={l.id} value={l.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={l.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{l.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="fe-style" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Styling</Label>
                                        <Select value={config.frontend.style} onValueChange={(v) => handleFrontendUpdate('style', v)}>
                                            <SelectTrigger id="fe-style" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {stylingOptions.map(s => (
                                                    <SelectItem key={s.id} value={s.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={s.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{s.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="fe-components" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Components</Label>
                                        <Select value={config.frontend.components} onValueChange={(v) => handleFrontendUpdate('components', v)}>
                                            <SelectTrigger id="fe-components" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {componentLibraries.map(c => (
                                                    <SelectItem key={c.id} value={c.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={c.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{c.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2.5">
                                    <Label htmlFor="fe-preset" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Structure Preset</Label>
                                    <Select value={config.frontend.folderPreset} onValueChange={(v) => handleFrontendUpdate('folderPreset', v)}>
                                        <SelectTrigger id="fe-preset" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                        <SelectContent className="bg-[#050508] border-white/10">
                                            {folderPresets.map(p => (
                                                <SelectItem key={p.id} value={p.id} className="focus:bg-white/5 py-2.5">
                                                    <div className="flex items-center gap-2.5">
                                                        <Icon icon={p.icon} className="h-4 w-4 text-muted-foreground/30" />
                                                        <span className="text-sm">{p.label}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )}

                    {showBackend && (
                        <AccordionItem value="backend" className="border-none px-0">
                            <AccordionTrigger className="hover:no-underline py-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-purple-500/70">
                                        <Braces className="h-4 w-4" />
                                    </div>
                                    <h2 className="text-base font-semibold tracking-tight text-white/80">Backend</h2>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-8 pt-0 grid gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="be-framework" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Framework</Label>
                                        <Select value={config.backend.framework} onValueChange={(v) => handleBackendUpdate('framework', v)}>
                                            <SelectTrigger id="be-framework" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {backendFrameworks.map(f => (
                                                    <SelectItem key={f.id} value={f.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={f.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{f.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="be-lang" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Language</Label>
                                        <Select value={config.backend.language} onValueChange={(v) => handleBackendUpdate('language', v)}>
                                            <SelectTrigger id="be-lang" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {languages.map(l => (
                                                    <SelectItem key={l.id} value={l.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={l.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{l.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="be-database" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Database</Label>
                                        <Select value={config.backend.database} onValueChange={(v) => handleBackendUpdate('database', v)}>
                                            <SelectTrigger id="be-database" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {databaseOptions.map(o => (
                                                    <SelectItem key={o.id} value={o.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={o.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{o.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="be-orm" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">ORM / ODM</Label>
                                        <Select value={config.backend.orm} onValueChange={(v) => handleBackendUpdate('orm', v)}>
                                            <SelectTrigger id="be-orm" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {ormOptions.map(o => (
                                                    <SelectItem key={o.id} value={o.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={o.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{o.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="be-auth" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Authentication</Label>
                                        <Select value={config.backend.auth} onValueChange={(v) => handleBackendUpdate('auth', v)}>
                                            <SelectTrigger id="be-auth" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {authOptions.map(o => (
                                                    <SelectItem key={o.id} value={o.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={o.icon} className="h-4 w-4" />
                                                            <span className="text-sm">{o.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="be-preset" className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Structure Preset</Label>
                                        <Select value={config.backend.folderPreset} onValueChange={(v) => handleBackendUpdate('folderPreset', v)}>
                                            <SelectTrigger id="be-preset" className="bg-white/3 border-white/5 h-10 text-sm rounded-lg"><SelectValue /></SelectTrigger>
                                            <SelectContent className="bg-[#050508] border-white/10">
                                                {folderPresets.map(p => (
                                                    <SelectItem key={p.id} value={p.id} className="focus:bg-white/5 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={p.icon} className="h-4 w-4 text-muted-foreground/30" />
                                                            <span className="text-sm">{p.label}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3.5 rounded-lg bg-white/3 border border-white/5 mt-2">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="file-uploads" className="text-sm font-medium text-white/70 leading-none">File Uploads</Label>
                                        <p className="text-[10px] text-muted-foreground/30">Enable Multer storage folders</p>
                                    </div>
                                    <Switch id="file-uploads" checked={config.backend.fileUploads} onCheckedChange={(checked) => handleBackendUpdate('fileUploads', checked)} className="scale-75 origin-right" />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )}
                </Accordion>
            </CardContent>
        </Card>
    );
}
