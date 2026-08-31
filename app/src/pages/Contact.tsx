import { useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { Link } from "react-router";
import { CheckCircle2, Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import FlywheelFigure from "@/components/figures/FlywheelFigure";

/**
 * §19 — Contact and lead qualification. The form qualifies; it does not merely collect.
 * Fields exactly per §19.2 (ACV optional with "prefer not to say"; privacy consent
 * unticked by default, linking to /privacy; message minimum 40 characters), plus the
 * §19.4 "reference call on request" checkbox.
 *
 * Validation, submission and confirmation run client-side. Final delivery activates
 * when the response mailbox is confirmed (owner action, §29) — the confirmation state
 * says so honestly and hands the sender a downloadable summary. Nothing is
 * transmitted or stored today.
 */
const inputCls = "field-input";
const labelCls = "field-label";

type Errors = Record<string, string>;

function Field({
  label,
  required,
  optional,
  children,
  htmlFor,
  error,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
  htmlFor: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelCls}>
        {label} {required ? <span className="text-gold-dark">*</span> : null}
        {optional ? <span className="ml-1 font-normal text-greytext">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-[12.5px] font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const FIELDS = ["name", "email", "company", "website", "geography", "objective", "acv", "stage", "message"] as const;

function validate(v: Record<string, string>, privacy: boolean): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid work email.";
  if (!v.company.trim()) e.company = "Please enter your company.";
  try {
    const u = new URL(v.website.trim());
    if (!/^https?:$/.test(u.protocol) || !u.hostname.includes(".")) throw new Error();
  } catch {
    e.website = "Please enter a valid website URL (https://…).";
  }
  if (!v.geography.trim()) e.geography = "Please enter your current geography.";
  if (!v.objective) e.objective = "Please select your primary objective.";
  if (!v.stage) e.stage = "Please select your current GTM stage.";
  if (v.message.trim().length < 40)
    e.message = `Please describe the growth problem in at least 40 characters (currently ${v.message.trim().length}).`;
  if (!privacy) e.privacy = "Please confirm consent so we can respond to your enquiry.";
  return e;
}

export default function Contact() {
  const [params] = useSearchParams();
  const candidate = params.get("type") === "candidate";
  const india = params.get("type") === "india";
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<Record<string, string> | null>(null);

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const values: Record<string, string> = {};
    for (const key of FIELDS) values[key] = String(fd.get(key) ?? "");
    values.bos_interest = fd.get("bos_interest") ? "Yes" : "No";
    values.reference_call = fd.get("reference_call") ? "Yes" : "No";
    const errs = validate(values, fd.get("privacy") === "on");
    setErrors(errs);
    const firstKey = Object.keys(errs)[0];
    if (firstKey) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    setDone(values);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function downloadSummary() {
    if (!done) return;
    const lines = [
      "PIVORA CONSULTING — CONVERSATION REQUEST",
      "",
      `Name: ${done.name}`,
      `Work email: ${done.email}`,
      `Company: ${done.company}`,
      `Website: ${done.website}`,
      `Current geography: ${done.geography}`,
      `Primary objective: ${done.objective}`,
      `ACV or commercial range: ${done.acv || "Not shared"}`,
      `Current GTM stage: ${done.stage}`,
      `Interest in Built–Operate–Sustain: ${done.bos_interest}`,
      `Reference call on request: ${done.reference_call}`,
      "",
      "The growth problem:",
      done.message,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "pivora-conversation-request.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a Conversation."
        lede="Tell us about one specific growth problem. If Pivora is not the right partner for it, we will say so, and usually point you at who is."
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_420px]">
          {done ? (
            /* Confirmation — honest about the delivery step still pending */
            <Reveal>
              <div className="rounded-xl border border-gold bg-gold-soft/60 p-6 md:p-8">
                <p className="flex items-center gap-2.5 font-display text-lg font-bold text-navy">
                  <CheckCircle2 className="h-5 w-5 text-gold-dark" aria-hidden="true" />
                  Thank you, {done.name.split(" ")[0]} — your note is ready.
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink">
                  Your {india ? "India conversation request" : candidate ? "candidate note" : "conversation request"}{" "}
                  for <span className="font-semibold">{done.company}</span> validates cleanly. One honest note:
                  Pivora's response mailbox is being finalised, so nothing has been transmitted yet — your entry
                  currently lives only in this browser.
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink">
                  Download the summary below as your copy; the moment the mailbox is live, this form sends directly —
                  and the summary is exactly what it transmits.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button type="button" onClick={downloadSummary} className="btn-primary">
                    <Download className="h-4 w-4" aria-hidden="true" /> Download Summary
                  </button>
                  <button type="button" onClick={() => setDone(null)} className="text-link">
                    Write another note
                  </button>
                </div>
              </div>
            </Reveal>
          ) : (
            /* The form — exact §19.2 fields, validated client-side */
            <Reveal>
              <form ref={formRef} noValidate aria-describedby="form-status" onSubmit={onSubmit} className="space-y-6">
                {candidate ? (
                  <div className="rounded-xl border border-gold bg-gold-soft/60 p-5">
                    <p className="font-display text-lg font-bold text-navy">Candidate interest</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-greytext">
                      Kept separate from client qualification (§19.4). Tell us your background, a portfolio or LinkedIn
                      link, and what you would want to build. For open roles, the{" "}
                      <Link to="/careers#open-roles" className="text-link">
                        careers application
                      </Link>{" "}
                      is the faster route.
                    </p>
                  </div>
                ) : null}
                {india ? (
                  <div className="rounded-xl border border-gold bg-gold-soft/60 p-5">
                    <p className="font-display text-lg font-bold text-navy">An India conversation</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-greytext">
                      A perspective, not a pitch. Tell us where your India thinking stands — entering, expanding or
                      rethinking — and what would help. If a conversation is all it ever becomes, that is fine.
                    </p>
                  </div>
                ) : null}

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" required htmlFor="f-name" error={errors.name}>
                    <input id="f-name" name="name" type="text" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} />
                  </Field>
                  <Field label="Work email" required htmlFor="f-email" error={errors.email}>
                    <input id="f-email" name="email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} />
                  </Field>
                  <Field label="Company" required htmlFor="f-company" error={errors.company}>
                    <input id="f-company" name="company" type="text" autoComplete="organization" className={inputCls} aria-invalid={!!errors.company} />
                  </Field>
                  <Field label="Website" required htmlFor="f-website" error={errors.website}>
                    <input id="f-website" name="website" type="url" placeholder="https://" className={inputCls} aria-invalid={!!errors.website} />
                  </Field>
                  <Field label="Current geography" required htmlFor="f-geography" error={errors.geography}>
                    <input id="f-geography" name="geography" type="text" className={inputCls} aria-invalid={!!errors.geography} />
                  </Field>
                  <Field label="Primary objective" required htmlFor="f-objective" error={errors.objective}>
                    <select id="f-objective" name="objective" className={inputCls} defaultValue="" aria-invalid={!!errors.objective}>
                      <option value="" disabled>Select…</option>
                      <option>Market entry</option>
                      <option>Scale</option>
                      <option>Ecosystem</option>
                      <option>Global expansion</option>
                      <option>GTM transformation</option>
                      <option>An India perspective conversation</option>
                    </select>
                  </Field>
                  <Field label="ACV or commercial range" optional htmlFor="f-acv">
                    <select id="f-acv" name="acv" className={inputCls} defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option>Under US$25K</option>
                      <option>US$25K–US$100K</option>
                      <option>US$100K–US$500K</option>
                      <option>US$500K–US$1M</option>
                      <option>Over US$1M</option>
                      <option>Prefer not to say</option>
                    </select>
                  </Field>
                  <Field label="Current GTM stage" required htmlFor="f-stage" error={errors.stage}>
                    <select id="f-stage" name="stage" className={inputCls} defaultValue="" aria-invalid={!!errors.stage}>
                      <option value="" disabled>Select…</option>
                      <option>Pre-entry</option>
                      <option>Early traction</option>
                      <option>Repeatability</option>
                      <option>Scale</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message" required htmlFor="f-message" error={errors.message}>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={5}
                    className={inputCls}
                    aria-invalid={!!errors.message}
                    placeholder="The specific growth problem, in your own words (minimum 40 characters)."
                  />
                </Field>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-[14px] text-ink">
                    <input type="checkbox" name="bos_interest" className="mt-1 h-4 w-4 rounded border-line text-navy focus:ring-gold" />
                    <span>
                      Interest in Built–Operate–Sustain <span className="text-greytext">(optional)</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 text-[14px] text-ink">
                    <input type="checkbox" name="reference_call" className="mt-1 h-4 w-4 rounded border-line text-navy focus:ring-gold" />
                    <span>
                      Reference call on request <span className="text-greytext">(optional — it self-identifies serious buyers)</span>
                    </span>
                  </label>
                  <div>
                    <label className="flex items-start gap-3 text-[14px] text-ink">
                      <input type="checkbox" name="privacy" className="mt-1 h-4 w-4 rounded border-line text-navy focus:ring-gold" aria-invalid={!!errors.privacy} />
                      <span>
                        I consent to Pivora Consulting processing this information to respond to my enquiry, per the{" "}
                        <Link to="/privacy" className="text-link">
                          Privacy Policy
                        </Link>
                        . <span className="text-gold-dark">*</span>
                      </span>
                    </label>
                    {errors.privacy ? (
                      <p className="mt-1.5 text-[12.5px] font-medium text-red-700" role="alert">
                        {errors.privacy}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div id="form-status" className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                  <button type="submit" className="btn-primary">
                    Start a Conversation
                  </button>
                  <p className="max-w-md text-[12.5px] leading-relaxed text-greytext">
                    Validation and confirmation run in your browser; delivery activates when Pivora's response mailbox
                    is confirmed. Nothing is stored or transmitted until then.
                  </p>
                </div>
              </form>
            </Reveal>
          )}

          {/* Sidebar — the qualification standard (§5.9 link target) + flywheel */}
          <div className="space-y-10">
            <Reveal>
              <div className="card p-6">
                <p className="eyebrow">The qualification standard</p>
                <ul className="mt-4 space-y-3">
                  {[
                    "A differentiated Enterprise B2B platform, not a commodity product",
                    "A material business problem with a measurable outcome attached",
                    "Executive commitment to the market, not exploratory interest",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-[14px] leading-snug text-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" /> {q}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] leading-relaxed text-greytext">
                  The right outcome is not more leads. It is more of the right conversations.
                </p>
              </div>
            </Reveal>
            <FlywheelFigure />
          </div>
        </div>
      </section>
    </>
  );
}
