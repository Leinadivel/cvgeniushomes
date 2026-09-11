import ContactForm from "./ContactForm";

export default function ContactPage() {
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
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-hero-pill">
            Let&apos;s Talk
          </span>

          <h1>Contact CVGeniusHomes</h1>

          <p>
            Whether you want to start a construction project, enquire about a
            property, discuss a development opportunity or apply to our
            Training Institute, our team is ready to hear from you.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="contact-intro">
        <div className="contact-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>GET IN TOUCH</span>
              <div className="label-line"></div>
            </div>

            <h2>HOW CAN WE HELP YOU?</h2>

            <p>
              Send us your enquiry and choose the area that best matches what
              you need. Our team can then guide you on the appropriate next
              step.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + DETAILS */}
      <section className="contact-main-section">
        <div className="contact-page-container contact-main-grid">

          {/* FORM */}
          <ContactForm />

          {/* CONTACT INFORMATION */}
          <div className="contact-information">
            <div className="contact-direct-card">
              <div className="about-section-label">
                <span>CONTACT DETAILS</span>
                <div></div>
              </div>

              <h3>Speak With Our Team</h3>

              <div className="contact-direct-item">
                <small>PHONE</small>
                <strong>+234 708 913 0311</strong>
              </div>

              <div className="contact-direct-item">
                <small>EMAIL</small>
                <strong>hello@cvgeniushomes.com.ng</strong>
              </div>

              <div className="contact-direct-item">
                <small>LOCATION</small>
                <strong>Nigeria</strong>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="contact-info-number">01</span>

              <h3>Project Enquiries</h3>

              <p>
                Planning a new build, renovation or construction project?
                Contact our team with your project location, scope and available
                information.
              </p>

              <a href="/services">
                Explore Our Services
              </a>
            </div>

            <div className="contact-info-card">
              <span className="contact-info-number">02</span>

              <h3>Property Enquiries</h3>

              <p>
                Interested in a property, new development or investment
                opportunity? Tell us what you are looking for and your
                preferred location.
              </p>

              <a href="/properties">
                View Properties
              </a>
            </div>

            <div className="contact-info-card">
              <span className="contact-info-number">03</span>

              <h3>Training Institute</h3>

              <p>
                Interested in Bricklaying, Carpentry & Joinery, Plumbing,
                Electrical Installation, Wall & Floor Tiling or Glazing?
                Contact the Training Institute for application guidance.
              </p>

              <a href="/training">
                View Training Programme
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ENQUIRY OPTIONS */}
      <section className="contact-options">
        <div className="contact-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>WHAT ARE YOU CONTACTING US ABOUT?</span>
              <div className="label-line"></div>
            </div>

            <h2>CHOOSE THE RIGHT CONVERSATION</h2>

            <p>
              Different enquiries need different information. Here&apos;s what
              helps us respond to you more effectively.
            </p>
          </div>

          <div className="contact-options-grid">

            <div className="contact-option-card">
              <span>01</span>

              <h3>Construction Project</h3>

              <p>
                Tell us the project type, location, size and whether you already
                have drawings or plans available.
              </p>
            </div>

            <div className="contact-option-card">
              <span>02</span>

              <h3>Property Enquiry</h3>

              <p>
                Share your preferred property type, location and expected
                budget range so we can guide you appropriately.
              </p>
            </div>

            <div className="contact-option-card">
              <span>03</span>

              <h3>Development Partnership</h3>

              <p>
                Landowners and investors can provide basic property information
                and explain the type of development partnership they are
                considering.
              </p>
            </div>

            <div className="contact-option-card">
              <span>04</span>

              <h3>Training Application</h3>

              <p>
                Tell us your preferred trade and contact details so the
                Training Institute can guide you through the application
                process.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FAQ */}
      <section className="contact-faq">
        <div className="contact-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>BEFORE YOU CONTACT US</span>
              <div className="label-line"></div>
            </div>

            <h2>QUICK ANSWERS</h2>

            <p>
              A few helpful answers before you send your enquiry.
            </p>
          </div>

          <div className="faq-list">

            <details className="faq-item" open>
              <summary>
                What information should I send for a construction quotation?
              </summary>

              <div className="faq-answer">
                <p>
                  Send your project location, property type, expected scope and
                  any available architectural drawings, plans or supporting
                  information. Our team can then advise on the next step.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Can I contact you even if my project is still at idea stage?
              </summary>

              <div className="faq-answer">
                <p>
                  Yes. You do not need to have every detail completed before
                  contacting us. Explain what you are trying to achieve and we
                  can guide you on what information may be needed next.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Can landowners discuss development partnerships with you?
              </summary>

              <div className="faq-answer">
                <p>
                  Yes. Landowners and potential investment partners can contact
                  us to discuss suitable residential property development
                  opportunities.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                How do I apply to the Training Institute?
              </summary>

              <div className="faq-answer">
                <p>
                  Visit the Training Institute page to review the available
                  trades and apprenticeship programme, then submit your
                  application or contact us for guidance.
                </p>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Let&apos;s Start the Conversation</h2>

          <p>
            From construction and real estate to practical artisan training,
            send us your enquiry and let us help you take the next step.
          </p>

          <div className="final-cta-buttons">
            <a href="#contact-form" className="cta-primary">
              Send an Enquiry
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
              <a href="/training">Training Institute</a>
            </div>

            <div className="footer-column footer-enquiry">
              <h3>Enquiries</h3>

              <p>
                Contact us about construction, properties, development
                opportunities or apprenticeship training.
              </p>

              <a href="/contact" className="footer-action">
                Send an Enquiry
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
            <span>Property Development</span>
            <span>Project Enquiries</span>
            <span>Training Institute</span>
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