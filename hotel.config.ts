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
  // ── Identity ──────────────────────────────────────────────────
  name: "Magnolia House",
  legalName: "Magnolia House Key West",

  location: {
    /** Shown in the hero eyebrow, e.g. "Old Town Key West · Florida" */
    display: "Old Town Key West · Florida",
    street: "512 Fleming Street",
    city: "Key West",
    state: "FL",
    zip: "33040",
    /** Used in the attractions section eyebrow */
    region: "Key West",
  },

  contact: {
    phone: "(305) 294-8800",
    phoneTel: "+13052948800",
    email: "stay@magnoliahousekw.com",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    instagram: "https://instagram.com",
  },

  seo: {
    description:
      "A restored 1890s conch captain's residence in Old Town Key West. Twelve intimate rooms, a magnolia-shaded courtyard, and the quiet luxury of island life.",
  },

  // ── Images ──────────────────────────────────────────────────────
  images: {
    hero: {
      src: "1566073771259-6a8506099945",
      alt: "Magnolia House boutique hotel courtyard and pool at golden hour",
    },
    bookingCta: {
      src: "1571896349842-33c89424de2d",
      alt: "Tropical pool and palm trees at sunset",
    },
  },

  // ── Hero ────────────────────────────────────────────────────────
  hero: {
    headline: ["Island Grace,", "Quietly Refined"],
    description:
      "Twelve rooms in a restored 1890s conch captain's residence — shaded by magnolias, steps from the Gulf, and far from the ordinary.",
  },

  // ── Room Types ──────────────────────────────────────────────────
  rooms: [
    {
      id: "garden",
      name: "Garden Room",
      description:
        "Ground-floor serenity with French doors opening onto our magnolia courtyard. Queen bed, rainfall shower, and hand-painted Bahamian tiles.",
      price: "From $385",
      image: {
        src: "1631049307264-da0ec9d70304",
        alt: "Garden Room with courtyard view",
      },
    },
    {
      id: "veranda",
      name: "Veranda Suite",
      description:
        "A wraparound private veranda for morning coffee and evening trade winds. King bed, soaking tub, and partial Gulf views through the palms.",
      price: "From $495",
      image: {
        src: "1582719478250-c89cae4dc85b",
        alt: "Veranda Suite with outdoor seating",
      },
    },
    {
      id: "captain",
      name: "Captain's Quarter",
      description:
        "Our signature top-floor retreat with vaulted Dade County pine ceilings, a four-poster king, and a clawfoot tub beneath a skylight.",
      price: "From $625",
      image: {
        src: "1590490360182-c33d57733427",
        alt: "Captain's Quarter suite interior",
      },
    },
  ],

  // ── Amenities ───────────────────────────────────────────────────
  amenities: [
    {
      icon: "✦",
      title: "Courtyard Breakfast",
      description:
        "Each morning, a chef-prepared spread of tropical fruit, house pastries, and made-to-order eggs served beneath the magnolias.",
    },
    {
      icon: "◈",
      title: "Heated Plunge Pool",
      description:
        "A secluded saltwater plunge pool surrounded by orchids and jasmine — reserved exclusively for guests, never crowded.",
    },
    {
      icon: "◇",
      title: "Island Concierge",
      description:
        "Snorkeling at the reef, sunset sails, fishing charters, and hard-to-get dinner reservations — handled before you ask.",
    },
    {
      icon: "◎",
      title: "Sundowner Bar",
      description:
        "Complimentary evening cocktails featuring local rum, fresh key lime, and herbs clipped from our garden each afternoon.",
    },
    {
      icon: "❖",
      title: "Complimentary Bicycles",
      description:
        "Classic cruisers for every guest. Old Town Key West is best explored at a leisurely pace, two wheels at a time.",
    },
    {
      icon: "✧",
      title: "Afternoon Turn-Down",
      description:
        "Fresh towels, chilled water, and a small confection — often key lime truffles from a neighbor's kitchen on Simonton Street.",
    },
  ],

  // ── Local Attractions ─────────────────────────────────────────────
  attractions: [
    {
      name: "Duval Street",
      description:
        "Five minutes by foot. Galleries, live music, and the rhythm of Key West nightlife — close enough to enjoy, quiet enough to escape.",
      distance: "0.3 miles",
      image: {
        src: "1555881400-74d7acaacd8b",
        alt: "Colorful Key West storefronts on Duval Street",
      },
    },
    {
      name: "Mallory Square Sunset",
      description:
        "The legendary nightly celebration at the harbor. Our concierge saves you a spot and packs a chilled bottle for the pier.",
      distance: "0.6 miles",
      image: {
        src: "1473496160127-878880127eed",
        alt: "Sunset over Key West harbor at Mallory Square",
      },
    },
    {
      name: "Fort Zachary Taylor",
      description:
        "The island's best swimming beach and a Civil War-era fort wrapped in turquoise water. Snorkel gear available at the front desk.",
      distance: "1.2 miles",
      image: {
        src: "1507525428034-b723cf961d3e",
        alt: "Turquoise water at Fort Zachary Taylor beach",
      },
    },
    {
      name: "Dry Tortugas Day Trip",
      description:
        "A full-day catamaran to Fort Jefferson — seventy miles of open water, world-class snorkeling, and stories you'll tell for years.",
      distance: "Seaport ferry",
      image: {
        src: "1544551763-77a4157c2e8d",
        alt: "Snorkeling in clear Caribbean waters",
      },
    },
  ],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "We've stayed at properties across the Caribbean, and Magnolia House is something rarer — genuinely intimate, impossibly charming, and run by people who remember your name by the second morning.",
      author: "Rachel & David Chen",
      role: "Anniversary Stay, March 2025",
    },
    {
      quote:
        "The Captain's Quarter felt like sleeping inside a storybook. Waking up to courtyard light through plantation shutters, then key lime pancakes on the veranda — perfection.",
      author: "Margaret Holloway",
      role: "Solo Traveler, Condé Nast Traveler Reader",
    },
    {
      quote:
        "Our kids still talk about the bicycles and the pool. We still talk about the staff, the room, and the fact that we didn't need a car for four days. Already booked for Christmas.",
      author: "The Whitmore Family",
      role: "Returning Guests, Tampa FL",
    },
  ],

  // ── Section Copy (optional overrides) ───────────────────────────
  sections: {
    rooms: {
      eyebrow: "Accommodations",
      title: "Rooms & Suites",
      description:
        "No two rooms are alike. Each is appointed with antique furnishings, crisp Italian linens, and the kind of details you notice only when everything is exactly right.",
    },
    amenities: {
      eyebrow: "Guest Privileges",
      title: "Thoughtful Amenities",
      description:
        "Luxury here is not loud. It is the bicycle waiting by the gate, the cocktail that appears at five, and a staff that knows the best table at the fish shack on Roosevelt Boulevard.",
    },
    attractions: {
      eyebrow: "Key West",
      title: "Local Attractions",
      description:
        "Everything that makes Key West unforgettable is within reach. We will help you discover it — or simply hand you a beach towel and point you toward the pool.",
    },
    booking: {
      eyebrow: "Your Key West Escape Awaits",
      title: "Reserve Your Room at {name}",
      description:
        "Twelve rooms. One island. Direct bookings include complimentary breakfast, evening cocktails, and our best available rate — always.",
      formDescription:
        "Submit your dates and we will confirm availability within the hour. Prefer to speak with someone? Our front desk is here seven days a week, from 7 AM to 10 PM.",
    },
  },
} as const;

export type HotelConfig = typeof hotelConfig;

/** Replaces `{name}` placeholders in config strings with the hotel name. */
export function formatConfigText(text: string, name = hotelConfig.name): string {
  return text.replace(/\{name\}/g, name);
}
