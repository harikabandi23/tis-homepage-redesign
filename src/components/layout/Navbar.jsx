import './Navbar.css'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-mark">TIS</span>

          <span className="navbar__brand-text">
            Tulas International
            <small>School</small>
          </span>
        </a>

        <nav className="navbar__desktop">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#admissions" className="navbar__cta">
          Enquire Now
          <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="navbar__menu-button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="navbar__mobile">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a href="#admissions" className="navbar__mobile-cta" onClick={closeMenu}>
            Enquire Now
            <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar