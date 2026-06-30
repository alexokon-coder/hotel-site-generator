"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DEMO_BUSINESS_NAME } from "@/lib/demo-content";
import type { NavigationStyle } from "@/lib/design/types";
import type { HotelImage } from "@/lib/hotel-types";
import { resolveImage } from "@/lib/images";

type NavLink = { href: string; label: string };

type SiteHeaderProps = {
  businessName: string;
  navLinks: readonly NavLink[];
  navigationStyle: NavigationStyle;
  isDemo: boolean;
  logo?: HotelImage;
  tagline?: string;
  headerLayout?: "default" | "brand-split";
  bookHref?: string;
  bookExternal?: boolean;
};

function BrandMark({
  businessName,
  isDemo,
  logo,
  className,
  onClick,
  size = "default",
}: {
  businessName: string;
  isDemo: boolean;
  logo?: HotelImage;
  className?: string;
  onClick?: () => void;
  size?: "default" | "large";
}) {
  if (isDemo) {
    return (
      <a href="#" className={`demo-logo-placeholder ${className ?? ""}`} onClick={onClick} aria-label={businessName}>
        YOUR LOGO
      </a>
    );
  }

  if (logo) {
    const sizeClass =
      size === "large"
        ? "h-12 w-52 max-w-[13rem] sm:h-14 sm:w-56 sm:max-w-[14rem]"
        : "h-10 w-40 max-w-[10.5rem]";
    return (
      <a
        href="#"
        className={`relative block shrink-0 ${sizeClass} ${className ?? ""}`}
        onClick={onClick}
        aria-label={businessName}
      >
        <Image
          src={resolveImage(logo.src, 320)}
          alt={logo.alt}
          fill
          className="object-contain object-left"
          sizes={size === "large" ? "224px" : "160px"}
          priority
        />
      </a>
    );
  }

  return (
    <a
      href="#"
      className={`theme-nav-logo shrink-0 uppercase ${className ?? ""}`}
      onClick={onClick}
      aria-label={businessName}
    >
      {businessName}
    </a>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="layout-nav-icon" aria-hidden="true">
      <span className={`layout-nav-icon-bar${open ? " layout-nav-icon-bar--open" : ""}`} />
      <span className={`layout-nav-icon-bar${open ? " layout-nav-icon-bar--open" : ""}`} />
      <span className={`layout-nav-icon-bar${open ? " layout-nav-icon-bar--open" : ""}`} />
    </span>
  );
}

