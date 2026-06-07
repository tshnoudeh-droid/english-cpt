"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

interface AudioContextType {
  isPlayingVO: boolean;
  isPlayingMusic: boolean;
  toggleVO: () => void;
  toggleMusic: () => void;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const voiceoverRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);
  const [isPlayingVO, setIsPlayingVO] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const music = musicRef.current;
    if (music) music.volume = 0.2;
  }, []);

  function toggleVO() {
    const audio = voiceoverRef.current;
    if (!audio) return;
    if (isPlayingVO) {
      audio.pause();
      setIsPlayingVO(false);
    } else {
      audio.play().then(() => setIsPlayingVO(true)).catch(() => {});
    }
  }

  function toggleMusic() {
    const audio = musicRef.current;
    if (!audio) return;
    if (isPlayingMusic) {
      audio.pause();
      setIsPlayingMusic(false);
    } else {
      audio.play().then(() => setIsPlayingMusic(true)).catch(() => {});
    }
  }

  return (
    <AudioCtx.Provider value={{ isPlayingVO, isPlayingMusic, toggleVO, toggleMusic }}>
      {children}
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
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
