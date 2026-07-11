import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './Layout.css'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`layout ${isHome ? 'layout--home' : ''}`}>
      <Navbar />
      <main className={`layout__main ${isHome ? 'layout__main--home' : ''}`}>
        <Outlet />
      </main>
      {!isHome && <Footer />}
    </div>
  )
}
