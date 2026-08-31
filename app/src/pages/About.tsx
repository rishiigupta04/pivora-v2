import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import TimelineFigure from "@/components/figures/TimelineFigure";
import PlatformsMatrixFigure from "@/components/figures/PlatformsMatrixFigure";
import EcosystemFigure from "@/components/figures/EcosystemFigure";
import { EcosystemFlowFigure } from "@/components/figures/EcosystemFlowFigure";
import { WhoWeServe } from "@/components/figures/WhoWeServe";
import { AboutStructuredData } from "@/components/StructuredData";

/** §17 + §24 — About: Founder, Philosophy (Why Pivora), Ecosystem. */

const CREDENTIAL_STRIP = [
  "Three decades, Enterprise B2B",
  "0 → 1 India GTM builds",
  "India enterprise track",
  "GCC's track",
  "GSI's/GSP track",
  "Low-code and CX thought leadership",
  "Agentic AI & AI-native GTM focus",
];

const PRINCIPLES = [
  { name: "Focus over breadth", line: "Five capabilities, one buyer type. Everything else is declined." },
  { name: "Quality over volume", line: "A small number of engagements, run properly, beats a portfolio nobody can staff." },
  { name: "Outcomes over activity", line: "Every engagement is scoped to a commercial outcome agreed before the work starts." },
  { name: "Partners, not vendors", line: "Pivora operates alongside the client’s team, inside their cadence, accountable to their number." },
];

const DOES_NOT_DO = [
  "A broad IT services company",
  "A generic strategy consultancy",
  "An implementation factory",
  "A staffing or body-shopping business",
  "An outsourcing company",
  "A catalogue of low-value services",
  "An agency that optimises activity metrics without commercial accountability",
];

const COVERAGE = [
  { year: "2020", outlet: "ETHRWorld (Economic Times)", piece: "“OutSystems appoints Subrato Bandhu as Regional Vice President, India” — appointment coverage with career history" },
  { year: "2020", outlet: "CEO Insights India", piece: "Appointment coverage citing ground-zero India builds at Sprinklr, AppDynamics and BMC Software" },
  { year: "2021", outlet: "TechCircle", piece: "“Watch: OutSystems’ Subrato Bandhu on low-code growth in India” — video interview" },
  { year: "2021", outlet: "Analytics Insight", piece: "“Exclusive Interview with Subrato Bandhu, Regional VP at OutSystems”" },
  { year: "2021", outlet: "Financial Express", piece: "“Apps on the fly: The magic of low-code platforms”" },
  { year: "2021", outlet: "CXOToday", piece: "“The ROI of low code”" },
  { year: "2021–2022", outlet: "Times of India, Voices", piece: "Authored columns: “Do we really need more software apps?”; SAP ecosystem transformation; software delivery trends" },
  { year: "2023", outlet: "KPMG in India", piece: "“KPMG in India and OutSystems announce an alliance to offer innovative low-code digital solutions” — press release" },
  { year: "2024", outlet: "Digital Terminal", piece: "“Generative AI is transforming how businesses interact with customers” — interview as VP, Sprinklr" },
  { year: "2024", outlet: "Voice & Data", piece: "“India’s Digital Leap: The Rise of Customer Experience Centers”" },
  { year: "2024", outlet: "Express Computer / ETCXPlus", piece: "Technology Sabha and ETCXPlus video interviews as Vice President, India Market, Sprinklr" },
];

