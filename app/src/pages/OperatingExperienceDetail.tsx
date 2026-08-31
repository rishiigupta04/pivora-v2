import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABlock } from "@/components/blocks";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import NotFound from "@/pages/NotFound";
import { storyBySlug } from "@/content/experience";
import sources from "@/content/sources.json";

/**
 * Operating Experience detail (KIMI master prompt §10–12) — Context / Challenge /
 * Approach / Outcome (verified only) / What made it work. Sources cited from the
 * registered public record; unknown slugs fall through to the 404 page.
 */
export default function OperatingExperienceDetail() {
  const { slug } = useParams();
  const story = storyBySlug(slug);
  if (!story) return <NotFound />;

  const cited = story.sourceIds.map((id) => ({
    id,
    ...(sources[id] as { source: string; date: string; url?: string }),
  }));

  return (
    <>
      <PageHero eyebrow={`Selected Operating Experience · ${story.theme}`} title={story.title}>
        <p className="mt-4 text-[13.5px] font-semibold text-white/70">{story.companies}</p>
        <p className="mt-6">
          <Link
            to="/proof/case-studies"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-gold transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> All operating experience
          </Link>
        </p>
      </PageHero>

      {/* Context + Challenge */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow">Context</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink">{story.context}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border-l-2 border-l-gold bg-softgrey/70 p-6 md:p-7">
              <p className="eyebrow">The Challenge</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink">{story.challenge}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <Section eyebrow="Approach" title="How the work was done" tone="grey">
        <Reveal>
          <ol className="grid gap-3 md:grid-cols-2">
            {story.approach.map((a, i) => (
              <li key={a} className="flex items-start gap-3.5 rounded-xl border border-line bg-white p-5">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy font-display text-[12px] font-bold text-gold">
                  {i + 1}
                </span>
                <p className="text-[14.5px] leading-relaxed text-ink">{a}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* Outcome — verified public record only, no fabricated metrics */}
      <Section eyebrow="Outcome" title="What is on the record">
        <Reveal>
          <ul className="max-w-3xl space-y-4">
            {story.outcome.map((o) => (
              <li key={o.slice(0, 48)} className="flex items-start gap-3 border-l-2 border-gold pl-4 text-[15px] leading-relaxed text-ink">
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[13.5px] leading-relaxed text-greytext">
            Only verified, publicly documented facts are stated. Commercial metrics, client names and engagement
            outcomes beyond the public record are published only when client-approved and verifiable — never implied.
          </p>
        </Reveal>
      </Section>

      {/* What made it work */}
      <Section eyebrow="What Made It Work" title="The transferable lessons" tone="grey">
        <Reveal>
          <ul className="grid gap-3 md:grid-cols-3">
            {story.madeItWork.map((m) => {
              const [head, rest] = m.split(" — ");
              return (
                <li key={m} className="rounded-xl border border-line bg-white p-5">
                  <p className="font-display text-[15px] font-bold leading-snug text-navy">{head}</p>
                  {rest ? <p className="mt-2 text-[13.5px] leading-relaxed text-greytext">{rest}</p> : null}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Section>

      {/* Sources — the public record behind this story */}
      <section className="bg-white pb-12 md:pb-16">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-greytext">On the record</p>
            <ul className="mt-3 space-y-1.5">
              {cited.map((c) => (
                <li key={c.id} className="text-[13px] leading-relaxed text-greytext">
                  {c.source}, {c.date}
                  {c.url ? (
                    <>
                      {" — "}
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-navy underline decoration-gold/70 underline-offset-2 transition-colors hover:text-gold-dark"
                      >
                        source
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABlock primaryLabel="Discuss a Similar Build" sidewaysLabel="All operating experience" sidewaysTo="/proof/case-studies" />
    </>
  );
}
