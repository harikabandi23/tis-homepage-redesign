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
              Inspiring minds, shaping futures through education,
              character, and leadership.
            </p>

            <a href="#admissions" className="footer__cta">
              Begin Your TIS Journey
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

            <a href="#academics">Early Years</a>
            <a href="#academics">Primary School</a>
            <a href="#academics">Secondary School</a>
            <a href="#academics">Learning Programs</a>
          </div>

          <div className="footer__contact">
            <h4>Get in touch</h4>

            <div className="footer__contact-item">
              <MapPin size={18} />
              <span>
                Tulas International School
                <br />
                Hyderabad, Telangana
              </span>
            </div>

            <div className="footer__contact-item">
              <Phone size={18} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="footer__contact-item">
              <Mail size={18} />
              <span>info@tulasinternationalschool.com</span>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p>
            © 2026 Tulas International School. All rights reserved.
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