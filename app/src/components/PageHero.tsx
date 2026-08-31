import type { ReactNode } from "react";

/** Interior page hero: navy band, eyebrow + H1 + lede. Consistent across hubs and children. */
export function PageHero({ eyebrow, title, lede, children }: { eyebrow: string; title: ReactNode; lede?: string; children?: ReactNode }) {
  return (
    <section className="bg-navy py-12 text-white md:py-16">
      <div className="container-site max-w-4xl">
        <p className="eyebrow-on-dark">{eyebrow}</p>
        <h1 className="mt-4 font-head text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">{title}</h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
