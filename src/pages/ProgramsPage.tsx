import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { programs, programCategories } from "@/data/programs";
import { cn } from "@/lib/utils";

export default function ProgramsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? programs
    : programs.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Programs & Initiatives"
        description="Our programs span leadership, education, health, technology, entrepreneurship, and the environment — each designed to create measurable community impact."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {programCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((program, idx) => (
                <Reveal key={program.slug} delay={idx * 0.05}>
                  <ProgramCard program={program} className="h-full" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <p className="text-muted-foreground">No programs in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
