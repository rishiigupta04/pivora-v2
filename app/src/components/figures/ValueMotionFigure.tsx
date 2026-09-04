import Figure from "@/components/figure/Figure";
import { StepRail } from "@/components/figures/StepRail";
import data from "@/content/figures/value-motion.json";

/**
 * Figure 12-3 — Define Value → Deliver Value → Realise Value → Expand Value.
 * The primary infographic for Value-Led AI Services: specialist capability is
 * applied against value milestones, not sold as capacity. Gold marks the final
 * value point only (Expand Value), per §21. Vertical stack below 768px.
 *
 * The stepper itself is shared with LandExpandFigure — see StepRail.
 */
export default function ValueMotionFigure({ id = "value-motion", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption}
      altList={[
        ...data.steps.map((s, i) => `${i + 1}. ${s.step}: ${s.line}`),
        `Philosophy: ${data.philosophy} ${data.notPhilosophy}`,
      ]}
    >
      <StepRail steps={data.steps} gridClass="md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]" />
    </Figure>
  );
}
