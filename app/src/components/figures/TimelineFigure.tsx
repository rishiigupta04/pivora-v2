import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/timeline.json";

/**
 * §20.19 — career timeline: 8 nodes, alternating labels, gold Pivora terminus.
 * Node 7 (Sprinklr 2023–2025) carries an EMPTY info affordance — per §29.1 the
 * tooltip content is unconfirmed, so the marker renders empty, never with
 * invented text.
 *
 * Motion (§ Step 6): the rail draws left to right and the markers land on it
 * in order, so three decades read as a progression. The gold terminus arrives
 * last. Cards fade in alongside their own marker.
 */
export default function TimelineFigure({ id = "career-timeline", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={data.nodes.map(
        (n) =>
          `${n.order}. ${n.organisation} — ${n.role}, ${n.period}${n.indicative ? " (indicative dates)" : ""}. ${n.verification}.${"note" in n && n.note ? ` ${n.note}` : ""}`
      )}
    >
      {/* Desktop: horizontal rail, alternating labels */}
      <motion.div
        className="hidden lg:block"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.07)}
      >
        <ol className="grid grid-cols-8 items-end gap-2">
          {data.nodes.map((n, i) => (
            <li key={n.order} className="min-h-[112px]">
              {i % 2 === 0 ? <NodeCard node={n} /> : null}
            </li>
          ))}
        </ol>

        <div className="relative my-3" aria-hidden="true">
          {/* The rail itself draws across before the markers land. */}
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px origin-left -translate-y-1/2 bg-gradient-to-r from-navy/25 via-line to-gold/50"
            variants={{
              hidden: { scaleX: 0 },
              shown: { scaleX: 1, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
            }}
          />
          <ol className="relative grid grid-cols-8 gap-2">
            {data.nodes.map((n) => (
              <li key={n.order} className="flex justify-center">
                <motion.span
                  className={`block h-3.5 w-3.5 rounded-full border-2 bg-white shadow-e1 ${
                    n.terminus ? "border-gold bg-gold ring-4 ring-gold/20" : "border-navy"
                  }`}
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    shown: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: [0.34, 1.4, 0.64, 1] } },
                  }}
                />
              </li>
            ))}
          </ol>
        </div>

        <ol className="grid grid-cols-8 items-start gap-2">
          {data.nodes.map((n, i) => (
            <li key={n.order} className="min-h-[112px]">
              {i % 2 === 1 ? <NodeCard node={n} /> : null}
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Mobile/tablet: vertical rail */}
      <motion.ol
        className="relative space-y-6 border-l border-line pl-6 lg:hidden"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.06)}
      >
        {data.nodes.map((n) => (
          <motion.li
            key={n.order}
            className="relative"
            variants={{
              hidden: { opacity: 0, x: -10 },
              shown: { opacity: 1, x: 0, transition: { duration: 0.34, ease: EASE } },
            }}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[29px] top-1 h-3.5 w-3.5 rounded-full border-2 bg-white ${
                n.terminus ? "border-gold bg-gold" : "border-navy"
              }`}
            />
            <NodeCard node={n} />
          </motion.li>
        ))}
      </motion.ol>
    </Figure>
  );
}

function NodeCard({ node }: { node: (typeof data.nodes)[number] }) {
  const info = "infoAffordance" in node && node.infoAffordance;
  return (
    <motion.div
      className={node.terminus ? "ring-inset-hair relative rounded-lg border border-gold bg-gold-soft/70 p-3.5 shadow-e1" : "p-3"}
      variants={{
        hidden: { opacity: 0, y: 8 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE } },
      }}
    >
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
          node.terminus ? "text-gold-dark" : "text-greytext"
        }`}
      >
        {node.period}
        {node.indicative ? " · indicative" : ""}
      </p>
      <p className="mt-1 flex flex-wrap items-center gap-1.5 text-[13.5px] font-bold leading-snug text-navy">
        {node.organisation}
        {info ? (
          <span
            className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gold text-[10px] font-bold text-gold-dark"
            aria-label="Additional detail pending confirmation"
          >
            i
          </span>
        ) : null}
      </p>
      <p className="text-[12.5px] leading-snug text-greytext">{node.role}</p>
      {"note" in node && node.note ? (
        <p className="mt-1.5 border-t border-gold/40 pt-1.5 text-[12px] font-medium leading-snug text-gold-dark">
          {node.note as string}
        </p>
      ) : null}
    </motion.div>
  );
}
