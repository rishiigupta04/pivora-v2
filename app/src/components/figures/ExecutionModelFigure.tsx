import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/execution-model.json";

/**
 * §20.17 — execution model: governance layer, client pods, shared services
 * bench.
 *
 * Motion (§ Step 6): the figure builds top-down — governance, then the
 * connector, then the pods together, then the bench beneath them — so the
 * reader sees the pods sitting under one governance layer and over one shared
 * bench, which is the whole argument.
 */

/** A vertical connector that draws downward. */
function Connector({ delay }: { delay: number }) {
  return (
    <motion.div
      className="mx-auto h-8 w-px origin-top bg-gradient-to-b from-gold to-gold/30"
      aria-hidden="true"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3, delay, ease: [0.33, 1, 0.68, 1] }}
    />
  );
}

export default function ExecutionModelFigure({ id = "execution-model", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[
        `${data.governance.name}: ${data.governance.contents}`,
        ...data.pods.map((p) => `${p.name}: ${p.roles.join(", ")}`),
        `${data.bench.name}: ${data.bench.items.join(", ")} — ${data.bench.note}`,
      ]}
    >
      {/* Governance layer */}
      <motion.div
        className="grain relative overflow-hidden rounded-xl bg-navy-depth px-6 py-5 text-center shadow-e2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          {data.governance.name}
        </p>
        <p className="relative mt-1.5 text-sm leading-[1.7] text-white/85">{data.governance.contents}</p>
      </motion.div>

      <Connector delay={0.24} />

      {/* Pods */}
      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger(0.09, 0.36)}
      >
        {data.pods.map((p) => (
          <motion.div
            key={p.name}
            className="card card-glow p-6"
            variants={{
              hidden: { opacity: 0, y: 14 },
              shown: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
            }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <p className="font-display text-[16px] font-bold text-navy">{p.name}</p>
            <ul className="mt-3.5 space-y-2">
              {p.roles.map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-[13px] text-greytext">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" /> {r}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <Connector delay={0.62} />

      {/* Bench */}
      <motion.div
        className="ring-inset-hair relative rounded-xl border border-gold bg-gold-soft/70 p-6 shadow-e1"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.42, delay: 0.7, ease: EASE }}
      >
        <div className="relative flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-display text-[16px] font-bold text-navy">{data.bench.name}</p>
          <p className="text-[12px] text-greytext">{data.bench.note}</p>
        </div>
        <ul className="relative mt-4 flex flex-wrap gap-2">
          {data.bench.items.map((b) => (
            <li
              key={b}
              className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-navy shadow-e1 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </Figure>
  );
}
