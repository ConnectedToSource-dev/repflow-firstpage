import { ChartLineUp, GraduationCap, CalendarCheck } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './PlatformShowcase.css'

const panels = [
  {
    icon: ChartLineUp,
    title: 'Rep Dashboard',
    description: 'Proposals, pipeline tracking, earnings, and client management — everything your sales team needs in one place.',
    features: ['Proposal generator', 'Milestone tracking', 'Real-time earnings'],
  },
  {
    icon: GraduationCap,
    title: 'Onboarding Academy',
    description: 'Five focused modules that take your reps from zero to certified in about one hour. Quizzes, materials, and certification included.',
    features: ['5 training modules', 'Knowledge quizzes', 'Digital certification'],
  },
  {
    icon: CalendarCheck,
    title: 'Installer Hub',
    description: 'Pre-sold job cards, scheduling, customer details, and real-time updates. Installers see everything before they load the truck.',
    features: ['Job dashboard', 'Schedule management', 'Customer details'],
  },
]

export default function PlatformShowcase() {
  const ref = useScrollReveal()

  return (
    <section className="platform-showcase section" id="platform" ref={ref}>
      <div className="container">
        <div className="platform-showcase__header reveal">
          <span className="eyebrow">Built for Scale</span>
          <h2 className="heading-section">
            A real platform, not just a landing page
          </h2>
          <p className="body-text">
            RepFlow powers every step — from training and certification through
            deal tracking and installation scheduling.
          </p>
        </div>

        <div className="platform-showcase__grid reveal-stagger">
          {panels.map((panel) => (
            <div className="platform-showcase__panel reveal" key={panel.title}>
              <div className="card-shell">
                <div className="card-core">
                  <div className="platform-showcase__icon-wrap">
                    <panel.icon size={28} weight="duotone" />
                  </div>
                  <h3 className="platform-showcase__panel-title">{panel.title}</h3>
                  <p className="platform-showcase__panel-desc">{panel.description}</p>
                  <ul className="platform-showcase__features">
                    {panel.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
