import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './AboutLayout.css'
import './AboutPages.css'

const aboutTabs = [
  { path: '/about/profile', label: '集团简介' },
  { path: '/about/history', label: '发展历程' },
  { path: '/about/structure', label: '集团架构' },
  { path: '/about/news', label: '企业动态' },
]

export default function AboutLayout() {
  const location = useLocation()
  const isActive = (path) => {
    if (path === '/about/profile') {
      return location.pathname === '/about' || location.pathname === '/about/profile'
    }
    return location.pathname === path
  }

  return (
    <div className="about-layout">
      {/* Banner */}
      <div className="about-layout__banner">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            关于心宥
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            以科学为基石，以温暖为初心
          </motion.p>
        </div>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="about-layout__tabs">
        <div className="container">
          <div className="about-layout__tabs-inner">
            {aboutTabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive: active }) =>
                  `about-layout__tab ${active || isActive(tab.path) ? 'about-layout__tab--active' : ''}`
                }
                end={tab.path === '/about/profile'}
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="about-layout__content">
        <Outlet />
      </div>
    </div>
  )
}
