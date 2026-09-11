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
      <img src="/NEY Logo.png" alt="NEY" className="h-10 w-10"/>
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
              "mt-1 text-[10px] font-medium uppercase tracking-[0.12em]",
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
