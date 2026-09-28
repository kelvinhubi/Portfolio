import {
  certificates,
  education,
  experience,
  resumeUrl,
  skills,
} from "../../data/portfolio";

export function ResumeSection() {
  return (
    <section className="resume-section" id="resume">
      <div className="section-heading reveal">
        <span className="section-index">04</span>
        <h2>
          The short
          <br />
          <em>version</em>
        </h2>
        <p>
          A practical record of
          <br />
          what I bring to the room.
        </p>
      </div>
      <div className="resume-summary reveal">
        <span>Professional summary</span>
        <p>
          Full-Stack Software Engineer with a strong foundation in
          Object-Oriented Programming and Relational Database design. Certified
          in Java Foundations with hands-on experience developing full-stack
          applications and microservices using C# (.NET), Laravel, React, and
          TypeScript. Adept at database optimization across MySQL and MSSQL, and
          at using AI tools to drive development efficiency.
        </p>
      </div>
      <div className="resume-block">
        <div className="resume-block-heading reveal">
          <span>01</span>
          <h3>Work experience</h3>
        </div>
        <div className="resume-experience">
          {experience.map((item) => (
            <article
              className="resume-entry reveal"
              key={`${item.date}-${item.role}`}
            >
              <div className="resume-entry-meta">
                <span>{item.date}</span>
                <strong>{item.role}</strong>
                <small>{item.company}</small>
                <small className="resume-kind">{item.kind}</small>
              </div>
              <div className="resume-entry-content">
                <h4>{item.title}</h4>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="resume-stack">{item.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="resume-block resume-two-col">
        <div>
          <div className="resume-block-heading reveal">
            <span>02</span>
            <h3>Education</h3>
          </div>
          {education.map((item) => (
            <article className="resume-education reveal" key={item.school}>
              <span>{item.date}</span>
              <strong>{item.school}</strong>
              <b>{item.degree}</b>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div>
          <div className="resume-block-heading reveal">
            <span>03</span>
            <h3>Certificates</h3>
          </div>
          <div className="certificate-list">
            {certificates.map((certificate) => (
              <a
                className="certificate-item reveal"
                href={certificate.href}
                target={certificate.href.startsWith("#") ? undefined : "_blank"}
                rel="noreferrer"
                key={certificate.name}
              >
                <span>{certificate.date}</span>
                <strong>{certificate.name}</strong>
                <small>{certificate.issuer} ↗</small>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="resume-block skills-block">
        <div className="resume-block-heading reveal">
          <span>04</span>
          <h3>Skills &amp; expertise</h3>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span className="skill-pill reveal" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <a
        className="resume-download reveal"
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
      >
        Download full resume <span>↗</span>
      </a>
    </section>
  );
}
