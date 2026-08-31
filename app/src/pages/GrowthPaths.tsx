import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CorridorFigure } from "@/components/figures/CorridorFigure";
import { Reveal } from "@/components/Reveal";

/** §13.1 — Growth Paths hub. Blocks 1, 3, 5, 7. */
export default function GrowthPaths() {
  return (
    <>
      <PageHero
        eyebrow="Growth Paths"
        title="Two corridors. Pick the one you are on."
        lede="The work is different depending on which direction you are travelling. So is the ecosystem, the sequencing, and the definition of a win."
      />
      {/* Block 3 · Approach — Figure 2-2 full width as the entry points */}
      <Section tone="white">
        <CorridorFigure />
      </Section>
      {/* Block 5 · Outcomes — one sentence each */}
      <section className="bg-softgrey py-12 md:py-16">
        <div className="container-site grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6">
              <p className="font-display text-xl font-bold text-navy">Global → India</p>
              <p className="mt-2 text-[15px] leading-relaxed text-greytext">
                An India growth engine that produces pipeline, lighthouse customers and references — then runs without us.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="card h-full p-6">
              <p className="font-display text-xl font-bold text-navy">India → Global</p>
              <p className="mt-2 text-[15px] leading-relaxed text-greytext">
                A sequenced international expansion that converts India proof into global revenue, market by market.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Block 7 · CTA — two equal buttons */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container-site flex flex-wrap items-center gap-4">
          <Link to="/growth-paths/global-to-india" className="btn-primary">
            Explore Global → India <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/growth-paths/india-to-global" className="btn-outline-light">
            Explore India → Global <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
