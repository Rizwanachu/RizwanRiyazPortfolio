# Rizwan Riyaz Portfolio

## Overview

A personal portfolio website for Rizwan Riyaz showcasing professional work, skills, and services. This is a frontend-only React application built with Vite, featuring a modern dark theme design with smooth animations. The site includes sections for about, portfolio projects, skills, merchandise shop, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- Single-page application using client-side routing via `wouter`
- Component-based architecture with reusable UI components

**Build Tool**: Vite
- Fast development server on port 5000
- Optimized production builds to `dist/` directory
- Path aliases configured: `@/` maps to `src/`, `@assets/` maps to `attached_assets/`

**Styling**: Tailwind CSS with custom configuration
- Dark theme by default with CSS custom properties for theming
- Custom fonts: Montserrat (headings) and Poppins (body)
- Tailwind Animate plugin for animations
- shadcn/ui component library (Radix UI primitives)

**Animation**: Framer Motion
- Scroll-based animations and transitions
- Custom intersection observer hook for section reveals

**State Management**: TanStack React Query
- Configured for data fetching with custom query client
- API request helper utilities in `src/lib/queryClient.ts`

### Project Structure

```
/
├── index.html              # Entry point
├── src/
│   ├── main.tsx           # React DOM render
│   ├── App.tsx            # Root component with routing
│   ├── index.css          # Global styles and Tailwind
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── pages/             # Route pages
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utilities, types, data
├── attached_assets/        # Static assets and images
├── vite.config.ts
├── tailwind.config.ts
└── vercel.json            # Vercel deployment config
```

### Routing

Uses `wouter` for lightweight client-side routing:
- `/` - Home page with all portfolio sections
- Fallback 404 page for unmatched routes

### Design Patterns

1. **Section-based layout**: Each major content area (Hero, About, Portfolio, Skills, Shop, Contact) is a separate component in `src/sections/`

2. **Intersection Observer**: Custom hook `useIntersectionObserver` triggers animations when sections scroll into view

3. **Form handling**: React Hook Form with Zod validation for the contact form

4. **Static data**: Portfolio projects, skills, and products defined in `src/lib/data.ts`

## External Dependencies

### UI Component Library
- **Radix UI**: Full suite of accessible, unstyled primitives (dialog, dropdown, tabs, toast, etc.)
- **shadcn/ui**: Pre-styled components built on Radix

### Animation
- **Framer Motion**: Page transitions and scroll animations
- **Embla Carousel**: Carousel/slider functionality

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation via `@hookform/resolvers`

### Deployment
- **Vercel**: Configured in `vercel.json` for static site deployment
- SPA routing handled via catch-all route to `index.html`

### Other
- **TanStack React Query**: Data fetching and caching
- **date-fns**: Date utilities
- **Lucide React**: Icon library
- **class-variance-authority + clsx + tailwind-merge**: Utility for conditional class composition