import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { List, X, Drop } from '@phosphor-icons/react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="HomeBioHackers home">
            <Drop weight="duotone" size={24} />
            <span>HomeBioHackers</span>
          </Link>

          <div className="navbar__links">
            <a href="#platform" className="navbar__link">Platform</a>
            <Link to="/reps" className="navbar__link">For Sales Teams</Link>
            <Link to="/installers" className="navbar__link">For Installers</Link>
          </div>

          <Link to="/reps" className="navbar__cta">
            Sign Up
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
          <a href="#platform" className="mobile-menu__link" style={{ '--delay': '0' } as React.CSSProperties} onClick={() => setMenuOpen(false)}>Platform</a>
          <Link to="/reps" className="mobile-menu__link" style={{ '--delay': '1' } as React.CSSProperties} onClick={() => setMenuOpen(false)}>For Sales Teams</Link>
          <Link to="/installers" className="mobile-menu__link" style={{ '--delay': '2' } as React.CSSProperties} onClick={() => setMenuOpen(false)}>For Installers</Link>
          <Link to="/reps" className="mobile-menu__link mobile-menu__link--cta" style={{ '--delay': '3' } as React.CSSProperties} onClick={() => setMenuOpen(false)}>Sign Up</Link>
        </div>
      </div>
    </>
  )
}
