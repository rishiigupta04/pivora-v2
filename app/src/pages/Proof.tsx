import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import ProofTiersFigure from "@/components/figures/ProofTiersFigure";

/** §15.1 — Proof hub (blocks 1, 3, 5, 7) + §15.5 reference policy. */
export default function Proof() {
  return (
    <>
      <PageHero eyebrow="Proof" title="Evidence before persuasion." lede="A CRO evaluating a growth partner needs evidence before methodology. Proof is not a footer section." />

      {/* Block 3 · Approach — Figure 15-1, five tiers, honest population */}
      <Section eyebrow="Proof Architecture" title="Five tiers, ranked by strength">
        {/* Audit C9: the note that stood here restated the figure's own status
            line and the Populated/Pending badges printed on every tier. */}
        <ProofTiersFigure />
      </Section>

      {/* Founder evidence anchor (nav target) */}
      <section id="founder-evidence" className="scroll-mt-24 bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <div className="card flex flex-col gap-6 p-6 md:flex-row md:items-start md:p-8">
              {/* §24.5 — headshot appears here at 96px, and on /about at 320px. Nowhere else. */}
              <img
                src="/assets/founder-subrato-bandhu.jpg"
                alt="Subrato Bandhu, Founder and CEO of Pivora Consulting"
                className="h-24 w-24 rounded-lg border border-line object-cover"
                loading="lazy"
              />
              <div>
                <p className="eyebrow">Tier 1 · Founder operating evidence</p>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink">
                  Three decades in Enterprise B2B software; ground-zero India GTM builds across BMC Software, AppDynamics,
                  Magic Software, Sprinklr and OutSystems; the KPMG in India × OutSystems alliance of May 2023; published
                  CX and generative-AI commentary as Vice President, India Market, Sprinklr, through 2024. Every claim
                  traceable to the verified source register.
                </p>
                <p className="mt-4">
                  <Link to="/about" className="text-link">
                    The full founder record <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §15.5 · Reference policy */}
      <section id="reference-policy" className="scroll-mt-24 bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <Reveal>
            <p className="eyebrow">References & Reference Policy</p>
            <ul className="mt-6 space-y-4">
              {[
                "Named references only with written client approval.",
                "Metrics must be verifiable and approved by the client before publication.",
                "“Reference call on request” is offered as a qualification step in the Contact flow. It filters serious buyers.",
                "Where proof is not yet publishable, methodology transparency is substituted: the operating cadence, deliverables and governance that produce outcomes.",
              ].map((r) => (
                <li key={r.slice(0, 40)} className="flex items-start gap-3 border-l-2 border-gold pl-4 text-[15px] leading-relaxed text-ink">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link to="/proof/case-studies" className="text-link">
                See selected operating experience <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABlock sidewaysLabel="Ask for a reference conversation" sidewaysTo="/contact" />
    </>
  );
}
