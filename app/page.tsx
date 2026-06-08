import Image from "next/image";
import { formatConfigText, hotelConfig } from "@/hotel.config";
import { resolveImage } from "@/lib/images";

const { name, location, contact, images, hero, rooms, amenities, attractions, testimonials, sections, legalName } =
  hotelConfig;

const navLinks = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#attractions", label: "Explore" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#book", label: "Book" },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-charcoal/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#"
            className="font-serif text-xl tracking-widest text-white uppercase"
          >
            {name}
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide text-white/80 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="border border-gold px-5 py-2 text-xs tracking-widest text-gold uppercase transition-colors hover:bg-gold hover:text-charcoal"
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
          src={resolveImage(images.hero.src, 1920)}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-gold-light uppercase">
            {location.display}
          </p>
          <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl lg:text-8xl">
            {hero.headline[0]}
            <br />
            <span className="italic text-gold-light">{hero.headline[1]}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rooms"
              className="bg-gold px-8 py-3.5 text-sm tracking-widest text-charcoal uppercase transition-colors hover:bg-gold-light"
            >
              View Rooms
            </a>
            <a
              href="#book"
              className="border border-white/40 px-8 py-3.5 text-sm tracking-widest text-white uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              Check Availability
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
              {sections.rooms.eyebrow}
            </p>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              {sections.rooms.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              {sections.rooms.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.id}
                className="group overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={resolveImage(room.image.src, 800)}
                    alt={room.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {room.name}
                    </h3>
                    <span className="shrink-0 text-sm font-medium text-gold">
                      {room.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {room.description}
                  </p>
                  <a
                    href="#book"
                    className="mt-4 inline-block text-xs tracking-widest text-charcoal uppercase underline-offset-4 transition-all hover:text-gold hover:underline"
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
      <section id="amenities" className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
              {sections.amenities.eyebrow}
            </p>
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              {sections.amenities.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-400">
              {sections.amenities.description}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="border border-white/10 p-8 transition-colors hover:border-gold/40 hover:bg-white/5"
              >
                <span className="mb-4 block text-2xl text-gold" aria-hidden="true">
                  {amenity.icon}
                </span>
                <h3 className="mb-2 font-serif text-xl text-white">
                  {amenity.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-400">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section id="attractions" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
              {location.region}
            </p>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              {sections.attractions.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              {sections.attractions.description}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {attractions.map((spot) => (
              <article
                key={spot.name}
                className="group flex flex-col overflow-hidden bg-white shadow-sm sm:flex-row"
              >
                <div className="relative aspect-[4/3] shrink-0 sm:aspect-auto sm:min-h-[220px] sm:w-2/5">
                  <Image
                    src={resolveImage(spot.image.src, 600)}
                    alt={spot.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:w-3/5">
                  <span className="mb-2 text-xs tracking-widest text-gold uppercase">
                    {spot.distance}
                  </span>
                  <h3 className="mb-2 font-serif text-2xl text-charcoal">
                    {spot.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {spot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
              Guest Stories
            </p>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="flex flex-col bg-white p-8 shadow-sm"
              >
                <span
                  className="mb-4 font-serif text-4xl leading-none text-gold"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="flex-1 text-sm leading-relaxed text-stone-600 italic">
                  {t.quote}
                </p>
                <footer className="mt-6 border-t border-stone-100 pt-6">
                  <cite className="not-italic">
                    <p className="font-medium text-charcoal">{t.author}</p>
                    <p className="text-xs text-stone-500">{t.role}</p>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative min-h-[420px] py-28 lg:min-h-[480px] lg:py-36">
        <Image
          src={resolveImage(images.bookingCta.src, 1920)}
          alt={images.bookingCta.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-gold-light uppercase">
            {sections.booking.eyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {formatConfigText(sections.booking.title)}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {sections.booking.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book"
              className="bg-gold px-10 py-4 text-sm tracking-widest text-charcoal uppercase transition-colors hover:bg-gold-light"
            >
              Book Your Stay
            </a>
            <a
              href={`tel:${contact.phoneTel}`}
              className="border border-white/40 px-10 py-4 text-sm tracking-widest text-white uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              Call {contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
                Reservations
              </p>
              <h2 className="font-serif text-4xl text-white md:text-5xl">
                Plan Your Stay
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-stone-400">
                {sections.booking.formDescription}
              </p>
              <div className="mt-8 space-y-4 text-sm text-stone-300">
                <p>
                  <span className="text-gold">Address</span>
                  <br />
                  {location.street}
                  <br />
                  {location.city}, {location.state} {location.zip}
                </p>
                <p>
                  <span className="text-gold">Telephone</span>
                  <br />
                  {contact.phone}
                </p>
                <p>
                  <span className="text-gold">Email</span>
                  <br />
                  {contact.email}
                </p>
                <p>
                  <span className="text-gold">Check-In / Check-Out</span>
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
                    className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-gold"
                    placeholder="Sarah"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-gold"
                    placeholder="Mitchell"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-gold"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="checkIn"
                    className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                  >
                    Arrival
                  </label>
                  <input
                    id="checkIn"
                    type="date"
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="checkOut"
                    className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                  >
                    Departure
                  </label>
                  <input
                    id="checkOut"
                    type="date"
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="roomPreference"
                  className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                >
                  Room Preference
                </label>
                <select
                  id="roomPreference"
                  className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-gold"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-charcoal">
                    Select a room type
                  </option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id} className="bg-charcoal">
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                >
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full resize-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-gold"
                  placeholder="Celebrating an anniversary, need a late arrival, interested in a fishing charter..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold py-3.5 text-sm tracking-widest text-charcoal uppercase transition-colors hover:bg-gold-light sm:w-auto sm:px-12"
              >
                Request Reservation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-charcoal py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <p className="font-serif text-lg tracking-widest text-white uppercase">
            {name}
          </p>
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} {legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-widest text-stone-400 uppercase">
            <a
              href={contact.instagram}
              className="transition-colors hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
