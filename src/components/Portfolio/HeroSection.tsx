export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-kicker reveal">
        <span>01 / 05</span>
        <span>Based in Manila · PH</span>
      </div>
      <div className="hero-copy">
        <p className="eyebrow reveal">
          Digital engineer &amp; full-stack developer
        </p>
        <h1 className="hero-title reveal">
          Building
          <br />
          <em>useful</em> futures<span>.</span>
        </h1>
        <p className="hero-intro reveal">
          I turn complicated systems into clear, responsive digital experiences.
          Software with structure, personality, and a reason to exist.
        </p>
      </div>
      <a className="scroll-cue reveal" href="#work">
        <span>Scroll to explore</span>
        <b>↓</b>
      </a>
      <a className="resume-cue reveal" href="#resume">
        View resume <span>↗</span>
      </a>
      <div className="hero-side reveal">
        React / C# / WebGL
        <br />
        Selected work — 2022—25
      </div>
    </section>
  );
}
