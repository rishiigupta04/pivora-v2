import { Link } from "react-router";
import { motion } from "framer-motion";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/content/nav";
import { LogoLockup } from "@/components/Logo";

/**
 * §3.5 — four columns + legal strip.
 * No social icons: no verified social URLs exist (§29 — BLOCKED, not invented).
 * Email / LinkedIn / registration block (§22.2) are withheld pending owner
 * verification; the Contact column carries the conversation CTA only.
 *
 * Depth (§ Step 2): navy gradient with grain and a gold hairline along the top
 * edge, so the footer reads as the page's base rather than a flat block.
 * Columns reveal as a sequence on scroll; links grow a gold rule on hover.
 */
export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-navy-depth pb-24 pt-16 text-white xl:pb-16">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />
      <div className="container-site relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo on a deliberate white clear-space panel: the supplied artwork
                is dark-on-white; no reverse version exists (BLOCKED §29.8). */}
            <div className="inline-block rounded-lg bg-white px-4 py-3 shadow-e2">
              <LogoLockup className="h-8 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-[1.7] text-white/65">
              The specialist growth bridge for Enterprise B2B platforms — India as market and launchpad.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.08 } } }}
          >
            {FOOTER_COLUMNS.map((col) => (
              <motion.nav
                key={col.title}
                aria-label={`Footer — ${col.title}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  shown: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{col.title}</p>
                <span aria-hidden="true" className="mt-3 block h-px w-8 bg-gold/35" />
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to} className="link-grow text-[13.5px] text-white/75 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-grow text-[12.5px] text-white/60 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[12.5px] text-white/50">© Pivora Consulting LLP</p>
        </div>
      </div>
    </footer>
  );
}
