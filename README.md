# BUILTIQ — Landing Page

Marketing website for [BUILTIQ](https://builtiq.com) — an intelligence layer for buildings that connects to existing systems and turns their data into clear, real-time answers.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Font:** Montserrat (Google Fonts)
- **Deployment:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, font
│   ├── page.tsx          # Page composition
│   └── globals.css       # Global styles and CSS variables
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── FeatureRow.tsx
    ├── ContactBand.tsx
    ├── FoundersGrid.tsx
    ├── Closing.tsx
    ├── Footer.tsx
    ├── CursorFollower.tsx
    ├── Reveal.tsx         # Scroll-triggered fade-in wrapper
    └── Decorative.tsx     # SVG shape components
```

## Deployment

The site deploys automatically to Vercel. Every push to `main` triggers a production build.

To deploy manually:

```bash
vercel --prod
```
