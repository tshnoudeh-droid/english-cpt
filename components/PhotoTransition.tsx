import PhotoPanel from "./PhotoPanel";

interface PhotoTransitionProps {
  imageFile: string;
  imageLabel: string;
  desktopHeight: string;
  mobileHeight: string;
  hasFile: boolean;
}

export default function PhotoTransition({
  imageFile,
  imageLabel,
  desktopHeight,
  mobileHeight,
  hasFile,
}: PhotoTransitionProps) {
  return (
    <div
      className="photo-transition"
      style={{
        position: "relative",
        width: "100%",
        height: desktopHeight,
        overflow: "hidden",
        /* mobileHeight applied via CSS class below */
      }}
    >
      <PhotoPanel imageFile={imageFile} label={imageLabel} hasFile={hasFile} />

      <style>{`
        @media (max-width: 767px) {
          .photo-transition {
            height: ${mobileHeight} !important;
          }
        }
      `}</style>
    </div>
  );
}
