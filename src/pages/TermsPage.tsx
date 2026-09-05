import { PageHeader } from "@/components/PageHeader";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <p className="text-sm text-muted-foreground">Last updated: September 2026</p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              By accessing and using the Nepal Emerging Youth ("NEY") website, you accept and agree to be bound by these terms
              of service. If you do not agree, please do not use our website.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">2. Use of the Website</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              You agree to use this website for lawful purposes only. You must not misuse the website by introducing viruses,
              attempting unauthorized access, or engaging in any activity that could damage or impair the website's
              functionality.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">3. Intellectual Property</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              All content on this website, including text, graphics, logos, and images, is the property of NEY or its content
              providers and is protected by intellectual property laws. You may not reproduce or distribute content without
              prior written permission.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">4. Membership and Participation</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Membership and participation in NEY programs are subject to applicable guidelines and policies. NEY reserves the
              right to accept or reject applications at its discretion.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">5. Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              NEY is not liable for any direct, indirect, or consequential damages arising from your use of this website or
              participation in our programs.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">6. Changes to Terms</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of
              the updated terms.
            </p>

            <p className="mt-8 text-sm text-muted-foreground">
              This is a placeholder terms of service. Replace with legally reviewed terms before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
