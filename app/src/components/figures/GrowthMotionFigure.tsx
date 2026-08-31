import { useState } from "react"
import data from "@/content/figures/growth-motion.json"
import { Figure } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

/**
 * Figure 14-2 · The Recommended Growth Motion (§20.8).
 * Nine circular nodes in a linked chain grouped under three phase bars
 * (navy · gold · navy). Each node expands on click/tap to what it proves.
 */
export function GrowthMotionFigure({ className }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.readingRule}
      altList={data.phases.flatMap((p) =>
        p.nodes.map((n) => `${p.phase} — ${n.node} ${n.name}: ${n.proves}`)
      )}
      className={className}
    >
      <div className="space-y-8">
        {data.phases.map((p) => (
          <div key={p.phase}>
            <div
              className={cn(
                "rounded-md px-4 py-2 text-center font-head text-[12px] font-semibold uppercase tracking-[0.16em]",
                p.emphasis === "gold" ? "bg-gold text-navy" : "bg-navy text-white"
              )}
            >
              {p.phase}
            </div>
            <ol className="mt-4 grid gap-3 sm:grid-cols-3">
              {p.nodes.map((n) => {
                const expanded = open === n.node
                return (
                  <li key={n.node}>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : n.node)}
                      aria-expanded={expanded}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl border bg-white p-3.5 text-left transition-colors",
                        p.emphasis === "gold" ? "border-gold/70 hover:border-gold" : "border-line hover:border-navy/40"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-head text-[13px] font-semibold",
                          p.emphasis === "gold"
                            ? "border-2 border-gold bg-white text-navy"
                            : "border border-navy/20 bg-softgrey text-navy"
                        )}
                        aria-hidden="true"
                      >
                        {n.node}
                      </span>
                      <span className="font-display text-[13.5px] font-bold leading-tight text-navy">{n.name}</span>
                    </button>
                    <div hidden={!expanded} className="mt-2 rounded-lg border border-line bg-softgrey px-3.5 py-2.5 text-[12.5px] leading-relaxed text-greytext">
                      {n.proves}
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        ))}
      </div>
    </Figure>
  )
}
