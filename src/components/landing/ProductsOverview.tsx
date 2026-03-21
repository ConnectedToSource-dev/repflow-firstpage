import { Drop, ShieldCheck, ShieldCheckered, Users, CurrencyDollar, House, Drop as DropIcon, Leaf } from '@phosphor-icons/react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './ProductsOverview.css'

const benefits = [
  {
    icon: ShieldCheckered,
    title: 'Removes harmful contaminants',
    text: 'Filters out lead, PFAS, chlorine, and microplastics \u2014 the things families can\u2019t see but are drinking daily.',
  },
  {
    icon: Users,
    title: 'Safe water for the whole family',
    text: 'Every tap in the home delivers purified water \u2014 for drinking, cooking, bathing, and baby formula.',
  },
  {
    icon: CurrencyDollar,
    title: 'Eliminates bottled water costs',
    text: 'The average family spends $500\u2013$1,000/year on bottled water. This system pays for itself.',
  },
  {
    icon: House,
    title: 'Protects appliances and plumbing',
    text: 'Removes hard water minerals that cause scale buildup \u2014 extending the life of water heaters, dishwashers, and pipes.',
  },
  {
    icon: DropIcon,
    title: 'Better taste from every tap',
    text: 'No more chlorine smell or metallic taste. Clean, fresh water for drinking and cooking \u2014 straight from the faucet.',
  },
  {
    icon: Leaf,
    title: 'Reduces plastic waste',
    text: 'One system replaces thousands of single-use plastic bottles per year. A purchase homeowners feel good about.',
  },
]

export default function ProductsOverview() {
  const ref = useScrollReveal()

  return (
    <section className="product section" id="products" ref={ref}>
      <div className="container">
        <div className="product__header reveal">
          <span className="eyebrow">
            <Drop weight="fill" size={12} />
            The Product
          </span>
          <h2 className="heading-section">
            One system that changes everything about their water
          </h2>
          <p className="body-text">
            Your reps aren't just selling a filter — they're solving a problem every
            homeowner has but most don't think about. This is what makes the conversation
            at the door so easy.
          </p>
        </div>

        <div className="product__split reveal">
          {/* Left column — Product showcase */}
          <div className="product__showcase">
            <div className="card-shell">
              <div className="card-core product__showcase-inner">
                <div className="product__showcase-icon">
                  <Drop size={32} weight="duotone" />
                </div>
                <h3 className="product__name">[PRODUCT NAME]</h3>
                <p className="product__tagline">
                  Whole-home water purification — filtration, conditioning, and
                  reverse osmosis in one system.
                </p>

                <div className="product__certs">
                  <ShieldCheck size={16} weight="fill" />
                  <span>NSF-certified · 10-year warranty · Professional installation</span>
                </div>

                <div className="product__metrics">
                  <div className="product__metric">
                    <span className="product__metric-label">Avg sale price</span>
                    <span className="product__metric-value">$8,000</span>
                  </div>
                  <div className="product__metric">
                    <span className="product__metric-label">Rep commission</span>
                    <span className="product__metric-value">$1,000–$3,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Homeowner impact benefits */}
          <div className="product__benefits">
            {benefits.map((b) => (
              <div className="product__benefit" key={b.title}>
                <div className="product__benefit-icon">
                  <b.icon size={22} weight="duotone" />
                </div>
                <div className="product__benefit-content">
                  <h4 className="product__benefit-title">{b.title}</h4>
                  <p className="product__benefit-text">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="product__closing reveal">
          This is what your reps are bringing to the door. Not a hard sell — a solution
          homeowners didn't know they needed until someone showed them.
        </p>
      </div>
    </section>
  )
}
