import { motion } from "framer-motion"
import data from "@/content/figures/platform-ramp.json"
import { Figure } from "@/components/figure/Figure"
import { EASE, stagger } from "@/components/motion/variants"
import { cn } from "@/lib/utils"

/**
 * Figure 14-3 · Platform Ramp 0 → 1 → 3 → 10 → Global (§20.6).
 * Five gated stages on a rising baseline; Stage 0 renders as an open
 * circle with a gold ring — a decision point where the answer can be no.
 *
 * Motion (§ Step 6): stages arrive left to right and each rises to its own
 * height on the ramp, so the climb is animated rather than merely drawn. The
 * gate lands first, because it is the stage that can stop the sequence.
 */
export function PlatformRampFigure({ className }: { className?: string }) {
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.caption}
      altList={data.stages.map((s) => `${s.stage} · ${s.label}: ${s.question} — ${s.focus}`)}
      className={className}
    >
      <motion.ol
        className="grid gap-4 md:grid-cols-5 md:items-end"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.1)}
      >
        {data.stages.map((s, i) => {
          const gate = i === 0
          const global_ = i === data.stages.length - 1
          return (
            <motion.li
              key={s.stage}
              className="flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.44, ease: EASE } },
              }}
            >
              <motion.div
                className={cn(
                  "card relative flex h-full flex-col overflow-hidden p-5 transition-shadow duration-200 hover:shadow-e2",
                  global_ && "ring-inset-hair border-gold bg-gold-soft/50",
                  gate && "border-gold/60",
                  // rising baseline: staggered top margin on desktop
                  i === 1 && "md:mt-6",
                  i === 2 && "md:mt-10",
                  i === 3 && "md:mt-14",
                  i === 4 && "md:mt-[4.5rem]"
                )}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <span
                  aria-hidden="true"
                  className={cn("absolute inset-x-0 top-0 h-[3px]", global_ ? "bg-gold-sheen bg-gold" : "bg-navy/15")}
                />
                <span
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-full font-head text-[13px] font-semibold shadow-e1",
                    gate
                      ? "border-2 border-dashed border-gold bg-white text-navy"
                      : global_
                        ? "bg-gold-sheen bg-gold text-navy ring-4 ring-gold/15"
                        : "bg-navy-depth bg-navy text-white"
                  )}
                  aria-hidden="true"
                >
                  {s.stage === "Global" ? "G" : s.stage}
                </span>
                <p className="mt-3.5 font-head text-[15px] font-semibold uppercase tracking-[0.06em] text-navy">
                  {s.label}
                </p>
                <p className="mt-1.5 text-[13px] font-semibold leading-snug text-ink">{s.question}</p>
                <p className="mt-2.5 text-[12.5px] leading-[1.65] text-greytext">{s.focus}</p>
              </motion.div>
            </motion.li>
          )
        })}
      </motion.ol>
    </Figure>
  )
}
