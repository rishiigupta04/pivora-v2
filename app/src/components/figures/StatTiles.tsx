import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { CountUp } from "@/components/motion/CountUp";
import { LIFT, LIFT_TRANSITION, riseTight, stagger } from "@/components/motion/variants";
import india from "@/content/figures/india-stats.json";
import gcc from "@/content/figures/gcc-stats.json";
import sources from "@/content/sources.json";

type Tile = { figure: string; label: string; sourceId: keyof typeof sources };

/**
 * §20.22 / §20.22a stat tiles. Every tile renders its source line from the
 * §26 verified register (sources.json) — a stat may not exist without one (§27).
 *
 * Typographic contrast (§ Step 2): the figure is set dramatically larger than
 * its label, so the number is what the eye lands on and the source line reads
 * as the footnote it is.
 *
 * Motion (§ Step 6): tiles reveal as a sequence and each figure counts up from
 * zero. CountUp animates only the numeric run inside the authored string, so
 * "US$176.4B" can never be reformatted by the animation.
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
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.08)}
      >
        {tiles.map((t) => {
          const s = sources[t.sourceId];
          return (
            <motion.div
              key={t.label}
              variants={riseTight}
              whileHover={LIFT}
              transition={LIFT_TRANSITION}
              className={`relative overflow-hidden rounded-xl border p-6 ${
                dark
                  ? "border-white/15 bg-white/[0.05] shadow-e2-dark"
                  : "border-line bg-white shadow-e1 transition-shadow duration-200 hover:shadow-e2"
              }`}
            >
              {/* Gold hairline along the top edge — the tile has an edge, and
                  the accent sits on the figure rather than behind it. */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gold/40" />
              <CountUp
                value={t.figure}
                className={`stat-figure block text-[34px] md:text-[40px] ${dark ? "text-gold" : "text-navy"}`}
              />
              <p className={`mt-2.5 text-[13.5px] leading-[1.6] ${dark ? "text-white/80" : "text-greytext"}`}>{t.label}</p>
              <p
                className={`mt-4 border-t pt-2.5 text-[11px] leading-snug ${
                  dark ? "border-white/10 text-white/50" : "border-line text-greytext/80"
                }`}
              >
                Source: {s.source}, {s.date}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
      {context ? (
        <p className={`mt-6 text-[13px] leading-[1.7] ${dark ? "text-white/65" : "text-greytext"}`}>{context}</p>
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
