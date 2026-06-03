import VideoPanel from "./VideoPanel";

export type SceneLayout = "text-left" | "text-right" | "fullbleed";

interface SceneSectionProps {
  sceneNumber: 1 | 2 | 3 | 4;
  label: string;
  headline: string;
  body?: string;
  keyLine?: string;
  layout: SceneLayout;
  videoFile: string;
  /** Slot for VoiceoverButton — wired in Chunk 4 */
  voiceoverSlot?: React.ReactNode;
}

export default function SceneSection({
  sceneNumber,
  label,
  headline,
  body,
  keyLine,
  layout,
  videoFile,
  voiceoverSlot,
}: SceneSectionProps) {
  if (layout === "fullbleed") {
    return (
      <section
        className="snap-section"
        style={{ position: "relative", height: "100dvh", overflow: "hidden" }}
      >
        {/* Video layer */}
        <div style={{ position: "absolute", inset: 0 }}>
          <VideoPanel videoFile={videoFile} sceneNumber={sceneNumber} />
        </div>

        {/* Dark overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(28, 26, 23, 0.62)",
          }}
        />

        {/* Text layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="chapter-label">{label}</span>

          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              className="headline"
              style={{ color: "var(--warm-white)", textAlign: "center" }}
            >
              {headline}
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {keyLine && (
              <p
                className="key-line body-copy"
                style={{ textAlign: "center", color: "var(--accent)" }}
              >
                {keyLine}
              </p>
            )}
            {voiceoverSlot}
          </div>
        </div>
      </section>
    );
  }

  const isDark = layout === "text-left";
  const textBg = isDark ? "var(--ink)" : "var(--warm-white)";
  const headlineColor = isDark ? "var(--warm-white)" : "var(--ink)";
  const bodyColor = isDark ? "var(--accent-light)" : "var(--ink-muted)";

  const textPanel = (
    <div
      style={{
        width: "50%",
        backgroundColor: textBg,
        padding: "clamp(2rem, 5vw, 4rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.25rem",
        position: "relative",
      }}
    >
      <span className="chapter-label">{label}</span>

      <h2 className="headline" style={{ color: headlineColor }}>
        {headline}
      </h2>

      {body && (
        <p className="body-copy" style={{ color: bodyColor }}>
          {body}
        </p>
      )}

      {keyLine && (
        <p className="key-line body-copy">{keyLine}</p>
      )}

      {voiceoverSlot && (
        <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
          {voiceoverSlot}
        </div>
      )}
    </div>
  );

  const videoPanel = (
    <div style={{ width: "50%", position: "relative" }}>
      <VideoPanel videoFile={videoFile} sceneNumber={sceneNumber} />
    </div>
  );

  return (
    <section
      className="snap-section"
      style={{ display: "flex", height: "100dvh", overflow: "hidden" }}
    >
      {layout === "text-left" ? (
        <>
          {textPanel}
          {videoPanel}
        </>
      ) : (
        <>
          {videoPanel}
          {textPanel}
        </>
      )}
    </section>
  );
}
