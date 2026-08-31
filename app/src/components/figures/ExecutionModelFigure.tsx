import Figure from "@/components/figure/Figure";
import data from "@/content/figures/execution-model.json";

/** §20.17 — execution model: governance layer, client pods, shared services bench */
export default function ExecutionModelFigure({ id = "execution-model", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[
        `${data.governance.name}: ${data.governance.contents}`,
        ...data.pods.map((p) => `${p.name}: ${p.roles.join(", ")}`),
        `${data.bench.name}: ${data.bench.items.join(", ")} — ${data.bench.note}`,
      ]}
    >
      {/* Governance layer */}
      <div className="rounded-xl bg-navy px-5 py-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{data.governance.name}</p>
        <p className="mt-1 text-sm text-white/85">{data.governance.contents}</p>
      </div>
      {/* Connector */}
      <div className="mx-auto h-6 w-px bg-gold" aria-hidden="true" />
      {/* Pods */}
      <div className="grid gap-4 md:grid-cols-3">
        {data.pods.map((p) => (
          <div key={p.name} className="rounded-xl border border-line bg-white p-5">
            <p className="font-display text-[16px] font-bold text-navy">{p.name}</p>
            <ul className="mt-3 space-y-1.5">
              {p.roles.map((r) => (
                <li key={r} className="flex items-center gap-2 text-[13px] text-greytext">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" /> {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Connector */}
      <div className="mx-auto h-6 w-px bg-gold" aria-hidden="true" />
      {/* Bench */}
      <div className="rounded-xl border border-gold bg-gold-soft/70 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-display text-[16px] font-bold text-navy">{data.bench.name}</p>
          <p className="text-[12px] text-greytext">{data.bench.note}</p>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {data.bench.items.map((b) => (
            <li key={b} className="rounded-full border border-line bg-white px-3 py-1 text-[12.5px] font-medium text-navy">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Figure>
  );
}
