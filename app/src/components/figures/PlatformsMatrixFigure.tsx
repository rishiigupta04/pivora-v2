import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/platforms.json";

/**
 * §20.20 — five platforms, one repeat pattern; OutSystems carries the gold
 * emphasis.
 *
 * Motion (§ Step 6): the five cards arrive in quick succession, which is the
 * argument — the same scope, five times over. The footer strip lands after
 * them and names the pattern.
 */
export default function PlatformsMatrixFigure({ id = "five-platforms", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[...data.cards.map((c) => `${c.company} — ${c.eyebrow}: ${c.scope.join(", ")}`), data.footerStrip]}
    >
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.075)}
      >
        {data.cards.map((c) => {
          const gold = c.emphasis === "gold";
          return (
            <motion.div
              key={c.company}
              className={`relative flex h-full flex-col overflow-hidden rounded-xl border p-5 shadow-e1 transition-shadow duration-200 hover:shadow-e2 ${
                gold ? "ring-inset-hair border-gold bg-gold-soft/70" : "border-line bg-white"
              }`}
              variants={{
                hidden: { opacity: 0, y: 16 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-[3px] ${gold ? "bg-gold-sheen bg-gold" : "bg-navy/12"}`}
              />
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                  gold ? "text-gold-dark" : "text-greytext"
                }`}
              >
                {c.eyebrow}
              </p>
              <p className="mt-1.5 font-display text-[17px] font-bold leading-snug text-navy">{c.company}</p>
              <ul className="mt-3.5 space-y-1.5">
                {c.scope.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[12.5px] leading-snug text-greytext">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${gold ? "bg-gold" : "bg-navy"}`}
                      aria-hidden="true"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.p
        className="grain relative mt-6 overflow-hidden rounded-xl bg-navy-depth px-6 py-4 text-center text-[13.5px] font-medium text-white/90 shadow-e2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
      >
        <span className="relative">{data.footerStrip}</span>
      </motion.p>
    </Figure>
  );
}
