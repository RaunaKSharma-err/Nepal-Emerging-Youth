import { Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { documents } from "@/data/organization";

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparency"
        title="Documents & Reports"
        description="We believe in transparency. Access our annual reports, impact reports, policies, and other organizational documents here."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, idx) => (
              <Reveal key={doc.title} delay={idx * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary">{doc.type}</Badge>
                    <span className="text-xs text-muted-foreground">{doc.year}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug tracking-tight">{doc.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{doc.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="text-xs text-muted-foreground">{doc.fileSize}</span>
                    <Button variant="outline" size="sm" disabled>
                      <Download className="mr-1.5 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-xs text-muted-foreground">
              Document links are currently placeholders. Actual files will be available once uploaded.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
