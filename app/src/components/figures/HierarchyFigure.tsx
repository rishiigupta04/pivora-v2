import Figure from "@/components/figure/Figure";
import data from "@/content/figures/hierarchy.json";

/** §20.1 — the Pivora strategic hierarchy: five steps, gold terminus on the next move */
export default function HierarchyFigure({ id = "strategic-hierarchy", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption}
      altList={data.steps.map((s) => `${s.step}. ${s.title} — ${s.description}`)}
    >
      <ol className="space-y-0">
        {data.steps.map((s, i) => {
          const gold = s.emphasis === "gold";
          const last = i === data.steps.length - 1;
          return (
            <li key={s.step} className="relative pl-14">
              {!last ? <span className="absolute left-[21px] top-12 h-[calc(100%-3rem)] w-px bg-line" aria-hidden="true" /> : null}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 inline-flex h-11 w-11 items-center justify-center rounded-full font-head text-[15px] font-semibold ${
                  gold ? "bg-gold text-navy" : "bg-navy text-white"
                }`}
              >
                {s.step}
              </span>
              <div className={`pb-8 ${last ? "pb-0" : ""}`}>
                <p className={`font-display text-[18px] font-bold ${gold ? "text-gold-dark" : "text-navy"}`}>{s.title}</p>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-greytext">{s.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Figure>
  );
}
