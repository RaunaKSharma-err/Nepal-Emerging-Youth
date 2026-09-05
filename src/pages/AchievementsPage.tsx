import { PageHeader } from "@/components/PageHeader";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { GetInvolvedSection } from "@/sections/GetInvolvedSection";

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Journey"
        title="Achievements & Milestones"
        description="From our founding to our latest milestones, here's a look at the key moments that have shaped NEY's journey of youth empowerment."
      />
      <AchievementsSection />
      <GetInvolvedSection />
    </>
  );
}
