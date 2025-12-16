# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The portfolio showcases projects, work experience, testimonials, and includes advanced 3D visualizations using Three.js and React Three Fiber.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Architecture

### Data-Driven Content System

All portfolio content (projects, testimonials, navigation, etc.) is centralized in `/data/index.ts`. This single source of truth exports:

- `projects`: Project showcase cards with id, title, description, images, tech stack icons, and links
- `testimonials`: Client/colleague recommendations
- `navItems`: Navigation menu structure
- `gridItems`: About section grid configuration
- `workExperience`: Professional experience cards
- `socialMedia`: Social media links

**IMPORTANT**: When adding new projects:
1. Add the project data to the `projects` array in `/data/index.ts`
2. Projects are displayed in **descending ID order** (highest ID first) via `.sort((a, b) => b.id - a.id)` in `Rencentprojects.tsx`
3. Create a corresponding project detail page in `/app/project{id}/page.tsx`
4. Follow the existing project page structure (see project3 or project4 as templates)

### Component Structure

- `/components`: Reusable UI components
  - `Rencentprojects.tsx`: Main project grid display
  - `Hero.tsx`: Landing section
  - `Footer.tsx`, `Grid.tsx`, `Experiences.tsx`, `Clients.tsx`: Other page sections
  - `/components/ui`: Low-level UI components (buttons, effects, 3D elements)

- `/app`: Next.js App Router pages
  - `page.tsx`: Homepage
  - `layout.tsx`: Root layout
  - `/app/project{N}/page.tsx`: Individual project detail pages

### Project Detail Pages Pattern

Each project page (`/app/project{N}/page.tsx`) follows this structure:
1. Client component with Spotlight effects (loaded dynamically with `{ ssr: false }`)
2. Header with project number
3. Main showcase image
4. Text content section (max-w-4xl centered)
5. Additional images in grid or single layouts
6. External links via `MagicButton` component
7. Return to homepage link
8. Copyright footer

### Tech Stack Icons

Technology icons are stored in `/public/icon_techno/` and referenced in the `iconLists` array of each project. Common icons include:
- `/re.svg` (React)
- `/next.svg` (Next.js)
- `/tail.svg` (Tailwind)
- `/ts.svg` (TypeScript)
- `/figma.png` (Figma)
- `/icon_techno/flutter.png`, `/icon_techno/postgresql.webp`, `/icon_techno/supabase.png`, etc.

### 3D Visualizations

The portfolio uses:
- **Three.js** + **@react-three/fiber** + **@react-three/drei** for 3D graphics
- **three-globe**: Interactive 3D globe visualization
- **Framer Motion**: Advanced animations

### Monitoring & Analytics

- **Sentry**: Error tracking configured in `sentry.*.config.ts`
- **Vercel Analytics** and **Speed Insights**: Performance monitoring

## Styling System

Tailwind CSS is used with a custom configuration:
- Grid system: 6x6 responsive grid (see `README-typescript-concepts.md` for grid helpers)
- Responsive breakpoints: `sm`, `md`, `lg`
- Custom color: `text-purple` for brand accent
- Dark mode support via `next-themes`

## Important Notes

- Always use `Image` from `next/image` for optimized image loading
- Use `dynamic` import for client-only components (especially 3D components)
- The codebase uses `'use client'` directives where needed for interactive components
- Links between pages use Next.js `Link` or `ActiveLink` component
- Projects are sorted by descending ID in the display, so newest projects (highest ID) appear first
