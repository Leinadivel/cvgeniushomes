import TrainingApplication from "./TrainingApplication";

export default function TrainingPage() {
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
      <section className="training-hero">
        <div className="training-hero-content">
          <span className="training-hero-pill">
            Training Institute
          </span>

          <h1>Building Skills. Creating Opportunities.</h1>

          <p>
            Our Training Institute develops the next generation of skilled
            construction professionals through practical, industry-focused
            technical training.
          </p>

          <a href="#apply" className="training-hero-button">
            Apply Now
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="training-intro">
        <div className="training-page-container training-intro-grid">
          <div className="training-image-placeholder">
            <span>Construction Training Image</span>
          </div>

          <div className="training-intro-content">
            <div className="about-section-label">
              <span>ABOUT THE INSTITUTE</span>
              <div></div>
            </div>

            <h2>PRACTICAL TRAINING FOR THE NEXT GENERATION OF ARTISANS</h2>

            <p>
              In collaboration with the Federal Republic of Nigeria through
              the National Board for Technical Education (NBTE), we offer an
              intensive 24-month apprenticeship programme combining classroom
              instruction, hands-on practical training, and supervised
              field/site experience.
            </p>

            <p>
              The programme is designed to help apprentices build strong
              technical foundations, practical confidence and the professional
              discipline needed to work effectively within the construction
              industry.
            </p>

            <div className="training-highlight-grid">
              <div className="training-highlight-card">
                <strong>24 Months</strong>
                <span>Structured Apprenticeship</span>
              </div>

              <div className="training-highlight-card">
                <strong>6 Trades</strong>
                <span>Construction Skills Pathways</span>
              </div>

              <div className="training-highlight-card">
                <strong>Practical</strong>
                <span>Workshop & Site Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRADES */}
      <section className="training-trades">
        <div className="training-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>TRADES AVAILABLE</span>
              <div className="label-line"></div>
            </div>

            <h2>CHOOSE YOUR CONSTRUCTION TRADE</h2>

            <p>
              Apprentices can select from practical construction trades
              designed to build employable technical skills.
            </p>
          </div>

          <div className="trade-grid">

            <TrainingApplication
              selectedTrade="Bricklaying"
              cardTrigger
            >
              <span className="trade-number">01</span>

              <h3>Bricklaying</h3>

              <p>
                Learn practical masonry skills, blockwork, wall construction
                and foundational site techniques.
              </p>
            </TrainingApplication>


            <TrainingApplication
              selectedTrade="Carpentry & Joinery"
              cardTrigger
            >
              <span className="trade-number">02</span>

              <h3>Carpentry & Joinery</h3>

              <p>
                Develop practical woodworking, framing, joinery and
                construction carpentry skills.
              </p>
            </TrainingApplication>


            <TrainingApplication
              selectedTrade="Plumbing"
              cardTrigger
            >
              <span className="trade-number">03</span>

              <h3>Plumbing</h3>

              <p>
                Learn pipework, fittings, water systems and practical plumbing
                installation techniques.
              </p>
            </TrainingApplication>


            <TrainingApplication
              selectedTrade="Electrical Installation"
              cardTrigger
            >
              <span className="trade-number">04</span>

              <h3>Electrical Installation</h3>

              <p>
                Build knowledge of electrical systems, wiring, fittings and
                safe installation practices.
              </p>
            </TrainingApplication>


            <TrainingApplication
              selectedTrade="Wall & Floor Tiling"
              cardTrigger
            >
              <span className="trade-number">05</span>

              <h3>Wall & Floor Tiling</h3>

              <p>
                Learn surface preparation, measurement, tile installation,
                alignment and finishing.
              </p>
            </TrainingApplication>


            <TrainingApplication
              selectedTrade="Glazing"
              cardTrigger
            >
              <span className="trade-number">06</span>

              <h3>Glazing</h3>

              <p>
                Gain practical experience in glass handling, installation,
                fittings and finishing techniques.
              </p>
            </TrainingApplication>

          </div>
        </div>
      </section>

      {/* 24 MONTH APPRENTICESHIP */}
      <section className="training-programme">
        <div className="training-page-container training-programme-grid">
          <div className="training-programme-content">
            <div className="about-section-label">
              <span>24-MONTH APPRENTICESHIP</span>
              <div></div>
            </div>

            <h2>LEARN IN THE CLASSROOM. PRACTISE IN THE WORKSHOP. APPLY IT ON SITE.</h2>

            <p>
              The apprenticeship programme combines technical instruction with
              practical learning and real construction exposure.
            </p>

            <div className="training-programme-list">
              <div>
                <span>01</span>
                <div>
                  <h3>Classroom-Based Technical Instruction</h3>
                  <p>
                    Structured lessons designed to build the technical
                    knowledge behind each trade.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <h3>Practical Workshop Sessions</h3>
                  <p>
                    Hands-on exercises that help apprentices develop confidence
                    with tools, materials and trade techniques.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <h3>Construction & Field Experience</h3>
                  <p>
                    Supervised exposure to real construction environments and
                    practical site activities.
                  </p>
                </div>
              </div>

              <div>
                <span>04</span>
                <div>
                  <h3>Health, Safety & Professional Development</h3>
                  <p>
                    Training in safe work practices, workplace discipline and
                    the professional standards expected in construction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="training-large-placeholder">
            <span>Apprenticeship / Workshop Image</span>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="training-certification">
        <div className="training-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>CERTIFICATION</span>
              <div className="label-line"></div>
            </div>

            <h2>CERTIFICATION & TRADE TEST GUIDANCE</h2>

            <p>
              Successful completion of the programme provides apprentices with
              recognition of their training and practical experience while
              helping them understand the next steps toward formal trade
              certification.
            </p>
          </div>

          <div className="certification-grid">
            <div className="certification-card featured-certification">
              <span className="certification-number">01</span>

              <h3>Apprenticeship Certificate</h3>

              <p>
                Upon successful completion of the programme, apprentices are
                awarded an Apprenticeship Certificate recognising their
                training and practical experience.
              </p>
            </div>

            <div className="certification-card">
              <span className="certification-number">02</span>

              <h3>Trade Test Guidance</h3>

              <p>
                We provide guidance and support on the process of obtaining the
                relevant Trade Test Final Certificate, helping graduates
                understand the requirements and steps involved in progressing
                toward formal trade certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYMENT PATHWAY */}
      <section className="training-pathway">
        <div className="training-page-container">
          <div className="section-heading">
            <div className="section-label">
              <span>CAREER PATHWAY</span>
              <div className="label-line"></div>
            </div>

            <h2>FROM APPRENTICESHIP TO REAL CONSTRUCTION OPPORTUNITIES</h2>

            <p>
              The institute is designed not only to teach technical skills, but
              also to create a pathway into practical construction work.
            </p>
          </div>

          <div className="pathway-grid">
            <div className="pathway-card">
              <div className="pathway-number">1</div>
              <h3>Choose Your Trade</h3>
              <p>
                Select the construction trade that best matches your interest
                and career goals.
              </p>
            </div>

            <div className="pathway-card">
              <div className="pathway-number">2</div>
              <h3>Train & Practise</h3>
              <p>
                Complete structured classroom, workshop and practical site
                training over the apprenticeship period.
              </p>
            </div>

            <div className="pathway-card">
              <div className="pathway-number">3</div>
              <h3>Build Professional Experience</h3>
              <p>
                Develop workplace discipline, practical confidence and
                experience through supervised construction exposure.
              </p>
            </div>

            <div className="pathway-card">
              <div className="pathway-number">4</div>
              <h3>Progress Into Work</h3>
              <p>
                Strong-performing apprentices may be considered for suitable
                opportunities within CVGeniusHomes projects as opportunities
                become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section className="training-apply" id="apply">
        <div className="training-page-container training-apply-grid">
          <div className="training-apply-content">
            <div className="about-section-label">
              <span>APPLY NOW</span>
              <div></div>
            </div>

            <h2>START YOUR JOURNEY INTO A PROFESSIONAL CONSTRUCTION TRADE</h2>

            <p>
              Applications are open to individuals interested in developing a
              professional trade in the construction industry.
            </p>

            <p>
              Choose your preferred trade, complete the application form, and
              take the first step toward becoming a skilled construction
              professional.
            </p>
          </div>

          <div className="training-apply-card">
            <h3>Training Institute Application</h3>

            <p>
              Select your preferred trade and submit your details to begin the
              application process.
            </p>

            <TrainingApplication
              triggerText="Apply Now"
              triggerClassName="training-apply-button"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Ready to Build a Skilled Construction Career?</h2>

          <p>
            Choose your trade, begin your apprenticeship and take the first
            step toward professional construction skills.
          </p>

          <div className="final-cta-buttons">
            <a href="#apply" className="cta-primary">
              Apply for Training
            </a>

            <a href="/contact" className="cta-secondary">
              Contact the Institute
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
              <h3>Training Institute</h3>

              <a href="/training">Bricklaying</a>
              <a href="/training">Carpentry & Joinery</a>
              <a href="/training">Plumbing</a>
              <a href="/training">Electrical Installation</a>
              <a href="/training">Wall & Floor Tiling</a>
              <a href="/training">Glazing</a>
            </div>

            <div className="footer-column footer-enquiry">
              <h3>Training Enquiries</h3>

              <p>
                Interested in developing practical construction skills through
                our 24-month apprenticeship programme?
              </p>

              <TrainingApplication
                triggerText="Apply Now"
                triggerClassName="footer-action"
              />

              <a href="/contact" className="footer-action">
                Contact the Institute
              </a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-tags">
            <span>24-Month Apprenticeship</span>
            <span>Practical Trade Training</span>
            <span>Field & Site Experience</span>
            <span>Trade Test Guidance</span>
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