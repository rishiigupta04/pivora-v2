import { ArrowDown, ArrowRight } from "lucide-react";
import Figure from "@/components/figure/Figure";
import data from "@/content/figures/land-expand.json";

/**
 * Figure 14-2 — Land → Implement → Prove Value → Expand → Sustain.
 * The account-level motion that runs inside every Build–Operate–Sustain
 * engagement. Gold marks the final value point only (SUSTAIN), per §21.
 * Vertical stack below 768px; text alternative via Figure altList.
 * `framed={false}` renders the bare stepper for embedding inside a section.
 */
export default function LandExpandFigure({
  id = "land-expand",
  caption,
  framed = true,
}: {
  id?: string;
  caption?: string;
  framed?: boolean;
}) {
  const steps = (
    <ol className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-2.5">
      {data.steps.map((s, i) => {
        const last = i === data.steps.length - 1;
        return (
          <li key={s.step} className="contents">
            <div
              className={`flex h-full flex-col rounded-xl border p-4 ${
                last ? "border-gold bg-gold-soft/70" : "border-line bg-white"
              }`}
            >
              <p
                className={`font-display text-[11px] font-bold uppercase tracking-[0.16em] ${
                  last ? "text-gold-dark" : "text-navy"
                }`}
              >
                {s.step}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-greytext">{s.line}</p>
            </div>
            {!last ? (
              <>
                <ArrowRight className="hidden h-4 w-4 self-center text-gold md:block" aria-hidden="true" />
                <ArrowDown className="mx-auto h-4 w-4 text-gold md:hidden" aria-hidden="true" />
              </>
            ) : null}
          </li>
        );
      })}
    </ol>
  );

  if (!framed) return steps;

  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[...data.steps.map((s, i) => `${i + 1}. ${s.step}: ${s.line}`), data.message]}
    >
      {steps}
    </Figure>
  );
}
