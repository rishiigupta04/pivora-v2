import Figure from "@/components/figure/Figure";
import data from "@/content/figures/ai-value-chain.json";

/** §20.10 — AI value chain: eight stages, value increasing across the chain. */
export default function AIValueChainFigure({ id = "ai-value-chain", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={data.stages.map((s, i) => `${i + 1}. ${s}`)}
    >
      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-greytext">{data.eyebrow}</p>
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {data.stages.map((s, i) => {
          const last = i === data.stages.length - 1;
          const penultimate = i >= data.stages.length - 2;
          return (
            <li
              key={s}
              className={`relative rounded-xl border p-4 ${
                last
                  ? "border-gold bg-gold text-navy"
                  : penultimate
                    ? "border-gold/70 bg-gold-soft/70"
                    : "border-line bg-white"
              }`}
            >
              <span
                className={`text-[11px] font-semibold tracking-[0.14em] ${
                  last ? "text-navy/70" : penultimate ? "text-gold-dark" : "text-greytext"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`mt-1 text-sm font-semibold leading-snug ${last ? "text-navy" : "text-navy"}`}>{s}</p>
            </li>
          );
        })}
      </ol>
    </Figure>
  );
}
