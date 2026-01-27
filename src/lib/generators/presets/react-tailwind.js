import { getFile, getFolder } from "../helpers";

/**
 * React + Tailwind Folder Structure Presets
 * Based on: BASE ASSUMPTIONS - Framework: React, Styling: Tailwind CSS
 */

// ===== 1️⃣ MINIMAL STRUCTURE =====
// Best for: Small apps, MVPs, demos
export function generateMinimalReactTailwind(config) {
  const isTypeScript = config.language === 'typescript';
  const ext = isTypeScript ? 'tsx' : 'jsx';
  
  return [
    getFolder("src", [
      getFolder("components", [
        getFile(
          `Button.${ext}`,
          `export default function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" {...props}>
      {children}
    </button>
  );
}`
        )
      ]),
      getFolder("pages", [
        getFile(
          `Home.${ext}`,
          `export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Your App</h1>
    </div>
  );
}`
        )
      ]),
      getFile(
        `App.${ext}`,
        `import Home from './pages/Home';

export default function App() {
  return <Home />;
}`
      ),
      getFile(
        `main.${ext}`,
        `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
      ),
      getFile(
        "index.css",
        `@tailwind base;
@tailwind components;
@tailwind utilities;`
      )
    ]),
    getFile(
      "package.json",
      JSON.stringify({
        name: config.projectName || "minimal-react-app",
        private: true,
        version: "0.1.0",
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          react: "^18.2.0",
          "react-dom": "^18.2.0"
        },
        devDependencies: {
          "@vitejs/plugin-react": "^4.0.0",
          autoprefixer: "^10.4.14",
          postcss: "^8.4.24",
          tailwindcss: "^3.3.2",
          vite: "^4.3.9",
          ...(isTypeScript && {
            typescript: "^5.0.0",
            "@types/react": "^18.2.0",
            "@types/react-dom": "^18.2.0"
          })
        }
      }, null, 2)
    ),
    getFile(
      "tailwind.config.js",
      `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
    ),
    getFile(
      "postcss.config.js",
      `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
    ),
    getFile(
      "vite.config.js",
      `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`
    ),
    getFile(
      "index.html",
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${config.projectName || 'React App'}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.${ext}"></script>
  </body>
</html>`
    ),
    ...(isTypeScript ? [
      getFile(
        "tsconfig.json",
        JSON.stringify({
          compilerOptions: {
            target: "ES2020",
            useDefineForClassFields: true,
            lib: ["ES2020", "DOM", "DOM.Iterable"],
            module: "ESNext",
            skipLibCheck: true,
            moduleResolution: "bundler",
            allowImportingTsExtensions: true,
            resolveJsonModule: true,
            isolatedModules: true,
            noEmit: true,
            jsx: "react-jsx",
            strict: true,
            noUnusedLocals: true,
            noUnusedParameters: true,
            noFallthroughCasesInSwitch: true
          },
          include: ["src"],
          references: [{ path: "./tsconfig.node.json" }]
        }, null, 2)
      ),
      getFile(
        "tsconfig.node.json",
        JSON.stringify({
          compilerOptions: {
            composite: true,
            skipLibCheck: true,
            module: "ESNext",
            moduleResolution: "bundler",
            allowSyntheticDefaultImports: true
          },
          include: ["vite.config.ts"]
        }, null, 2)
      )
    ] : [])
  ];
}

// ===== 2️⃣ STANDARD STRUCTURE (⭐ RECOMMENDED DEFAULT) =====
// Best for: Real-world projects (80% of apps)
export function generateStandardReactTailwind(config) {
  const isTypeScript = config.language === 'typescript';
  const ext = isTypeScript ? 'tsx' : 'jsx';
  const jsExt = isTypeScript ? 'ts' : 'js';
  
  return [
    getFolder("src", [
      getFolder("components", [
        getFolder("ui", [
          getFile(
            `Button.${ext}`,
            `export default function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'border border-gray-300 hover:bg-gray-100 text-gray-700'
  };
  
  return (
    <button 
      className={\`px-4 py-2 rounded font-medium transition-colors \${variants[variant]}\`}
      {...props}
    >
      {children}
    </button>
  );
}`
          ),
          getFile(
            `Card.${ext}`,
            `export default function Card({ children, className = '' }) {
  return (
    <div className={\`bg-white rounded-lg shadow-md p-6 \${className}\`}>
      {children}
    </div>
  );
}`
          ),
          getFile(
            `Input.${ext}`,
            `export default function Input({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}`
          )
        ]),
        getFolder("layout", [
          getFile(
            `Navbar.${ext}`,
            `export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Your App</h1>
          <div className="flex gap-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}`
          ),
          getFile(
            `Footer.${ext}`,
            `export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Your App. All rights reserved.</p>
      </div>
    </footer>
  );
}`
          )
        ])
      ]),
      getFolder("pages", [
        getFile(
          `Home.${ext}`,
          `import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome Home</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p className="text-gray-600 mb-4">Description of your feature</p>
          <Button>Learn More</Button>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p className="text-gray-600 mb-4">Description of your feature</p>
          <Button variant="secondary">Learn More</Button>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p className="text-gray-600 mb-4">Description of your feature</p>
          <Button variant="outline">Learn More</Button>
        </Card>
      </div>
    </div>
  );
}`
        ),
        getFile(
          `About.${ext}`,
          `export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 text-lg">Learn more about our application.</p>
    </div>
  );
}`
        )
      ]),
      getFolder("hooks", [
        getFile(
          `useAuth.${jsExt}`,
          `import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check auth status
    const checkAuth = async () => {
      try {
        // Your auth logic here
        setLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const login = async (credentials) => {
    // Login logic
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return { user, loading, login, logout };
}`
        ),
        getFile(
          `useTheme.${jsExt}`,
          `import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  return { theme, toggleTheme };
}`
        )
      ]),
      getFolder("services", [
        getFile(
          `api.${jsExt}`,
          `const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function fetchData(endpoint) {
  const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

export async function postData(endpoint, data) {
  const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}`
        ),
        getFile(
          `auth.service.${jsExt}`,
          `import { fetchData, postData } from './api';

export const authService = {
  async login(credentials) {
    return postData('/auth/login', credentials);
  },
  
  async register(userData) {
    return postData('/auth/register', userData);
  },
  
  async getCurrentUser() {
    return fetchData('/auth/me');
  },
  
  logout() {
    localStorage.removeItem('token');
  }
};`
        )
      ]),
      getFolder("lib", [
        getFile(
          `utils.${jsExt}`,
          `export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}`
        ),
        getFile(
          `constants.${jsExt}`,
          `export const APP_NAME = '${config.projectName || 'My App'}';
export const API_TIMEOUT = 10000;
export const ITEMS_PER_PAGE = 10;`
        )
      ]),
      getFolder("assets", [
        getFolder("images", []),
        getFolder("icons", [])
      ]),
      getFile(
        `App.${ext}`,
        `import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}`
      ),
      getFile(
        `main.${ext}`,
        `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
      ),
      getFile(
        "index.css",
        `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900;
  }
}`
      )
    ]),
    getFile(
      "package.json",
      JSON.stringify({
        name: config.projectName || "standard-react-app",
        private: true,
        version: "0.1.0",
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview",
          lint: "eslint . --ext js,jsx,ts,tsx"
        },
        dependencies: {
          react: "^18.2.0",
          "react-dom": "^18.2.0"
        },
        devDependencies: {
          "@vitejs/plugin-react": "^4.0.0",
          autoprefixer: "^10.4.14",
          postcss: "^8.4.24",
          tailwindcss: "^3.3.2",
          vite: "^4.3.9",
          eslint: "^8.42.0",
          "eslint-plugin-react": "^7.32.2",
          "eslint-plugin-react-hooks": "^4.6.0",
          ...(isTypeScript && {
            typescript: "^5.0.0",
            "@types/react": "^18.2.0",
            "@types/react-dom": "^18.2.0",
            "@typescript-eslint/eslint-plugin": "^5.59.0",
            "@typescript-eslint/parser": "^5.59.0"
          })
        }
      }, null, 2)
    ),
    getFile(
      "tailwind.config.js",
      `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#6B7280',
      }
    },
  },
  plugins: [],
}`
    ),
    getFile(
      "postcss.config.js",
      `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
    ),
    getFile(
      "vite.config.js",
      `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});`
    ),
    getFile(
      ".env.example",
      `VITE_API_URL=http://localhost:3000/api`
    ),
    getFile(
      "index.html",
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${config.projectName || 'React App'}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.${ext}"></script>
  </body>
</html>`
    ),
    ...(isTypeScript ? [
      getFile(
        "tsconfig.json",
        JSON.stringify({
          compilerOptions: {
            target: "ES2020",
            useDefineForClassFields: true,
            lib: ["ES2020", "DOM", "DOM.Iterable"],
            module: "ESNext",
            skipLibCheck: true,
            moduleResolution: "bundler",
            allowImportingTsExtensions: true,
            resolveJsonModule: true,
            isolatedModules: true,
            noEmit: true,
            jsx: "react-jsx",
            strict: true,
            noUnusedLocals: true,
            noUnusedParameters: true,
            noFallthroughCasesInSwitch: true,
            baseUrl: ".",
            paths: {
              "@/*": ["./src/*"]
            }
          },
          include: ["src"],
          references: [{ path: "./tsconfig.node.json" }]
        }, null, 2)
      )
    ] : [])
  ];
}

// ===== 3️⃣ ADVANCED STRUCTURE (SCALABLE / PRODUCTION) =====
// Best for: Large apps, dashboards, SaaS
export function generateAdvancedReactTailwind(config) {
  const isTypeScript = config.language === 'typescript';
  const ext = isTypeScript ? 'tsx' : 'jsx';
  const jsExt = isTypeScript ? 'ts' : 'js';
  
  return [
    getFolder("src", [
      // Feature-based modules
      getFolder("modules", [
        getFolder("auth", [
          getFolder("components", [
            getFile(
              `LoginForm.${ext}`,
              `import { useState } from 'react';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">Login</Button>
    </form>
  );
}`
            ),
            getFile(
              `RegisterForm.${ext}`,
              `export default function RegisterForm({ onSubmit }) {
  // Registration form component
  return <form>Register Form</form>;
}`
            )
          ]),
          getFolder("hooks", [
            getFile(
              `useAuth.${jsExt}`,
              `import { useState, useEffect } from 'react';