export function SiteHeader({
  businessName,
  navLinks,
  navigationStyle,
  isDemo,
  logo,
  tagline,
  headerLayout = "default",
  bookHref = "#book",
  bookExternal = false,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const useBrandSplit = headerLayout === "brand-split" && !isDemo;

  const mid = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, mid);
  const rightLinks = navLinks.slice(mid);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  useEffect(() => {
    setMenuOpen(false);
  }, [navigationStyle, headerLayout]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const bookLinkProps = bookExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const linkList = (links: readonly NavLink[], className: string) => (
    <ul className={className}>
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <a href={link.href} className="theme-nav-link text-sm" onClick={closeMenu}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const bookCta = (className: string, onClick?: () => void) => (
    <a
      href={bookHref}
      className={className}
      onClick={onClick}
      {...bookLinkProps}
    >
      Check Availability
    </a>
  );

  if (useBrandSplit) {
    return (
      <>
        <header className="theme-nav layout-nav layout-nav--brand-split fixed top-0 z-50 w-full">
          <nav className="layout-nav-inner layout-nav-inner--brand-split mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8">
            <div className="layout-nav-top flex items-center justify-between gap-4">
              <div className="layout-nav-brand-block flex min-w-0 items-center gap-3 sm:gap-4">
                <BrandMark
                  businessName={businessName}
                  isDemo={isDemo}
                  logo={logo}
                  size="large"
                />
                <div className="layout-nav-brand-text min-w-0">
                  <a href="#" className="layout-nav-business-name block truncate">
                    {businessName}
                  </a>
                  {tagline && (
                    <p className="layout-nav-tagline mt-0.5 truncate">{tagline}</p>
                  )}
                </div>
              </div>

              <div className="layout-nav-top-actions flex shrink-0 items-center gap-3">
                {bookCta("theme-btn-nav layout-nav-cta hidden text-xs sm:inline-flex")}
                <button
                  type="button"
                  className="layout-nav-toggle layout-nav-toggle--brand-split"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  onClick={toggleMenu}
                >
                  <MenuIcon open={menuOpen} />
                </button>
              </div>
            </div>

            <div className="layout-nav-bottom hidden lg:flex">
              {linkList(navLinks, "layout-nav-brand-split-links flex items-center justify-center gap-8 xl:gap-10")}
            </div>
          </nav>
        </header>

        <div
          className={`layout-nav-backdrop${menuOpen ? " layout-nav-backdrop--open" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div
          className={`layout-nav-drawer layout-nav-drawer--brand-split${menuOpen ? " layout-nav-drawer--open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="layout-nav-drawer-head">
            <div className="layout-nav-brand-block flex items-center gap-3">
              <BrandMark
                businessName={businessName}
                isDemo={isDemo}
                logo={logo}
                className="!h-9 !w-32"
                onClick={closeMenu}
              />
              <div className="min-w-0">
                <p className="layout-nav-business-name text-sm">{businessName}</p>
                {tagline && <p className="layout-nav-tagline text-xs">{tagline}</p>}
              </div>
            </div>
            <button
              type="button"
              className="layout-nav-panel-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="layout-nav-drawer-links">
            {navLinks.map((link) => (
              <a key={`${link.href}-${link.label}`} href={link.href} className="layout-nav-drawer-link" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>
          {bookCta("theme-btn-nav layout-nav-drawer-cta text-xs", closeMenu)}
        </div>
      </>
    );
  }

  return (
    <>
      <header
        className={`theme-nav layout-nav fixed top-0 z-50 w-full${logo && !isDemo ? " layout-nav--has-logo" : ""}`}
      >
        <nav className="layout-nav-inner mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <div className="layout-nav-brand flex min-w-0 items-center gap-3">
            <BrandMark
              businessName={businessName}
              isDemo={isDemo}
              logo={logo}
              className="shrink-0"
            />
            {isDemo && (
              <span className="demo-site-badge layout-nav-badge hidden sm:inline">
                {DEMO_BUSINESS_NAME}
              </span>
            )}
          </div>

          {linkList(navLinks, "layout-nav-classic-links hidden items-center gap-8 lg:flex")}

          <div className="layout-nav-centered hidden items-center justify-center gap-6 lg:flex">
            {linkList(leftLinks, "layout-nav-centered-left flex items-center gap-6")}
            <BrandMark
              businessName={businessName}
              isDemo={isDemo}
              logo={logo}
              className="layout-nav-centered-logo shrink-0 text-xl"
            />
            {linkList(rightLinks, "layout-nav-centered-right flex items-center gap-6")}
          </div>

          {bookCta("theme-btn-nav layout-nav-cta shrink-0 text-xs")}

          <button
            type="button"
            className="layout-nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
      </header>

      <div
        className={`layout-nav-backdrop${menuOpen ? " layout-nav-backdrop--open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`layout-nav-sidebar${menuOpen ? " layout-nav-sidebar--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="layout-nav-panel-head">
          <BrandMark
            businessName={businessName}
            isDemo={isDemo}
            logo={logo}
            className="text-xs"
            onClick={closeMenu}
          />
          <button
            type="button"
            className="layout-nav-panel-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="layout-nav-panel-links">
          {navLinks.map((link) => (
            <a key={`${link.href}-${link.label}`} href={link.href} className="layout-nav-panel-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        {bookCta("theme-btn-nav layout-nav-panel-cta text-xs", closeMenu)}
      </aside>

      <div
        className={`layout-nav-drawer${menuOpen ? " layout-nav-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="layout-nav-drawer-head">
          <BrandMark
            businessName={businessName}
            isDemo={isDemo}
            logo={logo}
            className="text-xs"
            onClick={closeMenu}
          />
          <button
            type="button"
            className="layout-nav-panel-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="layout-nav-drawer-links">
          {navLinks.map((link) => (
            <a key={`${link.href}-${link.label}`} href={link.href} className="layout-nav-drawer-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        {bookCta("theme-btn-nav layout-nav-drawer-cta text-xs", closeMenu)}
      </div>
    </>
  );
}
