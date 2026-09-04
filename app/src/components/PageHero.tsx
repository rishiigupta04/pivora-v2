import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE, EASE_DRAW, drawRule, rise, stagger } from "@/components/motion/variants";

/**
 * Interior page hero: navy band, eyebrow + H1 + lede. Consistent across hubs
 * and children — so this component sets the first impression on eighteen of
 * the site's pages.
 *
 * Depth (§ Step 2): a navy-to-navy-light gradient with fine grain over it, a
 * gold hairline along the bottom edge, and a very low-opacity arc echoing the
 * ring language in CorridorFigure and FlywheelFigure. Nothing here competes
 * with the headline; the detail is meant to be felt rather than noticed.
 *
 * Motion (§ Step 6): the arc draws once on mount and the text enters as a
 * sequence — eyebrow, rule, headline, lede — so the reading order is carried
 * by the animation. Roughly 500ms end to end; static under reduced motion.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-navy-depth py-16 text-white md:py-24">
      {/* Ambient arc — the corridor/flywheel ring language, at 1/10 the volume. */}
      <svg
        className="pointer-events-none absolute -right-24 -top-40 h-[520px] w-[520px] text-gold md:-right-10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="78"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="3 3"
          initial={{ opacity: 0, rotate: -25 }}
          animate={{ opacity: 0.28, rotate: 0 }}
          style={{ transformOrigin: "100px 100px" }}
          transition={{ duration: 0.6, ease: EASE }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="58"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_DRAW }}
        />
      </svg>

      {/* Gold hairline: the band has an edge, not just a colour change. */}
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />

      <motion.div
        className="container-site relative max-w-4xl"
        initial="hidden"
        animate="shown"
        variants={stagger(0.08)}
      >
        <motion.p className="eyebrow-on-dark" variants={rise}>
          {eyebrow}
        </motion.p>
        <motion.span
          aria-hidden="true"
          className="mt-3 block h-[3px] w-12 origin-left rounded-full bg-gold"
          variants={drawRule}
        />
        <motion.h1
          className="h-display mt-5 text-[32px] sm:text-[44px] md:text-[56px]"
          variants={rise}
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {title}
        </motion.h1>
        {lede ? (
          <motion.p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-white/78 md:text-[18px]" variants={rise}>
            {lede}
          </motion.p>
        ) : null}
        {children ? <motion.div variants={rise}>{children}</motion.div> : null}
      </motion.div>
    </section>
  );
}

