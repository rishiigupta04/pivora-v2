/**
 * §21 / §23 — the approved logo lock-up is an immutable owner-supplied artwork
 * plate: PIVORA wordmark LEFT · hairline divider · split-ring P monogram RIGHT.
 * No vector file was supplied (BLOCKED, §29.8), so the site renders the exact
 * raster crop of the approved plate as a clearly-identified temporary preview.
 * The artwork is never redrawn, retraced, recoloured or typeset.
 */
export function LogoLockup({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src="/assets/brand/lockup-temp-preview.png"
      alt="Pivora Consulting"
      className={className}
      width={1170}
      height={276}
      decoding="async"
    />
  );
}

/** Monogram-only usage: corridor hub, favicon source. Same temporary-preview status. */
export function LogoMonogram({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src="/assets/brand/monogram-temp-preview.png"
      alt=""
      aria-hidden="true"
      className={className}
      width={260}
      height={260}
      decoding="async"
    />
  );
}
