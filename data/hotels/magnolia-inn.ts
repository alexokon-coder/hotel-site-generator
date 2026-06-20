import type { HotelSiteConfig } from "@/lib/hotel-types";

export const magnoliaInnConfig: HotelSiteConfig = {
  previewMode: "client",
  theme: "luxury",
  navigationStyle: "centered-luxury",
  name: "Magnolia Inn",
  legalName: "Magnolia Inn LLC",
  location: {
    display: "Savannah · Historic District",
    street: "214 East Bay Street",
    city: "Savannah",
    state: "GA",
    zip: "31401",
    region: "Coastal Georgia",
  },
  contact: {
    phone: "(912) 555-0142",
    phoneTel: "+19125550142",
    email: "stay@magnoliainn.com",
    checkIn: "4:00 PM",
    checkOut: "11:00 AM",
    instagram: "#",
  },
  seo: {
    description:
      "Magnolia Inn is a boutique hotel in Savannah's Historic District — gracious rooms, courtyard breakfasts, and an address steps from the riverfront.",
  },
  images: {
    hero: {
      src: "1566073771259-6a8506099945",
      alt: "Magnolia Inn facade on a tree-lined Savannah street",
    },
    bookingCta: {
      src: "1571896349842-33c89424de2d",
      alt: "Elegant guest suite at Magnolia Inn",
    },
  },
  hero: {
    headline: ["Southern Hospitality,", "Refined for Today"],
    description:
      "Wake up to wrought-iron balconies, fresh magnolia blooms, and the quiet charm of Savannah — a stay that feels personal from the moment you arrive.",
  },
  rooms: [
    {
      id: "garden-queen",
      name: "Garden Queen",
      description:
        "A sunlit queen room overlooking the courtyard garden, with hardwood floors, plush linens, and a marble bath.",
      price: "From $189 / night",
      image: {
        src: "1631049307264-da0ec9d70304",
        alt: "Garden Queen room at Magnolia Inn",
      },
    },
    {
      id: "balcony-king",
      name: "Balcony King",
      description:
        "King bed, private balcony, and streetscape views — ideal for couples celebrating a special occasion in the city.",
      price: "From $229 / night",
      image: {
        src: "1590490360182-c33d57733427",
        alt: "Balcony King room with French doors",
      },
    },
    {
      id: "parlor-suite",
      name: "Parlor Suite",
      description:
        "Separate sitting parlor, wet bar, and soaking tub — our most spacious accommodation for guests who want room to unwind.",
      price: "From $319 / night",
      image: {
        src: "1583337130417-3346a1be7dee",
        alt: "Parlor Suite living area",
      },
    },
  ],
  amenities: [
    {
      icon: "✦",
      title: "Courtyard Breakfast",
      description:
        "Complimentary Southern breakfast served daily in the garden courtyard — biscuits, seasonal fruit, and locally roasted coffee.",
    },
    {
      icon: "◈",
      title: "Complimentary WiFi",
      description: "High-speed WiFi throughout the inn, including courtyard and common areas.",
    },
    {
      icon: "◇",
      title: "Concierge Service",
      description:
        "Restaurant reservations, tour bookings, and local recommendations from our front-desk team.",
    },
    {
      icon: "◎",
      title: "Evening Wine Hour",
      description: "Hosted wine and light bites each evening in the parlor — a guest favorite.",
    },
    {
      icon: "❖",
      title: "Private Parking",
      description: "Reserved off-street parking for one vehicle per room, included with your stay.",
    },
    {
      icon: "✧",
      title: "Pet-Friendly Rooms",
      description: "Select rooms welcome well-behaved pets — ask our team when booking.",
    },
  ],
  attractions: [
    {
      name: "River Street",
      description: "Cobblestone promenade with shops, restaurants, and harbor views along the Savannah River.",
      distance: "0.3 miles",
      image: {
        src: "1464366400600-7168b8af9bc3",
        alt: "Savannah riverfront at dusk",
      },
    },
    {
      name: "Forsyth Park",
      description: "Iconic fountain, live oaks, and weekend farmers market in the heart of the district.",
      distance: "0.8 miles",
      image: {
        src: "1582719508461-905c673771fd",
        alt: "Forsyth Park fountain",
      },
    },
    {
      name: "City Market",
      description: "Open-air market with galleries, boutiques, and live music most evenings.",
      distance: "0.4 miles",
      image: {
        src: "1562774053-701939374585",
        alt: "Savannah City Market",
      },
    },
  ],
  testimonials: [
    {
      quote:
        "The most welcoming inn we have stayed at in the South. Beautiful room, incredible breakfast, and a location that made exploring Savannah effortless.",
      author: "Rachel M.",
      role: "Stayed March 2025",
    },
    {
      quote:
        "Our balcony room was perfect for morning coffee. Staff remembered our anniversary and left a lovely note — thoughtful touches everywhere.",
      author: "David & Elena K.",
      role: "Stayed January 2025",
    },
    {
      quote:
        "Elegant without being stuffy. We will absolutely return on our next trip to Savannah.",
      author: "Thomas W.",
      role: "Stayed November 2024",
    },
  ],
  faq: [
    {
      question: "Is breakfast included?",
      answer:
        "Yes. A complimentary Southern breakfast is served daily from 7:30 to 10:30 AM in the courtyard.",
    },
    {
      question: "Do you offer parking?",
      answer:
        "One off-street parking space is included per room. Additional vehicles may use nearby public garages.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Reservations may be cancelled up to 48 hours before arrival for a full refund. Contact us for group or event bookings.",
    },
  ],
  sections: {
    rooms: {
      eyebrow: "Accommodations",
      title: "Rooms & Suites",
      description:
        "Thoughtfully appointed rooms with period details, modern comforts, and the quiet elegance Magnolia Inn is known for.",
    },
    amenities: {
      eyebrow: "During Your Stay",
      title: "Inn Amenities",
      description:
        "From courtyard breakfast to evening wine hour — the details that turn a visit into a memory.",
    },
    attractions: {
      eyebrow: "Savannah",
      title: "Steps From the District",
      description:
        "Historic squares, riverfront dining, and moss-draped streets — the best of Savannah is a short walk away.",
    },
    booking: {
      eyebrow: "Reservations",
      title: "Plan Your Stay at {name}",
      description:
        "Reserve directly for our best available rate and personalized service from our innkeepers.",
      formDescription:
        "Submit your dates and room preference — our team will confirm availability and send a secure booking link.",
    },
  },
};
