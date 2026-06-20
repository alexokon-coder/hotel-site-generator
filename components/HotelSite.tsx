"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { formatConfigText } from "@/hotel.config";
import {
  DEMO_BUSINESS_NAME,
  DEMO_FAQ_FOOTNOTE,
  DEMO_FAQ_ITEMS,
  DEMO_CTA_TECH_NOTE,
  DEMO_MAP_ADDRESS,
  DEMO_REVIEW_SOURCE,
} from "@/lib/demo-content";
import { SiteHeader } from "@/components/SiteHeader";
import { resolveImage } from "@/lib/images";
import { useDesign } from "@/components/demo/DesignProvider";
import { useHotelSiteConfig } from "@/lib/hotel-context";

function DemoLabel({ children }: { children: string }) {
  const { isDemo } = useHotelSiteConfig();
  if (!isDemo) return null;
  return <p className="demo-content-label">{children}</p>;
}

type CtaButton = {
  href: string;
  label: string;
  variant: "primary" | "outline";
};

function DualCtaGroup({
  buttons,
  footnote,
}: {
  buttons: [CtaButton, CtaButton];
  footnote?: string;
}) {
  return (
    <div className="dual-cta">
      <div className="dual-cta-buttons">
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className={`${btn.variant === "primary" ? "theme-btn-primary" : "theme-btn-outline"} hero-cta-button`}
          >
            {btn.label}
          </a>
        ))}
      </div>
      {footnote && <p className="dual-cta-footnote">{footnote}</p>}
    </div>
  );
}

