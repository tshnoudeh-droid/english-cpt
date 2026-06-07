import Image from "next/image";

interface BuildCard {
  name: string;
  description: string;
  imageFile: string;
  hasFile: boolean;
}

const builds: BuildCard[] = [
  {
    name: "FusynCAD",
    description: "Built for engineers.",
    imageFile: "project-fusyncad.jpg",
    hasFile: false,
  },
  {
    name: "Intrinsic",
    description: "What's a stock actually worth?",
    imageFile: "project-intrinsic.jpg",
    hasFile: false,
  },
  {
    name: "Forge Hyperloop",
    description: "Plan your trip.",
    imageFile: "project-hyperloop.jpg",
    hasFile: false,
  },
  {
    name: "Stackd",
    description: "See what your money can become.",
    imageFile: "project-stackd.jpg",
    hasFile: true,
  },
];

export default function BuildsSection() {
  return (
    <section
      style={{
        background: "var(--warm-white)",
        padding: "80px 48px",
        boxSizing: "border-box",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontSize: "11px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "48px",
          marginTop: 0,
          textAlign: "center",
        }}
      >
        Some of what I built.
      </p>

      {/* 2×2 grid */}
      <div
        className="builds-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {builds.map((build) => (
          <div
            key={build.name}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--scene-divider, rgba(92,85,73,0.12))",
              background: "var(--cream)",
            }}
          >
            {/* Screenshot */}
            <div style={{ position: "relative", height: "220px", background: "#E8D5B0" }}>
              {build.hasFile ? (
                <Image
                  src={`/images/${build.imageFile}`}
                  alt={build.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ink-muted)",
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "1px dashed rgba(92,85,73,0.4)",
                  }}
                >
                  {build.name}
                </div>
              )}
            </div>

            {/* Caption */}
            <div style={{ padding: "16px 20px" }}>
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "var(--ink)",
                  margin: "0 0 4px",
                }}
              >
                {build.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "13px",
                  color: "var(--ink-muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {build.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .builds-grid {
            grid-template-columns: 1fr !important;
          }
          section:has(.builds-grid) {
            padding: 60px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
