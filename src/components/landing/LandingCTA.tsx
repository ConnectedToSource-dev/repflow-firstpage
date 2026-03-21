import { Link } from 'react-router-dom'
import { Buildings, Wrench } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './LandingCTA.css'

export default function LandingCTA() {
  const ref = useScrollReveal()

  return (
    <section className="landing-cta section" ref={ref}>
      <div className="container">
        <div className="landing-cta__inner reveal">
          <div className="card-shell">
            <div className="card-core landing-cta__content">
              <h2 className="heading-section landing-cta__heading">
                Ready to grow?
              </h2>
              <p className="body-text landing-cta__text">
                Join hundreds of sales teams and installers already earning more
                through HomeBioHackers. Free to apply — we review every application personally.
              </p>
              <div className="landing-cta__actions">
                <Link to="/reps" className="btn-primary">
                  Apply as a Sales Partner
                  <span className="btn-icon">
                    <Buildings size={16} weight="bold" />
                  </span>
                </Link>
                <Link to="/installers" className="btn-secondary">
                  <Wrench size={16} weight="bold" />
                  Apply as an Installer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
