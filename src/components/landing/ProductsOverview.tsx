import { Drop, ShieldCheck } from '@phosphor-icons/react'
import { products } from '../../data/products'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './ProductsOverview.css'

export default function ProductsOverview() {
  const ref = useScrollReveal()

  return (
    <section className="products section" id="products" ref={ref}>
      <div className="container">
        <div className="products__header reveal">
          <span className="eyebrow">
            <ShieldCheck weight="fill" size={12} />
            Premium Products
          </span>
          <h2 className="heading-section">
            NSF-certified systems, 10-year warranty
          </h2>
          <p className="body-text">
            Every system we sell is backed by a comprehensive warranty and
            installed by certified professionals. Quality your customers trust.
          </p>
        </div>

        <div className="products__grid reveal-stagger">
          {products.map((product) => (
            <div className="products__card reveal" key={product.id}>
              <div className="card-shell">
                <div className="card-core">
                  <div className="products__card-top">
                    <div className="products__card-icon">
                      <Drop size={24} weight="duotone" />
                    </div>
                    <span className="products__card-type">{product.type}</span>
                  </div>
                  <h3 className="products__card-name">{product.name}</h3>
                  <p className="products__card-desc">{product.description}</p>
                  <ul className="products__card-features">
                    {product.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                  <div className="products__card-warranty">
                    <ShieldCheck size={16} weight="fill" />
                    <span>{product.warranty} warranty</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
