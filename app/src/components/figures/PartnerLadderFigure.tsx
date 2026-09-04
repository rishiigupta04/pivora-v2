import { motion } from "framer-motion"
import data from "@/content/figures/partner-ladder.json"
import { Figure } from "@/components/figure/Figure"
import { EASE, stagger } from "@/components/motion/variants"
import { cn } from "@/lib/utils"

/**
 * Figure 10-1 · Partner Maturity Ladder (§20.7).
 * Five ascending blocks L0 → L4 stepping muted grey-blue → navy → gold,
 * with the partner scorecard rendered beneath.
 *
 * Motion (§ Step 6): rungs arrive in order and rise to their own step, so the
 * ladder climbs rather than appearing all at once. The scorecard follows.
 *
 * Contrast note: text on the L4 gold block is solid navy. A tinted navy on
 * gold falls below 4.5:1 at 12.5px.
 */
export function PartnerLadderFigure({ className }: { className?: string }) {
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.caption}
      altList={data.levels.map((l) => `${l.level} ${l.name}: ${l.definition}`)}
      className={className}
    >
      <motion.ol
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.09)}
      >
        {data.levels.map((l, i) => {
          const scaled = i === 4
          const coselling = i === 3
          return (
            <motion.li
              key={l.level}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-xl border p-5",
                scaled
                  ? "ring-inset-hair border-gold bg-gold-sheen bg-gold text-navy shadow-e2"
                  : coselling
                    ? "grain border-navy bg-navy-depth text-white shadow-e2"
                    : "border-line bg-white text-navy shadow-e1",
                // ascending step
                i === 1 && "lg:mb-4",
                i === 2 && "lg:mb-8",
                i === 3 && "lg:mb-12",
                i === 4 && "lg:mb-16"
              )}
              variants={{
                hidden: { opacity: 0, y: 22 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.44, ease: EASE } },
              }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <p
                className={cn(
                  "relative font-head text-[22px] font-semibold",
                  scaled ? "text-navy" : coselling ? "text-gold" : "text-navy"
                )}
              >
                {l.level}
              </p>
              <p
                className={cn(
                  "relative mt-1 font-head text-[13px] font-semibold uppercase tracking-[0.1em]",
                  coselling ? "text-white" : "text-navy"
                )}
              >
                {l.name}
              </p>
              <p
                className={cn(
                  "relative mt-2.5 text-[12.5px] leading-[1.65]",
                  scaled ? "text-navy" : coselling ? "text-white/75" : "text-greytext"
                )}
              >
                {l.definition}
              </p>
            </motion.li>
          )
        })}
      </motion.ol>

      {/* Partner scorecard (§20.7) */}
      <motion.div
        className="mt-7 rounded-xl border border-line bg-softgrey px-6 py-5 shadow-e1"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
      >
        <p className="font-head text-[11.5px] font-semibold uppercase tracking-[0.16em] text-navy">
          Partner scorecard
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {data.scorecard.map((s) => (
            <li key={s} className="flex items-center gap-2 text-[12.5px] text-greytext">
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </Figure>
  )
}
