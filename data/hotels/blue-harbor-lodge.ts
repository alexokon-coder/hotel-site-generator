import type { HotelSiteConfig } from "@/lib/hotel-types";

export const blueHarborLodgeConfig: HotelSiteConfig = {
  previewMode: "client",
  theme: "rustic",
  navigationStyle: "sidebar",
  name: "Blue Harbor Lodge",
  legalName: "Blue Harbor Lodge LLC",
  location: {
    display: "Bar Harbor · Maine Coast",
    street: "44 West Street",
    city: "Bar Harbor",
    state: "ME",
    zip: "04609",
    region: "Acadia National Park",
  },
  contact: {
    phone: "(207) 555-0167",
    phoneTel: "+12075550167",
    email: "reservations@blueharborlodge.com",
    checkIn: "4:00 PM",
    checkOut: "10:00 AM",
    instagram: "#",
  },
  seo: {
    description:
      "Blue Harbor Lodge sits on the edge of Acadia country — timber-frame comfort, harbor views, and a basecamp feel for hikers, kayakers, and leaf-peepers.",
  },
  images: {
    hero: {
      src: "1445019980597-743e316a2945",
      alt: "Blue Harbor Lodge overlooking a Maine harbor",
    },
    bookingCta: {
      src: "1520250497594-10383ebf18a5",
      alt: "Cozy lodge room with wood accents",
    },
  },
  hero: {
    headline: ["Harbor Breezes,", "Mountain Trails"],
    description:
      "Settle into a lodge built for explorers — crackling common-room fire, hearty mornings, and Acadia National Park at your doorstep.",
  },
  rooms: [
    {
      id: "harbor-standard",
      name: "Harbor Standard",
      description:
        "Cozy queen room with pine furnishings, harbor or garden view, and plush comforters for cool coastal nights.",
      price: "From $159 / night",
      image: {
        src: "1611892440504-42a9e70d7b85",
        alt: "Harbor Standard room",
      },
    },
    {
      id: "loft-king",
      name: "Loft King",
      description:
        "Open-beam loft layout with king bed, reading nook, and skylight — favorite among couples and solo travelers.",
      price: "From $199 / night",
      image: {
        src: "1631049307264-da0ec9d70304",
        alt: "Loft King room",
      },
    },
    {
      id: "family-cabin",
      name: "Family Cabin",
      description:
        "Two-bedroom cabin-style suite with kitchenette, porch chairs, and space for families or small groups.",
      price: "From $279 / night",
      image: {
        src: "1583337130417-3346a1be7dee",
        alt: "Family Cabin suite",
      },
    },
  ],
  amenities: [
    {
      icon: "✦",
      title: "Complimentary Breakfast",
      description:
        "Hot breakfast each morning — local eggs, blueberry pancakes, and fair-trade coffee in the lodge dining room.",
    },
    {
      icon: "◈",
      title: "Gear Storage",
      description:
        "Boot dryers, kayak racks, and a mudroom for hiking packs — built for active guests.",
    },
    {
      icon: "◇",
      title: "Harbor Shuttle",
      description:
        "Seasonal shuttle to the village waterfront and Acadia visitor center — schedules posted at the desk.",
    },
    {
      icon: "◎",
      title: "Common Room Fireplace",
      description:
        "Stone fireplace, board games, and local trail maps — the social heart of the lodge after sunset.",
    },
    {
      icon: "❖",
      title: "Fire Pit & S'mores",
      description: "Nightly fire pit on the lawn when weather allows — s'mores kits at the front desk.",
    },
    {
      icon: "✧",
      title: "Trail Lunch Packs",
      description:
        "Order a packed lunch the night before — ideal for full days in Acadia.",
    },
  ],
  attractions: [
    {
      name: "Acadia National Park",
      description:
        "Cadillac Mountain sunrise, carriage roads, and coastal trails — one of the most visited national parks in America.",
      distance: "3 miles",
      image: {
        src: "1506905925346-21bda4d32df4",
        alt: "Acadia National Park coastline",
      },
    },
    {
      name: "Bar Harbor Village",
      description:
        "Waterfront dining, whale-watching departures, and shops along West Street and the town pier.",
      distance: "0.6 miles",
      image: {
        src: "1464366400600-7168b8af9bc3",
        alt: "Bar Harbor waterfront",
      },
    },
    {
      name: "Jordan Pond",
      description:
        "Iconic pond loop trail and famous popovers at the Jordan Pond House — a classic Acadia half-day trip.",
      distance: "8 miles",
      image: {
        src: "1582719508461-905c673771fd",
        alt: "Jordan Pond in Acadia",
      },
    },
  ],
  testimonials: [
    {
      quote:
        "Perfect lodge for our Acadia trip. Breakfast was excellent, staff helped plan our hikes, and the fireplace room was wonderful after a cold day on the trails.",
      author: "Hannah & Greg P.",
      role: "Stayed October 2024",
    },
    {
      quote:
        "Family cabin was spacious and well equipped. Kids loved the fire pit and we loved how close we were to the park entrance.",
      author: "Michelle R.",
      role: "Stayed August 2025",
    },
    {
      quote:
        "Rustic charm without sacrificing comfort. Already booked our return for fall foliage season.",
      author: "Andrew C.",
      role: "Stayed September 2024",
    },
  ],
  faq: [
    {
      question: "How far is Acadia National Park?",
      answer:
        "The main park loop entrance is about a ten-minute drive. Our desk team shares daily trail and tide recommendations.",
    },
    {
      question: "Is breakfast included?",
      answer:
        "Yes. A hot breakfast is included for all overnight guests and served from 7:00 to 10:00 AM.",
    },
    {
      question: "Do you have EV charging?",
      answer:
        "Two Level 2 chargers are available in the parking area — first come, first served.",
    },
  ],
  sections: {
    rooms: {
      eyebrow: "Lodging",
      title: "Rooms & Cabins",
      description:
        "Timber-frame rooms and cabin suites designed for comfort after long days on the coast and trails.",
    },
    amenities: {
      eyebrow: "Lodge Life",
      title: "Guest Amenities",
      description:
        "From trail lunch packs to the evening fire pit — amenities that match how lodge guests actually travel.",
    },
    attractions: {
      eyebrow: "Mount Desert Island",
      title: "Explore the Area",
      description:
        "Acadia's peaks, Bar Harbor's waterfront, and quiet coastal coves — adventure in every direction.",
    },
    booking: {
      eyebrow: "Reservations",
      title: "Stay at {name}",
      description:
        "Book your dates directly — our team can help match the right room to your trip.",
      formDescription:
        "Share your arrival dates and party size. We will reply with availability and a direct booking link.",
    },
  },
};
