/**
 * Small helpers shared across the app.
 */

/** Joins conditional class names. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a coin amount using Indonesian thousand separators so it matches the
 * design language (e.g. 67000 -> "67.000").
 */
export function formatCoins(amount: number): string {
  return new Intl.NumberFormat("id-ID").format(amount);
}

/** Formats a signed coin delta, e.g. 900 -> "+900", -525 -> "-525". */
export function formatDelta(amount: number): string {
  const sign = amount > 0 ? "+" : "";
  return `${sign}${formatCoins(amount)}`;
}
