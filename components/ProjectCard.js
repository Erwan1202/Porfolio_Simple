// components/ProjectCard.js
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="card" id={project.slug}>
      <a
        href={project.links?.demo || project.links?.repo || "#"}
        className="card__link"
        target="_blank"
        rel="noopener"
        aria-label={`Ouvrir ${project.title}`}
      />
      <figure className="card__media">
        <Image
          src={project.image}
          alt={project.title}
          width={project.width}
          height={project.height}
          sizes="(max-width: 900px) 100vw, 520px"
          priority={false}
        />
      </figure>

      <div className="card__content">
        <header className="card__header">
          <h3 className="card__title">{project.title}</h3>
          <span className="card__year">{project.year}</span>
        </header>

        <p className="card__summary">{project.summary}</p>

        {project.tags?.length ? (
          <ul className="card__tags" aria-label="Technologies">
            {project.tags.map((t, i) => (
              <li key={i} className="chip">{t}</li>
            ))}
          </ul>
        ) : null}

        <div className="card__actions">
          {project.links?.demo && (
            <a className="ext-link" href={project.links.demo} target="_blank" rel="noopener">
              Démo
            </a>
          )}
          {project.links?.repo && (
            <a className="ext-link" href={project.links.repo} target="_blank" rel="noopener">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
