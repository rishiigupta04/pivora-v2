import Figure from "@/components/figure/Figure";
import india from "@/content/figures/india-stats.json";
import gcc from "@/content/figures/gcc-stats.json";
import sources from "@/content/sources.json";

type Tile = { figure: string; label: string; sourceId: keyof typeof sources };

/**
 * §20.22 / §20.22a stat tiles. Every tile renders its source line from the
 * §26 verified register (sources.json) — a stat may not exist without one (§27).
 */
export function StatTiles({
  id,
  tiles,
  title,
  caption,
  context,
  tone = "light",
}: {
  id: string;
  tiles: Tile[];
  title: string;
  caption?: string;
  context?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Figure
      id={id}
      title={title}
      caption={caption}
      altList={tiles.map((t) => `${t.figure} — ${t.label} (Source: ${sources[t.sourceId].source}, ${sources[t.sourceId].date})`)}
    >
      <div className={`grid gap-4 sm:grid-cols-2 ${tiles.length > 3 ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}>
        {tiles.map((t) => {
          const s = sources[t.sourceId];
          return (
            <div
              key={t.label}
              className={`rounded-xl border p-5 ${
                dark ? "border-white/15 bg-white/[0.04]" : "border-line bg-white"
              }`}
            >
              <p className={`font-head text-[30px] font-semibold leading-none ${dark ? "text-gold" : "text-navy"}`}>
                {t.figure}
              </p>
              <p className={`mt-2 text-[13.5px] leading-snug ${dark ? "text-white/80" : "text-greytext"}`}>{t.label}</p>
              <p className={`mt-3 border-t pt-2 text-[11px] leading-snug ${dark ? "border-white/10 text-white/50" : "border-line text-greytext/80"}`}>
                Source: {s.source}, {s.date}
              </p>
            </div>
          );
        })}
      </div>
      {context ? (
        <p className={`mt-5 text-[13px] leading-relaxed ${dark ? "text-white/65" : "text-greytext"}`}>{context}</p>
      ) : null}
    </Figure>
  );
}

export function IndiaStatTiles(props: { id?: string; tone?: "light" | "dark" }) {
  return (
    <StatTiles
      id={props.id ?? "india-opportunity"}
      tiles={india.tiles as Tile[]}
      title={india.title}
      context={india.context}
      tone={props.tone}
    />
  );
}

export function GCCStatTiles(props: { id?: string; tone?: "light" | "dark" }) {
  return (
    <StatTiles
      id={props.id ?? "gcc-mandate-shift"}
      tiles={gcc.tiles as Tile[]}
      title={gcc.title}
      caption={gcc.caption}
      tone={props.tone}
    />
  );
}
