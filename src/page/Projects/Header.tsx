export const Header = () => {
  return (
    <div className="container px-5 mb-5">
      <div className="text-center mb-5 animate-fade-in">
        <h1 className="display-5 fw-bolder mb-3">
          <span className="text-gradient d-inline">My Projects</span>
        </h1>
        <p className="lead text-muted">
          A showcase of innovative solutions and real-world applications
        </p>
      </div>
      <div className="row gx-5 justify-content-center">
        {/*Comment*/}
        <div className="col-lg-12 col-xl-10 col-xxl-10">
          {/*Comment*/}
          <div className="card overflow-hidden shadow-lg rounded-4 border-0 mb-5 project-card hover-card">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-shop"></i>
                      </div>
                      <h2 className="fw-bolder mb-0">
                        SmileTravel Appointment System
                      </h2>
                    </div>

                    <p className="text-muted mb-4">
                      A comprehensive appointment scheduling system tailored for
                      SmileTravel, enhancing customer experience and operational
                      efficiency.
                    </p>

                    <h6 className="fw-bold text-primary mb-3">Key Features:</h6>
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Role-Based Access:</strong> Secure
                            authorization control
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Data Encryption:</strong> Protected
                            sensitive data
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong> Single Page Application:</strong> faster
                            user experience
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-2">
                        Technologies:
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark">.NET 9</span>
                        <span className="badge bg-light text-dark">C#</span>
                        <span className="badge bg-light text-dark">MySQL</span>
                        <span className="badge bg-light text-dark">
                          React-Bootstrap
                        </span>
                        <span className="badge bg-light text-dark">
                          JavaScript
                        </span>
                        <span className="badge bg-light text-dark">React</span>
                      </div>
                    </div>

                    <a
                      className="btn btn-primary px-4 py-3 fw-bold"
                      href="http://smiletravel.runasp.net"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>View Live
                      Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Comment*/}
          <div className="card overflow-hidden shadow-lg rounded-4 border-0 mb-5 project-card hover-card">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-shop"></i>
                      </div>
                      <h2 className="fw-bolder mb-0">
                        Sales and Inventory System
                      </h2>
                    </div>
                    <p className="text-muted mb-4">
                      A secure and robust enterprise system for managing sales
                      and inventory with AI-powered analytics.
                    </p>

                    <h6 className="fw-bold text-primary mb-3">Key Features:</h6>
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Role-Based Access:</strong> Secure
                            authorization control
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Data Encryption:</strong> Protected
                            sensitive data
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>AI Integration:</strong> Advanced analytics
                            and insights
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>PDF Invoicing:</strong> Automated invoice
                            generation
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Session Tracking:</strong> Employee activity
                            monitoring
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>CI/CD Pipeline:</strong> Automated
                            deployment
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-2">
                        Technologies:
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark">
                          Laravel
                        </span>
                        <span className="badge bg-light text-dark">PHP</span>
                        <span className="badge bg-light text-dark">MySQL</span>
                        <span className="badge bg-light text-dark">
                          Bootstrap
                        </span>
                        <span className="badge bg-light text-dark">
                          JavaScript
                        </span>
                        <span className="badge bg-light text-dark">
                          GitHub Actions
                        </span>
                      </div>
                    </div>

                    <a
                      className="btn btn-primary px-4 py-3 fw-bold"
                      href="https://sales-and-inventory.great-site.net"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>View Live
                      Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Comment*/}
          <div className="card overflow-hidden shadow-lg rounded-4 border-0 mb-5 project-card hover-card">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-building"></i>
                      </div>
                      <h2 className="fw-bolder mb-0">HOA Management System</h2>
                    </div>
                    <p className="text-muted mb-4">
                      A comprehensive system designed to streamline homeowners'
                      association operations with advanced RFID integration.
                    </p>

                    <h6 className="fw-bold text-primary mb-3">Key Features:</h6>
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Payment System:</strong> Secure and
                            efficient processing of fees
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Event Management:</strong> Easy booking and
                            coordination of community events
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>RFID Integration:</strong> Vehicle tracking
                            and pet registry
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <strong>Real-time Chat:</strong> Seamless community
                            communication
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-2">
                        Technologies:
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark">C#</span>
                        <span className="badge bg-light text-dark">
                          C++ (Arduino)
                        </span>
                        <span className="badge bg-light text-dark">
                          ASP.NET MVC
                        </span>
                        <span className="badge bg-light text-dark">jQuery</span>
                        <span className="badge bg-light text-dark">
                          Bootstrap
                        </span>
                        <span className="badge bg-light text-dark">MySQL</span>
                      </div>
                    </div>

                    <a
                      className="btn btn-primary px-4 py-3 fw-bold"
                      href="https://github.com/kelvinhubi/HOA-Management-System-with-RFID#"
                      target="_blank"
                    >
                      <i className="bi bi-github me-2"></i>View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Comment*/}
      </div>
    </div>
  );
};
