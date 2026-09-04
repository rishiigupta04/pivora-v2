import { PageHero } from "@/components/PageHero";
import { CTABlock, ProofBlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { GrowthMotionFigure } from "@/components/figures/GrowthMotionFigure";
import { PlatformRampFigure } from "@/components/figures/PlatformRampFigure";

/** §14.3 — Platform Growth Model: six layers, the growth motion, the gated ramp. */
const LAYERS = [
  { layer: "Category", q: "Why should the market care about this platform now?" },
  { layer: "Value", q: "What measurable enterprise problem does it solve?" },
  { layer: "Wedge", q: "What specific use case or account opens the door?" },
  { layer: "Ecosystem", q: "Which GCC's, GSI's, partners and influencers accelerate adoption?" },
  { layer: "Commercial", q: "How does a pilot become a material enterprise contract?" },
  { layer: "Expansion", q: "How does one use case or customer become a broader platform footprint?" },
];

const EXPANSION_PATH = [
  { stage: "Wedge", q: "Why this use case?", action: "Quantify pain, urgency and business value" },
  { stage: "Pilot", q: "What proves value?", action: "Define success criteria before deployment" },
  { stage: "Production", q: "What creates trust?", action: "Operationalise, measure and document the outcome" },
  { stage: "Expansion", q: "Where else can the platform apply?", action: "Map adjacent workflows, functions and business units" },
  { stage: "Enterprise", q: "Can the platform become a strategic layer?", action: "Build the executive case for broader adoption" },
  { stage: "Reference", q: "Can this customer influence others?", action: "Create reference, peer story and ecosystem leverage" },
];

export default function PlatformGrowth() {
  return (
    <>
      <PageHero
        eyebrow="Platform Growth Model"
        title="Do not scale a broken GTM motion."
        lede="Adding headcount to a motion nobody can describe multiplies the cost of not knowing why customers buy."
      />
      {/* Block 2 · Why it matters */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <Reveal>
            <p className="eyebrow">Why it matters</p>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink">
              <p>
                Enterprise platform growth depends on the interaction of product value, executive sponsorship, use cases,
                ecosystem leverage, commercial model and expansion. Not on a generic sales funnel.
              </p>
              <p>
                Product-led does not mean product-only: security, procurement, architecture, business ownership and
                executive sponsorship all decide the deal. The practical model is{" "}
                <strong className="font-semibold text-navy">
                  product-led proof + enterprise-led conversion + ecosystem-led scale.
                </strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Block 3 · Approach — six growth layers */}
      <Section eyebrow="Approach" title="Six growth layers, each a question the platform must answer" tone="grey">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {LAYERS.map((l) => (
              <div key={l.layer} className="card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">{l.layer}</p>
                <p className="mt-2 font-display text-[16px] font-bold leading-snug text-navy">{l.q}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-12">
          <GrowthMotionFigure />
        </div>
      </Section>
      {/* Block 4 · Operating-model fit — the ramp and its gates */}
      <Section eyebrow="The Ramp" title="The ramp, and its gates">
        <PlatformRampFigure />
        <p className="mt-6 max-w-3xl text-[14.5px] leading-relaxed text-greytext">
          Stage 0 is a genuine qualification gate. Pivora declines platforms that fail it.
        </p>
      </Section>
      {/* Block 5 · Outcomes — from use case to platform expansion */}
      <Section eyebrow="Outcomes" title="From use case to platform expansion" tone="grey">
        <Reveal>
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Stage</th>
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Commercial question</th>
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Pivora action</th>
                </tr>
              </thead>
              <tbody>
                {EXPANSION_PATH.map((r) => (
                  <tr key={r.stage} className="border-t border-line odd:bg-white even:bg-softgrey/60">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-navy">{r.stage}</th>
                    <td className="px-4 py-3.5 text-greytext">{r.q}</td>
                    <td className="px-4 py-3.5 text-greytext">{r.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>
      <ProofBlock title="Proof — methodology transparency">
        <p>
          Where client outcomes are not yet publishable, the method is the proof: the gates, the stage questions and the
          actions above are exactly what runs inside an engagement.
        </p>
      </ProofBlock>
      <CTABlock sidewaysLabel="See the ecosystem engine" sidewaysTo="/what-we-solve/gcc-gsi-growth" />
    </>
  );
}
