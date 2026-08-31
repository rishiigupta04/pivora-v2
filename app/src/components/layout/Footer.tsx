import { Link } from "react-router";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/content/nav";
import { LogoLockup } from "@/components/Logo";

/**
 * §3.5 — four columns + legal strip.
 * No social icons: no verified social URLs exist (§29 — BLOCKED, not invented).
 * Email / LinkedIn / registration block (§22.2) are withheld pending owner
 * verification; the Contact column carries the conversation CTA only.
 */
export function Footer() {
  return (
    <footer className="bg-navy pb-24 pt-14 text-white xl:pb-14">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
          <div>
            {/* Logo on a deliberate white clear-space panel: the supplied artwork
                is dark-on-white; no reverse version exists (BLOCKED §29.8). */}
            <div className="inline-block rounded-lg bg-white px-4 py-3">
              <LogoLockup className="h-8 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              The specialist growth bridge for Enterprise B2B platforms — India as market and launchpad.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.title} aria-label={`Footer — ${col.title}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to} className="text-[13.5px] text-white/75 transition-colors hover:text-gold">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[12.5px] text-white/60 transition-colors hover:text-gold">
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
