import Figure from "@/components/figure/Figure";
import data from "@/content/figures/platforms.json";

/** §20.20 — five platforms, one repeat pattern; OutSystems carries the gold emphasis */
export default function PlatformsMatrixFigure({ id = "five-platforms", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption}
      altList={[...data.cards.map((c) => `${c.company} — ${c.eyebrow}: ${c.scope.join(", ")}`), data.footerStrip]}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.cards.map((c) => {
          const gold = c.emphasis === "gold";
          return (
            <div
              key={c.company}
              className={`rounded-xl border p-5 ${
                gold ? "border-gold bg-gold-soft/70 ring-1 ring-gold" : "border-line bg-white"
              }`}
            >
              <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${gold ? "text-gold-dark" : "text-greytext"}`}>
                {c.eyebrow}
              </p>
              <p className="mt-1 font-display text-[17px] font-bold leading-snug text-navy">{c.company}</p>
              <ul className="mt-3 space-y-1.5">
                {c.scope.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[12.5px] leading-snug text-greytext">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${gold ? "bg-gold" : "bg-navy"}`} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mt-5 rounded-xl bg-navy px-5 py-3.5 text-center text-[13px] font-medium text-white/90">
        {data.footerStrip}
      </p>
    </Figure>
  );
}
