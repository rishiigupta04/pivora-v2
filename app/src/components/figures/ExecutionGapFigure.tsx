import Figure from "@/components/figure/Figure";
import data from "@/content/figures/execution-gap.json";

/**
 * §20.15 — the execution gap. Set A: intent vs reality (~75 / 57 / 43 + ₹5.6 crore).
 * Set B: verified consequences (67 / 53 / 48 / 46). Source line inside the figure (§20.15).
 */
export default function ExecutionGapFigure({ id = "execution-gap", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={`${data.sourceLine}${caption ? ` ${caption}` : ""}`}
      altList={[
        ...data.setA.bars.map((b) => `${data.setA.title}: ${b.metric} — ${b.prefix}${b.value}${b.unit}`),
        `${data.setALoss.metric}: ${data.setALoss.value}`,
        ...data.setB.bars.map((b) => `${data.setB.title}: ${b.metric} — ${b.value}${b.unit}`),
      ]}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Set A */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy">{data.setA.title}</p>
          <div className="mt-4 space-y-4">
            {data.setA.bars.map((b, i) => (
              <div key={b.metric}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium text-navy">{b.metric}</span>
                  <span className="font-display text-xl font-bold text-navy">
                    {b.prefix}
                    {b.value}
                    {b.unit}
                  </span>
                </div>
                <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-softgrey">
                  <div
                    className={`figure-line h-full rounded-full ${i === 0 ? "bg-gold" : "bg-navy"}`}
                    style={{ width: `${b.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl border border-gold bg-gold-soft/70 px-4 py-3 text-[13px] font-medium leading-relaxed text-navy">
            {data.setALoss.metric}: <span className="font-display text-lg font-bold">{data.setALoss.value}</span>
          </p>
        </div>
        {/* Set B */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy">{data.setB.title}</p>
          <div className="mt-4 space-y-4">
            {data.setB.bars.map((b) => (
              <div key={b.metric}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium text-navy">{b.metric}</span>
                  <span className="font-display text-xl font-bold text-gold-dark">
                    {b.value}
                    {b.unit}
                  </span>
                </div>
                <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-softgrey">
                  <div className="figure-line h-full rounded-full bg-navy" style={{ width: `${b.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Figure>
  );
}
