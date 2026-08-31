import { useState } from "react"
import { Link } from "react-router"
import { ArrowRight, Building2, ChevronDown, Globe2, Users } from "lucide-react"
import data from "@/content/figures/gtm-engines.json"
import { Figure } from "@/components/figure/Figure"

const ICONS = { building: Building2, people: Users, globe: Globe2 } as const

/**
 * Who We Serve (owner-directed revision): the three GTMs from India —
 * India Enterprise's, GCC's, GSI's — as an interactive infographic.
 * Each engine card carries its headline metric and a sparkline; clicking it
 * expands a full perspective (context, today's metrics, the 4–5 year outlook,
 * and how Pivora works that GTM), every figure referenced to a credible named
 * source. Gold marks value/future points only, per §21.
 */

/** Sparkline: navy trend line, gold only at the projection endpoint. */
function Sparkline({ points, labels }: { points: number[]; labels: string[] }) {
  const W = 132
  const H = 40
  const PAD = 4
  const min = Math.min(...points)
  const max = Math.max(...points)
  const span = max - min || 1
  const px = (i: number) => PAD + (i * (W - 2 * PAD)) / (points.length - 1)
  const py = (v: number) => H - PAD - 8 - ((v - min) / span) * (H - 2 * PAD - 8)
  const path = points.map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ")
  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-10 w-full"
        role="img"
        aria-label={`Trend: ${labels.map((l, i) => `${l} ${points[i]}`).join(", ")}`}
      >
        <path
          d={path}
          fill="none"
          stroke="var(--pivora-navy)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((v, i) => (
          <circle
            key={i}
            cx={px(i)}
            cy={py(v)}
            r={i === points.length - 1 ? 3.5 : 2.5}
            fill={i === points.length - 1 ? "var(--pivora-gold)" : "var(--pivora-navy)"}
          />
        ))}
      </svg>
      <div className="mt-0.5 flex justify-between text-[10px] font-medium text-greytext">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  )
}

export function WhoWeServe({ className }: { className?: string }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const open = data.engines.find((e) => e.id === openId)

  return (
    <Figure
      id="who-we-serve"
      title={data.title}
      altList={data.engines.map(
        (e) =>
          `${e.segment} (${e.role}): ${e.headline.stat} — ${e.headline.label}. Trend ${e.trend.labels
            .map((l, i) => `${l}: ${e.trend.points[i]}`)
            .join(", ")}. ${e.what}`
      )}
      className={className}
    >
      {/* Engine cards — each expands its full GTM perspective */}
      <div className="grid gap-4 sm:grid-cols-3 md:gap-5" role="list">
        {data.engines.map((e) => {
          const Icon = ICONS[e.icon as keyof typeof ICONS]
          const active = openId === e.id
          return (
            <button
              key={e.id}
              type="button"
              role="listitem"
              aria-expanded={active}
              aria-controls="gtm-detail"
              onClick={() => setOpenId(active ? null : e.id)}
              className={`card group flex flex-col px-5 py-6 text-left transition-colors hover:border-navy/25 ${
                active ? "border-gold bg-gold-soft/40" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                    active ? "bg-gold text-navy" : "bg-navy text-white"
                  }`}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-head text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">
                    {e.segment}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-dark">
                    {e.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 font-display text-[30px] font-bold leading-none tracking-tight text-navy">{e.headline.stat}</p>
              <p className="mt-1 min-h-8 text-[12px] leading-snug text-greytext">{e.headline.label}</p>
              <div className="mt-3">
                <Sparkline points={e.trend.points} labels={e.trend.labels} />
              </div>
              <p className="mt-4 flex items-center gap-1.5 border-t border-line pt-3 text-[12.5px] font-semibold text-navy">
                {active ? "Close the perspective" : "Explore this GTM"}
                <ChevronDown
                  className={`h-3.5 w-3.5 text-gold-dark transition-transform ${active ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </p>
            </button>
          )
        })}
      </div>

      {/* Detail panel — the full perspective for the selected GTM */}
      {open ? (
        <div
          key={open.id}
          id="gtm-detail"
          role="region"
          aria-label={`${open.segment} — detailed perspective`}
          className="mt-5 rounded-2xl border border-line bg-white p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{open.role}</p>
              <h3 className="mt-3 font-head text-2xl font-semibold tracking-tight text-navy md:text-[28px]">
                {open.segment}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">{open.what}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-greytext">{open.why}</p>
              <p className="mt-5 border-l-2 border-gold pl-4 text-[14.5px] font-medium leading-relaxed text-navy">
                {open.pivora}
              </p>
              <p className="mt-5">
                <Link to={open.link.to} className="text-link">
                  {open.link.label} <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-greytext">
                Where it stands today
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {open.today.map((t) => (
                  <div key={t.note} className="rounded-lg border border-line bg-softgrey/60 px-4 py-3">
                    <p className="font-display text-[17px] font-bold text-navy">{t.stat}</p>
                    <p className="mt-1 text-[11px] leading-snug text-greytext">{t.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-greytext">
                The next 4–5 years
              </p>
              <ul className="mt-3 space-y-2.5">
                {open.outlook.map((o) => (
                  <li key={o.slice(0, 40)} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-3 text-[11px] leading-relaxed text-greytext">
                Sources: {open.sources}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* The India base — what the three engines stand on */}
      <div className="mt-5 rounded-xl bg-navy px-6 py-5 text-center">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
          One base. Three engines.
        </p>
        <p className="mt-1.5 font-head text-xl font-semibold text-white md:text-2xl">
          India — the world’s fourth-largest economy, <span className="text-gold">powering all three GTMs.</span>
        </p>
      </div>
    </Figure>
  )
}
