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
  navLinks: NavLink[];
  navigationStyle: NavigationStyle;
  isDemo: boolean;
  logo?: HotelImage;
};

function BrandMark({
  businessName,
  isDemo,
  logo,
  className,
  onClick,
}: {
  businessName: string;
  isDemo: boolean;
  logo?: HotelImage;
  className?: string;
  onClick?: () => void;
}) {
  if (isDemo) {
    return (
      <a href="#" className={`demo-logo-placeholder ${className ?? ""}`} onClick={onClick} aria-label={businessName}>
        YOUR LOGO
      </a>
    );
  }

  if (logo) {
    return (
      <a href="#" className={`relative block h-8 w-32 shrink-0 ${className ?? ""}`} onClick={onClick} aria-label={businessName}>
        <Image
          src={resolveImage(logo.src, 200)}
          alt={logo.alt}
          fill
          className="object-contain object-left"
          sizes="128px"
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
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const mid = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, mid);
  const rightLinks = navLinks.slice(mid);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  useEffect(() => {
    setMenuOpen(false);
  }, [navigationStyle]);

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

  const linkList = (links: NavLink[], className: string) => (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className="theme-nav-link text-sm" onClick={closeMenu}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="theme-nav layout-nav fixed top-0 z-50 w-full">
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

          <a href="#book" className="theme-btn-nav layout-nav-cta shrink-0 text-xs">
            Check Availability
          </a>

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
            <a key={link.href} href={link.href} className="layout-nav-panel-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#book" className="theme-btn-nav layout-nav-panel-cta text-xs" onClick={closeMenu}>
          Check Availability
        </a>
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
            <a key={link.href} href={link.href} className="layout-nav-drawer-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#book" className="theme-btn-nav layout-nav-drawer-cta text-xs" onClick={closeMenu}>
          Check Availability
        </a>
      </div>
    </>
  );
}
