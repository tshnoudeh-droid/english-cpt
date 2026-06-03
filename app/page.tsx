import LandingSection from "@/components/LandingSection";
import SceneSection from "@/components/SceneSection";

export default function Home() {
  return (
    <div className="snap-container">
      <LandingSection />

      <SceneSection
        sceneNumber={1}
        label="I."
        headline="The student"
        body="For a long time, the goal was the grade. The proof was a number at the top of a page."
        layout="text-left"
        videoFile="scene-1.mp4"
      />

      <SceneSection
        sceneNumber={2}
        label="II."
        headline="The moment"
        body="Then one day I built something nobody asked for. No rubric. No deadline. No teacher at the end."
        layout="text-right"
        videoFile="scene-2.mp4"
      />

      <SceneSection
        sceneNumber={3}
        label="III."
        headline="The proof"
        keyLine="That's when I understood what a journey actually is."
        layout="fullbleed"
        videoFile="scene-3.mp4"
      />

      <SceneSection
        sceneNumber={4}
        label="IV."
        headline="The answer"
        body="I'm not proving anything to anyone anymore. The work is the proof."
        keyLine="And the journey doesn't end — it just gets harder to put down."
        layout="text-left"
        videoFile="scene-4.mp4"
      />
    </div>
  );
}
