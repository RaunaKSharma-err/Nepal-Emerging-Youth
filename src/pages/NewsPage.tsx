import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsCard } from "@/components/NewsCard";
import { newsArticles } from "@/data/news";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NewsPage() {
  const categories = ["All", ...Array.from(new Set(newsArticles.map((a) => a.category)))];
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? newsArticles : newsArticles.filter((a) => a.category === filter);
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHeader
        eyebrow="News & Announcements"
        title="News & Stories"
        description="Stay up to date with the latest news, announcements, and impact stories from Nepal Emerging Youth."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map((cat) => (
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
            <>
              {featured && (
                <Reveal>
                  <NewsCard article={featured} featured className="mb-8" />
                </Reveal>
              )}
              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((article, idx) => (
                    <Reveal key={article.slug} delay={idx * 0.05}>
                      <NewsCard article={article} className="h-full" />
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <p className="text-muted-foreground">No stories published yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
