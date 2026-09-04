import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { CountUp } from "@/components/motion/CountUp";
import { EASE, EASE_DRAW, stagger } from "@/components/motion/variants";
import data from "@/content/figures/execution-gap.json";

/**
 * §20.15 — the execution gap. Set A: intent vs reality (~75 / 57 / 43 + ₹5.6 crore).
 * Set B: verified consequences (67 / 53 / 48 / 46). Source line inside the figure (§20.15).
 *
 * Motion (§ Step 6): each bar grows from zero to its own width while the
 * number counts up beside it, so the size of the problem is read rather than
 * stated. Bars stagger down the column; the ₹5.6 crore callout lands last,
 * because it is the consequence the others add up to. Gold appears once, on
 * that callout.
 */

/** One measured bar: label, counted figure, and a track that fills to width. */
function Bar({
  metric,
  value,
  prefix = "",
  unit,
  order,
  accent = false,
}: {
  metric: string;
  value: number;
  prefix?: string;
  unit: string;
  order: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.5 }}
      variants={{ hidden: {}, shown: { transition: { delayChildren: order * 0.09 } } }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium leading-snug text-navy">{metric}</span>
        <CountUp
          value={`${prefix}${value}${unit}`}
          className={`font-display text-[22px] font-extrabold tracking-tight ${accent ? "text-gold-dark" : "text-navy"}`}
        />
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-softgrey">
        <motion.div
          className={`h-full rounded-full ${accent ? "bg-gold-sheen bg-gold" : "bg-navy-depth bg-navy"}`}
          variants={{
            hidden: { width: "0%" },
            shown: { width: `${value}%`, transition: { duration: 0.6, ease: EASE_DRAW } },
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ExecutionGapFigure({ id = "execution-gap", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={`${data.sourceLine}${caption ? ` ${caption}` : ""}`}
      altList={[
        ...data.setA.bars.map((b) => `${data.setA.title}: ${b.metric} — ${b.prefix}${b.value}${b.unit}`),
        `${data.setALoss.metric}: ${data.setALoss.value}`,
        ...data.setB.bars.map((b) => `${data.setB.title}: ${b.metric} — ${b.value}${b.unit}`),
      ]}
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-2 lg:gap-14"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.12)}
      >
        {/* Set A — what went wrong */}
        <div>
          <p className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-navy" />
            {data.setA.title}
          </p>
          <div className="mt-5 space-y-5">
            {data.setA.bars.map((b, i) => (
              <Bar key={b.metric} metric={b.metric} value={b.value} prefix={b.prefix} unit={b.unit} order={i} />
            ))}
          </div>
          {/* The consequence the bars add up to — the figure's one gold accent. */}
          <motion.p
            className="ring-inset-hair relative mt-6 rounded-xl border border-gold bg-gold-soft/70 px-5 py-4 text-[13px] font-medium leading-relaxed text-navy shadow-e1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.42, delay: 0.34, ease: EASE }}
          >
            {data.setALoss.metric}:{" "}
            <span className="font-display text-[20px] font-extrabold tracking-tight">{data.setALoss.value}</span>
          </motion.p>
        </div>

        {/* Set B — what it cost the business */}
        <div>
          <p className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-navy" />
            {data.setB.title}
          </p>
          <div className="mt-5 space-y-5">
            {data.setB.bars.map((b, i) => (
              <Bar key={b.metric} metric={b.metric} value={b.value} unit={b.unit} order={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </Figure>
  );
}
