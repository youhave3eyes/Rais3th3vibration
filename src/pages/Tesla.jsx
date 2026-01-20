import { motion } from 'framer-motion'
import MatrixRain from '../components/effects/MatrixRain'

const Tesla = () => {
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
        borderBottom: '2px solid rgba(0, 217, 255, 0.3)',
        position: 'relative'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00D9FF 0%, #0099FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              NIKOLA TESLA & FREE ENERGY
            </h1>
            <p style={{
              color: '#94A3B8',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Unlocking the Secrets of Wireless Energy Transmission and Zero-Point Technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <TeslaContent />
    </motion.div>
  )
}

const TeslaContent = () => {
  const sections = [
    {
      title: 'Who Was Nikola Tesla?',
      icon: '🧑‍🔬',
      content: `Nikola Tesla (1856-1943) was a Serbian-American inventor and engineer whose work laid the foundation for modern electrical systems. A true visionary, Tesla understood the fundamental principles of energy manipulation and cosmic forces that mainstream science refuses to acknowledge.`,
      color: '#00D9FF'
    },
    {
      title: 'Wireless Energy Transmission',
      icon: '📡',
      content: `Tesla discovered how to transmit electrical energy wirelessly through the Earth itself using the Wardenclyffe Tower. This technology threatened fossil fuel industries, leading to suppression of his work and removal of historical records.`,
      color: '#0099FF'
    },
    {
      title: 'Zero-Point Energy',
      icon: '♾️',
      content: `Tesla understood what modern quantum physics confirms: there exists infinite, limitless energy in empty space itself. Zero-point energy is the key to unlimited free power for all humanity - the real reason governments hide this technology.`,
      color: '#8B5CF6'
    },
    {
      title: 'Scalar Waves',
      icon: '〰️',
      content: `Tesla discovered scalar waves (non-Hertzian waves) that travel through space differently than electromagnetic waves. These waves can penetrate any material and are the basis for advanced energy devices and consciousness technology.`,
      color: '#06B6D4'
    },
    {
      title: 'Consciousness & Frequency',
      icon: '🧠',
      content: `Tesla stated: "If you wish to understand the Universe, think in terms of energy, frequency and vibration." He understood that consciousness itself is a frequency that can be manipulated and enhanced through proper energetic alignment.`,
      color: '#06D6A0'
    },
    {
      title: 'Modern Applications',
      icon: '🔋',
      content: `Advanced researchers are recreating Tesla technology for free energy devices, scalar energy generators, and frequency-based healing tools. These technologies are suppressed by global power structures but are slowly being rediscovered by independent scientists.`,
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

export default Tesla
