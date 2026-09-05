import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = "default", className, showText = true }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-2.5 font-display transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="Nepal Emerging Youth — Home"
    >
      <span
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-lg text-xs font-extrabold tracking-tight transition-transform group-hover:scale-105",
          isLight
            ? "bg-white text-primary"
            : "bg-primary text-white",
        )}
      >
        NEY
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent ring-2 ring-background" />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-[15px] font-extrabold tracking-tight",
              isLight ? "text-white" : "text-foreground",
            )}
          >
            Nepal Emerging Youth
          </span>
          <span
            className={cn(
              "mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em]",
              isLight ? "text-white/50" : "text-muted-foreground",
            )}
          >
            Empowering Youth · Creating Impact
          </span>
        </span>
      )}
    </Link>
  );
}
