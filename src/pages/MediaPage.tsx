import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryItems, galleryCategories } from "@/data/organization";
import { cn } from "@/lib/utils";

export default function MediaPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);
  const lightboxItem = galleryItems.find((g) => g.id === lightbox);

  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Media Gallery"
        description="Photos from NEY events, workshops, community drives, and campaigns across Nepal."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    filter === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
              {filtered.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.03}>
                  <button
                    onClick={() => setLightbox(item.id)}
                    className="group relative block w-full overflow-hidden rounded-xl border border-border/60"
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-sm font-semibold">{item.caption}</p>
                      <p className="text-xs text-white/70">{item.event}</p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <p className="text-muted-foreground">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-3xl overflow-hidden border-border bg-background p-0">
          <DialogTitle className="sr-only">{lightboxItem?.caption}</DialogTitle>
          {lightboxItem && (
            <div>
              <img src={lightboxItem.image} alt={lightboxItem.caption} className="w-full object-cover" />
              <div className="p-5">
                <p className="font-semibold">{lightboxItem.caption}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {lightboxItem.event} · {new Date(lightboxItem.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
