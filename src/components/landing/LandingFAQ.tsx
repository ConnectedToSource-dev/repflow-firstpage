import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { faqReps, faqInstallers, type FAQItem } from '../../data/faq'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './LandingFAQ.css'

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-item__question">{item.question}</span>
        <CaretDown size={18} weight="bold" className="faq-item__chevron" />
      </button>
      <div className="faq-item__content">
        <p className="faq-item__answer">{item.answer}</p>
      </div>
    </div>
  )
}

export default function LandingFAQ() {
  const ref = useScrollReveal()
  const [activeTab, setActiveTab] = useState<'reps' | 'installers'>('reps')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const currentFaq = activeTab === 'reps' ? faqReps : faqInstallers

  const handleTabSwitch = (tab: 'reps' | 'installers') => {
    setActiveTab(tab)
    setOpenIndex(0)
  }

  return (
    <section className="landing-faq section" id="faq" ref={ref}>
      <div className="container">
        <div className="landing-faq__header reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-section">Questions we hear most</h2>
        </div>

        <div className="landing-faq__body reveal">
          <div className="landing-faq__tabs">
            <button
              className={`landing-faq__tab ${activeTab === 'reps' ? 'landing-faq__tab--active' : ''}`}
              onClick={() => handleTabSwitch('reps')}
            >
              For Sales Teams
            </button>
            <button
              className={`landing-faq__tab ${activeTab === 'installers' ? 'landing-faq__tab--active' : ''}`}
              onClick={() => handleTabSwitch('installers')}
            >
              For Installers
            </button>
          </div>

          <div className="landing-faq__list">
            {currentFaq.map((item, i) => (
              <FAQAccordionItem
                key={`${activeTab}-${i}`}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
