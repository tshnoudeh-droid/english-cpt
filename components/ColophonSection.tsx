export default function ColophonSection() {
  return (
    <section
      className="snap-section"
      style={{
        minHeight: "40dvh",
        backgroundColor: "var(--cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          className="font-body"
          style={{
            fontSize: "13px",
            color: "var(--ink-muted)",
            letterSpacing: "0.06em",
            lineHeight: 1.9,
          }}
        >
          Proof — CPT Part 3, Journeys in Contemporary Fiction · Grade 10 · 2025
        </p>
        <p
          className="font-body"
          style={{
            fontSize: "13px",
            color: "var(--ink-muted)",
            opacity: 0.6,
            letterSpacing: "0.04em",
            marginTop: "0.5rem",
          }}
        >
          Inspired by the journey of Christopher Boone.
        </p>
      </div>
    </section>
  );
}
