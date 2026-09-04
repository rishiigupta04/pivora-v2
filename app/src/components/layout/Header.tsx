import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { CTA, NAV, type NavItem } from "@/content/nav";
import { LogoLockup } from "@/components/Logo";

/**
 * §3.2 / §5.2 — sticky header. Seven items + persistent gold CTA. Hubs are
 * real pages AND dropdown parents: the label navigates; the chevron toggles
 * the dropdown. Dropdowns open on hover with a 150ms delay (desktop), on tap
 * (mobile), and are keyboard reachable (focus opens, Escape closes).
 *
 * Motion: the bar compacts and frosts once the page has scrolled, so the
 * header reads as a layer above the page rather than part of it. Dropdowns
 * and the mobile menu animate open and closed instead of snapping. All of it
 * collapses under prefers-reduced-motion via the root MotionConfig.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  // Height is not a transform, so the root MotionConfig does not suppress it.
  const reduced = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 12);
  });

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
      <motion.header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? "border-line/80 bg-white/85 shadow-e1 backdrop-blur-xl backdrop-saturate-150"
            : "border-line bg-white"
        }`}
      >
        <motion.div
          className="container-site flex items-center justify-between gap-6"
          animate={{ height: scrolled ? 62 : 72 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" aria-label="Pivora Consulting — home" className="shrink-0">
            <motion.span
              className="block"
              animate={{ scale: scrolled ? 0.92 : 1 }}
              style={{ transformOrigin: "left center" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <LogoLockup className="h-8 w-auto md:h-9" />
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
              <li className="ml-3">
                <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
                  <Link to={CTA.to} className="btn-primary !px-5 !py-2.5 text-sm">
                    {CTA.label}
                  </Link>
                </motion.span>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <motion.button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:border-navy/30 hover:bg-softgrey xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.94 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.16 }}
                className="flex"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>{mobileOpen ? <MobileMenu onClose={() => setMobileOpen(false)} /> : null}</AnimatePresence>

      {/* §5.2 — bottom-anchored mobile CTA bar (hidden while menu open) */}
      <AnimatePresence>
        {!mobileOpen ? (
          <motion.div
            className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/92 p-3 backdrop-blur-xl xl:hidden"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={CTA.to} className="btn-primary w-full !py-3 text-center text-sm">
              {CTA.label}
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/** Nav label with a gold rule that grows on hover and stays put when active. */
function NavLabel({ item }: { item: NavItem }) {
  return (
    <NavLink to={item.to} className="group relative rounded-md px-3 py-2 text-[14.5px] font-medium">
      {({ isActive }) => (
        <>
          <span className={`transition-colors ${isActive ? "text-navy" : "text-ink group-hover:text-navy"}`}>
            {item.label}
          </span>
          <span
            aria-hidden="true"
            className={`absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-gold transition-transform duration-300 ease-out ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </>
      )}
    </NavLink>
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

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  if (!item.children) {
    return (
      <li>
        <NavLabel item={item} />
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
        <NavLabel item={item} />
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${item.label} submenu`}
          className="-ml-1 rounded-md p-1.5 text-greytext transition-colors hover:text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      </span>
      <AnimatePresence>
        {open ? (
          <motion.ul
            aria-label={`${item.label} submenu`}
            className="absolute left-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-xl border border-line bg-white/95 p-2 shadow-e3 backdrop-blur-xl"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold hairline along the top edge — marks the panel as a layer. */}
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gold/40" />
            {item.children.map((c, i) => (
              <motion.li
                key={c.to}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: 0.03 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={c.to}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-softgrey hover:text-navy"
                  onClick={() => setOpen(false)}
                >
                  <span>{c.label}</span>
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rounded-full bg-gold opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  // Height is not a transform; suppress it explicitly under the preference.
  const reduced = useReducedMotion();
  return (
    <motion.div
      id="mobile-menu"
      className="fixed inset-0 top-[62px] z-40 overflow-y-auto bg-white pb-28 xl:hidden"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav aria-label="Mobile" className="container-site py-6">
        <motion.ul
          className="divide-y divide-line"
          initial="hidden"
          animate="shown"
          variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } } }}
        >
          {NAV.map((item) => (
            <motion.li
              key={item.label}
              className="py-1"
              variants={{
                hidden: { opacity: 0, x: -12 },
                shown: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
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
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${openSections[item.label] ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {openSections[item.label] ? (
                      <motion.ul
                        className="overflow-hidden border-l-2 border-gold/50 pl-4"
                        initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.26, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.18 } }}
                      >
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} className="block py-2 text-[15px] text-ink" onClick={onClose}>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                        <li className="h-3" aria-hidden="true" />
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </>
              ) : (
                <Link to={item.to} className="block py-3 font-display text-lg font-bold text-navy" onClick={onClose}>
                  {item.label}
                </Link>
              )}
            </motion.li>
          ))}
        </motion.ul>
        {/* §5.2 — CTA persists inside the opened menu */}
        <Link to={CTA.to} className="btn-primary mt-6 w-full !py-3.5 text-center" onClick={onClose}>
          {CTA.label}
        </Link>
      </nav>
    </motion.div>
  );
}
