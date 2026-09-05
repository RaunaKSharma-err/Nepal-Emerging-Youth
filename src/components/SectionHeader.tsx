import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "light";
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "default",
  className,
  children,
}: SectionHeaderProps) {
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em]",
            isLight ? "text-accent" : "text-accent",
          )}
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "max-w-3xl text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]",
          isLight ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-[15px] leading-relaxed sm:text-base",
            isLight ? "text-white/60" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