import { authService } from '../services/auth';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    authService.getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);
  
  const login = async (credentials) => {
    const user = await authService.login(credentials);
    setUser(user);
    return user;
  };
  
  const logout = () => {
    authService.logout();
    setUser(null);
  };
  
  return { user, loading, login, logout };
}`
            )
          ]),
          getFolder("services", [
            getFile(
              `auth.${jsExt}`,
              `import { api } from '@/shared/lib/api';

export const authService = {
  async login(credentials) {
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    return data.user;
  },
  
  async register(userData) {
    const { data } = await api.post('/auth/register', userData);
    return data;
  },
  
  async getCurrentUser() {
    const { data } = await api.get('/auth/me');
    return data;
  },
  
  logout() {
    localStorage.removeItem('token');
  }
};`
            )
          ]),
          getFolder("pages", [
            getFile(
              `LoginPage.${ext}`,
              `import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}`
            ),
            getFile(
              `RegisterPage.${ext}`,
              `export default function RegisterPage() {
  return <div>Register Page</div>;
}`
            )
          ]),
          getFile(
            `index.${jsExt}`,
            `export { default as LoginPage } from './pages/LoginPage';
export { default as RegisterPage } from './pages/RegisterPage';
export { useAuth } from './hooks/useAuth';`
          )
        ]),
        getFolder("dashboard", [
          getFolder("components", [
            getFile(
              `StatsCard.${ext}`,
              `import Card from '@/shared/ui/Card';

