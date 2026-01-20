import { motion } from 'framer-motion'
import { useState } from 'react'
import MatrixRain from '../components/effects/MatrixRain'
import ShopHero from '../components/shop/ShopHero'
import ProductGrid from '../components/shop/ProductGrid'
import VendorMarketplace from '../components/shop/VendorMarketplace'

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
      style={{ position: 'relative', background: '#000000', minHeight: '100vh' }}
    >
      <MatrixRain />
      <ShopHero />
      <ProductGrid 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <VendorMarketplace />
      
      {/* Consciousness Elevation Products Section */}
      <ElevationProducts />
    </motion.div>
  )
}

// Consciousness Elevation Products Component
const ElevationProducts = () => {
  const products = [
    {
      title: 'ORMUS/Monatomic Gold',
      icon: '✨',
      description: 'Premium monoatomic gold supplement for pineal gland activation',
      category: 'Supplements',
      color: '#FFD700'
    },
    {
      title: 'Scalar Energy Devices',
      icon: '⚡',
      description: 'Portable scalar wave generators for energy field optimization',
      category: 'Technology',
      color: '#00D9FF'
    },
    {
      title: 'Tesla Purple Plates',
      icon: '🔮',
      description: 'Orgone energy amplifiers inspired by Tesla technology',
      category: 'Technology',
      color: '#FF6B9D'
    },
    {
      title: 'Plant Medicine Kits',
      icon: '🍄',
      description: 'Ethically sourced sacred plants for ceremonial use',
      category: 'Botanicals',
      color: '#3A86FF'
    },
    {
      title: 'Organic Superfoods Bundle',
      icon: '🌿',
      description: 'Raw, organic, frequency-aligned superfoods for vitality',
      category: 'Nutrition',
      color: '#06D6A0'
    },
    {
      title: 'Sacred Geometry Jewelry',
      icon: '✡️',
      description: 'Flower of Life, Merkaba, and cosmic code pendants',
      category: 'Wearables',
      color: '#FB5607'
    },
    {
      title: 'Frequency Tuning Forks',
      icon: '🎵',
      description: '528Hz & Solfeggio frequency healing instruments',
      category: 'Sound',
      color: '#8B5CF6'
    },
    {
      title: 'Activation Oils & Tinctures',
      icon: '🧪',
      description: 'Alchemical blends for kundalini activation & chakra alignment',
      category: 'Herbal',
      color: '#FFBE0B'
    },
    {
      title: 'Extraterrestrial Contact Guide',
      icon: '👽',
      description: 'Complete manual for safe ET communication & channeling',
      category: 'Knowledge',
      color: '#9D4EDD'
    },
    {
      title: 'EMF Protection Amulets',
      icon: '🛡️',
      description: 'Quantum-shielded protection from 5G & negative frequencies',
      category: 'Protection',
      color: '#F5576C'
    },
    {
      title: 'Holographic Frequency Water',
      icon: '💧',
      description: 'Structured water encoded with healing frequencies',
      category: 'Hydration',
      color: '#4FACFE'
    },
    {
      title: 'Meditation Pod Courses',
      icon: '🧘',
      description: 'Advanced meditation programs for rapid consciousness expansion',
      category: 'Courses',
      color: '#A78BFA'
    }
  ]

  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
      borderTop: '2px solid rgba(139, 92, 246, 0.3)',
      position: 'relative'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            🌟 Consciousness Elevation Products
          </h2>
          <p style={{
            color: '#94A3B8',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Sacred tools and supplements for accelerating your spiritual evolution
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -5, boxShadow: `0 0 30px ${product.color}40` }}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: `1px solid ${product.color}60`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {product.icon}
              </div>
              <h3 style={{
                color: product.color,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                {product.title}
              </h3>
              <div style={{
                fontSize: '0.75rem',
                color: '#8B5CF6',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {product.category}
              </div>
              <p style={{
                color: '#CBD5E1',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                {product.description}
              </p>
              <button style={{
                width: '100%',
                padding: '0.8rem',
                marginTop: '1rem',
                background: `linear-gradient(135deg, ${product.color}40, ${product.color}20)`,
                border: `1px solid ${product.color}`,
                color: product.color,
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}>
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
