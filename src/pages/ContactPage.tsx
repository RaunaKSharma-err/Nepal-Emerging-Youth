import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";
import { faqItems } from "@/data/organization";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [data, setData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!data.subject.trim()) newErrors.subject = "Subject is required";
    if (!data.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Have questions, ideas, or want to connect? We'd love to hear from you. Reach out using the form below or through our contact information."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">Reach out through any of these channels.</p>

                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Phone</h3>
                      <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Office</h3>
                      <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-6 flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Map placeholder — {siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Send a Message</h2>
                <p className="mt-2 text-muted-foreground">Fill out the form and we'll get back to you.</p>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-success/30 bg-success/5 p-10 text-center">
                    <CheckCircle2 className="h-10 w-10 text-success" />
                    <h3 className="mt-4 text-lg font-bold">Message Sent!</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        className={cn(errors.name && "border-destructive")}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className={cn(errors.email && "border-destructive")}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={data.subject}
                        onChange={(e) => setData({ ...data, subject: e.target.value })}
                        className={cn(errors.subject && "border-destructive")}
                        placeholder="What's this about?"
                      />
                      {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        className={cn(errors.message && "border-destructive", "min-h-[140px]")}
                        placeholder="Your message..."
                      />
                      {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent text-white hover:bg-accent/90">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
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
