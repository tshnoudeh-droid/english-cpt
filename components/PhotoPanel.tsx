import Image from "next/image";

interface PhotoPanelProps {
  imageFile: string;
  label: string;
  hasFile: boolean;
}

export default function PhotoPanel({ imageFile, label, hasFile }: PhotoPanelProps) {
  if (!hasFile) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#E8D5B0",
          border: "1px dashed rgba(92,85,73,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#5C5549",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </div>
    );
  }

  if (imageFile.endsWith(".gif")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/images/${imageFile}`}
        alt={label}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    );
  }

  return (
    <Image
      src={`/images/${imageFile}`}
      alt={label}
      fill
      style={{ objectFit: "cover" }}
    />
  );
}
