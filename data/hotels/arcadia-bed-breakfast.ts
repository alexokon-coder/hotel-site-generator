import type { HotelSiteConfig } from "@/lib/hotel-types";

const GALLERY = "/images/arcadia/gallery";
const ROOMS = "/images/arcadia/rooms";

export const arcadiaBedBreakfastConfig: HotelSiteConfig = {
  previewMode: "client",
  theme: "luxury",
  headerLayout: "brand-split",
  navigationStyle: "classic-horizontal",
  name: "Arcadia Bed and Breakfast",
  legalName: "Arcadia Bed and Breakfast",
  tagline: "Arcadia's Only Bed & Breakfast",
  location: {
    display: "606 E Oak St, Arcadia, FL 34266",
    street: "606 E Oak St",
    city: "Arcadia",
    state: "FL",
    zip: "34266",
    region: "DeSoto County",
  },
  contact: {
    phone: "+1 (619) 922-9661",
    phoneTel: "+16199229661",
    email: "Info@arcadiabedandbreakfast.com",
    checkIn: "3:00 PM (early check-in available on request)",
    checkOut: "11:00 AM",
    instagram: "https://www.instagram.com/arcadiabedandbreakfast/",
  },
  seo: {
    description:
      "Arcadia's only bed and breakfast — a 101-year-old historic home in central Arcadia, near the historic district.",
  },
  logo: {
    src: "/images/arcadia/logo.png",
    alt: "Arcadia Bed and Breakfast logo",
  },
  images: {
    hero: {
      src: "/images/arcadia/hero.jpg",
      alt: "Arcadia Bed and Breakfast historic home exterior",
    },
    bookingCta: {
      src: "/images/arcadia/booking-cta.jpg",
      alt: "Historic guest room at Arcadia Bed and Breakfast",
    },
  },
  hero: {
    eyebrow: "Arcadia's Only Bed & Breakfast",
    headline: ["Historic Charm in the", "Heart of Arcadia"],
    description:
      "A restored 101-year-old home offering warm hospitality, antique character, and modern comfort near Arcadia's historic district.",
  },
  heroOverlay: "light",
  bookingUrl: "https://via.eviivo.com/ArcadiaBedBreakfast34261",
  ctaTechNote:
    "Direct booking experience powered by our integrated hospitality technology",
  customNavLinks: [
    { href: "#rooms", label: "Rooms" },
    { href: "#about", label: "About" },
    { href: "#amenities", label: "Amenities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#location", label: "Location" },
    { href: "#faq", label: "FAQ" },
  ],
  galleryLayout: "editorial",
  gallery: [
    {
      src: `${GALLERY}/exterior-front.jpg`,
      alt: "Front exterior of Arcadia Bed and Breakfast",
      span: "wide",
    },
    {
      src: `${GALLERY}/porch.jpg`,
      alt: "Inviting front porch at Arcadia Bed and Breakfast",
      span: "tall",
    },
    {
      src: `${GALLERY}/dining-room.jpg`,
      alt: "Charming dining room",
      span: "default",
    },
    {
      src: `${GALLERY}/bedroom.jpg`,
      alt: "Historic guest bedroom",
      span: "default",
    },
    {
      src: `${GALLERY}/florida-room.jpg`,
      alt: "Sunlit Florida room",
      span: "tall",
    },
    {
      src: `${GALLERY}/garden-firepit.jpg`,
      alt: "Garden with fire pit",
      span: "default",
    },
    {
      src: `${GALLERY}/historic-interior.jpg`,
      alt: "Historic interior details",
      span: "default",
    },
    {
      src: `${GALLERY}/breakfast-setting.jpg`,
      alt: "Breakfast setting at the inn",
      span: "wide",
    },
    {
      src: `${GALLERY}/exterior-garden.jpg`,
      alt: "Arcadia Bed and Breakfast grounds",
      span: "default",
    },
    {
      src: `${GALLERY}/interior-detail.jpg`,
      alt: "Antique furnishings and historic character",
      span: "default",
    },
  ],
  gallerySection: {
    eyebrow: "Gallery",
    title: "A Historic Home to Explore",
    description:
      "From the front porch and dining room to guest rooms, the Florida room, and garden with fire pit — each space reflects the warmth and character of our 101-year-old Arcadia home.",
  },
  aboutParagraphs: [
    "Step into the heart of Arcadia, where our exclusive bed and breakfast is housed within the walls of a 101-year-old home. This isn't just a structure; it's a living archive of the town's history. As locals, we take pride in preserving the unique charm that each antique furnishing and creaky floorboard holds.",
    "Our commitment to reopening this cherished haven goes beyond business — it's a labor of love. We aim to immerse you in the living history of our community, where the past meets the present and every stay adds a chapter to Arcadia's story.",
    "We are a family-owned business, locals from DeSoto County. Kerry Keiser (Founder), Jake Keiser (Partner), and Raven Keiser (General Manager) welcome you with the hospitality that makes Arcadia's only bed and breakfast a place worth returning to.",
  ],
  rooms: [
    {
      id: "bird-room",
      name: "Bird Room — King Bed",
      description:
        "A comfortable king room with desk, fireplace, and private shower bath — ideal for travelers seeking historic character with everyday convenience. Sleeps up to 2.",
      image: {
        src: `${ROOMS}/bird-room.jpg`,
        alt: "Bird Room with king bed at Arcadia Bed and Breakfast",
      },
    },
    {
      id: "private-cottage",
      name: "Private Cottage",
      description:
        "A charming backyard cottage suite in a lush tropical setting, with kitchenette, coffee maker, microwave, and refrigerator. Sleeps up to 3.",
      image: {
        src: `${ROOMS}/private-cottage.jpg`,
        alt: "Private Cottage at Arcadia Bed and Breakfast",
      },
    },
    {
      id: "upstairs-suite",
      name: "Upstairs Suite",
      description:
        "A two-bedroom upstairs suite where modern comfort meets historic charm — king and queen beds, complimentary WiFi, and space for up to 4 guests.",
      image: {
        src: `${ROOMS}/upstairs-suite.jpg`,
        alt: "Upstairs Suite at Arcadia Bed and Breakfast",
      },
    },
    {
      id: "garden-room",
      name: "Garden Room — Queen Bed",
      description:
        "A queen room with desk, private bath with shower, and the warm character of the main house. Sleeps up to 2.",
      image: {
        src: `${ROOMS}/garden-room.jpg`,
        alt: "Garden Room with queen bed",
      },
    },
    {
      id: "downstairs-suite",
      name: "Downstairs Suite",
      description:
        "An expansive downstairs suite with king and queen beds, living space, bathtub, and room for up to 5 guests — our most spacious accommodation.",
      image: {
        src: `${ROOMS}/downstairs-suite.jpg`,
        alt: "Downstairs Suite at Arcadia Bed and Breakfast",
      },
    },
  ],
  amenities: [
    {
      icon: "✦",
      title: "Complimentary Breakfast",
      description: "Start each morning with a cooked breakfast included in your stay.",
    },
    {
      icon: "◈",
      title: "101-Year-Old Historic Home",
      description: "Stay in a century-old home that preserves Arcadia's architectural heritage.",
    },
    {
      icon: "◇",
      title: "Antique Furnishings",
      description: "Guest rooms and common spaces adorned with antiques and period character.",
    },
    {
      icon: "◎",
      title: "Smart TVs",
      description: "Modern smart TVs in guest rooms for comfort after a day exploring Arcadia.",
    },
    {
      icon: "❖",
      title: "Central Arcadia Location",
      description: "Conveniently located in central Arcadia, near the historic district.",
    },
    {
      icon: "◆",
      title: "Charming Dining Room",
      description: "Gather for savory meals in our historic dining room.",
    },
    {
      icon: "❧",
      title: "Front Porch",
      description: "Relax on the inviting front porch — a favorite spot for unhurried mornings.",
    },
    {
      icon: "✺",
      title: "Garden & Fire Pit",
      description: "An enchanting garden with fire pit for quiet evenings outdoors.",
    },
    {
      icon: "✿",
      title: "Florida Room",
      description: "Enjoy tea or conversation in the sunlit Florida room.",
    },
    {
      icon: "♥",
      title: "Family-Owned Hospitality",
      description: "Locally owned and operated by a DeSoto County family.",
    },
  ],
  attractions: [],
  testimonials: [],
  locationSection: {
    eyebrow: "Location",
    title: "In the Heart of Arcadia",
    description:
      "Centrally located at 606 E Oak St, our inn places you near Arcadia's historic district and the heritage of inland Florida — a welcoming base for discovering local character, architecture, and community.",
  },
  faq: [
    {
      question: "What room types are available?",
      answer:
        "We offer five accommodations: Bird Room (King Bed), Private Cottage, Upstairs Suite, Garden Room (Queen Bed), and Downstairs Suite. Availability and nightly rates are shown when you check availability online.",
    },
    {
      question: "Is breakfast included?",
      answer: "Yes. Complimentary breakfast is included with every stay.",
    },
    {
      question: "Where is the property located?",
      answer:
        "606 E Oak St, Arcadia, FL 34266 — centrally located in Arcadia, near the historic district.",
    },
    {
      question: "Can I check availability online?",
      answer:
        "Yes. Use the Check Availability button to view current rates and book through our secure eviivo reservation page.",
    },
    {
      question: "Is the property historic?",
      answer:
        "Yes. Arcadia Bed and Breakfast is housed in a 101-year-old historic home and is Arcadia's only bed and breakfast.",
    },
  ],
  sections: {
    rooms: {
      eyebrow: "Guest Rooms",
      title: "Rooms & Suites",
      description:
        "Five distinctive accommodations — from intimate king and queen rooms to private cottage and full suites — each blending antique character with modern comforts.",
    },
    amenities: {
      eyebrow: "The Experience",
      title: "Amenities & Spaces",
      description:
        "Thoughtful comforts throughout our historic home, from breakfast each morning to the porch, dining room, garden, and Florida room.",
    },
    attractions: {
      eyebrow: "Location",
      title: "Explore Arcadia",
      description: "Centrally located near Arcadia's historic district.",
    },
    booking: {
      eyebrow: "Reservations",
      title: "Plan Your Stay",
      description:
        "Plan your stay at Arcadia Bed and Breakfast with a simple reservation experience designed to help guests check availability and book with confidence.",
      formDescription:
        "Select your dates and room on our secure booking page. Questions? Call +1 (619) 922-9661 or email Info@arcadiabedandbreakfast.com.",
    },
  },
};
