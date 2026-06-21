import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  copy?: string;
  children: ReactNode;
  dark?: boolean;
  soft?: boolean;
  className?: string;
};

export function Section({ id, eyebrow, title, copy, children, dark, soft, className = "" }: SectionProps) {
  const band = dark ? "section-dark" : soft ? "section-soft" : "section-light";
  return (
    <section id={id} className={`section-pad ${band} ${className}`}>
      <div className="mx-auto max-w-content px-5 sm:px-8">
        {(eyebrow || title || copy) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            {eyebrow && <p className={dark ? "eyebrow text-on-dark-soft" : "eyebrow text-muted"}>{eyebrow}</p>}
            {title && <h2 className={dark ? "section-title text-white" : "section-title text-ink"}>{title}</h2>}
            {copy && <p className={dark ? "mt-5 text-base leading-8 text-on-dark-soft" : "mt-5 text-base leading-8 text-body"}>{copy}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
