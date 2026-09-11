export default function ProjectsPage() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="site-header">
        <div className="nav-container">
          <a href="/" className="brand">
            <div className="brand-icon">CV</div>

            <div className="brand-text">
              <span className="brand-name">CVGeniusHomes</span>
              <span className="brand-tagline">
                Construction & Real Estate
              </span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            {/* <a href="/properties">Properties</a> */}
            <a href="/training">Training Institute</a>
          </nav>

          <a href="/contact" className="contact-btn">
            Contact Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <span className="projects-hero-pill">
            Built With Purpose
          </span>

          <h1>Our Projects</h1>

          <p>
            Explore the construction, renovation and property development
            projects that reflect the CVGeniusHomes commitment to quality,
            functionality and dependable project delivery.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="projects-intro">
        <div className="projects-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>OUR WORK</span>
              <div className="label-line"></div>
            </div>

            <h2>PROJECTS BUILT AROUND QUALITY & VALUE</h2>

            <p>
              Every project is an opportunity to combine sound construction,
              skilled workmanship and practical design to create spaces built
              for long-term use and value.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="projects-gallery-section">
        <div className="projects-page-container">

          <div className="projects-grid">

            {/* PROJECT 1 */}
            <article className="project-card">
              <div className="project-image-placeholder">
                <span className="project-status">Completed</span>
                <img
                  src="/residential-project.png"
                  alt="Construction artisans receiving practical skills training"
                />
              </div>

              <div className="project-card-content">
                <div className="project-meta">
                  <span>Residential Construction</span>
                  <span>Lagos, Nigeria</span>
                </div>

                <h3>Contemporary Residential Development</h3>

                <p>
                  A complete residential construction project delivered with
                  attention to structural quality, functional planning and
                  modern finishing.
                </p>

                <div className="project-details">
                  <span>New Build</span>
                  <span>Full Construction</span>
                  <span>Residential</span>
                </div>

                <a href="/contact">
                  Discuss a Similar Project
                </a>
              </div>
            </article>

            {/* PROJECT 2 */}
            <article className="project-card">
              <div className="project-image-placeholder">
                <span className="project-status ongoing-status">Ongoing</span>
                <img
                  src="/property-development-project.png"
                  alt="Construction artisans receiving practical skills training"
                />
              </div>

              <div className="project-card-content">
                <div className="project-meta">
                  <span>Property Development</span>
                  <span>Nigeria</span>
                </div>

                <h3>Multi-Unit Residential Development</h3>

                <p>
                  A residential development project focused on creating
                  functional living spaces and long-term real estate value.
                </p>

                <div className="project-details">
                  <span>Development</span>
                  <span>Multi-Unit</span>
                  <span>Residential</span>
                </div>

                <a href="/contact">
                  Discuss a Development Project
                </a>
              </div>
            </article>

            {/* PROJECT 3 */}
            <article className="project-card">
              <div className="project-image-placeholder">
                <span className="project-status">Completed</span>
                <img
                  src="/renovation-projects.png"
                  alt="Construction artisans receiving practical skills training"
                />
              </div>

              <div className="project-card-content">
                <div className="project-meta">
                  <span>Renovation & Remodeling</span>
                  <span>Lagos, Nigeria</span>
                </div>

                <h3>Residential Property Transformation</h3>

                <p>
                  A full property renovation designed to improve appearance,
                  usability and value through structural and finishing
                  upgrades.
                </p>

                <div className="project-details">
                  <span>Renovation</span>
                  <span>Interior Finishing</span>
                  <span>Upgrade</span>
                </div>

                <a href="/contact">
                  Request a Renovation Assessment
                </a>
              </div>
            </article>

            {/* PROJECT 4 */}
            <article className="project-card">
              <div className="project-image-placeholder">
                <span className="project-status ongoing-status">Ongoing</span>
                <img
                  src="/construction-site-project.png"
                  alt="Construction artisans receiving practical skills training"
                />
              </div>

              <div className="project-card-content">
                <div className="project-meta">
                  <span>Project Management</span>
                  <span>Nigeria</span>
                </div>

                <h3>Managed Residential Construction Project</h3>

                <p>
                  A professionally coordinated construction project supported
                  through site supervision, workforce management and quality
                  control.
                </p>

                <div className="project-details">
                  <span>Project Management</span>
                  <span>Supervision</span>
                  <span>Quality Control</span>
                </div>

                <a href="/contact">
                  Request Project Management Support
                </a>
              </div>
            </article>

            {/* PROJECT 5 */}
            <article className="project-card">
              <div className="project-image-placeholder">
                <span className="project-status">Completed</span>
                <img
                  src="/interior-finishing-project.png"
                  alt="Construction artisans receiving practical skills training"
                />
              </div>

              <div className="project-card-content">
                <div className="project-meta">
                  <span>Interior & Finishing</span>
                  <span>Nigeria</span>
                </div>

                <h3>Modern Interior Finishing Project</h3>

                <p>
                  Interior improvement works focused on practical use,
                  finishing quality and a clean, contemporary residential
                  environment.
                </p>

                <div className="project-details">
                  <span>Finishing</span>
                  <span>Remodeling</span>
                  <span>Residential</span>
                </div>

                <a href="/contact">
                  Start a Finishing Project
                </a>
              </div>
            </article>

            {/* PROJECT 6 */}
            <article className="project-card">
              <div className="project-image-placeholder">
                <span className="project-status">Completed</span>
                <img
                  src="/site-workforce-project.png"
                  alt="Construction artisans receiving practical skills training"
                />
              </div>

              <div className="project-card-content">
                <div className="project-meta">
                  <span>Skilled Workforce</span>
                  <span>CVGeniusHomes</span>
                </div>

                <h3>Artisan-Led Construction Delivery</h3>

                <p>
                  Construction work supported by skilled artisans with
                  practical site experience, professional supervision and
                  disciplined project coordination.
                </p>

                <div className="project-details">
                  <span>Skilled Labour</span>
                  <span>Apprenticeship</span>
                  <span>Site Experience</span>
                </div>

                <a href="/training">
                  Explore the Training Institute
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* PROJECT CATEGORIES */}
      <section className="project-categories">
        <div className="projects-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>PROJECT TYPES</span>
              <div className="label-line"></div>
            </div>

            <h2>THE PROJECTS WE DELIVER</h2>

            <p>
              Our construction and real estate capabilities support different
              project needs across residential building, development,
              renovation and management.
            </p>
          </div>

          <div className="project-category-grid">

            <div className="project-category-card">
              <span>01</span>
              <h3>Residential Construction</h3>
              <p>
                New residential buildings delivered from structural work
                through finishing and handover.
              </p>
            </div>

            <div className="project-category-card">
              <span>02</span>
              <h3>Property Development</h3>
              <p>
                Residential development opportunities designed around
                functionality, market needs and long-term value.
              </p>
            </div>

            <div className="project-category-card">
              <span>03</span>
              <h3>Renovation Projects</h3>
              <p>
                Modernisation, remodeling and property improvement projects for
                existing residential spaces.
              </p>
            </div>

            <div className="project-category-card">
              <span>04</span>
              <h3>Project Management</h3>
              <p>
                Professional planning, coordination, supervision and quality
                oversight for construction projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DELIVERY STANDARDS */}
      <section className="project-standards">
        <div className="projects-page-container project-standards-grid">

          <div>
            <div className="about-section-label">
              <span>PROJECT DELIVERY</span>
              <div></div>
            </div>

            <h2>HOW WE APPROACH EVERY PROJECT</h2>

            <p>
              Successful construction requires more than materials and labour.
              It requires planning, coordination, accountability and consistent
              attention to quality.
            </p>

            <ul>
              <li>
                <strong>Clear Project Scope:</strong> We begin by understanding
                what needs to be delivered and the expectations around the
                project.
              </li>

              <li>
                <strong>Professional Coordination:</strong> Site activities,
                materials, workforce and timelines are coordinated throughout
                the project lifecycle.
              </li>

              <li>
                <strong>Quality Monitoring:</strong> Workmanship and execution
                are reviewed throughout construction to maintain project
                standards.
              </li>

              <li>
                <strong>Skilled Workforce:</strong> Our delivery model is
                supported by experienced professionals and practically trained
                artisans.
              </li>
            </ul>

            <a href="/contact" className="project-standards-link">
              Discuss Your Project
            </a>
          </div>

          <div className="project-large-placeholder">
            <img
              src="/featured-construction-project.png"
              alt="Construction artisans receiving practical skills training"
            />
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Have a Project You Want to Bring to Life?</h2>

          <p>
            Tell us what you want to build, renovate or develop and let
            CVGeniusHomes help you plan the next step.
          </p>

          <div className="final-cta-buttons">
            <a href="/contact" className="cta-primary">
              Request a Project Quote
            </a>

            <a href="/services" className="cta-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-grid">

            <div className="footer-brand">
              <div className="footer-logo-row">
                <div className="footer-logo">CV</div>
                <span>CVGeniusHomes</span>
              </div>

              <h4>
                Construction, Real Estate & Skilled Workforce Development
              </h4>

              <p>
                Delivering quality construction and property development
                solutions while developing skilled artisans through practical
                apprenticeship training and real project experience.
              </p>

              <p className="footer-contact">Nigeria</p>
              <p className="footer-contact">Phone: +234 708 913 0311</p>
              <p className="footer-contact">Email: hello@cvgeniushomes.com.ng</p>
            </div>

            <div className="footer-column">
              <h3>Navigation</h3>

              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/services">Our Services</a>
              <a href="/projects">Projects</a>
              <a href="/properties">Properties</a>
              <a href="/contact">Contact Us</a>
            </div>

            <div className="footer-column">
              <h3>Our Services</h3>

              <a href="/services">Residential Construction</a>
              <a href="/services">Property Development</a>
              <a href="/services">Renovation & Remodeling</a>
              <a href="/services">Project Management</a>
              <a href="/services">Site Supervision</a>
            </div>

            <div className="footer-column footer-enquiry">
              <h3>Project & Training Enquiries</h3>

              <p>
                Planning a construction project or interested in developing
                professional construction skills?
              </p>

              <a href="/contact" className="footer-action">
                Request a Project Quote
              </a>

              <a href="/training" className="footer-action">
                Visit Training Institute
              </a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-tags">
            <span>Quality Construction</span>
            <span>Professional Project Delivery</span>
            <span>Skilled Artisan Development</span>
            <span>Real Estate Solutions</span>
          </div>

          <p>
            © 2026 <strong>CVGeniusHomes</strong>. All Rights Reserved.
          </p>

          <p className="footer-bottom-text">
            Construction • Real Estate • Training Institute
          </p>
        </div>
      </footer>
    </main>
  );
}