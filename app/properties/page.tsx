export default function PropertiesPage() {
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
      <section className="properties-hero">
        <div className="properties-hero-content">
          <span className="properties-hero-pill">
            Property & Investment Opportunities
          </span>

          <h1>Properties</h1>

          <p>
            Explore residential properties and development opportunities
            designed around quality construction, practical living and
            long-term real estate value.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="properties-intro">
        <div className="properties-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>REAL ESTATE</span>
              <div className="label-line"></div>
            </div>

            <h2>FIND A PROPERTY THAT FITS YOUR NEXT MOVE</h2>

            <p>
              Whether you are looking for a new home, an investment property
              or an opportunity within one of our developments, CVGeniusHomes
              helps you explore practical real estate options with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY LISTINGS */}
      <section className="properties-list-section">
        <div className="properties-page-container">

          <div className="properties-grid">

            {/* PROPERTY 1 */}
            <article className="property-card">
              <div className="property-image-placeholder">
                <span className="property-badge">For Sale</span>
                <span>Property Image</span>
              </div>

              <div className="property-card-content">
                <div className="property-topline">
                  <span>Residential</span>
                  <span>Lagos, Nigeria</span>
                </div>

                <h3>Contemporary 4-Bedroom Home</h3>

                <p>
                  A modern residential property designed for comfortable
                  family living, practical space planning and quality finishes.
                </p>

                <div className="property-features">
                  <span>4 Bedrooms</span>
                  <span>5 Bathrooms</span>
                  <span>Parking</span>
                </div>

                <div className="property-price-row">
                  <div>
                    <small>PRICE</small>
                    <strong>Available on Request</strong>
                  </div>

                  <a href="/contact">
                    Enquire Now
                  </a>
                </div>
              </div>
            </article>

            {/* PROPERTY 2 */}
            <article className="property-card">
              <div className="property-image-placeholder">
                <span className="property-badge development-badge">
                  Development
                </span>
                <span>Development Property Image</span>
              </div>

              <div className="property-card-content">
                <div className="property-topline">
                  <span>Multi-Unit Development</span>
                  <span>Nigeria</span>
                </div>

                <h3>Modern Residential Development</h3>

                <p>
                  A thoughtfully planned residential development offering
                  functional homes and long-term property value.
                </p>

                <div className="property-features">
                  <span>Residential</span>
                  <span>Multi-Unit</span>
                  <span>New Development</span>
                </div>

                <div className="property-price-row">
                  <div>
                    <small>AVAILABILITY</small>
                    <strong>Enquiries Open</strong>
                  </div>

                  <a href="/contact">
                    Request Details
                  </a>
                </div>
              </div>
            </article>

            {/* PROPERTY 3 */}
            <article className="property-card">
              <div className="property-image-placeholder">
                <span className="property-badge">For Sale</span>
                <span>Duplex Property Image</span>
              </div>

              <div className="property-card-content">
                <div className="property-topline">
                  <span>Duplex</span>
                  <span>Lagos, Nigeria</span>
                </div>

                <h3>Premium Residential Duplex</h3>

                <p>
                  A modern duplex combining generous interior spaces,
                  functional design and quality residential finishing.
                </p>

                <div className="property-features">
                  <span>Duplex</span>
                  <span>Family Home</span>
                  <span>Modern Finish</span>
                </div>

                <div className="property-price-row">
                  <div>
                    <small>PRICE</small>
                    <strong>Available on Request</strong>
                  </div>

                  <a href="/contact">
                    Enquire Now
                  </a>
                </div>
              </div>
            </article>

            {/* PROPERTY 4 */}
            <article className="property-card">
              <div className="property-image-placeholder">
                <span className="property-badge investment-badge">
                  Investment
                </span>
                <span>Investment Property Image</span>
              </div>

              <div className="property-card-content">
                <div className="property-topline">
                  <span>Investment Opportunity</span>
                  <span>Nigeria</span>
                </div>

                <h3>Residential Property Investment</h3>

                <p>
                  A real estate opportunity for buyers and investors looking
                  to participate in a professionally developed residential
                  property.
                </p>

                <div className="property-features">
                  <span>Investment</span>
                  <span>Residential</span>
                  <span>Development</span>
                </div>

                <div className="property-price-row">
                  <div>
                    <small>DETAILS</small>
                    <strong>Available on Request</strong>
                  </div>

                  <a href="/contact">
                    Discuss Investment
                  </a>
                </div>
              </div>
            </article>

            {/* PROPERTY 5 */}
            <article className="property-card">
              <div className="property-image-placeholder">
                <span className="property-badge">For Sale</span>
                <span>Apartment Property Image</span>
              </div>

              <div className="property-card-content">
                <div className="property-topline">
                  <span>Apartment</span>
                  <span>Nigeria</span>
                </div>

                <h3>Modern Residential Apartment</h3>

                <p>
                  A comfortable residential apartment designed around
                  efficient space use, contemporary finishing and practical
                  everyday living.
                </p>

                <div className="property-features">
                  <span>Apartment</span>
                  <span>Residential</span>
                  <span>Contemporary</span>
                </div>

                <div className="property-price-row">
                  <div>
                    <small>PRICE</small>
                    <strong>Available on Request</strong>
                  </div>

                  <a href="/contact">
                    Request Details
                  </a>
                </div>
              </div>
            </article>

            {/* PROPERTY 6 */}
            <article className="property-card">
              <div className="property-image-placeholder">
                <span className="property-badge land-badge">
                  Development Opportunity
                </span>
                <span>Land / Development Image</span>
              </div>

              <div className="property-card-content">
                <div className="property-topline">
                  <span>Land & Development</span>
                  <span>Nigeria</span>
                </div>

                <h3>Property Development Partnership</h3>

                <p>
                  An opportunity for landowners and investors interested in
                  developing residential property in partnership with
                  CVGeniusHomes.
                </p>

                <div className="property-features">
                  <span>Landowner</span>
                  <span>Partnership</span>
                  <span>Development</span>
                </div>

                <div className="property-price-row">
                  <div>
                    <small>PARTNERSHIP</small>
                    <strong>Open to Discussion</strong>
                  </div>

                  <a href="/contact">
                    Start a Conversation
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="property-types">
        <div className="properties-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>PROPERTY OPTIONS</span>
              <div className="label-line"></div>
            </div>

            <h2>REAL ESTATE OPTIONS FOR DIFFERENT GOALS</h2>

            <p>
              Our property offerings are designed to support buyers,
              homeowners, investors and development partners.
            </p>
          </div>

          <div className="property-type-grid">

            <div className="property-type-card">
              <span>01</span>
              <h3>Homes for Sale</h3>
              <p>
                Residential properties designed for practical, comfortable and
                modern living.
              </p>
            </div>

            <div className="property-type-card">
              <span>02</span>
              <h3>New Developments</h3>
              <p>
                Newly developed residential projects with opportunities for
                early-stage enquiries and purchases.
              </p>
            </div>

            <div className="property-type-card">
              <span>03</span>
              <h3>Investment Opportunities</h3>
              <p>
                Real estate opportunities for individuals looking to invest
                in residential property and development.
              </p>
            </div>

            <div className="property-type-card">
              <span>04</span>
              <h3>Development Partnerships</h3>
              <p>
                Collaborative opportunities for landowners and partners who
                want to develop viable residential projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW PROPERTY ENQUIRY WORKS */}
      <section className="property-process">
        <div className="properties-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>PROPERTY ENQUIRY</span>
              <div className="label-line"></div>
            </div>

            <h2>FIND YOUR PROPERTY IN 3 SIMPLE STEPS</h2>

            <p>
              We make it easy to begin a property purchase or investment
              conversation with our team.
            </p>
          </div>

          <div className="property-process-grid">

            <div className="property-process-card">
              <div className="property-process-number">1</div>
              <h3>Tell Us What You Need</h3>
              <p>
                Let us know the type of property, location, budget range or
                investment opportunity you are interested in.
              </p>
            </div>

            <div className="property-process-card">
              <div className="property-process-number">2</div>
              <h3>Review Available Options</h3>
              <p>
                Our team shares suitable property information, availability
                and relevant project details.
              </p>
            </div>

            <div className="property-process-card">
              <div className="property-process-number">3</div>
              <h3>Inspection & Next Steps</h3>
              <p>
                Arrange an inspection or consultation and proceed with the
                appropriate documentation and purchase process.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY BUY/INVEST */}
      <section className="property-confidence">
        <div className="properties-page-container property-confidence-grid">

          <div className="property-confidence-image">
            <span>Completed Property Image</span>
          </div>

          <div className="property-confidence-content">
            <div className="about-section-label">
              <span>WHY CVGENIUSHOMES</span>
              <div></div>
            </div>

            <h2>PROPERTY BACKED BY CONSTRUCTION EXPERIENCE</h2>

            <p>
              Our real estate offering is closely connected to our
              construction expertise, giving us a practical understanding of
              what makes a property functional, durable and valuable.
            </p>

            <ul>
              <li>
                <strong>Construction-Led Expertise:</strong> Property
                development is supported by real construction knowledge and
                project experience.
              </li>

              <li>
                <strong>Quality-Focused Delivery:</strong> We prioritise
                workmanship, practical planning and materials that support
                long-term value.
              </li>

              <li>
                <strong>Transparent Enquiries:</strong> Buyers and investors
                receive clear information about available opportunities and
                next steps.
              </li>

              <li>
                <strong>Development Capability:</strong> We can support
                projects from land and planning through construction and final
                delivery.
              </li>
            </ul>

            <a href="/contact" className="property-confidence-link">
              Speak With Our Property Team
            </a>
          </div>

        </div>
      </section>

      {/* PROPERTY CTA */}
      <section className="property-enquiry-cta">
        <div className="properties-page-container property-enquiry-grid">

          <div>
            <div className="about-section-label">
              <span>PROPERTY ENQUIRY</span>
              <div></div>
            </div>

            <h2>LOOKING FOR A HOME OR INVESTMENT OPPORTUNITY?</h2>

            <p>
              Tell us what you are looking for and our team can guide you
              through available properties, developments and suitable
              opportunities.
            </p>
          </div>

          <div className="property-enquiry-card">
            <h3>Start Your Property Search</h3>

            <p>
              Send us your preferred location, property type and budget range
              and we will help you understand the available options.
            </p>

            <a href="/contact">
              Make a Property Enquiry
            </a>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Ready to Find Your Next Property?</h2>

          <p>
            Explore residential opportunities, new developments and property
            investment options with CVGeniusHomes.
          </p>

          <div className="final-cta-buttons">
            <a href="/contact" className="cta-primary">
              Make a Property Enquiry
            </a>

            <a href="/projects" className="cta-secondary">
              View Our Projects
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
              <h3>Property</h3>

              <a href="/properties">Homes for Sale</a>
              <a href="/properties">New Developments</a>
              <a href="/properties">Investment Opportunities</a>
              <a href="/properties">Development Partnerships</a>
              <a href="/projects">Our Projects</a>
            </div>

            <div className="footer-column footer-enquiry">
              <h3>Property & Project Enquiries</h3>

              <p>
                Looking for a property, investment opportunity or a team to
                develop your next residential project?
              </p>

              <a href="/contact" className="footer-action">
                Make a Property Enquiry
              </a>

              <a href="/contact" className="footer-action">
                Request a Project Quote
              </a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-tags">
            <span>Quality Construction</span>
            <span>Residential Properties</span>
            <span>Property Development</span>
            <span>Investment Opportunities</span>
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