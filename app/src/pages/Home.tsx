import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Target, Users } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { CorridorFigure } from "@/components/figures/CorridorFigure";
import { WhoWeServe } from "@/components/figures/WhoWeServe";
import { EcosystemFlowFigure } from "@/components/figures/EcosystemFlowFigure";
import { QualificationGate } from "@/components/figures/QualificationGate";
import BOSMotionFigure from "@/components/figures/BOSMotionFigure";

/**
 * Homepage — §5.1 section order (01–15), §5.14 acceptance conditions.
 * 01 Header / 15 Footer live in the layout; this file renders 02–14.
 *
 * Audit changes: section 06b (India coverage line + three stat cards) removed as
 * a restatement of the navy base band inside WhoWeServe [C1]; LandExpandFigure
 * removed as a duplicate of the one on /how-we-work/built-operate-sustain [C2];
 * section 08 converted to the QualificationGate figure. Prose across the page
 * cut to a lead-in line or a pull-quote per section.
 */

const CAPABILITIES = [
  { n: "01", label: "Market Entry & GTM", line: "Enter with a commercial architecture, not a country hire.", to: "/what-we-solve/market-entry-gtm" },
  { n: "02", label: "Enterprise Revenue Acceleration", line: "Turn early wins into a repeatable motion.", to: "/what-we-solve/revenue-acceleration" },
  { n: "03", label: "GCC's & GSI's Growth", line: "Ecosystem as a multiplier, not a logo wall.", to: "/what-we-solve/gcc-gsi-growth" },
  { n: "04", label: "India → Global", line: "Use India proof to sequence global entry.", to: "/what-we-solve/india-to-global" },
  { n: "05", label: "Selective AI Value Wedges", line: "AI only where it strengthens the platform.", to: "/what-we-solve/niche-ai" },
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

const OPERATING_RECORD = [
  "Zero-to-One GTM — BMC Software, AppDynamics, Sprinklr",
  "Category creation — low-code in India, allied with KPMG in India",
  "Enterprise sales transformation — a global CX platform's India market",
  "Ecosystem & alliance leverage — partnerships that produce pipeline",
];

export default function Home() {
  return (
    <>
      {/* 02 · Hero — §5.3. Bridge artwork: owner-approved exception to the
          no-stock rule (AI-generated; licensing to be confirmed by owner). */}
      <section className="bg-softgrey pb-8 pt-6 md:pb-10">
        <div className="container-site">
          <div className="grain relative overflow-hidden rounded-2xl bg-navy shadow-e3">
            <div className="absolute inset-0" aria-hidden="true">
              <img src="/assets/hero-bridge.jpg" alt="" className="h-full w-full object-cover object-[70%_center] opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" />
            </div>
            <div className="relative grid gap-10 px-6 py-14 md:px-12 md:py-20 lg:grid-cols-[55%_45%] lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="eyebrow-on-dark">Enterprise B2B Platform Growth · India</p>
                <h1 className="h-display mt-5 text-[42px] text-white sm:text-[52px] lg:text-[62px]">
                  Enterprise B2B Platforms. Built for <span className="text-gold">Growth in India.</span>
                </h1>
                <p className="mt-7 max-w-xl text-[18px] leading-[1.7] text-white/80">
                  Pivora builds enterprise traction through focused GTM execution and the GCC's and GSI's ecosystem.
                  India is both a market and a launchpad.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
                    <Link to="/growth-paths" className="btn-primary">
                      Build the Growth Path <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </motion.span>
                  <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
                    <Link to="/how-we-work" className="btn-outline-light">
                      See How We Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </motion.span>
                </div>
              </motion.div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Credential strip — §5.4: four items, thin dividers, navy line icons, no numbers */}
      <section aria-label="Credentials" className="border-b border-line bg-white">
        <RevealGroup
          className="container-site grid grid-cols-2 gap-y-6 py-9 lg:grid-cols-4 lg:divide-x lg:divide-line"
          stagger={0.06}
        >
          {[
            { icon: Clock, text: "Three decades of Enterprise B2B" },
            { icon: MapPin, text: "Ground-zero India GTM builds" },
            { icon: Users, text: "Enterprise + GCC's + GSI's ecosystem" },
            { icon: Target, text: "Outcome-led operating model" },
          ].map(({ icon: Icon, text }) => (
            <RevealItem key={text} className="flex items-center gap-3 lg:justify-center lg:px-6">
              <Icon className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[14px] font-semibold leading-snug text-navy">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* 04 · The Growth Problem — §5.5 statement card, then the
          Build–Operate–Sustain motion (Figure 5-1). */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <div className="card mx-auto max-w-4xl p-10 text-center shadow-e2 md:p-14">
              <p className="eyebrow justify-center">The Growth Problem</p>
              <h2 className="pull-quote mt-5">
                A strong platform does not automatically become repeatable enterprise revenue.
              </h2>
              <p className="prose-lede mx-auto mt-6 max-w-2xl">
                Pivora closes the gap between entry, traction, and a growth engine the client owns.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <p className="eyebrow justify-center">The Pivora Answer</p>
              <h3 className="h-display mt-4 text-[26px] text-navy md:text-[32px]">
                Ground-zero GTM, run as a Build–Operate–Sustain motion.
              </h3>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <BOSMotionFigure />
          </Reveal>

          {/* Why the motion starts with trust. One sentence, set large — the
              paragraph that argued it is gone. */}
          <Reveal>
            <div className="mx-auto mt-20 max-w-3xl border-t border-line pt-14 text-center">
              <p className="eyebrow justify-center">Why it starts with trust</p>
              <p className="pull-quote mt-5">
                Enterprise platforms are bought by committees, over quarters, on relationships that
                predate the first meeting.
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-greytext">
                Relationships open the door. Build–Operate–Sustain turns what walks through it into revenue.
              </p>
            </div>
          </Reveal>

          {/* How growth continues. The account-level motion lives on the
              Built–Operate–Sustain page [C2]; here it is a claim and a link. */}
          <Reveal>
            <div className="mx-auto mt-16 max-w-3xl border-t border-line pt-14 text-center">
              <p className="eyebrow justify-center">How Growth Continues</p>
              <h3 className="h-display mt-4 text-[26px] text-navy md:text-[32px]">
                The first win is the beginning, not the end.
              </h3>
              <p className="prose-lede mx-auto mt-5 max-w-2xl">
                Every account runs the same arc — land, implement, prove value, expand, sustain.
              </p>
              <p className="mt-6">
                <Link to="/how-we-work/built-operate-sustain#land-and-expand" className="text-link">
                  See the land-and-expand motion <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 · Two Growth Corridors — §5.6 / Figure 2-2 */}
      <Section id="corridors" eyebrow="Two Growth Corridors" title="Two corridors. Pick the one you are on." tone="grey">
        <CorridorFigure />
      </Section>

      {/* 06 · Who We Serve — §5.7 / §2.7. The three GTM engines, each sourced.
          The India-coverage restatement and its three stat cards were cut [C1];
          the figure's own base band already makes that point. */}
      <Section eyebrow="Who We Serve" title="Built for three kinds of buyer">
        <WhoWeServe />
        <Reveal>
          <p className="mt-8 text-center">
            <Link to="/what-we-solve/gcc-gsi-growth#gsi-landscape" className="text-link">
              See the India GSI's landscape <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
      </Section>

      {/* 07 · What Pivora Does — §5.8: five cards, left gold accent rule */}
      <Section eyebrow="What Pivora Does" title="Five focused capabilities. Nothing else." tone="grey">
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {CAPABILITIES.map((c) => (
            <RevealItem key={c.n}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="h-full">
                <Link
                  to={c.to}
                  className="card-lift group flex h-full flex-col rounded-xl border border-line border-l-2 border-l-gold bg-white p-5 transition-colors hover:border-navy/25 hover:border-l-gold"
                >
                  <span className="text-[12px] font-bold tracking-[0.14em] text-gold-dark">{c.n}</span>
                  <span className="mt-2 font-display text-[17px] font-bold leading-snug text-navy">{c.label}</span>
                  <span className="mt-2 text-[13.5px] leading-relaxed text-greytext">{c.line}</span>
                  <span className="mt-auto pt-4 text-[13px] font-semibold text-navy opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* 08 · How We Choose Work — §5.9. Converted from a paragraph plus three
          bullets into a gate figure that publishes the decline condition. */}
      <section className="bg-softgrey py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <div className="card mx-auto max-w-4xl p-8 shadow-e2 md:p-12">
              <p className="eyebrow">How We Choose Work</p>
              <h2 className="h-display mt-4 text-[30px] text-navy md:text-[38px]">
                We take on fewer engagements than we could.
              </h2>
              <div className="mt-9">
                <QualificationGate set="choose-work" />
              </div>
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
      <section aria-label="Operating model and proof discipline" className="bg-white py-16 md:py-20">
        <RevealGroup className="container-site grid gap-4 lg:grid-cols-2" stagger={0.1}>
          <RevealItem>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grain relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-navy-depth p-8 text-white shadow-e2 md:p-10"
            >
              <div className="relative">
                <p className="eyebrow-on-dark">Built · Operate · Sustain</p>
                <p className="relative mt-4 font-head text-2xl font-semibold leading-snug tracking-tight md:text-[30px]">
                  Build the engine. Operate for traction. Transfer the capability. Sustain the growth.
                </p>
              </div>
              <p className="relative mt-6">
                <Link to="/how-we-work/built-operate-sustain" className="text-link-light">
                  See the operating model <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </motion.div>
          </RevealItem>
          <RevealItem>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col justify-between rounded-2xl bg-gold-sheen p-8 text-navy shadow-e2 md:p-10"
            >
              <div>
                {/* Solid navy, not navy/70: a tinted label on gold falls under
                    4.5:1 at this size. Hierarchy comes from size and tracking. */}
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">Proof Before Persuasion</p>
                <p className="mt-4 font-head text-2xl font-semibold leading-snug tracking-tight md:text-[30px]">
                  Founder evidence + approved outcomes + references.
                </p>
              </div>
              <p className="mt-6">
                <Link to="/proof" className="text-[14.5px] font-semibold text-navy underline decoration-navy/60 underline-offset-4 hover:decoration-navy">
                  Explore the evidence <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </motion.div>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* 11 · Ecosystem flow — §5.11 */}
      <Section eyebrow="The Ecosystem Flow" title="One connected system, not three channels." tone="grey">
        <EcosystemFlowFigure />
      </Section>

      {/* 12 · Proof — §5.12: founder evidence + honest placeholders. Nothing fabricated. */}
      <Section eyebrow="Proof" title="Evidence before persuasion.">
        <RevealGroup className="grid gap-4 lg:grid-cols-2" stagger={0.1}>
          <RevealItem>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="h-full">
              <Link to="/about" className="card-lift group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-navy/25">
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
            </motion.div>
          </RevealItem>
          <RevealItem>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="h-full">
              <Link
                to="/proof/case-studies"
                className="card-lift group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-navy/25"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  Selected Operating Experience
                </p>
                <p className="mt-2.5 font-display text-lg font-bold leading-snug text-navy">
                  The operating record behind the method.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {OPERATING_RECORD.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-greytext">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-[13.5px] font-semibold text-navy">
                  Read the case studies{" "}
                  <ArrowRight className="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </p>
              </Link>
            </motion.div>
          </RevealItem>
        </RevealGroup>
      </Section>

      {/* 13 · Insights — §5.1 row 13 with §16.1 fallback: no fabricated or
          "in progress" cards; the six approved pillars (§3.6) + link. */}
      <Section eyebrow="Insights" title="Perspectives on platform GTM, India, GCC's and GSI's." tone="grey">
        <Reveal>
          <div className="card p-8 shadow-e2 md:p-10">
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
              Nothing publishes until it is worth a senior operator’s time.
            </p>
            <p className="mt-5">
              <Link to="/insights" className="text-link">
                About the Insights desk <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 13.5 · The India Perspective — owner-directed give-back section:
          generous, understated, never "Free Consultation". */}
      <section className="bg-softgrey py-16 md:py-20">
        <div className="container-site">
          <Reveal>
            <div className="card mx-auto max-w-4xl border-l-2 border-l-gold p-8 shadow-e2 md:p-10">
              <p className="eyebrow">The India Perspective</p>
              <h2 className="h-display mt-4 text-[30px] text-navy md:text-[38px]">
                Considering India? Happy to share a perspective.
              </h2>
              <p className="prose-lede mt-5 max-w-2xl">
                Decades of building here teach what decks never show: how trust is earned in Indian
                enterprises, how GCC's and GSI's decide, and what timing looks like from the inside.
                Glad to share it, engagement or not.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
                  <Link to="/contact?type=india" className="btn-primary">
                    Have an India Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </motion.span>
                <Link to="/what-we-solve/gcc-gsi-growth" className="text-link">
                  How we think about the India ecosystem <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 14 · Final CTA band — §5.13: full-width navy, gold accent rule, one gold button */}
      <section className="grain relative overflow-hidden bg-navy-depth py-24 text-white md:py-32">
        <div className="container-site relative text-center">
          <Reveal>
            <motion.div
              className="mx-auto h-px w-16 origin-center bg-gold"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            />
            <h2 className="h-display mx-auto mt-9 max-w-3xl text-[32px] md:text-[52px]">
              Have an exceptional Enterprise B2B platform? Let’s build the growth path.
            </h2>
            <p className="mt-10">
              <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
                <Link to="/contact" className="btn-primary !px-8 !py-4 text-[15px]">
                  Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
