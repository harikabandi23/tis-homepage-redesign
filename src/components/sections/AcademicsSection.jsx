import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
} from 'lucide-react'
import './AcademicsSection.css'

const programs = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Early Years',
    description:
      'A nurturing environment where children build curiosity, confidence, and a love for learning.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Primary School',
    description:
      'Strong foundations through engaging learning experiences, exploration, and creative thinking.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Secondary School',
    description:
      'Focused academic development combined with skills that prepare students for future opportunities.',
  },
]

function AcademicsSection() {
  return (
    <section id="academics" className="academics">
      <div className="container">

        <div className="academics__header">
          <div className="academics__label">
            <span></span>
            Academics
          </div>

          <div className="academics__heading">
            <h2>
              Learning designed
              <span> for every stage.</span>
            </h2>

            <p>
              Our academic journey encourages students to question, explore,
              create, and develop the confidence to take on the future.
            </p>
          </div>
        </div>

        <div className="academics__grid">
          {programs.map((program) => {
            const Icon = program.icon

            return (
              <article
                className="academic-card"
                key={program.number}
              >
                <div className="academic-card__top">
                  <span className="academic-card__number">
                    {program.number}
                  </span>

                  <div className="academic-card__icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="academic-card__content">
                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <a
                    href="#admissions"
                    className="academic-card__link"
                  >
                    Learn more
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="academics__bottom">
          <p>
            Discover an educational experience that develops knowledge,
            character, creativity, and leadership.
          </p>

          <a
            href="#admissions"
            className="academics__button"
          >
            Explore admissions
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default AcademicsSection