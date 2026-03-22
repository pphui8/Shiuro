# Shiuro Project Overview

Shiuro is a lightweight, high-performance personal portfolio website built with Next.js. It features a modern, interactive "Windows-like" tabbed interface within a single-page scrolling architecture. The project is optimized for speed (Lighthouse score 100) and easy deployment via GitHub Pages.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.3
- **UI Library:** React 18, Ant Design (antd 5.12)
- **Styling:** CSS Modules, Vanilla CSS
- **Animations:** Framer Motion
- **3D Visualization:** Three.js, react-force-graph-3d
- **Icons:** mingcute_icon
- **Dynamic Loading:** @loadable/component
- **Utilities:** nanoid, react-responsive

## Architecture & Directory Structure

The project uses a hybrid architecture where the Next.js App Router serves as the entry point, but the core business logic and sections are organized into specific route groups (though located outside the `app` directory for logical separation).

- `src/app/`: The Next.js App Router entry point.
  - `layout.tsx`: Root layout, global providers (ConfigProvider), and metadata.
  - `page.tsx`: Main entry that composes `HomePage` and `Intro` sections.
  - `globals.css`: Global styles.
- `src/(home)/`: Contains the landing/hero section (`HomePage`).
  - `page.tsx`: Profile card, social links, and scroll-down indicators.
  - `page.module.css`: Styles for the landing section.
- `src/(intro)/`: The main interactive section of the site.
  - `page.tsx`: Implements the tabbed "window" interface, navigation state, and sub-page routing logic.
  - `Tab.tsx`: Tab component for the reorderable tab bar.
  - `Address.tsx`: Fake address bar component that controls the "internal" routing.
  - `pages.ts`: Configuration file defining all available sub-pages and initial tabs.
  - `(pages)/`: React components for each sub-section:
    - `About.tsx`, `Code.tsx`, `Research.tsx` (3D Graph), `Start.tsx`, `This_site.tsx`, `404.tsx`.
- `public/`: Static assets including profile images, icons, and site graphics.

## Key Entry Points

1. **`src/app/page.tsx`**: The top-level component that stitches together the `HomePage` and the `Intro` sections.
2. **`src/(intro)/page.tsx`**: The core state manager for the tabbed UI. It handles tab creation, removal, reordering (via Framer Motion), and rendering the active component based on the selected "path".
3. **`src/(intro)/pages.ts`**: The central registry for site content. Modify this file to add or remove sections from the navigation.

## Development & Workflow Commands

- **Dependencies:** `npm install`
- **Development:** `npm run dev` (Starts dev server at http://localhost:3000)
- **Production Build:** `npm run build` (Triggers `next build` followed by a static export if configured)
- **Linting:** `npm run lint`

## Coding Conventions & Rules

- **Strict Typing:** Always use TypeScript with strict mode. Define interfaces for props and data structures (see `src/(intro)/pages.ts`).
- **Component Patterns:**
  - Use functional components and React hooks.
  - Prefer CSS Modules for component-level styling to prevent leakage.
  - Use `framer-motion` for all transitions and interactive animations.
- **Import Aliases:** Use the `~/*` alias to reference the `src/` directory (configured in `tsconfig.json`).
- **3D Components:** The `Research` component uses `react-force-graph-3d` and must be loaded via `@loadable/component` with `ssr: false` to avoid hydration issues.
- **State Management:** Navigation within the `Intro` section is managed locally via `useState` and doesn't rely on URL synchronization (simulating an OS window environment).
