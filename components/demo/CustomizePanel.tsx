"use client";

import {
  COLOR_PALETTE_OPTIONS,
  customizationToPalette,
  customizationToTypography,
  paletteToCustomization,
  TYPOGRAPHY_OPTIONS,
  typographyToCustomization,
  type ColorPaletteId,
  type TypographyOptionId,
} from "@/lib/design/demo-options";
import type {
  AnimationLevel,
  ButtonStyle,
  GalleryLayout,
  HeroLayout,
  RoomCardLayout,
} from "@/lib/design/types";
import { CollapsibleSection, ContextSelect, DemoPanel } from "./demo-ui";
import { useDesign } from "./DesignProvider";

type CustomizePanelProps = {
  onClose: () => void;
  onReset: () => void;
};

const HERO_OPTIONS: { value: HeroLayout; label: string }[] = [
  { value: "fullscreen", label: "Fullscreen" },
  { value: "split-screen", label: "Split Screen" },
  { value: "booking-focused", label: "Booking Focused" },
  { value: "image-carousel", label: "Image Carousel" },
  { value: "editorial", label: "Editorial" },
];

const ROOM_OPTIONS: { value: RoomCardLayout; label: string }[] = [
  { value: "grid-cards", label: "Grid Cards" },
  { value: "luxury-cards", label: "Luxury Cards" },
  { value: "magazine-style", label: "Magazine Style" },
  { value: "large-feature", label: "Large Feature" },
  { value: "minimal", label: "Minimal" },
];

const GALLERY_OPTIONS: { value: GalleryLayout; label: string }[] = [
  { value: "grid", label: "Grid" },
  { value: "masonry", label: "Masonry" },
  { value: "carousel", label: "Carousel" },
  { value: "luxury-showcase", label: "Luxury Showcase" },
  { value: "full-width", label: "Full Width" },
];

const BUTTON_OPTIONS: { value: ButtonStyle; label: string }[] = [
  { value: "luxury-gold", label: "Luxury Gold" },
  { value: "modern-minimal", label: "Modern Minimal" },
  { value: "rounded-coastal", label: "Rounded Coastal" },
  { value: "rustic-wood", label: "Rustic Wood" },
  { value: "premium-dark", label: "Premium Dark" },
];

const ANIMATION_OPTIONS: { value: AnimationLevel; label: string }[] = [
  { value: "off", label: "Off" },
  { value: "subtle", label: "Subtle" },
  { value: "premium", label: "Premium" },
];

const SECTION_TOGGLES = [
  ["reviews", "Reviews"],
  ["attractions", "Local Attractions"],
  ["amenities", "Amenities"],
  ["gallery", "Gallery"],
  ["faq", "FAQ"],
  ["map", "Map"],
  ["about", "About"],
] as const;

export function CustomizePanel({ onClose, onReset }: CustomizePanelProps) {
  const { customization, updateCustomization } = useDesign();
  const { sections } = customization;

  const toggleSection = (key: keyof typeof sections) => {
    updateCustomization({
      sections: { ...sections, [key]: !sections[key] },
    });
  };

  return (
    <DemoPanel
      title="Customize"
      onClose={onClose}
      width={320}
      footer={
        <button type="button" className="demo-reset-action" onClick={onReset}>
          Reset
        </button>
      }
    >
      <div className="demo-customize-sections">
        <CollapsibleSection title="Colors" defaultOpen>
          <ContextSelect<ColorPaletteId>
            label="Color Palette"
            value={customizationToPalette(customization)}
            options={COLOR_PALETTE_OPTIONS.map((o) => ({
              value: o.id,
              label: o.label,
            }))}
            onChange={(id) => updateCustomization(paletteToCustomization(id))}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Typography">
          <ContextSelect<TypographyOptionId>
            label="Typography"
            value={customizationToTypography(customization)}
            options={TYPOGRAPHY_OPTIONS.map((o) => ({
              value: o.id,
              label: o.label,
            }))}
            onChange={(id) => updateCustomization(typographyToCustomization(id))}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Layouts">
          <ContextSelect
            label="Hero Layout"
            value={customization.heroLayout}
            options={HERO_OPTIONS}
            onChange={(v) => updateCustomization({ heroLayout: v })}
          />
          <ContextSelect
            label="Room Layout"
            value={customization.roomCardLayout}
            options={ROOM_OPTIONS}
            onChange={(v) => updateCustomization({ roomCardLayout: v })}
          />
          <ContextSelect
            label="Gallery Layout"
            value={customization.galleryLayout}
            options={GALLERY_OPTIONS}
            onChange={(v) => updateCustomization({ galleryLayout: v })}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Buttons">
          <ContextSelect
            label="Button Style"
            value={customization.buttonStyle}
            options={BUTTON_OPTIONS}
            onChange={(v) => updateCustomization({ buttonStyle: v })}
          />
          <ContextSelect
            label="Animation"
            value={customization.animationLevel}
            options={ANIMATION_OPTIONS}
            onChange={(v) => updateCustomization({ animationLevel: v })}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Sections">
          <ul className="demo-section-checks">
            {SECTION_TOGGLES.map(([key, label]) => (
              <li key={key}>
                <label className="demo-section-check">
                  <input
                    type="checkbox"
                    checked={sections[key]}
                    onChange={() => toggleSection(key)}
                  />
                  <span>{label}</span>
                </label>
              </li>
            ))}
          </ul>
        </CollapsibleSection>
      </div>
    </DemoPanel>
  );
}
