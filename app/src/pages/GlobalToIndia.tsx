import { Link } from "react-router";
import { PageHero } from "@/components/PageHero";
import { BOSFit, CTABlock, OutcomeList, ProofBlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import ExecutionGapFigure from "@/components/figures/ExecutionGapFigure";
import GTMMultiplierFigure from "@/components/figures/GTMMultiplierFigure";
import { IndiaStatTiles } from "@/components/figures/StatTiles";
import sources from "@/content/sources.json";

/**
 * §13.2 — Global → India (primary corridor, deeper page).
 * §28.3 data currency: Part III's Gartner 161.5/176.3 figures and the
 * "third-largest economy by 2027" line are superseded — the §26 register
 * values (s6/s7) render instead. IDC × Zoho Set A per execution-gap.json.
 */
const ENGINE_STEPS = [
  "Market and category assessment",
  "Named account universe",
  "Value narrative tested with real buyers",
  "GCC's and GSI's mapping",
  "First strategic accounts",
  "Pipeline architecture",
  "90-day operating plan",
  "Live pursuit alongside the client’s team",
  "Lighthouse customer",
  "Reference",
  "Partner motion",
  "Transfer",
];

export default function GlobalToIndia() {
  return (
    <>
      <PageHero
        eyebrow="Global → India"
        title="India is a market most global platforms enter twice."
        lede="The first attempt is usually a country hire, a partner list and a target. The second attempt happens two years later, after the first one has been written off, and it is more expensive because the market now has a memory of the brand."
      />
      {/* Block 2 · Why it matters — demand vs execution, §26-corrected */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <Reveal>
            <p className="eyebrow">Why it matters</p>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink">
              <p>
                <strong className="font-semibold text-navy">Demand is not the constraint.</strong> India IT spending is
                forecast at US$176.4 billion in 2026, up 10.6% year on year ({sources.s7.source}, {sources.s7.date}), with
                the software segment growing 17.6% to US$24.7 billion ({sources.s8.source}, {sources.s8.date}). India is
                the world’s fourth-largest economy on 2026 projections, at approximately US$4.5 trillion (
                {sources.s18.source}, {sources.s18.date}).
              </p>
              <p>
                <strong className="font-semibold text-navy">Execution is the constraint.</strong> The IDC and Zoho “State
                of SaaS Adoption in India” study of 240 Indian enterprises with more than 1,000 employees found roughly
                75% of enterprise software projects delayed, 57% with timeline overruns, 43% with cost overruns, and an
                average loss of ₹5.6 crore ({sources.s16.source}, {sources.s16.date}).
              </p>
            </div>
          </Reveal>
        </div>
        <div className="container-site mt-12">
          <ExecutionGapFigure />
        </div>
        <div className="container-site mt-14">
          <IndiaStatTiles />
        </div>
      </section>
      {/* Block 3 · Approach — the engine, in sequence */}
      <section className="bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-3 font-head text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              The India entry and scale engine, in sequence
            </h2>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ENGINE_STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-[13px] font-bold text-gold">
                    {i + 1}
                  </span>
                  <span className="text-[14px] font-medium leading-snug text-ink">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
      <BOSFit
        rows={[
          { phase: "Build · Operate · Sustain", what: "The full Built–Operate–Sustain arc. This corridor is what BOS was built for." },
        ]}
      />
      <OutcomeList
        items={[
          "India pipeline with documented sources",
          "Lighthouse customers",
          "Approved references",
          "Active partners with named sponsors",
          "A repeatable commercial rhythm",
          "A client-owned GTM capability",
        ]}
      />
      {/* Figure 13-2 · The India GTM Multiplier */}
      <Section eyebrow="Figure 13-2" title="Why an India win is not a local win">
        <GTMMultiplierFigure />
        <p className="mt-6 max-w-3xl text-[14.5px] leading-relaxed text-greytext">
          A GCC's win can travel to the global parent; a GSI's win can travel to the partner’s global accounts; an enterprise
          reference travels laterally within the sector; and a proven motion travels to the next market. Loops one and two
          rest on the verified GCC's and alliance facts in §25. Loops three and four are standard enterprise-platform
          reference mechanics and are presented as strategy, not as statistics.
        </p>
      </Section>
      <ProofBlock>
        <p>
          Founder evidence: five ground-zero India builds.{" "}
          <Link to="/about" className="text-link">
            See the founder record
          </Link>{" "}
          and{" "}
          <Link to="/proof" className="text-link">
            the proof architecture
          </Link>
          .
        </p>
      </ProofBlock>
      <CTABlock
        primaryLabel="Build Your India Growth Engine"
        sidewaysLabel="See how Built–Operate–Sustain works"
        sidewaysTo="/how-we-work/built-operate-sustain"
      />
    </>
  );
}
