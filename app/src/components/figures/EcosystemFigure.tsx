import Figure from "@/components/figure/Figure";
import data from "@/content/figures/ecosystem.json";

/** §20.21 — the relationship ecosystem: founder hub, three tracks, gold outcome lines */
export default function EcosystemFigure({ id = "relationship-ecosystem", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[`Hub: ${data.hub}`, ...data.tracks.map((t) => `${t.name}: ${t.description} — outcome: ${t.outcome}`)]}
    >
      <div className="mx-auto max-w-xs rounded-full bg-navy px-6 py-3 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Hub</p>
        <p className="font-display text-lg font-bold text-white">{data.hub}</p>
      </div>
      <div className="mx-auto h-8 w-px bg-gold" aria-hidden="true" />
      <div className="grid gap-4 md:grid-cols-3">
        {data.tracks.map((t) => (
          <div key={t.name} className="rounded-xl border border-line bg-white p-5">
            <p className="font-display text-[17px] font-bold text-navy">{t.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-greytext">{t.description}</p>
            <p className="mt-3 border-t border-gold/60 pt-3 text-[13px] font-semibold text-gold-dark">{t.outcome}</p>
          </div>
        ))}
      </div>
    </Figure>
  );
}
