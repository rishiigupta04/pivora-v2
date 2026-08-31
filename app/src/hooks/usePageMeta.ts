import { useEffect } from "react";
import { useLocation } from "react-router";

/** Unique title + meta description per route (§28 SEO acceptance). */
const META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Pivora Consulting — Enterprise B2B Platforms. Built for Growth in India.",
    description:
      "Pivora builds enterprise traction through focused GTM execution, GCC's and GSI's leverage, and a hands-on operating model. India is both a market and a launchpad to global growth.",
  },
  "/what-we-solve": {
    title: "What We Solve — Five Problems, Not a Service Catalogue | Pivora",
    description: "Five focused capabilities tied to measurable commercial outcomes: market entry, revenue acceleration, GCC's & GSI's growth, India to global, selective AI value wedges.",
  },
  "/what-we-solve/market-entry-gtm": {
    title: "Market Entry & GTM | Pivora Consulting",
    description: "Enter a market with a commercial architecture, not a country hire. GTM blueprint, tiered account universe, value narrative, 90-day operating plan.",
  },
  "/what-we-solve/revenue-acceleration": {
    title: "Enterprise Revenue Acceleration | Pivora Consulting",
    description: "Turn early wins into a repeatable enterprise revenue motion: pipeline architecture, deal strategy, land-and-expand, and a weekly operating rhythm.",
  },
  "/what-we-solve/gcc-gsi-growth": {
    title: "GCC's & GSI's Growth | Pivora Consulting",
    description: "GCC's and GSI's as growth multipliers, not logo relationships: opportunity mapping, co-sell design, alliance activation, reference creation.",
  },
  "/what-we-solve/india-to-global": {
    title: "India → Global Expansion | Pivora Consulting",
    description: "Use India proof to sequence international market entry: ranked market sequence, global ICP, partner routes, gated expansion run from India.",
  },
  "/what-we-solve/niche-ai": {
    title: "Niche AI Value Services | Pivora Consulting",
    description: "AI carried only where it strengthens a differentiated platform or opens a GTM wedge — five services, six qualification gates, the refusals published.",
  },
  "/growth-paths": {
    title: "Growth Paths — Two Corridors | Pivora Consulting",
    description: "Global → India and India → Global. The work is different depending on which direction you are travelling. Pick the corridor you are on.",
  },
  "/growth-paths/global-to-india": {
    title: "Global → India — The India Entry and Scale Engine | Pivora",
    description: "Pivora builds the India entry and scale engine: named account universe, tested value narrative, GCC's and GSI's mapping, lighthouse customers, transfer.",
  },
  "/growth-paths/india-to-global": {
    title: "India → Global — Sequence International Expansion | Pivora",
    description: "Pivora builds the global expansion engine from India: market prioritisation, reference audit, GSI's leverage into global accounts, gated sequencing.",
  },
  "/how-we-work": {
    title: "How We Work — Built–Operate–Sustain | Pivora Consulting",
    description: "Build the engine, operate for traction, transfer the capability. Three linked models and five engagement offers, each with a written value case.",
  },
  "/how-we-work/built-operate-sustain": {
    title: "Built–Operate–Sustain — The Signature Operating Model | Pivora",
    description: "Three phases with exit criteria: BUILD the commercial architecture, OPERATE for real traction, SUSTAIN as a client-owned capability.",
  },
  "/how-we-work/platform-growth": {
    title: "Platform Growth Model | Pivora Consulting",
    description: "How product strength becomes repeatable enterprise revenue: six growth layers, the recommended growth motion, and the gated ramp from 0 to global.",
  },
  "/how-we-work/delivery-model": {
    title: "Delivery Model — Pods, Governance, Shared Bench | Pivora",
    description: "Dedicated client pods that sell, one governance layer, a shared senior bench, and client commitments published openly.",
  },
  "/proof": {
    title: "Proof — Evidence Before Persuasion | Pivora Consulting",
    description: "Five tiers of proof, ranked by strength, with an honest statement of which tiers are populated today. Founder evidence, coverage, reference policy.",
  },
  "/proof/case-studies": {
    title: "Selected Operating Experience | Pivora Consulting",
    description: "Story-led case studies from the verified operator record behind Pivora: ground-zero GTM, low-code category creation, enterprise sales transformation, ecosystem leverage.",
  },
  "/insights": {
    title: "Insights — Platform GTM, India, GCC's and GSI's | Pivora",
    description: "Perspectives across six pillars: India platform GTM, GCC's, GSI's, platform growth, Built–Operate–Sustain, and India to global.",
  },
  "/about": {
    title: "About — Founder, Philosophy, Ecosystem | Pivora Consulting",
    description: "Subrato Bandhu: three decades of ground-zero India GTM builds across five enterprise platforms. Verified record, selected coverage, the relationship ecosystem.",
  },
  "/careers": {
    title: "Careers — Build Enterprise Growth With Us | Pivora",
    description: "Four specialist disciplines — solution sales, pre-sales and solution consulting, senior solution architecture, business value consulting — inside live Built–Operate–Sustain engagements.",
  },
  "/careers/apply": {
    title: "Apply — Careers | Pivora Consulting",
    description: "Apply for a specialist role at Pivora: validated application with resume upload and confirmation.",
  },
  "/contact": {
    title: "Start a Conversation | Pivora Consulting",
    description: "Tell us about one specific growth problem. If Pivora is not the right partner for it, we will say so, and usually point you at who is.",
  },
  "/privacy": { title: "Privacy Policy | Pivora Consulting", description: "What Pivora collects, why, retention, sharing and deletion requests." },
  "/terms": { title: "Terms of Use | Pivora Consulting", description: "Site use, intellectual property, and the no-warranty basis of published market data." },
  "/cookies": { title: "Cookie Notice | Pivora Consulting", description: "What tracking is in use — currently none — and the consent commitment if analytics are introduced." },
};

export function usePageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m =
      META[pathname] ??
      (pathname.startsWith("/proof/case-studies/")
        ? META["/proof/case-studies"]
        : {
            title: "Page not found | Pivora Consulting",
            description: "That page does not exist.",
          });
    document.title = m.title;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = m.description;
    let og = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (og) og.content = m.title;
  }, [pathname]);
}

/** Route-change scroll: top on navigation, smooth to anchor on hash. */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
