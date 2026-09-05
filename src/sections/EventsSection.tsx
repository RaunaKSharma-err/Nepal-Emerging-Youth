import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";

export function EventsSection() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const featured = upcoming[0];
  const rest = upcoming.slice(1, 4);

  if (!featured) {
    return (
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">Get Together</span>
                <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
                  Upcoming Events
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-16 text-center">
            <p className="text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  const dateObj = new Date(featured.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const year = dateObj.getFullYear();

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Get Together</span>
              <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
                Upcoming Events
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Join us at our next workshop, conference, or community drive.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/events">
                All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Featured event */}
          <Reveal>
            <Link
              to={`/events/${featured.slug}`}
              className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-xl"
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
              <div className="relative p-7 text-white sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex flex-col items-center rounded-lg bg-white/95 px-3 py-2 backdrop-blur-sm">
                    <span className="number-display text-xl font-extrabold leading-none tracking-tight text-primary">{day}</span>
                    <span className="mt-0.5 text-[9px] font-bold tracking-wider text-muted-foreground">{month}</span>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">Register Open</span>
                </div>
                <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight">{featured.title}</h3>
                <p className="mt-2 line-clamp-2 max-w-md text-sm text-white/60">{featured.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {featured.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {featured.capacity}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Event list */}
          <Reveal delay={0.1}>
            <div className="flex flex-col divide-y divide-border border-y border-border">
              {rest.map((event) => {
                const d = new Date(event.date);
                return (
                  <Link
                    key={event.slug}
                    to={`/events/${event.slug}`}
                    className="group flex items-center gap-5 py-5 transition-colors hover:bg-muted/30"
                  >
                    <div className="flex w-14 shrink-0 flex-col items-center rounded-lg border border-border bg-card px-2 py-2.5">
                      <span className="number-display text-xl font-extrabold leading-none tracking-tight text-primary">{d.getDate()}</span>
                      <span className="mt-0.5 text-[9px] font-bold tracking-wider text-muted-foreground">
                        {d.toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{event.category}</span>
                      <h4 className="text-base font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">{event.title}</h4>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
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
