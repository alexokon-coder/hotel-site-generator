import type { HotelPreview } from "@/lib/hotel-types";
import { blueHarborLodgeConfig } from "./blue-harbor-lodge";
import { magnoliaInnConfig } from "./magnolia-inn";
import { sunsetMotelConfig } from "./sunset-motel";

const hotelPreviews: Record<string, HotelPreview> = {
  "magnolia-inn": {
    slug: "magnolia-inn",
    config: magnoliaInnConfig,
  },
  "sunset-motel": {
    slug: "sunset-motel",
    config: sunsetMotelConfig,
  },
  "blue-harbor-lodge": {
    slug: "blue-harbor-lodge",
    config: blueHarborLodgeConfig,
  },
};

export const hotelPreviewSlugs = Object.keys(hotelPreviews);

export function getHotelPreview(slug: string): HotelPreview | undefined {
  return hotelPreviews[slug];
}

export function getAllHotelPreviews(): HotelPreview[] {
  return Object.values(hotelPreviews);
}
