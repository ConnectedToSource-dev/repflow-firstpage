import { CurrencyDollar } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './MoneyFlow.css'

const steps = [
  { label: 'Homeowner pays', number: '$8,000', detail: 'Average system price', accent: true },
  { label: 'Sales rep earns', number: '$3,000+', detail: 'Commission per sale', accent: true },
  { label: 'Installer earns', number: 'Full rate', detail: 'Margins stay untouched', accent: false },
  { label: 'Platform handles', number: 'Everything else', detail: 'Matching, training, payments', accent: false },
]

export default function MoneyFlow() {
  const ref = useScrollReveal()

  return (
    <section className="money-flow section" ref={ref}>
      <div className="container">
        <div className="money-flow__header reveal">
          <span className="eyebrow">
            <CurrencyDollar weight="fill" size={12} />
            How the Money Works
          </span>
          <h2 className="heading-section">
            Transparent economics. No hidden fees. Everyone earns.
          </h2>
          <p className="body-text">
            Here's exactly how a single water purification sale flows through the
            platform — from the homeowner's purchase to everyone getting paid.
          </p>
        </div>

        <div className="money-flow__steps reveal">
          {steps.map((step, i) => (
            <div className="money-flow__step-group" key={step.label}>
              <div className="money-flow__card">
                <span className="money-flow__label">{step.label}</span>
                <span className={`money-flow__number ${step.accent ? 'money-flow__number--accent' : ''}`}>
                  {step.number}
                </span>
                <span className="money-flow__detail">{step.detail}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="money-flow__arrow">
                  <svg className="money-flow__arrow-h" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className="money-flow__arrow-v" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="money-flow__closing reveal">
          No revenue sharing. No per-lead fees. No surprises. Just a clean split
          where everyone knows what they earn before the first sale.
        </p>

        <div className="money-flow__callouts reveal">
          <div className="money-flow__callout">
            <span className="money-flow__callout-number">23x</span>
            <span className="money-flow__callout-text">
              return on monthly platform cost for installers — from a single job
            </span>
          </div>
          <div className="money-flow__callout">
            <span className="money-flow__callout-number">&lt; 1 hour</span>
            <span className="money-flow__callout-text">
              from onboarding to first sale-ready rep
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
