import { hotelConfig, type PreviewMode } from "@/hotel.config";

export type { PreviewMode };

/** Always reads live config — do not cache at module scope. */
export function getPreviewMode(): PreviewMode {
  return hotelConfig.previewMode === "client" ? "client" : "demo";
}

export function isDemoPreviewMode(): boolean {
  return hotelConfig.previewMode === "demo";
}

export function isClientPreviewMode(): boolean {
  return hotelConfig.previewMode === "client";
}
