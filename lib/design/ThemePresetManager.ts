import { hotelConfig } from "@/hotel.config";
import type { ThemeName } from "@/lib/themes";
import { configThemeToPreset, themePresets } from "./theme-presets";
import type {
  CustomizationState,
  DesignState,
  ThemePresetId,
} from "./types";

export class ThemePresetManager {
  static getPreset(id: ThemePresetId) {
    return themePresets[id];
  }

  static getAllPresets() {
    return Object.values(themePresets);
  }

  static getBaseTheme(presetId: ThemePresetId): ThemeName {
    return themePresets[presetId].baseTheme;
  }

  static getDefaultFromTheme(theme: ThemeName): DesignState {
    const presetId = configThemeToPreset[theme] ?? "luxury-boutique";
    return this.applyPreset(presetId);
  }

  static getDefaultFromConfig(): DesignState {
    return this.getDefaultFromTheme(hotelConfig.theme);
  }

  static applyPreset(
    presetId: ThemePresetId,
    current?: DesignState,
    keepCustomizations = false
  ): DesignState {
    const preset = themePresets[presetId];

    if (keepCustomizations && current) {
      return {
        presetId,
        customization: {
          ...current.customization,
          typography: current.customization.typography ?? preset.defaultCustomization.typography,
        },
      };
    }

    return {
      presetId,
      customization: structuredClone(preset.defaultCustomization),
    };
  }

  static mergeCustomization(
    base: CustomizationState,
    patch: Partial<CustomizationState>
  ): CustomizationState {
    return {
      ...base,
      ...patch,
      sections: patch.sections
        ? { ...base.sections, ...patch.sections }
        : base.sections,
    };
  }
}
