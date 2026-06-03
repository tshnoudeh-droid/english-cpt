# Architecture — Proof

## System overview

Static Next.js 16 App Router site. No server-side logic, no database, no auth. All rendering is client-side. Deployed to Vercel as a static export (or default Next.js SSG).

## Data flow

```
page.tsx
  ├── audioState (useState) — tracks activeScene (null | 1–4)
  ├── audioRefs (useRef[]) — one HTMLAudioElement ref per scene
  │
  ├── LandingSection       — no state, pure display
  ├── SceneSection × 4     — receives audioFile, videoFile, layout, text props
  │     ├── VideoPanel     — owns IntersectionObserver for autoplay/pause
  │     └── VoiceoverButton— receives isPlaying, onPlay (lifted to page.tsx)
  └── ColophonSection      — no state, pure display
```

## State management

All audio state lives in `page.tsx` (single source of truth):
- `activeScene: number | null` — which scene's audio is playing
- `audioRefs: React.RefObject<HTMLAudioElement | null>[]` — direct DOM refs, one per scene
- `handlePlay(scene: number)` — pauses all, plays selected, sets activeScene

No global state store needed. Props drill is shallow (one level: page → SceneSection → VoiceoverButton).

## Component contracts

### SceneSection props
```ts
interface SceneSectionProps {
  sceneNumber: 1 | 2 | 3 | 4
  label: string           // "I." | "II." | "III." | "IV."
  headline: string
  body: string
  keyLine?: string        // italic accent line, Section 3 & 4
  layout: 'text-left' | 'text-right' | 'fullbleed'
  videoFile: string       // e.g. "scene-1.mp4" — VideoPanel checks existence
  audioFile: string       // e.g. "scene-1.mp3"
  isPlaying: boolean
  onPlay: () => void
}
```

### VideoPanel props
```ts
interface VideoPanelProps {
  videoFile: string       // filename in /public/video/
  sceneNumber: number     // used for placeholder label
}
```

### VoiceoverButton props
```ts
interface VoiceoverButtonProps {
  isPlaying: boolean
  onPlay: () => void
}
```

## Video autoplay strategy

IntersectionObserver on each VideoPanel:
- threshold: 0.4 (40% visible)
- Enter view → `video.play()` (if real file) or noop (placeholder)
- Leave view → `video.pause()`
- Placeholder: colored div (`background: var(--ink)`) with scene number

## Audio mutual exclusion

`handlePlay(scene)` in page.tsx:
1. Pause all audio refs
2. If `activeScene === scene` → set activeScene null (toggle off)
3. Else → play `audioRefs[scene]`, set activeScene to scene

## Scroll behavior

CSS on `html`: `scroll-behavior: smooth`
CSS on page wrapper: `scroll-snap-type: y mandatory`
CSS on each section: `scroll-snap-align: start`

Fade-in: IntersectionObserver on text panels → adds `.visible` class → CSS transition `opacity 0 → 1, translateY 20px → 0`

## File outputs

```
/public/video/scene-1.mp4   (placeholder div until file exists)
/public/video/scene-2.mp4
/public/video/scene-3.mp4
/public/video/scene-4.mp4
/public/audio/scene-1.mp3   (button shows play icon, noop until file exists)
/public/audio/scene-2.mp3
/public/audio/scene-3.mp3
/public/audio/scene-4.mp3
```

## Deployment

- Vercel (default Next.js build, no `output: 'export'` needed)
- Custom domain: `proof.tawficshnoudeh.com` → CNAME to `cname.vercel-dns.com`
- No env vars required
