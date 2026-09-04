import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import data from "@/content/figures/growth-motion.json"
import { Figure } from "@/components/figure/Figure"
import { EASE, stagger } from "@/components/motion/variants"
import { cn } from "@/lib/utils"

/**
 * Figure 14-2 · The Recommended Growth Motion (§20.8).
 * Nine circular nodes in a linked chain grouped under three phase bars
 * (navy · gold · navy). Each node expands on click/tap to what it proves.
 *
 * Motion (§ Step 6): phases arrive in order and their nodes reveal left to
 * right inside each, because the reading rule is that a platform cannot skip a
 * node. The "what it proves" panel animates open rather than snapping.
 */
export function GrowthMotionFigure({ className }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.readingRule}
      altList={data.phases.flatMap((p) => p.nodes.map((n) => `${p.phase} — ${n.node} ${n.name}: ${n.proves}`))}
      className={className}
    >
      <motion.div
        className="space-y-9"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger(0.14)}
      >
        {data.phases.map((p) => {
          const gold = p.emphasis === "gold"
          return (
            <motion.div
              key={p.phase}
              variants={{
                hidden: { opacity: 0, y: 14 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
              }}
            >
              <div
                className={cn(
                  "grain relative overflow-hidden rounded-md px-5 py-2.5 text-center font-head text-[12px] font-semibold uppercase tracking-[0.16em] shadow-e1",
                  gold ? "bg-gold-sheen bg-gold text-navy" : "bg-navy-depth bg-navy text-white"
                )}
              >
                <span className="relative">{p.phase}</span>
              </div>
              <motion.ol
                className="mt-4 grid gap-3 sm:grid-cols-3"
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger(0.07)}
              >
                {p.nodes.map((n) => {
                  const expanded = open === n.node
                  return (
                    <motion.li
                      key={n.node}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        shown: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE } },
                      }}
                    >
                      <motion.button
                        type="button"
                        onClick={() => setOpen(expanded ? null : n.node)}
                        aria-expanded={expanded}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl border bg-white p-4 text-left shadow-e1 transition-[border-color,box-shadow] duration-200 hover:shadow-e2",
                          expanded
                            ? "border-gold shadow-e2"
                            : gold
                              ? "border-gold/70 hover:border-gold"
                              : "border-line hover:border-navy/40"
                        )}
                      >
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-head text-[13px] font-semibold",
                            gold
                              ? "border-2 border-gold bg-white text-navy"
                              : "border border-navy/20 bg-softgrey text-navy"
                          )}
                          aria-hidden="true"
                        >
                          {n.node}
                        </span>
                        <span className="font-display text-[13.5px] font-bold leading-tight text-navy">{n.name}</span>
                      </motion.button>
                      <AnimatePresence initial={false}>
                        {expanded ? (
                          <motion.div
                            className="overflow-hidden"
                            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{ height: { duration: 0.28, ease: EASE }, opacity: { duration: 0.18 } }}
                          >
                            <p className="mt-2 rounded-lg border border-line bg-softgrey px-4 py-3 text-[12.5px] leading-[1.65] text-greytext">
                              {n.proves}
                            </p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.li>
                  )
                })}
              </motion.ol>
            </motion.div>
          )
        })}
      </motion.div>
    </Figure>
  )
}
