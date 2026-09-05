import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig, footerLinks } from "@/data/site";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                Stay connected with NEY
              </h3>
              <p className="mt-2 text-sm text-white/55">
                Subscribe to our newsletter for the latest updates, events, and stories.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full gap-2 lg:justify-end">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="max-w-xs border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
              <Button type="submit" className="shrink-0 bg-accent text-white hover:bg-accent/90">
                {subscribed ? "Subscribed!" : "Subscribe"}
                {!subscribed && <ArrowRight className="ml-1.5 h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-white/50">
              <span className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                {siteConfig.email}
              </span>
              <span className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                {siteConfig.phone}
              </span>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" />
                {siteConfig.address}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors hover:bg-accent hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {[
              { title: "Organization", links: footerLinks.organization },
              { title: "Programs", links: footerLinks.programs },
              { title: "Get Involved", links: footerLinks.involved },
              { title: "Legal", links: footerLinks.legal },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
                  {section.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-balance text-center text-2xl font-extrabold tracking-tight text-white/15 sm:text-3xl lg:text-4xl">
            Empowering youth. Creating impact.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Nepal Emerging Youth. All rights reserved.</p>
          <p>Designed and built with care for Nepal's youth.</p>
        </div>
      </div>
    </footer>
  );
}
