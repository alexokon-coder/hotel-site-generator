/**
 * Resolves an image source to a full URL.
 *
 * Accepts:
 *   • Unsplash photo ID  →  "1566073771259-6a8506099945"
 *   • Local file         →  "/images/hero.jpg"
 *   • Full URL           →  "https://images.unsplash.com/photo-..."
 */
export function resolveImage(src: string, width: number): string {
  if (src.startsWith("/")) {
    return src;
  }

  if (src.startsWith("http")) {
    return src;
  }

  const params = new URLSearchParams({
    ixlib: "rb-4.0.3",
    auto: "format",
    fit: "crop",
    w: String(width),
    q: "80",
  });

  return `https://images.unsplash.com/photo-${src}?${params.toString()}`;
}
