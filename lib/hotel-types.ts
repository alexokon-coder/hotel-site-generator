import type { NavigationStyle } from "@/lib/design/types";
import type { ThemeName } from "@/lib/themes";
import type { PreviewMode } from "@/hotel.config";

export type HotelImage = {
  src: string;
  alt: string;
};

export type HotelRoom = {
  id: string;
  name: string;
  description: string;
  price: string;
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
  navigationStyle?: NavigationStyle;
  hero: {
    headline: [string, string];
    description: string;
  };
  rooms: HotelRoom[];
  amenities: HotelAmenity[];
  attractions: HotelAttraction[];
  testimonials: HotelTestimonial[];
  faq?: HotelFaqItem[];
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
