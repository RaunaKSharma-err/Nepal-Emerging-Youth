import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/data/site";

export function Hero() {
  const prefersReduced = useReducedMotion();

  const ease = [0.25, 0.1, 0.25, 1] as const;
  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease } };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImages.primary}
          alt="Nepal landscape with Himalayan mountains"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="eyebrow-light text-xs">
              Nepal Emerging Youth
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-balance text-[2.75rem] font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Empowering Youth.
            <br />
            Creating Impact.
            <br />
            <span className="text-accent">Shaping Nepal.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
          >
            A youth-driven non-profit organization building the next generation of Nepali leaders through
            leadership development, innovation, community service, and social impact.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25">
              <Link to="/impact">
                Explore Our Impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              <Link to="/join">Join NEY</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating metadata */}
      <motion.div
        {...fadeUp(0.6)}
        className="absolute bottom-12 right-8 hidden flex-col items-end gap-1 text-right lg:flex"
      >
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
          Youth · Leadership · Impact
        </span>
        <span className="text-5xl font-extrabold tracking-tight text-white/15 number-display">
          2025—Now
        </span>
      </motion.div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 lg:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