export default function StatsCard({ title, value, trend }) {
  return (
    <Card>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
      {trend && (
        <p className={\`text-sm mt-1 \${trend > 0 ? 'text-green-600' : 'text-red-600'}\`}>
          {trend > 0 ? '+' : ''}{trend}%
        </p>
      )}
    </Card>
  );
}`
            ),
            getFile(
              `DashboardGrid.${ext}`,
              `export default function DashboardGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {children}
    </div>
  );
}`
            )
          ]),
          getFolder("hooks", [
            getFile(
              `useDashboardData.${jsExt}`,
              `import { useState, useEffect } from 'react';
import { dashboardService } from '../services/dashboard';

export function useDashboardData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    dashboardService.getStats()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);
  
  return { data, loading };
}`
            )
          ]),
          getFolder("services", [
            getFile(
              `dashboard.${jsExt}`,
              `import { api } from '@/shared/lib/api';

export const dashboardService = {
  async getStats() {
    const { data } = await api.get('/dashboard/stats');
    return data;
  }
};`
            )
          ]),
          getFolder("pages", [
            getFile(
              `DashboardPage.${ext}`,
              `import DashboardGrid from '../components/DashboardGrid';
import StatsCard from '../components/StatsCard';
import { useDashboardData } from '../hooks/useDashboardData';

export default function DashboardPage() {
  const { data, loading } = useDashboardData();
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardGrid>
        <StatsCard title="Total Users" value={data?.users || 0} trend={5} />
        <StatsCard title="Revenue" value={\`$\${data?.revenue || 0}\`} trend={12} />
        <StatsCard title="Orders" value={data?.orders || 0} trend={-3} />
        <StatsCard title="Growth" value={\`\${data?.growth || 0}%\`} trend={8} />
      </DashboardGrid>
    </div>
  );
}`
            )
          ]),
          getFile(
            `index.${jsExt}`,
            `export { default as DashboardPage } from './pages/DashboardPage';`
          )
        ])
      ]),
      // Shared resources
      getFolder("shared", [
        getFolder("ui", [
          getFile(
            `Button.${ext}`,
            `export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={\`rounded font-medium transition-all \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`
          ),
          getFile(
            `Card.${ext}`,
            `export default function Card({ children, className = '', hover = false }) {
  return (
    <div className={\`bg-white rounded-lg shadow-md p-6 \${hover ? 'hover:shadow-lg transition-shadow' : ''} \${className}\`}>
      {children}
    </div>
  );
}`
          ),
          getFile(
            `Input.${ext}`,
            `export default function Input({ label, error, helperText, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={\`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 \${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }\`}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  );
}`
          ),
          getFile(
            `Modal.${ext}`,
            `export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
}`
          )
        ]),
        getFolder("layout", [
          getFile(
            `Navbar.${ext}`,
            `import { useAuth } from '@/modules/auth';

export default function Navbar() {
  const { user, logout } = useAuth();
  
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Your App</h1>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-600">Welcome, {user.name}</span>
              <button onClick={logout} className="text-red-600 hover:text-red-700">
                Logout
              </button>
            </>
          ) : (
            <a href="/login" className="text-blue-600 hover:text-blue-700">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
}`
          ),
          getFile(
            `Sidebar.${ext}`,
            `export default function Sidebar({ items }) {
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen p-4">
      <nav className="space-y-2">
        {items.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}`
          ),
          getFile(
            `Footer.${ext}`,
            `export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-auto py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Your App. All rights reserved.</p>
      </div>
    </footer>
  );
}`
          )
        ]),
        getFolder("hooks", [
          getFile(
            `useDebounce.${jsExt}`,
            `import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}`
          ),
          getFile(
            `useMediaQuery.${jsExt}`,
            `import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query]);
  
  return matches;
}`
          ),
          getFile(
            `useLocalStorage.${jsExt}`,
            `import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}`
          )
        ]),
        getFolder("lib", [
          getFile(
            `api.${jsExt}`,
            `const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const token = localStorage.getItem('token');
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: \`Bearer \${token}\` }),
        ...options.headers
      }
    };
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    return response.json();
  }
  
  get(endpoint) {
    return this.request(endpoint);
  }
  
  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  
  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiClient(API_BASE_URL);`
          ),
          getFile(
            `utils.${jsExt}`,
            `export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date, locale = 'en-US') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}

export function truncate(str, length) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}

export function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`
          ),
          getFile(
            `constants.${jsExt}`,
            `export const APP_NAME = '${config.projectName || 'My App'}';
export const API_TIMEOUT = 10000;
export const ITEMS_PER_PAGE = 20;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile'
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me'
  },
  DASHBOARD: {
    STATS: '/dashboard/stats'
  }
};`
          ),
          getFile(
            `config.${jsExt}`,
            `export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME || '${config.projectName || 'My App'}',
  environment: import.meta.env.MODE,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD
};`
          )
        ])
      ]),
      getFolder("assets", [
        getFolder("images", []),
        getFolder("icons", []),
        getFolder("fonts", [])
      ]),
      getFile(
        `App.${ext}`,
        `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './shared/layout/Navbar';
import Footer from './shared/layout/Footer';
import { LoginPage, RegisterPage } from './modules/auth';
import { DashboardPage } from './modules/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/" element={<div className="p-6">Home Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}`
      ),
      getFile(
        `main.${ext}`,
        `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
      ),
      getFile(
        "index.css",
        `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900 antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }
}

