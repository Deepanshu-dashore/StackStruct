import FrameworkCard from './FrameworkCard'

import stackData from "@/lib/data/stack.json"

const frameworks = [
    ...stackData.frontend.map(f => ({ name: f.label, icon: f.icon, type: f.type, desc: f.description })),
    ...stackData.backend.map(b => ({ name: b.label, icon: b.icon, type: b.type, desc: b.description }))
];

export default function FrameworkGrid() {
    return (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map(fw => (
                <FrameworkCard key={fw.name} {...fw} />
            ))}
        </div>
    )
}
