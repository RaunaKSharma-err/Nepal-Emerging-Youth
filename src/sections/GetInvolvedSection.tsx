import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { involvementPaths } from "@/data/organization";
import { getIcon } from "@/lib/icons";

export function GetInvolvedSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left — headline + primary CTA */}
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                <span className="h-px w-6 bg-accent" />
                Get Involved
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                There is a place for you in the movement.
              </h2>
              <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-white/55 sm:text-base">
                Whether you want to join as a member, volunteer your time, or partner with us — there's
                a role for everyone who wants to create change.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent/90">
                  <Link to="/join">
                    Join NEY
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right — involvement paths as editorial list */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {involvementPaths.map((path, idx) => {
                const Icon = getIcon(path.icon);
                return (
                  <Link
                    key={path.title}
                    to={path.href}
                    className="group flex items-center gap-5 py-6 transition-colors hover:bg-white/[0.03] sm:gap-6 sm:py-7"
                  >
                    <span className="text-[11px] font-bold tabular-nums text-white/30">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5">
                      <h3 className="text-lg font-bold tracking-tight">{path.title}</h3>
                      <p className="text-sm text-white/50">{path.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
