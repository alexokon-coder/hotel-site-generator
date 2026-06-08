/**
 * Resolves an image source to a full URL.
 * Accepts Unsplash photo IDs, local paths (/images/hero.jpg), or full URLs.
 */
export function resolveImage(src: string, width: number): string {
  if (src.startsWith("http") || src.startsWith("/")) {
    return src;
  }
  return `https://images.unsplash.com/photo-${src}?auto=format&fit=crop&w=${width}&q=80`;
}
