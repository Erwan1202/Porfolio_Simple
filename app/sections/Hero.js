// app/page.js
export default function HomePage() {
  return (
    <>
      <section id="hero" className="section hero">
        <div className="container">
          <p className="eyebrow">Ingénieur & Développeur web</p>
          <h1 className="hero__title">
            Salut, moi c’est Erwan. <span className="accent">Je construis des interfaces propres</span> et des APIs fiables.
          </h1>
          <p className="hero__subtitle">
            Js, Node, React, Vue — j’aime les stacks légères et le code clair. Ici, tu trouveras mes projets, mon expérience et comment me contacter.
          </p>
          <div className="hero__cta">
            <a className="btn" href="#projects">Voir mes projets</a>
            <a className="btn btn--ghost" href="#contact">Me contacter</a>
          </div>
        </div>
      </section>
    </>
  );
}
