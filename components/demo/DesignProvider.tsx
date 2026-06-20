"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { hotelConfig, type PreviewMode } from "@/hotel.config";
import { applyDesignToDocument, clearDemoDesignFromDocument } from "@/lib/design/apply-design";
import { DESIGN_STORAGE_KEY } from "@/lib/design/demo-env";
import { ThemePresetManager } from "@/lib/design/ThemePresetManager";
import type { ThemeName } from "@/lib/themes";
import type {
  CustomizationState,
  DesignState,
  ThemePresetId,
} from "@/lib/design/types";

type DesignContextValue = {
  state: DesignState;
  customizationEnabled: boolean;
  applyPreset: (presetId: ThemePresetId, keepCustomizations?: boolean) => void;
  updateCustomization: (patch: Partial<CustomizationState>) => void;
  resetToConfigDefault: () => void;
};

const DesignContext = createContext<DesignContextValue | null>(null);

/** Shown when customization is disabled (client preview / production). */
export const CLIENT_SECTIONS: CustomizationState["sections"] = {
  reviews: true,
  attractions: true,
  amenities: true,
  gallery: true,
  faq: true,
  map: true,
  about: true,
};

type DesignProviderProps = {
  children: ReactNode;
  previewMode?: PreviewMode;
  theme?: ThemeName;
};

function loadStoredState(): DesignState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DESIGN_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DesignState;
  } catch {
    return null;
  }
}

export function DesignProvider({
  children,
  previewMode = hotelConfig.previewMode,
  theme = hotelConfig.theme,
}: DesignProviderProps) {
  const customizationEnabled = previewMode === "demo";

  /** Always match SSR — load localStorage only after mount to avoid hydration mismatch. */
  const [state, setState] = useState<DesignState>(() =>
    ThemePresetManager.getDefaultFromTheme(theme)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!customizationEnabled) {
      clearDemoDesignFromDocument(theme);
      try {
        localStorage.removeItem(DESIGN_STORAGE_KEY);
      } catch {
        /* ignore */
      }
      const defaultState = ThemePresetManager.getDefaultFromTheme(theme);
      setState(defaultState);
      applyDesignToDocument(defaultState);
      setMounted(true);
      return;
    }

    const stored = loadStoredState();
    if (stored) {
      const preset = ThemePresetManager.getPreset(stored.presetId);
      const normalized: DesignState = {
        presetId: stored.presetId,
        customization: {
          ...preset.defaultCustomization,
          ...stored.customization,
          sections: {
            ...preset.defaultCustomization.sections,
            ...stored.customization.sections,
          },
        },
      };
      setState(normalized);
      applyDesignToDocument(normalized);
    } else {
      const defaultState = ThemePresetManager.getDefaultFromTheme(theme);
      setState(defaultState);
      applyDesignToDocument(defaultState);
    }
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, [customizationEnabled, theme]);

  useEffect(() => {
    if (!mounted || !customizationEnabled) return;
    applyDesignToDocument(state);
    try {
      localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  }, [state, mounted, customizationEnabled]);

  const applyPreset = useCallback(
    (presetId: ThemePresetId, keepCustomizations = false) => {
      setState((current) =>
        ThemePresetManager.applyPreset(presetId, current, keepCustomizations)
      );
    },
    []
  );

  const updateCustomization = useCallback((patch: Partial<CustomizationState>) => {
    setState((current) => ({
      ...current,
      customization: ThemePresetManager.mergeCustomization(
        current.customization,
        patch
      ),
    }));
  }, []);

  const resetToConfigDefault = useCallback(() => {
    if (!customizationEnabled) return;
    const defaultState = ThemePresetManager.getDefaultFromTheme(theme);
    setState(defaultState);
    localStorage.removeItem(DESIGN_STORAGE_KEY);
    applyDesignToDocument(defaultState);
  }, [customizationEnabled, theme]);

  const value = useMemo(
    () => ({
      state,
      customizationEnabled,
      applyPreset,
      updateCustomization,
      resetToConfigDefault,
    }),
    [state, customizationEnabled, applyPreset, updateCustomization, resetToConfigDefault]
  );

  return (
    <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
  );
}

export function useDesign() {
  const ctx = useContext(DesignContext);
  const defaultState = ThemePresetManager.getDefaultFromConfig();

  if (!ctx || !ctx.customizationEnabled) {
    return {
      state: ctx?.state ?? defaultState,
      customization: {
        ...(ctx?.state.customization ?? defaultState.customization),
        sections: CLIENT_SECTIONS,
      },
      applyPreset: () => undefined,
      updateCustomization: () => undefined,
      resetToConfigDefault: () => undefined,
    };
  }
  return { ...ctx, customization: ctx.state.customization };
}

export function useDesignConfigDefault() {
  return hotelConfig.theme;
}
