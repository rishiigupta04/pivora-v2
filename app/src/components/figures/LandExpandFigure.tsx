import Figure from "@/components/figure/Figure";
import { StepRail } from "@/components/figures/StepRail";
import data from "@/content/figures/land-expand.json";

/**
 * Figure 14-2 — Land → Implement → Prove Value → Expand → Sustain.
 * The account-level motion that runs inside every Build–Operate–Sustain
 * engagement. Gold marks the final value point only (SUSTAIN), per §21.
 * Vertical stack below 768px; text alternative via Figure altList.
 * `framed={false}` renders the bare stepper for embedding inside a section.
 *
 * The stepper itself is shared with ValueMotionFigure — see StepRail.
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
    <StepRail steps={data.steps} gridClass="md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]" />
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
