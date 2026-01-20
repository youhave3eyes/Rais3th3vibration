import { motion } from 'framer-motion'
import MatrixRain from '../components/effects/MatrixRain'

const PlantMedicine = () => {
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
        borderBottom: '2px solid rgba(58, 134, 255, 0.3)',
        position: 'relative'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍄</div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3A86FF 0%, #8338EC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              SACRED PLANT MEDICINE
            </h1>
            <p style={{
              color: '#94A3B8',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Journey Beyond the Veil - Entheogenic Plants & Consciousness Expansion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <PlantMedicineContent />
    </motion.div>
  )
}

const PlantMedicineContent = () => {
  const plants = [
    {
      name: 'Ayahuasca',
      icon: '🌿',
      description: 'The master teacher plant. A brew combining DMT-containing plants with MAOI inhibitors. Facilitates profound visions, healing, and direct communion with the plant consciousness and higher dimensions.',
      effects: 'Visions • Healing • Plant Communication • Timeline Travel',
      color: '#3A86FF'
    },
    {
      name: 'Psilocybin Mushrooms',
      icon: '🍄',
      description: 'Sacred fungi containing psilocybin, used in ceremonies for millennia. Facilitates ego dissolution, cosmic consciousness, and deep emotional healing.',
      effects: 'Ego Death • Unity Consciousness • Healing • Cosmic Connection',
      color: '#8338EC'
    },
    {
      name: 'DMT (The Spirit Molecule)',
      icon: '✨',
      description: 'The most powerful consciousness-altering compound known. Produces hyperspace visions, direct ET contact experiences, and complete dissolution of consensus reality perception.',
      effects: 'Hyperspace • ET Contact • Reality Dissolution • Transcendence',
      color: '#FB5607'
    },
    {
      name: 'San Pedro/Mescaline',
      icon: '🌵',
      description: 'Ancient sacred cactus used in South American ceremonies for thousands of years. Produces euphoria, interconnectedness, and healing of ancestral trauma.',
      effects: 'Euphoria • Heart Opening • Ancestral Healing • Connection',
      color: '#FFBE0B'
    },
    {
      name: 'Salvia Divinorum',
      icon: '🍃',
      description: 'The most powerful natural hallucinogen. Used shamically for deep journeys. Produces rapid dimensional shifts and encounters with other realms and intelligences.',
      effects: 'Dimensional Travel • Shamanic Journey • Reality Shift • Deep Healing',
      color: '#06D6A0'
    },
    {
      name: 'Ibogaine',
      icon: '🌳',
      description: 'Sacred African plant containing psychoactive alkaloids. Used in initiation ceremonies and for profound psychological healing and addiction treatment.',
      effects: 'Deep Healing • Life Review • Addiction Release • Spiritual Initiation',
      color: '#F5576C'
    }
  ]

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(58, 134, 255, 0.2) 100%)',
            border: '1px solid rgba(58, 134, 255, 0.4)',
            borderRadius: '12px',
            marginBottom: '3rem'
          }}
        >
          <h3 style={{
            color: '#3A86FF',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            🔮 The Psychonaut's Journey
          </h3>
          <p style={{
            color: '#CBD5E1',
            fontSize: '0.95rem',
            lineHeight: '1.7'
          }}>
            Sacred plant medicines are consciousness technologies - tools for direct experience of expanded awareness, healing trauma, and awakening to our cosmic nature. Approach with respect, intention, and proper preparation. These substances are not for recreation, but for spiritual evolution and healing.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {plants.map((plant, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: `0 0 30px ${plant.color}40` }}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: `1px solid ${plant.color}60`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                {plant.icon}
              </div>
              <h3 style={{
                color: plant.color,
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                {plant.name}
              </h3>
              <p style={{
                color: '#94A3B8',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                {plant.effects}
              </p>
              <p style={{
                color: '#CBD5E1',
                fontSize: '0.95rem',
                lineHeight: '1.7'
              }}>
                {plant.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(0, 217, 255, 0.2) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '12px'
          }}
        >
          <h3 style={{
            color: '#8B5CF6',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            🌟 Integration & Set & Setting
          </h3>
          <p style={{
            color: '#CBD5E1',
            fontSize: '0.95rem',
            lineHeight: '1.7'
          }}>
            The experience is only the beginning. Integration is where the real work happens. Keep a journal, work with a facilitator or therapist, and allow the insights to ripple through your life. Set (mental state) and Setting (physical environment) are crucial - approach sacred plants with reverence, intention, and proper preparation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PlantMedicine
