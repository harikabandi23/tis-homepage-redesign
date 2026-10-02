import { ArrowRight, CalendarDays, MapPin, MessageCircle } from 'lucide-react'
import './AdmissionsSection.css'

const admissionOptions = [
  {
    icon: CalendarDays,
    title: 'Book a Visit',
    text: 'Experience the TIS campus and learning environment.',
  },
  {
    icon: MessageCircle,
    title: 'Make an Enquiry',
    text: 'Talk to our admissions team about your questions.',
  },
  {
    icon: MapPin,
    title: 'Explore the Campus',
    text: 'Discover the spaces where students learn and grow.',
  },
]

function AdmissionsSection() {
  return (
    <section id="admissions" className="admissions">
      <div className="container">
        <div className="admissions__main">
          <div className="admissions__content">
            <span className="admissions__eyebrow">
              Admissions
            </span>

            <h2>
              Your child's journey
              <span> starts here.</span>
            </h2>

            <p>
              Take the first step towards an educational experience that
              encourages curiosity, builds confidence, and prepares students
              for the future.
            </p>

            <a href="#contact" className="admissions__button">
              Begin Your TIS Journey
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="admissions__visual">
            <span className="admissions__quote-mark">“</span>

            <p>
              Every child has the potential to make a difference. Our role is
              to help them discover it.
            </p>

            <span className="admissions__visual-label">
              Learn • Grow • Lead
            </span>
          </div>
        </div>

        <div className="admissions__options">
          {admissionOptions.map((option) => {
            const Icon = option.icon

            return (
              <div className="admission-option" key={option.title}>
                <div className="admission-option__icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>
                </div>

                <ArrowRight
                  className="admission-option__arrow"
                  size={18}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AdmissionsSection