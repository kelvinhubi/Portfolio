export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading reveal">
        <span className="section-index">03</span>
        <h2>
          A little
          <br />
          <em>context</em>
        </h2>
      </div>
      <div className="about-grid">
        <p className="about-lead reveal">
          I’m Kelvin, an IT professional who enjoys the space between an idea
          and the thing that finally works.
        </p>
        <div className="about-copy reveal">
          <p>
            My work spans full-stack products, data-heavy operations, and
            hardware-aware systems. I care about the invisible details: useful
            defaults, honest feedback, and interfaces that respect a person’s
            attention.
          </p>
          <p>
            When I’m away from a code editor, I’m usually learning how a new
            system fits together.
          </p>
          <a
            className="text-link"
            href="https://github.com/kelvinhubi"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
