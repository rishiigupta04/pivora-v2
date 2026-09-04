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
 * Under prefers-reduced-motion it renders the final value immediately.
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
  duration = 0.9,
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

  // The resting value is always the real figure, never zero. The count starts
  // from zero only once the animation actually begins, so a stat can never be
  // left reading "0" — not under reduced motion, not if the observer never
  // fires, not in a screenshot taken before the element scrolls in.
  const willAnimate = p.ok && !reduced
  const [shown, setShown] = useState(() => (p.ok ? p.numeric : ""))

  useEffect(() => {
    if (!p.ok || !willAnimate || !inView) return
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
      onComplete: () => setShown(p.numeric),
    })
    return () => controls.stop()
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
