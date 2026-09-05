import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { impactStory } from "@/data/about";

export function ImpactStorySection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={impactStory.image}
                  alt={impactStory.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md sm:block">
                <div className="number-display text-2xl font-extrabold tracking-tight text-accent">{impactStory.participants}</div>
                <div className="text-xs text-white/50">Participants</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                <span className="h-px w-6 bg-accent" />
                Impact Story
              </span>
              <h2 className="mt-5 text-balance text-[1.75rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2.25rem]">
                {impactStory.title}
              </h2>
              <p className="mt-3 text-white/50">{impactStory.subtitle}</p>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">The Challenge</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{impactStory.problem}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">What We Did</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{impactStory.action}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">The Result</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{impactStory.result}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6 text-sm">
                <div>
                  <span className="text-white/40">Location: </span>
                  <span className="font-medium">{impactStory.location}</span>
                </div>
                <div>
                  <span className="text-white/40">Volunteers: </span>
                  <span className="font-medium">{impactStory.volunteers}</span>
                </div>
                <div>
                  <span className="text-white/40">Outcome: </span>
                  <span className="font-medium">{impactStory.outcome}</span>
                </div>
              </div>

              <Button asChild className="mt-8 bg-accent text-white hover:bg-accent/90">
                <Link to="/impact">
                  Read Impact Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
