/**
 * Convert text into a URL-safe slug.
 *
 * Examples:
 * "Tech Tips"        → "tech-tips"
 * "Personal Finance" → "personal-finance"
 * "Tax & GST"        → "tax-and-gst"
 * "Money / Banking"  → "money-banking"
 */
export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Category-specific alias.
 *
 * Kept separate semantically so category URLs remain easy to
 * understand throughout the application.
 */
export function slugifyCategory(category: string): string {
  return slugify(category);
}

/**
 * Create a URL-safe tag slug.
 */
export function slugifyTag(tag: string): string {
  return slugify(tag);
}