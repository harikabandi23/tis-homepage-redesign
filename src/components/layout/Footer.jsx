import './Footer.css'
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">

          <div className="footer__brand">
            <div className="footer__logo">TIS</div>

            <h3>Tulas International School</h3>

            <p>
              A CBSE boarding and day school in Dehradun focused on academic
              excellence, holistic development, and leadership.
            </p>

            <a href="#admissions" className="footer__cta">
              Enquire Now
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="footer__column">
            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#about">About TIS</a>
            <a href="#academics">Academics</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__column">
            <h4>Academics</h4>

            <a href="#academics">Learning</a>
            <a href="#academics">Sports</a>
            <a href="#academics">Holistic Development</a>
            <a href="#admissions">Admission Enquiry</a>
          </div>

          <div className="footer__contact">
            <h4>Get in touch</h4>

            <div className="footer__contact-item">
              <MapPin size={18} />
              <span>
                Dhoolkot, P.O – Selaqui,
                <br />
                Chakrata Road,
                <br />
                Dehradun-248011,
                <br />
                Uttarakhand
              </span>
            </div>

            <div className="footer__contact-item">
              <Phone size={18} />
              <span>
                +91-9837983791
                <br />
                0135-2699444
              </span>
            </div>

            <div className="footer__contact-item">
              <Mail size={18} />
              <span>info@tis.edu.in</span>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p>
            © 2026 Tulas International School, Dehradun. All rights reserved.
          </p>

          <div className="footer__socials">
            <a href="#contact">Instagram</a>
            <a href="#contact">Facebook</a>
            <a href="#contact">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer