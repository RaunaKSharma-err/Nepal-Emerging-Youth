import { PageHeader } from "@/components/PageHeader";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <p className="text-sm text-muted-foreground">Last updated: September 2026</p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">1. Introduction</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Nepal Emerging Youth ("NEY", "we", "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website or
              interact with our organization.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">2. Information We Collect</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We may collect the following types of information: contact details you provide through forms (name, email,
              phone), information submitted through membership or volunteer applications, and anonymous analytics data about
              website usage.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">3. How We Use Your Information</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Your information is used to respond to inquiries, process membership applications, communicate about events and
              programs, improve our website and services, and comply with legal obligations. We do not sell your personal data
              to third parties.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">4. Data Security</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data. However, no method
              of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">5. Your Rights</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              You have the right to access, correct, or request deletion of your personal data. To exercise these rights,
              please contact us at the email provided below.
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">6. Contact</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              If you have questions about this privacy policy, please contact us at contact@ney.org.np.
            </p>

            <p className="mt-8 text-sm text-muted-foreground">
              This is a placeholder privacy policy. Replace with a legally reviewed policy before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
