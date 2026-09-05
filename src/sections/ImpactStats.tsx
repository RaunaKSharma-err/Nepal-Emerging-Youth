import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { impactStats } from "@/data/about";

export function ImpactStats() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Our Reach</span>
            <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem]">
              Measurable change in real communities
            </h2>
          </div>
        </Reveal>

        {/* Editorial number band */}
        <div className="grid grid-cols-2 divide-x divide-y divide-border border-x border-y border-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
          {impactStats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.05}>
              <div className="flex flex-col gap-1 p-6 sm:p-7 lg:p-8">
                <span className="text-[11px] font-bold tabular-nums text-muted-foreground/60">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="number-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
