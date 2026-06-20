import { HotelSite } from "@/components/HotelSite";
import { hotelConfig } from "@/hotel.config";
import { HotelSiteProvider } from "@/lib/hotel-context";

export default function Home() {
  return (
    <HotelSiteProvider config={hotelConfig}>
      <HotelSite />
    </HotelSiteProvider>
  );
}
