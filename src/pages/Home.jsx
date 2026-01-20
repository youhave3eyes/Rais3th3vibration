import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Methods from '../components/home/Methods'
import FrequencyPlayer from '../components/home/FrequencyPlayer'
import HighVibeFood from '../components/home/HighVibeFood'
import VibeCalculator from '../components/home/VibeCalculator'
import MatrixRain from '../components/effects/MatrixRain'
import TruthSeekerSection from '../components/sections/TruthSeekerSection'
import MeditationSection from '../components/sections/MeditationSection'
import HealthFoodSection from '../components/sections/HealthFoodSection'
import RabbitHolePortal from '../components/sections/RabbitHolePortal'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative', background: '#000000', minHeight: '100vh' }}
    >
      {/* Matrix Rain Background Effect - PRIORITY VISUAL */}
      <MatrixRain />
      
      {/* Original Sections */}
      <Hero />
      <About />
      
      {/* New Truth Seeker Portal */}
      <TruthSeekerSection />
      
      {/* Meditation & Consciousness */}
      <MeditationSection />
      
      {/* Sacred Nutrition */}
      <HealthFoodSection />
      
      {/* Down the Rabbit Hole - Truth Portal */}
      <RabbitHolePortal />
      
      {/* Original Sections */}
      <Methods />
      <FrequencyPlayer />
      <HighVibeFood />
      <VibeCalculator />
    </motion.div>
  )
}

export default Home
