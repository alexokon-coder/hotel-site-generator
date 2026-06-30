import type { NavigationStyle } from "@/lib/design/types";
import type { ThemeName } from "@/lib/themes";
import type { PreviewMode } from "@/hotel.config";

export type HotelImage = {
  src: string;
  alt: string;
  /** Editorial gallery span (wide = 2 cols on lg) */
  span?: "default" | "wide" | "tall";
};

export type HotelRoom = {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: HotelImage;
};

export type HotelAmenity = {
  icon: string;
  title: string;
  description: string;
};

export type HotelAttraction = {
  name: string;
  description: string;
  distance: string;
  image: HotelImage;
};

export type HotelTestimonial = {
  quote: string;
  author: string;
  role?: string;
};

export type HotelFaqItem = {
  question: string;
  answer: string;
};

export type HotelSiteConfig = {
  theme: ThemeName;
  previewMode: PreviewMode;
  name: string;
  legalName: string;
  location: {
    display: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    region: string;
  };
  contact: {
    phone: string;
    phoneTel: string;
    email: string;
    checkIn: string;
    checkOut: string;
    instagram: string;
  };
  seo: {
    description: string;
  };
  images: {
    hero: HotelImage;
    bookingCta: HotelImage;
  };
  logo?: HotelImage;
  tagline?: string;
  headerLayout?: "default" | "brand-split";
  customNavLinks?: readonly { href: string; label: string }[];
  navigationStyle?: NavigationStyle;
  hero: {
    eyebrow?: string;
    headline: readonly [string, string];
    description: string;
  };
  heroOverlay?: "default" | "light";
  rooms: readonly HotelRoom[];
  amenities: readonly HotelAmenity[];
  attractions: readonly HotelAttraction[];
  testimonials: readonly HotelTestimonial[];
  faq?: readonly HotelFaqItem[];
  /** Optional dedicated gallery images (falls back to hero, rooms, etc.) */
  gallery?: readonly HotelImage[];
  gallerySection?: {
    eyebrow: string;
    title: string;
    description: string;
  };
  /** Shown below booking CTAs in client previews when set */
  ctaTechNote?: string;
  /** External reservation URL (e.g. eviivo) */
  bookingUrl?: string;
  /** When rooms array is empty — show source-site fallback instead of inventing rooms */
  roomsFallback?: {
    title: string;
    description: string;
    verificationNote?: string;
  };
  /** Extended about copy (paragraphs from source About page) */
  aboutParagraphs?: readonly string[];
  galleryLayout?: "default" | "editorial";
  locationSection?: {
    eyebrow: string;
    title: string;
    description: string;
  };
  sections: {
    rooms: {
      eyebrow: string;
      title: string;
      description: string;
    };
    amenities: {
      eyebrow: string;
      title: string;
      description: string;
    };
    attractions: {
      eyebrow: string;
      title: string;
      description: string;
    };
    booking: {
      eyebrow: string;
      title: string;
      description: string;
      formDescription: string;
    };
  };
};

export type HotelPreview = {
  slug: string;
  config: HotelSiteConfig;
};