export default function About() {
  return (
    <>
      <AboutStructuredData />
      <PageHero
        eyebrow="About Pivora"
        title="Three decades of ground-zero India builds."
        lede="Pivora’s credibility does not come from adjectives on a homepage. It comes from a founder who has repeatedly done exactly what Pivora sells: taking global Enterprise B2B platforms from zero to a working, revenue-generating India business."
      />

      {/* §17.1 · Founder — §24 in full */}
      <section id="founder" className="scroll-mt-24 bg-white py-12 md:py-16">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
            <Reveal>
              <div>
                {/* §24.5 — square crop, 1px border, 320px, no treatments */}
                <img
                  src="/assets/founder-subrato-bandhu.jpg"
                  alt="Subrato Bandhu, Founder and CEO of Pivora Consulting"
                  className="w-full max-w-[320px] rounded-none border border-line object-cover"
                  width={320}
                  height={320}
                />
                <ul className="mt-5 space-y-2">
                  {CREDENTIAL_STRIP.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[13px] font-medium text-navy">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" /> {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 max-w-[320px] rounded-xl border border-gold/60 bg-gold-soft/60 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-dark">
                    Current focus · Agentic AI
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy">
                    Initial-stage engagement with <strong>UnifyApps</strong>: ground-zero GTM driving Agentic AI for
                    India enterprises and India GCC's.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <p className="eyebrow">Founder</p>
                <h2 className="mt-3 font-head text-3xl font-semibold tracking-tight text-navy">Subrato Bandhu</h2>
                <p className="mt-1 text-[14px] font-semibold text-greytext">Founder & CEO, Pivora Consulting</p>
                <div className="mt-6 max-w-3xl space-y-5 text-[16px] leading-relaxed text-ink">
                  <p>
                    Subrato Bandhu has spent three decades in Enterprise B2B software, building and scaling the India
                    businesses of global product and platform companies from the ground up. The pattern is consistent:
                    take a global platform with little or no India presence, build the go-to-market from first principles
                    (strategy, first hires, first customers, partner network), and scale it into a durable business.
                  </p>
                  <p>
                    He was appointed Regional Vice President, India at OutSystems in October 2020, where he led the
                    low-code platform’s India expansion and its 2023 alliance with KPMG in India. Before that he was
                    Managing Director, India at Sprinklr and Vice President, India at Magic Software, and was instrumental
                    in setting up the India businesses of Sprinklr, AppDynamics and BMC Software, owning India business
                    strategy, customer success, partner networks, operations and sales execution. His earlier career spans
                    CMS Computers, Mahindra Networks and Openview Technologies. He subsequently returned to Sprinklr as
                    Vice President, India Market, before founding Pivora Consulting in 2025.
                  </p>
                  <p>
                    Across these roles he has built deep, long-standing relationships with Indian corporates, Global
                    Capability Centres and Global System Integrators and service providers: the three tracks that define
                    Pivora’s India GTM motion.
                  </p>
                  <p>
                    Under Pivora, that ground-zero motion now runs for the agentic-AI era. Pivora has taken up an
                    initial-stage engagement with UnifyApps to drive Agentic AI for India enterprises and India GCC's —
                    building the go-to-market from the ground up, the same build Pivora productises for platform
                    companies. His current focus is AI-native go-to-market: how agentic platforms are positioned,
                    adopted and scaled across India’s enterprise and GCC's landscape.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Figure 24-1 · Career timeline */}
          <div className="mt-12">
            <TimelineFigure />
          </div>

          {/* §24.2 · Ground-zero builds + pull quote */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="eyebrow">The ground-zero builds</p>
              <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-ink">
                The OutSystems appointment announcement put it plainly: Subrato was “instrumental in setting up business
                for B2B software companies Sprinklr, AppDynamics and BMC Software,” responsible for “the overall India
                business strategy, customer success, partner network development, operations, and sales execution.” That
                is not advisory work. It is company-building, and it is the operating experience behind the
                Built–Operate–Sustain model.
              </p>
            </div>
            <blockquote className="rounded-xl border-l-2 border-gold bg-softgrey/70 p-6">
              <p className="text-[15px] font-medium leading-relaxed text-navy">
                “Subrato and his team were responsible for the overall India business strategy, customer success, partner
                network development, operations, and sales execution for all three GTM’s”
              </p>
              <footer className="mt-3 text-[12.5px] text-greytext">
                OutSystems appointment announcement, referring to Sprinklr, AppDynamics and BMC Software, October 2020
              </footer>
            </blockquote>
          </div>

          {/* Figure 24-2 · Five platforms */}
          <div className="mt-12">
            <PlatformsMatrixFigure />
          </div>

          {/* §24.3 · Relationship ecosystem + second pull quote */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="eyebrow">The relationship ecosystem</p>
              <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-ink">
                Three decades of ground-zero builds compound into one asset money cannot buy quickly: trusted
                relationships across the three tracks that decide whether an enterprise platform wins in India.
              </p>
            </div>
            <blockquote className="rounded-xl border-l-2 border-gold bg-softgrey/70 p-6">
              <p className="text-[15px] font-medium leading-relaxed text-navy">
                “With Subrato’s vast expertise, I believe he will be integral in helping to grow OutSystems’ presence in
                India and drive adoption rate of the platform across the market. I look forward to working closely with
                him.”
              </p>
              <footer className="mt-3 text-[12.5px] text-greytext">
                Mark Weaser, Vice President APAC, OutSystems, on the appointment as Regional Vice President, India,
                October 2020
              </footer>
            </blockquote>
          </div>
          <div className="mt-10">
            <EcosystemFigure />
          </div>
        </div>
      </section>

      {/* §24.4 · Selected coverage — Tier 4, genuinely populated */}
      <section id="coverage" className="scroll-mt-24 bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Selected coverage and publications</p>
            <h2 className="mt-3 font-head text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Third-party validation, on the record
            </h2>
            <ul className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {COVERAGE.map((c) => (
                <li key={c.piece} className="border-l-2 border-gold/70 pl-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-dark">
                    {c.outlet} · {c.year}
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink">{c.piece}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* §17.2 · Philosophy (Why Pivora) */}
      <section id="philosophy" className="scroll-mt-24 bg-white py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Philosophy — Why Pivora</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.name} className="card p-6">
                  <p className="font-display text-lg font-bold text-navy">{p.name}</p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-greytext">{p.line}</p>
                </div>
              ))}
            </div>
          </Reveal>
          {/* §2.9 · What Pivora deliberately does not do */}
          <Reveal>
            <div className="mt-12 rounded-2xl bg-navy p-8 text-white md:p-10">
              <p className="eyebrow-on-dark">What Pivora deliberately does not do</p>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-white/70">
                Selectivity is a brand asset, not a limitation to be apologised for. Pivora is not:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {DOES_NOT_DO.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[14px] leading-snug text-white/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §17.3 · Ecosystem */}
      <section id="ecosystem" className="scroll-mt-24 bg-softgrey py-12 md:py-16">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Ecosystem</p>
            <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-ink">
              India enterprise, GCC's and GSI's are treated as one connected system rather than three channels, because the
              same relationships, references and mandates move across all three. A win on one track compounds on the
              others.
            </p>
          </Reveal>
          <div className="mt-10">
            <WhoWeServe />
          </div>
          <div className="mt-12">
            <EcosystemFlowFigure />
          </div>
        </div>
      </section>

      {/* §17.4 · CTA: primary + sideways proof link */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link to="/contact" className="btn-primary">
            Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/proof" className="text-link-light">
            See the evidence <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
