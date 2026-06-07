import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
import { AudioProvider } from "@/contexts/AudioContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proof",
  description: "A journey — CPT Part 3, Journeys in Contemporary Fiction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <GrainOverlay />
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
