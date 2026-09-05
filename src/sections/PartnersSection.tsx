import { Reveal } from "@/components/Reveal";
import { partners, partnerCategories } from "@/data/organization";

export function PartnersSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              <span className="h-px w-6 bg-accent" />
              Working Together
            </span>
            <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
              Partners & Collaborations
            </h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              We're proud to work alongside organizations that share our commitment to youth empowerment and social impact.
            </p>
          </div>
        </Reveal>

        {partnerCategories.map((category) => (
          <Reveal key={category}>
            <div className="mt-12 first:mt-0">
              <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
                {partners
                  .filter((p) => p.category === category)
                  .map((partner, idx) => (
                    <div
                      key={idx}
                      className="flex aspect-[3/2] items-center justify-center bg-card p-4 transition-colors hover:bg-muted/40"
                    >
                      <span className="text-sm font-bold tracking-tight text-muted-foreground transition-colors hover:text-foreground">
                        {partner.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <p className="mt-10 text-center text-xs text-muted-foreground/60">
            Partner names shown are placeholders. Replace with actual partner information when available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
