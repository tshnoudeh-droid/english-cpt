export default function LandingSection() {
  return (
    <section
      className="snap-section"
      style={{
        position: "relative",
        height: "100dvh",
        backgroundColor: "var(--cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(64px, 12vw, 120px)",
            fontWeight: 400,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: "1.25rem",
          }}
        >
          Proof
        </h1>

        <p
          className="font-body"
          style={{
            fontSize: "13px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontVariantCaps: "small-caps",
            color: "var(--ink-muted)",
          }}
        >
          A journey
        </p>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-indicator__line" />
        <div className="scroll-indicator__dot" />
      </div>
    </section>
  );
}
