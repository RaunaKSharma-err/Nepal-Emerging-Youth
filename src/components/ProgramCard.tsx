import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Program } from "@/types";

interface ProgramCardProps {
  program: Program;
  className?: string;
}

export function ProgramCard({ program, className }: ProgramCardProps) {
  return (
    <Link
      to={`/programs/${program.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur-sm">
          {program.category}
        </span>
        {program.status === "ongoing" && (
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-success/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Active
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {program.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {program.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3.5">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-accent">{program.impact}</span>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {program.location}
            </span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
            Explore
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
