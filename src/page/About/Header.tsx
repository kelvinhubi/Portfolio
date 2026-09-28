export const Header = () => {
  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="text-center mb-5 animate-fade-in">
          <h1 className="display-5 fw-bolder mb-3">
            <span className="text-gradient d-inline">Let's Connect</span>
          </h1>
          <p className="lead text-muted">
            Have a project in mind or just want to chat? Reach out!
          </p>
        </div>

        {/*Comment*/}
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="contact-card">
              <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-4 mx-auto contact-icon">
                  <i className="bi bi-envelope-heart"></i>
                </div>
                <h2 className="fw-bolder mb-3">Get In Touch</h2>
                <p className="text-muted mb-5">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </div>

              <div className="row g-4">
                {/*Comment*/}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <h5 className="fw-bold mb-2">Phone</h5>
                      <a
                        className="text-gradient fw-semibold text-decoration-none"
                        href="tel:+639243841389"
                      >
                        +63 924-384-1389
                      </a>
                      <p className="text-muted small mt-2 mb-0">
                        Call or text me anytime
                      </p>
                    </div>
                  </div>
                </div>

                {/*Comment*/}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <h5 className="fw-bold mb-2">Email</h5>
                      <a
                        className="text-gradient fw-semibold text-decoration-none"
                        href="mailto:krfortin15@gmail.com"
                      >
                        krfortin15@gmail.com
                      </a>
                      <p className="text-muted small mt-2 mb-0">
                        Preferred for detailed inquiries
                      </p>
                    </div>
                  </div>
                </div>

                {/*Comment*/}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto">
                        <i className="bi bi-linkedin"></i>
                      </div>
                      <h5 className="fw-bold mb-2">LinkedIn</h5>
                      <a
                        className="text-gradient fw-semibold text-decoration-none"
                        href="https://www.linkedin.com/in/0bf3er3/"
                        target="_blank"
                      >
                        Kelvin Ryll Fortin
                      </a>
                      <p className="text-muted small mt-2 mb-0">
                        Let's connect professionally
                      </p>
                    </div>
                  </div>
                </div>

                {/*Comment*/}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto">
                        <i className="bi bi-github"></i>
                      </div>
                      <h5 className="fw-bold mb-2">GitHub</h5>
                      <a
                        className="text-gradient fw-semibold text-decoration-none"
                        href="https://github.com/kelvinhubi"
                        target="_blank"
                      >
                        kelvinhubi
                      </a>
                      <p className="text-muted small mt-2 mb-0">
                        Check out my repositories
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-5">
                <p className="text-muted mb-3">
                  Looking for collaboration opportunities or have questions?
                </p>
                <a
                  className="btn btn-primary btn-lg px-5 py-3 fw-bold"
                  href="mailto:krfortin15@gmail.com"
                >
                  <i className="bi bi-send me-2"></i>Send Me an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
