"use client";

import { createContext, useContext, type ReactNode } from "react";
import { hotelConfig } from "@/hotel.config";
import type { HotelSiteConfig } from "@/lib/hotel-types";

type HotelSiteContextValue = {
  config: HotelSiteConfig;
  isDemo: boolean;
};

const HotelSiteContext = createContext<HotelSiteContextValue | null>(null);

type HotelSiteProviderProps = {
  config?: HotelSiteConfig;
  children: ReactNode;
};

export function HotelSiteProvider({
  config = hotelConfig,
  children,
}: HotelSiteProviderProps) {
  const value: HotelSiteContextValue = {
    config,
    isDemo: config.previewMode === "demo",
  };

  return (
    <HotelSiteContext.Provider value={value}>{children}</HotelSiteContext.Provider>
  );
}

export function useHotelSiteConfig(): HotelSiteContextValue {
  const ctx = useContext(HotelSiteContext);
  if (!ctx) {
    return {
      config: hotelConfig,
      isDemo: hotelConfig.previewMode === "demo",
    };
  }
  return ctx;
}
