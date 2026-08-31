import Figure, { NodeCircle } from "@/components/figure/Figure";
import data from "@/content/figures/flywheel.json";

/** §20.13 — the qualification flywheel: six nodes on a dashed ring. */
export default function FlywheelFigure({ id = "qualification-flywheel", caption }: { id?: string; caption?: string }) {
  const pos = [
    { x: 50, y: 4 },
    { x: 90, y: 27 },
    { x: 90, y: 73 },
    { x: 50, y: 96 },
    { x: 10, y: 73 },
    { x: 10, y: 27 },
  ];
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={data.nodes.map((n, i) => `${i + 1}. ${n}`)}
    >
      {/* Desktop ring */}
      <div className="relative mx-auto hidden aspect-square max-w-[520px] md:block" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle cx="50" cy="50" r="36" fill="none" stroke="var(--pivora-gold)" strokeWidth="0.7" strokeDasharray="2.5 2.5" />
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-display text-lg font-bold leading-tight text-navy">
            {data.hub[0]}
            <br />
            {data.hub[1]}
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-gold-dark">{data.hubSub}</p>
        </div>
        {data.nodes.map((n, i) => (
          <div
            key={n}
            className="absolute w-[124px] -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}
          >
            <span className="mx-auto block w-fit">
              <NodeCircle label={String(i + 1)} tone={i % 2 === 0 ? "navy" : "gold"} size="sm" />
            </span>
            <p className="mt-1.5 text-[13px] font-semibold leading-tight text-navy">{n}</p>
          </div>
        ))}
      </div>
      {/* Mobile list */}
      <ol className="space-y-3 md:hidden">
        {data.nodes.map((n, i) => (
          <li key={n} className="flex items-center gap-3">
            <NodeCircle label={String(i + 1)} tone={i % 2 === 0 ? "navy" : "gold"} size="sm" />
            <p className="text-sm font-semibold text-navy">{n}</p>
          </li>
        ))}
      </ol>
    </Figure>
  );
}
