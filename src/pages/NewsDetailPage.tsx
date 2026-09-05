import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { newsArticles } from "@/data/news";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pt-20 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <p className="text-muted-foreground">The article you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link to="/news">Back to News</Link>
        </Button>
      </div>
    );
  }

  const related = newsArticles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const paragraphs = article.content.split("\n\n");

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4 text-accent" />
            {article.author}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent" />
            {formatDate(article.date)}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            {article.readTime}
          </span>
        </div>
      </PageHeader>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Button asChild variant="ghost" size="sm" className="mb-8">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All News
              </Link>
            </Button>
          </Reveal>

          <Reveal>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl">
              <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="mt-10">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="mb-6 text-pretty leading-relaxed text-foreground/90">
                  {para}
                </p>
              ))}
            </article>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Share:</span>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Share on Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Share on Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Share on LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Share link">
                  <Share2 className="h-4 w-4" />
                </a>
              </div>
              <span className="text-sm text-muted-foreground">By {article.author}, {article.authorRole}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight">Related Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <Reveal key={a.slug}>
                  <Link to={`/news/${a.slug}`} className="group block overflow-hidden rounded-xl border border-border/60 bg-card transition-shadow hover:shadow-lg">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <Badge className="mb-2">{a.category}</Badge>
                      <h3 className="font-bold tracking-tight group-hover:text-primary">{a.title}</h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{a.excerpt}</p>
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
