import { PageHero } from "@/components/PageHero";
import { ApproachTable, BOSFit, CTABlock, OutcomeList, ProofBlock, WhyItMatters } from "@/components/blocks";

/**
 * §11 — India → Global Expansion (capability page).
 * §3.4 Pair 1: this page answers "What does Pivora actually do for us?";
 * the Growth Paths version carries the corridor narrative. Reciprocal cross-link in the CTA.
 */
export default function IndiaToGlobalCapability() {
  return (
    <>
      <PageHero
        eyebrow="India → Global Expansion"
        title="India proof does not automatically translate into an international sequence."
        lede="An Indian Enterprise B2B platform with strong domestic customers usually knows it should expand. What it rarely has is a defensible answer to which market, in what order, through which route, with which references."
      />
      <WhyItMatters
        items={[
          "Expansion driven by inbound interest rather than a sequence burns cash across three markets at once and lands in none.",
          "Indian references do not carry equal weight in every geography, and knowing which ones travel is a research question, not a guess.",
          "A global ICP is usually narrower than the domestic one, and platforms discover this after hiring.",
          "Partner-led expansion is often the only economically viable route, and it has to be designed before the first hire, not after.",
        ]}
      />
      <ApproachTable
        rows={[
          { area: "International market prioritisation", produces: "A ranked market sequence with the reasoning and the disqualifiers stated" },
          { area: "Global account strategy", produces: "The global ICP, and the named accounts that prove it" },
          { area: "Partner-led expansion", produces: "Where a partner route beats a direct route, and what it costs" },
          { area: "GSI's leverage", produces: "Using existing India GSI's relationships as a route into their global accounts" },
          { area: "Market-entry sequencing", produces: "What happens in market one before market two starts" },
          { area: "Global GTM operating model", produces: "How the expansion is run, governed and measured from India" },
        ]}
      />
      <BOSFit
        rows={[
          { phase: "Build", what: "Market sequence, global ICP and route design." },
          { phase: "Operate", what: "First-market execution alongside the client’s team." },
          { phase: "Sustain", what: "The sequencing method transfers, so market three does not need Pivora." },
        ]}
      />
      <OutcomeList
        items={[
          "A ranked and reasoned market sequence",
          "A global ICP distinct from the domestic one",
          "A named target account list in market one",
          "A partner route with defined economics",
          "An entry plan with gates, not just dates",
          "A governance model run from India",
        ]}
      />
      <ProofBlock title="Proof — stated honestly">
        <p>
          Methodology transparency plus founder evidence on the ecosystem side. This is the corridor with the least
          published Pivora proof today. We say so plainly, and offer a reference conversation rather than implying
          experience we cannot evidence.
        </p>
      </ProofBlock>
      <CTABlock
        primaryLabel="Build the Global Growth Engine"
        sidewaysLabel="See the full India → Global growth path"
        sidewaysTo="/growth-paths/india-to-global"
      />
    </>
  );
}
