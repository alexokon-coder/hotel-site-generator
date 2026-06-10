import type { ThemeName } from "@/lib/themes";
import {
  buildPaletteCssVariables,
  buildPaletteScopeCss,
  isFullPalette,
} from "./palette-colors";
import { ThemePresetManager } from "./ThemePresetManager";
import type {
  CustomizationState,
  DesignState,
  ResolvedDesign,
  TypographyStyle,
} from "./types";

const TYPOGRAPHY_FONTS: Record<
  TypographyStyle,
  { sans: string; serif: string; headingTransform: string; headingWeight: string }
> = {
  "serif-elegant": {
    sans: "var(--font-lato)",
    serif: "var(--font-playfair)",
    headingTransform: "uppercase",
    headingWeight: "400",
  },
  "serif-classic": {
    sans: "var(--font-source-sans)",
    serif: "var(--font-cormorant)",
    headingTransform: "none",
    headingWeight: "500",
  },
  "sans-modern": {
    sans: "var(--font-dm-sans)",
    serif: "var(--font-dm-serif)",
    headingTransform: "none",
    headingWeight: "400",
  },
  "sans-friendly": {
    sans: "var(--font-nunito-sans)",
    serif: "var(--font-libre-baskerville)",
    headingTransform: "none",
    headingWeight: "700",
  },
};

const BUTTON_STYLE_MAP: Record<
  CustomizationState["buttonStyle"],
  Record<string, string>
> = {
  "luxury-gold": {
    "--button-radius": "0px",
    "--btn-primary-bg": "var(--accent)",
    "--btn-primary-text": "var(--surface-dark)",
  },
  "modern-minimal": {
    "--button-radius": "2px",
    "--btn-primary-bg": "var(--foreground)",
    "--btn-primary-text": "#ffffff",
  },
  "rounded-coastal": {
    "--button-radius": "9999px",
    "--btn-primary-bg": "var(--accent)",
    "--btn-primary-text": "#ffffff",
  },
  "rustic-wood": {
    "--button-radius": "6px",
    "--btn-primary-bg": "var(--accent)",
    "--btn-primary-text": "#faf6f0",
  },
  "premium-dark": {
    "--button-radius": "0px",
    "--btn-primary-bg": "var(--surface-dark)",
    "--btn-primary-text": "var(--accent-light)",
  },
};

export function resolveDesign(state: DesignState): ResolvedDesign {
  const preset = ThemePresetManager.getPreset(state.presetId);
  const typography =
    state.customization.typography ??
    preset.defaultCustomization.typography ??
    "serif-elegant";

  const { primaryColor, secondaryColor, accentColor } = state.customization;
  const paletteActive = isFullPalette(
    primaryColor,
    secondaryColor,
    accentColor
  );

  const colorOverrides: Record<string, string> = paletteActive
    ? buildPaletteCssVariables(primaryColor!, secondaryColor!, accentColor!)
    : {};

  if (!paletteActive) {
    if (primaryColor) {
      colorOverrides["--foreground"] = primaryColor;
      colorOverrides["--heading-on-surface"] = primaryColor;
    }
    if (secondaryColor) {
      colorOverrides["--surface"] = secondaryColor;
      colorOverrides["--background"] = secondaryColor;
    }
    if (accentColor) {
      colorOverrides["--accent"] = accentColor;
      colorOverrides["--eyebrow-color"] = accentColor;
      colorOverrides["--btn-primary-bg"] = accentColor;
    }
  }

  Object.assign(colorOverrides, BUTTON_STYLE_MAP[state.customization.buttonStyle]);

  const fonts = TYPOGRAPHY_FONTS[typography];
  colorOverrides["--theme-font-sans"] = fonts.sans;
  colorOverrides["--theme-font-serif"] = fonts.serif;
  colorOverrides["--font-heading-transform"] = fonts.headingTransform;
  colorOverrides["--font-heading-weight"] = fonts.headingWeight;

  return {
    baseTheme: preset.baseTheme,
    presetId: state.presetId,
    customization: state.customization,
    colorOverrides,
    typography,
    paletteActive,
  };
}

export function buildOverrideCss(
  overrides: Record<string, string>,
  paletteActive = false
): string {
  if (Object.keys(overrides).length === 0 && !paletteActive) return "";

  const varBlock =
    Object.keys(overrides).length > 0
      ? `html[data-demo-active="true"] {\n${Object.entries(overrides)
          .map(([key, value]) => `  ${key}: ${value};`)
          .join("\n")}\n}`
      : "";

  const scopeBlock = paletteActive ? buildPaletteScopeCss() : "";
  return [varBlock, scopeBlock].filter(Boolean).join("\n\n");
}

export function applyDesignToDocument(state: DesignState): ResolvedDesign {
  if (typeof document === "undefined") {
    return resolveDesign(state);
  }

  const resolved = resolveDesign(state);
  const html = document.documentElement;

  html.setAttribute("data-theme", resolved.baseTheme);
  html.setAttribute("data-demo-active", "true");
  html.setAttribute("data-hero-layout", state.customization.heroLayout);
  html.setAttribute("data-room-layout", state.customization.roomCardLayout);
  html.setAttribute("data-gallery-layout", state.customization.galleryLayout);
  html.setAttribute("data-button-style", state.customization.buttonStyle);
  html.setAttribute("data-animation", state.customization.animationLevel);
  html.setAttribute("data-typography", resolved.typography);

  if (resolved.paletteActive) {
    html.setAttribute("data-palette-active", "true");
  } else {
    html.removeAttribute("data-palette-active");
  }

  let styleEl = document.getElementById("demo-design-overrides");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "demo-design-overrides";
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = buildOverrideCss(
    resolved.colorOverrides,
    resolved.paletteActive
  );

  return resolved;
}

export function clearDemoDesignFromDocument(defaultTheme: ThemeName): void {
  if (typeof document === "undefined") return;

  const html = document.documentElement;
  html.setAttribute("data-theme", defaultTheme);
  html.removeAttribute("data-demo-active");
  html.removeAttribute("data-hero-layout");
  html.removeAttribute("data-room-layout");
  html.removeAttribute("data-gallery-layout");
  html.removeAttribute("data-button-style");
  html.removeAttribute("data-animation");
  html.removeAttribute("data-typography");
  html.removeAttribute("data-palette-active");

  document.getElementById("demo-design-overrides")?.remove();
}
