export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div>
          <h2 id="about-title" className="section-title">À propos</h2>
          <p className="prose">
            Je suis Erwan, ingénieur & développeur web. J’aime construire des interfaces
            propres, des APIs fiables, et garder le code simple et maintenable.
          </p>
          <p className="prose">
            Je travaille surtout avec <strong>JavaScript</strong> côté front et back, et je
            privilégie les stacks légères. J’apprécie la performance, l’accessibilité et la
            DX (developer experience).
          </p>

          <h3 className="section-subtitle">Compétences clés</h3>
          <ul className="skills">
            <li className="skill-chip">JavaScript</li>
            <li className="skill-chip">React / Next.js</li>
            <li className="skill-chip">Node.js</li>
            <li className="skill-chip">CSS moderne</li>
            <li className="skill-chip">APIs REST</li>
            <li className="skill-chip">SQL / NoSQL</li>
          </ul>
        </div>

        <div className="about__aside">
          <div className="avatar">
            {/* Remplace par une vraie image quand tu veux */}
            <div className="avatar__ph" aria-hidden="true">ER</div>
          </div>
          <p className="caption">Photo / logo — à remplacer plus tard.</p>
        </div>
      </div>
    </section>
  );
}