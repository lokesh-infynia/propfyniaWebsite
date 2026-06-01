import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  copy?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function Section({ id, eyebrow, title, copy, children, dark, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-pad ${dark ? "section-dark" : "section-light"} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {(eyebrow || title || copy) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          >
            {eyebrow && <p className={dark ? "eyebrow text-gold-400" : "eyebrow text-gold-600"}>{eyebrow}</p>}
            {title && <h2 className={dark ? "section-title text-white" : "section-title text-navy-950"}>{title}</h2>}
            {copy && <p className={dark ? "mt-5 text-base leading-8 text-white/70" : "mt-5 text-base leading-8 text-navy-800/75"}>{copy}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
