import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
};

export function Input({
  label,
  hint,
  leading,
  trailing,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;
  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}
      <div className="relative flex items-center">
        {leading ? (
          <span className="pointer-events-none absolute left-3.5 text-muted">
            {leading}
          </span>
        ) : null}
        <input
          id={inputId}
          className={cn(
            "h-12 w-full rounded-2xl border border-border bg-input/70 px-4 text-sm text-foreground outline-none backdrop-blur-md transition-colors placeholder:text-muted/80 focus:border-primary focus:bg-card/80",
            leading ? "pl-11" : undefined,
            trailing ? "pr-11" : undefined,
            className,
          )}
          {...props}
        />
        {trailing ? (
          <span className="absolute right-2.5 flex items-center">{trailing}</span>
        ) : null}
      </div>
      {hint ? <p className="mt-1.5 text-xs text-muted">{hint}</p> : null}
    </div>
  );
}
