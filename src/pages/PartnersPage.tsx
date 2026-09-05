import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { PartnersSection } from "@/sections/PartnersSection";

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collaboration"
        title="Partners & Collaborations"
        description="We work alongside organizations that share our commitment to youth empowerment and social impact across Nepal."
      />

      <PartnersSection />

      <section className="bg-primary py-20 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Handshake className="h-8 w-8 text-accent" />
            </div>
            <SectionHeader
              variant="light"
              title="Interested in partnering with NEY?"
              description="We're always open to new partnerships that align with our mission. Let's explore how we can work together to create impact."
              align="center"
              className="mx-auto items-center"
            />
            <Button asChild size="lg" className="mt-8 bg-accent text-white hover:bg-accent/90">
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
