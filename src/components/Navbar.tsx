import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isSolid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isSolid
          ? "border-b border-border/50 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
          isSolid ? "h-[72px] max-w-7xl" : "h-[84px] max-w-7xl",
        )}
      >
        <Logo variant={isSolid ? "default" : "light"} />

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  isSolid
                    ? isActive
                      ? "text-accent"
                      : "text-foreground/65 hover:text-foreground"
                    : isActive
                      ? "text-white"
                      : "text-white/65 hover:text-white",
                )}
              >
                {link.label}
                {isActive && (
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-px h-0.5 rounded-full",
                      isSolid ? "bg-accent" : "bg-white",
                    )}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden bg-accent text-white shadow-sm transition-all hover:bg-accent/90 hover:shadow-md sm:inline-flex"
          >
            <Link to="/join">
              Join NEY
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                  !isSolid && "text-white hover:bg-white/10",
                  isSolid && "text-foreground hover:bg-secondary",
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-border p-0">
              <div className="flex h-[72px] items-center justify-between border-b border-border px-5">
                <SheetTitle asChild>
                  <span>
                    <Logo />
                  </span>
                </SheetTitle>
                <SheetClose asChild>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>
              <div className="flex flex-col gap-0.5 p-5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        to={link.href}
                        className={cn(
                          "group flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium transition-colors",
                          isActive
                            ? "bg-secondary text-primary"
                            : "text-foreground/70 hover:bg-secondary/60 hover:text-foreground",
                        )}
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                      </Link>
                    </SheetClose>
                  );
                })}
                <SheetClose asChild>
                  <Button asChild className="mt-5 bg-accent text-white hover:bg-accent/90">
                    <Link to="/join">
                      Join NEY
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </SheetClose>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="px-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Get in touch
                  </p>
                  <p className="mt-2 px-4 text-sm text-foreground/70">{siteConfig.email}</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
