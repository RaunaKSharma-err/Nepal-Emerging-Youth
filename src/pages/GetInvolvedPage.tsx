import { PageHeader } from "@/components/PageHeader";
import { GetInvolvedSection } from "@/sections/GetInvolvedSection";
import { faqItems } from "@/data/organization";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Get Involved with NEY"
        description="Whether you want to join as a member, volunteer your time, or partner with us — there are many ways to be part of NEY's mission."
      />

      <GetInvolvedSection />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Questions"
              title="Frequently Asked Questions"
              description="Got questions about getting involved with NEY? Here are some common answers."
              align="center"
              className="mx-auto items-center"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
