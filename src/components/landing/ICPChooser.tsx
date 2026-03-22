import { ArrowRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useModal } from '../../context/ModalContext'
import './ICPChooser.css'

const salesSteps = [
  'Apply and get approved',
  'Complete 1-hour training',
  'Start selling water systems',
  'Earn $3,000+ per closed deal',
]

const installerSteps = [
  'Apply to your territory',
  'Configure your service area',
  'Receive pre-sold installation jobs',
  'Install, complete, get paid',
]

const salesBenefits = [
  'Add a $3,000+ product to every home visit',
  'Full training and sales tools included',
  'Zero inventory, zero fulfillment — we handle installation',
  'Your reps start selling within one hour',
]

const installerBenefits = [
  'Receive pre-sold jobs, not cold leads',
  'One flat monthly fee — no per-lead charges',
  'Your installation price stays your installation price',
  'Choose your territory, your schedule, your capacity',
]

export default function ICPChooser() {
  const ref = useScrollReveal()
  const { openModal } = useModal()

  return (
    <section className="icp section" id="partners" ref={ref}>
      <div className="container">
        <div className="icp__header reveal">
          <span className="eyebrow">Partner With Us</span>
          <h2 className="heading-section">Two ways to partner with HomeBioHackers</h2>
          <p className="body-text">
            Whether your team sells at the door or installs under the sink — there's a place
            for you on the platform. Here's how each path works.
          </p>
        </div>

        <div className="icp__grid reveal-stagger">
          {/* Left Card — Sales Companies */}
          <div className="icp__card reveal">
            <div className="icp__card-image">
              <img src="/sales-rep.jpg" alt="Sales rep presenting to homeowners" />
            </div>

            <div className="icp__card-body">
              <h3 className="icp__card-title">I'm a company with sales reps</h3>
              <p className="icp__card-desc">
                Your reps are already inside the home. Give them a high-ticket water
                purification product to upsell — we handle training, fulfillment, and installation.
              </p>

              <div className="icp__steps">
                <span className="icp__steps-label">How it works</span>
                <div className="icp__timeline">
                  {salesSteps.map((step, i) => (
                    <div className="icp__step" key={i}>
                      <div className="icp__step-marker">
                        <span className="icp__step-number">{i + 1}</span>
                        {i < salesSteps.length - 1 && <div className="icp__step-line" />}
                      </div>
                      <span className="icp__step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="icp__divider" />

              <ul className="icp__benefits">
                {salesBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <button type="button" className="icp__cta" onClick={() => openModal('sales')}>
                Apply as a sales partner <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </div>

          {/* Right Card — Installers */}
          <div className="icp__card reveal">
            <div className="icp__card-image">
              <img src="/installer.jpg" alt="Installer working on water purification system" />
            </div>

            <div className="icp__card-body">
              <h3 className="icp__card-title">I'm an installer or fulfillment company</h3>
              <p className="icp__card-desc">
                Stop paying per lead. Receive pre-sold installation jobs from our sales
                network — for one flat monthly fee that's less than a single Google Ads lead.
              </p>

              <div className="icp__steps">
                <span className="icp__steps-label">How it works</span>
                <div className="icp__timeline">
                  {installerSteps.map((step, i) => (
                    <div className="icp__step" key={i}>
                      <div className="icp__step-marker">
                        <span className="icp__step-number">{i + 1}</span>
                        {i < installerSteps.length - 1 && <div className="icp__step-line" />}
                      </div>
                      <span className="icp__step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="icp__divider" />

              <ul className="icp__benefits">
                {installerBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <button type="button" className="icp__cta" onClick={() => openModal('installer')}>
                Apply as an installer <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
