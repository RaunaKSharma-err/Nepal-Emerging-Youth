import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, CheckCircle2, User, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { departments } from "@/data/departments";
import { getIcon } from "@/lib/icons";

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  const dept = departments.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pt-20 text-center">
        <h1 className="text-2xl font-bold">Department Not Found</h1>
        <p className="text-muted-foreground">The department you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link to="/departments">Back to Departments</Link>
        </Button>
      </div>
    );
  }

  const Icon = getIcon(dept.icon);

  return (
    <>
      <PageHeader
        eyebrow="Department"
        title={dept.name}
        description={dept.description}
      >
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-accent" />
            {dept.teamSize}
          </span>
          <span className="flex items-center gap-2">
            <User className="h-4 w-4 text-accent" />
            Led by {dept.lead}
          </span>
        </div>
      </PageHeader>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Button asChild variant="ghost" size="sm" className="mb-8">
              <Link to="/departments">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Departments
              </Link>
            </Button>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-white">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{dept.name}</h2>
                <p className="text-sm text-muted-foreground">{dept.purpose}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <h3 className="text-xl font-bold tracking-tight">Responsibilities</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {dept.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <h3 className="text-xl font-bold tracking-tight">Major Activities</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {dept.activities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl bg-primary p-8 text-white">
              <h3 className="text-lg font-bold">Contact This Department</h3>
              <p className="mt-2 text-white/70">Have questions or want to connect with this department?</p>
              <Button asChild className="mt-4 bg-accent text-white hover:bg-accent/90">
                <a href={`mailto:${dept.contactEmail}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {dept.contactEmail}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
