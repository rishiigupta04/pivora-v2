import data from "@/content/figures/platform-ramp.json"
import { Figure } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

/**
 * Figure 14-3 · Platform Ramp 0 → 1 → 3 → 10 → Global (§20.6).
 * Five gated stages on a rising baseline; Stage 0 renders as an open
 * circle with a gold ring — a decision point where the answer can be no.
 */
export function PlatformRampFigure({ className }: { className?: string }) {
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.caption}
      altList={data.stages.map((s) => `${s.stage} · ${s.label}: ${s.question} — ${s.focus}`)}
      className={className}
    >
      <ol className="grid gap-4 md:grid-cols-5 md:items-end">
        {data.stages.map((s, i) => {
          const gate = i === 0
          const global_ = i === data.stages.length - 1
          return (
            <li key={s.stage} className="flex flex-col">
              <div
                className={cn(
                  "card flex h-full flex-col p-5",
                  global_ && "border-gold",
                  // rising baseline: staggered top margin on desktop
                  i === 1 && "md:mt-6",
                  i === 2 && "md:mt-10",
                  i === 3 && "md:mt-14",
                  i === 4 && "md:mt-[4.5rem]"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full font-head text-[13px] font-semibold",
                    gate
                      ? "border-2 border-gold bg-white text-navy"
                      : global_
                        ? "bg-gold text-navy"
                        : "bg-navy text-white"
                  )}
                  aria-hidden="true"
                >
                  {s.stage === "Global" ? "G" : s.stage}
                </span>
                <p className="mt-3 font-head text-[14.5px] font-semibold uppercase tracking-[0.06em] text-navy">
                  {s.label}
                </p>
                <p className="mt-1.5 text-[13px] font-semibold leading-snug text-ink">{s.question}</p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-greytext">{s.focus}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Figure>
  )
}
