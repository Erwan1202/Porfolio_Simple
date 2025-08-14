"use client";

import { useState, useMemo } from "react";
import { links } from "@/data/links";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const params = new URLSearchParams({
      subject: "Contact — Portfolio",
      body: "Bonjour Erwan,\n\nJe vous écris à propos de ..."
    });
    return `mailto:${links.email}?${params.toString()}`;
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = links.email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <h2 id="contact-title" className="section-title">Contact</h2>
        <p className="contact__text">
          Un projet, une question, une idée ? Je suis ouvert aux opportunités et collaborations.
          Le plus simple&nbsp;: envoyez-moi un email.
        </p>

        <div className="contact__cta">
          <a className="btn" href={mailto}>Écrire un email</a>
          <button className="btn btn--ghost" onClick={copyEmail} aria-live="polite">
            {copied ? "Copié ✓" : "Copier l’adresse"}
          </button>
        </div>

        <div className="contact__email" role="group" aria-label="Adresse email">
          <code className="contact__email__code">{links.email}</code>
        </div>

        <ul className="socials" aria-label="Réseaux">
          {links.github && (
            <li>
              <a href={links.github} target="_blank" rel="noopener" className="social">
                {GitHubIcon()} <span>GitHub</span>
              </a>
            </li>
          )}
          {links.linkedin && (
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener" className="social">
                {LinkedInIcon()} <span>LinkedIn</span>
              </a>
            </li>
          )}
          {links.x && (
            <li>
              <a href={links.x} target="_blank" rel="noopener" className="social">
                {XIcon()} <span>X</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

/* --- Petites icônes SVG inline (style “feather”) --- */
function GitHubIcon(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17a2.65 2.65 0 0 0-1.11-1.46c-.91-.63.07-.62.07-.62a2.1 2.1 0 0 1 1.54 1.04 2.14 2.14 0 0 0 2.93.83c.05-.5.27-.96.62-1.31-2.22-.25-4.55-1.11-4.55-4.93a3.86 3.86 0 0 1 1.03-2.69 3.6 3.6 0 0 1 .1-2.66s.84-.27 2.75 1.03a9.47 9.47 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.38.84.41 1.79.1 2.66a3.86 3.86 0 0 1 1.03 2.69c0 3.83-2.34 4.68-4.57 4.93.35.3.66.88.66 1.78v2.64c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/>
    </svg>
  );
}
function LinkedInIcon(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM4.5 8.94h4.87V21H4.5zM13.12 8.94h4.66v1.64h.07c.65-1.16 2.23-2.39 4.58-2.39 4.89 0 5.79 3.22 5.79 7.41V21h-4.87v-4.6c0-1.1-.02-2.52-1.53-2.52-1.53 0-1.77 1.2-1.77 2.44V21h-4.93z"/>
    </svg>
  );
}
function XIcon(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M18.9 2H22l-7.03 8.03L23.5 22h-6.87l-5.38-6.48L5 22H2l7.5-8.56L.5 2h6.98l4.86 5.9L18.9 2zM16.8 20h2.04L7.3 4H5.2l11.6 16z"/>
    </svg>
  );
}
