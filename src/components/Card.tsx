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
      className={dark ? "glass-card dark-card" : "glass-card light-card"}
    >
      {Icon && (
        <div className={dark ? "icon-box bg-white/10 text-gold-400" : "icon-box bg-navy-950 text-gold-400"}>
          <Icon size={21} strokeWidth={1.8} />
        </div>
      )}
      <h3 className={dark ? "card-title text-white" : "card-title text-navy-950"}>{title}</h3>
      {copy && <p className={dark ? "mt-3 text-sm leading-7 text-white/70" : "mt-3 text-sm leading-7 text-navy-800/70"}>{copy}</p>}
      {children}
    </motion.article>
  );
}
