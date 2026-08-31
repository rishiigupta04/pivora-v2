import { PageHero } from "@/components/PageHero";
import { ApproachTable, BOSFit, CTABlock, OutcomeList, ProofBlock, WhyItMatters } from "@/components/blocks";

/** §9 — Enterprise Revenue Acceleration. */
export default function RevenueAcceleration() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise Revenue Acceleration"
        title="Early wins are not a revenue motion."
        lede="Two or three deals closed on founder energy and a good demo tell you the product works. They do not tell you why customers bought, whether the next ten will buy for the same reason, or what a rep who is not the founder should say."
      />
      <WhyItMatters
        items={[
          "A motion nobody can describe cannot be handed to a new hire, which caps growth at the founder’s calendar.",
          "Pipeline built without an operating rhythm swings quarter to quarter and destroys forecast credibility with the global board.",
          "Deals stall at procurement, security review or business-case stage for reasons nobody has documented.",
          "Expansion inside existing accounts is left to the customer to initiate.",
        ]}
      />
      <ApproachTable
        rows={[
          { area: "Strategic account planning", produces: "Account plans with named stakeholders, entry points and a value hypothesis per account" },
          { area: "Executive engagement", produces: "Direct access to the executives who sponsor budget, not just the users who like the product" },
          { area: "Pipeline architecture", produces: "Stage definitions, entry and exit criteria, and coverage targets that mean the same thing every week" },
          { area: "Deal strategy", produces: "Deal-level strategy on the pursuits that matter, including commercial shape and objection handling" },
          { area: "Land-and-expand", produces: "The mapped path from the first use case to the second, third and adjacent business unit" },
          { area: "Revenue operating rhythm", produces: "A weekly forecast and pipeline cadence that survives after Pivora leaves" },
        ]}
      />
      <BOSFit
        rows={[
          { phase: "Build", what: "Pipeline architecture and account plans are built." },
          { phase: "Operate", what: "This is the core of OPERATE. Pivora works alongside the client’s team on live pursuits." },
          { phase: "Sustain", what: "The operating rhythm, playbooks and dashboards transfer to the client team." },
        ]}
      />
      <OutcomeList
        items={[
          "Qualified pipeline with documented sources",
          "A named executive relationship map",
          "A documented reason-to-buy pattern",
          "A repeatable weekly commercial cadence",
          "At least one lighthouse customer developed to referenceable state",
          "An expansion path defined inside the top accounts",
        ]}
      />
      <ProofBlock title="Proof — methodology transparency">
        <p>
          Where client outcomes are not yet publishable, this page shows the operating cadence instead: the weekly
          forecast call structure, the account-plan template, the stage definitions, and the governance that produces the
          outcome. Show the machine when you cannot yet show the output.
        </p>
      </ProofBlock>
      <CTABlock sidewaysLabel="See the Platform Growth Model" sidewaysTo="/how-we-work/platform-growth" />
    </>
  );
}
