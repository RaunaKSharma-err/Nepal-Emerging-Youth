import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { departments } from "@/data/departments";
import { getIcon } from "@/lib/icons";

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Organization"
        title="Departments"
        description="NEY's work is organized across specialized departments, each playing a vital role in advancing our mission."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, idx) => {
              const Icon = getIcon(dept.icon);
              return (
                <Reveal key={dept.slug} delay={idx * 0.05}>
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">{dept.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {dept.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                      <span className="text-xs text-muted-foreground">{dept.teamSize}</span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
