import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers, teamCategories } from "@/data/team";
import { cn } from "@/lib/utils";

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeCategory);

  return (
    <>
      <PageHeader
        eyebrow="Our People"
        title="Leadership & Team"
        description="Meet the dedicated individuals who lead NEY's mission to empower youth and create impact across Nepal."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                All Members
              </button>
              {teamCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeCategory === cat.key ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((member, idx) => (
                <Reveal key={member.id} delay={idx * 0.05}>
                  <TeamMemberCard member={member} className="h-full" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <p className="text-muted-foreground">No members in this category.</p>
            </div>
          )}

          <Reveal>
            <p className="mt-10 text-center text-xs text-muted-foreground">
              Team member names shown are placeholders. Replace with actual team information when available.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
