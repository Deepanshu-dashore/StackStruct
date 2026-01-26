import FrameworkCard from './FrameworkCard'

const frameworks = [
    { name: 'Next.js', icon: 'logos:nextjs-icon', type: 'fullstack', desc: 'The React Framework for the Web. Optimized for speed and developer experience.' },
    { name: 'React', icon: 'logos:react', type: 'frontend', desc: 'The most popular library for web and native user interfaces.' },
    { name: 'Nuxt', icon: 'logos:nuxt-icon', type: 'fullstack', desc: 'The Intuitive Vue Framework. Hybrid rendering with a great ecosystem.' },
    { name: 'SvelteKit', icon: 'logos:svelte-icon', type: 'fullstack', desc: 'The fastest way to build apps of all sizes with a beautiful development experience.' },
    { name: 'Express', icon: 'simple-icons:express', type: 'backend', desc: 'Fast, unopinionated, minimalist web framework for Node.js.' },
    { name: 'NestJS', icon: 'logos:nestjs', type: 'backend', desc: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.' },
    { name: 'SolidJS', icon: 'logos:solidjs-icon', type: 'frontend', desc: 'Simple and performant reactivity for building user interfaces.' },
    { name: 'Laravel', icon: 'logos:laravel', type: 'fullstack', desc: 'The PHP Framework for Web Artisans. Elegant, expressive, and fun.' },
    { name: 'Angular', icon: 'logos:angular-icon', type: 'frontend', desc: 'The modern web developer\'s platform. Build across all platforms.' },
    { name: 'Rails', icon: 'logos:rails', type: 'fullstack', desc: 'A complete framework that includes everything needed to create database-backed web applications.' },
    { name: 'Fastify', icon: 'simple-icons:fastify', type: 'backend', desc: 'Fast and low overhead web framework, for Node.js.' },
    { name: 'Go', icon: 'logos:go', type: 'backend', desc: 'Build simple, secure, and maintainable systems with Google\'s powerful language.' },
    { name: 'Phoenix', icon: 'logos:phoenix', type: 'fullstack', desc: 'Peace of mind from prototype to production with Elixir.' },
    { name: 'Rust', icon: 'fa7-brands:rust', type: 'backend', desc: 'Empowering everyone to build reliable and efficient software.' },
]

export default function FrameworkGrid() {
    return (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map(fw => (
                <FrameworkCard key={fw.name} {...fw} />
            ))}
        </div>
    )
}
