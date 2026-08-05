import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "accent";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-denim text-white hover:bg-[#003552]",
  secondary: "bg-white text-ink hover:bg-cream",
  accent: "bg-lightyellow text-ink hover:bg-[#fdec8a]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold border-2 border-ink shadow-[4px_4px_0_0_#004669] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#004669] active:translate-x-0 active:translate-y-0 active:shadow-none";

interface ButtonProps {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  type?: "button" | "submit";
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
