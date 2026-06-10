import type { ThemeName } from "@/lib/themes";

export type ThemePresetId =
  | "luxury-boutique"
  | "coastal-resort"
  | "rustic-lodge"
  | "modern-minimal"
  | "roadside-motel"
  | "business-hotel"
  | "historic-inn";

export type HeroLayout =
  | "fullscreen"
  | "split-screen"
  | "booking-focused"
  | "image-carousel"
  | "editorial";

export type RoomCardLayout =
  | "grid-cards"
  | "luxury-cards"
  | "magazine-style"
  | "large-feature"
  | "minimal";

export type GalleryLayout =
  | "grid"
  | "masonry"
  | "carousel"
  | "luxury-showcase"
  | "full-width";

export type ButtonStyle =
  | "luxury-gold"
  | "modern-minimal"
  | "rounded-coastal"
  | "rustic-wood"
  | "premium-dark";

export type TypographyStyle =
  | "serif-elegant"
  | "serif-classic"
  | "sans-modern"
  | "sans-friendly";

export type AnimationLevel = "off" | "subtle" | "premium";

export type SectionVisibility = {
  reviews: boolean;
  attractions: boolean;
  amenities: boolean;
  gallery: boolean;
  faq: boolean;
  map: boolean;
  about: boolean;
};

export type CustomizationState = {
  primaryColor: string | null;
  secondaryColor: string | null;
  accentColor: string | null;
  typography: TypographyStyle | null;
  heroLayout: HeroLayout;
  roomCardLayout: RoomCardLayout;
  galleryLayout: GalleryLayout;
  buttonStyle: ButtonStyle;
  animationLevel: AnimationLevel;
  sections: SectionVisibility;
};

export type DesignState = {
  presetId: ThemePresetId;
  customization: CustomizationState;
};

export type ResolvedDesign = {
  baseTheme: ThemeName;
  presetId: ThemePresetId;
  customization: CustomizationState;
  colorOverrides: Record<string, string>;
  typography: TypographyStyle;
};

export type ThemePresetDefinition = {
  id: ThemePresetId;
  label: string;
  description: string;
  baseTheme: ThemeName;
  defaultCustomization: CustomizationState;
};
