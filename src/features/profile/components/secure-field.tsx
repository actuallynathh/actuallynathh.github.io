"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";

/** Masked field with a show/hide toggle, reused by the password and PIN forms. */
export function SecureField({
  label,
  name,
  placeholder,
  autoComplete,
  hint,
  value,
  onChange,
  numeric = false,
  maxLength,
}: {
  label: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  numeric?: boolean;
  maxLength?: number;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      label={label}
      name={name}
      type={visible ? "text" : "password"}
      inputMode={numeric ? "numeric" : undefined}
      maxLength={maxLength}
      placeholder={placeholder}
      autoComplete={autoComplete}
      hint={hint}
      value={value}
      onChange={(event) =>
        onChange(
          numeric ? event.target.value.replace(/\D/g, "") : event.target.value,
        )
      }
      trailing={
        <button
          type="button"
          onClick={() => setVisible((state) => !state)}
          aria-label={visible ? `Hide ${label}` : `Show ${label}`}
          className="p-2 text-muted transition-colors hover:text-foreground"
        >
          {visible ? (
            <EyeOffIcon className="size-5" />
          ) : (
            <EyeIcon className="size-5" />
          )}
        </button>
      }
    />
  );
}
