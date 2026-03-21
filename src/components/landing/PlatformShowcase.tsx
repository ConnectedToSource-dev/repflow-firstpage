import { ChartLineUp, GraduationCap, CalendarCheck } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './PlatformShowcase.css'

const panels = [
  {
    icon: ChartLineUp,
    title: 'Sales Dashboard',
    description: 'Submit deals, track commissions, and monitor your team\u2019s performance \u2014 all in real time.',
    features: ['Submit new sales in under 2 minutes', 'Live commission tracking: pending, confirmed, paid', 'Team leaderboard and rep performance metrics'],
  },
  {
    icon: GraduationCap,
    title: 'Onboarding Academy',
    description: 'Your reps go from zero to sell-ready in under one hour. Scripts, product training, and pricing tools \u2014 all included.',
    features: ['Complete training in under 60 minutes', 'Sales scripts and objection-handling guides', 'Product knowledge and pricing calculator'],
  },
  {
    icon: CalendarCheck,
    title: 'Installer Hub',
    description: 'Incoming jobs land in your feed. Accept, schedule, and get paid \u2014 all without picking up the phone.',
    features: ['Pre-sold jobs delivered to your dashboard', 'Accept or decline with one tap', 'Built-in scheduling, territory map, and payment tracking'],
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
            Built for the people who sell and install water systems
          </h2>
          <p className="body-text">
            HomeBioHackers is a software platform that powers the entire water purification
            sales cycle — from the moment a rep closes a deal at the door to the moment an
            installer completes the job. Two dashboards, one connected workflow.
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
