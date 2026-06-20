import type { ThemeName } from "@/lib/themes";

export type PreviewMode = "demo" | "client";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  HOTEL CONFIG — Edit this file to customize the entire website.
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Images accept three formats:
 *    • Unsplash photo ID  →  "1566073771259-6a8506099945"
 *    • Local file         →  "/images/hero.jpg"  (place file in public/)
 *    • Full URL           →  "https://example.com/photo.jpg"
 */

export const hotelConfig = {
  // ── Theme ─────────────────────────────────────────────────────
  /** Options: "luxury" | "coastal" | "rustic" | "modern" — save file to apply (hot-reloads in dev) */
  theme: "luxury" as ThemeName,

  /** "demo" = toolbar + demo labels | "client" = polished preview, no demo chrome */
  previewMode: "demo" as PreviewMode,

  // ── Identity ──────────────────────────────────────────────────
  name: "YOUR HOTEL NAME",
  legalName: "YOUR HOTEL NAME",

  location: {
    /** Shown in the hero eyebrow, e.g. "Your City · Your Region" */
    display: "Your Property Location",
    street: "Your Property Address",
    city: "Your City",
    state: "ST",
    zip: "00000",
    /** Used in the attractions section eyebrow */
    region: "Your Region",
  },

  contact: {
    phone: "Your Phone Number",
    phoneTel: "+15555550100",
    email: "your@email.com",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    instagram: "#",
  },

  seo: {
    description:
      "A customizable hotel website demonstration — showcase your property with premium design, integrated reviews, maps, room types, and a modern booking experience ready for your PMS.",
  },

  // ── Images ──────────────────────────────────────────────────────
  images: {
    hero: {
      src: "1566073771259-6a8506099945",
      alt: "Boutique hotel exterior — demonstration imagery",
    },
    bookingCta: {
      src: "1571896349842-33c89424de2d",
      alt: "Elegant guest suite — demonstration imagery",
    },
  },

  // ── Hero ────────────────────────────────────────────────────────
  hero: {
    headline: ["A Modern Hotel Experience,", "Designed Around Your Brand"],
    description:
      "This demonstration shows how an independent hotel, motel, or bed & breakfast can present rooms, amenities, location, reviews, and booking in a polished, trustworthy way — fully customizable for your property.",
  },

  // ── Room Types ──────────────────────────────────────────────────
  rooms: [
    {
      id: "standard",
      name: "Standard Room",
      description:
        "A comfortable, well-appointed room with premium bedding, thoughtful amenities, and a layout designed for restful stays. Ideal for solo travelers and short visits.",
      price: "From $149 / night",
      image: {
        src: "1631049307264-da0ec9d70304",
        alt: "Standard hotel room with queen bed and sitting area",
      },
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description:
        "Extra space and upgraded finishes — sitting area, enhanced bath amenities, and views that make every stay feel special. Perfect for couples and business travelers.",
      price: "From $189 / night",
      image: {
        src: "1590490360182-c33d57733427",
        alt: "Deluxe hotel room with upgraded furnishings",
      },
    },
    {
      id: "premium-suite",
      name: "Premium Suite",
      description:
        "Separate living and sleeping areas, premium linens, and refined details throughout. Designed for guests who expect more room, more comfort, and a more memorable stay.",
      price: "From $249 / night",
      image: {
        src: "1583337130417-3346a1be7dee",
        alt: "Premium suite with separate living area",
      },
    },
    {
      id: "family-suite",
      name: "Family Suite",
      description:
        "Spacious accommodations for families and small groups — flexible sleeping arrangements, generous square footage, and amenities that make everyone comfortable.",
      price: "From $279 / night",
      image: {
        src: "1566073771259-6a8506099945",
        alt: "Family suite with ample space for guests",
      },
    },
  ],

  // ── Amenities ───────────────────────────────────────────────────
  amenities: [
    {
      icon: "✦",
      title: "Full In-Room Kitchen",
      description:
        "Cook on your schedule with a microwave, two-burner cooktop, full-size refrigerator and freezer, and prep sink — everything you need to eat well without eating out every night.",
    },
    {
      icon: "◈",
      title: "Free WiFi & Parking",
      description:
        "Complimentary high-speed WiFi and free parking for every guest. No surprise fees, no daily parking charges — just pull in and settle in.",
    },
    {
      icon: "◇",
      title: "Guest Laundry",
      description:
        "On-site laundry facilities mean packing light and staying fresh, whether you are here for a week, a month, or longer.",
    },
    {
      icon: "◎",
      title: "Fitness Center",
      description:
        "Keep your routine on track in our on-site fitness center — because an extended stay should not mean putting your goals on hold.",
    },
    {
      icon: "❖",
      title: "Bi-Weekly Housekeeping",
      description:
        "Housekeeping every other week is included. Need it more often? Additional cleaning is available for a small fee — your suite, your schedule.",
    },
    {
      icon: "✧",
      title: "100% Smoke-Free",
      description:
        "A completely smoke-free property with free coffee in the morning, vending machines on-site, and interior corridors for peace of mind.",
    },
  ],

  // ── Local Attractions ─────────────────────────────────────────────
  attractions: [
    {
      name: "Nearby Attraction",
      description:
        "Highlight a landmark, museum, or destination near your property. This section is customized with real local recommendations for each client.",
      distance: "0.5 miles",
      image: {
        src: "1562774053-701939374585",
        alt: "Local attraction — demonstration placeholder",
      },
    },
    {
      name: "Downtown District",
      description:
        "Showcase shopping, dining, and nightlife in your area. Help guests discover the best of your destination before they arrive.",
      distance: "1.2 miles",
      image: {
        src: "1464366400600-7168b8af9bc3",
        alt: "Downtown area — demonstration placeholder",
      },
    },
    {
      name: "Natural Landmark",
      description:
        "Parks, beaches, trails, and scenic overlooks — demonstrate how location-based content builds excitement and helps guests plan their stay.",
      distance: "3 miles",
      image: {
        src: "1582719508461-905c673771fd",
        alt: "Natural scenery — demonstration placeholder",
      },
    },
    {
      name: "Local Recommendation",
      description:
        "Curated picks from your team — restaurants, events, and hidden gems that set your property apart and build guest loyalty.",
      distance: "5 miles",
      image: {
        src: "1436491865332-7a61a109cc05",
        alt: "Local destination — demonstration placeholder",
      },
    },
  ],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Absolutely charming from the moment we arrived. The room was spotless, the breakfast was wonderful, and the hosts made us feel genuinely welcome. We will definitely return.",
      author: "Alex Okon",
      role: "Arcadia Bed & Breakfast · Demo Review",
    },
    {
      quote:
        "A hidden gem in Arcadia. Beautifully kept property, comfortable beds, and a peaceful atmosphere. The porch in the evening was the perfect way to unwind after exploring town.",
      author: "Margaret S.",
      role: "Arcadia Bed & Breakfast · Demo Review",
    },
    {
      quote:
        "Exceeded our expectations. Thoughtful details throughout, delicious homemade breakfast, and a location that made it easy to explore the area. Highly recommend for a relaxing getaway.",
      author: "James & Linda P.",
      role: "Arcadia Bed & Breakfast · Demo Review",
    },
  ],

  // ── Section Copy (optional overrides) ───────────────────────────
  sections: {
    rooms: {
      eyebrow: "Accommodations",
      title: "Room Types",
      description:
        "Showcase your room categories with professional photography, clear descriptions, and pricing — customized to match your property and brand.",
    },
    amenities: {
      eyebrow: "Everything You Need",
      title: "Hotel Amenities",
      description:
        "We stripped away the fluff and kept what extended-stay guests actually use — kitchens, laundry, parking, WiFi, and a fitness center. Ranked #1 in guest satisfaction among economy extended stay brands by J.D. Power.",
    },
    attractions: {
      eyebrow: "Your Property Location",
      title: "Nearby Attractions",
      description:
        "Demonstrate how location-based content — nearby attractions, local recommendations, and area highlights — helps guests plan their stay and positions your property as the ideal base.",
    },
    booking: {
      eyebrow: "Reservations",
      title: "Plan Your Stay at {name}",
      description:
        "A welcoming reservation experience designed to help guests plan their stay with confidence — clear, simple, and built for direct bookings.",
      formDescription:
        "Transform your website into a powerful guest acquisition tool with a modern reservation experience built to increase direct booking opportunities.",
    },
  },
} as const;

export type HotelConfig = typeof hotelConfig;

/** Replaces `{name}` placeholders in config strings with the hotel name. */
export function formatConfigText(text: string, name = hotelConfig.name): string {
  return text.replace(/\{name\}/g, name);
}
