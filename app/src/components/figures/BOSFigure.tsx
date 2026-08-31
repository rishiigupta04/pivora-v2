import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import data from "@/content/figures/bos.json"
import { Figure, NodeCircle } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

/**
 * Figure 14-1 · Built–Operate–Sustain signature model (§20.5).
 * Three cards connected by gold arrows; progressive fill (SUSTAIN card
 * carries the soft gold tint). Each card expands to reveal full scope and
 * proof-of-completion text from §14.2 — collapsed by default.
 */
export function BOSFigure({ className }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.caption}
      altList={data.phases.map((p) => `${p.phase} (${p.subLabel}): ${p.bullets.join("; ")}. ${p.proof}`)}
      className={className}
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-0">
        {data.phases.map((p, i) => {
          const last = i === data.phases.length - 1
          const expanded = open === i
          return (
            <div key={p.phase} className="relative flex items-stretch">
              <div
                className={cn(
                  "flex w-full flex-col rounded-2xl border p-7",
                  last ? "border-gold bg-gold-soft/60" : "border-line bg-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <NodeCircle label={String(i + 1)} tone={last ? "gold" : "navy"} />
                  <div>
                    <p className="font-head text-[19px] font-semibold tracking-tight text-navy">{p.phase}</p>
                    <p className="font-display text-[11.5px] font-bold uppercase tracking-[0.18em] text-gold-dark">
                      {p.subLabel}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px] text-ink">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : i)}
                  aria-expanded={expanded}
                  aria-controls={`bos-detail-${i}`}
                  className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-[12.5px] font-bold uppercase tracking-[0.12em] text-navy hover:text-gold-dark"
                >
                  {expanded ? "Hide scope" : "Full scope & completion"}
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", expanded && "rotate-180")} aria-hidden="true" />
                </button>
                <div id={`bos-detail-${i}`} hidden={!expanded} className="mt-4 space-y-3 border-t border-line pt-4 text-[13px] leading-relaxed text-greytext">
                  <p><span className="font-bold text-navy">Objective. </span>{p.objective}</p>
                  <p><span className="font-bold text-navy">Scope. </span>{p.scope}</p>
                  <p><span className="font-bold text-navy">Proof of completion. </span>{p.proof}</p>
                </div>
              </div>
              {!last ? (
                <>
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-gold md:block" aria-hidden="true" />
                  <ArrowRight className="mx-auto my-1 h-5 w-5 rotate-90 text-gold md:hidden" aria-hidden="true" />
                </>
              ) : null}
            </div>
          )
        })}
      </div>
    </Figure>
  )
}
