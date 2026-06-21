import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type CardProps = {
  icon?: LucideIcon;
  title: string;
  copy?: string;
  dark?: boolean;
  children?: ReactNode;
};

export function Card({ icon: Icon, title, copy, dark, children }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={dark ? "dark-card" : "feature-card"}
    >
      {Icon && (
        <div className={dark ? "icon-box-dark" : "icon-box"}>
          <Icon size={20} strokeWidth={1.6} />
        </div>
      )}
      <h3 className={dark ? "card-title text-white" : "card-title text-ink"}>{title}</h3>
      {copy && <p className={dark ? "mt-3 text-[15px] leading-7 text-on-dark-soft" : "mt-3 text-[15px] leading-7 text-body"}>{copy}</p>}
      {children}
    </motion.article>
  );
}
