import { Reveal } from "@/components/Reveal";
import { whyExists } from "@/data/about";
import { getIcon } from "@/lib/icons";

export function WhyNEYSection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              <span className="h-px w-6 bg-accent" />
              {whyExists.subtitle}
            </span>
            <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
              {whyExists.title}
            </h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              NEY was created to address the real challenges facing young people in Nepal — and to turn that understanding into action.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {whyExists.points.map((point, idx) => {
            const Icon = getIcon(point.icon);
            return (
              <Reveal key={point.title} delay={idx * 0.08}>
                <div className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-muted/30 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="number-display text-2xl font-extrabold tracking-tight text-border">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
