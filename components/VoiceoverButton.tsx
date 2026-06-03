"use client";

interface VoiceoverButtonProps {
  isPlaying: boolean;
  onPlay: () => void;
}

export default function VoiceoverButton({ isPlaying, onPlay }: VoiceoverButtonProps) {
  return (
    <button
      onClick={onPlay}
      aria-label={isPlaying ? "Pause voiceover" : "Play voiceover"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.4rem 1rem",
        border: "1px solid var(--accent)",
        borderRadius: "999px",
        background: "transparent",
        color: "var(--accent)",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        fontSize: "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "background 0.2s ease, color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--cream)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
      }}
    >
      {/* Play icon */}
      {!isPlaying && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
          <polygon points="2,1 9,5 2,9" />
        </svg>
      )}
      {/* Pause icon */}
      {isPlaying && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
          <rect x="1.5" y="1" width="3" height="8" rx="1" />
          <rect x="5.5" y="1" width="3" height="8" rx="1" />
        </svg>
      )}
      {isPlaying ? "Pause" : "Play"}
    </button>
  );
}
