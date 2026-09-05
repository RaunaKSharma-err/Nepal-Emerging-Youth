import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, children, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary pt-32 pb-20 text-white sm:pt-36 sm:pb-24",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
