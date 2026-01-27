# Folder Structure Presets

## Overview

StackStruct now supports **three folder structure presets** for React + Tailwind projects. Each preset is optimized for different project scales and team sizes.

---

## 🎯 BASE ASSUMPTIONS

- **Framework:** React (Vite / CRA / Next.js compatible)
- **Styling:** Tailwind CSS
- **Language:** JS/TS compatible (TypeScript recommended)
- **Component Library Ready:** ShadCN, MUI, Chakra, etc.

---

## 1️⃣ MINIMAL STRUCTURE

### 👉 Best For
- Small apps, MVPs, demos
- Quick prototypes
- Learning projects
- Solo developers

### Folder Tree
```
src/
  components/
  pages/
  App.jsx
  main.jsx
  index.css
package.json
tailwind.config.js
vite.config.js
```

### What Lives Where

| Folder/File | Purpose |
|------------|---------|
| `components/` | Reusable UI components |
| `pages/` | Route-level components |
| `App.jsx` | App layout + routing |
| `main.jsx` | React root |
| `index.css` | Tailwind base styles |

### ✅ Why This Works
- Zero mental overhead
- Fast onboarding
- No abstraction layers
- ~5 files total

### ⚠️ Limitations
- Becomes messy after ~15–20 components
- No separation of logic vs UI
- Not suitable for teams

---

## 2️⃣ STANDARD STRUCTURE (⭐ RECOMMENDED DEFAULT)

### 👉 Best For
- Real-world projects (80% of apps)
- Small to medium teams
- Production apps
- Client projects

### Folder Tree
```
src/
  components/
    ui/          → buttons, cards, inputs (ShadCN-like)
    layout/      → navbar, footer, sidebar
  pages/
  hooks/
  services/
  lib/
  assets/
  App.jsx
  main.jsx
  index.css
package.json
tailwind.config.js
vite.config.js
```

### Folder Breakdown (VERY IMPORTANT)

#### `components/`
```
components/
  ui/        → Button, Card, Input (ShadCN-like)
  layout/    → Navbar, Footer, Sidebar
```

#### `hooks/`
```
hooks/
  useAuth.js
  useTheme.js
```
- Reusable logic, no JSX

#### `services/`
```
services/
  api.js
  auth.service.js
```
- All API calls live here (fetch/axios)

#### `lib/`
```
lib/
  utils.js
  constants.js
```
- Helpers, formatters, config

#### `assets/`
```
assets/
  images/
  icons/
```

### ✅ Why This Structure is GOOD
- Clear separation of concerns
- Scales to medium–large apps
- Easy to auto-generate
- Industry standard for most projects
- ~20 files total

---

## 3️⃣ ADVANCED STRUCTURE (SCALABLE / PRODUCTION)

### 👉 Best For
- Large apps, dashboards, SaaS
- Multi-developer teams
- Enterprise applications
- Monorepo candidates

### Folder Tree
```
src/
  modules/
    auth/
      components/
      hooks/
      services/
      pages/
    dashboard/
      components/
      hooks/
      services/
      pages/
  shared/
    ui/
    layout/
    hooks/
    lib/
  assets/
  App.jsx
  main.jsx
  index.css
package.json
tailwind.config.js
vite.config.js
```

### 🧠 HOW THIS THINKS (IMPORTANT)

**Feature-based, not file-type-based**

Each module is isolated:

```
auth/
  components/   → Auth UI
  hooks/        → Auth logic (useAuth)
  services/     → Auth API calls
  pages/        → Login/Register
```

### `shared/` Folder
```
shared/
  ui/       → Button, Card, Modal
  layout/   → Navbar, Sidebar
  hooks/    → useDebounce, useMediaQuery
  lib/      → utils, config, API client
```

### ✅ Why This is Scalable
- No cross-feature coupling
- Easy to delete / move features
- Perfect for monorepo later
- Team can own modules
- ~40+ files total

