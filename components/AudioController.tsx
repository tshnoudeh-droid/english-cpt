"use client";

import { useEffect, useRef, useState } from "react";

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
  const voiceoverRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);
  const [isPlayingVO, setIsPlayingVO] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const music = musicRef.current;
    if (music) music.volume = 0.2;
  }, []);

  function handleVoiceover() {
    const audio = voiceoverRef.current;
    if (!audio) return;
    if (isPlayingVO) {
      audio.pause();
      setIsPlayingVO(false);
    } else {
      audio.play().then(() => setIsPlayingVO(true)).catch(() => {
        console.log("Voiceover audio not yet available.");
      });
    }
  }

  function handleMusic() {
    const audio = musicRef.current;
    if (!audio) return;
    if (isPlayingMusic) {
      audio.pause();
      setIsPlayingMusic(false);
    } else {
      audio.play().then(() => setIsPlayingMusic(true)).catch(() => {
        console.log("Music audio not yet available.");
      });
    }
  }

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
      {/* Music button */}
      <button
        onClick={handleMusic}
        style={pillStyle}
        onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px var(--accent-light)"; }}
        onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
        aria-label={isPlayingMusic ? "Pause music" : "Play music"}
      >
        {isPlayingMusic ? "⏸ Music" : "♪ Music"}
      </button>

      {/* Voiceover button */}
      <button
        onClick={handleVoiceover}
        style={pillStyle}
        onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px var(--accent-light)"; }}
        onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
        aria-label={isPlayingVO ? "Pause narration" : "Play narration"}
      >
        {isPlayingVO ? "⏸ Narration" : "▶ Narration"}
      </button>

      {/* Hidden audio elements */}
      <audio
        ref={voiceoverRef}
        src="/audio/voiceover.m4a"
        onEnded={() => setIsPlayingVO(false)}
        style={{ display: "none" }}
      />
      <audio
        ref={musicRef}
        src="/audio/music.mp3"
        loop
        style={{ display: "none" }}
      />
    </div>
  );
}
