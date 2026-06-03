# PRD — "Proof" · CPT Part 3 Multimedia Website

## Project overview

A cinematic, single-page scrollable website that serves as a multimedia work for a Grade 10 AP English CPT on the theme "The Journey: Knowing Yourself, Knowing Others." The piece is titled **Proof** and tells a personal story about the shift from being a student who was good at school, to becoming a builder who builds whether or not anyone is watching.

**Live URL target:** `proof.tawficshnoudeh.com` (subdomain on existing Vercel account)
**Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS · Vercel
**No auth. No database. No external APIs.** Static/client-side only.

---

## Controlling idea

> "The journey of proving yourself to yourself, not others."

This is the thesis. Every design decision, every visual, every word of on-screen text must serve this idea.

---

## Aesthetic direction

**Warm and personal — muted tones, feels handcrafted.**

- **Typography:** Two fonts only. Display: `Playfair Display` (serif, editorial weight). Body/UI: `DM Sans` (clean, warm, not sterile). Import from Google Fonts.
- **Color palette (CSS variables):**
  ```
  --cream: #F5F0E8
  --warm-white: #FAF8F4
  --ink: #1C1A17
  --ink-muted: #5C5549
  --accent: #C17E3A
  --accent-light: #E8D5B0
  --scene-divider: rgba(92, 85, 73, 0.15)
  ```
- **Texture:** Subtle grain overlay on the background (CSS noise filter or SVG feTurbulence). Not heavy.
- **Motion:** Slow, intentional. Fade-ins on scroll. No bouncing, no spring physics. CSS `transition` and `IntersectionObserver` only.
- **Video:** Each scene has a full-bleed video panel. Videos are muted, autoplay on scroll entry, loop. Voiceover plays separately via button.
- **No navbar. No footer links. No external navigation.** This is a sealed experience.

---

## Site structure — 6 sections (linear scroll)

### Section 0: Landing / Title
- Full viewport height
- Background: `--cream` with grain texture
- Centered: title "Proof" in Playfair Display, large (clamp 64px–120px)
- Subtitle: "A journey" in DM Sans, small caps, muted
- Scroll indicator: thin animated line pulsing downward
- No video in this section

### Section 1: The Student
- Full viewport height
- Left half: on-screen text panel (dark bg `--ink`, light text)
  - Chapter label: "I." in accent color
  - Headline: "The student"
  - Body copy: *"For a long time, the goal was the grade. The proof was a number at the top of a page."*
- Right half: video clip 1 autoplay — muted, looping
- Voiceover play button: small pill button bottom-center of text panel

### Section 2: The Moment
- Full viewport height, reversed layout (video left, text right)
- Text panel: warm bg `--warm-white`
  - Chapter label: "II."
  - Headline: "The moment"
  - Body: *"Then one day I built something nobody asked for. No rubric. No deadline. No teacher at the end."*
- Video clip 2
- Voiceover button same style

### Section 3: The Proof
- Full viewport height
- Full-bleed video (video fills entire section, text overlaid with semi-transparent dark overlay)
  - Chapter label top-left: "III." in accent color
  - Headline centered: "The proof"
  - Key line bottom-center: *"That's when I understood what a journey actually is."*
- Video clip 3
- Voiceover button

### Section 4: The Answer
- Full viewport height, same layout as Section 1
- Text panel `--ink`:
  - Chapter label: "IV."
  - Headline: "The answer"
  - Body: *"I'm not proving anything to anyone anymore. The work is the proof."*
  - Final line (larger, accent color): *"And the journey doesn't end — it just gets harder to put down."*
- Video clip 4
- Voiceover button

### Section 5: Colophon
- Minimal footer section, `--cream` bg
- Small centered text: "Proof — CPT Part 3, Journeys in Contemporary Fiction · Grade 10 · 2025"
- One line: "Inspired by the journey of Christopher Boone."

---

## Voiceover system

Each section has a **single play button** (pill shape, `--accent` border, transparent bg). Clicking plays the MP3. Only one scene's audio plays at a time — clicking new one pauses previous.

Audio files in `/public/audio/`: `scene-1.mp3` through `scene-4.mp3`

Build with placeholder logic first. Audio files added later.

---

## Video system

Each video: `<video>` element: `autoplay muted loop playsInline`. Autoplay when section scrolls into view (IntersectionObserver, 40% threshold). Pause when scrolled out.

Video files in `/public/video/`: `scene-1.mp4` through `scene-4.mp4`

Build with placeholder colored divs first.

---

## Component tree

```
app/
  layout.tsx          — root layout, Google Fonts import, CSS variables, grain texture
  page.tsx            — renders all 6 sections in order
  globals.css         — CSS variables, base reset, grain texture, scrollbar style

components/
  LandingSection.tsx  — Section 0
  SceneSection.tsx    — Reusable component for Sections 1–4
    props: sceneNumber, label, headline, body, keyLine?, layout, videoFile, audioFile
  ColophonSection.tsx — Section 5
  VoiceoverButton.tsx — Play/pause pill button with audio state
  VideoPanel.tsx      — Video element with IntersectionObserver autoplay logic
  GrainOverlay.tsx    — Fixed-position grain texture layer
```

---

## Build chunks — execution order

### Chunk 1 — Project foundation
- CLAUDE.md, PRD.md, architecture.md, CSS variables, grain texture CSS, Google Fonts, public dirs
- Commit: `chore: project foundation, fonts, CSS variables, grain texture`

### Chunk 2 — Layout shell + landing section
- layout.tsx with root styles + font classes, LandingSection.tsx, render in page.tsx
- Commit: `feat: landing section with title and scroll indicator`

### Chunk 3 — SceneSection component + VideoPanel
- VideoPanel.tsx (placeholder divs + IntersectionObserver), SceneSection.tsx (all layout variants), all 4 scenes in page.tsx
- Commit: `feat: SceneSection and VideoPanel components`

### Chunk 4 — Voiceover system
- VoiceoverButton.tsx, audio state in page.tsx (useState + useRef, mutual exclusion)
- Commit: `feat: voiceover button system with mutual exclusion`

### Chunk 5 — Scroll animations
- IntersectionObserver fade-in on text panels, scroll-snap CSS, smooth scrolling
- Commit: `feat: scroll snap and fade-in animations`

### Chunk 6 — Colophon + polish pass
- ColophonSection.tsx, GrainOverlay.tsx, mobile layout (< 768px single-column), polish
- Commit: `feat: colophon, grain overlay, mobile layout, polish`

### Chunk 7 — Vercel deployment
- Build verification, push, deploy, custom domain
- Commit: `chore: production deployment verified`

---

## On-screen text spec

Chapter labels: `DM Sans; 12px; letter-spacing: 0.15em; uppercase; color: var(--accent)`
Headlines: `Playfair Display; clamp(32px, 5vw, 64px); font-weight: 400`
Body copy: `DM Sans; clamp(16px, 2vw, 20px); line-height: 1.7; color: --ink-muted`
Key lines: `Playfair Display; italic; color: var(--accent)`
