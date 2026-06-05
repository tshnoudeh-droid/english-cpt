"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ColophonSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="colophon-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "28px",
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: "12px",
            marginTop: 0,
          }}
        >
          Proof
        </p>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "13px",
            color: "var(--ink-muted)",
            margin: "0 0 20px",
          }}
        >
          CPT Part 3 · Journeys in Contemporary Fiction · Grade 10 · 2025
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--accent-light)",
            width: "40px",
            margin: "0 auto 20px",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "13px",
            fontStyle: "italic",
            color: "var(--ink-muted)",
            margin: 0,
          }}
        >
          Inspired by the journey of Christopher Boone.
        </p>
      </div>
    </section>
  );
}
