import { Link } from "react-router";
import { PageHero } from "@/components/PageHero";
import { BOSFit, CTABlock, OutcomeList, ProofBlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import AIValueChainFigure from "@/components/figures/AIValueChainFigure";
import AIGatesFigure, { AIDecisionTable } from "@/components/figures/AIGatesFigure";
import ValueMotionFigure from "@/components/figures/ValueMotionFigure";
import { Reveal } from "@/components/Reveal";

/** §12 — Niche AI Value Services: five services, value chain, six gates + published decision table. */
const SERVICES = [
  { name: "AI Opportunity & Value Mapping", does: "Map AI and agent opportunities against enterprise pain, value and revenue potential", outcome: "A prioritised value portfolio" },
  { name: "AI Productisation & Packaging", does: "Turn AI capability into a buyer-ready proposition, package, price and business case", outcome: "A commercially clear AI offer" },
  { name: "Agentic Workflow / Platform GTM", does: "Identify agentic workflows that open enterprise accounts and prove platform value", outcome: "An AI-led enterprise wedge" },
  { name: "AI Adoption & Expansion Architecture", does: "Move AI from pilot to production, adoption and broader platform footprint", outcome: "Sustainable adoption and expansion" },
  { name: "AI GTM & Ecosystem Strategy", does: "Position AI capability for Enterprises, GCC's and GSI's, and create ecosystem leverage", outcome: "A repeatable AI growth motion" },
];

export default function NicheAI() {
  return (
    <>
      <PageHero
        eyebrow="Niche AI Value Services"
        title="AI capability is not an AI proposition."
        lede="A platform with genuine AI or agentic capability still has to answer what enterprise problem it solves, what it is worth, how it is packaged, and why a buyer should pay for it. Most cannot, so the capability shows up as a feature slide instead of a commercial wedge."
      />
      {/* Block 2 · Why it matters — the deliberate constraint */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <Reveal>
            <p className="eyebrow">Why it matters</p>
            <p className="mt-6 border-l-2 border-gold pl-4 text-[16px] leading-relaxed text-ink">
              Pivora carries AI only where it materially strengthens a differentiated Enterprise B2B platform or creates a
              high-value GTM wedge. This is a deliberate constraint. The refusals matter as much as the offer.
            </p>
          </Reveal>
        </div>
      </section>
      {/* Block 3 · Approach — five services */}
      <section className="bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-3 font-head text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Five services, deliberately narrow
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <div key={s.name} className="card p-5">
                  <p className="font-display text-[16px] font-bold leading-snug text-navy">{s.name}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-greytext">{s.does}</p>
                  <p className="mt-3 border-t border-line pt-3 text-[12.5px] font-semibold text-gold-dark">{s.outcome}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      {/* The value model — Figure 12-3: the primary services infographic (§6–8) */}
      <Section eyebrow="The Value Model" title="Value-led services, not capacity.">
        <Reveal>
          <p className="max-w-3xl border-l-2 border-gold pl-4 text-[16px] leading-relaxed text-ink">
            Pivora does not add services to increase delivery revenue. Specialist capability is applied where it
            accelerates customer value — and the measure is outcomes, not hours.
          </p>
        </Reveal>
        <div className="mt-8">
          <ValueMotionFigure />
        </div>
        <Reveal>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="font-display text-[15px] font-bold text-navy">
              Right Expertise → Faster Value → Measurable Outcome → Expansion.
            </p>
            <p className="text-[13.5px] text-greytext">
              The capacity model it replaces: more people, more hours, more revenue.
            </p>
          </div>
        </Reveal>
      </Section>
      {/* Figure 12-1 · AI Value Chain */}
      <Section eyebrow="The AI Value Chain" title="Where AI changes enterprise outcomes">
        <AIValueChainFigure />
        <p className="mt-6 max-w-3xl text-[14.5px] leading-relaxed text-greytext">
          Every service above maps to a stage of this chain. No orphaned AI offerings.
        </p>
      </Section>
      {/* Figure 12-2 · AI Qualification Gate + published decision table */}
      <Section eyebrow="Qualification" title="The AI Qualification Gate" tone="grey">
        <AIGatesFigure />
        <div className="mt-10">
          <Reveal>
            <h3 className="font-display text-xl font-bold text-navy">
              Published, because saying no in public is the strongest specialisation signal on the site
            </h3>
            <div className="mt-5">
              <AIDecisionTable />
            </div>
          </Reveal>
        </div>
      </Section>
      {/* Specialist capability — §9: an integrated growth and value engine, not a staffing catalogue */}
      <Section eyebrow="Specialist Capability" title="One integrated engine, four disciplines.">
        <Reveal>
          <p className="max-w-3xl text-[15.5px] leading-relaxed text-ink">
            Solution sales, pre-sales, senior solution architecture and business value consulting are not a staffing
            menu. Inside an engagement they run as one integrated growth-and-value engine — each discipline applied
            against a value milestone, never billed as capacity.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { name: "Solution Sales", line: "Enterprise positioning, value articulation and strategic deal progression." },
            { name: "Pre-Sales & Solution Consulting", line: "Discovery, demonstrations, solution fit and evaluation management." },
            { name: "Senior Solution Architects", line: "Enterprise architecture alignment, integration, scalability and security." },
            { name: "Business Value Consultants", line: "Business cases, ROI models, value measurement and outcome tracking." },
          ].map((c) => (
            <Reveal key={c.name}>
              <div className="card h-full p-6">
                <p className="font-display text-[16px] font-bold leading-snug text-navy">{c.name}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-greytext">{c.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-3xl text-[14.5px] leading-relaxed text-greytext">
            The same operating philosophy as{" "}
            <Link to="/how-we-work/built-operate-sustain" className="text-link">
              Build–Operate–Sustain
            </Link>{" "}
            and the land-and-expand motion: value first, expansion follows.
          </p>
        </Reveal>
      </Section>
      <BOSFit
        rows={[
          { phase: "Build · Operate · Sustain", what: "AI work attaches to whichever BOS phase the client is in. It is a wedge inside an engagement, not a separate engagement type." },
        ]}
      />
      <OutcomeList
        intro="Five outcome categories."
        items={[
          "Revenue: new use case, new buyer, premium package, expansion",
          "Product differentiation",
          "Enterprise adoption: higher usage, faster time-to-value, broader footprint",
          "Operational value: cycle time, quality, risk",
          "Ecosystem leverage: GSI's/GCC's solution motion, referenceability, global replication",
        ]}
      />
      <ProofBlock>
        <p>
          Founder evidence on the CX and generative-AI side: published commentary and interviews as Vice President, India
          Market at Sprinklr through 2024, listed in the selected coverage on{" "}
          <Link to="/about#coverage" className="text-link">
            the About page
          </Link>
          .
        </p>
      </ProofBlock>
      <CTABlock sidewaysLabel="See the qualification framework" sidewaysTo="/contact" />
    </>
  );
}