@layer components {
  .container {
    @apply mx-auto px-4 max-w-7xl;
  }
}`
      )
    ]),
    getFile(
      "package.json",
      JSON.stringify({
        name: config.projectName || "advanced-react-app",
        private: true,
        version: "0.1.0",
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview",
          lint: "eslint . --ext js,jsx,ts,tsx",
          "lint:fix": "eslint . --ext js,jsx,ts,tsx --fix",
          test: "vitest",
          "test:ui": "vitest --ui"
        },
        dependencies: {
          react: "^18.2.0",
          "react-dom": "^18.2.0",
          "react-router-dom": "^6.11.2"
        },
        devDependencies: {
          "@vitejs/plugin-react": "^4.0.0",
          autoprefixer: "^10.4.14",
          postcss: "^8.4.24",
          tailwindcss: "^3.3.2",
          vite: "^4.3.9",
          vitest: "^0.32.0",
          "@testing-library/react": "^14.0.0",
          "@testing-library/jest-dom": "^5.16.5",
          eslint: "^8.42.0",
          "eslint-plugin-react": "^7.32.2",
          "eslint-plugin-react-hooks": "^4.6.0",
          ...(isTypeScript && {
            typescript: "^5.0.0",
            "@types/react": "^18.2.0",
            "@types/react-dom": "^18.2.0",
            "@typescript-eslint/eslint-plugin": "^5.59.0",
            "@typescript-eslint/parser": "^5.59.0"
          })
        }
      }, null, 2)
    ),
    getFile(
      "tailwind.config.js",
      `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#6b7280',
          600: '#4b5563',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}`
    ),
    getFile(
      "postcss.config.js",
      `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
    ),
    getFile(
      "vite.config.js",
      `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});`
    ),
    getFile(
      ".env.example",
      `VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=${config.projectName || 'My App'}`
    ),
    getFile(
      ".eslintrc.json",
      JSON.stringify({
        extends: [
          "eslint:recommended",
          "plugin:react/recommended",
          "plugin:react-hooks/recommended"
        ],
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          ecmaFeatures: {
            jsx: true
          }
        },
        settings: {
          react: {
            version: "detect"
          }
        },
        rules: {
          "react/react-in-jsx-scope": "off",
          "react/prop-types": "off"
        }
      }, null, 2)
    ),
    getFile(
      "index.html",
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${config.projectName || 'React App'}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.${ext}"></script>
  </body>
</html>`
    ),
    getFile(
      "README.md",
      `# ${config.projectName || 'Advanced React App'}

## 🏗️ Project Structure

This project follows a **feature-based architecture** for scalability.

\`\`\`
src/
├── modules/          # Feature-based modules
│   ├── auth/         # Authentication module
│   └── dashboard/    # Dashboard module
├── shared/           # Shared resources
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   ├── hooks/        # Custom hooks
│   └── lib/          # Utilities & config
└── assets/           # Static assets
\`\`\`

## 🚀 Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## 📦 Key Features

- Feature-based folder structure
- Isolated modules (auth, dashboard)
- Shared UI components library
- Custom hooks collection
- API client with auth
- React Router v6
- Tailwind CSS
- TypeScript support

## 🧩 Module Structure

Each module follows this pattern:

\`\`\`
module/
├── components/       # Module-specific UI
├── hooks/            # Module-specific logic
├── services/         # API calls
├── pages/            # Route components
└── index.ts          # Public exports
\`\`\`

## 🛠️ Development

- \`npm run dev\` - Start dev server
- \`npm run build\` - Build for production
- \`npm run lint\` - Run ESLint
- \`npm run test\` - Run tests
`
    ),
    ...(isTypeScript ? [
      getFile(
        "tsconfig.json",
        JSON.stringify({
          compilerOptions: {
            target: "ES2020",
            useDefineForClassFields: true,
            lib: ["ES2020", "DOM", "DOM.Iterable"],
            module: "ESNext",
            skipLibCheck: true,
            moduleResolution: "bundler",
            allowImportingTsExtensions: true,
            resolveJsonModule: true,
            isolatedModules: true,
            noEmit: true,
            jsx: "react-jsx",
            strict: true,
            noUnusedLocals: true,
            noUnusedParameters: true,
            noFallthroughCasesInSwitch: true,
            baseUrl: ".",
            paths: {
              "@/*": ["./src/*"],
              "@/modules/*": ["./src/modules/*"],
              "@/shared/*": ["./src/shared/*"]
            }
          },
          include: ["src"],
          references: [{ path: "./tsconfig.node.json" }]
        }, null, 2)
      ),
      getFile(
        "tsconfig.node.json",
        JSON.stringify({
          compilerOptions: {
            composite: true,
            skipLibCheck: true,
            module: "ESNext",
            moduleResolution: "bundler",
            allowSyntheticDefaultImports: true
          },
          include: ["vite.config.ts"]
        }, null, 2)
      )
    ] : [])
  ];
}

/**
 * Main router function to select the appropriate preset
 */
export function generateReactTailwindStructure(config) {
  const preset = config.folderPreset || 'standard';
  
  switch (preset) {
    case 'minimal':
      return generateMinimalReactTailwind(config);
    case 'standard':
      return generateStandardReactTailwind(config);
    case 'advanced':
      return generateAdvancedReactTailwind(config);
    default:
      return generateStandardReactTailwind(config);
  }
}
