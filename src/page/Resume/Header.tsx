export const Header = () => {
  return (
    <div className="container px-5 my-5">
      <div className="text-center mb-5 animate-fade-in">
        <h1 className="display-5 fw-bolder mb-3">
          <span className="text-gradient d-inline">Resume</span>
        </h1>
        <p className="lead text-muted">
          My professional journey and technical expertise
        </p>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          {/*$1*/}
          <section className="mb-5">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                    <i className="bi bi-person-badge"></i>
                  </div>
                  <h2 className="fw-bolder mb-0">
                    <span className="text-gradient d-inline">
                      Professional Summary
                    </span>
                  </h2>
                </div>
                <p className="lead mb-0">
                  Full-Stack Software Engineer with a strong foundation in
                  Object-Oriented Programming and Relational Database design.
                  Certified in Java Foundations with robust, hands-on experience
                  developing full-stack applications and microservices using C#
                  (.NET), Laravel, React, and TypeScript. Adept at database
                  optimization (MySQL, MSSQL) and utilizing AI tools to drive
                  development efficiency. Eager to leverage strong communication
                  skills, a rapid learning curve, and practical engineering
                  experience to contribute to a collaborative software team.
                </p>
              </div>
            </div>
          </section>
          {/*$1*/}
          <section>
            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
              <h2 className="text-primary fw-bolder mb-0">
                <i className="bi bi-briefcase me-2"></i>Work Experience
              </h2>
              {/*$1*/}
              <a
                className="btn btn-primary px-4 py-3 fw-bold"
                href="https://drive.google.com/file/d/1_6Q36mq0sPwys_u_m6jwpDnf1Uz5fHs9/view?usp=sharing"
                target="_blank"
              >
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4 hover-card">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="experience-date p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2 fs-5">
                        Jan 2026 - Sept 2026
                      </div>
                      <div className="fw-bolder mb-2">
                        Full-Stack Software Engineer
                      </div>
                      <div className="small text-muted">Seiko IT Solutions</div>
                      <div className="small text-muted mt-2">
                        <span className="badge bg-primary">Full-time</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <h5 className="fw-bold mb-3 text-gradient">
                        Key Achievements
                      </h5>
                      <ul className="mb-3">
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Maintained legacy manufacturing and microservices
                          systems while simultaneously architecting and
                          implementing new features using a stack of{" "}
                          <strong>
                            C# (.NET), Laravel (PHP), React, and TypeScript
                          </strong>
                          .
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Leveraged AI tools as a strategic development partner
                          to automate repetitive coding tasks, script manual
                          workflows, and accelerate prototyping.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Optimized legacy manufacturing database performance by
                          implementing efficient indexing in MySQL and MSSQL.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Automated a tedious manual translation testing
                          workflow and resolved critical system failures.
                        </li>
                      </ul>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark">C#</span>
                        <span className="badge bg-light text-dark">.NET</span>
                        <span className="badge bg-light text-dark">
                          Laravel
                        </span>
                        <span className="badge bg-light text-dark">React</span>
                        <span className="badge bg-light text-dark">
                          TypeScript
                        </span>
                        <span className="badge bg-light text-dark">MySQL</span>
                        <span className="badge bg-light text-dark">MSSQL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="experience-date p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2 fs-5">
                        November 2025
                      </div>
                      <div className="fw-bolder mb-2">Freelance Developer</div>
                      <div className="small text-muted">
                        SmileTravel Dental Clinic
                      </div>
                      <div className="small text-muted mt-2">
                        <span className="badge bg-info">Freelance Project</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <h5 className="fw-bold mb-3 text-gradient">
                        SmileTravel Appointment Management System
                      </h5>
                      <ul className="mb-3">
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Developed a secure Appointment Management System using{" "}
                          <strong>.NET 9 and React</strong>, utilizing a Single
                          Page Application (SPA) architecture for a responsive
                          user experience.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Implemented strict{" "}
                          <strong>Role-Based Access Control (RBAC)</strong> and
                          advanced data encryption to ensure patient data
                          privacy and security.
                        </li>
                      </ul>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark">C#</span>
                        <span className="badge bg-light text-dark">.NET 9</span>
                        <span className="badge bg-light text-dark">React</span>
                        <span className="badge bg-light text-dark">MySQL</span>
                        <span className="badge bg-light text-dark">
                          JavaScript
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="experience-date p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2 fs-5">
                        Jun 2025 - Oct 2025
                      </div>
                      <div className="fw-bolder mb-2">Freelance Developer</div>
                      <div className="small text-muted">
                        Isaac's Foods and Vegetable Supplies OPC
                      </div>
                      <div className="small text-muted mt-2">
                        <span className="badge bg-info">Freelance Project</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <h5 className="fw-bold mb-3 text-gradient">
                        Sales and Inventory System
                      </h5>
                      <ul className="mb-3">
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Engineered a comprehensive Sales and Inventory System
                          using <strong>Laravel</strong>, featuring automated{" "}
                          <strong>GitHub Actions CI/CD</strong> pipelines for
                          smooth deployment.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Integrated <strong>AI-driven analytics</strong> to
                          generate comprehensive statistics on sales trends and
                          inventory levels.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Built a real-time "Heartbeat" monitoring system to
                          track employee active sessions and manage
                          productivity.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Streamlined operations with automated PDF invoice
                          generation and dynamic stock tracking.
                        </li>
                      </ul>
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
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="experience-date p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2 fs-5">
                        Feb 2025 - Jun 2025
                      </div>
                      <div className="fw-bolder mb-2">
                        Intern AppSheet Developer
                      </div>
                      <div className="small text-muted">
                        Miguel and Maria Group of Restaurants Inc.
                      </div>
                      <div className="small text-muted">
                        <i className="bi bi-geo-alt-fill me-1"></i>Marikina City
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <h5 className="fw-bold mb-3 text-gradient">
                        Key Achievements:
                      </h5>
                      <ul className="mb-0">
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Collaborated closely with stakeholders to identify
                          workflow bottlenecks, demonstrating strong
                          communication skills and requirement gathering
                          abilities.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Adapted quickly to a new low-code platform (AppSheet)
                          to deliver a solution that{" "}
                          <strong>increased productivity by 30%</strong>.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Managed data validation rules to improve data
                          integrity, directly supporting business continuity.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          <strong>
                            Installed and configured operating systems
                          </strong>{" "}
                          on workstations, ensuring optimal performance and
                          security.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Provided <strong>networking support</strong> and
                          troubleshooting, maintaining reliable IT
                          infrastructure across multiple restaurant locations.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          Delivered comprehensive IT hardware and software
                          support, significantly reducing business
                          interruptions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="experience-date p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2 fs-5">
                        Sep 2024 - Jan 2025
                      </div>
                      <div className="fw-bolder mb-2">Capstone Project</div>
                      <div className="small text-muted">
                        STI College Marikina
                      </div>
                      <div className="small text-muted mt-2">
                        <span className="badge bg-success">
                          Academic Project
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <h5 className="fw-bold mb-3 text-gradient">
                        HOA Management System
                      </h5>
                      <p className="mb-3">
                        A comprehensive system designed to streamline
                        homeowners' association operations. Key features
                        include:
                      </p>
                      <ul className="mb-3">
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          <strong>Payment System:</strong> Secure and efficient
                          processing of fees.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          <strong>Event &amp; Facility Management:</strong> Easy
                          booking and coordination of community events and
                          amenities.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          <strong>Vehicle &amp; Pet Registration:</strong>{" "}
                          RFID-based vehicle tracking and a pet registry to
                          ensure community safety and cleanliness.
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-chevron-right text-primary me-2"></i>
                          <strong>Reporting &amp; Communication:</strong>{" "}
                          Generation of income/non-income reports and a
                          real-time chat for seamless communication.
                        </li>
                      </ul>
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
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*$1*/}
          <section>
            <h2 className="fw-bolder mb-4">
              <i className="bi bi-mortarboard me-2"></i>
              <span className="text-gradient">Education</span>
            </h2>
            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="experience-date p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2 fs-5">
                        Graduated 2025
                      </div>
                      <div className="mb-2">
                        <div className="fw-bolder">STI College Marikina</div>
                        <div className="small text-muted">
                          <i className="bi bi-geo-alt-fill me-1"></i>Marikina
                          City
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="small text-muted">
                          Bachelor of Science in
                        </div>
                        <div className="fw-bold text-primary">
                          Information Technology
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <p className="mb-3">
                        Gained a strong foundation in software development,
                        database administration, and network management with
                        emphasis on Object-Oriented Programming and Relational
                        Database Design.
                      </p>
                      <h6 className="fw-bold text-primary mb-2">
                        Key Coursework:
                      </h6>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-light text-dark">
                          Systems Analysis &amp; Design
                        </span>
                        <span className="badge bg-light text-dark">
                          Web Development
                        </span>
                        <span className="badge bg-light text-dark">
                          Cybersecurity
                        </span>
                        <span className="badge bg-light text-dark">
                          Database Management
                        </span>
                        <span className="badge bg-light text-dark">OOP</span>
                      </div>
                      <p className="mb-0">
                        <i className="bi bi-trophy-fill text-warning me-2"></i>
                        Completed capstone project: Full-stack HOA Management
                        System with RFID integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="experience-date p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2 fs-5">
                        Graduated 2021
                      </div>
                      <div className="mb-2">
                        <div className="fw-bolder">
                          Asian College Quezon City
                        </div>
                        <div className="small text-muted">
                          <i className="bi bi-geo-alt-fill me-1"></i>Quezon City
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="fw-bold text-primary">
                          Technical Vocational in
                        </div>
                        <div className="fw-bold text-primary">
                          Computer Programming
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <p className="mb-3">
                        Developed a strong foundation in programming
                        fundamentals with hands-on experience in application
                        development.
                      </p>
                      <h6 className="fw-bold text-primary mb-2">
                        Programming Languages:
                      </h6>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-light text-dark">C++</span>
                        <span className="badge bg-light text-dark">VB.NET</span>
                        <span className="badge bg-light text-dark">
                          HTML &amp; CSS
                        </span>
                      </div>
                      <p className="mb-0">
                        Completed multiple projects involving application
                        development and debugging, gaining practical
                        problem-solving skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*$1*/}
          {/*$1*/}
          <div className="pb-5"></div>
          <section>
            <h2 className="fw-bolder mb-4">
              <i className="bi bi-patch-check me-2"></i>
              <span className="text-gradient">Certificates</span>
            </h2>
            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4 hover-card">
              <div className="card-body p-4">
                <div className="row align-items-center gx-4">
                  <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
                    <div className="certificate-badge">2025</div>
                    <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mx-auto mt-3">
                      <i className="bi bi-robot"></i>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h5 className="fw-bold mb-2">
                      The AI For Communities Workshop
                    </h5>
                    <p className="text-muted small mb-3">
                      <i className="bi bi-building me-2"></i>Vjal Institute
                    </p>
                    <p className="mb-3 small">
                      Explored the transformative potential of AI tools to solve
                      real-world problems and enhance community engagement and
                      operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4 hover-card">
              <div className="card-body p-4">
                <div className="row align-items-center gx-4">
                  <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
                    <div className="certificate-badge">June 2022</div>
                    <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mx-auto mt-3">
                      <i className="bi bi-server"></i>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h5 className="fw-bold mb-2">Systems Administration</h5>
                    <p className="text-muted small mb-3">
                      <i className="bi bi-building me-2"></i>Linux Professional
                      Institute
                    </p>
                    <p className="mb-3 small">
                      Comprehensive course covering OS installation and
                      configuration, network services, and server management
                      fundamentals.
                    </p>
                    <a
                      className="btn btn-sm btn-outline-primary"
                      href="https://drive.google.com/file/d/1r8uE9ylaqf-P8Y1FNO01TdjYmDdrZ_0T/view?usp=sharing"
                      target="_blank"
                    >
                      <i className="bi bi-eye me-1"></i>View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4 hover-card">
              <div className="card-body p-4">
                <div className="row align-items-center gx-4">
                  <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
                    <div className="certificate-badge">June 2022</div>
                    <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mx-auto mt-3">
                      <i className="bi bi-cup-hot"></i>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h5 className="fw-bold mb-2">Java Foundations</h5>
                    <p className="text-muted small mb-3">
                      <i className="bi bi-building me-2"></i>Oracle Academy
                    </p>
                    <p className="mb-3 small">
                      Mastered Java fundamentals including object-oriented
                      programming, data structures, and algorithms.
                    </p>
                    <a
                      className="btn btn-sm btn-outline-primary"
                      href="https://drive.google.com/file/d/1eQySrhIcv-w0oFUCHMVYLbuOvdoVZhUu/view?usp=sharing"
                      target="_blank"
                    >
                      <i className="bi bi-eye me-1"></i>View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4 hover-card">
              <div className="card-body p-4">
                <div className="row align-items-center gx-4">
                  <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
                    <div className="certificate-badge">March 2023</div>
                    <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mx-auto mt-3">
                      <i className="bi bi-diagram-3"></i>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h5 className="fw-bold mb-2">SAP Business One</h5>
                    <p className="text-muted small mb-3">
                      <i className="bi bi-building me-2"></i>FIT Academy
                    </p>
                    <p className="mb-3 small">
                      Acquired practical skills in SAP Business One covering
                      financials, sales, purchasing, and inventory management.
                    </p>
                    <a
                      className="btn btn-sm btn-outline-primary"
                      href="https://drive.google.com/file/d/1q44FLiUiOPgiZ_pg1QxQw3MCAwsU39_3/view?usp=sharing"
                      target="_blank"
                    >
                      <i className="bi bi-eye me-1"></i>View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4 hover-card">
              <div className="card-body p-4">
                <div className="row align-items-center gx-4">
                  <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
                    <div className="certificate-badge">Feb 2025</div>
                    <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mx-auto mt-3">
                      <i className="bi bi-grid-3x3-gap"></i>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h5 className="fw-bold mb-2">AppSheet Course</h5>
                    <p className="text-muted small mb-3">
                      <i className="bi bi-building me-2"></i>Udemy
                    </p>
                    <p className="mb-3 small">
                      Developed proficiency in low-code/no-code development.
                      Created custom apps, automated processes, and managed data
                      effectively.
                    </p>
                    <a
                      className="btn btn-sm btn-outline-primary"
                      href="https://drive.google.com/file/d/1ytvU7noh6mmaLZVnjyDeNzjm99ImK1Gu/view?usp=sharing"
                      target="_blank"
                    >
                      <i className="bi bi-eye me-1"></i>View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-4 hover-card">
              <div className="card-body p-4">
                <div className="row align-items-center gx-4">
                  <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
                    <div className="certificate-badge">Feb 2025</div>
                    <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 mx-auto mt-3">
                      <i className="bi bi-table"></i>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h5 className="fw-bold mb-2">Google Sheets Course</h5>
                    <p className="text-muted small mb-3">
                      <i className="bi bi-building me-2"></i>Udemy
                    </p>
                    <p className="mb-3 small">
                      Gained comprehensive skills from basic formatting to
                      advanced data manipulation, complex queries, and data
                      joining.
                    </p>
                    <a
                      className="btn btn-sm btn-outline-primary"
                      href="https://drive.google.com/file/d/1ha7SY9tBVeHF0d8wjZ_DjjPUnNDCh4H7/view?usp=sharing"
                      target="_blank"
                    >
                      <i className="bi bi-eye me-1"></i>View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*$1*/}
          <div className="pb-5"></div>

          {/*$1*/}
          <section>
            <h2 className="fw-bolder mb-4">
              <i className="bi bi-star me-2"></i>
              <span className="text-gradient">Skills &amp; Expertise</span>
            </h2>
            {/*$1*/}
            <div className="card shadow-lg border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                {/*$1*/}
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <h3 className="fw-bolder mb-0">
                      <span className="text-gradient d-inline">
                        Languages &amp; Concepts
                      </span>
                    </h3>
                  </div>
                  <div className="row row-cols-2 row-cols-md-4 g-3">
                    <div className="col">
                      <div className="skill-item">Java (OOP)</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">C#</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">TypeScript</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">PHP</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">SQL</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">HTML/CSS</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">JavaScript</div>
                    </div>
                  </div>
                </div>

                {/*$1*/}
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-database"></i>
                    </div>
                    <h3 className="fw-bolder mb-0">
                      <span className="text-gradient d-inline">Databases</span>
                    </h3>
                  </div>
                  <div className="row row-cols-2 row-cols-md-3 g-3">
                    <div className="col">
                      <div className="skill-item">
                        Relational Database Design
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-item">Data Modelling</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">MySQL</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">MSSQL</div>
                    </div>
                  </div>
                </div>

                {/*$1*/}
                <div className="mb-0">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-tools"></i>
                    </div>
                    <h3 className="fw-bolder mb-0">
                      <span className="text-gradient d-inline">
                        Tools &amp; Methodologies
                      </span>
                    </h3>
                  </div>
                  <div className="row row-cols-2 row-cols-md-4 g-3">
                    <div className="col">
                      <div className="skill-item">Git/GitHub</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">CI/CD</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">Visual Studio</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">AI-Assisted Development</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">AppSheet</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">System Administration</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">Laravel</div>
                    </div>
                    <div className="col">
                      <div className="skill-item">React</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
