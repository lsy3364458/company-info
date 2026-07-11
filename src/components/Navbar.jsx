import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import wholemeLogo from '../assets/img/wholeme-logo.png'
import './Navbar.css'

const aboutSubItems = [
  { path: '/about/profile', label: '集团简介' },
  { path: '/about/history', label: '发展历程' },
  { path: '/about/structure', label: '集团架构' },
  { path: '/about/news', label: '企业动态' },
]

const menuItems = [
  { path: '/', label: '首页' },
  { path: '/products', label: 'WholeMe产品' },
  { path: '/enf-nutrition', label: 'ENF情绪营养' },
  { path: '/about', label: '关于心宥', hasDropdown: true },
  { path: '/craft-tour', label: '公益巡讲' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [])

 useEffect(() => {
   closeMenu()
 }, [location.pathname, closeMenu])

 /* Auto-hide navbar on mobile when scrolling down */
 useEffect(() => {
   if (window.innerWidth > 768) return
    /* Home page uses snap scroll with navbar compensation instead of auto-hide */
    if (location.pathname === '/') return
   const isHome = location.pathname === '/'
   let scrollEl
   if (isHome) {
      scrollEl = document.querySelector('.home')
    } else {
      scrollEl = window
    }
    if (!scrollEl) return
    const getY = () => (scrollEl === window ? window.scrollY : scrollEl.scrollTop)
    let prevY = getY()
    const THRESHOLD = 10
    const NAV_H = 64
    const onScroll = () => {
      const currY = getY()
      const delta = currY - prevY
      if (Math.abs(delta) > THRESHOLD) {
        if (delta > 0 && currY > NAV_H) {
          setHidden(true)
        } else if (delta < 0) {
          setHidden(false)
        }
      }
      prevY = currY
    }
    scrollEl.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      scrollEl.removeEventListener('scroll', onScroll)
      setHidden(false)
    }
  }, [location.pathname])

 useEffect(() => {
   const onScroll = () => {
     setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

const isAboutActive = location.pathname.startsWith('/about')

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${hidden ? 'navbar--hidden' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={wholemeLogo} alt="心宥" />
        </Link>

        <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__menu-list">
            {menuItems.map(item => {
              if (item.hasDropdown) {
                return (
                  <li
                    key={item.path}
                    className={`navbar__dropdown-item ${isAboutActive ? 'navbar__dropdown-item--active' : ''}`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`navbar__menu-link navbar__dropdown-trigger ${isAboutActive ? 'navbar__menu-link--active' : ''}`}
                      onClick={(e) => {
                        if (window.innerWidth <= 768) {
                          e.preventDefault()
                          setDropdownOpen(prev => !prev)
                        }
                      }}
                    >
                      {item.label}
                      <svg className="navbar__dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </Link>
                    <div className={`navbar__dropdown ${dropdownOpen ? 'navbar__dropdown--open' : ''}`}>
                      {aboutSubItems.map(sub => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className={({ isActive }) =>
                            `navbar__dropdown-link ${isActive ? 'navbar__dropdown-link--active' : ''}`}
                          onClick={closeMenu}
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </li>
                )
              }
              return (
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
              )
            })}
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

