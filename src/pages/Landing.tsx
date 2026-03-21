import LandingHero from '../components/landing/LandingHero'
import PlatformShowcase from '../components/landing/PlatformShowcase'
import ICPChooser from '../components/landing/ICPChooser'
import ProductsOverview from '../components/landing/ProductsOverview'
import MoneyFlow from '../components/landing/MoneyFlow'
import LandingTestimonials from '../components/landing/LandingTestimonials'
import LandingFAQ from '../components/landing/LandingFAQ'
import LandingCTA from '../components/landing/LandingCTA'

export default function Landing() {
  return (
    <>
      <LandingHero />
      <PlatformShowcase />
      <ICPChooser />
      <ProductsOverview />
      <MoneyFlow />
      <LandingTestimonials />
      <LandingFAQ />
      <LandingCTA />
    </>
  )
}
