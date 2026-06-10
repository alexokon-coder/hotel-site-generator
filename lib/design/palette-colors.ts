/** Derives full-site CSS variable overrides from a 3-color demo palette. */

type Rgb = { r: number; g: number; b: number };

function parseHex(hex: string): Rgb | null {
  const h = hex.replace("#", "").trim();
  if (h.length === 3) {
    return {
      r: parseInt(h[0] + h[0], 16),
      g: parseInt(h[1] + h[1], 16),
      b: parseInt(h[2] + h[2], 16),
    };
  }
  if (h.length === 6) {
    return {
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16),
    };
  }
  return null;
}

function toHex(r: number, g: number, b: number): string {
  const clamp = (n: number) =>
    Math.round(Math.max(0, Math.min(255, n)))
      .toString(16)
      .padStart(2, "0");
  return `#${clamp(r)}${clamp(g)}${clamp(b)}`;
}

function mixHex(colorA: string, colorB: string, ratio: number): string {
  const a = parseHex(colorA);
  const b = parseHex(colorB);
  if (!a || !b) return colorA;
  const t = Math.max(0, Math.min(1, ratio));
  return toHex(
    a.r + (b.r - a.r) * t,
    a.g + (b.g - a.g) * t,
    a.b + (b.b - a.b) * t
  );
}

function luminance(hex: string): number {
  const c = parseHex(hex);
  if (!c) return 0.5;
  const channels = [c.r, c.g, c.b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0]! + 0.7152 * channels[1]! + 0.0722 * channels[2]!;
}

function lighten(hex: string, amount: number): string {
  return mixHex(hex, "#ffffff", amount);
}

function darken(hex: string, amount: number): string {
  return mixHex(hex, "#000000", amount);
}

function alphaHex(hex: string, alpha: number): string {
  const c = parseHex(hex);
  if (!c) return hex;
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
}

function contrastText(bg: string, dark: string, light: string): string {
  return luminance(bg) > 0.45 ? dark : light;
}

export function isFullPalette(
  primary: string | null,
  secondary: string | null,
  accent: string | null
): boolean {
  return Boolean(primary && secondary && accent);
}

/**
 * Maps primary / secondary / accent into every color-related theme CSS variable
 * so palette changes repaint the full site (not just a few accents).
 */
export function buildPaletteCssVariables(
  primary: string,
  secondary: string,
  accent: string
): Record<string, string> {
  const light = luminance(secondary) > 0.5;

  const surface = light
    ? mixHex(secondary, primary, 0.06)
    : mixHex(secondary, "#ffffff", 0.05);
  const surfaceAlt = light
    ? mixHex(secondary, primary, 0.12)
    : mixHex(secondary, "#ffffff", 0.1);
  const surfaceDark = light
    ? mixHex(primary, "#000000", 0.2)
    : darken(secondary, 0.38);
  const card = light ? lighten(secondary, 0.025) : lighten(surface, 0.05);

  const accentLight = lighten(accent, 0.16);
  const accentMuted = darken(accent, 0.18);

  const muted = mixHex(primary, "#6b7280", 0.35);
  const mutedSubtle = mixHex(primary, secondary, 0.62);
  const mutedOnDark = light
    ? mixHex(secondary, "#ffffff", 0.82)
    : mixHex(secondary, "#ffffff", 0.7);

  const cardBorder = alphaHex(accent, light ? 0.28 : 0.35);
  const mutedBorder = alphaHex(accent, 0.14);
  const navBorder = alphaHex(accent, 0.22);
  const footerBorder = alphaHex(accent, 0.2);

  const navBackground = light
    ? alphaHex(lighten(secondary, 0.01), 0.97)
    : alphaHex(surfaceDark, 0.96);
  const navText = light ? primary : secondary;
  const navLink = light ? alphaHex(primary, 0.72) : alphaHex(secondary, 0.78);

  const heroOverlay = `linear-gradient(180deg, ${alphaHex(surfaceDark, 0.42)} 0%, ${alphaHex(surfaceDark, 0.82)} 55%, ${alphaHex(mixHex(surfaceDark, "#000000", 0.25), 0.94)} 100%)`;
  const ctaOverlay = `linear-gradient(135deg, ${alphaHex(surfaceDark, 0.68)} 0%, ${alphaHex(mixHex(primary, surfaceDark, 0.5), 0.9)} 100%)`;

  const footerBg = darken(surfaceDark, 0.06);
  const btnPrimaryText = contrastText(accent, primary, secondary);

  return {
    "--background": secondary,
    "--foreground": primary,
    "--accent": accent,
    "--accent-light": accentLight,
    "--accent-muted": accentMuted,
    "--surface": surface,
    "--surface-alt": surfaceAlt,
    "--surface-dark": surfaceDark,
    "--card": card,
    "--card-border": cardBorder,
    "--muted": muted,
    "--muted-on-dark": mutedOnDark,
    "--muted-subtle": mutedSubtle,
    "--muted-border": mutedBorder,
    "--nav-background": navBackground,
    "--nav-border": navBorder,
    "--nav-text": navText,
    "--nav-link": navLink,
    "--hero-overlay": heroOverlay,
    "--cta-overlay": ctaOverlay,
    "--body-pattern": "none",
    "--section-rooms-bg": surface,
    "--section-amenities-bg": surfaceDark,
    "--section-gallery-bg": surfaceAlt,
    "--section-alt-bg": card,
    "--section-book-bg": surfaceDark,
    "--footer-bg": footerBg,
    "--footer-border": footerBorder,
    "--btn-primary-bg": accent,
    "--btn-primary-text": btnPrimaryText,
    "--btn-primary-hover": accentLight,
    "--btn-outline-border": alphaHex(accent, 0.55),
    "--btn-outline-text": light ? primary : secondary,
    "--heading-on-surface": primary,
    "--heading-on-dark": light ? secondary : lighten(secondary, 0.08),
    "--eyebrow-color": accent,
  };
}

/** Neutralize hardcoded theme-specific colors when a demo palette is active. */
export function buildPaletteScopeCss(): string {
  const scope = "html[data-demo-active=\"true\"][data-palette-active=\"true\"]";
  return `
${scope} .theme-btn-primary,
${scope} .theme-btn-primary:hover {
  background: var(--btn-primary-bg) !important;
}
${scope} .theme-btn-primary:hover {
  background: var(--btn-primary-hover) !important;
}
${scope} body {
  background-color: var(--background) !important;
  background-image: none !important;
}
${scope} .theme-nav-logo,
${scope} .theme-nav-link {
  color: var(--nav-link) !important;
}
${scope} .theme-nav-logo {
  color: var(--nav-text) !important;
}
${scope} .theme-nav-link:hover {
  color: var(--accent) !important;
}
${scope} .theme-btn-nav {
  border-color: var(--accent) !important;
  color: var(--accent) !important;
  background: transparent !important;
}
${scope} .theme-btn-nav:hover {
  background: var(--accent) !important;
  color: var(--btn-primary-text) !important;
}
${scope} .theme-amenity-card {
  border-color: ${alphaHex("#ffffff", 0.12)} !important;
}
${scope} .theme-amenity-card:hover {
  border-color: color-mix(in srgb, var(--accent) 50%, transparent) !important;
  background: color-mix(in srgb, var(--accent) 8%, var(--surface-dark)) !important;
}
${scope} .theme-card {
  border-color: var(--card-border) !important;
}
${scope} .theme-room-image-wrap {
  border-color: var(--accent) !important;
}
`.trim();
}
