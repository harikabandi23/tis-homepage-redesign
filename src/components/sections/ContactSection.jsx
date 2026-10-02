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
              Have questions about Tulas International School?
              Our team is here to help you learn more about the
              school, admissions, and campus experience.
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
                  Hyderabad, Telangana
                </p>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__icon">
                <Phone size={20} />
              </div>

              <div>
                <h3>Call Us</h3>
                <p>Speak with our admissions team.</p>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__icon">
                <Mail size={20} />
              </div>

              <div>
                <h3>Email Us</h3>
                <p>Send us your questions and enquiries.</p>
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
              Get in touch with our admissions team and take
              the next step towards your child's educational
              journey.
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