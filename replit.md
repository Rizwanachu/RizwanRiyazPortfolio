# Rizwan Riyaz Portfolio

## Overview

A personal portfolio website for Rizwan Riyaz showcasing web design, digital marketing, and content creation work. Built as a full-stack application with a React frontend and Express backend, featuring a contact form with email notifications, resume download functionality, and a modern dark-themed UI with smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for scroll-based and interactive animations
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Pattern**: RESTful endpoints under `/api/*`
- **Development**: Hot module replacement via Vite middleware integration

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Development Storage**: In-memory storage class (`MemStorage`) for local development
- **Database Config**: Requires `DATABASE_URL` environment variable for production

### Key Design Patterns
- **Monorepo Structure**: Client code in `/client`, server in `/server`, shared types in `/shared`
- **Path Aliases**: `@/*` maps to client source, `@shared/*` maps to shared modules
- **Component Organization**: UI primitives in `/components/ui`, page sections in `/sections`
- **Form Validation**: Zod schemas shared between frontend and backend for consistent validation

### Deployment Options
- **Primary**: Replit with Express serving static files in production
- **Alternative**: Netlify deployment supported with serverless functions for contact form

## External Dependencies

### Email Service
- **Library**: Nodemailer
- **Configuration**: Gmail SMTP (requires `EMAIL_USER` and `EMAIL_PASS` environment variables)
- **Purpose**: Sends contact form submissions to owner's email

### Database
- **Provider**: Neon Database (PostgreSQL serverless)
- **Driver**: `@neondatabase/serverless`
- **Session Store**: `connect-pg-simple` for session management

### CDN Resources
- **Fonts**: Google Fonts (Montserrat, Poppins)
- **Icons**: Font Awesome 6.4.0

### UI Component Dependencies
- Full Radix UI primitive library for accessible components
- Embla Carousel for image carousels
- Vaul for drawer components
- cmdk for command palette functionality
- react-day-picker for calendar components