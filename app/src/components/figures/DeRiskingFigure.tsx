import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/derisking.json";

/**
 * §20.18 — de-risking equation: risks off the table → value on the table
 * (brand tokens only).
 *
 * Motion (§ Step 6): rows arrive top to bottom and each arrow slides right as
 * its row lands, so the transformation reads left to right within the row.
 */
export default function DeRiskingFigure({ id = "derisking", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption}
      altList={[
        ...data.rows.map((r) => `${data.leftTitle}: ${r.risk} — becomes — ${data.rightTitle}: ${r.value}`),
        data.footerStrip,
      ]}
    >
      <motion.div
        className="overflow-hidden rounded-2xl border border-line shadow-e2"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger(0.08)}
      >
        <div className="grain relative grid bg-navy-depth md:grid-cols-[1fr_auto_1fr]">
          <p className="relative px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
            {data.leftTitle}
          </p>
          <p className="relative hidden px-3 py-3.5 md:block" aria-hidden="true" />
          <p className="relative px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold md:border-l md:border-white/10">
            {data.rightTitle}
          </p>
        </div>
        {data.rows.map((r) => (
          <motion.div
            key={r.risk}
            className="group grid border-t border-line transition-colors md:grid-cols-[1fr_auto_1fr]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              shown: { opacity: 1, y: 0, transition: { duration: 0.36, ease: EASE } },
            }}
          >
            <p className="bg-white px-5 py-4 text-sm leading-[1.65] text-greytext transition-colors group-hover:bg-softgrey/70">
              {r.risk}
            </p>
            <p className="hidden items-center px-3 md:flex" aria-hidden="true">
              <ArrowRight className="h-4 w-4 text-gold transition-transform duration-200 group-hover:translate-x-0.5" />
            </p>
            <p className="bg-gold-soft/50 px-5 py-4 text-sm font-medium leading-[1.65] text-navy transition-colors group-hover:bg-gold-soft/80 md:border-l md:border-line">
              {r.value}
            </p>
          </motion.div>
        ))}
        <p className="border-t border-line bg-white px-5 py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
          {data.footerStrip}
        </p>
      </motion.div>
    </Figure>
  );
}
