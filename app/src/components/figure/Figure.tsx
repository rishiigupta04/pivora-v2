import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/Reveal"

/**
 * Shared figure wrapper (Master Brief v8.1 §20 global rules):
 * every figure is native HTML/SVG, carries a <figcaption>, and ships an
 * ordered-list text alternative so the figure is not the only route to
 * the content. No figure animates on load; line reveals fire on scroll
 * (200ms) and are disabled under prefers-reduced-motion.
 */
export function Figure({
  id,
  title,
  caption,
  altList,
  children,
  className,
}: {
  id: string
  title: string
  caption?: string
  /** Ordered text alternative conveying the same information as the visual. */
  altList: string[]
  children: ReactNode
  className?: string
}) {
  return (
    <Reveal>
      <figure id={id} aria-label={title} className={cn("scroll-mt-28", className)}>
        {children}
        {/* Text alternative: same information as an ordered list */}
        <ol className="sr-only">
          {altList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        {caption ? (
          <figcaption className="mt-6 border-t border-line pt-4 text-[12.5px] leading-relaxed text-greytext">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  )
}

/** Small numbered navy circle used across figure components. */
export function NodeCircle({
  label,
  tone = "navy",
  size = "md",
}: {
  label: string
  tone?: "navy" | "gold" | "open-gold"
  size?: "sm" | "md" | "lg"
}) {
  const s = size === "sm" ? "h-9 w-9 text-[13px]" : size === "lg" ? "h-14 w-14 text-[19px]" : "h-11 w-11 text-[15px]"
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-head font-semibold",
        s,
        tone === "navy" && "bg-navy text-white",
        tone === "gold" && "bg-gold text-navy",
        tone === "open-gold" && "border-2 border-gold bg-white text-navy"
      )}
    >
      {label}
    </span>
  )
}

export default Figure
