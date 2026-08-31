import { Figure } from "@/components/figure/Figure"
import { cn } from "@/lib/utils"

const NODES = ["Platform OEM", "Pivora", "Enterprise / GCC's / GSI's", "Global Market"]

/**
 * Homepage §5.11 ecosystem flow (also §17.3 on /about):
 * Platform OEM → Pivora → Enterprise / GCC's / GSI's → Global Market.
 * Navy nodes, gold connector at the value point. 200ms scroll reveal,
 * vertical stack below 768px.
 */
export function EcosystemFlowFigure({ className }: { className?: string }) {
  return (
    <Figure
      id="ecosystem-flow"
      title="Ecosystem flow"
      altList={NODES}
      className={className}
    >
      <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-0">
        {NODES.map((n, i) => (
          <li key={n} className="flex items-center md:flex-1">
            <div
              className={cn(
                "flex-1 rounded-xl border px-5 py-4 text-center font-display text-[14px] font-bold",
                i === 1 ? "border-gold bg-navy text-gold" : "border-line bg-white text-navy"
              )}
            >
              {n}
            </div>
            {i < NODES.length - 1 ? (
              <>
                {/* gold connector at the value point (Pivora → ecosystem) */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "mx-1 hidden h-px w-8 shrink-0 md:block",
                    i === 1 ? "bg-gold" : "bg-navy/30"
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn("mx-auto block h-6 w-px md:hidden", i === 1 ? "bg-gold" : "bg-navy/30")}
                />
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </Figure>
  )
}
