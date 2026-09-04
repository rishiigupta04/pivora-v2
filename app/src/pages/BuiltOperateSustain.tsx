import { Link } from "react-router";
import { PageHero } from "@/components/PageHero";
import { CTABlock, ProofBlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BOSFigure } from "@/components/figures/BOSFigure";
import LandExpandFigure from "@/components/figures/LandExpandFigure";

/** §14.2 — Built–Operate–Sustain. The signature page of the site. */
const CLIENT_VIEW = [
  { phase: "Build", focus: "Set up, build pipeline, create visibility", sees: "A launchpad, not a slide deck. Named opportunities entering a real funnel. The brand present in the target enterprise ecosystem." },
  { phase: "Operate", focus: "Generate revenue, grow the business, penetrate the market", sees: "Pipeline converting into bookings. A repeatable commercial rhythm. Share growing in the segments that matter." },
  { phase: "Sustain", focus: "Co-exist and optimise, strategic partnership", sees: "Stable operations, steady performance, and a client-owned capability that keeps improving — with Pivora alongside as strategic partner, not exiting at a handover." },
];

const TRANSITION_TEST = [
  { before: "Pivora holds much of the GTM context", during: "Pivora and client execute together", after: "Client owns the motion; Pivora becomes strategic" },
  { before: "Processes are partly implicit", during: "Playbooks and dashboards are created", after: "Processes are documented and repeatable" },
  { before: "Partner relationships may be founder-led", during: "Relationships are mapped and institutionalised", after: "Client team activates partners independently" },
];

export default function BuiltOperateSustain() {
  return (
    <>
      <PageHero
        eyebrow="Built–Operate–Sustain"
        title="The gap is not between strategy and ambition. It is between strategy and execution."
        lede="Many platform companies enter a market with a strategy document, a country hire and a partner list. That is not a GTM engine. Positioning stays weak, pipeline stays inconsistent, partners stay inactive, enterprise access stays shallow, deals stall, and the whole thing becomes dependent on two or three individuals."
      />
      {/* Block 2 · Why it matters */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <Reveal>
            <p className="eyebrow">Why it matters</p>
            <p className="mt-6 border-l-2 border-gold pl-4 text-[16px] leading-relaxed text-ink">
              A market build that depends on named individuals is not an asset. It cannot be forecast, defended at a
              board review, or grown. Built–Operate–Sustain exists to close the execution gap — and to stay engaged as
              a strategic partner while the client’s own capability compounds. It is a continuous partnership, not
              Build → Operate → Handover.
            </p>
          </Reveal>
        </div>
      </section>
      {/* Block 3 · Approach — Figure 14-1 */}
      <Section eyebrow="The Operating Model" title="The signature model, in three phases" tone="grey">
        <BOSFigure />
      </Section>
      {/* Block 4 · Operating-model fit — client-facing operational language */}
      <Section eyebrow="Operating-model fit" title="What the client sees, phase by phase">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {CLIENT_VIEW.map((r) => (
              <div key={r.phase} className="card p-6">
                <p className={`text-[12px] font-bold uppercase tracking-[0.16em] ${r.phase === "Sustain" ? "text-gold-dark" : "text-navy"}`}>
                  {r.phase}
                </p>
                <p className="mt-2 text-[13.5px] font-semibold text-ink">{r.focus}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-greytext">{r.sees}</p>
              </div>
            ))}
          </div>
        </Reveal>
        {/* Figure 14-2 · Land and Expand — the account-level motion inside BOS */}
        <Reveal>
          <div id="land-and-expand" className="mt-12 scroll-mt-24 border-t border-line pt-10">
            <p className="eyebrow">How growth continues</p>
            <h3 className="mt-3 max-w-3xl font-head text-2xl font-semibold leading-snug tracking-tight text-navy md:text-[28px]">
              Land and expand: the first win is the beginning.
            </h3>
            <p className="mt-3 max-w-3xl text-[15.5px] leading-relaxed text-greytext">
              Every account inside a Build–Operate–Sustain engagement runs the same value arc — and the first
              enterprise win is the beginning of the customer relationship, not the end.
            </p>
            <div className="mt-8">
              <LandExpandFigure />
            </div>
          </div>
        </Reveal>
      </Section>
      {/* Block 5 · Outcomes — the SUSTAIN transition test, published */}
      <Section eyebrow="Outcomes" title="The transition test — the honest definition of done" tone="grey">
        <Reveal>
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Before</th>
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">During</th>
                  <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">After</th>
                </tr>
              </thead>
              <tbody>
                {TRANSITION_TEST.map((r) => (
                  <tr key={r.before} className="border-t border-line odd:bg-white even:bg-softgrey/60">
                    <td className="px-4 py-3.5 text-greytext">{r.before}</td>
                    <td className="px-4 py-3.5 text-greytext">{r.during}</td>
                    <td className="px-4 py-3.5 font-medium text-navy">{r.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-ink">
            SUSTAIN never means leaving the client. It means dependence on Pivora decreases because the client’s
            capability increases.
          </p>
        </Reveal>
      </Section>
      <ProofBlock>
        <p>
          The model is not a theory. It is the codified version of five ground-zero India builds.{" "}
          <Link to="/about" className="text-link">
            See the founder record
          </Link>
          .
        </p>
      </ProofBlock>
      <CTABlock sidewaysLabel="See the delivery model behind it" sidewaysTo="/how-we-work/delivery-model" />
    </>
  );
}
