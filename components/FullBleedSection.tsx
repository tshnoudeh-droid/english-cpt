"use client";

import PhotoPanel from "./PhotoPanel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FullBleedSectionProps {
  imageFile: string;
  imageLabel: string;
  number: string;
  headline: string;
  body: string;
  keyLine: string;
  hasFile: boolean;
}

export default function FullBleedSection({
  imageFile,
  imageLabel,
  number,
  headline,
  body,
  keyLine,
  hasFile,
}: FullBleedSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <PhotoPanel imageFile={imageFile} label={imageLabel} hasFile={hasFile} />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(28,26,23,0.62)",
          zIndex: 10,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 24px",
        }}
      >
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "16px",
            }}
          >
            {number}
          </span>

          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 400,
              color: "white",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {headline}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "560px",
              margin: "24px auto 0",
            }}
          >
            {body}
          </p>

          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              fontSize: "20px",
              color: "var(--accent)",
              marginTop: "28px",
              marginBottom: 0,
            }}
          >
            {keyLine}
          </p>
        </div>
      </div>
    </section>
  );
}
