"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header" role="banner" data-open={open ? "true" : "false"}>
      <nav className="container" aria-label="Navigation principale">
        <a href="#hero" className="brand">Le meilleur portfolio que vous ayez vu ;)</a>

        {/* NAV DESKTOP */}
        <ul className="nav nav--desktop">
          <li><a href="#about">À propos</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Bouton burger (mobile) */}
        <button
          className="nav-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen(v => !v)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        {/* Panneau mobile */}
        <div id="nav-panel" className="nav-panel" role="dialog" aria-modal="true">
          <ul className="nav" onClick={close}>
            <li><a href="#about">À propos</a></li>
            <li><a href="#experience">Expérience</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Fond cliquable */}
        <div className="nav-backdrop" onClick={close} />
      </nav>
    </header>
  );
}
