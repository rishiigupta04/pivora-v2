import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/** Consistent section shell: eyebrow + headline + optional lede, then content. */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  tone = "white",
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  tone?: "white" | "grey" | "navy";
  children: ReactNode;
  className?: string;
}) {
  const bg = tone === "grey" ? "bg-softgrey" : tone === "navy" ? "bg-navy text-white" : "bg-white";
  return (
    <section id={id} className={`${bg} scroll-mt-20 py-12 md:py-16 ${className}`}>
      <div className="container-site">
        {eyebrow || title || lede ? (
          <Reveal>
            <div className="max-w-3xl">
              {eyebrow ? <p className={tone === "navy" ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p> : null}
              {title ? (
                <h2
                  className={`mt-4 font-head text-3xl font-semibold leading-[1.12] tracking-tight md:text-4xl ${
                    tone === "navy" ? "text-white" : "text-navy"
                  }`}
                >
                  {title}
                </h2>
              ) : null}
              {lede ? (
                <p className={`mt-4 text-lg leading-relaxed ${tone === "navy" ? "text-white/75" : "text-greytext"}`}>{lede}</p>
              ) : null}
            </div>
          </Reveal>
        ) : null}
        <div className={eyebrow || title || lede ? "mt-8 md:mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
