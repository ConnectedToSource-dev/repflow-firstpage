import { Star } from '@phosphor-icons/react'
import { testimonials } from '../../data/testimonials'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './LandingTestimonials.css'

export default function LandingTestimonials() {
  const ref = useScrollReveal()

  return (
    <section className="testimonials section" id="testimonials" ref={ref}>
      <div className="container">
        <div className="testimonials__header reveal">
          <span className="eyebrow">
            <Star weight="fill" size={12} />
            Success Stories
          </span>
          <h2 className="heading-section">
            Partners growing with HomeBioHackers
          </h2>
        </div>

        <div className="testimonials__scroll">
          <div className="testimonials__track reveal-stagger">
            {testimonials.map((t) => (
              <div className="testimonials__card reveal" key={t.name}>
                <div className="card-shell">
                  <div className="card-core">
                    <div className="testimonials__card-top">
                      <span className={`testimonials__badge testimonials__badge--${t.type}`}>
                        {t.type === 'rep' ? 'Sales Partner' : 'Installer'}
                      </span>
                      <span className="testimonials__metric">{t.metric}</span>
                    </div>
                    <blockquote className="testimonials__quote">
                      "{t.quote}"
                    </blockquote>
                    <div className="testimonials__author">
                      <div className="testimonials__avatar">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="testimonials__author-info">
                        <span className="testimonials__author-name">{t.name}</span>
                        <span className="testimonials__author-role">
                          {t.role}, {t.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
