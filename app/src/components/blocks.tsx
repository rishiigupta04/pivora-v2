import type { ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { LIFT, LIFT_SMALL, LIFT_TRANSITION, drawRule, rise, stagger } from "@/components/motion/variants";

/**
 * §6 seven-block skeleton renderers. Hubs use blocks 1, 3, 5, 7 only.
 *
 * These six render across roughly twelve pages, so the depth and motion
 * treatment here is what most of the site inherits: elevation on cards, a
 * staggered entrance per group, and a hover lift wherever a card is a link or
 * carries its own weight. Gold stays reserved — it marks the rule on a
 * left-edge accent and the outcome bullet, never a surface.
 */

/** Block 1 — Problem: handled by PageHero (eyebrow + headline + ≤45-word paragraph). */

/** Shared section heading used by blocks 3–6. */
function BlockHead({ eyebrow, title, intro }: { eyebrow: string; title?: string; intro?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0.07)}
    >
      <motion.p className="eyebrow" variants={rise}>
        {eyebrow}
      </motion.p>
      <motion.span
        aria-hidden="true"
        className="mt-3 block h-[3px] w-11 origin-left rounded-full bg-gold"
        variants={drawRule}
      />
      {title ? (
        <motion.h2 className="h-display mt-4 text-[26px] text-navy md:text-[34px]" variants={rise}>
          {title}
        </motion.h2>
      ) : null}
      {intro ? (
        <motion.p className="mt-4 max-w-3xl text-[15.5px] leading-[1.7] text-greytext" variants={rise}>
          {intro}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

/** Block 2 — Why it matters: the failure modes, as a muted left-edge rail. */
export function WhyItMatters({ items }: { items: string[] }) {
  return (
    <section className="band bg-white">
      <div className="container-site max-w-4xl">
        <BlockHead eyebrow="Why it matters" />
        <RevealGroup as="ul" className="mt-8 space-y-3" stagger={0.07}>
          {items.map((it) => (
            <RevealItem
              as="li"
              key={it.slice(0, 48)}
              className="group relative rounded-r-xl border-l-2 border-gold bg-softgrey/50 py-4 pl-5 pr-5 text-[16px] leading-[1.7] text-ink transition-colors duration-200 hover:bg-softgrey"
            >
              {it}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Block 3 — Approach: named work areas and what each produces. */
export function ApproachTable({ rows, intro }: { rows: { area: string; produces: string }[]; intro?: string }) {
  return (
    <section className="band bg-softgrey">
      <div className="container-site">
        <BlockHead eyebrow="Approach" title="What Pivora actually does" intro={intro} />
        <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {rows.map((r, i) => (
            <RevealItem key={r.area}>
              <motion.div
                className="card card-glow corner-tick relative h-full overflow-hidden p-6"
                whileHover={LIFT}
                transition={LIFT_TRANSITION}
              >
                <p className="font-display text-[11px] font-bold tracking-[0.16em] text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2.5 font-display text-[16.5px] font-bold leading-snug text-navy">{r.area}</p>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-greytext">{r.produces}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Block 4 — Operating-model fit: one row per BOS phase. */
export function BOSFit({ rows, note }: { rows: { phase: string; what: string }[]; note?: string }) {
  return (
    <section className="band bg-white">
      <div className="container-site max-w-4xl">
        <BlockHead eyebrow="Operating-model fit" title="Where this sits in Built–Operate–Sustain" />
        <RevealGroup className="mt-10 overflow-hidden rounded-xl border border-line shadow-e1" stagger={0.08}>
          {rows.map((r, i) => {
            const sustain = r.phase.toUpperCase().startsWith("SUSTAIN");
            return (
              <RevealItem
                key={r.phase}
                className={`group grid gap-1 px-6 py-5 transition-colors duration-200 md:grid-cols-[190px_1fr] md:gap-6 ${
                  i > 0 ? "border-t border-line" : ""
                } ${sustain ? "bg-gold-soft/45" : "bg-white hover:bg-softgrey/70"}`}
              >
                <p
                  className={`flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] ${
                    sustain ? "text-gold-dark" : "text-navy"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${sustain ? "bg-gold" : "bg-navy/40"}`}
                  />
                  {r.phase}
                </p>
                <p className="text-[14.5px] leading-[1.7] text-ink">{r.what}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
        {note ? <p className="mt-4 text-[13.5px] italic leading-relaxed text-greytext">{note}</p> : null}
      </div>
    </section>
  );
}

/** Block 5 — Outcomes: outcome categories, no invented numbers. */
export function OutcomeList({ items, intro }: { items: string[]; intro?: string }) {
  return (
    <section className="band bg-softgrey">
      <div className="container-site max-w-4xl">
        <BlockHead eyebrow="Outcomes" title="What the client should expect" intro={intro} />
        <RevealGroup as="ul" className="mt-10 grid gap-3 sm:grid-cols-2" stagger={0.055}>
          {items.map((o) => (
            <RevealItem as="li" key={o.slice(0, 48)}>
              <motion.div
                className="card card-glow flex h-full items-start gap-3.5 p-5"
                whileHover={LIFT_SMALL}
                transition={LIFT_TRANSITION}
              >
                <span
                  className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-gold ring-4 ring-gold/15"
                  aria-hidden="true"
                />
                <span className="text-[14.5px] leading-[1.65] text-ink">{o}</span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Block 6 — Proof: founder evidence, methodology transparency, or an approved profile. */
export function ProofBlock({ title = "Proof", children }: { title?: string; children: ReactNode }) {
  return (
    <section className="band bg-white">
      <div className="container-site max-w-4xl">
        <BlockHead eyebrow={title} />
        <Reveal>
          <div className="card ring-inset-hair relative mt-8 border-l-2 border-l-gold p-7 text-[15.5px] leading-[1.75] text-ink shadow-e1 md:p-9">
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
    <section className="grain relative overflow-hidden bg-navy-depth py-16 text-white md:py-20">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />
      <div className="container-site relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <motion.div
          className="h-px w-12 origin-left bg-gold md:hidden"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
        />
        <Reveal className="w-full">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
              <Link to={primaryTo} className="btn-primary">
                {primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.span>
            {sidewaysLabel && sidewaysTo ? (
              <Link to={sidewaysTo} className="text-link-light">
                {sidewaysLabel} <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

