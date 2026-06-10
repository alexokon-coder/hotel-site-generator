import type { ThemeName } from "@/lib/themes";
import type {
  CustomizationState,
  ThemePresetDefinition,
  ThemePresetId,
} from "./types";

export const DEFAULT_SECTIONS: CustomizationState["sections"] = {
  reviews: true,
  attractions: true,
  amenities: true,
  gallery: true,
  faq: false,
  map: false,
  about: false,
};

const baseCustomization = (
  overrides: Partial<CustomizationState>
): CustomizationState => ({
  primaryColor: null,
  secondaryColor: null,
  accentColor: null,
  typography: null,
  heroLayout: "fullscreen",
  roomCardLayout: "grid-cards",
  galleryLayout: "grid",
  buttonStyle: "luxury-gold",
  animationLevel: "subtle",
  sections: { ...DEFAULT_SECTIONS },
  ...overrides,
});

export const themePresets: Record<ThemePresetId, ThemePresetDefinition> = {
  "luxury-boutique": {
    id: "luxury-boutique",
    label: "Luxury Boutique",
    description: "Dark, elegant, gold accents",
    baseTheme: "luxury",
    defaultCustomization: baseCustomization({
      heroLayout: "fullscreen",
      roomCardLayout: "luxury-cards",
      galleryLayout: "luxury-showcase",
      buttonStyle: "luxury-gold",
      animationLevel: "premium",
      typography: "serif-elegant",
    }),
  },
  "coastal-resort": {
    id: "coastal-resort",
    label: "Coastal Resort",
    description: "Light, airy, ocean blues",
    baseTheme: "coastal",
    defaultCustomization: baseCustomization({
      heroLayout: "split-screen",
      roomCardLayout: "grid-cards",
      galleryLayout: "carousel",
      buttonStyle: "rounded-coastal",
      animationLevel: "subtle",
      typography: "serif-classic",
    }),
  },
  "rustic-lodge": {
    id: "rustic-lodge",
    label: "Rustic Lodge",
    description: "Warm, earthy, cabin feel",
    baseTheme: "rustic",
    defaultCustomization: baseCustomization({
      heroLayout: "editorial",
      roomCardLayout: "magazine-style",
      galleryLayout: "masonry",
      buttonStyle: "rustic-wood",
      animationLevel: "subtle",
      typography: "serif-classic",
    }),
  },
  "modern-minimal": {
    id: "modern-minimal",
    label: "Modern Minimal",
    description: "Clean black & white",
    baseTheme: "modern",
    defaultCustomization: baseCustomization({
      heroLayout: "booking-focused",
      roomCardLayout: "minimal",
      galleryLayout: "full-width",
      buttonStyle: "modern-minimal",
      animationLevel: "off",
      typography: "sans-modern",
    }),
  },
  "roadside-motel": {
    id: "roadside-motel",
    label: "Roadside Motel",
    description: "Retro neon, budget-friendly",
    baseTheme: "roadside-motel",
    defaultCustomization: baseCustomization({
      heroLayout: "image-carousel",
      roomCardLayout: "grid-cards",
      galleryLayout: "grid",
      buttonStyle: "rounded-coastal",
      animationLevel: "subtle",
      typography: "sans-friendly",
    }),
  },
  "business-hotel": {
    id: "business-hotel",
    label: "Business Hotel",
    description: "Corporate, efficient, navy",
    baseTheme: "business-hotel",
    defaultCustomization: baseCustomization({
      heroLayout: "booking-focused",
      roomCardLayout: "grid-cards",
      galleryLayout: "grid",
      buttonStyle: "modern-minimal",
      animationLevel: "off",
      typography: "sans-modern",
    }),
  },
  "historic-inn": {
    id: "historic-inn",
    label: "Historic Inn",
    description: "Colonial charm, burgundy & cream",
    baseTheme: "historic-inn",
    defaultCustomization: baseCustomization({
      heroLayout: "editorial",
      roomCardLayout: "large-feature",
      galleryLayout: "luxury-showcase",
      buttonStyle: "premium-dark",
      animationLevel: "premium",
      typography: "serif-elegant",
    }),
  },
};

export const themePresetList = Object.values(themePresets);

export const configThemeToPreset: Record<ThemeName, ThemePresetId> = {
  luxury: "luxury-boutique",
  coastal: "coastal-resort",
  rustic: "rustic-lodge",
  modern: "modern-minimal",
  "roadside-motel": "roadside-motel",
  "business-hotel": "business-hotel",
  "historic-inn": "historic-inn",
};
