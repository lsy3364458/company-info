import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const menuItems = [
  { path: '/', label: '首页' },
  { path: '/products', label: '全线产品' },
  { path: '/enf-nutrition', label: 'ENF情绪营养' },
  { path: '/about', label: '关于心宥' },
  { path: '/craft-tour', label: '工艺巡讲' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location.pathname, closeMenu])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">心</span>
          <span className="navbar__logo-text">心宥<small>· 用心呵护</small></span>
        </Link>

        <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__menu-list">
            {menuItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `navbar__menu-link ${isActive ? 'navbar__menu-link--active' : ''}`
                  }
                  end={item.path === '/'}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>

        {menuOpen && (
          <div className="navbar__overlay" onClick={closeMenu} />
        )}
      </div>
    </header>
  )
}
