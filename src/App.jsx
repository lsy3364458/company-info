import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ENFNutrition from './pages/ENFNutrition'
import CraftTour from './pages/CraftTour'
import AboutLayout from './pages/about/AboutLayout'
import GroupProfile from './pages/about/GroupProfile'
import DevelopmentHistory from './pages/about/DevelopmentHistory'
import GroupStructure from './pages/about/GroupStructure'
import CorporateNews from './pages/about/CorporateNews'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="enf-nutrition" element={<ENFNutrition />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<Navigate to="/about/profile" replace />} />
          <Route path="profile" element={<GroupProfile />} />
          <Route path="history" element={<DevelopmentHistory />} />
          <Route path="structure" element={<GroupStructure />} />
          <Route path="news" element={<CorporateNews />} />
        </Route>
        <Route path="craft-tour" element={<CraftTour />} />
      </Route>
    </Routes>
  )
}


