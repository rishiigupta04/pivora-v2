import Figure from "@/components/figure/Figure";
import data from "@/content/figures/ai-gates.json";

/** §20.11 — six sequential gates; any "no" ends the conversation; close bar; decision table */
export default function AIGatesFigure({ id = "ai-gates", caption }: { id?: string; caption?: string }) {
  return (
    <Figure
      id={id}
      title={data.title}
      caption={caption ?? data.caption}
      altList={[
        ...data.gates.map((g, i) => `Gate ${i + 1}: ${g}`),
        `A No at any gate: ${data.noLabel}.`,
        `Close: ${data.closeBar}`,
      ]}
    >
      <ol className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        {data.gates.map((g, i) => (
          <li key={g} className="rounded-xl border border-line bg-white p-4">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[12px] font-bold text-gold">
              {i + 1}
            </span>
            <p className="mt-2 text-sm font-semibold leading-snug text-navy">{g}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold bg-gold-soft px-4 py-1.5 text-[12.5px] font-semibold text-navy">
        <span aria-hidden="true">✕</span> {data.noLabel} — the conversation ends here.
      </p>
      <div className="mt-4 rounded-xl bg-navy px-5 py-4 text-sm font-semibold leading-relaxed text-gold">
        {data.closeBar}
      </div>
    </Figure>
  );
}

/** §12 — the published decision table (request / decision / reason) */
export function AIDecisionTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <caption className="sr-only">Decision table: example AI requests and Pivora's answer, with the reason</caption>
        <thead>
          <tr className="bg-navy text-white">
            <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Request</th>
            <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Decision</th>
            <th scope="col" className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em]">Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.decisionTable.map((row) => (
            <tr key={row.request} className="border-t border-line odd:bg-white even:bg-softgrey/60">
              <th scope="row" className="px-4 py-3 font-medium text-navy">{row.request}</th>
              <td className={`px-4 py-3 font-bold ${row.decision === "Yes" ? "text-navy" : "text-gold-dark"}`}>{row.decision}</td>
              <td className="px-4 py-3 text-greytext">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
