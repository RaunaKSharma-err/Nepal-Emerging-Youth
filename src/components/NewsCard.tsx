import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
  featured?: boolean;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function NewsCard({ article, className, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <Link
        to={`/news/${article.slug}`}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-xl bg-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20",
          className,
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/20" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/60">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(article.date)}
            </span>
          </div>
          <h3 className="max-w-2xl text-balance text-xl font-bold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
            {article.title}
          </h3>
          <p className="mt-3 max-w-xl line-clamp-2 text-sm text-white/60 sm:text-base">
            {article.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Read Story
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/news/${article.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur-sm">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-[11px] text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          {formatDate(article.date)}
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-base font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          Read More
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
