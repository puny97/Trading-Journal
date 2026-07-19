export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

// Prefixes +/- and the ₹ symbol, e.g. "+₹1,570" or "-₹280"
export function formatPnl(value: number): string {
  const sign = value >= 0 ? "+" : "-";
  return `${sign}₹${formatINR(Math.abs(value))}`;
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}