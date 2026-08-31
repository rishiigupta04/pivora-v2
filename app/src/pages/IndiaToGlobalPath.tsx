import { PageHero } from "@/components/PageHero";
import { BOSFit, CTABlock, OutcomeList, ProofBlock, WhyItMatters } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * §13.3 — India → Global corridor page.
 * §3.4 Pair 1 differentiation: this page carries the corridor narrative and
 * sequence; the capability page carries the work breakdown. Cross-linked both ways.
 */
const SEQUENCE = [
  "Market prioritisation",
  "Global ICP",
  "Reference audit — which India proof travels, and where",
  "Route design, direct versus partner",
  "GSI's leverage into global accounts",
  "Market one execution",
  "Gates before market two",
  "Governance run from India",
];

export default function IndiaToGlobalPath() {
  return (
    <>
      <PageHero
        eyebrow="India → Global"
        title="You have India proof. The question is what it is worth abroad."
        lede="Indian Enterprise B2B platforms with real domestic customers usually expand on inbound pull rather than a sequence, and discover in year two that they are half-present in three markets."
      />
      <WhyItMatters
        items={[
          "The domestic ICP and the global ICP are rarely the same shape.",
          "References do not travel equally.",
          "The GSI's relationships already built in India are usually the most underused asset the company owns, because nobody has mapped them to the partner’s global accounts.",
        ]}
      />
      <Section eyebrow="Approach" title="The expansion engine, in sequence" tone="grey">
        <Reveal>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SEQUENCE.map((s, i) => (
              <li key={s} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-[13px] font-bold text-gold">
                  {i + 1}
                </span>
                <span className="text-[14px] font-medium leading-snug text-ink">{s}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>
      <BOSFit
        rows={[
          { phase: "Build · Operate", what: "Market sequence, global ICP, route design, then first-market execution alongside the client’s team." },
          { phase: "Sustain", what: "Focused on transferring the sequencing method so market three does not need Pivora." },
        ]}
      />
      <OutcomeList
        items={[
          "A ranked market sequence",
          "A global ICP",
          "A travelling-reference audit",
          "A partner route with economics",
          "A gated entry plan",
          "An India-run governance model",
        ]}
      />
      <ProofBlock title="Proof — stated honestly">
        <p>
          This corridor has the least published Pivora proof today. We offer a reference conversation and methodology
          transparency instead of implying otherwise.
        </p>
      </ProofBlock>
      <CTABlock
        primaryLabel="Build Your Global Growth Engine"
        sidewaysLabel="See the capability detail"
        sidewaysTo="/what-we-solve/india-to-global"
      />
    </>
  );
}
