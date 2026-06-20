"use client";

import { useEffect } from "react";
import { hotelConfig } from "@/hotel.config";
import { ThemePresetManager } from "@/lib/design/ThemePresetManager";
import type { HotelSiteConfig } from "@/lib/hotel-types";

type PreviewThemeSyncProps = {
  config: HotelSiteConfig;
};

/** Applies per-preview theme attributes on <html> (root layout defaults to demo config). */
export function PreviewThemeSync({ config }: PreviewThemeSyncProps) {
  useEffect(() => {
    const html = document.documentElement;
    const previous = {
      theme: html.dataset.theme ?? hotelConfig.theme,
      navStyle: html.dataset.navStyle ?? "",
      previewMode: html.dataset.previewMode ?? hotelConfig.previewMode,
    };

    const navStyle =
      config.navigationStyle ??
      ThemePresetManager.getDefaultFromTheme(config.theme).customization.navigationStyle;

    html.dataset.theme = config.theme;
    html.dataset.navStyle = navStyle;
    html.dataset.previewMode = "client";

    return () => {
      html.dataset.theme = previous.theme;
      html.dataset.navStyle = previous.navStyle;
      html.dataset.previewMode = previous.previewMode;
    };
  }, [config]);

  return null;
}
