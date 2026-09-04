import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/gtm-multiplier.json";

/**
 * §20.16 — the India GTM multiplier: hub + four loops; solid = evidenced,
 * dashed = strategy.
 *
 * The solid/dashed distinction is the honesty of this figure and is preserved
 * exactly: two of the four loops are evidenced, two are labelled strategy.
 *
 * Motion (§ Step 6): the hub lands first and the loops fan out after it, so
 * the figure reads as one nucleus producing four effects.
 */
export default function GTMMultiplierFigure({ id = "gtm-multiplier", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[
        `Hub: ${data.hub.join(" — ")}`,
        ...data.loops.map((l) => `Loop ${l.loop}, ${l.mechanic} (${l.basis}): ${l.says}`),
        `Legend: solid border = ${data.legend.evidenced}; dashed border = ${data.legend.strategy}.`,
      ]}
    >
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.09)}
      >
        <motion.div
          className="grain relative overflow-hidden rounded-2xl bg-navy-depth p-7 text-white shadow-e3 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:flex lg:flex-col lg:justify-center"
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            shown: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
          }}
        >
          <span aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-xl border border-gold/20" />
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{data.hub[0]}</p>
          <p className="relative mt-2.5 font-head text-2xl font-semibold leading-snug tracking-tight md:text-[28px]">
            {data.hub[1]}
          </p>
        </motion.div>

        {data.loops.map((l) => {
          const evidenced = l.basis === "evidenced";
          return (
            <motion.div
              key={l.loop}
              className={`rounded-2xl border-2 bg-white p-6 transition-shadow duration-200 hover:shadow-e2 ${
                evidenced ? "border-solid border-navy shadow-e1" : "border-dashed border-gold-dark/70"
              }`}
              variants={{
                hidden: { opacity: 0, y: 14 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-display text-[16px] font-bold leading-snug text-navy">{l.mechanic}</p>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] ${
                    evidenced ? "bg-navy text-gold" : "bg-gold-soft text-gold-dark"
                  }`}
                >
                  {evidenced ? data.legend.evidenced : data.legend.strategy}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-[1.65] text-greytext">{l.says}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-greytext">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-6 rounded-sm border-2 border-solid border-navy" aria-hidden="true" />{" "}
          {data.legend.evidenced}
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-6 rounded-sm border-2 border-dashed border-gold-dark/70" aria-hidden="true" />{" "}
          {data.legend.strategy}
        </span>
      </div>
    </Figure>
  );
}
