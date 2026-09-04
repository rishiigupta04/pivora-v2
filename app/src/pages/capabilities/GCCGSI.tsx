import { Link } from "react-router";
import { PageHero } from "@/components/PageHero";
import { ApproachTable, BOSFit, CTABlock, OutcomeList, ProofBlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { GCCStatTiles } from "@/components/figures/StatTiles";
import { PartnerLadderFigure } from "@/components/figures/PartnerLadderFigure";
import sources from "@/content/sources.json";

/**
 * §10 — GCC's & GSI's Growth.
 * §28.3 data currency: the Part III paragraph’s FY2024 GCC's numbers are superseded;
 * the §26 register values (s11) render instead, with source strings attached.
 */
/** The India GSI's landscape — Tier-1 & Tier-2 providers HQ'd out of India.
 *  Typographic name tiles only: no trademark artwork is used, and the band is
 *  framed as market context — no affiliation or endorsement is implied. */
const GSI_LANDSCAPE = [
  { name: "TCS", full: "Tata Consultancy Services", tier: "Tier-1", hq: "HQ Mumbai" },
  { name: "Infosys", full: "Infosys", tier: "Tier-1", hq: "HQ Bengaluru" },
  { name: "Wipro", full: "Wipro", tier: "Tier-1", hq: "HQ Bengaluru" },
  { name: "HCLTech", full: "HCL Technologies", tier: "Tier-1", hq: "HQ Noida" },
  { name: "Tech Mahindra", full: "Tech Mahindra", tier: "Tier-1", hq: "HQ Pune" },
  { name: "Cognizant", full: "Cognizant", tier: "India-heritage", hq: "HQ Teaneck, US · India-led delivery" },
];

function Src({ id, children }: { id: "s7" | "s11" | "s18"; children: React.ReactNode }) {
  return (
    <a
      href={sources[id].url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-navy underline decoration-gold/70 underline-offset-2 transition-colors hover:text-gold-dark"
    >
      {children}
    </a>
  );
}

export default function GCCGSI() {
  return (
    <>
      <PageHero
        eyebrow="GCC's & GSI's Growth"
        title="Partner logos are not partner pipeline."
        lede="Most platform companies have signed agreements with two or three GSI's and a relationship with a handful of GCC's. Almost none can name the joint opportunities, the enabled resources, or the accounts those relationships have actually opened."
      />
      {/* Block 2 · Why it matters — paragraph + figures */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <p className="eyebrow">Why it matters</p>
          <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink">
            <p>
              India hosts 2,117 Global Capability Centers across 3,728 units, employing 2.36 million professionals and
              generating US$98.4 billion in revenue in FY2026 (<Src id="s11">{sources.s11.source}, {sources.s11.date}</Src>). A GCC's is not
              another customer segment. It can be an innovation centre, a global process owner, a technology decision
              influencer, a reference creator, and a route into the parent enterprise headquartered somewhere else
              entirely. India coverage done right is never domestic-only: a win inside a GCC's travels to the global
              parent, and into the global marketplace.
            </p>
            <p>
              GSI's are not resellers. The large Indian and global system integrators can be implementation multipliers,
              co-sell channels, category validators, and global routes to market. Treated as a logo, a GSI's relationship
              produces nothing. Treated as a motion, it compounds.
            </p>
          </div>
        </div>
        <div className="container-site mt-12">
          <GCCStatTiles />
        </div>
      </section>

      {/* The India GSI's landscape + demand-side context */}
      <section id="gsi-landscape" className="scroll-mt-24 bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">The ecosystem, defined</p>
              <h2 className="mt-4 font-head text-3xl font-semibold leading-[1.12] tracking-tight text-navy md:text-4xl">
                India GSI's: Tier-1 and Tier-2 providers, headquartered out of India.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-greytext">
                The India GSI's are the Tier-1 and Tier-2 service providers headquartered out of India, running global
                delivery engines across every major market. They implement, co-sell, validate categories, and carry a
                platform into accounts on every continent. Pivora's partner motion is built to engage exactly this
                tier.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
              {GSI_LANDSCAPE.map((g) => (
                <li
                  key={g.name}
                  className="card flex flex-col items-center px-5 py-7 text-center transition-colors hover:border-gold/60"
                >
                  <p className="font-display text-[19px] font-bold tracking-wide text-navy">{g.name}</p>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">{g.tier}</p>
                  <p className="mt-1 text-[12.5px] text-greytext">{g.hq}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] leading-relaxed text-greytext/80">
              Shown as market-landscape context. No affiliation, partnership or endorsement is implied.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-12 grid gap-8 border-t border-line pt-10 lg:grid-cols-[220px_1fr]">
              <p className="font-head text-xl font-semibold leading-snug text-navy">
                And the demand side: India Enterprise's.
              </p>
              <div className="max-w-3xl">
                <p className="text-[16px] leading-relaxed text-ink">
                  India's enterprise buyers are large, often diversified organisations — banking, manufacturing,
                  retail, telecom, energy, pharmaceuticals — buying at national scale. India is the world's
                  fourth-largest economy at approximately US$4.5 trillion (<Src id="s18">{sources.s18.source}</Src>),
                  with enterprise IT spending forecast at US$176.4 billion for 2026, up 10.6% year on year (<Src id="s7">{sources.s7.source}, {sources.s7.date}</Src>).
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-ink">
                  Together with 2,117 GCC's (<Src id="s11">{sources.s11.source}, {sources.s11.date}</Src>), this is why India coverage is
                  not domestic-market coverage: it is the fastest route into the global marketplace.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <ApproachTable
        rows={[
          { area: "GCC's opportunity mapping", produces: "Which GCC's matter for this platform, why, and who inside them decides" },
          { area: "GCC-to-global motions", produces: "The path from an India GCC's win to adoption at the global parent" },
          { area: "GSI's partner strategy", produces: "Which partners, at what depth, and what each side gets" },
          { area: "Co-sell design", produces: "A joint proposition with defined economics, not an MoU" },
          { area: "Alliance activation", produces: "Named accounts, enabled resources, joint pipeline, executive sponsors" },
          { area: "Reference creation", produces: "Turning a delivered win into a reference the partner will repeat" },
        ]}
      />
      <BOSFit
        rows={[
          { phase: "Build", what: "Partner map, proposition and target motions defined." },
          { phase: "Operate", what: "Partner activation, joint pursuit, GCC's opportunity development." },
          { phase: "Sustain", what: "Partner scorecards and quarterly governance transfer to the client." },
        ]}
      />
      <OutcomeList
        items={[
          "A ranked GCC's and GSI's target list",
          "A named executive sponsor inside each active partner",
          "Enabled partner resources with a count, not an assertion",
          "Joint pipeline attributable to the partner motion",
          "At least one delivered joint win",
          "A partner scorecard the client runs themselves",
        ]}
      />
      {/* Figure 10-1 · Partner Maturity Ladder */}
      <Section title="The Partner Maturity Ladder" eyebrow="Partner Motion">
        <PartnerLadderFigure />
        <p className="mt-6 max-w-3xl text-[14.5px] leading-relaxed text-greytext">
          Five rungs from L0 Relationship Only to L4 Scaled. Every partner is tracked against it quarterly, and movement
          from L0 to L4 is the core story. It is the honest version of what partner progress looks like: most platform
          companies believe they are at L3 and are provably at L1.
        </p>
      </Section>
      <ProofBlock>
        <p>
          Three decades of relationships across Indian corporates, GCC's and GSI's/GSPs, recorded in the October 2020
          appointment coverage. The KPMG in India and OutSystems alliance announced in May 2023 is a published example of
          an alliance built, not described.{" "}
          <Link to="/about" className="text-link">
            See the founder record
          </Link>
          .
        </p>
      </ProofBlock>
      <CTABlock sidewaysLabel="See why an India win travels" sidewaysTo="/growth-paths/global-to-india" />
    </>
  );
}
