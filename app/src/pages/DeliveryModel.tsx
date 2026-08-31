import { PageHero } from "@/components/PageHero";
import { BOSFit, CTABlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import ExecutionModelFigure from "@/components/figures/ExecutionModelFigure";
import DeRiskingFigure from "@/components/figures/DeRiskingFigure";

/** §14.4 — Delivery Model: execution model, de-risking equation, client commitments. */
const COMMITMENTS = [
  { c: "India time-zone support", m: "Client-side key personnel available for collaboration during Indian business hours" },
  { c: "Training content", m: "Product documentation, sales kits and training materials provided to the pod" },
  { c: "Process training", m: "Client-specific training on internal sales and presales methodology, CRM usage and approval workflows" },
  { c: "Sales-operations training", m: "Training on the client’s sales-operations tools and reporting requirements" },
  { c: "Company email IDs and access", m: "Official email addresses and application access, so pod members operate as part of the client’s organisation" },
  { c: "Office equipment", m: "Laptops and hardware per client standards for dedicated team members, where mandated" },
  { c: "Operating expenses", m: "Clear handling and reimbursement of pre-approved expenses incurred on the client’s behalf" },
];

export default function DeliveryModel() {
  return (
    <>
      <PageHero
        eyebrow="Delivery Model"
        title="Advice is easy to sell and hard to value."
        lede="The difference between a consulting engagement and a growth engagement is whether anyone is accountable for a commercial number."
      />
      {/* Block 2 · Why it matters */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <Reveal>
            <p className="eyebrow">Why it matters</p>
            <p className="mt-6 border-l-2 border-gold pl-4 text-[16px] leading-relaxed text-ink">
              Pivora’s difference is operating depth: dedicated client pods that sell, a governance layer that keeps
              quality consistent, and a shared services bench that gives every client access to senior specialist skills
              without paying for them full-time.
            </p>
          </Reveal>
        </div>
      </section>
      {/* Block 3 · Approach — Figure 14-4 */}
      <Section eyebrow="Figure 14-4" title="Who does the work, and how it is governed" tone="grey">
        <ExecutionModelFigure />
      </Section>
      <BOSFit
        rows={[
          { phase: "Build", what: "Senior-heavy and short." },
          { phase: "Operate", what: "The pod’s steady state." },
          { phase: "Sustain", what: "The pod reduces as the client team absorbs the work." },
        ]}
      />
      {/* Block 5 · Outcomes — Figure 14-5 */}
      <Section eyebrow="Figure 14-5" title="The De-Risking Equation">
        <DeRiskingFigure />
      </Section>
      {/* Block 6 · Client commitments — published openly */}
      <Section eyebrow="Client Commitments" title="What we need from you" tone="grey">
        <Reveal>
          <p className="max-w-3xl text-[15px] leading-relaxed text-greytext">
            Published openly, because a firm that states what it needs from a client reads as one that has done this
            before.
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Commitment</th>
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">What it means in practice</th>
                </tr>
              </thead>
              <tbody>
                {COMMITMENTS.map((r) => (
                  <tr key={r.c} className="border-t border-line odd:bg-white even:bg-softgrey/60">
                    <th scope="row" className="px-4 py-3.5 font-semibold text-navy">{r.c}</th>
                    <td className="px-4 py-3.5 text-greytext">{r.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>
      <CTABlock />
    </>
  );
}
