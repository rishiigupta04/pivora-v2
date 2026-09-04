import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import data from "@/content/figures/gates.json"
import { Figure } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

/**
 * Entry conditions, rendered as a checklist with explicit pass marks (§ Step 3).
 *
 * Three sets live in gates.json: how work is chosen, what may be published, and
 * what the client must supply. The `all-must-pass` mode draws a gate rail with
 * both outcomes stated — passing and failing — because the failing branch is
 * the point: a firm that publishes the condition under which it declines is
 * more believable than one that only lists what it does.
 *
 * `checklist` mode drops the fail branch for sets where there is no decline —
 * the client commitments are conditions, not a filter.
 *
 * Gold marks the pass outcome only, and appears once.
 */
export type GateSetKey = keyof typeof data.sets

export function QualificationGate({
  set,
  caption,
  className,
}: {
  set: GateSetKey
  caption?: string
  className?: string
}) {
  const d = data.sets[set]
  const isFilter = d.mode === "all-must-pass"

  return (
    <Figure
      id={d.id}
      title={d.title}
      caption={caption ?? d.caption}
      altList={[
        d.intro,
        ...d.gates.map((g, i) => `Condition ${i + 1}: ${g.label} — ${g.test}`),
        `Pass: ${d.outcome.pass}`,
        ...(isFilter && d.outcome.fail ? [`Fail: ${d.outcome.fail}`] : []),
      ]}
      className={className}
    >
      <p className="max-w-2xl font-head text-[19px] font-semibold leading-snug tracking-tight text-navy md:text-[22px]">
        {d.intro}
      </p>

      {/* The gate rail. Each condition is a pass mark on a vertical spine;
          the spine draws through as the list staggers in. */}
      <motion.ol
        className="relative mt-8 space-y-0"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.08 } } }}
      >
        {/* Spine — sits behind the marks, inset to their centre */}
        <motion.span
          aria-hidden="true"
          className="absolute left-[15px] top-3 w-px origin-top bg-line md:left-[17px]"
          style={{ bottom: "1.75rem" }}
          variants={{
            hidden: { scaleY: 0 },
            shown: { scaleY: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
          }}
        />
        {d.gates.map((g) => (
          <motion.li
            key={g.label}
            className="relative flex items-start gap-4 py-3.5 md:gap-5"
            variants={{
              hidden: { opacity: 0, x: -8 },
              shown: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <span
              aria-hidden="true"
              className="relative z-10 mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-white text-navy shadow-e1 md:h-9 md:w-9"
            >
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[16px] font-bold leading-snug text-navy md:text-[17px]">
                {g.label}
              </span>
              <span className="mt-0.5 block text-[14px] leading-relaxed text-greytext">{g.test}</span>
            </span>
          </motion.li>
        ))}
      </motion.ol>

      {/* Outcomes. Pass carries the figure's single gold accent. */}
      <div className={cn("mt-7 grid gap-3", isFilter && d.outcome.fail ? "md:grid-cols-2" : "")}>
        <motion.p
          className="rounded-xl border border-gold bg-gold-soft/70 px-5 py-4 text-[14px] font-medium leading-relaxed text-navy shadow-e1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-1 flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-gold-dark">
            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
            Pass
          </span>
          {d.outcome.pass}
        </motion.p>
        {isFilter && d.outcome.fail ? (
          <motion.p
            className="rounded-xl border border-line bg-softgrey/70 px-5 py-4 text-[14px] leading-relaxed text-greytext"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-1 flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-greytext">
              <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
              Fail
            </span>
            {d.outcome.fail}
          </motion.p>
        ) : null}
      </div>
    </Figure>
  )
}

export default QualificationGate
