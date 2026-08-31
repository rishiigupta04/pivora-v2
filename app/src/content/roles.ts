/**
 * Careers — the four open specialist roles (owner-directed, KIMI master prompt §13–15).
 * Location and experience are stated qualitatively on purpose: exact scope, location
 * mix and terms are shared at the intro conversation — published honestly, never implied.
 */
export type Role = {
  slug: string;
  title: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  background: string;
};

export const ROLES: Role[] = [
  {
    slug: "solution-sales",
    title: "Solution Sales Specialist",
    location: "India",
    experience: "Senior level",
    summary:
      "Owns enterprise positioning and strategic deal progression inside client engagements — the front end of the value motion.",
    responsibilities: [
      "Enterprise positioning and value articulation for differentiated B2B platforms",
      "Strategic account development against a named account universe",
      "Executive engagement and committee-level relationship building",
      "Deal strategy and progression across long enterprise cycles",
      "Selling through the GCC's and GSI's ecosystem, not around it",
    ],
    background:
      "Enterprise B2B platform or SaaS sales with visible strategic-account wins. Comfortable carrying a number inside a founder-led engagement, and fluent in ecosystem-led selling.",
  },
  {
    slug: "presales-solution-consulting",
    title: "Pre-Sales / Solution Consultant",
    location: "India",
    experience: "Senior level",
    summary:
      "Turns discovery into solution fit — and evaluations into confident, well-run enterprise buying decisions.",
    responsibilities: [
      "Discovery and qualification against the value hypothesis",
      "Solution demonstrations and executive workshops",
      "Evaluation and proof-of-concept management",
      "RFP and technical-response ownership",
      "Clean handoff from pursuit into delivery",
    ],
    background:
      "Pre-sales or solution consulting in enterprise software, with strong demonstration craft and the discipline to qualify out early when fit is not there.",
  },
  {
    slug: "senior-solution-architect",
    title: "Senior Solution Architect",
    location: "India",
    experience: "Senior level",
    summary:
      "Anchors enterprise architecture alignment so the platform fits the customer's landscape — technically and commercially.",
    responsibilities: [
      "Enterprise architecture alignment and integration design",
      "Scalability, security and compliance review inside pursuits",
      "Technical validation that de-risks the buying decision",
      "Advisory to customer technology and architecture teams",
      "Architecture input into expansion and adoption planning",
    ],
    background:
      "Solution or enterprise architecture roles on enterprise platforms, with depth across integration, security and scale — and the credibility to sit across from a customer's architects.",
  },
  {
    slug: "business-value-consultant",
    title: "Business Value Consultant",
    location: "India",
    experience: "Senior level",
    summary:
      "Builds the business case before the deal — and keeps value measured, reviewed and expanding after it.",
    responsibilities: [
      "Business cases and ROI models for enterprise platform decisions",
      "Value measurement frameworks agreed with the customer",
      "Outcome tracking and continuous value reviews",
      "Expansion opportunity mapping from realised value",
      "Value narratives for executive and board audiences",
    ],
    background:
      "Value engineering, management consulting or business-value roles attached to enterprise software — fluent in CFO-grade models and post-sale value governance.",
  },
];

export const roleBySlug = (slug: string | null) => ROLES.find((r) => r.slug === slug);
