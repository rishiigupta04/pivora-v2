/**
 * Selected Operating Experience (KIMI master prompt §10–12).
 * Story-led, theme-first, NOT founder-centric. Every fact is drawn from the
 * verified public record registered in sources.json (ids cited per story);
 * nothing beyond the public record — no client names, metrics or outcomes —
 * is stated or implied.
 */
export type Story = {
  slug: string;
  theme: string;
  title: string;
  teaser: string;
  companies: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  madeItWork: string[];
  sourceIds: ("s1" | "s2" | "s3" | "s4" | "s5")[];
};

export const STORIES: Story[] = [
  {
    slug: "ground-zero-enterprise-gtm",
    theme: "Zero-to-One GTM",
    title: "Building enterprise GTM from ground zero — three times over.",
    teaser:
      "Global enterprise platforms arriving in India with strong products and no local commercial motion — and what it actually takes to build the first accounts, partners and references from zero.",
    companies: "BMC Software · AppDynamics · Sprinklr",
    context:
      "Global enterprise platforms regularly arrive in India with a strong product, a strategy document and no local commercial motion: no named account universe, no partner leverage, no executive access. That was the starting position at BMC Software, AppDynamics and Sprinklr alike — three separate ground-zero India builds across a decade.",
    challenge:
      "Create a credible enterprise business where the brand has no local history. First accounts, first partners, first references — without an installed base to lean on, and in a market where enterprise buying runs on trust and relationship depth.",
    approach: [
      "Account architecture before activity — a named, tiered account universe instead of a bought list",
      "Ecosystem-first selling — partner and GSP relationships used as real market access, not decoration",
      "Senior, trust-led executive engagement — enterprise India buys from people it knows",
      "A repeatable operating cadence installed early: forecast discipline, pipeline reviews, reference development",
    ],
    outcome: [
      "Appointment coverage in October 2020 records an instrumental role in setting up the India businesses of Sprinklr, AppDynamics and BMC Software — spanning India strategy, customer success, partner network, operations and sales execution.",
      "The same coverage records deep, durable relationships with Indian corporates, GSPs and GCC's — the ecosystem this firm's growth corridors are built on.",
      "When OutSystems announced its India leadership in 2020, this ground-zero build record was the stated basis for the appointment.",
    ],
    madeItWork: [
      "Trust before transactions — enterprise India rewards presence and patience over quarters, not weeks",
      "Architecture before activity — the account and partner map came before the first quarter's number",
      "Cadence over heroics — a business that can forecast is a business that can scale",
    ],
    sourceIds: ["s1", "s2", "s3"],
  },
  {
    slug: "category-creation-low-code",
    theme: "Category Creation · Platform Positioning",
    title: "Creating the low-code category in India's enterprise market.",
    teaser:
      "Taking a globally proven platform category that Indian enterprises had not yet bought — and building the category, the business case and the ecosystem that make a market.",
    companies: "OutSystems",
    context:
      "In 2020, low-code was a proven global platform category with thin Indian enterprise presence. OutSystems appointed regional leadership for India in October 2020; coverage at the time noted both the remit and the ground-zero operator record behind the choice.",
    challenge:
      "A new category is sold twice: first the category itself — why low-code at all — and only then the platform. Enterprise buyers needed a board-grade business case, not a product demo, and the market needed education before it needed selling.",
    approach: [
      "Category narrative before product narrative — the cost of slow enterprise change, quantified",
      "Alliance-led go-to-market — building with the advisory and services ecosystem rather than around it",
      "Executive-visible market education — press, analyst and industry forums used to build the category conversation",
      "Value cases attached to named enterprise problems, not generic digital-transformation claims",
    ],
    outcome: [
      "The India appointment was announced in October 2020 across the business press, with the APAC leadership publicly framing the choice around the appointee's India build record.",
      "In May 2023, KPMG in India and OutSystems announced an alliance for low-code digital solutions — category creation converting into ecosystem scale.",
      "The alliance announcement is public record: the category argument had become a joint go-to-market with one of India's most enterprise-credible advisory brands.",
    ],
    madeItWork: [
      "Category first, platform second — buyers fund problems, not product categories",
      "Alliances as distribution — an advisory ecosystem carried the story into boardrooms",
      "Visible market education — the category conversation was built in public",
    ],
    sourceIds: ["s1", "s3", "s4"],
  },
  {
    slug: "enterprise-sales-transformation",
    theme: "Enterprise Sales Transformation",
    title: "Leading the India market for a global CX platform.",
    teaser:
      "Transforming how a mature enterprise platform sells — from product-led transactions to value-led, committee-grade enterprise conversations — in the market where CX budgets are won on trust.",
    companies: "Sprinklr",
    context:
      "Sprinklr, a NYSE-listed enterprise customer-experience platform, had its India market led through 2023–2025 by the operator behind Pivora — as Vice President, India Market, following an earlier tenure as Managing Director, India.",
    challenge:
      "A mature platform with a broad suite can drift into feature-led selling. The transformation: move the market conversation from product modules to measurable CX outcomes, in front of buying committees that include the CMO, the CIO and the CFO.",
    approach: [
      "Value articulation over feature walkthroughs — every pursuit anchored to an outcome the buyer's leadership would recognise",
      "Vertical narratives — BFSI, telecom and consumer enterprises each spoken to in their own economics",
      "Published market education — sustained CX and generative-AI commentary through 2024 to shape the conversation, not just join it",
      "Committee coverage as a discipline — no single-threaded enterprise deals",
    ],
    outcome: [
      "Through 2024, published commentary and interviews on CX and generative AI appeared across ETCXPlus, Express Computer, Voice & Data and Digital Terminal — the market-facing record of a value-led India motion.",
      "The earlier India tenure is on record as one of the ground-zero builds cited in subsequent appointment coverage.",
    ],
    madeItWork: [
      "Teach the market — a published point of view compounds like pipeline",
      "Sell outcomes, not modules — committees buy measurable change",
      "Cover the committee — enterprise deals die in the rooms you are not in",
    ],
    sourceIds: ["s1", "s5"],
  },
  {
    slug: "ecosystem-alliance-leverage",
    theme: "Ecosystem & Alliance Leverage",
    title: "Turning alliances and ecosystems into market presence.",
    teaser:
      "Partnerships are announced easily and activated rarely. The work is converting an alliance logo into joint pipeline — and GCC's and GSI's relationships into global enterprise access.",
    companies: "KPMG in India × OutSystems · GSP & GCC's ecosystems",
    context:
      "In India, enterprise market access runs through ecosystems — global system integrators, advisory alliances and the GCC's community — long before it runs through direct sales. Across three ground-zero builds, the partner network was not a channel; it was the market.",
    challenge:
      "Alliances are easy to sign and hard to activate. Without a commercial proposition, named ownership on both sides and joint account work, an alliance is a press release with a logo wall.",
    approach: [
      "Partner proposition before partnership — what the alliance sells, to whom, and why both sides win",
      "Joint account mapping — named accounts, named owners, shared pipeline reviews",
      "Alliance governance with operators, not ceremony — cadence, scorecards, escalation paths",
      "GCC's relationships treated as a route to global enterprise buyers, not only domestic ones",
    ],
    outcome: [
      "In May 2023, KPMG in India and OutSystems announced an alliance for low-code digital solutions — a named, public alliance built on a commercial proposition.",
      "Appointment coverage records deep relationships with Indian corporates, GSPs and GCC's, built across the BMC Software, AppDynamics and Sprinklr ground-zero builds.",
    ],
    madeItWork: [
      "A commercial proposition, not a press release — the alliance existed to sell something specific",
      "Named ownership on both sides — partnerships without owners produce minutes, not revenue",
      "The ecosystem compounds — every activated partner lowers the cost of the next enterprise conversation",
    ],
    sourceIds: ["s2", "s4"],
  },
];

export const storyBySlug = (slug: string | undefined) => STORIES.find((s) => s.slug === slug);
