// components/Experience.js
import { experiences } from "@/data/experience";

function formatDate(iso) {
  if (!iso || iso.toLowerCase().includes("aujourd")) return "Aujourd’hui";
  const [y, m] = iso.split("-");
  return new Date(Number(y), Number(m || 1) - 1).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short"
  });
}

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="exp-title">
      <div className="container">
        <h2 id="exp-title" className="section-title">Expérience</h2>

        <ol className="timeline" role="list">
          {experiences.map((exp, i) => (
            <li className="timeline__item" key={i}>
              <div className="timeline__marker" aria-hidden="true" />
              <article className="timeline__content">
                <header className="exp__header">
                  <h3 className="exp__role">
                    {exp.role} <span className="at">@ {exp.company}</span>
                  </h3>
                  <div className="exp__meta">
                    <time dateTime={exp.start}>{formatDate(exp.start)}</time>
                    {" – "}
                    <time dateTime={exp.end?.includes("Aujourd") ? "" : exp.end}>
                      {formatDate(exp.end)}
                    </time>
                    {exp.location ? <> · <span className="exp__location">{exp.location}</span></> : null}
                  </div>
                </header>

                <ul className="exp__bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>

                {exp.tech?.length ? (
                  <ul className="exp__tags" aria-label="Technologies">
                    {exp.tech.map((t, k) => <li key={k} className="tag">{t}</li>)}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
