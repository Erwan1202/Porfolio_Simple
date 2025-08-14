// components/Header.js
export default function Header() {
  return (
    <header className="site-header" role="banner">
      <nav className="container" aria-label="Navigation principale">
        <a href="#hero" className="brand">Erwan</a>
        <ul className="nav">
          <li><a href="#about">À propos</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
