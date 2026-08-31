import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ROLES, roleBySlug } from "@/content/roles";

/**
 * Careers Apply (KIMI master prompt §15): full application form — Name, Email,
 * Mobile, Current Company, Current Role, Location, Experience, LinkedIn URL,
 * Role Applying For, Resume Upload, Short Message — with working client-side
 * validation, resume type/size checks, submission and confirmation states.
 *
 * HONEST DELIVERY NOTE: no careers inbox address exists in any approved
 * material, so the form validates and confirms in-browser and hands the
 * applicant a downloadable application summary. The moment the careers
 * mailbox is confirmed (owner action), wire `submit` to it — nothing is
 * transmitted or stored today, and the confirmation says exactly that.
 */

const EXPERIENCE_RANGES = ["Up to 3 years", "3–6 years", "7–10 years", "11–15 years", "15+ years"];
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const RESUME_EXT = [".pdf", ".doc", ".docx"];

type Errors = Record<string, string>;

const inputCls = "field-input";
const labelCls = "field-label";

function validate(values: Record<string, string>, file: File | null): Errors {
  const e: Errors = {};
  if (values.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Please enter a valid email address.";
  if (!/^\+?[0-9][0-9\s()\-]{7,16}$/.test(values.mobile.trim()))
    e.mobile = "Please enter a valid mobile number (country code welcome).";
  if (!values.currentCompany.trim()) e.currentCompany = "Please enter your current company.";
  if (!values.currentRole.trim()) e.currentRole = "Please enter your current role.";
  if (!values.location.trim()) e.location = "Please enter your location.";
  if (!values.experience) e.experience = "Please select your experience.";
  if (values.linkedin.trim() && !/^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(values.linkedin.trim()))
    e.linkedin = "Please enter a valid LinkedIn URL (https://www.linkedin.com/…).";
  if (!values.role) e.role = "Please select the role you are applying for.";
  if (!file) {
    e.resume = "Please attach your resume (PDF, DOC or DOCX, up to 5 MB).";
  } else {
    const lower = file.name.toLowerCase();
    if (!RESUME_EXT.some((ext) => lower.endsWith(ext))) e.resume = "Resume must be a PDF, DOC or DOCX file.";
    else if (file.size > MAX_RESUME_BYTES) e.resume = "Resume must be 5 MB or smaller.";
  }
  return e;
}

function Field({
  label,
  required,
  optional,
  htmlFor,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
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

export default function CareersApply() {
  const [params] = useSearchParams();
  const prefill = roleBySlug(params.get("role"));
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [file, setFile] = useState<File | null>(null);
  const [done, setDone] = useState<{ values: Record<string, string>; fileName: string } | null>(null);

  const roleLabel = (slug: string) => ROLES.find((r) => r.slug === slug)?.title ?? slug;

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const values: Record<string, string> = {};
    for (const key of ["name", "email", "mobile", "currentCompany", "currentRole", "location", "experience", "linkedin", "role", "message"]) {
      values[key] = String(fd.get(key) ?? "");
    }
    const errs = validate(values, file);
    setErrors(errs);
    const firstKey = Object.keys(errs)[0];
    if (firstKey) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    setDone({ values, fileName: file!.name });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function downloadSummary() {
    if (!done) return;
    const v = done.values;
    const lines = [
      "PIVORA CONSULTING — APPLICATION SUMMARY",
      "",
      `Role applying for: ${roleLabel(v.role)}`,
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `Mobile: ${v.mobile}`,
      `Current company: ${v.currentCompany}`,
      `Current role: ${v.currentRole}`,
      `Location: ${v.location}`,
      `Experience: ${v.experience}`,
      v.linkedin ? `LinkedIn: ${v.linkedin}` : null,
      `Resume file: ${done.fileName}`,
      "",
      "Short message:",
      v.message || "(none)",
      "",
      "Attach your resume to the same email when sending.",
    ].filter((l): l is string => l !== null);
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `pivora-application-${v.role}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  if (done) {
    return (
      <>
        <PageHero eyebrow="Careers · Apply" title="Thank you — your application is ready." />
        <section className="bg-white py-12 md:py-16">
          <div className="container-site max-w-2xl">
            <Reveal>
              <div className="rounded-xl border border-gold bg-gold-soft/60 p-6 md:p-8">
                <p className="flex items-center gap-2.5 font-display text-lg font-bold text-navy">
                  <CheckCircle2 className="h-5 w-5 text-gold-dark" aria-hidden="true" />
                  Application validated — {roleLabel(done.values.role)}
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink">
                  Thank you, {done.values.name.split(" ")[0]}. Your details and resume ({done.fileName}) validate
                  cleanly. One honest note: Pivora's careers inbox is being finalised, so nothing has been transmitted
                  yet — the application currently lives only in this browser.
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink">
                  Download the summary below and keep it with your resume; the moment the careers mailbox is live this
                  form will send directly, and the summary is exactly what it transmits.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button type="button" onClick={downloadSummary} className="btn-primary">
                    <Download className="h-4 w-4" aria-hidden="true" /> Download Application Summary
                  </button>
                  <Link to="/careers" className="text-link">
                    Back to careers
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Careers · Apply"
        title={prefill ? `Apply — ${prefill.title}` : "Apply to Pivora"}
        lede="Eleven fields, one resume, no black box. Every application is read by the people who run the engagements."
      >
        <p className="mt-6">
          <Link
            to="/careers#open-roles"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-gold transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> All open roles
          </Link>
        </p>
      </PageHero>

      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-3xl">
          <Reveal>
            <form ref={formRef} noValidate onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" required htmlFor="a-name" error={errors.name}>
                  <input id="a-name" name="name" type="text" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} />
                </Field>
                <Field label="Email" required htmlFor="a-email" error={errors.email}>
                  <input id="a-email" name="email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} />
                </Field>
                <Field label="Mobile" required htmlFor="a-mobile" error={errors.mobile}>
                  <input id="a-mobile" name="mobile" type="tel" autoComplete="tel" placeholder="+91 …" className={inputCls} aria-invalid={!!errors.mobile} />
                </Field>
                <Field label="Location" required htmlFor="a-location" error={errors.location}>
                  <input id="a-location" name="location" type="text" autoComplete="address-level2" className={inputCls} aria-invalid={!!errors.location} />
                </Field>
                <Field label="Current company" required htmlFor="a-company" error={errors.currentCompany}>
                  <input id="a-company" name="currentCompany" type="text" autoComplete="organization" className={inputCls} aria-invalid={!!errors.currentCompany} />
                </Field>
                <Field label="Current role" required htmlFor="a-role" error={errors.currentRole}>
                  <input id="a-role" name="currentRole" type="text" autoComplete="organization-title" className={inputCls} aria-invalid={!!errors.currentRole} />
                </Field>
                <Field label="Experience" required htmlFor="a-experience" error={errors.experience}>
                  <select id="a-experience" name="experience" defaultValue="" className={inputCls} aria-invalid={!!errors.experience}>
                    <option value="" disabled>
                      Select…
                    </option>
                    {EXPERIENCE_RANGES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Role applying for" required htmlFor="a-applying" error={errors.role}>
                  <select id="a-applying" name="role" defaultValue={prefill?.slug ?? ""} className={inputCls} aria-invalid={!!errors.role}>
                    <option value="" disabled>
                      Select…
                    </option>
                    {ROLES.map((r) => (
                      <option key={r.slug} value={r.slug}>
                        {r.title}
                      </option>
                    ))}
                    <option value="general">General — keep me in view</option>
                  </select>
                </Field>
                <Field label="LinkedIn URL" optional htmlFor="a-linkedin" error={errors.linkedin}>
                  <input id="a-linkedin" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" className={inputCls} aria-invalid={!!errors.linkedin} />
                </Field>
                <Field label="Resume upload" required htmlFor="a-resume" error={errors.resume}>
                  <input
                    id="a-resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={inputCls}
                    aria-invalid={!!errors.resume}
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                  <p className="mt-1.5 text-[12px] text-greytext">
                    {file ? `${file.name} · ${(file.size / 1024).toFixed(0)} KB` : "PDF, DOC or DOCX, up to 5 MB."}
                  </p>
                </Field>
              </div>

              <Field label="Short message" optional htmlFor="a-message" error={errors.message}>
                <textarea
                  id="a-message"
                  name="message"
                  rows={4}
                  className={inputCls}
                  placeholder="What would you want to build here? A few honest lines beat a polished paragraph."
                />
              </Field>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                <button type="submit" className="btn-primary">
                  Submit Application
                </button>
                <p className="max-w-md text-[12.5px] leading-relaxed text-greytext">
                  Validation, upload and confirmation run in your browser; delivery activates when Pivora's careers
                  mailbox is confirmed. Nothing is stored or transmitted until then.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
