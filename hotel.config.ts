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
  name: "WoodSpring Suites Orlando East UCF",
  legalName: "WoodSpring Suites Orlando East UCF",

  location: {
    /** Shown in the hero eyebrow, e.g. "Orlando East · Near UCF" */
    display: "Orlando East · Near UCF",
    street: "1675 Bonneville Dr.",
    city: "Orlando",
    state: "FL",
    zip: "32826",
    /** Used in the attractions section eyebrow */
    region: "Orlando",
  },

  contact: {
    phone: "(321) 200-1033",
    phoneTel: "+13212001033",
    email: "reservations@woodspring.com",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    instagram: "https://www.instagram.com/woodspringhotels",
  },

  seo: {
    description:
      "Extended stay hotel in Orlando, FL — 6 miles from UCF with full in-room kitchens, free WiFi, free parking, and weekly or monthly rates that drop the longer you stay. Smoke-free, pet-friendly, and ranked #1 in guest satisfaction among economy extended stay brands by J.D. Power.",
  },

  // ── Images ──────────────────────────────────────────────────────
  images: {
    hero: {
      src: "1566073771259-6a8506099945",
      alt: "WoodSpring Suites Orlando East UCF extended stay hotel exterior",
    },
    bookingCta: {
      src: "1571896349842-33c89424de2d",
      alt: "Modern extended stay suite with in-room kitchen",
    },
  },

  // ── Hero ────────────────────────────────────────────────────────
  hero: {
    headline: ["Built for Longer Stays,", "Ready From Night One"],
    description:
      "Spacious suites with full in-room kitchens, steps from UCF and less than 45 minutes from Disney World and SeaWorld. Nightly, weekly, and monthly rates — with the best value the longer you stay.",
  },

  // ── Room Types ──────────────────────────────────────────────────
  rooms: [
    {
      id: "studio",
      name: "Studio Suite with Full Kitchen",
      description:
        "Your home base in Orlando — free WiFi, free parking, and a complete in-room kitchen with microwave, two-burner cooktop, full-size refrigerator and freezer, and prep sink. Bi-weekly housekeeping included; additional cleaning available on request.",
      price: "Weekly Rates Available",
      image: {
        src: "1631049307264-da0ec9d70304",
        alt: "Spacious studio suite with sleeping and living area",
      },
    },
    {
      id: "accessible",
      name: "Accessible Studio Suite",
      description:
        "Fully accessible studio with in-room kitchen, braille-coded exits, accessible registration desk, ramps, visual alarms, and a clear route from the public entrance to your room. Every comfort of our standard suite, designed without compromise.",
      price: "Weekly Rates Available",
      image: {
        src: "1590490360182-c33d57733427",
        alt: "Accessible extended stay suite with open layout",
      },
    },
    {
      id: "pet-friendly",
      name: "Pet-Friendly Studio Suite",
      description:
        "Bring your dog — up to two per room, 50 lbs max. Same full kitchen and suite layout as our standard studio. Pet fee of $15 per pet per night; $50 non-refundable deposit per stay. Dogs only — no cats.",
      price: "Weekly Rates Available",
      image: {
        src: "1583337130417-3346a1be7dee",
        alt: "Comfortable suite welcoming guests traveling with dogs",
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
      name: "University of Central Florida",
      description:
        "Just 6 miles away — ideal for campus visits, orientation weekends, move-in weeks, and semester-long stays. Easy access via US-408 and US-50.",
      distance: "6 miles",
      image: {
        src: "1562774053-701939374585",
        alt: "University campus grounds near Orlando",
      },
    },
    {
      name: "Walt Disney World",
      description:
        "29 miles to the magic — close enough for day trips and family visits, with the comfort of a full kitchen and quiet suite waiting when you return.",
      distance: "29 miles",
      image: {
        src: "1464366400600-7168b8af9bc3",
        alt: "Orlando area theme park skyline at dusk",
      },
    },
    {
      name: "SeaWorld Orlando",
      description:
        "17 miles from your suite door. Spend the day at the park, then come back to space, privacy, and a kitchen that works around your family's schedule.",
      distance: "17 miles",
      image: {
        src: "1582719508461-905c673771fd",
        alt: "Marine life and aquatic park experience in Orlando",
      },
    },
    {
      name: "Orlando International Airport",
      description:
        "11.8 miles — a straightforward drive for arrivals and departures. Also convenient to Central Florida Regional (16.2 mi) and Daytona Beach Intl (38.5 mi).",
      distance: "11.8 miles",
      image: {
        src: "1436491865332-7a61a109cc05",
        alt: "Airport terminal and travel connections",
      },
    },
  ],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "We booked a month while our daughter started at UCF. The kitchen saved us a fortune, parking was free, and having laundry on-site meant we packed half of what we planned. Exactly what extended-stay should be.",
      author: "Patricia & Robert G.",
      role: "UCF Family Stay · Fall 2025",
    },
    {
      quote:
        "Between shifts at the hospital, I needed something simple, clean, and quiet with a real kitchen — not a cramped room with a mini-fridge. Weekly rates beat anything I found on the booking apps.",
      author: "Danielle M.",
      role: "Travel Healthcare Professional",
    },
    {
      quote:
        "Three-week contract, two dogs, no lease to sign. The pet policy was clear upfront, the suite was bigger than expected, and I could actually cook after long days on site. Already rebooked for my next project.",
      author: "Marcus T.",
      role: "Contractor · Returning Guest",
    },
  ],

  // ── Section Copy (optional overrides) ───────────────────────────
  sections: {
    rooms: {
      eyebrow: "Suites",
      title: "Room Types",
      description:
        "Every suite is designed for real life on the road — more space, a full kitchen, and rates that reward longer stays. No lease required. No hidden booking fees. Just book and move in.",
    },
    amenities: {
      eyebrow: "Everything You Need",
      title: "Hotel Amenities",
      description:
        "We stripped away the fluff and kept what extended-stay guests actually use — kitchens, laundry, parking, WiFi, and a fitness center. Ranked #1 in guest satisfaction among economy extended stay brands by J.D. Power.",
    },
    attractions: {
      eyebrow: "Orlando",
      title: "Nearby Attractions",
      description:
        "Centrally located near US-408 and US-50, with UCF, theme parks, and three major airports all within easy reach. Stay for work, school, or adventure — your suite is the constant.",
    },
    booking: {
      eyebrow: "Stay Longer, Save More",
      title: "Book Your Suite at {name}",
      description:
        "Nightly, weekly, and monthly rates available — the longer you stay, the lower your rate. Book direct for the best price, no booking fees, and no lease required.",
      formDescription:
        "Send your dates and we will confirm availability promptly. For the fastest answer, call our front desk at (321) 200-1033. Office hours available on request. Please note: this property does not accept cash payment.",
    },
  },
} as const;

export type HotelConfig = typeof hotelConfig;

/** Replaces `{name}` placeholders in config strings with the hotel name. */
export function formatConfigText(text: string, name = hotelConfig.name): string {
  return text.replace(/\{name\}/g, name);
}
