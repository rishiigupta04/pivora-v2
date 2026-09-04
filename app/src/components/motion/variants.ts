import type { Variants } from "framer-motion"

/**
 * Shared motion vocabulary (§ Step 6).
 *
 * One easing curve and one set of entrance variants across the site, so
 * everything moves with the same hand. Nothing here runs longer than 450ms,
 * and reduced motion is handled once by the root <MotionConfig>.
 */

/** The site's easing. A gentle decelerate — arrives, does not bounce. */
export const EASE = [0.22, 1, 0.36, 1] as const

/** A sharper decelerate for strokes and rules that draw rather than move. */
export const EASE_DRAW = [0.33, 1, 0.68, 1] as const

/** Parent that releases its children one after another. */
export function stagger(children = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    shown: { transition: { staggerChildren: children, delayChildren: delay } },
  }
}

/** Fade up. The default entrance for text and cards. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 14 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

/** A shorter rise, for items inside a dense group. */
export const riseTight: Variants = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE } },
}

/** Horizontal rule or accent bar that draws out from its left edge. */
export const drawRule: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  shown: { scaleX: 1, opacity: 1, transition: { duration: 0.42, ease: EASE_DRAW } },
}

/** Vertical spine that draws downward. */
export const drawSpine: Variants = {
  hidden: { scaleY: 0 },
  shown: { scaleY: 1, transition: { duration: 0.5, ease: EASE_DRAW } },
}

/** Standard hover lift for a card. Pair with `shadow-e1 hover:shadow-e2`. */
export const LIFT = { y: -4 } as const
export const LIFT_SMALL = { y: -3 } as const
export const LIFT_TRANSITION = { duration: 0.2, ease: EASE } as const
