"use client";

import { useEffect, useState } from "react";
import { DEMO_BUSINESS_NAME } from "@/lib/demo-content";
import type { NavigationStyle } from "@/lib/design/types";
import { hotelConfig } from "@/hotel.config";

type NavLink = { href: string; label: string };

type SiteHeaderProps = {
  businessName: string;
  navLinks: NavLink[];
  navigationStyle: NavigationStyle;
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="layout-nav-icon" aria-hidden="true">
      <span className={`layout-nav-icon-bar${open ? " layout-nav-icon-bar--open" : ""}`} />
      <span className={`layout-nav-icon-bar${open ? " layout-nav-icon-bar--open" : ""}`} />
      <span className={`layout-nav-icon-bar${open ? " layout-nav-icon-bar--open" : ""}`} />
    </span>
  );
}

export function SiteHeader({ businessName, navLinks, navigationStyle }: SiteHeaderProps) {
  const isDemo = hotelConfig.previewMode === "demo";
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
            {isDemo ? (
              <a href="#" className="demo-logo-placeholder shrink-0" aria-label={businessName}>
                YOUR LOGO
              </a>
            ) : (
              <a href="#" className="theme-nav-logo shrink-0 text-xl uppercase" aria-label={businessName}>
                {businessName}
              </a>
            )}
            {isDemo && (
              <span className="demo-site-badge layout-nav-badge hidden sm:inline">
                {DEMO_BUSINESS_NAME}
              </span>
            )}
          </div>

          {linkList(navLinks, "layout-nav-classic-links hidden items-center gap-8 lg:flex")}

          <div className="layout-nav-centered hidden items-center justify-center gap-6 lg:flex">
            {linkList(leftLinks, "layout-nav-centered-left flex items-center gap-6")}
            {isDemo ? (
              <a href="#" className="demo-logo-placeholder layout-nav-centered-logo shrink-0" aria-label={businessName}>
                YOUR LOGO
              </a>
            ) : (
              <a href="#" className="theme-nav-logo layout-nav-centered-logo shrink-0 text-xl uppercase" aria-label={businessName}>
                {businessName}
              </a>
            )}
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
          {isDemo ? (
            <a href="#" className="demo-logo-placeholder text-xs" onClick={closeMenu}>
              YOUR LOGO
            </a>
          ) : (
            <a href="#" className="theme-nav-logo text-xs uppercase" onClick={closeMenu}>
              {businessName}
            </a>
          )}
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
          {isDemo ? (
            <a href="#" className="demo-logo-placeholder text-xs" onClick={closeMenu}>
              YOUR LOGO
            </a>
          ) : (
            <a href="#" className="theme-nav-logo text-xs uppercase" onClick={closeMenu}>
              {businessName}
            </a>
          )}
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
