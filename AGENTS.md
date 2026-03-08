# Agents Reference

This document provides context for AI agents working on this codebase.

## Project Overview

Personal portfolio website for a Sr. UI Designer showcasing case studies, experience, and interests.

## Persona

You are a Sr. Design Engineer with over 15 years of experience specializing in product design and development.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with `@theme` directive for custom properties
- **Animations:** Framer Motion
- **Content:** MDX for rich content pages
- **Package Manager:** npm

## Project Structure

```
/
├── mdx-components.tsx  # MDX component mappings
├── mdx.d.ts            # MDX TypeScript declarations
├── next.config.mjs     # Next.js + MDX config
└── app/
    ├── (routes)/           # Route groups
    │   ├── case-studies/   # Case study pages (MDX content)
    │   ├── cerveza/        # Beer hobby page
    │   ├── experience/     # Work experience page
    │   └── musica/         # Music hobby page
    ├── components/
    │   ├── carousel/       # Embla carousel wrapper
    │   ├── case-study/     # Case study layout and components
    │   ├── experience/     # Timeline and employment cards
    │   ├── grid/           # Container, Row, Column system
    │   ├── motion/         # Framer Motion wrappers
    │   ├── navigation/     # Nav and breadcrumb
    │   └── typography/     # Header, Paragraph, Lists
    ├── config/             # Site metadata
    ├── styles/             # Global CSS with Tailwind theme
    ├── layout.tsx          # Root layout with fonts
    └── page.tsx            # Home page
```

## Design System

### Colors (defined in globals.css)
- `brown`: #3F2016 (primary text)
- `tan`: #F8EFE7 (backgrounds)
- `orange`: #F79425 (accent)
- `red`: #D54935 (accent)
- `grey`: #EFEFEF (neutral)

### Typography
- **Headings:** Orelega One (`font-orelega`)
- **Body:** Signika Negative (`font-sans`)
- Use the `Header` component with `level` prop (1-6)
- Use `Paragraph` component for body text

### Grid System
Use the component-based grid:
```tsx
<Container>
  <Row>
    <Column xl={6}>Content</Column>
    <Column xl={6}>Content</Column>
  </Row>
</Container>
```

### Animations
- Use `ContentTransition` for page content fade-in
- Use `PageTransition` for route transitions
- Framer Motion for custom animations

## Conventions

### File Organization
- Components in `app/components/[category]/`
- Each component folder has an `index.ts` barrel export
- Page routes use `page.tsx` in route folders

### Styling
- Tailwind classes with `twMerge` for class composition
- Custom theme tokens via `@theme` in globals.css
- No inline styles; use Tailwind utilities

### Components
- Functional components with TypeScript interfaces
- `'use client'` directive only when needed (hooks, interactivity)
- Props interfaces defined above component

### Path Aliases
- `@/components/*` maps to `app/components/*`
- `@/config/*` maps to `app/config/*`

## Key Patterns

### Case Studies
Case studies are authored in MDX (`content.mdx`) with a thin `page.tsx` wrapper.

**File structure per case study:**
```
case-studies/[slug]/
├── page.tsx      # Imports MDX, provides metadata and layout
└── content.mdx   # Case study content with components
```

**MDX content pattern:**
```mdx
import { Section, Subsection } from '@/components/case-study'
import { List, Paragraph } from '@/components/typography'

export const metadata = {
  title: "Case Study Title",
  subtitle: "Description",
  date: "2024-05-01",
  author: "Juan D. Bolaños",
}

<Section title="The Challenge">
Content here...
</Section>
```

**Available components in MDX:**
- `Section` - auto-registers to table of contents
- `Subsection` - nested h4 sections
- `List` - with `items` prop or `openingStatement`
- `Table` - with `columns` and `data` props
- `Paragraph` - styled body text (also auto-mapped from `<p>`)

**Component mappings (`mdx-components.tsx`):**
- `p` → `Paragraph` component
- Custom components passed through for explicit use

### Experience Timeline
Employment data stored in `app/components/experience/data.ts` as typed objects.

## Commands

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
```
