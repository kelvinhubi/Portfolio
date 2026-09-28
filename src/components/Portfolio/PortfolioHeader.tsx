export function PortfolioHeader() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Kelvin Fortin home">
        KF<span>.</span>
      </a>
      <nav className="topnav" aria-label="Main navigation">
        <a href="#work">Selected work</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="availability" href="mailto:krfortin15@gmail.com">
        <i />
        Available for select work
      </a>
    </header>
  );
}
