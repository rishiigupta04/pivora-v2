import { motion } from "framer-motion";
import { X } from "lucide-react";
import Figure from "@/components/figure/Figure";
import { EASE, stagger } from "@/components/motion/variants";
import data from "@/content/figures/ai-gates.json";

/**
 * §20.11 — six sequential gates; any "no" ends the conversation; close bar;
 * decision table.
 *
 * Motion (§ Step 6): the gates reveal one after another, which is the point —
 * they are sequential, and a "no" at any of them stops the sequence. The stop
 * marker and the close bar land after all six.
 */
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
      <motion.ol
        className="grid gap-3 md:grid-cols-3 xl:grid-cols-6"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.07)}
      >
        {data.gates.map((g, i) => (
          <motion.li
            key={g}
            className="relative overflow-hidden rounded-xl border border-line bg-white p-4 shadow-e1 transition-shadow duration-200 hover:shadow-e2"
            variants={{
              hidden: { opacity: 0, y: 12 },
              shown: { opacity: 1, y: 0, transition: { duration: 0.34, ease: EASE } },
            }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-navy/15" />
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy-depth bg-navy text-[12px] font-bold text-gold shadow-e1">
              {i + 1}
            </span>
            <p className="mt-2.5 text-sm font-semibold leading-snug text-navy">{g}</p>
          </motion.li>
        ))}
      </motion.ol>

      <motion.p
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold bg-gold-soft px-4 py-2 text-[12.5px] font-semibold text-navy shadow-e1"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.36, delay: 0.42, ease: EASE }}
      >
        <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" /> {data.noLabel} — the conversation ends here.
      </motion.p>

      <motion.div
        className="grain relative mt-4 overflow-hidden rounded-xl bg-navy-depth px-6 py-5 text-sm font-semibold leading-relaxed text-gold shadow-e2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
      >
        <span className="relative">{data.closeBar}</span>
      </motion.div>
    </Figure>
  );
}

/** §12 — the published decision table (request / decision / reason) */
export function AIDecisionTable() {
  return (
    <motion.div
      className="overflow-x-auto rounded-xl border border-line shadow-e1"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <caption className="sr-only">Decision table: example AI requests and Pivora's answer, with the reason</caption>
        <thead>
          <tr className="bg-navy-depth bg-navy text-white">
            <th scope="col" className="px-4 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em]">Request</th>
            <th scope="col" className="px-4 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em]">Decision</th>
            <th scope="col" className="px-4 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em]">Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.decisionTable.map((row) => (
            <tr
              key={row.request}
              className="border-t border-line odd:bg-white even:bg-softgrey/60 transition-colors hover:bg-gold-soft/30"
            >
              <th scope="row" className="px-4 py-3.5 font-medium text-navy">{row.request}</th>
              <td className={`px-4 py-3.5 font-bold ${row.decision === "Yes" ? "text-navy" : "text-gold-dark"}`}>
                {row.decision}
              </td>
              <td className="px-4 py-3.5 text-greytext">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
