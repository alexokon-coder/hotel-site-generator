"use client";

import type { ReactNode } from "react";
import type { HotelSiteConfig } from "@/lib/hotel-types";
import { DesignProvider } from "@/components/demo/DesignProvider";
import { PreviewThemeSync } from "@/components/PreviewThemeSync";

type ClientPreviewFrameProps = {
  config: HotelSiteConfig;
  children: ReactNode;
};

export function ClientPreviewFrame({ config, children }: ClientPreviewFrameProps) {
  return (
    <DesignProvider previewMode="client" theme={config.theme}>
      <PreviewThemeSync config={config} />
      {children}
    </DesignProvider>
  );
}
