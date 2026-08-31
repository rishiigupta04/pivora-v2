import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/** §14.1 hub (blocks 1, 3, 5, 7) + §14.5 engagement models with the value-case commitment. */
const MODELS = [
  {
    name: "Built–Operate–Sustain",
    desc: "The signature operating model: build the engine, operate it for traction, then sustain it as a continuing strategic partnership — never a handover.",
    to: "/how-we-work/built-operate-sustain",
  },
  {
    name: "Platform Growth Model",
    desc: "How product strength becomes repeatable enterprise revenue — six growth layers and a gated ramp from 0 to global.",
    to: "/how-we-work/platform-growth",
  },
  {
    name: "Delivery Model",
    desc: "Dedicated client pods that sell, one governance layer, and a shared senior bench behind every engagement.",
    to: "/how-we-work/delivery-model",
  },
];

const ENGAGEMENT_MODELS = [
  { offer: "GTM Diagnostic", bestFor: "A platform entering a new market", scope: "2 to 4 week assessment: ICP, positioning, account universe, partner map, GTM blueprint" },
  { offer: "Build", bestFor: "A new India or global launch", scope: "90 to 120 day GTM build with account, partner, messaging and operating architecture" },
  { offer: "Operate", bestFor: "A platform that needs traction", scope: "6 to 12 month embedded execution across strategic accounts, pipeline, GCC's/GSI's and deals" },
  { offer: "Built–Operate–Sustain", bestFor: "A serious market build", scope: "12 to 24 month journey from architecture to execution to a sustained, expanding client-owned capability" },
  { offer: "Platform Growth Program", bestFor: "An existing platform with expansion ambition", scope: "Land-and-expand, ecosystem scale, enterprise adoption and global replication" },
];

export default function HowWeWork() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="“Can you actually create growth, or will you give us a strategy deck?”"
        lede="This is the question every serious buyer asks, usually in the second meeting. This page answers it before they have to."
      />
      {/* Block 3 · Approach — three linked models */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site grid gap-4 md:grid-cols-3">
          {MODELS.map((m) => (
            <Reveal key={m.name}>
              <Link to={m.to} className="group flex h-full flex-col rounded-xl border border-line border-l-2 border-l-gold bg-white p-6 transition-colors hover:border-navy/25">
                <span className="font-display text-xl font-bold leading-snug text-navy">{m.name}</span>
                <span className="mt-2 text-[14.5px] leading-relaxed text-greytext">{m.desc}</span>
                <span className="mt-auto pt-5 text-[13.5px] font-semibold text-navy">
                  Explore <ArrowRight className="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      {/* Block 5 · Outcomes */}
      <section className="bg-softgrey py-14 md:py-16">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <p className="font-head text-xl font-semibold leading-relaxed text-navy md:text-2xl">
              A client-owned growth engine. Dependence on Pivora decreases because the client’s capability increases.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-greytext">
              Sustain is a continuing partnership — strengthening, optimising, expanding. Not a handover.
            </p>
          </Reveal>
        </div>
      </section>
      {/* §14.5 · Engagement models */}
      <Section eyebrow="Engagement Models" title="Five ways in. One commercial principle.">
        <Reveal>
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Offer</th>
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Best for</th>
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Indicative scope</th>
                </tr>
              </thead>
              <tbody>
                {ENGAGEMENT_MODELS.map((e) => (
                  <tr key={e.offer} className="border-t border-line odd:bg-white even:bg-softgrey/60">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-navy">{e.offer}</th>
                    <td className="px-4 py-3.5 text-greytext">{e.bestFor}</td>
                    <td className="px-4 py-3.5 text-greytext">{e.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className="text-[15px] leading-relaxed text-ink">
              <strong className="font-semibold text-navy">The value case.</strong> Every engagement above begins with a
              written value case agreed by both sides: the commercial outcome it targets, how that outcome will be
              measured, and by when. Pivora does not start work it cannot justify in the client’s own numbers. Where a
              value case cannot be written, the engagement does not start, and that has happened.
            </p>
            <p className="text-[15px] leading-relaxed text-ink">
              <strong className="font-semibold text-navy">The commercial principle.</strong> Priced for value and scope,
              not hours. No hourly rate card appears anywhere on this site.
            </p>
          </div>
        </Reveal>
      </Section>
      <CTABlock primaryLabel="Explore Built–Operate–Sustain" primaryTo="/how-we-work/built-operate-sustain" />
    </>
  );
}
