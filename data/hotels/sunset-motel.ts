import type { HotelSiteConfig } from "@/lib/hotel-types";

export const sunsetMotelConfig: HotelSiteConfig = {
  previewMode: "client",
  theme: "coastal",
  navigationStyle: "classic-horizontal",
  name: "Sunset Motel",
  legalName: "Sunset Motel Inc.",
  location: {
    display: "Santa Cruz · Beachfront",
    street: "1100 Ocean Street",
    city: "Santa Cruz",
    state: "CA",
    zip: "95060",
    region: "Monterey Bay",
  },
  contact: {
    phone: "(831) 555-0198",
    phoneTel: "+18315550198",
    email: "hello@sunsetmotel.com",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    instagram: "#",
  },
  seo: {
    description:
      "Sunset Motel offers clean, comfortable rooms steps from the boardwalk — surf, sun, and classic California coast vibes without the resort price tag.",
  },
  images: {
    hero: {
      src: "1507525428034-b723cf961d3e",
      alt: "Sunset over the Pacific near Sunset Motel",
    },
    bookingCta: {
      src: "1520250497594-10383ebf18a5",
      alt: "Bright coastal guest room at Sunset Motel",
    },
  },
  hero: {
    headline: ["Beach Days,", "Easy Nights"],
    description:
      "Park, unpack, and walk to the sand. Sunset Motel is the no-fuss home base surfers, families, and road-trippers count on year after year.",
  },
  rooms: [
    {
      id: "standard-queen",
      name: "Standard Queen",
      description:
        "Clean and bright with a queen bed, mini-fridge, and courtyard or street view — everything you need after a day at the beach.",
      price: "From $129 / night",
      image: {
        src: "1611892440504-42a9e70d7b85",
        alt: "Standard Queen room",
      },
    },
    {
      id: "ocean-view",
      name: "Ocean View King",
      description:
        "King bed, partial ocean view, and a small patio table — our most requested room for sunset watchers.",
      price: "From $169 / night",
      image: {
        src: "1590490360182-c33d57733427",
        alt: "Ocean View King room",
      },
    },
    {
      id: "family-double",
      name: "Family Double",
      description:
        "Two queen beds, extra floor space, and easy access to parking — built for families and friend groups.",
      price: "From $189 / night",
      image: {
        src: "1566073771259-6a8506099945",
        alt: "Family Double room",
      },
    },
  ],
  amenities: [
    {
      icon: "✦",
      title: "Steps to the Beach",
      description: "Boardwalk and main beach access within a five-minute walk of the property.",
    },
    {
      icon: "◈",
      title: "Free Parking",
      description: "Complimentary on-site parking for every guest — no meters, no hassle.",
    },
    {
      icon: "◇",
      title: "Heated Pool",
      description: "Seasonal heated outdoor pool and sundeck — towels provided at the front desk.",
    },
    {
      icon: "◎",
      title: "Surfboard Racks",
      description: "Secure outdoor racks for boards and bikes so your gear stays safe overnight.",
    },
    {
      icon: "❖",
      title: "In-Room Mini Fridge",
      description: "Every room includes a mini-fridge and microwave for snacks and leftovers.",
    },
    {
      icon: "✧",
      title: "Pet Friendly",
      description: "Dogs welcome in select ground-floor rooms — fees apply, advance notice required.",
    },
  ],
  attractions: [
    {
      name: "Santa Cruz Beach Boardwalk",
      description: "Classic amusement park, arcade, and beach access — a California landmark since 1907.",
      distance: "0.4 miles",
      image: {
        src: "1464366400600-7168b8af9bc3",
        alt: "Santa Cruz Boardwalk",
      },
    },
    {
      name: "Natural Bridges State Beach",
      description: "Tide pools, monarch butterflies in season, and dramatic rock formations at sunset.",
      distance: "2.5 miles",
      image: {
        src: "1507525428034-b723cf961d3e",
        alt: "Natural Bridges beach",
      },
    },
    {
      name: "West Cliff Drive",
      description: "Scenic coastal path for walking, biking, and watching surfers at Steamer Lane.",
      distance: "1.1 miles",
      image: {
        src: "1436491865332-7a61a109cc05",
        alt: "West Cliff Drive coastline",
      },
    },
  ],
  testimonials: [
    {
      quote:
        "Exactly what we wanted — affordable, clean, and close to everything. Kids loved the pool and we loved the short walk to the beach.",
      author: "Jenny L.",
      role: "Family stay, July 2025",
    },
    {
      quote:
        "Been coming here for surf weekends for years. Reliable rooms, friendly staff, and the board racks are a nice touch.",
      author: "Marcus T.",
      role: "Repeat guest",
    },
    {
      quote:
        "Ocean view room was worth every penny. Woke up to sea breeze and walked to coffee on the pier.",
      author: "Priya S.",
      role: "Stayed May 2025",
    },
  ],
  faq: [
    {
      question: "How far is the beach?",
      answer: "The main beach and boardwalk are about a five-minute walk from the motel.",
    },
    {
      question: "Is the pool open year-round?",
      answer:
        "The pool is heated and open seasonally, typically March through October, weather permitting.",
    },
    {
      question: "Do you allow pets?",
      answer:
        "Yes, in select ground-floor rooms. Please call ahead — a nightly pet fee applies.",
    },
  ],
  sections: {
    rooms: {
      eyebrow: "Stay With Us",
      title: "Room Options",
      description:
        "Straightforward, comfortable rooms designed for beach days — book the layout that fits your trip.",
    },
    amenities: {
      eyebrow: "Property",
      title: "Motel Amenities",
      description:
        "Parking, pool, and beach access — the essentials done right so you can focus on the coast.",
    },
    attractions: {
      eyebrow: "Santa Cruz",
      title: "Nearby Highlights",
      description:
        "Boardwalk thrills, cliffside walks, and tide pools — classic Central Coast experiences minutes away.",
    },
    booking: {
      eyebrow: "Book Direct",
      title: "Reserve at {name}",
      description:
        "Book direct for the best rate and flexible arrival times when plans change.",
      formDescription:
        "Send your travel dates and we will confirm availability — no third-party fees when you book with us.",
    },
  },
};
