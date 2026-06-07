export function formatPrice(amount, currency = "USD", locale = "en-US") {
  if (amount == null || Number.isNaN(Number(amount))) return "";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(Number(amount));
}

export function formatCompactNumber(value, locale = "en-US") {
  if (value == null || Number.isNaN(Number(value))) return "";

  return new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
  }).format(Number(value));
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
