import { ArrowRight, Play } from 'lucide-react'
import './HeroSection.css'

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            Excellence • Character • Leadership
          </span>

          <h1>
            Inspiring minds.
            <span> Shaping futures.</span>
          </h1>

          <p className="hero__description">
            A nurturing learning environment where students discover their
            potential, build confidence, and prepare to make a meaningful
            difference in the world.
          </p>

          <div className="hero__actions">
            <a href="#admissions" className="hero__primary-button">
              Explore TIS
              <ArrowRight size={18} />
            </a>

            <a href="#about" className="hero__secondary-button">
              <span className="hero__play-icon">
                <Play size={13} fill="currentColor" />
              </span>
              Discover our story
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <strong>25+</strong>
              <span>Years of Excellence</span>
            </div>

            <div>
              <strong>1000+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Expert Educators</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div className="hero__image-placeholder">
              <span>TIS</span>
              <small>Campus Experience</small>
            </div>
          </div>

          <div className="hero__floating-card">
            <span className="hero__floating-number">01</span>
            <div>
              <strong>Learn</strong>
              <span>Lead with purpose</span>
            </div>
          </div>

          <div className="hero__decor hero__decor--one"></div>
          <div className="hero__decor hero__decor--two"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection