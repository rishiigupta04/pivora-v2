import { motion } from "framer-motion";
import Figure, { NodeCircle } from "@/components/figure/Figure";
import { DrawPath } from "@/components/motion/DrawPath";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/flywheel.json";

/**
 * §20.13 — the qualification flywheel: six nodes on a dashed ring.
 *
 * Motion (§ Step 6): the ring draws clockwise from the top, then the nodes
 * land in the same order, so the loop reads as a loop rather than as six
 * labels in a circle. The hub settles last. Nothing rotates on a timer — the
 * whole sequence is a single response to scrolling into view, ~800ms end to
 * end, and static under prefers-reduced-motion.
 */
export default function FlywheelFigure({ id = "qualification-flywheel", caption }: { id?: string; caption?: string }) {
  const pos = [
    { x: 50, y: 4 },
    { x: 90, y: 27 },
    { x: 90, y: 73 },
    { x: 50, y: 96 },
    { x: 10, y: 73 },
    { x: 10, y: 27 },
  ];

  // A full circle as two arcs, so it can be drawn with pathLength.
  const RING = "M 50 14 A 36 36 0 1 1 49.99 14";

  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={data.nodes.map((n, i) => `${i + 1}. ${n}`)}
    >
      {/* Desktop ring */}
      <motion.div
        className="relative mx-auto hidden aspect-square max-w-[520px] md:block"
        aria-hidden="true"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger(0.075, 0.28)}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {/* Faint outer guide, then the dashed working ring drawing over it. */}
          <circle cx="50" cy="50" r="43" fill="none" stroke="var(--pivora-line)" strokeWidth="0.4" />
          <DrawPath
            d={RING}
            duration={0.6}
            fill="none"
            stroke="var(--pivora-gold)"
            strokeWidth={0.7}
            strokeDasharray="2.5 2.5"
          />
        </svg>

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.72, ease: EASE }}
        >
          <p className="font-display text-xl font-bold leading-tight text-navy">
            {data.hub[0]}
            <br />
            {data.hub[1]}
          </p>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-gold-dark">{data.hubSub}</p>
        </motion.div>

        {data.nodes.map((n, i) => (
          <motion.div
            key={n}
            className="absolute w-[124px] -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              shown: { opacity: 1, scale: 1, transition: { duration: 0.32, ease: EASE } },
            }}
          >
            <span className="mx-auto block w-fit drop-shadow-sm">
              <NodeCircle label={String(i + 1)} tone={i % 2 === 0 ? "navy" : "gold"} size="sm" />
            </span>
            <p className="mt-2 text-[13px] font-semibold leading-tight text-navy">{n}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile list */}
      <motion.ol
        className="space-y-3 md:hidden"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.07)}
      >
        {data.nodes.map((n, i) => (
          <motion.li
            key={n}
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0, x: -10 },
              shown: { opacity: 1, x: 0, transition: { duration: 0.34, ease: EASE } },
            }}
          >
            <NodeCircle label={String(i + 1)} tone={i % 2 === 0 ? "navy" : "gold"} size="sm" />
            <p className="text-sm font-semibold text-navy">{n}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Figure>
  );
}
