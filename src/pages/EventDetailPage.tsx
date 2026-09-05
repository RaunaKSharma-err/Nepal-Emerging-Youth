import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Users, CheckCircle2, Ticket } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pt-20 text-center">
        <h1 className="text-2xl font-bold">Event Not Found</h1>
        <p className="text-muted-foreground">The event you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link to="/events">Back to Events</Link>
        </Button>
      </div>
    );
  }

  const related = events.filter((e) => e.slug !== event.slug && e.status === "upcoming").slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={event.category}
        title={event.title}
        description={event.description}
      >
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            {event.location}
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-accent" />
            {event.capacity}
          </span>
        </div>
      </PageHeader>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Button asChild variant="ghost" size="sm" className="mb-8">
              <Link to="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Events
              </Link>
            </Button>
          </Reveal>

          <Reveal>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl">
              <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight">About This Event</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {event.longDescription}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">Event Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {event.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-muted/30 p-6">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-accent" />
                  <span className="font-semibold">
                    {event.status === "past" ? "This event has concluded" : event.registrationOpen ? "Registration is open" : "Registration coming soon"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Capacity: {event.capacity}</p>
              </div>
              {event.status === "upcoming" && event.registrationOpen && (
                <Button className="bg-accent text-white hover:bg-accent/90">
                  Register Now
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight">Other Upcoming Events</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((e) => (
                <Reveal key={e.slug}>
                  <Link to={`/events/${e.slug}`} className="group block overflow-hidden rounded-xl border border-border/60 bg-card transition-shadow hover:shadow-lg">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <Badge className="mb-2">{e.category}</Badge>
                      <h3 className="font-bold tracking-tight group-hover:text-primary">{e.title}</h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{e.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
