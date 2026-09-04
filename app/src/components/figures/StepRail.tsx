import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { EASE } from "@/components/motion/variants";

export type RailStep = { step: string; line: string };

/**
 * Shared left-to-right step rail. LandExpandFigure and ValueMotionFigure were
 * the same stepper drawn twice; both now render this.
 *
 * Gold marks the final step only — the value point — per §21.
 *
 * Motion (§ Step 6): steps and their connecting arrows reveal strictly in
 * order, so the sequence is carried by the animation as well as by the arrows.
 * Static under prefers-reduced-motion.
 *
 * `gridClass` is passed in as a literal so Tailwind can see it at build time —
 * the column count differs per figure and a computed class would be purged.
 */
export function StepRail({ steps, gridClass }: { steps: RailStep[]; gridClass: string }) {
  return (
    <motion.ol
      className={`grid gap-3 md:items-stretch md:gap-2.5 ${gridClass}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.1 } } }}
    >
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s.step} className="contents">
            <motion.div
              className={`relative flex h-full flex-col overflow-hidden rounded-xl border p-5 shadow-e1 transition-shadow duration-200 hover:shadow-e2 ${
                last ? "ring-inset-hair border-gold bg-gold-soft/70" : "border-line bg-white"
              }`}
              variants={{
                hidden: { opacity: 0, y: 14 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              {/* Progress tick along the top edge: navy until the value point. */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-[3px] ${last ? "bg-gold-sheen bg-gold" : "bg-navy/15"}`}
              />
              <p
                className={`font-display text-[11px] font-bold uppercase tracking-[0.16em] ${
                  last ? "text-gold-dark" : "text-navy"
                }`}
              >
                {s.step}
              </p>
              <p className="mt-2.5 text-[13.5px] leading-[1.6] text-greytext">{s.line}</p>
            </motion.div>
            {!last ? (
              <>
                <motion.span
                  className="hidden self-center text-gold md:block"
                  aria-hidden="true"
                  variants={ARROW}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
                <motion.span className="mx-auto text-gold md:hidden" aria-hidden="true" variants={ARROW}>
                  <ArrowDown className="h-4 w-4" />
                </motion.span>
              </>
            ) : null}
          </li>
        );
      })}
    </motion.ol>
  );
}

const ARROW = {
  hidden: { opacity: 0, scale: 0.7 },
  shown: { opacity: 1, scale: 1, transition: { duration: 0.24, ease: EASE } },
};

export default StepRail;
