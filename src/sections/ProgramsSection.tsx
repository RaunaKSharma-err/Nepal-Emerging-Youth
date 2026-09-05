import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { programs, featuredInitiatives } from "@/data/programs";

export function ProgramsSection() {
  const large = featuredInitiatives.find((i) => i.size === "large");
  const smalls = featuredInitiatives.filter((i) => i.size === "small");
  const featured = programs.slice(0, 3);

  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
                Programs & Initiatives
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                From leadership development to digital literacy, our programs create real, measurable impact in communities across Nepal.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/programs">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        {/* Editorial featured layout */}
        {large && (
          <Reveal>
            <Link
              to={`/programs/${large.slug}`}
              className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-xl sm:min-h-[460px]"
            >
              <img
                src={large.image}
                alt={large.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
              <div className="relative p-7 text-white sm:p-10 lg:p-12">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">Featured Initiative</span>
                <h3 className="mt-3 max-w-xl text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">{large.title}</h3>
                <p className="mt-3 max-w-lg text-pretty text-sm text-white/65 sm:text-base">{large.description}</p>
                <div className="mt-6 flex items-center gap-8">
                  <div>
                    <div className="number-display text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">{large.impactMetric}</div>
                    <div className="text-xs text-white/50">{large.impactLabel}</div>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-white transition-transform group-hover:translate-x-1">
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Supporting programs */}
        {smalls.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {smalls.map((initiative, idx) => (
              <Reveal key={initiative.slug} delay={idx * 0.1}>
                <Link
                  to={`/programs/${initiative.slug}`}
                  className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-xl"
                >
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                  <div className="relative p-6 text-white sm:p-7">
                    <h3 className="text-lg font-bold leading-tight tracking-tight sm:text-xl">{initiative.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-white/60">{initiative.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="number-display text-xl font-extrabold text-accent">{initiative.impactMetric}</span>
                        <span className="ml-1.5 text-xs text-white/50">{initiative.impactLabel}</span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
