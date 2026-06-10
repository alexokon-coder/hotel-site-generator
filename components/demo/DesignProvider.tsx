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
import { hotelConfig } from "@/hotel.config";
import { applyDesignToDocument, clearDemoDesignFromDocument } from "@/lib/design/apply-design";
import { DESIGN_STORAGE_KEY, isDemoToolbarEnabled } from "@/lib/design/demo-env";
import { ThemePresetManager } from "@/lib/design/ThemePresetManager";
import type {
  CustomizationState,
  DesignState,
  ThemePresetId,
} from "@/lib/design/types";

type DesignContextValue = {
  state: DesignState;
  applyPreset: (presetId: ThemePresetId, keepCustomizations?: boolean) => void;
  updateCustomization: (patch: Partial<CustomizationState>) => void;
  resetToConfigDefault: () => void;
};

const DesignContext = createContext<DesignContextValue | null>(null);

/** Production site matches original sections (no demo-only gallery/faq/map/about). */
export const PRODUCTION_SECTIONS: CustomizationState["sections"] = {
  reviews: true,
  attractions: true,
  amenities: true,
  gallery: false,
  faq: false,
  map: false,
  about: false,
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

const demoEnabled = isDemoToolbarEnabled();

export function DesignProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DesignState>(() => {
    if (!demoEnabled) {
      return ThemePresetManager.getDefaultFromConfig();
    }
    return loadStoredState() ?? ThemePresetManager.getDefaultFromConfig();
  });

  useEffect(() => {
    if (!demoEnabled) {
      clearDemoDesignFromDocument(hotelConfig.theme);
      return;
    }
    applyDesignToDocument(state);
    try {
      localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  }, [state]);

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
    if (!demoEnabled) return;
    const defaultState = ThemePresetManager.getDefaultFromConfig();
    setState(defaultState);
    localStorage.removeItem(DESIGN_STORAGE_KEY);
    applyDesignToDocument(defaultState);
  }, []);

  const value = useMemo(
    () => ({
      state,
      applyPreset,
      updateCustomization,
      resetToConfigDefault,
    }),
    [state, applyPreset, updateCustomization, resetToConfigDefault]
  );

  return (
    <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
  );
}

export function useDesign() {
  const ctx = useContext(DesignContext);
  const defaultState = ThemePresetManager.getDefaultFromConfig();

  if (!ctx || !demoEnabled) {
    return {
      state: defaultState,
      customization: {
        ...defaultState.customization,
        sections: PRODUCTION_SECTIONS,
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