### Module Index Pattern
```javascript
// modules/auth/index.js
export { default as LoginPage } from './pages/LoginPage';
export { default as RegisterPage } from './pages/RegisterPage';
export { useAuth } from './hooks/useAuth';
```

---

## 🟣 TAILWIND-SPECIFIC FILES (ALL PRESETS)

Always present across all presets:

```
tailwind.config.js
postcss.config.js
index.css
```

### `index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ⚙️ HOW STRUCT CHOOSES PRESET (LOGIC)

### In UI (Stack Page)
User selects one of three preset cards:
- **Minimal** - MVP badge (green)
- **Standard** - ⭐ Recommended badge (blue)
- **Advanced** - Production badge (yellow)

### In Generator
```javascript
switch (folderPreset) {
  case 'minimal':
    return generateMinimalReactTailwind(config);
  case 'standard':
    return generateStandardReactTailwind(config);
  case 'advanced':
    return generateAdvancedReactTailwind(config);
  default:
    return generateStandardReactTailwind(config);
}
```

---

## 🧩 STRUCT GENERATOR RULES (DON'T BREAK THESE)

### ❌ DON'T
- Add `services/` in Minimal
- Add `modules/` in Standard
- Mix feature-based + type-based
- Create empty folders

### ✅ DO
- UI always reusable
- API always isolated
- Hooks never contain JSX
- Services never contain UI logic

---

## 📊 Comparison Table

| Feature | Minimal | Standard | Advanced |
|---------|---------|----------|----------|
| **Files** | ~5 | ~20 | ~40+ |
| **Setup Time** | 5 min | 15 min | 30 min |
| **Team Size** | 1 | 1-5 | 5+ |
| **Best For** | MVPs | Most projects | SaaS/Enterprise |
| **Learning Curve** | Easy | Medium | Steep |
| **Scalability** | Low | Medium | High |
| **Abstraction** | None | Some | Heavy |
| **Refactor Cost** | High | Medium | Low |

---

## 🚀 Usage in StackStruct

### In Stack Configuration Page
1. Select **Folder Structure Preset** (3 cards)
2. Choose technologies (React, Tailwind, etc.)
3. Toggle architecture rules
4. Preview folder structure updates in real-time

### Generated Output
- All necessary files with real code (not comments)
- Proper imports and exports
- Working examples (Button, Card, hooks)
- TypeScript/JavaScript based on language selection
- Package.json with correct dependencies

---

## 🎨 UI Design (Catppuccin Dark)

### Preset Selection Cards
- Border: `rgba(255,255,255,0.08)`
- Active Border: `#89B4FA` with glow
- Background: `#181825`
- Text: `#CDD6F4`
- Badges: Colored with 20% opacity backgrounds

### Animation Rules
- Card hover: `y: -2px`
- Card tap: `scale: 0.98`
- Duration: `300ms`
- NO bounce, elastic, or infinite loops

---

## 📝 Example Config Object

```javascript
{
  projectName: "my-app",
  frontend: "react",
  styling: "tailwind",
  language: "typescript",
  folderPreset: "standard", // minimal | standard | advanced
  backend: "express",
  database: "mongodb"
}
```

---

## 🔧 Future Enhancements

### Planned Features
- Vue + Tailwind presets
- Next.js App Router specific structures
- Database-specific folders (models/, schemas/)
- Auth middleware injection
- ORM integration (Prisma, Drizzle)
- API route generation

### Community Requests
- Custom preset builder
- Preset templates library
- Export/Import preset configs
- Preset migration tools

---

## 💡 Philosophy

> "If your generator changes UI options but not folders, adds DB but no models, enables auth but no middleware - **it's lying**."

StackStruct follows this truth:
- **Selections = Real Changes**
- **No fake abstractions**
- **Production-ready code**

---

## 📚 References

- [React Docs - File Structure](https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Setup](https://tailwindcss.com/docs/installation)
- [Feature-Sliced Design](https://feature-sliced.design/)

---

**Last Updated:** 2026-01-27  
**Version:** 1.0.0  
**Contributors:** StackStruct Team
