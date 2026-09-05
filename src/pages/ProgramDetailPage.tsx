import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, CalendarDays, Target, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { programs } from "@/data/programs";

export default function ProgramDetailPage() {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pt-20 text-center">
        <h1 className="text-2xl font-bold">Program Not Found</h1>
        <p className="text-muted-foreground">The program you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link to="/programs">Back to Programs</Link>
        </Button>
      </div>
    );
  }

  const related = programs.filter((p) => p.slug !== program.slug && p.category === program.category).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={program.category}
        title={program.title}
        description={program.description}
      >
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            {program.location}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent" />
            {program.date}
          </span>
          <span className="flex items-center gap-2">
            <Target className="h-4 w-4 text-accent" />
            {program.impact}
          </span>
        </div>
      </PageHeader>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Button asChild variant="ghost" size="sm" className="mb-8">
              <Link to="/programs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Programs
              </Link>
            </Button>
          </Reveal>

          <Reveal>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl">
              <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight">About This Program</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {program.longDescription}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">Program Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {program.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm">{program.category}</Badge>
              <Badge variant="secondary" className="text-sm capitalize">{program.status}</Badge>
              <Badge variant="secondary" className="text-sm">{program.impact}</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 rounded-2xl bg-primary p-8 text-white">
              <h3 className="text-xl font-bold">Want to Get Involved?</h3>
              <p className="mt-2 text-white/70">Join NEY and be part of programs like this one.</p>
              <Button asChild className="mt-4 bg-accent text-white hover:bg-accent/90">
                <Link to="/join">
                  Join NEY
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight">Related Programs</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <Link to={`/programs/${p.slug}`} className="group block overflow-hidden rounded-xl border border-border/60 bg-card transition-shadow hover:shadow-lg">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold tracking-tight group-hover:text-primary">{p.title}</h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
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
