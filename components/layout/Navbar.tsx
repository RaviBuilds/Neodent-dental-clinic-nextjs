"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import { BrandLockup } from "@/components/layout/BrandLockup";
import { navItems } from "@/lib/site-data";

export function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <header
      className={`nav ${scrolled ? "scrolled" : ""}`}
      data-testid="navigation-header"
    >
      <div className="container nav-inner">
        <BrandLockup onClick={closeMenu} testId="link-home-brand" />
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <AppButton onClick={onBook} variant="primary">
          Book Appointment
        </AppButton>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            data-testid={`link-mobile-${item.label.toLowerCase()}`}
          >
            {item.label}
          </a>
        ))}
        <AppButton
          onClick={() => {
            closeMenu();
            onBook();
          }}
          variant="dark"
        >
          Book Appointment
        </AppButton>
      </div>
    </header>
  );
}
