import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ROLES } from "@/content/roles";

/**
 * Careers (KIMI master prompt §13–15): "Build Enterprise Growth With Us" —
 * four specialist roles, each with a working Apply flow. The honesty rule is
 * unchanged: no invented team size, comp or location claims; exact scope and
 * terms are shared at the intro conversation.
 */
const WHY_BLOCKS = [
  { name: "Proximity to the deal", line: "Specialists sit inside Built–Operate–Sustain engagements, close to the revenue their work produces." },
  { name: "Small team, real ownership", line: "A small senior bench means scope is wide and ownership is real. Team size is stated honestly once fixed, not implied." },
  { name: "Selectivity cuts both ways", line: "The same qualification discipline Pivora applies to clients applies to hiring." },
  { name: "Founder-led, not founder-only", line: "Direct access to the founder and to client-facing work from the start." },
];

const HIRING_STEPS = [
  "Intro conversation with the team, 30 minutes, fit and mutual interest",
  "Working session or technical discussion tied to a real problem, not a whiteboard puzzle",
  "Conversation with Subrato",
  "Decision and offer",
];

export default function Careers() {
  return (
    <>
      {/* Hero — §13 headline and message */}
      <PageHero eyebrow="Careers" title="Build Enterprise Growth With Us.">
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
          Pivora is building a small, senior bench across four specialist disciplines — solution sales, pre-sales and
          solution consulting, senior solution architecture, and business value consulting. The common thread is
          measurable customer value, not billable hours. If you have built enterprise GTM from the ground up and want
          your work to sit inside live engagements, this is that kind of team.
        </p>
      </PageHero>

      {/* Why this is a different kind of build */}
      <Section eyebrow="Why join Pivora" title="A different kind of build">
        <div className="grid gap-4 md:grid-cols-2">
          {WHY_BLOCKS.map((b) => (
            <Reveal key={b.name}>
              <div className="card h-full p-6">
                <p className="font-display text-lg font-bold text-navy">{b.name}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-greytext">{b.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Open roles — §14: four specialist role cards, each with a working Apply */}
      <Section
        id="open-roles"
        eyebrow="Open Roles"
        title="Four disciplines. One value engine."
        tone="grey"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {ROLES.map((r) => (
            <Reveal key={r.slug}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-white p-6 md:p-7">
                <p className="font-display text-xl font-bold leading-snug text-navy">{r.title}</p>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] font-semibold text-greytext">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" /> {r.location}
                  </span>
                  <span>{r.experience}</span>
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink">{r.summary}</p>
                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-greytext">
                    Key responsibilities
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {r.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-greytext">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 rounded-lg bg-softgrey/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-greytext">
                    Preferred background
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-greytext">{r.background}</p>
                </div>
                <p className="mt-auto pt-6">
                  <Link to={`/careers/apply?role=${r.slug}`} className="btn-primary">
                    Apply <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-3xl text-[13.5px] leading-relaxed text-greytext">
            Exact scope, location mix and terms are shared at the intro conversation — published honestly once fixed,
            never implied. Between openings, speculative applications are welcome through the same form.
          </p>
        </Reveal>
      </Section>

      {/* How we work — summary of the delivery context candidates join */}
      <Section eyebrow="How We Work" title="What you would work inside">
        <Reveal>
          <p className="max-w-3xl text-[16px] leading-relaxed text-ink">
            Engagements run as dedicated client pods — sales, presales, solution architecture and training — under one
            governance layer, backed by a shared senior bench. BUILD is senior-heavy and short; OPERATE is the pod’s
            steady state on live pursuits; SUSTAIN keeps the engine strengthening and expanding — a continuing
            partnership with the client, never a handover.{" "}
            <Link to="/how-we-work/delivery-model" className="text-link">
              See the delivery model <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
      </Section>

      {/* Hiring process — §18.5 draft */}
      <Section eyebrow="Hiring Process" title="How we hire" tone="grey">
        <Reveal>
          <ol className="grid gap-3 md:grid-cols-4">
            {HIRING_STEPS.map((s, i) => (
              <li key={s} className="rounded-xl border border-line bg-white p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy font-display text-[13px] font-bold text-gold">
                  {i + 1}
                </span>
                <p className="mt-3 text-[14px] font-medium leading-snug text-ink">{s}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link to="/careers#open-roles" className="btn-primary">
            See Open Roles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/how-we-work" className="text-link-light">
            See how engagements run <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
