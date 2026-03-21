import { UserPlus, Certificate, Handshake, CurrencyDollar, MapPin, Package, CalendarCheck as CalendarIcon } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './DualTrackHowItWorks.css'

const repSteps = [
  { icon: UserPlus, label: 'Show Interest', desc: 'Tell us about your company' },
  { icon: Certificate, label: 'Get Certified', desc: '~1 hour academy' },
  { icon: Handshake, label: 'Start Selling', desc: 'Present during existing visits' },
  { icon: CurrencyDollar, label: 'Earn $3,000/Sale', desc: 'We handle installation' },
]

const installerSteps = [
  { icon: UserPlus, label: 'Show Interest', desc: 'Tell us about your business' },
  { icon: MapPin, label: 'Set Your Area', desc: 'Define coverage & availability' },
  { icon: Package, label: 'Receive Jobs', desc: 'Pre-sold installs on your dashboard' },
  { icon: CalendarIcon, label: 'Install & Earn', desc: 'Your pricing, your schedule' },
]

export default function DualTrackHowItWorks() {
  const ref = useScrollReveal()

  return (
    <section className="dual-track section" ref={ref}>
      <div className="container">
        <div className="dual-track__header reveal">
          <span className="eyebrow">How It Works</span>
          <h2 className="heading-section">Two paths, one platform</h2>
          <p className="body-text">
            Whether you bring customers or bring the tools, the process is simple.
          </p>
        </div>

        <div className="dual-track__grid">
          <div className="dual-track__column reveal">
            <div className="dual-track__column-label dual-track__column-label--reps">
              For Sales Teams
            </div>
            <div className="dual-track__steps">
              {repSteps.map((step, i) => (
                <div className="dual-track__step" key={step.label}>
                  <div className="dual-track__step-number">{i + 1}</div>
                  <div className="dual-track__step-icon">
                    <step.icon size={20} weight="duotone" />
                  </div>
                  <div className="dual-track__step-content">
                    <span className="dual-track__step-label">{step.label}</span>
                    <span className="dual-track__step-desc">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dual-track__connector reveal">
            <div className="dual-track__connector-line"></div>
            <div className="dual-track__connector-dot"></div>
            <span className="dual-track__connector-text">Rep sells &rarr; Installer fulfills</span>
            <div className="dual-track__connector-dot"></div>
            <div className="dual-track__connector-line"></div>
          </div>

          <div className="dual-track__column reveal">
            <div className="dual-track__column-label dual-track__column-label--installers">
              For Installers
            </div>
            <div className="dual-track__steps">
              {installerSteps.map((step, i) => (
                <div className="dual-track__step" key={step.label}>
                  <div className="dual-track__step-number">{i + 1}</div>
                  <div className="dual-track__step-icon">
                    <step.icon size={20} weight="duotone" />
                  </div>
                  <div className="dual-track__step-content">
                    <span className="dual-track__step-label">{step.label}</span>
                    <span className="dual-track__step-desc">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
