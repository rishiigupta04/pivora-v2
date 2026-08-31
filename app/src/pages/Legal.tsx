import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

/**
 * §22.1 — legal pages carry the required minimum content.
 * Every page is labelled DRAFT pending legal review (§22.1 NEEDS INPUT): the site
 * processes personal data under India’s DPDP Act and potentially the GDPR, so final
 * copy must not ship without a lawyer. Registration identifiers (§22.2) are
 * withheld until the owner confirms which are public.
 */
function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="rounded-xl border border-dashed border-gold bg-gold-soft/50 px-5 py-3 text-[13px] font-medium text-navy">
              Draft pending legal review. This page states our intended practice; final wording follows professional
              review under applicable law, including India’s DPDP Act.
            </p>
            <div className="prose-pivora mt-8 space-y-8 text-[15px] leading-relaxed text-ink">{children}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-xl font-bold text-navy">{children}</h2>;
}

export function Privacy() {
  return (
    <LegalShell title="Privacy Policy">
      <section>
        <H>What we collect</H>
        <p className="mt-2">
          When you use the Contact or Careers forms, we collect the information you provide: your name, work email,
          company, website, current geography, and the details of your enquiry. For client enquiries this may include
          your primary objective, commercial range and GTM stage; for candidates, your background and portfolio links.
        </p>
      </section>
      <section>
        <H>Why we collect it</H>
        <p className="mt-2">
          To respond to your enquiry, to qualify whether Pivora is the right partner for your growth problem (or the
          right team for your career move), and to conduct a reference conversation where you request one. We do not use
          form data for marketing lists, and we do not sell it.
        </p>
      </section>
      <section>
        <H>How long it is retained</H>
        <p className="mt-2">
          Enquiry data is retained for as long as the conversation it started remains active, and for a reasonable period
          afterwards so we can honour references and follow-ups. You may ask for deletion at any time (see below).
        </p>
      </section>
      <section>
        <H>Sharing with third parties</H>
        <p className="mt-2">
          Form submissions may be processed through operational tooling (such as email and a CRM) used solely to manage
          the conversation. We do not share your information with any other third party.
        </p>
      </section>
      <section>
        <H>How to request deletion</H>
        <p className="mt-2">
          To access, correct or delete your information, contact us through the Contact page and state your request. We
          will confirm once it is actioned.
        </p>
      </section>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell title="Terms of Use">
      <section>
        <H>Use of this site</H>
        <p className="mt-2">
          This website describes the services and operating models of Pivora Consulting LLP. By using it you agree to use
          it lawfully and not to misrepresent your identity or affiliation when submitting a form.
        </p>
      </section>
      <section>
        <H>Intellectual property</H>
        <p className="mt-2">
          All content on this site — copy, figures, frameworks and the Pivora name and marks — is the property of Pivora
          Consulting LLP unless otherwise attributed. It may not be reproduced without written permission.
        </p>
      </section>
      <section>
        <H>Published market data</H>
        <p className="mt-2">
          Market statistics on this site are drawn from named third-party sources, each rendered beside the figure with
          its publication date. They are provided for context, are believed accurate at the date of checking, and are
          provided without warranty. Decisions should not rest on them without independent verification.
        </p>
      </section>
      <section>
        <H>No professional advice</H>
        <p className="mt-2">
          Nothing on this site constitutes legal, financial or professional advice, and no client relationship arises
          from using this website.
        </p>
      </section>
    </LegalShell>
  );
}

export function Cookies() {
  return (
    <LegalShell title="Cookie Notice">
      <section>
        <H>What is in use</H>
        <p className="mt-2">
          This site currently sets no analytics, advertising or tracking cookies. Only storage strictly required for the
          site to function is used.
        </p>
      </section>
      <section>
        <H>If analytics are introduced</H>
        <p className="mt-2">
          If privacy-respecting analytics are introduced, this notice will be updated to name the tool, what it collects,
          and — where your jurisdiction requires it — a consent mechanism will be presented before any non-essential
          cookie is set.
        </p>
      </section>
    </LegalShell>
  );
}
