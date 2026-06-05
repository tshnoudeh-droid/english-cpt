# CLAUDE.md — Proof (CPT Multimedia Website)

## What this is
Static cinematic single-page website. Grade 10 AP English CPT.
No auth. No database. No API routes. Static only.

## Stack
- Next.js 16 App Router, TypeScript strict mode, no `any`
- Tailwind CSS (utility classes)
- Google Fonts via `next/font/google` — NEVER CDN
  - Playfair Display: weights 400 and 400 italic only
  - DM Sans: weights 400 and 500 only
- No Framer Motion, no GSAP, no animation libraries
- No shadcn, no Radix, no UI component libraries

## Commands
```bash
npm run dev     # local dev
npm run build   # must pass before every commit — zero errors
npm run lint    # ESLint
```

## CSS variables — ALWAYS use these, NEVER hardcode hex elsewhere
```
--cream: #F5F0E8
--warm-white: #FAF8F4
--ink: #1C1A17
--ink-muted: #5C5549
--ink-light: #EAE4D8
--accent: #C17E3A
--accent-light: #E8D5B0
```

## Component tree
```
app/layout.tsx              — root layout, fonts, CSS vars on body
app/page.tsx                — all sections + AudioController + GrainOverlay
app/globals.css             — CSS variables, base reset only
components/LandingSection.tsx
components/SceneSection.tsx — Sections 1, 2, 4
components/FullBleedSection.tsx — Section 3
components/PhotoTransition.tsx  — strips A, B, C
components/ColophonSection.tsx
components/VideoPanel.tsx   — hasFile boolean prop
components/PhotoPanel.tsx   — hasFile boolean prop
components/AudioController.tsx
components/GrainOverlay.tsx
hooks/useScrollReveal.ts
public/video/               — scene-2.mp4, scene-4.mp4
public/images/              — 5 photo files
public/audio/               — voiceover.mp3, music.mp3
```

## Media slots
All `hasFile={false}` until Chunk 9. Flip to `hasFile={true}` only when files are confirmed present.

## Chunk discipline — CRITICAL
One chunk at a time. After each:
1. `npm run build` — must pass
2. `git add` specific files, commit, push
Never start next chunk until current is committed and pushed.

## NEVER
- Hardcode hex values outside globals.css
- Use TypeScript `any`
- Install packages outside current chunk scope
- Overwrite working chunk code without reading it first
- Use animation libraries
- Use UI component libraries
