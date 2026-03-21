import { Link } from 'react-router-dom'
import { ArrowRight, Buildings, Wrench, CurrencyDollar, Clock, ShieldCheck, MapPin } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './ICPChooser.css'

export default function ICPChooser() {
  const ref = useScrollReveal()

  return (
    <section className="icp-chooser section" ref={ref}>
      <div className="container">
        <div className="icp-chooser__header reveal">
          <span className="eyebrow">Choose Your Path</span>
          <h2 className="heading-section">Which side are you on?</h2>
        </div>

        <div className="icp-chooser__grid reveal-stagger">
          <Link to="/reps" className="icp-chooser__card reveal">
            <div className="card-shell">
              <div className="card-core icp-chooser__card-inner icp-chooser__card-inner--reps">
                <div className="icp-chooser__card-icon">
                  <Buildings size={32} weight="duotone" />
                </div>
                <h3 className="icp-chooser__card-title">
                  I'm a company with sales reps
                </h3>
                <p className="icp-chooser__card-subtitle">
                  Solar, pest control, or home services companies looking to add
                  a $3,000/sale revenue stream.
                </p>
                <ul className="icp-chooser__card-bullets">
                  <li><CurrencyDollar size={16} weight="bold" /> $3,000 commission per sale</li>
                  <li><Clock size={16} weight="bold" /> Certified in about 1 hour</li>
                  <li><ShieldCheck size={16} weight="bold" /> We handle installation and support</li>
                </ul>
                <span className="icp-chooser__card-cta">
                  Learn more <ArrowRight size={16} weight="bold" />
                </span>
              </div>
            </div>
          </Link>

          <Link to="/installers" className="icp-chooser__card reveal">
            <div className="card-shell">
              <div className="card-core icp-chooser__card-inner icp-chooser__card-inner--installers">
                <div className="icp-chooser__card-icon icp-chooser__card-icon--dark">
                  <Wrench size={32} weight="duotone" />
                </div>
                <h3 className="icp-chooser__card-title">
                  I'm an installer or fulfillment company
                </h3>
                <p className="icp-chooser__card-subtitle">
                  Water purification installers and plumbers looking for pre-sold
                  jobs at your standard rates.
                </p>
                <ul className="icp-chooser__card-bullets">
                  <li><MapPin size={16} weight="bold" /> Leads in your service area</li>
                  <li><CurrencyDollar size={16} weight="bold" /> Charge your standard rates</li>
                  <li><Clock size={16} weight="bold" /> Pre-sold customers, no chasing</li>
                </ul>
                <span className="icp-chooser__card-cta">
                  Learn more <ArrowRight size={16} weight="bold" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
