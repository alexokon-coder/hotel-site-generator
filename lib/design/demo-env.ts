import { hotelConfig } from "@/hotel.config";

/**
 * Demo toolbar visibility.
 * Print/PDF: hidden via CSS (@media print) — not controlled here.
 *
 * Shown on:
 *  - Local development
 *  - Vercel preview & development deployments
 *  - hotel-site-generator.vercel.app (live demo testing)
 *
 * Hidden on other production deployments unless NEXT_PUBLIC_DEMO_TOOLBAR=true.
 */

const DEMO_PRODUCTION_HOST = "hotel-site-generator.vercel.app";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"]);

function normalizeHost(value: string): string {
  return value.replace(/^https?:\/\//, "").split("/")[0]?.split(":")[0] ?? "";
}

function isLocalHost(hostname: string): boolean {
  return LOCAL_HOSTS.has(normalizeHost(hostname));
}

function isDemoProductionHost(hostname: string): boolean {
  const host = normalizeHost(hostname);
  return host === DEMO_PRODUCTION_HOST;
}

function isVercelPreviewOrDev(): boolean {
  const env = process.env.VERCEL_ENV;
  return env === "preview" || env === "development";
}

function isDemoVercelProjectDeployment(): boolean {
  const deploymentHost = normalizeHost(
    process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL ?? ""
  );
  return deploymentHost === DEMO_PRODUCTION_HOST;
}

export function isDemoToolbarEnabled(): boolean {
  if (hotelConfig.previewMode !== "demo") {
    return false;
  }

  if (process.env.NEXT_PUBLIC_DEMO_TOOLBAR === "false") {
    return false;
  }

  if (process.env.NEXT_PUBLIC_DEMO_TOOLBAR === "true") {
    return true;
  }

  if (isVercelPreviewOrDev()) {
    return true;
  }

  if (isDemoVercelProjectDeployment()) {
    return true;
  }

  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (isLocalHost(hostname) || isDemoProductionHost(hostname)) {
      return true;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  return false;
}

export const DESIGN_STORAGE_KEY = "hotel-demo-design-v1";
