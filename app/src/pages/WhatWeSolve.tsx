import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABlock } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";

/** §7 — What We Solve hub. Blocks 1, 3, 5, 7. */
const CARDS = [
  { n: "01", label: "Market Entry & GTM", problem: "We are entering a market and we do not yet have a commercial architecture.", to: "/what-we-solve/market-entry-gtm" },
  { n: "02", label: "Enterprise Revenue Acceleration", problem: "We have some wins but no repeatable motion.", to: "/what-we-solve/revenue-acceleration" },
  { n: "03", label: "GCC's & GSI's Growth", problem: "We have partner logos and no partner pipeline.", to: "/what-we-solve/gcc-gsi-growth" },
  { n: "04", label: "India → Global Expansion", problem: "We have India proof and no international sequence.", to: "/what-we-solve/india-to-global" },
  { n: "05", label: "Niche AI Value Services", problem: "We have AI capability that is not yet a commercial proposition.", to: "/what-we-solve/niche-ai" },
];

export default function WhatWeSolve() {
  return (
    <>
      <PageHero
        eyebrow="What We Solve"
        title="Five problems. Not a service catalogue."
        lede="Most growth firms list twenty things they can do. Pivora solves five, because those five are the ones that decide whether an Enterprise B2B platform builds real revenue in India or from India."
      />
      <section className="bg-white py-12 md:py-16">
        <div className="container-site">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c) => (
              <Reveal key={c.n}>
                <Link
                  to={c.to}
                  className="group flex h-full flex-col rounded-xl border border-line border-l-2 border-l-gold bg-white p-6 transition-colors hover:border-navy/25"
                >
                  <span className="text-[12px] font-bold tracking-[0.14em] text-gold-dark">{c.n}</span>
                  <span className="mt-2 font-display text-xl font-bold leading-snug text-navy">{c.label}</span>
                  <span className="mt-2 text-[14.5px] leading-relaxed text-greytext">“{c.problem}”</span>
                  <span className="mt-auto pt-5 text-[13.5px] font-semibold text-navy">
                    Explore the capability{" "}
                    <ArrowRight className="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
            {/* Selectivity statement — §2.10: everything else is declined */}
            <Reveal>
              <div className="flex h-full flex-col justify-center rounded-xl bg-navy p-6 text-white">
                <p className="font-display text-xl font-bold leading-snug">Everything else is declined.</p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                  Not a broad IT services company, not a generic strategy consultancy, not an implementation factory.
                  Selectivity is the value proposition.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Block 5 · Outcomes */}
          <Reveal>
            <p className="mx-auto mt-16 max-w-3xl text-center font-head text-xl font-semibold leading-relaxed text-navy md:text-2xl">
              Every capability is scoped to a measurable commercial outcome, agreed before the work starts, reviewed on a
              fixed cadence. There is no engagement whose deliverable is a document.
            </p>
          </Reveal>
        </div>
      </section>
      <CTABlock sidewaysLabel="Not sure which applies? See the two growth paths" sidewaysTo="/growth-paths" />
    </>
  );
}
