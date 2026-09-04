import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/ecosystem.json";

/**
 * §20.21 — the relationship ecosystem: founder hub, three tracks, gold outcome
 * lines.
 *
 * Motion (§ Step 6): the hub lands first, the spine draws down from it, then
 * the three tracks fan out — so the figure reads as one asset producing three
 * outcomes rather than as four separate boxes.
 */
export default function EcosystemFigure({ id = "relationship-ecosystem", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[`Hub: ${data.hub}`, ...data.tracks.map((t) => `${t.name}: ${t.description} — outcome: ${t.outcome}`)]}
    >
      <motion.div
        className="grain relative mx-auto max-w-xs overflow-hidden rounded-full bg-navy-depth px-7 py-4 text-center shadow-e2"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <span aria-hidden="true" className="pointer-events-none absolute inset-1.5 rounded-full border border-gold/25" />
        <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Hub</p>
        <p className="relative font-display text-lg font-bold text-white">{data.hub}</p>
      </motion.div>

      <motion.div
        className="mx-auto h-10 w-px origin-top bg-gradient-to-b from-gold to-gold/30"
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.34, delay: 0.24, ease: [0.33, 1, 0.68, 1] }}
      />

      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.09, 0.4)}
      >
        {data.tracks.map((t) => (
          <motion.div
            key={t.name}
            className="card card-glow flex h-full flex-col p-6"
            variants={{
              hidden: { opacity: 0, y: 14 },
              shown: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
            }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <p className="font-display text-[17px] font-bold text-navy">{t.name}</p>
            <p className="mt-2.5 text-[14px] leading-[1.65] text-greytext">{t.description}</p>
            <p className="mt-auto flex items-center gap-2 border-t border-gold/60 pt-3.5 text-[13px] font-semibold text-gold-dark">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {t.outcome}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Figure>
  );
}
