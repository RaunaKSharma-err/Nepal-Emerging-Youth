// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TeamMemberCard } from "@/components/TeamMemberCard";
// import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/team";

export function TeamPreviewSection() {
  const executives = teamMembers.filter((m) => m.category === "executive").slice(0, 3);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">The People</span>
              <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
                Leadership Preview
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Meet some of the people leading NEY's mission to empower youth across Nepal.
              </p>
            </div>
            {/* <Button asChild variant="outline" className="shrink-0">
              <Link to="/team">
                Meet the Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((member, idx) => (
            <Reveal key={member.id} delay={idx * 0.1}>
              <TeamMemberCard member={member} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
