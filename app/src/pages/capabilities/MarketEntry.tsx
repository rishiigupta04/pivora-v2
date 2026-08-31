import { Link } from "react-router";
import { PageHero } from "@/components/PageHero";
import { ApproachTable, BOSFit, CTABlock, OutcomeList, ProofBlock, WhyItMatters } from "@/components/blocks";

/** §8 — Market Entry & GTM. Seven-block skeleton, verbatim Part III copy. */
export default function MarketEntry() {
  return (
    <>
      <PageHero
        eyebrow="Market Entry & GTM"
        title="A strategy document, a country hire and a partner list is not a market-entry engine."
        lede="Most platform companies enter India with all three and still have no pipeline nine months later. The gap is not intent. It is the absence of a commercial architecture that someone is accountable for operating."
      />
      <WhyItMatters
        items={[
          "Positioning built for a home market rarely survives contact with an Indian enterprise buying committee.",
          "Without a named account universe, a first country hire spends two quarters discovering the market instead of selling into it.",
          "Partner conversations start before there is a proposition worth partnering on, so they stall at the MoU.",
          "Pricing designed elsewhere collides with local commercial expectations and stalls at procurement.",
          "Every month without a lighthouse customer is a month the global board loses confidence in the market.",
        ]}
      />
      <ApproachTable
        rows={[
          { area: "Market and category assessment", produces: "A written view of where this platform can win, and where it cannot" },
          { area: "ICP and segmentation", produces: "A named, tiered account universe, not a persona document" },
          { area: "Positioning and messaging", produces: "A value narrative that survives an Indian enterprise buying committee" },
          { area: "GTM model", produces: "Direct, partner-led or hybrid, with the reasoning made explicit" },
          { area: "Pricing and commercial architecture", produces: "Packaging, commercial terms and deal shapes suited to the market" },
          { area: "First strategic accounts", produces: "The specific accounts to open first, and the route into each" },
        ]}
      />
      <BOSFit
        rows={[
          { phase: "Build", what: "This capability is almost entirely BUILD. It produces the commercial architecture and the 90-day operating plan." },
          { phase: "Operate", what: "Hands directly to Enterprise Revenue Acceleration." },
          { phase: "Sustain", what: "The market assessment and ICP become client-owned artefacts, refreshed quarterly." },
        ]}
      />
      <OutcomeList
        intro="An operating system for commercial execution, not a slide deck."
        items={[
          "A documented GTM blueprint",
          "A tiered named-account universe",
          "A value narrative tested with real buyers",
          "A partner and ecosystem map",
          "A pipeline architecture",
          "A 90-day operating plan with owners and dates",
        ]}
      />
      <ProofBlock>
        <p>
          Subrato Bandhu was, per the OutSystems appointment announcement of October 2020, “instrumental in setting up
          business for B2B software companies Sprinklr, AppDynamics and BMC Software,” responsible for “the overall India
          business strategy, customer success, partner network development, operations, and sales execution.” That is the
          exact work described on this page, done five times.{" "}
          <Link to="/about" className="text-link">
            See the founder record
          </Link>
          .
        </p>
      </ProofBlock>
      <CTABlock
        primaryLabel="Build the Growth Path"
        primaryTo="/growth-paths"
        sidewaysLabel="See how this sits inside Built–Operate–Sustain"
        sidewaysTo="/how-we-work/built-operate-sustain"
      />
    </>
  );
}
