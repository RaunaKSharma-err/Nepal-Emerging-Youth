import { Hero } from "@/sections/Hero";
import { ImpactStats } from "@/sections/ImpactStats";
import { AboutSection } from "@/sections/AboutSection";
import { WhyNEYSection } from "@/sections/WhyNEYSection";
import { ProgramsSection } from "@/sections/ProgramsSection";
import { ImpactStorySection } from "@/sections/ImpactStorySection";
// import { AchievementsSection } from "@/sections/AchievementsSection";
import { TeamPreviewSection } from "@/sections/TeamPreviewSection";
import { GetInvolvedSection } from "@/sections/GetInvolvedSection";
// import { NewsSection } from "@/sections/NewsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutSection />
      <WhyNEYSection />
      <ProgramsSection />
      <ImpactStorySection />
      {/* <AchievementsSection /> */}
      <TeamPreviewSection />
      <GetInvolvedSection />
      {/* <NewsSection /> */}
    </>
  );
}
