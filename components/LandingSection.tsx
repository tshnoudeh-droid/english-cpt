"use client";

export default function LandingSection() {

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
