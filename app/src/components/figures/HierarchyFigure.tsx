import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/hierarchy.json";

/**
 * §20.1 — the Pivora strategic hierarchy: five steps, gold terminus on the
 * next move.
 *
 * Motion (§ Step 6): the spine draws downward as each step arrives, so the
 * chain reads top to bottom and the gold terminus lands last.
 */
export default function HierarchyFigure({ id = "strategic-hierarchy", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption}
      altList={data.steps.map((s) => `${s.step}. ${s.title} — ${s.description}`)}
    >
      <motion.ol
        className="space-y-0"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger(0.11)}
      >
        {data.steps.map((s, i) => {
          const gold = s.emphasis === "gold";
          const last = i === data.steps.length - 1;
          return (
            <motion.li
              key={s.step}
              className="relative pl-16"
              variants={{
                hidden: { opacity: 0, y: 14 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
              }}
            >
              {!last ? (
                <motion.span
                  className="absolute left-[21px] top-12 w-px origin-top bg-line"
                  style={{ height: "calc(100% - 3rem)" }}
                  aria-hidden="true"
                  variants={{
                    hidden: { scaleY: 0 },
                    shown: { scaleY: 1, transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } },
                  }}
                />
              ) : null}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 inline-flex h-11 w-11 items-center justify-center rounded-full font-head text-[15px] font-semibold shadow-e1 ${
                  gold ? "bg-gold-sheen bg-gold text-navy ring-4 ring-gold/15" : "bg-navy-depth bg-navy text-white"
                }`}
              >
                {s.step}
              </span>
              <div className={last ? "pb-0" : "pb-9"}>
                <p className={`font-display text-[19px] font-bold ${gold ? "text-gold-dark" : "text-navy"}`}>
                  {s.title}
                </p>
                <p className="mt-1.5 max-w-2xl text-[14.5px] leading-[1.7] text-greytext">{s.description}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </Figure>
  );
}
