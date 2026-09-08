export default function AboutPage() {
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

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-hero-pill">
            Construction. Development. Skills.
          </span>

          <h1>About CVGeniusHomes</h1>

          <p>
            Building quality homes, developing valuable properties and
            creating a new generation of skilled construction professionals.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-intro">
        <div className="about-page-container about-intro-grid">

          <div className="about-image-placeholder">
            <img
              src="/company-project.png"
              alt="CVGeniusHomes construction professionals reviewing a building project"
            />
          </div>

          <div className="about-intro-content">
            <div className="about-section-label">
              <span>WHO WE ARE</span>
              <div></div>
            </div>

            <h2>
              BUILDING HOMES. DEVELOPING PEOPLE. CREATING LASTING VALUE.
            </h2>

            <p>
              <strong>CVGeniusHomes</strong> is a real estate construction
              and property development company focused on delivering quality
              residential projects through professional construction,
              disciplined project management and skilled workmanship.
            </p>

            <p>
              Our approach goes beyond constructing buildings. We are building
              an ecosystem that combines property development with practical
              workforce development. Through the CVGeniusHomes Training
              Institute, aspiring artisans are equipped with relevant
              construction skills, practical site exposure and the
              professional standards required to succeed in the industry.
            </p>

            <div className="about-mini-grid">
              <div className="about-mini-card">
                <h3>Construction Expertise</h3>
                <p>
                  Residential construction, renovations and property
                  development delivered with professional oversight.
                </p>
              </div>

              <div className="about-mini-card">
                <h3>Workforce Development</h3>
                <p>
                  Practical apprenticeship training designed to develop
                  competent and employable artisans.
                </p>
              </div>
            </div>

            <div className="about-buttons">
              <a href="/services">Explore Our Services</a>

              <a href="/contact" className="about-outline-btn">
                Get in Touch
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CORE STANDARDS */}
      <section className="about-standards">
        <div className="about-page-container">

          <div className="section-heading">
            <div className="section-label">
              <span>OUR CORE STANDARDS</span>
              <div className="label-line"></div>
            </div>

            <h2>WHY CLIENTS CHOOSE CVGENIUSHOMES</h2>

            <p>
              From responsible project management to skilled workmanship and
              practical workforce development, our standards guide every
              project we deliver.
            </p>
          </div>

          <div className="about-standards-grid">

            <div className="about-standard-item">
              <span>01</span>
              <h3>Quality-Focused Construction</h3>
              <p>
                We approach every project with strong attention to structural
                quality, materials, workmanship and long-term durability.
              </p>
            </div>

            <div className="about-standard-item">
              <span>02</span>
              <h3>Professional Project Management</h3>
              <p>
                Projects are supported by structured planning, site
                coordination, supervision and clear communication throughout
                the delivery process.
              </p>
            </div>

            <div className="about-standard-item">
              <span>03</span>
              <h3>Skilled Workforce</h3>
              <p>
                We work with skilled construction professionals and artisans
                who understand the importance of quality, safety and
                responsible workmanship.
              </p>
            </div>

            <div className="about-standard-item">
              <span>04</span>
              <h3>Practical Training</h3>
              <p>
                Our Training Institute develops apprentices through practical
                learning, guided instruction and exposure to real construction
                environments.
              </p>
            </div>

            <div className="about-standard-item">
              <span>05</span>
              <h3>Training-to-Employment Pathway</h3>
              <p>
                Strong-performing trainees can develop into employment-ready
                artisans and may be considered for suitable opportunities
                within our projects.
              </p>
            </div>

            <div className="about-standard-item">
              <span>06</span>
              <h3>Long-Term Value</h3>
              <p>
                Our goal is to create value beyond project completion through
                durable properties, skilled people and sustainable
                construction capability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WORKFORCE SECTION */}
      <section className="about-workforce">
        <div className="about-page-container about-workforce-grid">

          <div className="about-workforce-content">
            <div className="about-section-label">
              <span>BUILDING THE WORKFORCE</span>
              <div></div>
            </div>

            <h2>DEVELOPING THE SKILLED HANDS BEHIND QUALITY CONSTRUCTION</h2>

            <p>
              We believe the strength of the construction industry depends on
              the quality of the people doing the work. That is why
              CVGeniusHomes invests in practical skills development alongside
              its real estate and construction operations.
            </p>

            <ul>
              <li>
                <strong>Hands-On Apprenticeship:</strong> Trainees learn
                practical construction skills through guided instruction and
                real-world application.
              </li>

              <li>
                <strong>Real Site Exposure:</strong> Apprentices are introduced
                to professional construction environments, project routines
                and workmanship standards.
              </li>

              <li>
                <strong>Professional Development:</strong> Training includes
                the discipline, reliability and safety awareness expected on
                professional construction projects.
              </li>

              <li>
                <strong>Employment Pathway:</strong> Skilled and dependable
                trainees may progress into suitable work opportunities within
                CVGeniusHomes projects.
              </li>
            </ul>

            <a href="/training" className="about-training-link">
              Explore the Training Institute
            </a>
          </div>

          <div className="about-image-placeholder about-workforce-image">
            <img
              src="/artisan-training.png"
              alt="Construction artisans receiving practical skills training"
            />
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
              <p className="footer-contact">Phone: Coming Soon</p>
              <p className="footer-contact">Email: Coming Soon</p>
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
