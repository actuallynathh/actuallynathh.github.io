import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary font-semibold hover:bg-primary-strong shadow-[0_10px_24px_-12px_var(--primary)]",
  secondary:
    "bg-primary-soft text-primary-ink font-semibold hover:brightness-95",
  outline:
    "border border-border bg-card/70 backdrop-blur-md text-foreground font-medium hover:bg-card",
  ghost: "text-muted font-medium hover:bg-input/70 hover:text-foreground",
  danger:
    "bg-danger text-white font-semibold hover:brightness-95 shadow-[0_8px_20px_-8px_var(--danger)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-xl gap-1.5",
  md: "h-11 px-5 text-sm rounded-2xl gap-2",
  lg: "h-12 px-6 text-base rounded-2xl gap-2",
};

/** Shared class string so links can be styled as buttons too. */
export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex select-none items-center justify-center whitespace-nowrap transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return <button className={buttonClass(variant, size, className)} {...props} />;
}
