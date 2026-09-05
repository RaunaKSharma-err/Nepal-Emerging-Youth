import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventItem } from "@/types";

interface EventCardProps {
  event: EventItem;
  className?: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function EventCard({ event, className }: EventCardProps) {
  const isPast = event.status === "past";
  const dateObj = new Date(event.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

  return (
    <Link
      to={`/events/${event.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        {/* Date block */}
        <div className="absolute left-3 top-3 flex flex-col items-center rounded-lg bg-white/95 px-3 py-2 backdrop-blur-sm">
          <span className="text-lg font-extrabold leading-none tracking-tight text-primary number-display">{day}</span>
          <span className="mt-0.5 text-[9px] font-bold tracking-wider text-muted-foreground">{month}</span>
        </div>
        {isPast ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground backdrop-blur-sm">
            Past
          </span>
        ) : event.registrationOpen ? (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            Register
          </span>
        ) : (
          <span className="absolute right-3 top-3 rounded-full bg-warning/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            Soon
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {event.category}
        </span>
        <h3 className="mt-1.5 text-base font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>
        <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {event.location}
          </span>
        </div>
      </div>
    </Link>
  );
}
