import LandingSection from "@/components/LandingSection";
import SceneSection from "@/components/SceneSection";

export default function Home() {
  return (
    <main>
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
        hasFile={false}
      />
    </main>
  );
}
