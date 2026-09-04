import { motion } from "framer-motion"
import data from "@/content/figures/ecosystem-flow.json"
import { Figure } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

/**
 * Homepage §5.11 ecosystem flow (also §17.3 on /about):
 * Platform OEM → Pivora → Enterprise / GCC's / GSI's → Global Market.
 * Navy nodes, gold connector at the value point. Content lives in
 * ecosystem-flow.json; this component only renders it.
 *
 * Motion (§ Step 6): nodes and connectors reveal strictly left to right, so the
 * order of reading is carried by the animation rather than only by the arrows.
 * Collapses to a static flow under prefers-reduced-motion.
 */
export function EcosystemFlowFigure({ className }: { className?: string }) {
  const nodes = data.nodes
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.caption}
      altList={nodes.map((n, i) => `${i + 1}. ${n.label}`)}
      className={className}
    >
      <motion.ol
        className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-0"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.1 } } }}
      >
        {nodes.map((n, i) => {
          const isHub = n.role === "hub"
          return (
            <li key={n.label} className="flex items-center md:flex-1">
              <motion.div
                className={cn(
                  "relative flex-1 overflow-hidden rounded-xl border px-5 py-4 text-center font-display text-[14px] font-bold",
                  isHub
                    ? "grain border-gold bg-navy-depth text-gold shadow-e2"
                    : "border-line bg-white text-navy shadow-e1"
                )}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  shown: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {/* Hairline inside the hub, echoing the ring treatment in
                    CorridorFigure and FlywheelFigure. */}
                {isHub ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[3px] rounded-[9px] border border-gold/25"
                  />
                ) : null}
                <span className="relative">{n.label}</span>
              </motion.div>
              {i < nodes.length - 1 ? (
                <>
                  {/* Gold connector at the value point (Pivora → ecosystem). */}
                  <motion.span
                    aria-hidden="true"
                    className={cn(
                      "mx-1 hidden h-px w-8 shrink-0 origin-left md:block",
                      isHub ? "bg-gold" : "bg-navy/30"
                    )}
                    variants={{
                      hidden: { scaleX: 0 },
                      shown: { scaleX: 1, transition: { duration: 0.26, ease: [0.33, 1, 0.68, 1] } },
                    }}
                  />
                  <motion.span
                    aria-hidden="true"
                    className={cn(
                      "mx-auto block h-6 w-px origin-top md:hidden",
                      isHub ? "bg-gold" : "bg-navy/30"
                    )}
                    variants={{
                      hidden: { scaleY: 0 },
                      shown: { scaleY: 1, transition: { duration: 0.26, ease: [0.33, 1, 0.68, 1] } },
                    }}
                  />
                </>
              ) : null}
            </li>
          )
        })}
      </motion.ol>
    </Figure>
  )
}
