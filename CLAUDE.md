# CLAUDE.md — Proof (CPT Multimedia Website)

## What this is
A static cinematic website for a Grade 10 AP English CPT. No auth, no database, no API routes. Pure Next.js App Router + Tailwind + TypeScript, deployed to Vercel.

## Read first
Always read `PRD.md` before writing any code. It contains the full spec: sections, components, design system, chunk order.

## Stack
- Next.js 16 App Router, TypeScript strict
- Tailwind CSS v4 (utility classes only — no custom plugins)
- Google Fonts via `next/font/google`: Playfair Display + DM Sans
- No external animation libs (no Framer Motion, no GSAP)
- No UI component libs (no shadcn, no Radix)
- No auth, no database

## Commands
```bash
npm run dev      # local dev server
npm run build    # production build — must pass before every commit
npm run lint     # ESLint check
```

## File structure
```
app/
  layout.tsx        — root layout, font injection, CSS vars
  page.tsx          — renders all 6 sections
  globals.css       — CSS variables, base reset, grain texture
components/
  LandingSection.tsx
  SceneSection.tsx
  ColophonSection.tsx
  VoiceoverButton.tsx
  VideoPanel.tsx
  GrainOverlay.tsx
public/
  video/              — scene-1.mp4 through scene-4.mp4 (added later)
  audio/              — scene-1.mp3 through scene-4.mp3 (added later)
```

## Design rules — NEVER deviate
- Colors: use CSS variables only (--cream, --warm-white, --ink, --ink-muted, --accent, --accent-light)
- Fonts: Playfair Display for display/headlines, DM Sans for body/UI
- No hardcoded hex values in component files — CSS vars only
- On-screen text is hardcoded in component JSX — not in a data file
- Video and audio files are optional — build with placeholders first

## Chunk discipline — CRITICAL
Complete chunks in PRD order. After each chunk:
1. `npm run build` — must pass
2. `git add` specific files `&& git commit -m "feat/chore: [message]"`
3. `git push origin main`
Never start the next chunk until the current one is committed and pushed.

## NEVER
- Install packages not in the current chunk's scope
- Use `any` in TypeScript
- Hardcode colors outside of globals.css
- Overwrite working code from a previous chunk without reading it first
- Skip the build check before committing
