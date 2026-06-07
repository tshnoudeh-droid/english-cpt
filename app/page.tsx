import LandingSection from "@/components/LandingSection";
import SceneSection from "@/components/SceneSection";
import FullBleedSection from "@/components/FullBleedSection";
import PhotoTransition from "@/components/PhotoTransition";
import ColophonSection from "@/components/ColophonSection";
import AudioController from "@/components/AudioController";

export default function Home() {
  return (
    <>
    <AudioController />
    <main>
      {/* Section 0 — Landing */}
      <LandingSection />

      {/* Section 1 — The Student */}
      <SceneSection
        number="I."
        headline="The student"
        body="For a long time, the goal was the grade. The proof was a number at the top of a page. I was good at that game. I knew what the rubric wanted and I gave it exactly that. And I thought that was enough."
        layout="text-left"
        bgDark={true}
        mediaSide="photo"
        mediaFile="photo-desk.jpg"
        mediaLabel="PHOTO — desk lamp"
        hasFile={true}
      />

      {/* Transition Strip A */}
      <PhotoTransition
        imageFile="photo-hands.jpg"
        imageLabel="PHOTO — hands close-up"
        desktopHeight="280px"
        mobileHeight="200px"
        hasFile={false}
      />

      {/* Section 2 — The Moment */}
      <SceneSection
        number="II."
        headline="The moment"
        body="Then one day I built something nobody asked for. No rubric. No deadline. No teacher waiting at the end. Just me, the problem, and whether I could solve it."
        keyLine="That was the first time I understood what it means to actually want something."
        layout="text-right"
        bgDark={false}
        mediaSide="video"
        mediaFile="scene-2.mp4"
        mediaLabel="VIDEO 2 — close-up hands"
        hasFile={true}
      />

      {/* Transition Strip B */}
      <PhotoTransition
        imageFile="photo-hallway.jpg"
        imageLabel="PHOTO — school hallway"
        desktopHeight="70vh"
        mobileHeight="50vh"
        hasFile={false}
      />

      {/* Section 3 — The Proof */}
      <FullBleedSection
        imageFile="photo-build.jpg"
        imageLabel="PHOTO — built object"
        number="III."
        headline="The proof"
        body="That's when I understood what a journey actually is. Not moving from A to B. It's the first time something you made lifts off the ground — and you're the only one in the room who knows why it works."
        keyLine="That moment doesn't fit in a grade. It just sits there, real."
        hasFile={false}
      />

      {/* Section 4 — The Answer */}
      <SceneSection
        number="IV."
        headline="The answer"
        body="I'm not proving anything to anyone anymore. The work is the proof."
        finalLine="And the journey doesn't end — it just gets harder to put down."
        layout="text-left"
        bgDark={true}
        mediaSide="video"
        mediaFile="scene-4.mp4"
        mediaLabel="VIDEO 4 — wide horizon"
        hasFile={true}
      />

      {/* Transition Strip C */}
      <PhotoTransition
        imageFile="photo-sky.jpg"
        imageLabel="PHOTO — open sky"
        desktopHeight="50vh"
        mobileHeight="40vh"
        hasFile={false}
      />

      {/* Section 5 — Colophon */}
      <ColophonSection />
    </main>
    </>
  );
}
