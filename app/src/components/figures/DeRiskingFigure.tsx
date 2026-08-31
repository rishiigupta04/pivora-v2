import { ArrowRight } from "lucide-react";
import Figure from "@/components/figure/Figure";
import data from "@/content/figures/derisking.json";

/** §20.18 — de-risking equation: risks off the table → value on the table (brand tokens only) */
export default function DeRiskingFigure({ id = "derisking", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption}
      altList={[
        ...data.rows.map((r) => `${data.leftTitle}: ${r.risk} — becomes — ${data.rightTitle}: ${r.value}`),
        data.footerStrip,
      ]}
    >
      <div className="overflow-hidden rounded-2xl border border-line">
        <div className="grid md:grid-cols-[1fr_auto_1fr]">
          <p className="bg-navy px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
            {data.leftTitle}
          </p>
          <p className="hidden bg-navy px-3 py-3 md:block" aria-hidden="true" />
          <p className="bg-navy px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold md:border-l md:border-white/10">
            {data.rightTitle}
          </p>
        </div>
        {data.rows.map((r) => (
          <div key={r.risk} className="grid border-t border-line md:grid-cols-[1fr_auto_1fr]">
            <p className="px-5 py-4 text-sm leading-relaxed text-greytext">{r.risk}</p>
            <p className="hidden items-center px-3 md:flex" aria-hidden="true">
              <ArrowRight className="h-4 w-4 text-gold" />
            </p>
            <p className="bg-gold-soft/50 px-5 py-4 text-sm font-medium leading-relaxed text-navy md:border-l md:border-line">
              {r.value}
            </p>
          </div>
        ))}
        <p className="border-t border-line bg-white px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
          {data.footerStrip}
        </p>
      </div>
    </Figure>
  );
}
