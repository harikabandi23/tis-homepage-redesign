import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import './ContactSection.css'

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          <div className="contact__label">
            <span></span>
            Contact
          </div>

          <div className="contact__heading">
            <h2>
              Let's start a
              <span> conversation.</span>
            </h2>

            <p>
              Have questions about admissions, academics, boarding life, or
              the TIS experience? Get in touch with the school team.
            </p>
          </div>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__icon">
                <MapPin size={20} />
              </div>

              <div>
                <h3>Visit Us</h3>
                <p>
                  Tulas International School
                  <br />
                  Dhoolkot, P.O – Selaqui,
                  <br />
                  Chakrata Road, Dehradun-248011
                  <br />
                  Uttarakhand
                </p>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__icon">
                <Phone size={20} />
              </div>

              <div>
                <h3>Call Us</h3>
                <p>
                  +91-9837983791
                  <br />
                  0135-2699444
                  <br />
                  0135-2699666
                </p>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__icon">
                <Mail size={20} />
              </div>

              <div>
                <h3>Email Us</h3>
                <p>info@tis.edu.in</p>
              </div>
            </div>
          </div>

          <div className="contact__card">
            <span className="contact__card-number">01</span>

            <h3>
              Ready to discover
              <span> TIS?</span>
            </h3>

            <p>
              Explore the TIS experience and connect with the admissions team
              to learn more about the school.
            </p>

            <a href="#admissions" className="contact__button">
              Make an Enquiry
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection