import Figure from "@/components/figure/Figure";
import data from "@/content/figures/proof-tiers.json";

/** §20.12 — five proof tiers, descending stagger, tier 1 navy → tier 5 gold; honest pending states */
export default function ProofTiersFigure({ id = "proof-tiers", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={`${data.statusLine}${caption ? ` ${caption}` : ""}`}
      altList={data.tiers.map(
        (t) => `Tier ${t.tier} — ${t.name} (${t.status}). ${t.description}. Rule: ${t.rule}${t.note ? ` ${t.note}` : ""}`
      )}
    >
      <ol className="flex flex-col gap-3 lg:flex-row lg:items-end">
        {data.tiers.map((t, i) => {
          const top = i === 0;
          const bottom = i === data.tiers.length - 1;
          const populated = t.status === "Populated";
          return (
            <li
              key={t.tier}
              className={`flex-1 rounded-xl border p-5 ${["lg:mb-0", "lg:mb-4", "lg:mb-8", "lg:mb-12", "lg:mb-16"][i]} ${
                top
                  ? "border-navy bg-navy text-white"
                  : bottom
                    ? "border-gold bg-gold text-navy"
                    : "border-line bg-white"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    top ? "text-gold" : bottom ? "text-navy/70" : "text-gold-dark"
                  }`}
                >
                  Tier {t.tier}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    populated
                      ? top
                        ? "bg-white/10 text-gold"
                        : bottom
                          ? "bg-navy/10 text-navy"
                          : "bg-softgrey text-navy"
                      : "border border-dashed border-gold-dark/60 bg-gold-soft/60 text-gold-dark"
                  }`}
                >
                  {t.status}
                </span>
              </div>
              <p className={`mt-2 font-display text-[17px] font-bold leading-snug ${top ? "text-white" : "text-navy"}`}>{t.name}</p>
              <p className={`mt-1.5 text-[12.5px] leading-relaxed ${top ? "text-white/75" : bottom ? "text-navy/75" : "text-greytext"}`}>
                {t.description}
              </p>
              <p
                className={`mt-2 text-[11.5px] italic leading-relaxed ${
                  top ? "text-white/60" : bottom ? "text-navy/60" : "text-greytext/90"
                }`}
              >
                {t.note || t.rule}
              </p>
            </li>
          );
        })}
      </ol>
    </Figure>
  );
}
