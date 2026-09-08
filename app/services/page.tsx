export default function ServicesPage() {
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
            <a href="/properties">Properties</a>
            <a href="/training">Training Institute</a>
          </nav>

          <a href="/contact" className="contact-btn">
            Contact Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-hero-pill">
            Construction & Property Solutions
          </span>

          <h1>Our Services</h1>

          <p>
            From new residential builds and renovations to property development
            and professional project management, CVGeniusHomes provides
            practical construction solutions designed around quality,
            functionality and long-term value.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro">
        <div className="services-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>WHAT WE DO</span>
              <div className="label-line"></div>
            </div>

            <h2>COMPLETE CONSTRUCTION & REAL ESTATE SERVICES</h2>

            <p>
              Whether you are building from the ground up, improving an
              existing property or developing a real estate opportunity, our
              team provides coordinated support from planning through final
              delivery.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="services-list-section">
        <div className="services-page-container services-list">

          {/* SERVICE 1 */}
          <div className="services-detail-row">
            <div className="services-detail-image">
              <span>Residential Construction Image</span>
            </div>

            <div className="services-detail-content">
              <div className="about-section-label">
                <span>RESIDENTIAL CONSTRUCTION</span>
                <div></div>
              </div>

              <h2>Residential Building Construction</h2>

              <p>
                We deliver complete residential construction projects with a
                focus on structural quality, practical design, professional
                workmanship and reliable project coordination.
              </p>

              <p>
                Our team can support projects from early-stage planning through
                structural works, finishing and final handover depending on the
                agreed scope.
              </p>

              <div className="services-feature-grid">
                <div>New Residential Builds</div>
                <div>Foundation & Structural Works</div>
                <div>Finishing & Fit-Out</div>
                <div>Turnkey Construction</div>
              </div>

              <a href="/contact" className="services-primary-link">
                Request a Construction Quote
              </a>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="services-detail-row reverse-row">
            <div className="services-detail-content">
              <div className="about-section-label">
                <span>PROPERTY DEVELOPMENT</span>
                <div></div>
              </div>

              <h2>Real Estate & Property Development</h2>

              <p>
                We support the planning and development of residential property
                opportunities for landowners, investors and development
                partners.
              </p>

              <p>
                From concept development to construction execution, our goal is
                to create functional properties that deliver sustainable value
                and respond to real market needs.
              </p>

              <div className="services-feature-grid">
                <div>Development Planning</div>
                <div>Residential Development</div>
                <div>Investment Partnerships</div>
                <div>Project Delivery</div>
              </div>

              <a href="/contact" className="services-primary-link">
                Discuss a Development Project
              </a>
            </div>

            <div className="services-detail-image">
              <span>Property Development Image</span>
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="services-detail-row">
            <div className="services-detail-image">
              <span>Renovation Image</span>
            </div>

            <div className="services-detail-content">
              <div className="about-section-label">
                <span>RENOVATION & REMODELING</span>
                <div></div>
              </div>

              <h2>Renovation & Property Remodeling</h2>

              <p>
                We upgrade and transform existing properties through carefully
                planned renovation, remodeling and improvement works.
              </p>

              <p>
                Whether the goal is to modernise a home, improve functionality
                or restore a property for better use, our team coordinates the
                required construction and finishing works.
              </p>

              <div className="services-feature-grid">
                <div>Home Renovation</div>
                <div>Structural Improvements</div>
                <div>Interior Finishing</div>
                <div>Property Upgrades</div>
              </div>

              <a href="/contact" className="services-primary-link">
                Request a Renovation Assessment
              </a>
            </div>
          </div>

          {/* SERVICE 4 */}
          <div className="services-detail-row reverse-row">
            <div className="services-detail-content">
              <div className="about-section-label">
                <span>PROJECT MANAGEMENT</span>
                <div></div>
              </div>

              <h2>Construction & Project Management</h2>

              <p>
                We provide structured project coordination for clients who need
                professional oversight across construction activities,
                timelines, people and materials.
              </p>

              <p>
                Our role is to keep projects organised, properly supervised and
                aligned with the agreed scope from commencement through
                completion.
              </p>

              <div className="services-feature-grid">
                <div>Project Planning</div>
                <div>Site Coordination</div>
                <div>Schedule Management</div>
                <div>Quality Control</div>
              </div>

              <a href="/contact" className="services-primary-link">
                Request Project Management Support
              </a>
            </div>

            <div className="services-detail-image">
              <span>Project Management Image</span>
            </div>
          </div>

          {/* SERVICE 5 */}
          <div className="services-detail-row">
            <div className="services-detail-image">
              <span>Site Supervision Image</span>
            </div>

            <div className="services-detail-content">
              <div className="about-section-label">
                <span>SITE SUPERVISION</span>
                <div></div>
              </div>

              <h2>Construction Site Supervision</h2>

              <p>
                Good construction requires consistent oversight. Our site
                supervision service helps ensure that work progresses according
                to the project requirements, agreed standards and expected
                quality.
              </p>

              <p>
                We coordinate site activities, monitor workmanship and support
                better communication between contractors, artisans and project
                stakeholders.
              </p>

              <div className="services-feature-grid">
                <div>Site Monitoring</div>
                <div>Workforce Coordination</div>
                <div>Quality Checks</div>
                <div>Progress Reporting</div>
              </div>

              <a href="/contact" className="services-primary-link">
                Request Site Supervision
              </a>
            </div>
          </div>

          {/* SERVICE 6 */}
          <div className="services-detail-row reverse-row">
            <div className="services-detail-content">
              <div className="about-section-label">
                <span>SKILLED WORKFORCE</span>
                <div></div>
              </div>

              <h2>Skilled Artisan Workforce</h2>

              <p>
                CVGeniusHomes is building a reliable workforce of trained
                artisans capable of supporting professional construction
                projects across different trades.
              </p>

              <p>
                Through our Training Institute and apprenticeship system, we
                develop practical skills, workplace discipline and real-site
                experience that strengthen our construction delivery capacity.
              </p>

              <div className="services-feature-grid">
                <div>Trained Artisans</div>
                <div>Practical Site Experience</div>
                <div>Workmanship Standards</div>
                <div>Workforce Development</div>
              </div>

              <a href="/training" className="services-primary-link">
                Explore the Training Institute
              </a>
            </div>

            <div className="services-detail-image">
              <span>Skilled Artisan Workforce Image</span>
            </div>
          </div>

        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="services-process">
        <div className="services-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>HOW WE DELIVER</span>
              <div className="label-line"></div>
            </div>

            <h2>FROM IDEA TO COMPLETION</h2>

            <p>
              Every project is different, but our process is built around
              clarity, professional coordination and dependable execution.
            </p>
          </div>

          <div className="services-process-grid">

            <div className="services-process-card">
              <span>01</span>
              <h3>Project Consultation</h3>
              <p>
                We understand your goals, project type, location, requirements
                and expected outcome.
              </p>
            </div>

            <div className="services-process-card">
              <span>02</span>
              <h3>Assessment & Planning</h3>
              <p>
                We review the project scope, site conditions, technical needs
                and delivery approach.
              </p>
            </div>

            <div className="services-process-card">
              <span>03</span>
              <h3>Execution</h3>
              <p>
                Our team coordinates construction activities, skilled labour,
                materials and site operations.
              </p>
            </div>

            <div className="services-process-card">
              <span>04</span>
              <h3>Quality & Handover</h3>
              <p>
                Work is reviewed throughout the process before final completion
                and project handover.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE CTA */}
      <section className="services-consultation">
        <div className="services-page-container services-consultation-grid">

          <div>
            <div className="about-section-label">
              <span>NEED HELP WITH A PROJECT?</span>
              <div></div>
            </div>

            <h2>LET&apos;S DISCUSS WHAT YOU WANT TO BUILD</h2>

            <p>
              Whether you already have drawings and project plans or you are
              still at the early idea stage, our team can help you understand
              the next step.
            </p>
          </div>

          <div className="services-consultation-card">
            <h3>Start a Project Conversation</h3>

            <p>
              Tell us about your construction, renovation or development
              requirements and we will guide you on the appropriate next step.
            </p>

            <a href="/contact">
              Contact Our Team
            </a>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Ready to Start Your Next Project?</h2>

          <p>
            Tell us what you want to build, renovate or develop and let our
            team help you move from idea to execution.
          </p>

          <div className="final-cta-buttons">
            <a href="/contact" className="cta-primary">
              Request a Project Quote
            </a>

            <a href="/contact" className="cta-secondary">
              Contact Our Team
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