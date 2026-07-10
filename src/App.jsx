import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ENFNutrition from './pages/ENFNutrition'
import About from './pages/About'
import CraftTour from './pages/CraftTour'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="enf-nutrition" element={<ENFNutrition />} />
        <Route path="about" element={<About />} />
        <Route path="craft-tour" element={<CraftTour />} />
      </Route>
    </Routes>
  )
}
