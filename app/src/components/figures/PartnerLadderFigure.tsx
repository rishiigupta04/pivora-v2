import data from "@/content/figures/partner-ladder.json"
import { Figure } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

/**
 * Figure 10-1 · Partner Maturity Ladder (§20.7).
 * Five ascending blocks L0 → L4 stepping muted grey-blue → navy → gold,
 * with the partner scorecard rendered beneath.
 */
export function PartnerLadderFigure({ className }: { className?: string }) {
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.caption}
      altList={data.levels.map((l) => `${l.level} ${l.name}: ${l.definition}`)}
      className={className}
    >
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
        {data.levels.map((l, i) => (
          <li
            key={l.level}
            className={cn(
              "flex flex-col rounded-xl border p-5",
              i === 4
                ? "border-gold bg-gold text-navy"
                : i === 3
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-navy",
              // ascending step
              i === 1 && "lg:mb-4",
              i === 2 && "lg:mb-8",
              i === 3 && "lg:mb-12",
              i === 4 && "lg:mb-16"
            )}
            style={i < 4 && i > 0 ? undefined : undefined}
          >
            <p
              className={cn(
                "font-head text-[20px] font-semibold",
                i === 4 ? "text-navy" : i === 3 ? "text-gold" : "text-navy"
              )}
            >
              {l.level}
            </p>
            <p className={cn("mt-1 font-head text-[13px] font-semibold uppercase tracking-[0.1em]", i >= 3 ? "text-current" : "text-navy")}>
              {l.name}
            </p>
            <p className={cn("mt-2 text-[12.5px] leading-relaxed", i === 4 ? "text-navy/80" : i === 3 ? "text-white/75" : "text-greytext")}>
              {l.definition}
            </p>
          </li>
        ))}
      </ol>
      {/* Partner scorecard (§20.7) */}
      <div className="mt-6 rounded-xl border border-line bg-softgrey px-5 py-4">
        <p className="font-head text-[11.5px] font-semibold uppercase tracking-[0.16em] text-navy">
          Partner scorecard
        </p>
        <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5">
          {data.scorecard.map((s) => (
            <li key={s} className="flex items-center gap-2 text-[12.5px] text-greytext">
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Figure>
  )
}
