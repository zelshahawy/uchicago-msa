"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow, Ornament } from "./ornament";
import { communityLinks } from "@/lib/community";

const links = [
  { href: "#community", label: "Our community" },
  { href: "#life", label: "Life at MSA" },
  { href: "#resources", label: "Community links" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onResize() {
      if (window.innerWidth > 760) setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#home" aria-label="UChicago MSA home" onClick={() => setOpen(false)}>
          <Ornament className="brand-mark" />
          <span className="brand-name">msa<span className="brand-dot">.</span></span>
          <span className="brand-divider" />
          <span className="brand-university">THE UNIVERSITY<br />OF CHICAGO</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-cta" href="#connect">Come say salaam <Arrow diagonal /></a>
        <button ref={toggleRef} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
          <span className={open ? "menu-line open" : "menu-line"} />
          <span className={open ? "menu-line open" : "menu-line"} />
        </button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<Arrow /></a>)}
        <a href={communityLinks.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Join the community <Arrow diagonal /></a>
      </nav>
    </header>
  );
}
