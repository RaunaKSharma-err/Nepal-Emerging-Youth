import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { newsArticles } from "@/data/news";

export function NewsSection() {
  const [featured, ...rest] = newsArticles.slice(0, 4);

  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Latest Updates</span>
              <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
                News & Announcements
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Stay up to date with the latest news, announcements, and stories from NEY.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/news">
                All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        {newsArticles.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {featured && (
              <Reveal>
                <NewsCard article={featured} featured className="h-full" />
              </Reveal>
            )}
            {rest.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {rest.map((article, idx) => (
                  <Reveal key={article.slug} delay={idx * 0.08}>
                    <NewsCard article={article} className="h-full" />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-16 text-center">
            <p className="text-muted-foreground">No stories published yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
