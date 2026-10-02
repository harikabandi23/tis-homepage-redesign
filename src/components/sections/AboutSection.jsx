import { ArrowUpRight, Check } from 'lucide-react'
import './AboutSection.css'

const highlights = [
  'Student-centered learning',
  'Holistic development',
  'Experienced educators',
  'Strong values and character',
]

const stats = [
  { number: '25+', label: 'Years of excellence' },
  { number: '1000+', label: 'Students' },
  { number: '50+', label: 'Expert educators' },
  { number: '20+', label: 'Learning programs' },
]

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__intro">
          <div className="about__label">
            <span></span>
            About TIS
          </div>

          <div className="about__intro-content">
            <h2>
              Education that goes
              <span> beyond the classroom.</span>
            </h2>

            <p>
              At Tulas International School, learning is more than academics.
              We create an environment where curiosity, creativity, confidence,
              and character grow together.
            </p>
          </div>
        </div>

        <div className="about__main">
          <div className="about__visual">
            <div className="about__visual-main">
              <span>TIS</span>
              <small>Learn • Grow • Lead</small>
            </div>

            <div className="about__visual-card">
              <strong>01</strong>
              <span>A foundation for lifelong learning</span>
            </div>
          </div>

          <div className="about__content">
            <span className="about__eyebrow">
              Building tomorrow's leaders
            </span>

            <h3>
              A place where every
              <span> student can thrive.</span>
            </h3>

            <p>
              Our approach combines academic excellence with opportunities
              that help students explore their interests, develop essential
              life skills, and become responsible members of society.
            </p>

            <div className="about__highlights">
              {highlights.map((item) => (
                <div key={item} className="about__highlight">
                  <span className="about__check">
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a href="#academics" className="about__link">
              Explore our approach
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection