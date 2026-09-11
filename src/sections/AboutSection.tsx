import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { aboutContent, values } from "@/data/about";
import { heroImages } from "@/data/site";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Who We Are — large statement + image */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div>
              <span className="eyebrow">Who We Are</span>
              <p className="mt-6 text-balance text-2xl font-bold leading-[1.25] tracking-tight text-foreground sm:text-3xl lg:text-[2.25rem]">
                We believe young people are not simply the leaders of tomorrow — they are the changemakers of today.
              </p>
              <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {aboutContent.whoWeAre}
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {aboutContent.whoWeAreParagraph2}
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/about">
                    Learn More About NEY
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[12/10] overflow-hidden rounded-xl">
                <img
                  src={heroImages.workshop}
                  alt="Young people in a leadership workshop"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-border bg-card px-5 py-4 shadow-lg sm:block">
                <div className="text-3xl font-extrabold tracking-tight text-accent number-display">2025</div>
                <div className="text-xs font-medium text-muted-foreground">Year Founded</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission & Vision — large statements */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col bg-background p-8 sm:p-10 lg:p-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Mission</span>
              <p className="mt-5 text-balance text-xl font-bold leading-[1.3] tracking-tight sm:text-2xl">
                {aboutContent.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col bg-muted/30 p-8 sm:p-10 lg:p-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Vision</span>
              <p className="mt-5 text-balance text-xl font-bold leading-[1.3] tracking-tight sm:text-2xl">
                {aboutContent.vision}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values — interactive list */}
        <div className="mt-24">
          <Reveal>
            <span className="eyebrow">What We Stand For</span>
            <h3 className="mt-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Our Core Values
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-0 divide-y divide-border border-y border-border lg:grid-cols-2 lg:divide-y-0 lg:border-y-0 lg:border-l">
              {values.map((value, idx) => {
                const Icon = getIcon(value.icon);
                const isActive = activeValue === idx;
                return (
                  <button
                    key={value.title}
                    onMouseEnter={() => setActiveValue(idx)}
                    onFocus={() => setActiveValue(idx)}
                    className={cn(
                      "group flex items-start gap-5 border-r border-border p-6 text-left transition-colors lg:p-7",
                      isActive ? "bg-muted/40" : "bg-transparent hover:bg-muted/20",
                    )}
                  >
                    <span className="text-[11px] font-bold tabular-nums text-muted-foreground/50">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon
                          className={cn(
                            "h-5 w-5 transition-colors",
                            isActive ? "text-accent" : "text-muted-foreground",
                          )}
                        />
                        <h4 className="text-base font-bold tracking-tight">{value.title}</h4>
                      </div>
                      <p
                        className={cn(
                          "mt-2 text-sm leading-relaxed text-muted-foreground transition-all",
                          isActive ? "max-h-32 opacity-100" : "max-h-0 overflow-hidden opacity-0 lg:max-h-32 lg:opacity-100",
                        )}
                      >
                        {value.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
