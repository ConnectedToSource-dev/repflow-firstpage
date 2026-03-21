import { Link } from 'react-router-dom'
import { ArrowRight, Buildings, Wrench, CurrencyDollar, Clock, ShieldCheck, MapPin, Package, Timer } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './ICPChooser.css'

export default function ICPChooser() {
  const ref = useScrollReveal()

  return (
    <section className="icp-chooser section" ref={ref}>
      <div className="container">
        <div className="icp-chooser__header reveal">
          <span className="eyebrow">Choose Your Path</span>
          <h2 className="heading-section">Two ways to partner with HomeBioHackers</h2>
          <p className="body-text">
            Whether your team sells at the door or installs under the sink — there's a place
            for you on the platform. Pick the path that fits your business.
          </p>
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
                  Your reps are already inside the home. Give them a high-ticket water
                  purification product to upsell — we handle the rest.
                </p>
                <ul className="icp-chooser__card-bullets">
                  <li><CurrencyDollar size={16} weight="bold" /> Add a $3,000+ product to every home visit</li>
                  <li><ShieldCheck size={16} weight="bold" /> Full training and sales tools included</li>
                  <li><Package size={16} weight="bold" /> Zero inventory, zero fulfillment — we handle installation</li>
                  <li><Timer size={16} weight="bold" /> Your reps start selling within one hour</li>
                </ul>
                <span className="icp-chooser__card-cta">
                  Apply as a sales partner <ArrowRight size={16} weight="bold" />
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
                  Stop paying per lead. Receive pre-sold installation jobs from our sales
                  network — for one flat monthly fee that's less than a single Google Ads lead.
                </p>
                <ul className="icp-chooser__card-bullets">
                  <li><ShieldCheck size={16} weight="bold" /> Receive pre-sold jobs, not cold leads</li>
                  <li><CurrencyDollar size={16} weight="bold" /> One flat monthly fee — no per-lead charges</li>
                  <li><Clock size={16} weight="bold" /> Your installation price stays your installation price</li>
                  <li><MapPin size={16} weight="bold" /> Choose your territory, your schedule, your capacity</li>
                </ul>
                <span className="icp-chooser__card-cta">
                  Apply as an installer <ArrowRight size={16} weight="bold" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
