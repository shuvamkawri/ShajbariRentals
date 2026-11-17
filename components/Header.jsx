"use client";
import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";

const links = [
  ["#occasions", "Occasions"],
  ["#collections", "Collections"],
  ["#how", "How It Works"],
  ["#gallery", "Gallery"],
  ["#rules", "Rental Rules"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="topbar">
        <span className="tb-addr">📍 Kashida, Near Women&apos;s College Road, Ghatshila</span>
        <span className="tb-short">📍 Kashida, Ghatshila</span>
        <a href={`tel:${site.phoneRaw}`}>📞 96087 75136</a>
      </div>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="logo">
          <span className="logo-mark">R</span>
          <span className="logo-text">Riwaaz <em>Rentals</em></span>
        </a>
        <nav className={`menu${open ? " open" : ""}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={waLink()} className="btn btn-gold btn-sm" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            WhatsApp Us
          </a>
        </nav>
        <div className={`menu-backdrop${open ? " open" : ""}`} onClick={() => setOpen(false)} />
        <button className={`burger${open ? " open" : ""}`} aria-label="Open menu" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </header>
    </>
  );
}
