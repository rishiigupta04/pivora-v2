import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABlock } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { STORIES } from "@/content/experience";

/**
 * Selected Operating Experience (KIMI master prompt §10–12).
 * Theme-first, story-led, NOT founder-centric. Every card is a real, readable
 * case study drawn only from the verified public record — no fabricated
 * metrics, no placeholders, no dead "Read Case Study" links.
 * Client engagement profiles publish here additionally, once client-approved.
 */
export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Selected Operating Experience"
        title="Operating experience, told as stories — not as logos."
        lede="Four themes from the operator record behind Pivora: ground-zero builds, category creation, enterprise sales transformation and ecosystem leverage. Every fact is on the public record; client names and metrics beyond it are published only when client-approved and verifiable."
      />

      {/* Story cards — §11: lead with the business story, not a biography */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site grid gap-4 md:grid-cols-2">
          {STORIES.map((s) => (
            <Reveal key={s.slug}>
              <Link
                to={`/proof/case-studies/${s.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-navy/25 md:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">{s.theme}</p>
                <p className="mt-2.5 font-display text-xl font-bold leading-snug text-navy">{s.title}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-greytext">{s.teaser}</p>
                <p className="mt-4 border-t border-line pt-3 text-[12.5px] font-semibold text-ink">{s.companies}</p>
                <p className="mt-auto pt-5 text-[13.5px] font-semibold text-navy">
                  Read Case Study{" "}
                  <ArrowRight
                    className="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Publishing standard — honest, and not a placeholder */}
        <Reveal>
          <div className="mt-8 rounded-xl border-l-2 border-l-gold bg-softgrey/70 p-6 md:p-7">
            <p className="text-[15px] leading-relaxed text-ink">
              Client engagement profiles publish on this page as engagements complete and clear client approval. Until
              then, the verified operating record above stands as the evidence — and the{" "}
              <Link to="/proof#reference-policy" className="text-link">
                reference policy
              </Link>{" "}
              explains the standard any future case study must meet.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABlock sidewaysLabel="See the reference policy" sidewaysTo="/proof#reference-policy" />
    </>
  );
}
