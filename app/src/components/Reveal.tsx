import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Scroll reveal — fade + small upward translate, fires once at ~15% in view.
 *
 * Same trigger feel as the IntersectionObserver version it replaces (once,
 * threshold 0.15), so *when* things appear is unchanged; only *how* is. The
 * app is wrapped in <MotionConfig reducedMotion="user">, so under
 * prefers-reduced-motion this collapses to an instant, static state with no
 * per-component handling.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.42, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Reveal a group as a sequence rather than all at once. Wrap the container in
 * <RevealGroup> and each child in <RevealItem>; children inherit the trigger
 * from the parent and offset by `stagger`.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode
  className?: string
  /** Seconds between each child's entrance. */
  stagger?: number
  /** Seconds before the first child starts. */
  delay?: number
  as?: "div" | "ul" | "ol"
}) {
  const Comp = motion[As]
  return (
    <Comp
      className={cn(className)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Comp>
  )
}

/** One child of a <RevealGroup>. Total travel stays under 600ms. */
export function RevealItem({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "li"
}) {
  const Comp = motion[As]
  return (
    <Comp
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 14 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </Comp>
  )
}
