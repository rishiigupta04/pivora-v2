import { Link } from "react-router"
import { ArrowRight, Check } from "lucide-react"
import data from "@/content/figures/corridor.json"
import { Figure } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

/**
 * Figure 2-2 · The Two-Way Growth Corridor (§20.2).
 * Two cards flanking a central hub carrying the approved P monogram;
 * tapered multi-line SVG ribbons converge on the hub — navy from the
 * left, gold from the right. Mobile: vertical stack, single connector.
 * Data table in corridor.json is the build source of truth.
 */
export function CorridorFigure({ className }: { className?: string }) {
  const [left, right] = data.corridors
  return (
    <Figure
      id={data.id}
      title={data.title}
      caption={data.caption}
      altList={data.corridors.map(
        (c) => `${c.label} (${c.role}): ${c.bullets.join("; ")}`
      )}
      className={className}
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
        <CorridorCard c={left} tone="navy" />
        {/* Hub + ribbons */}
        <div className="relative flex items-center justify-center py-2 lg:w-[240px]">
          {/* Desktop ribbons */}
          <svg
            className="absolute inset-y-0 left-0 hidden h-full w-1/2 lg:block"
            viewBox="0 0 120 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d={`M0 ${52 + i * 19} C 60 ${52 + i * 19}, 78 100, 118 100`}
                fill="none"
                stroke="var(--pivora-navy)"
                strokeWidth={1.1}
                opacity={0.16 + i * 0.11}
              />
            ))}
          </svg>
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 lg:block"
            viewBox="0 0 120 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d={`M120 ${52 + i * 19} C 60 ${52 + i * 19}, 42 100, 2 100`}
                fill="none"
                stroke="var(--pivora-gold)"
                strokeWidth={1.1}
                opacity={0.16 + i * 0.11}
              />
            ))}
          </svg>
          {/* Mobile vertical connector */}
          <div
            className="absolute inset-x-0 top-0 mx-auto h-full w-px bg-gradient-to-b from-navy via-line to-gold lg:hidden"
            aria-hidden="true"
          />
          {/* Hub: approved P monogram (temporary preview asset — vector pending §29.8) */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-line bg-white shadow-card lg:h-28 lg:w-28">
            <span className="absolute inset-1 rounded-full border border-gold/50" aria-hidden="true" />
            <img
              src="/assets/brand/monogram-temp-preview.png"
              alt="Pivora monogram"
              className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
              loading="lazy"
            />
          </div>
        </div>
        <CorridorCard c={right} tone="gold" />
      </div>
    </Figure>
  )
}

type Corridor = (typeof data.corridors)[number]

function CorridorCard({ c, tone }: { c: Corridor; tone: "navy" | "gold" }) {
  const navy = tone === "navy"
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-7 md:p-8",
        navy ? "border-navy bg-navy text-white" : "border-gold bg-gold-soft text-ink"
      )}
    >
      <p className={cn("font-head text-[19px] font-semibold tracking-tight", navy ? "text-white" : "text-navy")}>
        {c.label}
      </p>
      <p className={cn("mt-1 text-[13.5px] font-semibold", navy ? "text-white/70" : "text-greytext")}>{c.role}</p>
      <ul className="mt-5 space-y-2.5">
        {c.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[14.5px] leading-snug">
            <span
              className={cn(
                "mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border",
                navy ? "border-gold/70 text-gold" : "border-gold text-gold-dark"
              )}
              aria-hidden="true"
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={navy ? "text-white/85" : "text-ink"}>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-2">
        <Link to={c.route} className={navy ? "text-link-light" : "text-link"}>
          {c.linkLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
