/**
 * JSON-LD structured data: Organisation + Person (§28 — rendered on /about).
 * Only verified facts: name, role, verified affiliations. No URLs or sameAs
 * links that have not been confirmed (§29).
 */
export function AboutStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Pivora Consulting LLP",
        description:
          "Specialist growth bridge for Enterprise B2B platforms: market entry and GTM, enterprise revenue acceleration, GCC's and GSI's growth, India-to-global expansion, and selective AI value wedges.",
        foundingDate: "2025",
        founder: { "@id": "#subrato-bandhu" },
      },
      {
        "@type": "Person",
        "@id": "#subrato-bandhu",
        name: "Subrato Bandhu",
        jobTitle: "Founder & CEO",
        worksFor: { "@type": "Organization", name: "Pivora Consulting LLP" },
        knowsAbout: [
          "Enterprise B2B go-to-market",
          "Agentic AI",
          "AI-native go-to-market",
          "India market entry",
          "Global Capability Centres",
          "Global System Integrators",
        ],
        alumniOf: [
          { "@type": "Organization", name: "OutSystems" },
          { "@type": "Organization", name: "Sprinklr" },
          { "@type": "Organization", name: "Magic Software" },
          { "@type": "Organization", name: "AppDynamics" },
          { "@type": "Organization", name: "BMC Software" },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
