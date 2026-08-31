import Figure from "@/components/figure/Figure";
import data from "@/content/figures/gtm-multiplier.json";

/** §20.16 — the India GTM multiplier: hub + four loops; solid = evidenced, dashed = strategy */
export default function GTMMultiplierFigure({ id = "gtm-multiplier", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[
        `Hub: ${data.hub.join(" — ")}`,
        ...data.loops.map((l) => `Loop ${l.loop}, ${l.mechanic} (${l.basis}): ${l.says}`),
        `Legend: solid border = ${data.legend.evidenced}; dashed border = ${data.legend.strategy}.`,
      ]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-navy p-6 text-white md:col-span-2 lg:col-span-1 lg:row-span-2 lg:flex lg:flex-col lg:justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{data.hub[0]}</p>
          <p className="mt-2 font-head text-2xl font-semibold leading-snug">{data.hub[1]}</p>
        </div>
        {data.loops.map((l) => {
          const evidenced = l.basis === "evidenced";
          return (
            <div
              key={l.loop}
              className={`rounded-2xl border-2 bg-white p-6 ${
                evidenced ? "border-solid border-navy" : "border-dashed border-gold-dark/70"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-[16px] font-bold leading-snug text-navy">{l.mechanic}</p>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] ${
                    evidenced ? "bg-navy text-gold" : "bg-gold-soft text-gold-dark"
                  }`}
                >
                  {evidenced ? data.legend.evidenced : data.legend.strategy}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-greytext">{l.says}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-greytext">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-6 rounded-sm border-2 border-solid border-navy" aria-hidden="true" /> {data.legend.evidenced}
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-6 rounded-sm border-2 border-dashed border-gold-dark/70" aria-hidden="true" /> {data.legend.strategy}
        </span>
      </div>
    </Figure>
  );
}
