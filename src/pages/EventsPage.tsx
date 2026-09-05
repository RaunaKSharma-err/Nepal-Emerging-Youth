import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { EventCard } from "@/components/EventCard";
import { events, eventCategories } from "@/data/events";
import { cn } from "@/lib/utils";

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? events
    : filter === "Upcoming"
      ? events.filter((e) => e.status === "upcoming")
      : filter === "Past"
        ? events.filter((e) => e.status === "past")
        : events.filter((e) => e.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Events & Activities"
        description="Workshops, conferences, community drives, and campaigns — discover what's happening at NEY and how you can participate."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {eventCategories.map((cat) => (
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
              {filtered.map((event, idx) => (
                <Reveal key={event.slug} delay={idx * 0.05}>
                  <EventCard event={event} className="h-full" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <p className="text-muted-foreground">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
