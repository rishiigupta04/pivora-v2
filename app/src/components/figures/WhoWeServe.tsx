import { useState } from "react"
import { Link } from "react-router"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Building2, ChevronDown, Globe2, Users } from "lucide-react"
import data from "@/content/figures/gtm-engines.json"
import { Figure } from "@/components/figure/Figure"
import { CountUp } from "@/components/motion/CountUp"
import { DrawPath } from "@/components/motion/DrawPath"

const ICONS = { building: Building2, people: Users, globe: Globe2 } as const

/**
 * Who We Serve (owner-directed revision): the three GTMs from India —
 * India Enterprise's, GCC's, GSI's — as an interactive infographic.
 * Each engine card carries its headline metric and a sparkline; clicking it
 * expands a full perspective (context, today's metrics, the 4–5 year outlook,
 * and how Pivora works that GTM), every figure referenced to a credible named
 * source. Gold marks value/future points only, per §21.
 *
 * Motion (§ Step 6): headline stats count up from zero on scroll, sparklines
 * draw left to right so the trend direction reads before the numbers do, cards
 * lift on hover, and the detail panel animates its height open and closed
 * rather than snapping.
 */

/** Sparkline: navy trend line, gold only at the projection endpoint. */
function Sparkline({ id, points, labels }: { id: string; points: number[]; labels: string[] }) {
  const gradId = `spark-fade-${id}`
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
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--pivora-navy)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--pivora-navy)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <DrawPath
          d={path}
          duration={0.55}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((v, i) => {
          const isLast = i === points.length - 1
          return (
            <motion.circle
              key={i}
              cx={px(i)}
              cy={py(v)}
              r={isLast ? 3.5 : 2.5}
              fill={isLast ? "var(--pivora-gold)" : "var(--pivora-navy)"}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              style={{ transformOrigin: `${px(i)}px ${py(v)}px` }}
              transition={{ duration: 0.24, delay: 0.1 + (i / (points.length - 1)) * 0.45 }}
            />
          )
        })}
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
  // Height is neither a transform nor a layout animation, so the root
  // MotionConfig does not suppress it. Under the preference the panel appears
  // at full height with only a short fade.
  const reduced = useReducedMotion()

  return (
    <Figure
      id="who-we-serve"
      title={data.title}
      caption={data.caption}
      altList={data.engines.map(
        (e) =>
          `${e.segment} (${e.role}): ${e.headline.stat} — ${e.headline.label}. Trend ${e.trend.labels
            .map((l, i) => `${l}: ${e.trend.points[i]}`)
            .join(", ")}. ${e.what}`
      )}
      className={className}
    >
      {/* Engine cards — each expands its full GTM perspective */}
      <motion.div
        className="grid gap-4 sm:grid-cols-3 md:gap-5"
        role="list"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.1 } } }}
      >
        {data.engines.map((e) => {
          const Icon = ICONS[e.icon as keyof typeof ICONS]
          const active = openId === e.id
          return (
            <motion.button
              key={e.id}
              type="button"
              role="listitem"
              aria-expanded={active}
              aria-controls="gtm-detail"
              onClick={() => setOpenId(active ? null : e.id)}
              className={`card group flex flex-col px-5 py-6 text-left transition-[border-color,background-color,box-shadow] duration-200 hover:border-navy/25 ${
                active ? "border-gold bg-gold-soft/40 shadow-e3" : "hover:shadow-e2"
              }`}
              variants={{
                hidden: { opacity: 0, y: 16 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
              <CountUp
                value={e.headline.stat}
                className="stat-figure mt-5 text-[34px] md:text-[38px]"
              />
              <p className="mt-1 min-h-8 text-[12px] leading-snug text-greytext">{e.headline.label}</p>
              <div className="mt-3">
                <Sparkline id={e.id} points={e.trend.points} labels={e.trend.labels} />
              </div>
              <p className="mt-4 flex items-center gap-1.5 border-t border-line pt-3 text-[12.5px] font-semibold text-navy">
                {active ? "Close the perspective" : "Explore this GTM"}
                <ChevronDown
                  className={`h-3.5 w-3.5 text-gold-dark transition-transform duration-200 ${active ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </p>
            </motion.button>
          )
        })}
      </motion.div>

      {/* Detail panel — the full perspective for the selected GTM. Height
          animates open and closed rather than snapping. */}
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key={open.id}
            id="gtm-detail"
            role="region"
            aria-label={`${open.segment} — detailed perspective`}
            className="overflow-hidden"
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.22 },
            }}
          >
            <div className="mt-5 rounded-2xl border border-line bg-white p-6 shadow-e2 md:p-8">
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
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* The India base — what the three engines stand on */}
      <div className="grain relative mt-5 overflow-hidden rounded-xl bg-navy-depth px-6 py-6 text-center shadow-e2">
        <p className="relative font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
          One base. Three engines.
        </p>
        <p className="relative mt-2 font-head text-xl font-semibold leading-snug text-white md:text-[26px]">
          India — the world’s fourth-largest economy, <span className="text-gold">powering all three GTMs.</span>
        </p>
      </div>
    </Figure>
  )
}
