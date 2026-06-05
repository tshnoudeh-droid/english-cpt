"use client";

import { useEffect, useRef } from "react";

interface VideoPanelProps {
  videoFile: string;
  label: string;
  hasFile: boolean;
}

export default function VideoPanel({ videoFile, label, hasFile }: VideoPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!hasFile) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasFile]);

  if (!hasFile) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1C1A17",
          border: "1px dashed rgba(193,126,58,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(193,126,58,0.6)",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={`/video/${videoFile}`}
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );
}
