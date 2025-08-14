// components/Projects.js
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">Projets</h2>

        <div className="projects__grid">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </div>
    </section>
  );
}
