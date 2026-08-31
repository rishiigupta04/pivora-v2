/** §3.2 / §3.3 / §3.5 — single source of truth for navigation, reused by header, footer and sitemap. */

export interface NavChild {
  label: string;
  to: string;
}
export interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

export const NAV: NavItem[] = [
  {
    label: "What We Solve",
    to: "/what-we-solve",
    children: [
      { label: "Market Entry & GTM", to: "/what-we-solve/market-entry-gtm" },
      { label: "Enterprise Revenue Acceleration", to: "/what-we-solve/revenue-acceleration" },
      { label: "GCC's & GSI's Growth", to: "/what-we-solve/gcc-gsi-growth" },
      { label: "India → Global Expansion", to: "/what-we-solve/india-to-global" },
      { label: "Niche AI Value Services", to: "/what-we-solve/niche-ai" },
    ],
  },
  {
    label: "Growth Paths",
    to: "/growth-paths",
    children: [
      { label: "Global → India", to: "/growth-paths/global-to-india" },
      { label: "India → Global", to: "/growth-paths/india-to-global" },
    ],
  },
  {
    label: "How We Work",
    to: "/how-we-work",
    children: [
      { label: "Built–Operate–Sustain", to: "/how-we-work/built-operate-sustain" },
      { label: "Platform Growth Model", to: "/how-we-work/platform-growth" },
      { label: "Delivery Model", to: "/how-we-work/delivery-model" },
    ],
  },
  {
    label: "Proof",
    to: "/proof",
    children: [
      { label: "Operating Experience", to: "/proof/case-studies" },
      { label: "Founder Evidence", to: "/proof#founder-evidence" },
      { label: "References & Reference Policy", to: "/proof#reference-policy" },
    ],
  },
  { label: "Insights", to: "/insights" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Founder", to: "/about#founder" },
      { label: "Philosophy (Why Pivora)", to: "/about#philosophy" },
      { label: "Ecosystem", to: "/about#ecosystem" },
    ],
  },
  { label: "Careers", to: "/careers" },
];

export const CTA = { label: "Start a Conversation", to: "/contact" };

export const FOOTER_COLUMNS: { title: string; links: NavChild[] }[] = [
  { title: "What We Solve", links: NAV[0].children! },
  {
    title: "Growth Paths & How We Work",
    links: [
      { label: "Global → India", to: "/growth-paths/global-to-india" },
      { label: "India → Global", to: "/growth-paths/india-to-global" },
      { label: "Built–Operate–Sustain", to: "/how-we-work/built-operate-sustain" },
      { label: "Platform Growth", to: "/how-we-work/platform-growth" },
      { label: "Delivery Model", to: "/how-we-work/delivery-model" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Founder", to: "/about#founder" },
      { label: "Why Pivora", to: "/about#philosophy" },
      { label: "Careers", to: "/careers" },
      { label: "Insights", to: "/insights" },
      { label: "Proof", to: "/proof" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Start a Conversation", to: "/contact" }],
    // email · LinkedIn · registration block (§22.2) withheld pending §29 owner verification
  },
];

export const LEGAL_LINKS: NavChild[] = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Cookie Notice", to: "/cookies" },
];
