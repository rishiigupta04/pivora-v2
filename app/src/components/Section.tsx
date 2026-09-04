import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { drawRule, rise, stagger } from "@/components/motion/variants";

/**
 * Consistent section shell: eyebrow + headline + optional lede, then content.
 *
 * Depth (§ Step 2): navy sections get the gradient and grain treatment; grey
 * and white stay flat, so depth reads as hierarchy rather than as a texture
 * applied everywhere. Padding is more generous than before so figures have
 * room to land.
 *
 * Motion (§ Step 6): the eyebrow rule draws, then the headline and lede rise
 * in sequence. Fires once, ~15% in view.
 */
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
  const navy = tone === "navy";
  const bg = tone === "grey" ? "bg-softgrey" : navy ? "grain relative overflow-hidden bg-navy-depth text-white" : "bg-white";
  const hasHead = eyebrow || title || lede;

  return (
    <section id={id} className={`${bg} band scroll-mt-20 ${className}`}>
      {navy ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
      ) : null}
      <div className="container-site relative">
        {hasHead ? (
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger(0.08)}
          >
            {eyebrow ? (
              <motion.p className={navy ? "eyebrow-on-dark" : "eyebrow"} variants={rise}>
                {eyebrow}
              </motion.p>
            ) : null}
            {eyebrow ? (
              <motion.span
                aria-hidden="true"
                className="mt-3 block h-[3px] w-11 origin-left rounded-full bg-gold"
                variants={drawRule}
              />
            ) : null}
            {title ? (
              <motion.h2
                className={`h-display mt-5 text-[30px] md:text-[40px] ${navy ? "text-white" : "text-navy"}`}
                variants={rise}
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                {title}
              </motion.h2>
            ) : null}
            {lede ? (
              <motion.p
                className={`mt-5 text-[17px] leading-[1.7] md:text-[18px] ${navy ? "text-white/75" : "text-greytext"}`}
                variants={rise}
              >
                {lede}
              </motion.p>
            ) : null}
          </motion.div>
        ) : null}
        <div className={hasHead ? "mt-10 md:mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}

