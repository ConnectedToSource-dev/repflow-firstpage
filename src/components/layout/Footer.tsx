import { Link } from 'react-router-dom'
import { Drop } from '@phosphor-icons/react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <Drop weight="duotone" size={22} />
              <span>HomeBioHackers</span>
            </Link>
            <p className="footer__tagline">
              Connecting sales professionals with certified installers to deliver
              cleaner water and healthier homes across America.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Platform</h4>
            <a href="#platform" className="footer__link">How It Works</a>
            <a href="#products" className="footer__link">Products</a>
            <a href="#testimonials" className="footer__link">Success Stories</a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Partners</h4>
            <Link to="/reps" className="footer__link">For Sales Teams</Link>
            <Link to="/installers" className="footer__link">For Installers</Link>
            <a href="#faq" className="footer__link">FAQ</a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Company</h4>
            <a href="#" className="footer__link">About</a>
            <a href="#" className="footer__link">Contact</a>
            <a href="#" className="footer__link">Privacy Policy</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 HomeBioHackers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
