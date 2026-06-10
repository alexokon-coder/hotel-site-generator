import type { CustomizationState, TypographyStyle } from "./types";

/** Demo-toolbar display options — maps to existing customization fields. */

export type ColorPaletteId =
  | "default"
  | "gold-luxury"
  | "ocean-blue"
  | "forest-green"
  | "desert-earth"
  | "modern-monochrome";

export type TypographyOptionId =
  | "default"
  | "elegant-serif"
  | "modern-sans"
  | "boutique-mix"
  | "luxury-editorial"
  | "minimal-contemporary";

export const COLOR_PALETTE_OPTIONS: {
  id: ColorPaletteId;
  label: string;
}[] = [
  { id: "default", label: "Current theme" },
  { id: "gold-luxury", label: "Gold Luxury" },
  { id: "ocean-blue", label: "Ocean Blue" },
  { id: "forest-green", label: "Forest Green" },
  { id: "desert-earth", label: "Desert Earth" },
  { id: "modern-monochrome", label: "Modern Monochrome" },
];

export const TYPOGRAPHY_OPTIONS: {
  id: TypographyOptionId;
  label: string;
}[] = [
  { id: "default", label: "Current theme" },
  { id: "elegant-serif", label: "Elegant Serif" },
  { id: "modern-sans", label: "Modern Sans" },
  { id: "boutique-mix", label: "Boutique Mix" },
  { id: "luxury-editorial", label: "Luxury Editorial" },
  { id: "minimal-contemporary", label: "Minimal Contemporary" },
];

const PALETTE_COLORS: Record<
  Exclude<ColorPaletteId, "default">,
  Pick<CustomizationState, "primaryColor" | "secondaryColor" | "accentColor">
> = {
  "gold-luxury": {
    primaryColor: "#2c2416",
    secondaryColor: "#f5f0e8",
    accentColor: "#c9a55c",
  },
  "ocean-blue": {
    primaryColor: "#023e8a",
    secondaryColor: "#f0f8ff",
    accentColor: "#0077b6",
  },
  "forest-green": {
    primaryColor: "#1b3a2a",
    secondaryColor: "#f4f7f2",
    accentColor: "#4a7c59",
  },
  "desert-earth": {
    primaryColor: "#4a3728",
    secondaryColor: "#faf6f0",
    accentColor: "#b8860b",
  },
  "modern-monochrome": {
    primaryColor: "#18181b",
    secondaryColor: "#fafafa",
    accentColor: "#3f3f46",
  },
};

const TYPOGRAPHY_MAP: Record<
  Exclude<TypographyOptionId, "default">,
  TypographyStyle
> = {
  "elegant-serif": "serif-elegant",
  "modern-sans": "sans-modern",
  "boutique-mix": "sans-friendly",
  "luxury-editorial": "serif-classic",
  "minimal-contemporary": "sans-modern",
};

export function paletteToCustomization(
  paletteId: ColorPaletteId
): Pick<CustomizationState, "primaryColor" | "secondaryColor" | "accentColor"> {
  if (paletteId === "default") {
    return { primaryColor: null, secondaryColor: null, accentColor: null };
  }
  return PALETTE_COLORS[paletteId];
}

export function customizationToPalette(
  customization: CustomizationState
): ColorPaletteId {
  const { primaryColor, secondaryColor, accentColor } = customization;
  if (!primaryColor && !secondaryColor && !accentColor) {
    return "default";
  }
  for (const [id, colors] of Object.entries(PALETTE_COLORS) as [
    Exclude<ColorPaletteId, "default">,
    (typeof PALETTE_COLORS)[Exclude<ColorPaletteId, "default">],
  ][]) {
    if (
      colors.primaryColor === primaryColor &&
      colors.secondaryColor === secondaryColor &&
      colors.accentColor === accentColor
    ) {
      return id;
    }
  }
  return "default";
}

export function typographyToCustomization(
  optionId: TypographyOptionId
): Pick<CustomizationState, "typography"> {
  if (optionId === "default") {
    return { typography: null };
  }
  return { typography: TYPOGRAPHY_MAP[optionId] };
}

export function customizationToTypography(
  customization: CustomizationState
): TypographyOptionId {
  if (!customization.typography) return "default";
  for (const [id, style] of Object.entries(TYPOGRAPHY_MAP) as [
    Exclude<TypographyOptionId, "default">,
    TypographyStyle,
  ][]) {
    if (style === customization.typography) {
      return id;
    }
  }
  return "default";
}