export function HotelSite() {
  const { config, isDemo } = useHotelSiteConfig();
  const {
    name,
    location,
    contact,
    images,
    hero,
    rooms,
    amenities,
    attractions,
    testimonials,
    sections,
    legalName,
    seo,
    faq,
    logo,
    navigationStyle: configNavStyle,
  } = config;

  const { customization } = useDesign();
  const { sections: visibility, heroLayout, navigationStyle: designNavStyle } =
    customization;
  const [mounted, setMounted] = useState(false);

  const navigationStyle = isDemo
    ? (designNavStyle ?? "classic-horizontal")
    : (configNavStyle ?? designNavStyle ?? "classic-horizontal");

  const galleryImages = useMemo(
    () => [
      images.hero,
      images.bookingCta,
      ...rooms.map((r) => r.image),
      ...attractions.slice(0, 2).map((a) => a.image),
    ],
    [images, rooms, attractions]
  );

  const heroCarouselImages = useMemo(
    () => [images.hero, images.bookingCta, ...rooms.slice(0, 2).map((r) => r.image)],
    [images, rooms]
  );

  const faqItems = isDemo ? DEMO_FAQ_ITEMS : (faq ?? []);

  const mapAddress = isDemo
    ? DEMO_MAP_ADDRESS.full
    : `${location.street}, ${location.city}, ${location.state} ${location.zip}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "#rooms", label: "Rooms" },
    ...(visibility.amenities ? [{ href: "#amenities", label: "Amenities" }] : []),
    ...(visibility.gallery ? [{ href: "#gallery", label: "Gallery" }] : []),
    ...(visibility.attractions ? [{ href: "#attractions", label: "Explore" }] : []),
    ...(visibility.about ? [{ href: "#about", label: "About" }] : []),
    ...(visibility.reviews ? [{ href: "#testimonials", label: "Reviews" }] : []),
    ...(visibility.faq ? [{ href: "#faq", label: "FAQ" }] : []),
    { href: "#book", label: "Book" },
  ];

  return (
    <div className="theme-page font-sans">
      <SiteHeader
        businessName={name}
        navLinks={navLinks}
        navigationStyle={navigationStyle}
        isDemo={isDemo}
        logo={logo}
      />

      {/* Hero */}
      <section className="theme-hero layout-hero relative flex items-center justify-center">
        <div className="layout-hero-media absolute inset-0">
          {heroLayout === "image-carousel" ? (
            heroCarouselImages.map((img, i) => (
              <div
                key={img.src}
                className="layout-hero-slide absolute inset-0"
                style={{ animationDelay: `${i * 4}s` }}
              >
                <Image
                  src={resolveImage(img.src, 1920)}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  className="theme-image object-cover"
                  sizes="100vw"
                />
              </div>
            ))
          ) : (
            <Image
              src={resolveImage(images.hero.src, 1920)}
              alt={images.hero.alt}
              fill
              priority
              className="theme-image object-cover"
              sizes="100vw"
            />
          )}
          <div className="theme-hero-overlay absolute inset-0" />
        </div>

        <div className="layout-hero-content theme-hero-text relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="theme-hero-eyebrow theme-eyebrow mb-4 text-sm uppercase">
            {location.display}
          </p>
          <h1 className="theme-heading theme-h1 leading-tight">
            {hero.headline[0]}
            <br />
            <span className="italic text-accent-light">{hero.headline[1]}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed opacity-90">
            {hero.description}
          </p>
          <DualCtaGroup
            buttons={[
              { href: "#rooms", label: "View Rooms", variant: "outline" },
              { href: "#book", label: "Check Availability", variant: "primary" },
            ]}
            footnote={isDemo ? DEMO_CTA_TECH_NOTE : undefined}
          />
        </div>

        {heroLayout === "booking-focused" && (
          <div className="layout-hero-booking relative z-10 mx-auto mt-8 w-full max-w-md px-6">
            <form className="theme-card p-6 text-left">
              <p className="theme-eyebrow mb-2 text-xs uppercase">Quick booking</p>
              <h2 className="theme-heading mb-4 text-xl theme-heading-light">Check availability</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="date"
                  className="theme-input w-full border border-muted-border bg-surface px-3 py-2 text-sm"
                  aria-label="Arrival"
                />
                <input
                  type="date"
                  className="theme-input w-full border border-muted-border bg-surface px-3 py-2 text-sm"
                  aria-label="Departure"
                />
              </div>
              <a href="#book" className="theme-btn-primary mt-4 block w-full text-center">
                Check Availability
              </a>
            </form>
          </div>
        )}

        {mounted && heroLayout === "fullscreen" && (
          <div
            className="hero-scroll-hint absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-50"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        )}
      </section>

      {/* About */}
      {visibility.about && (
        <section id="about" className="theme-section theme-section-rooms">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="theme-eyebrow mb-3 text-sm uppercase">About</p>
            <h2 className="theme-heading theme-h2 theme-heading-light">About {name}</h2>
            <p className="mx-auto mt-6 leading-relaxed text-muted">{seo.description}</p>
            <DemoLabel>Demo Content</DemoLabel>
          </div>
        </section>
      )}

      {/* Rooms */}
      <section id="rooms" className="theme-section theme-section-rooms">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="theme-eyebrow mb-3 text-sm uppercase">{sections.rooms.eyebrow}</p>
            <h2 className="theme-heading theme-h2 theme-heading-light">{sections.rooms.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">{sections.rooms.description}</p>
            <DemoLabel>Demo Content</DemoLabel>
          </div>
          <div className="layout-rooms-grid theme-section-grid grid md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <article key={room.id} className="theme-card group overflow-hidden">
                <div className="theme-image-wrap theme-room-image-wrap relative aspect-[4/3]">
                  <Image
                    src={resolveImage(room.image.src, 800)}
                    alt={room.image.alt}
                    fill
                    className="theme-image object-cover group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="theme-card-body">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="theme-heading text-2xl theme-heading-light">{room.name}</h3>
                    <span className="shrink-0 text-sm font-medium text-accent">{room.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{room.description}</p>
                  <a
                    href="#book"
                    className="mt-4 inline-block text-xs tracking-widest uppercase underline-offset-4 transition-all hover:text-accent hover:underline"
                    style={{ color: "var(--heading-on-surface)" }}
                  >
                    Check Availability
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      {visibility.amenities && (
        <section id="amenities" className="theme-section theme-section-amenities">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="theme-eyebrow mb-3 text-sm uppercase">{sections.amenities.eyebrow}</p>
              <h2 className="theme-heading theme-h2 theme-heading-dark">{sections.amenities.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-on-dark">
                {sections.amenities.description}
              </p>
            </div>
            <div className="theme-section-grid grid sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity) => (
                <div key={amenity.title} className="theme-amenity-card p-8">
                  <span className="mb-4 block text-2xl text-accent" aria-hidden="true">
                    {amenity.icon}
                  </span>
                  <h3 className="theme-heading mb-2 text-xl theme-heading-dark">{amenity.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-on-dark">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {visibility.gallery && (
        <section id="gallery" className="theme-section theme-section-gallery">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="theme-eyebrow mb-3 text-sm uppercase">Property</p>
              <h2 className="theme-heading theme-h2 theme-heading-light">Photo Gallery</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                A glimpse of suites, amenities, and the surrounding area.
              </p>
              <DemoLabel>Demo Content</DemoLabel>
            </div>
            <div className="layout-gallery-grid theme-section-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((img, i) => (
                <div
                  key={`${img.src}-${i}`}
                  className="theme-image-wrap relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={resolveImage(img.src, 800)}
                    alt={img.alt}
                    fill
                    className="theme-image object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Attractions */}
      {visibility.attractions && (
        <section id="attractions" className="theme-section theme-section-gallery">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="theme-eyebrow mb-3 text-sm uppercase">{sections.attractions.eyebrow}</p>
              <h2 className="theme-heading theme-h2 theme-heading-light">
                {sections.attractions.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">{sections.attractions.description}</p>
              <DemoLabel>Demo Content</DemoLabel>
            </div>
            <div className="theme-section-grid grid sm:grid-cols-2">
              {attractions.map((spot) => (
                <article
                  key={spot.name}
                  className="theme-card group flex flex-col overflow-hidden sm:flex-row"
                >
                  <div className="theme-image-wrap relative aspect-[4/3] w-full shrink-0 sm:aspect-auto sm:w-2/5 sm:min-h-[220px] sm:self-stretch">
                    <Image
                      src={resolveImage(spot.image.src, 600)}
                      alt={spot.image.alt}
                      fill
                      className="theme-image object-cover group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  </div>
                  <div className="theme-card-body flex flex-col justify-center sm:w-3/5">
                    <span className="theme-eyebrow mb-2 text-xs uppercase">{spot.distance}</span>
                    <h3 className="theme-heading mb-2 text-2xl theme-heading-light">{spot.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{spot.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {visibility.reviews && (
        <section id="testimonials" className="theme-section theme-section-alt">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="theme-eyebrow mb-3 text-sm uppercase">
                {isDemo ? "Example Review Integration" : "Guest Stories"}
              </p>
              <h2 className="theme-heading theme-h2 theme-heading-light">
                {isDemo ? "Sample Guest Reviews" : "What Our Guests Say"}
              </h2>
              {isDemo && (
                <>
                  <DemoLabel>Example review integration shown for demonstration purposes.</DemoLabel>
                  <p className="demo-review-source">
                    Reviews demonstrated using{" "}
                    <a
                      href={DEMO_REVIEW_SOURCE.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {DEMO_REVIEW_SOURCE.name}
                    </a>
                    . Not affiliated with {name}.
                  </p>
                </>
              )}
            </div>
            <div className="theme-section-grid grid md:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="theme-card flex flex-col">
                  <div className="theme-card-body flex flex-1 flex-col">
                    <span
                      className="theme-heading mb-4 text-4xl leading-none text-accent"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p className="flex-1 text-sm leading-relaxed text-muted italic">{t.quote}</p>
                    <footer className="mt-6 border-t border-muted-border pt-6">
                      <cite className="not-italic">
                        <p
                          className="font-medium theme-heading-light"
                          style={{ color: "var(--heading-on-surface)" }}
                        >
                          {t.author}
                        </p>
                        {t.role && (
                          <p className="text-xs text-muted-subtle">{t.role}</p>
                        )}
                      </cite>
                    </footer>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {visibility.faq && faqItems.length > 0 && (
        <section id="faq" className="theme-section theme-section-rooms">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="theme-eyebrow mb-3 text-sm uppercase">Questions</p>
              <h2 className="theme-heading theme-h2 theme-heading-light">Frequently Asked</h2>
              {isDemo && <DemoLabel>Sample FAQ Content</DemoLabel>}
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="theme-card theme-card-body">
                  <summary className="theme-heading cursor-pointer text-lg theme-heading-light">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
            {isDemo && (
              <p className="demo-content-label mt-8 text-center">{DEMO_FAQ_FOOTNOTE}</p>
            )}
          </div>
        </section>
      )}

      {/* Map */}
      {visibility.map && (
        <section id="map" className="theme-section theme-section-alt">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="theme-eyebrow mb-3 text-sm uppercase">Location</p>
              <h2 className="theme-heading theme-h2 theme-heading-light">Find Us</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">{mapAddress}</p>
              {isDemo && (
                <DemoLabel>Example map integration. Your property location can be displayed here.</DemoLabel>
              )}
            </div>
            <div className="theme-card overflow-hidden">
              <iframe
                title={isDemo ? "Example map — demonstration" : `Map of ${name}`}
                className="h-[360px] w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`}
              />
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="theme-section relative min-h-[420px] lg:min-h-[480px]">
        <div className="absolute inset-0">
          <Image
            src={resolveImage(images.bookingCta.src, 1920)}
            alt={images.bookingCta.alt}
            fill
            className="theme-image object-cover"
            sizes="100vw"
          />
        </div>
        <div className="theme-cta-overlay absolute inset-0" />
        <div className="theme-hero-text relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="theme-eyebrow mb-4 text-sm uppercase text-accent-light">
            {sections.booking.eyebrow}
          </p>
          <h2 className="theme-heading theme-h2 leading-tight">
            {formatConfigText(sections.booking.title, name)}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed opacity-90">
            {sections.booking.description}
          </p>
          <DualCtaGroup
            buttons={[
              { href: "#book", label: "Check Availability", variant: "primary" },
              { href: `tel:${contact.phoneTel}`, label: contact.phone, variant: "outline" },
            ]}
            footnote={isDemo ? DEMO_CTA_TECH_NOTE : undefined}
          />
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="theme-section theme-section-book">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="theme-eyebrow mb-3 text-sm uppercase">Reservations</p>
              <h2 className="theme-heading theme-h2 theme-heading-dark">Plan Your Stay</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-on-dark">
                {sections.booking.formDescription}
              </p>
              <div className="mt-8 space-y-4 text-sm text-muted-on-dark">
                <p>
                  <span className="text-accent">Address</span>
                  <br />
                  {location.street}
                  <br />
                  {location.city}, {location.state} {location.zip}
                </p>
                <p>
                  <span className="text-accent">Telephone</span>
                  <br />
                  {contact.phone}
                </p>
                <p>
                  <span className="text-accent">Email</span>
                  <br />
                  <a href={`mailto:${contact.email}`} className="hover:text-accent-light">
                    {contact.email}
                  </a>
                </p>
                <p>
                  <span className="text-accent">Check-In / Check-Out</span>
                  <br />
                  {contact.checkIn} · {contact.checkOut}
                </p>
              </div>
            </div>
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-xs tracking-widest text-muted-on-dark uppercase"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="theme-input w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-muted-subtle"
                    placeholder="Sarah"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-xs tracking-widest text-muted-on-dark uppercase"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="theme-input w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-muted-subtle"
                    placeholder="Mitchell"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs tracking-widest text-muted-on-dark uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="theme-input w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-muted-subtle"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="checkIn"
                    className="mb-1.5 block text-xs tracking-widest text-muted-on-dark uppercase"
                  >
                    Arrival
                  </label>
                  <input
                    id="checkIn"
                    type="date"
                    className="theme-input w-full border border-white/20 bg-white/5 px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="checkOut"
                    className="mb-1.5 block text-xs tracking-widest text-muted-on-dark uppercase"
                  >
                    Departure
                  </label>
                  <input
                    id="checkOut"
                    type="date"
                    className="theme-input w-full border border-white/20 bg-white/5 px-4 py-3 text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="roomPreference"
                  className="mb-1.5 block text-xs tracking-widest text-muted-on-dark uppercase"
                >
                  Room Preference
                </label>
                <select
                  id="roomPreference"
                  className="theme-input w-full border border-white/20 bg-white/5 px-4 py-3 text-white"
                  defaultValue=""
                >
                  <option value="" disabled style={{ background: "var(--section-book-bg)" }}>
                    Select a room type
                  </option>
                  {rooms.map((room) => (
                    <option
                      key={room.id}
                      value={room.id}
                      style={{ background: "var(--section-book-bg)" }}
                    >
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs tracking-widest text-muted-on-dark uppercase"
                >
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="theme-input w-full resize-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-muted-subtle"
                  placeholder="Celebrating an anniversary, need a late arrival..."
                />
              </div>
              <button type="submit" className="theme-btn-primary w-full sm:w-auto">
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="theme-footer py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <div className="flex flex-col items-center gap-2 md:items-start">
            {isDemo ? (
              <span className="demo-logo-placeholder text-xs">YOUR LOGO</span>
            ) : (
              <span className="theme-nav-logo text-xs uppercase">{name}</span>
            )}
            {isDemo && <span className="demo-site-badge">{DEMO_BUSINESS_NAME}</span>}
          </div>
          <p className="text-center text-xs text-muted-on-dark opacity-80">
            © {new Date().getFullYear()} {legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-widest text-muted-on-dark uppercase">
            <a href="#" className="transition-colors hover:text-accent">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
