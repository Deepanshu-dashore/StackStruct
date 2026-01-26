# Project Structure & Layout Components

This document provides an overview of the project's folder structure and details about the key layout components.

## Folder Structure

The project follows a standard Next.js App Router structure. Key directories inside `src` include:

- **/app**: Contains all routes, pages, and layouts.
  - `layout.tsx`: The root layout for the entire application. It includes the `<html>` and `<body>` tags and wraps all pages.
  - `page.tsx`: The main entry point for the homepage route (`/`).
  - `create/page.tsx`: The page for the project generator UI.
  - `globals.css`: Global stylesheets and Tailwind CSS definitions.
- **/components**: Contains reusable React components used throughout the application.
  - `/ui`: Contains the UI components from `shadcn/ui` (e.g., `Button`, `Card`).
  - `header.tsx`: The site-wide top navigation bar.
  - `footer.tsx`: The site-wide footer.
  - `hero.tsx`: The main hero section for the homepage.
  - `features.tsx`: The feature card section on the homepage.
  - `icons.tsx`: Custom SVG icons used in the app.
- **/lib**: Contains library code, utilities, and configuration.
  - `utils.ts`: Utility functions, like `cn` for merging Tailwind classes.
  - `config-options.ts`: Defines the available options for the project generator.
  - `generators.ts`: Contains the logic for generating the file tree and install scripts.
  - `types.ts`: TypeScript type definitions.
- **/hooks**: Contains custom React hooks.
  - `use-toast.ts`: Hook for managing toast notifications.
- **/public**: Contains static assets that are served publicly.
  - `/assets`: For images like `heroImage.png`.

## Layout & Page Components

### 1. `src/app/layout.tsx` (Root Layout)

This is the main layout for the entire application.

- **Purpose**: Wraps every page with the root `<html>` and `<body>` tags.
- **Key Features**:
  - Imports the `Inter` font from `next/font/google`.
  - Applies global CSS from `globals.css`.
  - Sets up the `ThemeProvider` for light/dark mode functionality.
  - Includes the `Toaster` component to display toast notifications globally.
  - Sets the base metadata (title, description) for the application.

### 2. `src/components/header.tsx`

This component renders the sticky top navigation bar.

- **Purpose**: Provides consistent navigation across all pages.
- **Key Features**:
  - A link to the homepage (`/`) with the "Struct" logo and name.
  - A GitHub icon linking to the project repository.
  - The `ThemeToggle` component to switch between light and dark themes.
  - Uses a blurred background for a modern, semi-transparent look.

### 3. `src/components/footer.tsx`

This component renders the footer at the bottom of the page.

- **Purpose**: Provides closing information and links.
- **Key Features**:
  - Displays the copyright notice with the current year.
  - Includes links for "Documentation" and "Support".

### 4. `src/app/page.tsx` (Homepage)

This is the main component for the homepage route.

- **Purpose**: Acts as a container for the different sections of the landing page.
- **Key Features**:
  - Organizes the page structure by rendering `Header`, `Hero`, `Features`, and `Footer` in sequence.
  - Uses a flex column layout to stack these sections vertically.

### 5. `src/components/hero.tsx` (Hero Section)

This component is the main "above-the-fold" content on the homepage.

- **Purpose**: To grab the user's attention with a strong headline and call to action.
- **Layout**: A two-column grid.
  - **Left Column**: Contains the main heading, subheading, and two CTA buttons (`Start Building` and `Explore Templates`).
  - **Right Column**: Displays a visual element (`heroImage.png`) with a subtle floating animation using Framer Motion.
- **Animation**: Uses `framer-motion` to animate the entrance of text and the image.

### 6. `src/components/features.tsx` (Features Section)

This component displays the key features of the application in a card-based layout.

- **Purpose**: To quickly communicate the main benefits of the "Struct" application.
- **Layout**: A three-column grid of `Card` components.
- **Content**: Each card features an icon, a title (e.g., "Visual Structure"), and a description.
- **Styling**: Cards have a hover effect that slightly lifts them and adds a glow, making the UI interactive.
