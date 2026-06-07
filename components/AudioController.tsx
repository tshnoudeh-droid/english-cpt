"use client";

import { useAudio } from "@/contexts/AudioContext";

const pillStyle: React.CSSProperties = {
  border: "1px solid var(--accent)",
  background: "rgba(28,26,23,0.75)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  borderRadius: "999px",
  padding: "10px 18px",
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

export default function AudioController() {
  const { isPlayingVO, isPlayingMusic, toggleVO, toggleMusic } = useAudio();

  return (
    <div
      className="audio-controller"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        zIndex: 50,
      }}
    >
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
  );
}
