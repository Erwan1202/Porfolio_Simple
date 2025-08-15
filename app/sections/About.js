// components/About.js
import { profile } from "@/data/profile";

export default function About() {
  const { tagline, availability, skills, languages, location } = profile;

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div>
          <h2 id="about-title" className="section-title">À propos</h2>
          <p className="prose">{tagline}</p>
          <p className="prose">
            Basé à <strong>{location}</strong>. {availability}.
          </p>

          <h3 className="section-subtitle">Compétences clés</h3>
          <ul className="skills">
            {[...skills.frontend, ...skills.backend].slice(0, 10).map((s, i) => (
              <li className="skill-chip" key={i}>{s}</li>
            ))}
          </ul>

          <h3 className="section-subtitle">Langues</h3>
          <ul className="skills">
            {languages.map((l, i) => (
              <li className="skill-chip" key={i}>{l.name} — {l.level}</li>
            ))}
          </ul>
        </div>

        <div className="about__aside">
          <div className="avatar"><div className="avatar__ph" aria-hidden="true">ER</div></div>
          
        </div>
      </div>
    </section>
  );
}
