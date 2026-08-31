import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

/** §6 seven-block skeleton renderers. Hubs use blocks 1, 3, 5, 7 only. */

/** Block 1 — Problem: handled by PageHero (eyebrow + headline + ≤45-word paragraph). */

/** Block 2 — Why it matters: bullets, or a short paragraph plus a figure (rendered by the page). */
export function WhyItMatters({ items }: { items: string[] }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-site max-w-4xl">
        <Reveal>
          <p className="eyebrow">Why it matters</p>
          <ul className="mt-6 space-y-4">
            {items.map((it) => (
              <li key={it.slice(0, 48)} className="flex items-start gap-3 border-l-2 border-gold pl-4 text-[16px] leading-relaxed text-ink">
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Block 3 — Approach: named work areas and what each produces. */
export function ApproachTable({ rows, intro }: { rows: { area: string; produces: string }[]; intro?: string }) {
  return (
    <section className="bg-softgrey py-14 md:py-20">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Approach</p>
          <h2 className="mt-3 font-head text-2xl font-semibold tracking-tight text-navy md:text-3xl">What Pivora actually does</h2>
          {intro ? <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-greytext">{intro}</p> : null}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rows.map((r) => (
              <div key={r.area} className="card p-5">
                <p className="font-display text-[16px] font-bold leading-snug text-navy">{r.area}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-greytext">{r.produces}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Block 4 — Operating-model fit: one row per BOS phase. */
export function BOSFit({ rows, note }: { rows: { phase: string; what: string }[]; note?: string }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-site max-w-4xl">
        <Reveal>
          <p className="eyebrow">Operating-model fit</p>
          <h2 className="mt-3 font-head text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Where this sits in Built–Operate–Sustain
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-line">
            {rows.map((r, i) => (
              <div key={r.phase} className={`grid gap-1 px-5 py-4 md:grid-cols-[180px_1fr] md:gap-6 ${i > 0 ? "border-t border-line" : ""} ${i % 2 === 1 ? "bg-softgrey/60" : "bg-white"}`}>
                <p className={`text-[12px] font-bold uppercase tracking-[0.14em] ${r.phase.startsWith("SUSTAIN") ? "text-gold-dark" : "text-navy"}`}>
                  {r.phase}
                </p>
                <p className="text-[14.5px] leading-relaxed text-ink">{r.what}</p>
              </div>
            ))}
          </div>
          {note ? <p className="mt-4 text-[13.5px] italic leading-relaxed text-greytext">{note}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}

/** Block 5 — Outcomes: outcome categories, no invented numbers. */
export function OutcomeList({ items, intro }: { items: string[]; intro?: string }) {
  return (
    <section className="bg-softgrey py-14 md:py-20">
      <div className="container-site max-w-4xl">
        <Reveal>
          <p className="eyebrow">Outcomes</p>
          <h2 className="mt-3 font-head text-2xl font-semibold tracking-tight text-navy md:text-3xl">What the client should expect</h2>
          {intro ? <p className="mt-3 text-[15px] leading-relaxed text-greytext">{intro}</p> : null}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((o) => (
              <li key={o.slice(0, 48)} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span className="text-[14.5px] leading-relaxed text-ink">{o}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Block 6 — Proof: founder evidence, methodology transparency, or an approved profile. Never more than genuinely available. */
export function ProofBlock({ title = "Proof", children }: { title?: string; children: ReactNode }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-site max-w-4xl">
        <Reveal>
          <p className="eyebrow">{title}</p>
          <div className="mt-5 rounded-xl border border-line border-l-2 border-l-gold bg-white p-6 text-[15px] leading-relaxed text-ink md:p-8">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Block 7 — CTA: one primary button + one sideways text link (§20.4 wording is authoritative). */
export function CTABlock({
  primaryLabel = "Start a Conversation",
  primaryTo = "/contact",
  sidewaysLabel,
  sidewaysTo,
}: {
  primaryLabel?: string;
  primaryTo?: string;
  sidewaysLabel?: string;
  sidewaysTo?: string;
}) {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <div className="container-site flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="h-px w-12 bg-gold md:hidden" aria-hidden="true" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link to={primaryTo} className="btn-primary">
            {primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {sidewaysLabel && sidewaysTo ? (
            <Link to={sidewaysTo} className="text-link-light">
              {sidewaysLabel} <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
