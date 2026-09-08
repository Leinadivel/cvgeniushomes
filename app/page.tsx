export default function Home() {
  return (
    <main>
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

      <section className="hero-slider">
        <div className="hero-overlay"></div>

        <div className="hero-slide-content">
          <span className="hero-pill">
            Construction & Real Estate
          </span>

          <h1>
            Building Quality Homes. Creating Skilled Careers.
          </h1>

          <p>
            From residential construction and property development to practical
            artisan training, CVGeniusHomes builds spaces and develops the people
            who bring them to life.
          </p>
        </div>

        <button className="slider-arrow slider-arrow-left">
          ‹
        </button>

        <button className="slider-arrow slider-arrow-right">
          ›
        </button>

        <div className="slider-dots">
          <span className="dot active-dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-strip-container">
          <div>Quality Construction</div>
          <div>Skilled Workforce Development</div>
          <div>Practical Apprenticeship Training</div>
          <div>Real Estate Expertise</div>
        </div>
      </section>

      <section className="core-services">
        <div className="section-container">

          <div className="section-heading">
            <div className="section-label">
              <span>OUR EXPERTISE</span>
              <div className="label-line"></div>
            </div>

            <h2>CONSTRUCTION & REAL ESTATE SOLUTIONS</h2>

            <p>
              From new builds and property development to renovations and project
              management, we provide practical solutions designed around quality,
              functionality and long-term value.
            </p>
          </div>


          {/* SERVICE 1 */}
          <div className="service-row">

            <div className="service-image">
              <span className="service-badge">Most Requested</span>

              <img
                src="/residential-construction.png"
                alt="Residential building construction"
              />
            </div>

            <div className="service-info">
              <div className="service-category">
                Residential Construction

                <span className="service-tag">
                  Complete Building Solution
                </span>
              </div>

              <h3>Residential Building Construction</h3>

              <p>
                From foundation to finishing, we deliver complete residential
                construction projects with attention to structural quality,
                functionality and detail.
              </p>

              <div className="service-features">
                <span>New Builds</span>
                <span>Structural Works</span>
                <span>Finishing</span>
                <span>Turnkey Delivery</span>
              </div>
            </div>

            <div className="service-quote">
              <span className="quote-small">PROJECT ESTIMATE</span>

              <strong>Available on Request</strong>

              <p>Residential & Multi-Unit Projects</p>

              <a href="/services">
                Service Details
              </a>

              <a href="/contact" className="outline-btn">
                Request a Quote
              </a>
            </div>

          </div>


          {/* SERVICE 2 */}
          <div className="service-row">

            <div className="service-image">
              <span className="service-badge">Real Estate</span>

              <img
                src="/property-development.png"
                alt="Modern residential property development"
              />
            </div>

            <div className="service-info">
              <div className="service-category">
                Property Development

                <span className="service-tag">
                  Development & Investment
                </span>
              </div>

              <h3>Real Estate & Property Development</h3>

              <p>
                We identify, plan and develop residential property opportunities
                designed to create functional spaces and sustainable real estate
                value.
              </p>

              <div className="service-features">
                <span>Development Planning</span>
                <span>Residential Projects</span>
                <span>Property Investment</span>
                <span>Project Delivery</span>
              </div>
            </div>

            <div className="service-quote">
              <span className="quote-small">PROJECT ESTIMATE</span>

              <strong>Available on Request</strong>

              <p>Development & Investment Projects</p>

              <a href="/services">
                Service Details
              </a>

              <a href="/contact" className="outline-btn">
                Request a Quote
              </a>
            </div>

          </div>


          {/* SERVICE 3 */}
          <div className="service-row">

            <div className="service-image">
              <span className="service-badge gold-badge">Transformation</span>

              <img
                src="/renovation-project.png"
                alt="Property renovation and remodeling"
              />
            </div>

            <div className="service-info">
              <div className="service-category">
                Renovation & Remodeling

                <span className="service-tag">
                  Property Improvement
                </span>
              </div>

              <h3>Renovation & Property Remodeling</h3>

              <p>
                We transform existing properties through structural improvements,
                modern finishes and carefully planned upgrades that improve both
                functionality and appearance.
              </p>

              <div className="service-features">
                <span>Home Renovation</span>
                <span>Remodeling</span>
                <span>Interior Finishing</span>
                <span>Property Upgrades</span>
              </div>
            </div>

            <div className="service-quote">
              <span className="quote-small">PROJECT ESTIMATE</span>

              <strong>Available on Request</strong>

              <p>Small & Large Renovation Projects</p>

              <a href="/services">
                Service Details
              </a>

              <a href="/contact" className="outline-btn">
                Request a Quote
              </a>
            </div>

          </div>


          {/* SERVICE 4 */}
          <div className="service-row">

            <div className="service-image">
              <span className="service-badge dark-badge">
                Professional Service
              </span>

              <img
                src="/project-management.png"
                alt="Construction project management team"
              />
            </div>

            <div className="service-info">
              <div className="service-category">
                Construction Management

                <span className="service-tag">
                  Professional Oversight
                </span>
              </div>

              <h3>Construction & Project Management</h3>

              <p>
                From planning to final handover, our team coordinates people,
                materials, schedules and quality standards throughout the
                construction process.
              </p>

              <div className="service-features">
                <span>Planning</span>
                <span>Site Supervision</span>
                <span>Quality Control</span>
                <span>Project Coordination</span>
              </div>
            </div>

            <div className="service-quote">
              <span className="quote-small">CONSULTATION</span>

              <strong>Available on Request</strong>

              <p>Professional Project Support</p>

              <a href="/services">
                Service Details
              </a>

              <a href="/contact" className="outline-btn">
                Request a Consultation
              </a>
            </div>

          </div>

        </div>
      </section>

      <section className="project-options">
        <div className="section-container">

          <div className="section-heading">
            <div className="section-label">
              <span>PROJECT OPTIONS</span>
              <div className="label-line"></div>
            </div>

            <h2>CHOOSE HOW YOU WANT TO WORK WITH US</h2>

            <p>
              Whether you want us to construct your property from the ground up or
              partner with you on a development opportunity, we provide flexible
              solutions built around your project goals.
            </p>
          </div>

          <div className="project-options-grid">

            <div className="project-option-card featured-option">
              <span className="option-badge">
                Best for Property Owners
              </span>

              <h3>Build With CVGeniusHomes</h3>

              <p>
                Our construction team manages your project from planning and
                structural work through finishing and final handover.
              </p>

              <ul>
                <li>Complete residential construction</li>
                <li>Professional site supervision</li>
                <li>Material and workforce coordination</li>
                <li>Quality control throughout the project</li>
              </ul>

              <a href="/contact" className="option-link">
                Request a Construction Quote
              </a>
            </div>

            <div className="project-option-card">
              <h3>Develop With CVGeniusHomes</h3>

              <p>
                We work with landowners, investors and partners to transform
                property opportunities into well-planned residential developments.
              </p>

              <ul>
                <li>Development planning and feasibility</li>
                <li>Residential property development</li>
                <li>Construction and project execution</li>
                <li>Investment and partnership opportunities</li>
              </ul>

              <a href="/contact" className="option-link">
                Discuss a Development Project
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="section-container">

          <div className="section-heading">
            <div className="section-label">
              <span>WHY CVGENIUSHOMES</span>
              <div className="label-line"></div>
            </div>

            <h2>BUILT ON QUALITY, SKILL & ACCOUNTABILITY</h2>

            <p>
              We combine construction expertise, disciplined project management
              and a skilled workforce to deliver dependable results from planning
              to final handover.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-item">
              <span className="why-number">01</span>
              <h3>Experienced Construction Team</h3>
              <p>
                Our projects are handled by experienced professionals who understand
                structural quality, workmanship, coordination and practical site
                execution.
              </p>
            </div>

            <div className="why-item">
              <span className="why-number">02</span>
              <h3>Quality-Driven Project Delivery</h3>
              <p>
                Every stage of construction is approached with attention to detail,
                material quality and standards that support long-term durability.
              </p>
            </div>

            <div className="why-item">
              <span className="why-number">03</span>
              <h3>Transparent Project Management</h3>
              <p>
                We maintain clear communication, structured planning and proper
                coordination throughout the project lifecycle.
              </p>
            </div>

            <div className="why-item">
              <span className="why-number">04</span>
              <h3>Skilled Artisan Workforce</h3>
              <p>
                Our workforce is built around skilled artisans who understand the
                importance of professional workmanship, safety and project quality.
              </p>
            </div>

            <div className="why-item">
              <span className="why-number">05</span>
              <h3>Practical Workforce Development</h3>
              <p>
                Through our Training Institute, apprentices gain hands-on
                construction skills and real-world site exposure under experienced
                professionals.
              </p>
            </div>

            <div className="why-item">
              <span className="why-number">06</span>
              <h3>From Training to Employment</h3>
              <p>
                Outstanding trainees can progress from apprenticeship into
                employment opportunities within CVGeniusHomes and our construction
                projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-container">

          <div className="section-heading">
            <div className="section-label">
              <span>OUR PROCESS</span>
              <div className="label-line"></div>
            </div>

            <h2>START YOUR PROJECT IN 3 SIMPLE STEPS</h2>

            <p>
              We make it easy to move from your initial idea to a properly planned
              and professionally executed construction project.
            </p>
          </div>

          <div className="process-grid">

            <div className="process-card">
              <div className="process-number">1</div>

              <h3>Tell Us About Your Project</h3>

              <p>
                Share your construction, renovation or property development needs
                with our team and tell us what you want to achieve.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">2</div>

              <h3>Planning & Project Assessment</h3>

              <p>
                We assess the project requirements, scope, site conditions and
                delivery needs before preparing the appropriate project approach.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">3</div>

              <h3>Construction & Delivery</h3>

              <p>
                Once approved, our team coordinates the workforce, materials and
                site activities through construction and final handover.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="faq-section">
        <div className="section-container">

          <div className="section-heading">
            <div className="section-label">
              <span>PROJECT QUESTIONS</span>
              <div className="label-line"></div>
            </div>

            <h2>FREQUENTLY ASKED QUESTIONS</h2>

            <p>
              Helpful answers about our construction process, project requirements,
              property development services and artisan training programme.
            </p>
          </div>

          <div className="faq-list">

            <details className="faq-item" open>
              <summary>
                How do I get a construction estimate for my project?
              </summary>

              <div className="faq-answer">
                <p>
                  Start by contacting our team with basic information about your
                  project, including the type of property, location, expected scope
                  of work and any available drawings or plans. We will review the
                  requirements and advise on the next steps for assessment and
                  quotation.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Can CVGeniusHomes handle a project from start to finish?
              </summary>

              <div className="faq-answer">
                <p>
                  Yes. Depending on the project scope, we can coordinate planning,
                  structural works, skilled labour, finishing, supervision and final
                  delivery as part of a complete construction solution.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Do you work with landowners and property investors?
              </summary>

              <div className="faq-answer">
                <p>
                  Yes. CVGeniusHomes works with landowners, investors and development
                  partners on residential property opportunities, construction
                  projects and suitable real estate development arrangements.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Do you handle renovation and remodeling projects?
              </summary>

              <div className="faq-answer">
                <p>
                  Yes. We undertake property renovation, remodeling, structural
                  improvements, interior finishing and upgrade projects based on the
                  condition and requirements of the property.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                What is the CVGeniusHomes Training Institute?
              </summary>

              <div className="faq-answer">
                <p>
                  The Training Institute is our practical apprenticeship and
                  workforce-development arm. Aspiring artisans receive hands-on
                  construction training, practical site exposure and opportunities
                  to develop skills that can lead to work within the construction
                  industry.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Can trainees eventually work with CVGeniusHomes?
              </summary>

              <div className="faq-answer">
                <p>
                  Successful trainees who demonstrate strong practical skills,
                  professionalism and reliability may be considered for employment
                  opportunities on CVGeniusHomes projects as opportunities become
                  available.
                </p>
              </div>
            </details>

          </div>

        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-content">

          <h2>Ready to Start Your Next Project?</h2>

          <p>
            Tell us what you want to build, renovate or develop and let our team
            help you move from idea to execution.
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

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-grid">

            <div className="footer-brand">
              <div className="footer-logo-row">
                <div className="footer-logo">CV</div>

                <span>CVGeniusHomes</span>
              </div>

              <h4>Construction, Real Estate & Skilled Workforce Development</h4>

              <p>
                Delivering quality construction and property development solutions
                while developing skilled artisans through practical apprenticeship
                training and real project experience.
              </p>

              <p className="footer-contact">
                Nigeria
              </p>

              <p className="footer-contact">
                Phone: Coming Soon
              </p>

              <p className="footer-contact">
                Email: Coming Soon
              </p>
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