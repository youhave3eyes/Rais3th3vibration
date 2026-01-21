import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AppProvider } from './context/AppContext'
import ErrorBoundary from './components/ErrorBoundary'

// Layout Components
import Navbar from './components/layout/Navbar'
import MatrixNavbar from './components/layout/MatrixNavbar'
import Footer from './components/layout/Footer'
import CosmicBackground from './components/layout/CosmicBackground'

// Pages
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Community from './pages/Community'
import Music from './pages/Music'
import Shop from './pages/Shop'
import ORMUS from './pages/ORMUS'
import Tesla from './pages/Tesla'
import ETContact from './pages/ETContact'
import PlantMedicine from './pages/PlantMedicine'
import OrganicLiving from './pages/OrganicLiving'
import EarthShape from './pages/EarthShape'
import SacredGeometry from './pages/SacredGeometry'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <div className="app">
            <CosmicBackground />
            <MatrixNavbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/knowledge" element={<Knowledge />} />
                <Route path="/community" element={<Community />} />
                <Route path="/music" element={<Music />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/ormus" element={<ORMUS />} />
                <Route path="/tesla" element={<Tesla />} />
                <Route path="/contact" element={<ETContact />} />
                <Route path="/medicine" element={<PlantMedicine />} />
                <Route path="/organic" element={<OrganicLiving />} />
                <Route path="/earth-shape" element={<EarthShape />} />
                <Route path="/sacred-geometry" element={<SacredGeometry />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    </ErrorBoundary>
  )
}

export default App
