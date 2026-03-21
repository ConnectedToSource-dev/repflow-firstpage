import { Link } from 'react-router-dom'
import { Drop, Buildings, Wrench } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './LandingHero.css'

export default function LandingHero() {
  const ref = useScrollReveal()

  return (
    <section className="landing-hero" ref={ref}>
      <div className="container">
        <div className="landing-hero__grid">
          <div className="landing-hero__content">
            <div className="reveal">
              <span className="eyebrow">
                <Drop weight="fill" size={12} />
                The Water Purification Marketplace
              </span>
            </div>

            <h1 className="heading-display xl reveal">
              One platform.<br />
              Two ways to grow.
            </h1>

            <p className="body-text reveal">
              HomeBioHackers connects sales teams with certified installers
              to deliver premium water purification to every home in America.
              Whether you sell or install, there's a place for you.
            </p>

            <div className="landing-hero__actions reveal">
              <Link to="/reps" className="btn-primary">
                I sell to homeowners
                <span className="btn-icon">
                  <Buildings size={16} weight="bold" />
                </span>
              </Link>
              <Link to="/installers" className="btn-secondary">
                <Wrench size={16} weight="bold" />
                I install water systems
              </Link>
            </div>
          </div>

          <div className="landing-hero__visual reveal">
            <div className="landing-hero__dashboard">
              <div className="landing-hero__dashboard-shell">
                <div className="landing-hero__dashboard-core">
                  <div className="landing-hero__dash-header">
                    <div className="landing-hero__dash-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span className="landing-hero__dash-title">RepFlow Dashboard</span>
                  </div>
                  <div className="landing-hero__dash-body">
                    <div className="landing-hero__dash-metric">
                      <span className="landing-hero__dash-metric-label">This Month</span>
                      <span className="landing-hero__dash-metric-value">$12,400</span>
                    </div>
                    <div className="landing-hero__dash-metric">
                      <span className="landing-hero__dash-metric-label">Active Deals</span>
                      <span className="landing-hero__dash-metric-value">7</span>
                    </div>
                    <div className="landing-hero__dash-metric">
                      <span className="landing-hero__dash-metric-label">Installs Scheduled</span>
                      <span className="landing-hero__dash-metric-value">4</span>
                    </div>
                    <div className="landing-hero__dash-bars">
                      <div className="landing-hero__dash-bar" style={{ '--bar-width': '85%' } as React.CSSProperties}></div>
                      <div className="landing-hero__dash-bar" style={{ '--bar-width': '62%' } as React.CSSProperties}></div>
                      <div className="landing-hero__dash-bar" style={{ '--bar-width': '94%' } as React.CSSProperties}></div>
                      <div className="landing-hero__dash-bar" style={{ '--bar-width': '47%' } as React.CSSProperties}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-hero__stats reveal">
          <div className="landing-hero__stat">
            <span className="landing-hero__stat-value">1,247+</span>
            <span className="landing-hero__stat-label">Certified Partners</span>
          </div>
          <div className="landing-hero__stat-divider"></div>
          <div className="landing-hero__stat">
            <span className="landing-hero__stat-value">38.4k</span>
            <span className="landing-hero__stat-label">Systems Installed</span>
          </div>
          <div className="landing-hero__stat-divider"></div>
          <div className="landing-hero__stat">
            <span className="landing-hero__stat-value">50</span>
            <span className="landing-hero__stat-label">States Covered</span>
          </div>
        </div>
      </div>
    </section>
  )
}
