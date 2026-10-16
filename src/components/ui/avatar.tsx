import { cn } from "@/lib/utils";

const sizes = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-base",
};

/**
 * Deterministic avatar that renders initials on a colour derived from the name,
 * so no external image assets are required.
 */
export function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const initials = name
    .replace(/^@/, "")
    .split(/[\s_.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const hue = hashHue(name);

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white ring-1 ring-black/5",
        sizes[size],
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(${hue} 70% 48%), hsl(${
          (hue + 40) % 360
        } 72% 40%))`,
      }}
      aria-hidden="true"
    >
      {initials || "?"}
    </span>
  );
}

function hashHue(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 360;
  }
  return hash;
}
