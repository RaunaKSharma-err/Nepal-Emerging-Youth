import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ImpactStats } from "@/sections/ImpactStats";
import { ImpactStorySection } from "@/sections/ImpactStorySection";
import { GetInvolvedSection } from "@/sections/GetInvolvedSection";

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Impact"
        title="Creating Measurable Change"
        description="NEY's work is driven by a commitment to real, measurable impact in communities across Nepal. Here's a look at what we've achieved together."
      />
      <ImpactStats />
      <ImpactStorySection />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Transparency"
              title="Committed to Accountability"
              description="We believe in being transparent about our work, our impact, and our use of resources. Detailed impact reports and financial documents are available in our documents section."
              align="center"
              className="mx-auto items-center"
            />
          </Reveal>
        </div>
      </section>
      <GetInvolvedSection />
    </>
  );
}
