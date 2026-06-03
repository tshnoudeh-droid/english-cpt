"use client";

import { useRef, useState } from "react";
import LandingSection from "@/components/LandingSection";
import SceneSection from "@/components/SceneSection";
import ColophonSection from "@/components/ColophonSection";
import VoiceoverButton from "@/components/VoiceoverButton";

const SCENE_COUNT = 4;

export default function Home() {
  const [activeScene, setActiveScene] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(
    Array(SCENE_COUNT).fill(null)
  );

  function handlePlay(scene: number) {
    const refs = audioRefs.current;

    // Pause all
    refs.forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (activeScene === scene) {
      // Toggle off
      setActiveScene(null);
      return;
    }

    // Play selected
    const audio = refs[scene - 1];
    if (audio) {
      audio.play().catch(() => {
        console.log(`Audio for scene ${scene} not yet available.`);
      });
    } else {
      console.log(`Playing scene ${scene} (audio file not yet available).`);
    }
    setActiveScene(scene);
  }

  function makeButton(scene: number) {
    return (
      <VoiceoverButton
        isPlaying={activeScene === scene}
        onPlay={() => handlePlay(scene)}
      />
    );
  }

  return (
    <>
      {/* Hidden audio elements — one per scene */}
      {Array.from({ length: SCENE_COUNT }, (_, i) => (
        <audio
          key={i + 1}
          ref={(el) => { audioRefs.current[i] = el; }}
          src={`/audio/scene-${i + 1}.mp3`}
          onEnded={() => setActiveScene(null)}
        />
      ))}

      <div className="snap-container">
        <LandingSection />

        <SceneSection
          sceneNumber={1}
          label="I."
          headline="The student"
          body="For a long time, the goal was the grade. The proof was a number at the top of a page."
          layout="text-left"
          videoFile="scene-1.mp4"
          voiceoverSlot={makeButton(1)}
        />

        <SceneSection
          sceneNumber={2}
          label="II."
          headline="The moment"
          body="Then one day I built something nobody asked for. No rubric. No deadline. No teacher at the end."
          layout="text-right"
          videoFile="scene-2.mp4"
          voiceoverSlot={makeButton(2)}
        />

        <SceneSection
          sceneNumber={3}
          label="III."
          headline="The proof"
          keyLine="That's when I understood what a journey actually is."
          layout="fullbleed"
          videoFile="scene-3.mp4"
          voiceoverSlot={makeButton(3)}
        />

        <SceneSection
          sceneNumber={4}
          label="IV."
          headline="The answer"
          body="I'm not proving anything to anyone anymore. The work is the proof."
          keyLine="And the journey doesn't end — it just gets harder to put down."
          layout="text-left"
          videoFile="scene-4.mp4"
          voiceoverSlot={makeButton(4)}
        />
        <ColophonSection />
      </div>
    </>
  );
}
