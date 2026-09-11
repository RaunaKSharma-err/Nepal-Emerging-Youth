import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/sections/AboutSection";
import { WhyNEYSection } from "@/sections/WhyNEYSection";
// import { AchievementsSection } from "@/sections/AchievementsSection";
import { GetInvolvedSection } from "@/sections/GetInvolvedSection";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Nepal Emerging Youth"
        description="A youth-driven organization building the next generation of Nepali leaders through empowerment, innovation, and community service."
      />
      <AboutSection />
      <WhyNEYSection />
      {/* <AchievementsSection /> */}
      <GetInvolvedSection />
    </>
  );
}
