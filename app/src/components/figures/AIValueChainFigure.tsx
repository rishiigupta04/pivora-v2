import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/ai-value-chain.json";

/**
 * §20.10 — AI value chain: eight stages, value increasing across the chain.
 *
 * Motion (§ Step 6): stages arrive in sequence, so the direction of the chain
 * is read rather than inferred from the numbering alone.
 *
 * Contrast note: the final gold card carries solid navy text throughout. A
 * tinted navy on gold falls below 4.5:1 at these sizes.
 */
export default function AIValueChainFigure({ id = "ai-value-chain", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={data.stages.map((s, i) => `${i + 1}. ${s}`)}
    >
      <motion.ol
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.055)}
      >
        {data.stages.map((s, i) => {
          const last = i === data.stages.length - 1;
          const penultimate = i >= data.stages.length - 2;
          return (
            <motion.li
              key={s}
              className={`relative overflow-hidden rounded-xl border p-4 shadow-e1 transition-shadow duration-200 hover:shadow-e2 ${
                last
                  ? "ring-inset-hair border-gold bg-gold-sheen bg-gold text-navy"
                  : penultimate
                    ? "border-gold/70 bg-gold-soft/70"
                    : "border-line bg-white"
              }`}
              variants={{
                hidden: { opacity: 0, y: 12 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.34, ease: EASE } },
              }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <span
                className={`relative font-display text-[11px] font-bold tracking-[0.14em] ${
                  last ? "text-navy" : penultimate ? "text-gold-dark" : "text-greytext"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="relative mt-1.5 text-sm font-semibold leading-snug text-navy">{s}</p>
            </motion.li>
          );
        })}
      </motion.ol>
    </Figure>
  );
}
