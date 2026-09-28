import { projects } from "../../data/portfolio";

export function WorkSection() {
  return (
    <section className="work-section" id="work">
      <div className="section-heading reveal">
        <span className="section-index">02</span>
        <h2>
          Selected
          <br />
          <em>work</em>
        </h2>
        <p>
          Systems that move people
          <br />
          and businesses forward.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <a
            className={`project-row project-${project.accent} reveal`}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <span className="project-number">{project.number}</span>
            <span className="project-title">{project.title}</span>
            <span className="project-type">{project.type}</span>
            <span className="project-stack">{project.stack}</span>
            <span className="project-arrow">↗</span>
            <span className="project-glow" />
          </a>
        ))}
      </div>
    </section>
  );
}
