import { ArrowDown, ArrowRight } from "lucide-react";
import Figure from "@/components/figure/Figure";
import data from "@/content/figures/bos-motion.json";

/**
 * Figure 5-1 — From ground zero to a predictable growth motion.
 * Three Build–Operate–Sustain phase cards with an ascending traction curve.
 * Gold marks the value/final point only (SUSTAIN + curve terminus), per §21.
 * Vertical stack below 768px; text alternative via Figure altList.
 */
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
      <ol className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-3">
        {data.phases.map((p, i) => {
          const last = i === data.phases.length - 1;
          return (
            <li key={p.phase} className="contents">
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 ${
                  last ? "border-gold bg-gold-soft/70" : "border-line bg-white"
                }`}
              >
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
                <p className="mt-3 font-head text-[17px] font-semibold leading-snug text-navy">{p.tagline}</p>
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
              </div>
              {!last ? (
                <>
                  <span className="hidden items-center justify-center self-center text-navy/40 md:flex" aria-hidden="true">
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="flex justify-center py-1 text-navy/40 md:hidden" aria-hidden="true">
                    <ArrowDown className="h-5 w-5" strokeWidth={2} />
                  </span>
                </>
              ) : null}
            </li>
          );
        })}
      </ol>

      {/* Traction curve — ground zero rising to predictable, compounding growth */}
      <div className="mt-8" aria-hidden="true">
        <svg viewBox="0 0 1200 230" className="h-auto w-full" role="presentation">
          {/* baseline */}
          <line x1="40" y1="190" x2="1160" y2="190" stroke="var(--pivora-line)" strokeWidth="2" />
          {/* ascent: navy until SUSTAIN, gold to the terminus */}
          <path
            d="M 60 178 C 260 172, 420 158, 580 128 C 700 106, 790 96, 880 84"
            fill="none"
            stroke="var(--pivora-navy)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 880 84 C 980 70, 1070 52, 1140 34"
            fill="none"
            stroke="var(--pivora-gold)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* phase markers */}
          <circle cx="200" cy="171" r="7" fill="var(--pivora-white)" stroke="var(--pivora-navy)" strokeWidth="3" />
          <circle cx="640" cy="117" r="7" fill="var(--pivora-white)" stroke="var(--pivora-navy)" strokeWidth="3" />
          <circle cx="1140" cy="34" r="8" fill="var(--pivora-gold)" stroke="var(--pivora-white)" strokeWidth="3" />
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
