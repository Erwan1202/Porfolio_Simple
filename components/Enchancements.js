"use client";
import { useEffect } from "react";

export default function Enhancements() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const links = Array.from(document.querySelectorAll('.site-header a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll("section.section"));

    // Header compact au scroll
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      header?.classList.toggle("scrolled", y > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Révélations au scroll (désactivées si reduced motion)
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObserver;
    if (!prefersReduced) {
      sections.forEach(s => s.classList.add("reveal")); // état initial
      revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
      sections.forEach(s => revealObserver.observe(s));
    }

    // Lien actif dans la nav
    const activeObserver = new IntersectionObserver((entries) => {
      let currentId = null;
      entries.forEach(e => {
        if (e.isIntersecting) currentId = e.target.id;
      });
      if (!currentId) return;
      links.forEach(a => {
        const isActive = a.getAttribute("href") === `#${currentId}`;
        a.classList.toggle("is-active", isActive);
        if (isActive) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
    }, { threshold: 0.6, rootMargin: "-10% 0px -40% 0px" });
    sections.forEach(s => activeObserver.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver?.disconnect();
      activeObserver?.disconnect();
    };
  }, []);

  return null;
}
