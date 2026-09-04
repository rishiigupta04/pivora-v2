import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Figure from "@/components/figure/Figure";
import { DrawDot, DrawPath } from "@/components/motion/DrawPath";
import data from "@/content/figures/bos-motion.json";

/**
 * Figure 5-1 — From ground zero to a predictable growth motion.
 * Three Build–Operate–Sustain phase cards with an ascending traction curve.
 * Gold marks the value/final point only (SUSTAIN + curve terminus), per §21.
 * Vertical stack below 768px; text alternative via Figure altList.
 *
 * Motion (§ Step 6): the phase cards stagger left to right, then the traction
 * curve draws along the same axis with each phase marker landing as the curve
 * reaches it. The gold terminus arrives last, so the eye ends on the value
 * point. Everything is inside the 600ms budget per element and collapses to a
 * fully-formed curve under prefers-reduced-motion.
 */

/* Curve timings — the navy ascent draws first, the gold terminus follows. */
const NAVY_DRAW = 0.6;
const GOLD_DELAY = 0.42;
const GOLD_DRAW = 0.4;

export default function BOSMotionFigure({ id = "bos-motion", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[
        ...data.phases.map(
          (p) =>
            `${p.num}. ${p.phase} (${p.subLabel}): ${p.tagline} Includes: ${p.bullets.join("; ")}. Exit state: ${p.exit}`
        ),
        `Growth curve: ${data.curve.startLabel} rising to ${data.curve.endLabel}. ${data.curve.axisNote}`,
      ]}
    >
      {/* Phase cards — desktop row with connectors, mobile vertical stack */}
      <motion.ol
        className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-3"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.12 } } }}
      >
        {data.phases.map((p, i) => {
          const last = i === data.phases.length - 1;
          return (
            <li key={p.phase} className="contents">
              <motion.div
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-e1 transition-shadow duration-200 hover:shadow-e2 ${
                  last ? "border-gold bg-gold-soft/70" : "border-line bg-white"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  shown: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Phase rule: a hairline that tints gold only on SUSTAIN. */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] ${
                    last ? "bg-gold-sheen" : "bg-navy/15"
                  }`}
                />
                <div className="flex items-baseline justify-between gap-3">
                  <p
                    className={`font-display text-[12px] font-bold uppercase tracking-[0.18em] ${
                      last ? "text-gold-dark" : "text-navy"
                    }`}
                  >
                    {p.phase}
                  </p>
                  <p className={`font-display text-[13px] font-bold ${last ? "text-gold-dark" : "text-greytext"}`}>
                    {p.num}
                  </p>
                </div>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${last ? "text-gold-dark/80" : "text-greytext/80"}`}>
                  {p.subLabel}
                </p>
                <p className="mt-3 font-head text-[17px] font-semibold leading-snug tracking-tight text-navy">{p.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink">
                      <span
                        className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${last ? "bg-gold-dark" : "bg-navy"}`}
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-5 border-t pt-3 text-[12.5px] font-medium leading-relaxed ${
                    last ? "border-gold/50 text-gold-dark" : "border-line text-greytext"
                  }`}
                >
                  <span className="font-bold uppercase tracking-[0.1em]">Exit · </span>
                  {p.exit}
                </p>
              </motion.div>
              {!last ? (
                <>
                  <motion.span
                    className="hidden items-center justify-center self-center text-navy/40 md:flex"
                    aria-hidden="true"
                    variants={{
                      hidden: { opacity: 0, x: -6 },
                      shown: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                  </motion.span>
                  <motion.span
                    className="flex justify-center py-1 text-navy/40 md:hidden"
                    aria-hidden="true"
                    variants={{
                      hidden: { opacity: 0, y: -6 },
                      shown: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <ArrowDown className="h-5 w-5" strokeWidth={2} />
                  </motion.span>
                </>
              ) : null}
            </li>
          );
        })}
      </motion.ol>

      {/* Traction curve — ground zero rising to predictable, compounding growth.
          Drawn rather than presented: the direction of travel is the point. */}
      <div className="mt-10" aria-hidden="true">
        <svg viewBox="0 0 1200 230" className="h-auto w-full" role="presentation">
          <defs>
            {/* Tapered ascent: the navy line gains weight as traction builds. */}
            <linearGradient id="bos-ascent" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--pivora-navy)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="var(--pivora-navy)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="bos-terminus" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--pivora-navy)" />
              <stop offset="100%" stopColor="var(--pivora-gold)" />
            </linearGradient>
          </defs>

          {/* baseline */}
          <line x1="40" y1="190" x2="1160" y2="190" stroke="var(--pivora-line)" strokeWidth="2" />

          {/* ascent: navy until SUSTAIN, gold to the terminus */}
          <DrawPath
            d="M 60 178 C 260 172, 420 158, 580 128 C 700 106, 790 96, 880 84"
            duration={NAVY_DRAW}
            fill="none"
            stroke="url(#bos-ascent)"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <DrawPath
            d="M 880 84 C 980 70, 1070 52, 1140 34"
            duration={GOLD_DRAW}
            delay={GOLD_DELAY}
            fill="none"
            stroke="url(#bos-terminus)"
            strokeWidth={3.5}
            strokeLinecap="round"
          />

          {/* phase markers — each lands as the curve reaches it */}
          <DrawDot after={NAVY_DRAW * 0.22} cx={200} cy={171} r={7} fill="var(--pivora-white)" stroke="var(--pivora-navy)" strokeWidth={3} />
          <DrawDot after={NAVY_DRAW * 0.62} cx={640} cy={117} r={7} fill="var(--pivora-white)" stroke="var(--pivora-navy)" strokeWidth={3} />
          <DrawDot after={GOLD_DELAY + GOLD_DRAW} cx={1140} cy={34} r={8} fill="var(--pivora-gold)" stroke="var(--pivora-white)" strokeWidth={3} />

          {/* labels */}
          <text x="60" y="215" fontSize="15" fontWeight="600" fill="var(--pivora-greytext)" fontFamily="Manrope, Inter, sans-serif">
            {data.curve.startLabel}
          </text>
          <text x="200" y="146" fontSize="13" fontWeight="700" fill="var(--pivora-navy)" textAnchor="middle" fontFamily="Manrope, Inter, sans-serif" letterSpacing="2">
            BUILD
          </text>
          <text x="640" y="92" fontSize="13" fontWeight="700" fill="var(--pivora-navy)" textAnchor="middle" fontFamily="Manrope, Inter, sans-serif" letterSpacing="2">
            OPERATE
          </text>
          <text x="1140" y="14" fontSize="13" fontWeight="700" fill="var(--pivora-gold-dark)" textAnchor="end" fontFamily="Manrope, Inter, sans-serif" letterSpacing="2">
            SUSTAIN
          </text>
          <text x="1160" y="215" fontSize="15" fontWeight="600" fill="var(--pivora-gold-dark)" textAnchor="end" fontFamily="Manrope, Inter, sans-serif">
            {data.curve.endLabel}
          </text>
        </svg>
        <p className="mt-2 text-center text-[12px] text-greytext">{data.curve.axisNote}</p>
      </div>
    </Figure>
  );
}
