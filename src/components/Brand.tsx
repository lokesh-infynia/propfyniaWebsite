import { logoDark, logoLight } from "../lib/constants";

type BrandProps = {
  variant?: "dark" | "light";
  compact?: boolean;
};

export function Brand({ variant = "light", compact = false }: BrandProps) {
  const logo = variant === "dark" ? logoDark : logoLight;

  return (
    <a href="#top" className="flex items-center gap-3" aria-label="PropFynia home">
      <img
        src={logo}
        alt="PropFynia"
        className={compact ? "h-10 w-auto object-contain" : "h-12 w-auto object-contain sm:h-14"}
      />
    </a>
  );
}
