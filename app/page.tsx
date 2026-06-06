import Image from "next/image";

const navLinks = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const rooms = [
  {
    name: "Deluxe Suite",
    description:
      "Spacious quarters with marble bath, king bed, and private terrace overlooking the garden courtyard.",
    price: "From $420",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    name: "Garden Villa",
    description:
      "A secluded retreat with its own plunge pool, outdoor lounge, and butler service upon request.",
    price: "From $680",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    name: "Penthouse Residence",
    description:
      "The crown jewel — panoramic city views, private dining room, and a curated art collection.",
    price: "From $1,200",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  },
];

const amenities = [
  {
    icon: "✦",
    title: "Michelin-Star Dining",
    description: "Seasonal tasting menus crafted by our executive chef in an intimate setting.",
  },
  {
    icon: "◈",
    title: "Spa & Wellness",
    description: "Holistic treatments, thermal pools, and a serene meditation garden.",
  },
  {
    icon: "◇",
    title: "Concierge Service",
    description: "Personalized itineraries, private transfers, and exclusive local experiences.",
  },
  {
    icon: "◎",
    title: "Rooftop Lounge",
    description: "Handcrafted cocktails and live jazz beneath the stars every evening.",
  },
  {
    icon: "❖",
    title: "Private Library",
    description: "A curated collection of rare volumes in a fireside reading salon.",
  },
  {
    icon: "✧",
    title: "Art Gallery",
    description: "Rotating exhibitions featuring contemporary artists from around the world.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    alt: "Hotel exterior at dusk",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440500-42a77824a849?w=600&q=80",
    alt: "Elegant hotel lobby",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    alt: "Infinity pool",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Fine dining experience",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    alt: "Spa treatment room",
    span: "col-span-1 row-span-1",
  },
];

const testimonials = [
  {
    quote:
      "An extraordinary escape. Every detail — from the hand-stitched linens to the welcome champagne — felt deeply personal.",
    author: "Eleanor Whitfield",
    role: "Travel Editor, Luxe Journal",
  },
  {
    quote:
      "Maison Lumière redefines boutique hospitality. The staff anticipated our every need before we even voiced it.",
    author: "James & Catherine Moore",
    role: "Returning Guests",
  },
  {
    quote:
      "The penthouse residence was breathtaking. We've stayed at the world's finest hotels, and this ranks among the very best.",
    author: "Dr. Amara Okafor",
    role: "Architect & Designer",
  },
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
            Maison Lumière
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
            href="#contact"
            className="border border-gold px-5 py-2 text-xs tracking-widest text-gold uppercase transition-colors hover:bg-gold hover:text-charcoal"
          >
            Reserve
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Maison Lumière boutique hotel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-gold-light uppercase">
            Est. 1924 · Paris
          </p>
          <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl lg:text-8xl">
            Where Elegance
            <br />
            <span className="italic text-gold-light">Meets Intimacy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            A hidden gem in the heart of the city — twenty-seven exquisitely
            appointed suites, world-class dining, and service that anticipates
            your every desire.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rooms"
              className="bg-gold px-8 py-3.5 text-sm tracking-widest text-charcoal uppercase transition-colors hover:bg-gold-light"
            >
              Explore Suites
            </a>
            <a
              href="#contact"
              className="border border-white/40 px-8 py-3.5 text-sm tracking-widest text-white uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              Book Your Stay
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg
            className="h-6 w-6"
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
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
              Accommodations
            </p>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              Suites & Residences
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Each room is a sanctuary of understated luxury — bespoke furnishings,
              Italian marble, and views that inspire.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="group overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {room.name}
                    </h3>
                    <span className="text-sm font-medium text-gold">
                      {room.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {room.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-block text-xs tracking-widest text-charcoal uppercase underline-offset-4 transition-all hover:text-gold hover:underline"
                  >
                    View Details
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
              Experiences
            </p>
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Curated Amenities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-400">
              Beyond exceptional rooms, discover a world of refined pleasures
              designed exclusively for our guests.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="border border-white/10 p-8 transition-colors hover:border-gold/40 hover:bg-white/5"
              >
                <span className="mb-4 block text-2xl text-gold">
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

      {/* Gallery */}
      <section id="gallery" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
              Visual Journey
            </p>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              Gallery
            </h2>
          </div>
          <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[250px] lg:grid-cols-4">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className={`relative overflow-hidden ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
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
                <span className="mb-4 font-serif text-4xl leading-none text-gold">
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

      {/* Contact */}
      <section id="contact" className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
                Reservations
              </p>
              <h2 className="font-serif text-4xl text-white md:text-5xl">
                Begin Your Journey
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-stone-400">
                Our concierge team is available around the clock to craft your
                perfect stay. Reach out to reserve your suite or inquire about
                private events.
              </p>
              <div className="mt-8 space-y-4 text-sm text-stone-300">
                <p>
                  <span className="text-gold">Address</span>
                  <br />
                  14 Rue de la Paix, 75002 Paris
                </p>
                <p>
                  <span className="text-gold">Telephone</span>
                  <br />
                  +33 1 42 86 00 00
                </p>
                <p>
                  <span className="text-gold">Email</span>
                  <br />
                  reservations@maisonlumiere.com
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
                    placeholder="Élodie"
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
                    placeholder="Dupont"
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
                    Check In
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
                    Check Out
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
                  htmlFor="message"
                  className="mb-1.5 block text-xs tracking-widest text-stone-400 uppercase"
                >
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full resize-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-gold"
                  placeholder="Tell us about your ideal stay..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold py-3.5 text-sm tracking-widest text-charcoal uppercase transition-colors hover:bg-gold-light sm:w-auto sm:px-12"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-charcoal py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <p className="font-serif text-lg tracking-widest text-white uppercase">
            Maison Lumière
          </p>
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Maison Lumière. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-widest text-stone-400 uppercase">
            <a href="#" className="transition-colors hover:text-gold">
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
