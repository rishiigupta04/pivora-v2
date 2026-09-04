import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import data from "@/content/figures/bos.json"
import { Figure, NodeCircle } from "@/components/figure/Figure"
import { EASE, stagger } from "@/components/motion/variants"
import { cn } from "@/lib/utils"

/**
 * Figure 14-1 · Built–Operate–Sustain signature model (§20.5).
 * Three cards connected by gold arrows; progressive fill (SUSTAIN card
 * carries the soft gold tint). Each card expands to reveal full scope and
 * proof-of-completion text from §14.2 — collapsed by default.
 *
 * Motion (§ Step 6): the three phases arrive in order with their connecting
 * arrows, and the scope panel animates its height open and closed rather than
 * snapping. Height is not a transform, so the root MotionConfig does not
 * suppress it — reduced motion is handled here.
 */
export function BOSFigure({ className }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <Figure
      id={data.id}
      title={data.title}
      altList={data.phases.map((p) => `${p.phase} (${p.subLabel}): ${p.bullets.join("; ")}. ${p.proof}`)}
      className={className}
    >
      <motion.div
        className="grid gap-6 md:grid-cols-3 md:gap-0"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.12)}
      >
        {data.phases.map((p, i) => {
          const last = i === data.phases.length - 1
          const expanded = open === i
          return (
            <motion.div
              key={p.phase}
              className="relative flex items-stretch"
              variants={{
                hidden: { opacity: 0, y: 18 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
              }}
            >
              <div
                className={cn(
                  "relative flex w-full flex-col overflow-hidden rounded-2xl border p-7 transition-shadow duration-200",
                  expanded ? "shadow-e3" : "shadow-e1 hover:shadow-e2",
                  last ? "ring-inset-hair border-gold bg-gold-soft/60" : "border-line bg-white"
                )}
              >
                {/* Phase rule: gold only on SUSTAIN, the value point. */}
                <span
                  aria-hidden="true"
                  className={cn("absolute inset-x-0 top-0 h-[3px]", last ? "bg-gold-sheen bg-gold" : "bg-navy/15")}
                />
                <div className="flex items-center gap-3">
                  <NodeCircle label={String(i + 1)} tone={last ? "gold" : "navy"} />
                  <div>
                    <p className="font-head text-[20px] font-semibold tracking-tight text-navy">{p.phase}</p>
                    <p className="font-display text-[11.5px] font-bold uppercase tracking-[0.18em] text-gold-dark">
                      {p.subLabel}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-ink">
                      <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <motion.button
                  type="button"
                  onClick={() => setOpen(expanded ? null : i)}
                  aria-expanded={expanded}
                  aria-controls={`bos-detail-${i}`}
                  whileTap={{ scale: 0.98 }}
                  className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-[12.5px] font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:text-gold-dark"
                >
                  {expanded ? "Hide scope" : "Full scope & completion"}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")}
                    aria-hidden="true"
                  />
                </motion.button>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      id={`bos-detail-${i}`}
                      className="overflow-hidden"
                      initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ height: { duration: 0.3, ease: EASE }, opacity: { duration: 0.2 } }}
                    >
                      <div className="mt-4 space-y-3 border-t border-line pt-4 text-[13px] leading-[1.7] text-greytext">
                        <p>
                          <span className="font-bold text-navy">Objective. </span>
                          {p.objective}
                        </p>
                        <p>
                          <span className="font-bold text-navy">Scope. </span>
                          {p.scope}
                        </p>
                        <p>
                          <span className="font-bold text-navy">Proof of completion. </span>
                          {p.proof}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
              {!last ? (
                <>
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-gold md:block"
                    aria-hidden="true"
                  />
                  <ArrowRight className="mx-auto my-1 h-5 w-5 rotate-90 text-gold md:hidden" aria-hidden="true" />
                </>
              ) : null}
            </motion.div>
          )
        })}
      </motion.div>
    </Figure>
  )
}
