import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { CTA, NAV, type NavItem } from "@/content/nav";
import { LogoLockup } from "@/components/Logo";

/**
 * §3.2 / §5.2 — sticky white header, 1px border, no shadow.
 * Seven items + persistent gold CTA. Hubs are real pages AND dropdown parents:
 * the label navigates; the chevron toggles the dropdown. Dropdowns open on
 * hover with a 150ms delay (desktop), on tap (mobile), and are keyboard
 * reachable (focus opens, Escape closes).
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white">
        <div className="container-site flex h-[72px] items-center justify-between gap-6">
          <Link to="/" aria-label="Pivora Consulting — home" className="shrink-0">
            <LogoLockup className="h-8 w-auto md:h-9" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
              <li className="ml-3">
                <Link to={CTA.to} className="btn-primary !px-5 !py-2.5 text-sm">
                  {CTA.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen ? <MobileMenu onClose={() => setMobileOpen(false)} /> : null}

      {/* §5.2 — bottom-anchored mobile CTA bar (hidden while menu open) */}
      {!mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur xl:hidden">
          <Link to={CTA.to} className="btn-primary w-full !py-3 text-center text-sm">
            {CTA.label}
          </Link>
        </div>
      ) : null}
    </>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLLIElement>(null);

  const scheduleOpen = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), 150); // §3.2 — 150ms hover delay
  };
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!item.children) {
    return (
      <li>
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `rounded-md px-3 py-2 text-[14.5px] font-medium transition-colors ${
              isActive ? "text-navy underline decoration-gold decoration-2 underline-offset-8" : "text-ink hover:text-navy"
            }`
          }
        >
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onFocus={scheduleOpen}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <span className="flex items-center">
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `rounded-md px-3 py-2 text-[14.5px] font-medium transition-colors ${
              isActive ? "text-navy underline decoration-gold decoration-2 underline-offset-8" : "text-ink hover:text-navy"
            }`
          }
        >
          {item.label}
        </NavLink>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${item.label} submenu`}
          className="-ml-1 rounded-md p-1.5 text-greytext hover:text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </span>
      {open ? (
        <ul
          aria-label={`${item.label} submenu`}
          className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-line bg-white p-2 shadow-lg shadow-navy/5"
        >
          {item.children.map((c) => (
            <li key={c.to}>
              <Link
                to={c.to}
                className="block rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-softgrey hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  return (
    <div id="mobile-menu" className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white pb-28 xl:hidden">
      <nav aria-label="Mobile" className="container-site py-6">
        <ul className="divide-y divide-line">
          {NAV.map((item) => (
            <li key={item.label} className="py-1">
              {item.children ? (
                <>
                  <div className="flex items-center justify-between">
                    <Link to={item.to} className="py-3 font-display text-lg font-bold text-navy" onClick={onClose}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={!!openSections[item.label]}
                      aria-label={`${item.label} submenu`}
                      className="rounded-md p-3 text-greytext"
                      onClick={() => setOpenSections((s) => ({ ...s, [item.label]: !s[item.label] }))}
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform ${openSections[item.label] ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {openSections[item.label] ? (
                    <ul className="mb-3 space-y-1 border-l-2 border-gold/50 pl-4">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to} className="block py-2 text-[15px] text-ink" onClick={onClose}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : (
                <Link to={item.to} className="block py-3 font-display text-lg font-bold text-navy" onClick={onClose}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* §5.2 — CTA persists inside the opened menu */}
        <Link to={CTA.to} className="btn-primary mt-6 w-full !py-3.5 text-center" onClick={onClose}>
          {CTA.label}
        </Link>
      </nav>
    </div>
  );
}
