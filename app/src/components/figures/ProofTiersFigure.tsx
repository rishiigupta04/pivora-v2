import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { LIFT_SMALL, LIFT_TRANSITION, stagger } from "@/components/motion/variants";
import data from "@/content/figures/proof-tiers.json";

/**
 * §20.12 — five proof tiers, descending stagger, tier 1 navy → tier 5 gold;
 * honest pending states.
 *
 * Motion (§ Step 6): tiers rise in order, so the ranking is read as a ranking.
 * Each card rises from its own resting height rather than a shared baseline,
 * which keeps the descending stagger legible while it animates.
 *
 * Contrast note: text on the gold tier is solid navy throughout. A tinted
 * navy on gold falls below 4.5:1 at these sizes, so hierarchy there comes from
 * weight and size instead of opacity.
 */
export default function ProofTiersFigure({ id = "proof-tiers", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={`${data.statusLine}${caption ? ` ${caption}` : ""}`}
      altList={data.tiers.map(
        (t) => `Tier ${t.tier} — ${t.name} (${t.status}). ${t.description}. Rule: ${t.rule}${t.note ? ` ${t.note}` : ""}`
      )}
    >
      <motion.ol
        className="flex flex-col gap-3 lg:flex-row lg:items-end"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.09)}
      >
        {data.tiers.map((t, i) => {
          const top = i === 0;
          const bottom = i === data.tiers.length - 1;
          const populated = t.status === "Populated";
          return (
            <motion.li
              key={t.tier}
              variants={{
                hidden: { opacity: 0, y: 22 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={LIFT_SMALL}
              transition={LIFT_TRANSITION}
              className={`relative flex-1 overflow-hidden rounded-xl border p-5 ${
                ["lg:mb-0", "lg:mb-4", "lg:mb-8", "lg:mb-12", "lg:mb-16"][i]
              } ${
                top
                  ? "grain border-navy bg-navy-depth text-white shadow-e3"
                  : bottom
                    ? "border-gold bg-gold-sheen bg-gold text-navy shadow-e2"
                    : "border-line bg-white shadow-e1"
              }`}
            >
              <div className="relative flex items-baseline justify-between gap-3">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    top ? "text-gold" : bottom ? "text-navy" : "text-gold-dark"
                  }`}
                >
                  Tier {t.tier}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    populated
                      ? top
                        ? "bg-white/10 text-gold"
                        : bottom
                          ? "bg-navy/15 text-navy"
                          : "bg-softgrey text-navy"
                      : "border border-dashed border-gold-dark/60 bg-gold-soft/60 text-gold-dark"
                  }`}
                >
                  {t.status}
                </span>
              </div>
              <p
                className={`relative mt-2.5 font-display text-[17px] font-bold leading-snug ${
                  top ? "text-white" : "text-navy"
                }`}
              >
                {t.name}
              </p>
              <p
                className={`relative mt-1.5 text-[12.5px] leading-[1.6] ${
                  top ? "text-white/75" : bottom ? "text-navy" : "text-greytext"
                }`}
              >
                {t.description}
              </p>
              <p
                className={`relative mt-2.5 text-[11.5px] italic leading-[1.6] ${
                  top ? "text-white/60" : bottom ? "text-navy" : "text-greytext/90"
                }`}
              >
                {t.note || t.rule}
              </p>
            </motion.li>
          );
        })}
      </motion.ol>
    </Figure>
  );
}
