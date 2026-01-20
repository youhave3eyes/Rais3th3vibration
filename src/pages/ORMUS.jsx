import { motion } from 'framer-motion'
import MatrixRain from '../components/effects/MatrixRain'

const ORMUS = () => {
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
      
      {/* Hero Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
        borderBottom: '2px solid rgba(255, 215, 0, 0.3)',
        position: 'relative'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              MONOATOMIC GOLD & ORMUS
            </h1>
            <p style={{
              color: '#94A3B8',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              The Elixir of the Gods - Activate Your Pineal Gland and Ascend to Higher Consciousness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <ORMUSContent />
    </motion.div>
  )
}

const ORMUSContent = () => {
  const sections = [
    {
      title: 'What is ORMUS?',
      icon: '🔬',
      content: `ORMUS (Orbitally Rearranged Monatomic Elements) represents elements in a unique state where each atom exists independently. This ancient alchemical knowledge, rediscovered by David Hudson in 1975, reveals that approximately 5% of gold exists in a monoatomic state in nature.`,
      color: '#FFD700'
    },
    {
      title: 'Historical Significance',
      icon: '📜',
      content: `Ancient alchemists and secret societies have known about monoatomic gold for millennia. Called "The Philosopher's Stone," "Manna," and "White Powder Gold," it has been used in sacred rituals and spiritual practices across all ancient civilizations.`,
      color: '#FFA500'
    },
    {
      title: 'Pineal Gland Activation',
      icon: '🧠',
      content: `ORMUS is believed to activate and decalify the pineal gland - your third eye and connection to higher consciousness. Users report enhanced intuition, heightened awareness, vivid dreams, and access to multidimensional consciousness.`,
      color: '#8B5CF6'
    },
    {
      title: 'Spiritual Benefits',
      icon: '✨',
      content: `Experience expanded consciousness, enhanced meditation states, connection to higher self, DNA activation, improved psychic abilities, and elevation of personal vibration to match the frequency of ascension.`,
      color: '#06B6D4'
    },
    {
      title: 'Physical Benefits',
      icon: '💪',
      content: `Potential health improvements include increased energy, improved cellular regeneration, enhanced immune function, better sleep quality, and overall vitalization of the physical vessel.`,
      color: '#06D6A0'
    },
    {
      title: 'How to Use',
      icon: '🧪',
      content: `Start with small amounts (1-3 drops daily). Take with intention, setting your consciousness toward spiritual evolution. Best consumed in the morning on an empty stomach or before meditation. Quality sourcing is crucial - ensure you purchase from reputable alchemical suppliers.`,
      color: '#FB5607'
    }
  ]

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: `0 0 30px ${section.color}40` }}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: `1px solid ${section.color}60`,
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
                {section.icon}
              </div>
              <h3 style={{
                color: section.color,
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {section.title}
              </h3>
              <p style={{
                color: '#CBD5E1',
                fontSize: '0.95rem',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ORMUS
