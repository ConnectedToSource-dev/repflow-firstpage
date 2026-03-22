import { ArrowRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import WaterShader from '../ui/WaterShader'

import './LandingHero.css'

export default function LandingHero() {
  const ref = useScrollReveal()

  return (
    <section className="hero" ref={ref}>
      <WaterShader />
      {/* Dark gradient overlay */}
      <div className="hero__overlay" />

      <div className="container hero__container">
        {/* Floating stats card — top right */}
        <div className="hero__stats-card reveal">
          <div className="hero__stats-header">
            <span className="hero__stats-number">38,400+</span>
            <span className="hero__stats-badge">last 5 years</span>
          </div>
          <span className="hero__stats-subtitle">Successful System Installs</span>
          <div className="hero__stats-bars">
            <div className="hero__bar" style={{ '--h': '30%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '45%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '35%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '55%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '70%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '60%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '85%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '90%' } as React.CSSProperties} />
            <div className="hero__bar" style={{ '--h': '100%' } as React.CSSProperties} />
          </div>
          <div className="hero__stats-axis">
            <span>2020</span>
            <span>2025</span>
          </div>
        </div>

        {/* Main content — bottom left */}
        <div className="hero__content">
          <h1 className="hero__heading reveal">
            The Platform That Powers <span className="hero__accent">Pure Water</span> Sales
          </h1>

          <p className="hero__subtext reveal">
            Stop losing deals to scheduling chaos. Close more installs with
            automated proposals, instant booking, and a certified installer network.
          </p>

          <div className="hero__actions">
            <a href="#partners" className="hero__btn hero__btn--primary">
              I have Sales Reps
              <span className="hero__btn-icon">
                <ArrowRight size={16} weight="bold" />
              </span>
            </a>
            <a href="#partners" className="hero__btn hero__btn--secondary">
              I'm an Installer
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>

        {/* Trust badge — bottom right */}
        <div className="hero__trust reveal">
          <div className="hero__trust-stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#a5b4fc">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="hero__trust-text">
            <strong>1,247</strong> partners trust us
          </span>
          <div className="hero__trust-avatars">
            <div className="hero__avatar" style={{ '--bg': '#059669' } as React.CSSProperties}>JD</div>
            <div className="hero__avatar" style={{ '--bg': '#0284c7' } as React.CSSProperties}>MK</div>
            <div className="hero__avatar" style={{ '--bg': '#7c3aed' } as React.CSSProperties}>SR</div>
          </div>
        </div>
      </div>
    </section>
  )
}
