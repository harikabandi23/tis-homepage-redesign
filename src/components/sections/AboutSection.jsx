import { ArrowUpRight, Check } from 'lucide-react'
import './AboutSection.css'
import Reveal from '../animation/Reveal'

const highlights = [
  'CBSE curriculum',
  'Boarding and day school',
  'Holistic development',
  'Leadership and lifelong learning',
]

const stats = [
  { number: '22', label: 'Acre pollution-free campus' },
  { number: '16+', label: 'Sports opportunities' },
  { number: '24×7', label: 'Medical assistance' },
  { number: '6:1', label: 'Student-teacher ratio' },
]

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">

        <Reveal>
          <div className="about__intro">
            <div className="about__label">
              <span></span>
              About TIS
            </div>

            <div className="about__intro-content">
              <h2>
                Boarding and day school
                <span> excellence in Dehradun.</span>
              </h2>

              <p>
                Tulas International School is a CBSE boarding and day school
                in Dehradun focused on academic excellence, holistic
                development, and preparing students to become global leaders.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about__main">
            <div className="about__visual">
              <div className="about__visual-main">
                <span>TIS</span>
                <small>Learn • Grow • Lead</small>
              </div>

              <div className="about__visual-card">
                <strong>2012</strong>
                <span>Established under Rishabh Educational Trust</span>
              </div>
            </div>

            <div className="about__content">
              <span className="about__eyebrow">
                Education with purpose
              </span>

              <h3>
                Learning that goes
                <span> beyond academics.</span>
              </h3>

              <p>
                TIS aims to provide modern facilities and a nurturing
                environment where students can grow academically, socially,
                culturally, and personally while developing leadership,
                innovation, and lifelong-learning skills.
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
                Explore academics
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="about__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default AboutSection