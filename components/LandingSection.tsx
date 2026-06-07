"use client";

import { useAudio } from "@/contexts/AudioContext";

const pillStyle: React.CSSProperties = {
  border: "1px solid var(--accent)",
  background: "transparent",
  borderRadius: "999px",
  padding: "10px 20px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
  fontSize: "11px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  color: "var(--accent)",
  outline: "none",
};

export default function LandingSection() {
  const { isPlayingVO, isPlayingMusic, toggleVO, toggleMusic } = useAudio();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(72px, 10vw, 130px)",
            fontWeight: 400,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Proof
        </h1>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            marginTop: "16px",
            marginBottom: 0,
          }}
        >
          A journey inward.
        </p>

        {/* Audio toggles */}
        <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
          <button
            onClick={toggleMusic}
            style={pillStyle}
            onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px var(--accent-light)"; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            aria-label={isPlayingMusic ? "Pause music" : "Play music"}
          >
            {isPlayingMusic ? "⏸ Music" : "♪ Music"}
          </button>
          <button
            onClick={toggleVO}
            style={pillStyle}
            onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px var(--accent-light)"; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            aria-label={isPlayingVO ? "Pause narration" : "Play narration"}
          >
            {isPlayingVO ? "⏸ Narration" : "▶ Narration"}
          </button>
        </div>

        <div
          aria-hidden="true"
          style={{
            width: "1px",
            height: "40px",
            background: "var(--accent)",
            marginTop: "32px",
            animation: "pulse-line 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-line {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
