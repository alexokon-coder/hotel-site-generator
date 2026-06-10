/** Show demo toolbar only in local/preview — never on Vercel production or in print. */
export function isDemoToolbarEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_DEMO_TOOLBAR === "true") {
    return process.env.VERCEL_ENV !== "production";
  }

  if (process.env.NODE_ENV === "production") {
    return false;
  }

  if (process.env.VERCEL_ENV === "production") {
    return false;
  }

  return true;
}

export const DESIGN_STORAGE_KEY = "hotel-demo-design-v1";
