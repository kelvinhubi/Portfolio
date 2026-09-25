export const Section = () => {
  return (
    <section className="bg-white py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-10">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder mb-4">
                <span className="text-gradient d-inline">About Me</span>
              </h2>
              <p className="lead fw-normal mb-4 text-muted">
                Full-Stack Software Engineer with a strong foundation in
                Object-Oriented Programming and Relational Database design.
                Certified in Java Foundations with robust, hands-on experience
                developing full-stack applications and microservices using C#
                (.NET), Laravel, React, and TypeScript. Adept at database
                optimization and utilizing AI tools to drive development
                efficiency.
              </p>
              <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h5 className="fw-bold">Full-Stack Developer</h5>
                      <p className="text-muted small mb-0">
                        Building end-to-end solutions with modern frameworks and
                        best practices
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto">
                        <i className="bi bi-lightbulb"></i>
                      </div>
                      <h5 className="fw-bold">Problem Solver</h5>
                      <p className="text-muted small mb-0">
                        Transforming complex challenges into elegant, scalable
                        solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto">
                        <i className="bi bi-graph-up"></i>
                      </div>
                      <h5 className="fw-bold">Continuous Learner</h5>
                      <p className="text-muted small mb-0">
                        Always exploring new technologies and improving my craft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-icons d-flex justify-content-center fs-2 gap-3 mt-5">
                <a
                  className="text-gradient"
                  href="mailto:krfortin15@gmail.com"
                  target="_blank"
                  title="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <a
                  className="text-gradient"
                  href="https://www.linkedin.com/in/0bf3er3/"
                  target="_blank"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  className="text-gradient"
                  href="https://github.com/kelvinhubi"
                  target="_blank"
                  title="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
