import { Link } from "react-router";
import { ArrowRight, Check, Clock, MapPin, Target, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { CorridorFigure } from "@/components/figures/CorridorFigure";
import { WhoWeServe } from "@/components/figures/WhoWeServe";
import { EcosystemFlowFigure } from "@/components/figures/EcosystemFlowFigure";
import sources from "@/content/sources.json";
import motion from "@/content/figures/bos-motion.json";
import BOSMotionFigure from "@/components/figures/BOSMotionFigure";
import LandExpandFigure from "@/components/figures/LandExpandFigure";

/**
 * Homepage — §5.1 section order (01–15), §5.14 acceptance conditions.
 * 01 Header / 15 Footer live in the layout; this file renders 02–14.
 */

const CAPABILITIES = [
  { n: "01", label: "Market Entry & GTM", line: "Enter with a commercial architecture, not a country hire.", to: "/what-we-solve/market-entry-gtm" },
  { n: "02", label: "Enterprise Revenue Acceleration", line: "Turn early wins into a repeatable motion.", to: "/what-we-solve/revenue-acceleration" },
  { n: "03", label: "GCC's & GSI's Growth", line: "Ecosystem as a multiplier, not a logo wall.", to: "/what-we-solve/gcc-gsi-growth" },
  { n: "04", label: "India → Global", line: "Use India proof to sequence global entry.", to: "/what-we-solve/india-to-global" },
  { n: "05", label: "Selective AI Value Wedges", line: "AI only where it strengthens the platform.", to: "/what-we-solve/niche-ai" },
];

const QUALIFICATION_LINES = [
  "A differentiated Enterprise B2B platform, not a commodity product",
  "A material business problem with a measurable outcome attached",
  "Executive commitment to the market, not exploratory interest",
];

const INSIGHT_PILLARS = [
  "India Platform GTM",
  "GCC's",
  "GSI's",
  "Platform Growth",
  "Built–Operate–Sustain",
  "India → Global",
];

/* §5.12 — founder evidence, verified register (§26 rows 1–5) */
const FOUNDER_EVIDENCE = [
  "Ground-zero India builds across five enterprise platforms: BMC Software, AppDynamics, Magic Software, Sprinklr, OutSystems",
  "Now driving ground-zero GTM for UnifyApps: Agentic AI for India enterprises and GCC's",
  "KPMG in India × OutSystems alliance for low-code digital solutions, 2023",
  "Published CX and generative-AI commentary as Vice President, India Market, Sprinklr, 2023–2025",
];

export default function Home() {
  return (
    <>
      {/* 02 · Hero — §5.3. Bridge artwork: owner-approved exception to the
          no-stock rule (AI-generated; licensing to be confirmed by owner). */}
      <section className="bg-softgrey pb-8 pt-6 md:pb-10">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-2xl bg-navy">
            <div className="absolute inset-0" aria-hidden="true">
              <img src="/assets/hero-bridge.jpg" alt="" className="h-full w-full object-cover object-[70%_center] opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" />
            </div>
            <div className="relative grid gap-10 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[55%_45%] lg:py-20">
              <div>
                <p className="eyebrow-on-dark">Enterprise B2B Platform Growth · India</p>
                <h1 className="mt-5 font-head text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
                  Enterprise B2B Platforms. Built for <span className="text-gold">Growth in India.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                  Pivora builds enterprise traction through focused GTM execution, GCC's and GSI's leverage, and a hands-on
                  operating model. India is both a market and a launchpad to global growth.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/growth-paths" className="btn-primary">
                    Build the Growth Path <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link to="/how-we-work" className="btn-outline-light">
                    See How We Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Credential strip — §5.4: four items, thin dividers, navy line icons, no numbers */}
      <section aria-label="Credentials" className="border-b border-line bg-white">
        <div className="container-site grid grid-cols-2 gap-y-6 py-8 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {[
            { icon: Clock, text: "Three decades of Enterprise B2B" },
            { icon: MapPin, text: "Ground-zero India GTM builds" },
            { icon: Users, text: "Enterprise + GCC's + GSI's ecosystem" },
            { icon: Target, text: "Outcome-led operating model" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 lg:justify-center lg:px-6">
              <Icon className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[14px] font-semibold leading-snug text-navy">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 · The Growth Problem — §5.5 statement card, then the detailed
          Build–Operate–Sustain motion (owner-directed depth + Figure 5-1). */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <div className="card mx-auto max-w-4xl p-8 text-center md:p-12">
              <p className="eyebrow justify-center">The Growth Problem</p>
              <h2 className="mt-4 font-head text-3xl font-semibold leading-[1.15] tracking-tight text-navy md:text-4xl">
                A strong platform does not automatically become repeatable enterprise revenue.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-greytext">
                Pivora closes the gap between market-entry intent, commercial traction, and a client-owned growth engine.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <p className="eyebrow justify-center">The Pivora Answer</p>
              <h3 className="mt-3 font-head text-2xl font-semibold leading-snug tracking-tight text-navy md:text-3xl">
                Ground-zero GTM, run as a predictable Build–Operate–Sustain motion.
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-greytext">{motion.lead}</p>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <BOSMotionFigure />
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl border-t border-line pt-10 text-center">
              <p className="eyebrow justify-center">Why this motion, and why it works</p>
              <p className="mt-4 font-head text-2xl font-semibold leading-snug tracking-tight text-navy md:text-[28px]">
                Enterprise B2B is a different ball game. It starts with customer trust.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-greytext">
                An enterprise platform is never bought on a click. It is bought by a committee, over quarters, on the
                strength of relationships that existed long before the first meeting. So this motion starts where
                enterprise buying starts — with trust — and converts that trust into architecture, then cadence, then a
                capability the client owns. Relationships open the door. Build–Operate–Sustain turns what walks
                through it into predictable revenue.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl border-t border-line pt-10 text-center">
              <p className="eyebrow justify-center">How Growth Continues</p>
              <h3 className="mt-3 font-head text-2xl font-semibold leading-snug tracking-tight text-navy md:text-3xl">
                Land and expand: the first win is the beginning, not the end.
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-greytext">
                Every account runs the same value arc — land, implement, prove value, expand, sustain. The first
                enterprise win is the beginning of the customer relationship, not the end.
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <div className="mx-auto max-w-5xl">
              <LandExpandFigure framed={false} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 · Two Growth Corridors — §5.6 / Figure 2-2 */}
      <Section id="corridors" eyebrow="Two Growth Corridors" title="Two corridors. Pick the one you are on." tone="grey">
        <CorridorFigure />
      </Section>

      {/* 06 · Who We Serve — §5.7 / §2.7: four non-clickable qualification cards,
          plus ecosystem context: India coverage reaches the global marketplace
          through the GCC's ecosystem (owner-directed positioning). */}
      <Section eyebrow="Who We Serve" title="Built for three kinds of buyer">
        <WhoWeServe />
        <Reveal>
          <p className="mx-auto mt-8 max-w-3xl text-center font-head text-xl font-semibold leading-snug text-navy md:text-2xl">
            India coverage is not domestic-market coverage. The GCC's ecosystem carries a platform win into the global
            marketplace.
          </p>
        </Reveal>
        <Reveal>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap items-stretch justify-center gap-3">
            {[
              { stat: "2,117 GCC's in India", note: `${sources.s11.source}, ${sources.s11.date}`, url: sources.s11.url },
              { stat: "US$98.4B GCC revenue, FY2026", note: `${sources.s11.source}, ${sources.s11.date}`, url: sources.s11.url },
              { stat: "Fourth-largest economy, ~US$4.5T", note: `${sources.s18.source}`, url: sources.s18.url },
            ].map((c) => (
              <li key={c.stat} className="card px-5 py-4 text-center">
                <p className="font-display text-[15px] font-semibold text-navy">{c.stat}</p>
                <p className="mt-1 text-[11px] text-greytext">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-gold/70 underline-offset-2 transition-colors hover:text-navy"
                  >
                    {c.note}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-center">
            <Link to="/what-we-solve/gcc-gsi-growth#gsi-landscape" className="text-link">
              See the India GSI's landscape <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
      </Section>

      {/* 07 · What Pivora Does — §5.8: five cards, left gold accent rule */}
      <Section eyebrow="What Pivora Does" title="Five focused capabilities. Nothing else." tone="grey">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CAPABILITIES.map((c) => (
            <Reveal key={c.n}>
              <Link
                to={c.to}
                className="group flex h-full flex-col rounded-xl border border-line border-l-2 border-l-gold bg-white p-5 transition-colors hover:border-navy/25 hover:border-l-gold"
              >
                <span className="text-[12px] font-bold tracking-[0.14em] text-gold-dark">{c.n}</span>
                <span className="mt-2 font-display text-[17px] font-bold leading-snug text-navy">{c.label}</span>
                <span className="mt-2 text-[13.5px] leading-relaxed text-greytext">{c.line}</span>
                <span className="mt-auto pt-4 text-[13px] font-semibold text-navy opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 08 · How We Choose Work — §5.9: soft-grey band, white card, text link only (no button) */}
      <section className="bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <div className="card mx-auto max-w-4xl p-8 md:p-12">
              <p className="eyebrow">How We Choose Work</p>
              <h2 className="mt-4 font-head text-3xl font-semibold leading-[1.12] tracking-tight text-navy md:text-4xl">
                We take on fewer engagements than we could.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-greytext">
                Pivora works with a small number of platforms at a time. Each engagement has to be one we can justify
                commercially and one where we can create significant, measurable value. We agree the outcome and how it
                will be measured before the work starts. If we do not believe we can move your number, we will tell you,
                and we will usually tell you who can.
              </p>
              <ul className="mt-8 grid gap-4 border-t border-line pt-8 md:grid-cols-3">
                {QUALIFICATION_LINES.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold" aria-hidden="true">
                      <Check className="h-3 w-3 text-navy" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-medium leading-snug text-navy">{q}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link to="/contact" className="text-link">
                  See the full qualification standard <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 + 10 · The two bands — §5.10: left navy, right gold (the one large gold surface) */}
      <section aria-label="Operating model and proof discipline" className="bg-white py-12 md:py-16">
        <div className="container-site grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-navy p-8 text-white md:p-10">
              <div>
                <p className="eyebrow-on-dark">Built · Operate · Sustain</p>
                <p className="mt-4 font-head text-2xl font-semibold leading-snug md:text-[28px]">
                  Build the engine. Operate for traction. Transfer the capability. Sustain the growth.
                </p>
              </div>
              <p className="mt-6">
                <Link to="/how-we-work/built-operate-sustain" className="text-link-light">
                  See the operating model <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gold p-8 text-navy md:p-10">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/70">Proof Before Persuasion</p>
                <p className="mt-4 font-head text-2xl font-semibold leading-snug md:text-[28px]">
                  Founder evidence + approved outcomes + references.
                </p>
              </div>
              <p className="mt-6">
                <Link to="/proof" className="text-[14.5px] font-semibold text-navy underline decoration-navy/60 underline-offset-4 hover:decoration-navy">
                  Explore the evidence <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11 · Ecosystem flow — §5.11 */}
      <Section eyebrow="The Ecosystem Flow" title="One connected system, not three channels." tone="grey">
        <EcosystemFlowFigure />
      </Section>

      {/* 12 · Proof — §5.12: founder evidence + honest placeholders. Nothing fabricated. */}
      <Section eyebrow="Proof" title="Evidence before persuasion.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Link to="/about" className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-navy/25">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/founder-subrato-bandhu.jpg"
                  alt="Subrato Bandhu, Founder and CEO of Pivora Consulting"
                  className="h-16 w-16 rounded-lg border border-line object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-lg font-bold text-navy">Founder evidence</p>
                  <p className="text-[13px] text-greytext">Subrato Bandhu · Founder & CEO</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {FOUNDER_EVIDENCE.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-greytext">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 text-[13.5px] font-semibold text-navy">
                Full founder record <ArrowRight className="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </p>
            </Link>
          </Reveal>
          <Reveal>
            <Link
              to="/proof/case-studies"
              className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-navy/25"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Selected Operating Experience
              </p>
              <p className="mt-2.5 font-display text-lg font-bold leading-snug text-navy">
                The operating record behind the method.
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Zero-to-One GTM — BMC Software, AppDynamics, Sprinklr",
                  "Category creation — low-code in India, allied with KPMG in India",
                  "Enterprise sales transformation — a global CX platform's India market",
                  "Ecosystem & alliance leverage — partnerships that produce pipeline",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-greytext">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-relaxed text-greytext">
                Story-led case studies from the verified public record. No invented metrics, ever.
              </p>
              <p className="mt-auto pt-5 text-[13.5px] font-semibold text-navy">
                Read the case studies{" "}
                <ArrowRight className="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </p>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* 13 · Insights — §5.1 row 13 with §16.1 fallback: no fabricated or
          "in progress" cards; the six approved pillars (§3.6) + link. */}
      <Section eyebrow="Insights" title="Perspectives on platform GTM, India, GCC's and GSI's." tone="grey">
        <Reveal>
          <div className="card p-8 md:p-10">
            <ul className="flex flex-wrap gap-2.5">
              {INSIGHT_PILLARS.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-gold/60 bg-gold-soft/60 px-4 py-1.5 text-[13px] font-semibold text-navy"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-greytext">
              Insights publishes under the same rule as the proof page: nothing appears until it is worth a senior
              operator’s time. The desk opens along the six pillars above.
            </p>
            <p className="mt-6">
              <Link to="/insights" className="text-link">
                About the Insights desk <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 13.5 · The India Perspective — owner-directed give-back section (KIMI
          master prompt §16–19): generous, understated, never "Free Consultation". */}
      <section className="bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <div className="card mx-auto max-w-4xl border-l-2 border-l-gold p-8 md:p-10">
              <p className="eyebrow">The India Perspective</p>
              <h2 className="mt-4 font-head text-3xl font-semibold leading-[1.15] tracking-tight text-navy md:text-4xl">
                Considering India? Happy to share a perspective.
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-greytext">
                Decades of building enterprise businesses in India teach what decks never show: how trust is actually
                earned in Indian enterprises, how GCC's and GSI's really make decisions, and what timing looks like
                from the inside. If you are weighing an India move — entering, expanding, or rethinking — we are glad
                to share that perspective, whether or not it ever becomes an engagement.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link to="/contact?type=india" className="btn-primary">
                  Have an India Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/what-we-solve/gcc-gsi-growth" className="text-link">
                  How we think about the India ecosystem <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 14 · Final CTA band — §5.13: full-width navy, gold accent rule, one gold button */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-site text-center">
          <Reveal>
            <div className="mx-auto h-px w-16 bg-gold" aria-hidden="true" />
            <h2 className="mx-auto mt-8 max-w-3xl font-head text-3xl font-semibold leading-[1.12] tracking-tight md:text-5xl">
              Have an exceptional Enterprise B2B platform? Let’s build the growth path.
            </h2>
            <p className="mt-9">
              <Link to="/contact" className="btn-primary !px-8 !py-4 text-[15px]">
                Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
