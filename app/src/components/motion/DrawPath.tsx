import { motion, useReducedMotion, type SVGMotionProps } from "framer-motion"

/**
 * An SVG path that draws itself when it scrolls into view (§ Step 6).
 *
 * The highest-leverage motion on the site: a flow, ribbon or curve that draws
 * left-to-right tells the reader which direction to read in, which a
 * fully-formed path cannot.
 *
 * `order` staggers sibling paths so a bundle of ribbons draws as a sequence.
 *
 * Reduced motion is handled here rather than by the root MotionConfig:
 * `reducedMotion="user"` suppresses transform and layout animations, and
 * `pathLength` is neither, so it would keep drawing. Under the preference the
 * path renders complete and static.
 */
export function DrawPath({
  d,
  duration = 0.6,
  order = 0,
  stagger = 0.06,
  delay = 0,
  ...rest
}: {
  d: string
  /** Seconds. Kept at or under 0.6 per the motion budget. */
  duration?: number
  /** Index among sibling paths; multiplied by `stagger`. */
  order?: number
  stagger?: number
  delay?: number
} & Omit<SVGMotionProps<SVGPathElement>, "d">) {
  const reduced = useReducedMotion()
  if (reduced) return <motion.path d={d} {...rest} />
  return (
    <motion.path
      d={d}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        pathLength: { duration, ease: [0.33, 1, 0.68, 1], delay: delay + order * stagger },
        opacity: { duration: 0.14, delay: delay + order * stagger },
      }}
      {...rest}
    />
  )
}

/**
 * A dot, marker or terminus that appears once the path reaching it has drawn.
 * Pass the same `order`/`delay` the path used, plus its duration, so the marker
 * lands on arrival rather than ahead of it.
 */
export function DrawDot({
  after = 0.6,
  cx,
  cy,
  ...rest
}: {
  /** Seconds to wait — normally the drawing path's delay + duration. */
  after?: number
} & SVGMotionProps<SVGCircleElement>) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      transition={{ duration: 0.28, delay: after, ease: [0.34, 1.4, 0.64, 1] }}
      {...rest}
    />
  )
}

export default DrawPath
