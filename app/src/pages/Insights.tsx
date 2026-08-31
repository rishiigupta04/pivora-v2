import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABlock } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";

/**
 * §16.1 — Insights index, launch fallback.
 * No Pivora-owned articles exist yet (§29 owner decision pending). Per §16.1 an
 * index with fewer than three pieces must not ship, so this page carries the six
 * approved pillars (§3.6) and the publishing standard — no fabricated cards,
 * no "in progress" cards.
 */
const PILLARS = [
  { name: "India Platform GTM", themes: "Why global platforms struggle in India; India entry mistakes; enterprise buying dynamics." },
  { name: "GCC's", themes: "How GCC's influence global platform adoption; GCC-to-global GTM." },
  { name: "GSI's", themes: "How to turn GSI's from logo relationships into pipeline engines." },
  { name: "Platform Growth", themes: "From wedge use case to enterprise platform standard." },
  { name: "Built–Operate–Sustain", themes: "Why strategy fails without an operating model." },
  { name: "India → Global", themes: "How Indian Enterprise B2B platforms can internationalise." },
];

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on platform GTM, India, GCC's and GSI's."
        lede="The Insights desk publishes under the same rule as the proof page: nothing appears until it is worth a senior operator’s time. It opens with three founding pieces; until they meet the standard, this page carries the six pillars it is built on."
      />
      <section className="bg-white py-12 md:py-16">
        <div className="container-site grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <Reveal key={p.name}>
              <div className="card h-full p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">{p.name}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-greytext">{p.themes}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-2xl text-[14.5px] leading-relaxed text-greytext">
            Selected third-party coverage and interviews with the founder — appointment reports, press releases and
            authored columns — are listed under{" "}
            <Link to="/about#coverage" className="text-link">
              selected coverage on the About page
              <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            .
          </p>
        </Reveal>
      </section>
      <CTABlock />
    </>
  );
}
