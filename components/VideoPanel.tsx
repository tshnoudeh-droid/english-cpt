"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPanelProps {
  videoFile: string;
  sceneNumber: number;
}

export default function VideoPanel({ videoFile, sceneNumber }: VideoPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video || !videoReady) return;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [videoReady]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {/* Placeholder — visible until real video loads */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--ink)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: videoReady ? 0 : 1,
          transition: "opacity 0.6s ease",
          pointerEvents: "none",
        }}
      >
        <span
          className="chapter-label"
          style={{ opacity: 0.3 }}
        >
          Scene {sceneNumber}
        </span>
      </div>

      <video
        ref={videoRef}
        src={`/video/${videoFile}`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: videoReady ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      />
    </div>
  );
}
