import { Buildings, Wrench } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useModal } from '../../context/ModalContext'
import './LandingCTA.css'

export default function LandingCTA() {
  const ref = useScrollReveal()
  const { openModal } = useModal()

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
                <button type="button" className="btn-primary" onClick={() => openModal('sales')}>
                  Apply as a Sales Partner
                  <span className="btn-icon">
                    <Buildings size={16} weight="bold" />
                  </span>
                </button>
                <button type="button" className="btn-secondary" onClick={() => openModal('installer')}>
                  <Wrench size={16} weight="bold" />
                  Apply as an Installer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
