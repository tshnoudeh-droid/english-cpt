import VideoPanel from "./VideoPanel";
import PhotoPanel from "./PhotoPanel";

export type SceneLayout = "text-left" | "text-right";

interface SceneSectionProps {
  number: string;
  headline: string;
  body: string;
  keyLine?: string;
  finalLine?: string;
  layout: SceneLayout;
  bgDark: boolean;
  mediaSide: "photo" | "video";
  mediaFile: string;
  mediaLabel: string;
  hasFile: boolean;
}

export default function SceneSection({
  number,
  headline,
  body,
  keyLine,
  finalLine,
  layout,
  bgDark,
  mediaSide,
  mediaFile,
  mediaLabel,
  hasFile,
}: SceneSectionProps) {
  const textBg = bgDark ? "var(--ink)" : "var(--warm-white)";
  const headlineColor = bgDark ? "var(--ink-light)" : "var(--ink)";
  const bodyColor = bgDark ? "#B8AFA0" : "var(--ink-muted)";

  const textPanel = (
    <div
      className="scene-text-panel"
      style={{
        width: "50%",
        background: textBg,
        padding: "60px 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
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
          fontSize: "clamp(36px, 4vw, 60px)",
          fontWeight: 400,
          color: headlineColor,
          marginBottom: "24px",
          marginTop: 0,
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
          color: bodyColor,
          margin: 0,
        }}
      >
        {body}
      </p>

      {keyLine && (
        <p
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontStyle: "italic",
            fontSize: "18px",
            color: "var(--accent)",
            marginTop: "24px",
            marginBottom: 0,
          }}
        >
          {keyLine}
        </p>
      )}

      {finalLine && (
        <p
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            color: "var(--accent)",
            marginTop: "24px",
            marginBottom: 0,
          }}
        >
          {finalLine}
        </p>
      )}
    </div>
  );

  const mediaPanel = (
    <div
      className="scene-media-panel"
      style={{ width: "50%", position: "relative", overflow: "hidden" }}
    >
      {mediaSide === "video" ? (
        <VideoPanel
          videoFile={mediaFile}
          label={mediaLabel}
          hasFile={hasFile}
        />
      ) : (
        <PhotoPanel
          imageFile={mediaFile}
          label={mediaLabel}
          hasFile={hasFile}
        />
      )}
    </div>
  );

  return (
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {layout === "text-left" ? (
        <>
          {textPanel}
          {mediaPanel}
        </>
      ) : (
        <>
          {mediaPanel}
          {textPanel}
        </>
      )}
    </section>
  );
}
