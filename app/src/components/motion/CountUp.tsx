import { useEffect, useMemo, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"

/**
 * A number that counts from zero when it scrolls into view (§ Step 6).
 *
 * Takes the already-formatted string as `value` — "US$176.4B", "2,117", "~75%",
 * "₹5.6 crore" — and animates only the numeric run inside it, leaving prefixes,
 * suffixes and separators exactly as authored. No value is ever reformatted, so
 * a figure cannot be changed by the animation.
 *
 * CREDIBILITY GUARD. Every stat on this site is a sourced figure a buyer may
 * screenshot, so a half-counted number left on screen is a wrong number
 * published. Three rules enforce that it cannot happen:
 *
 *   1. The resting value is always the real figure. The count starts from zero
 *      only once the animation actually begins.
 *   2. A timer independent of requestAnimationFrame snaps to the authored
 *      string when the count should have finished. framer's animate() is
 *      rAF-driven, and rAF stalls in a background or throttled tab — which
 *      leaves the count frozen part-way and never fires onComplete.
 *   3. The full value is always present in the accessibility tree, so assistive
 *      technology never reads a partial figure.
 */

type Parsed =
  | { ok: false }
  | { ok: true; head: string; numeric: string; tail: string; target: number; decimals: number; grouped: boolean }

/** Split "US$176.4B" into prefix / number / suffix. Memoised: re-parsing on
 *  every render would give the animation effect a new dependency each pass and
 *  restart it forever. */
function parse(value: string): Parsed {
  const m = value.match(/^(\D*?)([\d][\d,]*(?:\.\d+)?)(.*)$/s)
  if (!m) return { ok: false }
  const numeric = m[2]
  return {
    ok: true,
    head: m[1],
    numeric,
    tail: m[3],
    target: Number(numeric.replace(/,/g, "")),
    decimals: numeric.includes(".") ? numeric.split(".")[1].length : 0,
    grouped: numeric.includes(","),
  }
}

export function CountUp({
  value,
  duration = 0.7,
  className,
}: {
  value: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduced = useReducedMotion()
  const p = useMemo(() => parse(value), [value])

  const willAnimate = p.ok && !reduced
  const [shown, setShown] = useState(() => (p.ok ? p.numeric : ""))

  useEffect(() => {
    if (!p.ok || !willAnimate || !inView) return

    const settle = () => setShown(p.numeric)

    const controls = animate(0, p.target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        const fixed = v.toFixed(p.decimals)
        setShown(
          p.grouped
            ? Number(fixed).toLocaleString("en-US", {
                minimumFractionDigits: p.decimals,
                maximumFractionDigits: p.decimals,
              })
            : fixed
        )
      },
      // Snap to the authored string so the rendered figure is byte-identical
      // to the source, never a re-formatted approximation of it.
      onComplete: settle,
    })

    // Backstop: rAF can stall (hidden tab, throttled renderer) and leave the
    // count frozen part-way with onComplete never firing. setTimeout is not
    // rAF-driven, so this always lands the true value.
    const backstop = window.setTimeout(() => {
      controls.stop()
      settle()
    }, duration * 1000 + 250)

    return () => {
      window.clearTimeout(backstop)
      controls.stop()
      // Never leave a partial figure behind if this unmounts mid-count.
      settle()
    }
  }, [p, willAnimate, inView, duration])

  if (!p.ok) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {/* The full value stays in the accessibility tree at all times; only the
          visual digits animate. */}
      <span aria-hidden="true">
        {p.head}
        {shown}
        {p.tail}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  )
}

export default CountUp
