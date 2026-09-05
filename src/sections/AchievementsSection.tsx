import { Reveal } from "@/components/Reveal";
import { achievements } from "@/data/organization";

export function AchievementsSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              <span className="h-px w-6 bg-accent" />
              Our Journey
            </span>
            <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
              Milestones & Achievements
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 h-full w-px bg-border sm:left-4" />

          <div className="flex flex-col gap-10">
            {achievements.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="relative flex items-start gap-6 pl-8 sm:pl-14">
                  {/* Dot */}
                  <div className="absolute left-0 top-2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:left-4" />

                  {/* Content */}
                  <div className="flex-1">
                    <span className="number-display text-sm font-extrabold tracking-tight text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-lg font-bold tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
