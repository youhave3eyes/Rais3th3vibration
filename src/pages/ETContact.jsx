import { motion } from 'framer-motion'
import MatrixRain from '../components/effects/MatrixRain'

const ETContact = () => {
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
        borderBottom: '2px solid rgba(157, 78, 221, 0.3)',
        position: 'relative'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👽</div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #9D4EDD 0%, #7209B7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              EXTRATERRESTRIAL CONTACT
            </h1>
            <p style={{
              color: '#94A3B8',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Navigate Contact with Benevolent and Challenging Beings Across the Cosmos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <ETContactContent />
    </motion.div>
  )
}

const ETContactContent = () => {
  const benevolent = [
    {
      name: 'Pleiadians',
      icon: '⭐',
      description: 'Loving, advanced beings from the Pleiades star cluster. Known for their assistance in human evolution and spiritual awakening. Advocates of light, love, and galactic harmony.',
      color: '#06B6D4'
    },
    {
      name: 'Arcturians',
      icon: '🌟',
      description: 'Highly evolved interdimensional beings of pure light. Serve as cosmic guides and spiritual teachers. Known for healing frequencies and consciousness expansion technology.',
      color: '#8B5CF6'
    },
    {
      name: 'Sirians',
      icon: '✨',
      description: 'Ancient wisdom keepers from Sirius. Guardians of cosmic knowledge and divine law. Assist in DNA activation and spiritual development of star seeds.',
      color: '#06D6A0'
    }
  ]

  const challenging = [
    {
      name: 'Reptilians/Draconians',
      icon: '🐉',
      description: 'Reptilian beings with varying agendas. Some serve control systems, others seek harmony. Understanding their motivations is key to navigating multidimensional politics.',
      color: '#FF6B9D'
    },
    {
      name: 'Grey Beings',
      icon: '👾',
      description: 'Artificial or hybrid beings often misunderstood. Involved in genetic experiments and data collection. Can be negotiated with through consciousness and clear intention.',
      color: '#FFBE0B'
    },
    {
      name: 'Dark Archons',
      icon: '⚫',
      description: 'Service-to-self entities attempting to maintain control. Understanding their tactics is essential for spiritual sovereignty and protection.',
      color: '#F5576C'
    }
  ]

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <div className="container">
        {/* Benevolent Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #06B6D4 0%, #06D6A0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            ✨ Benevolent Star Nations
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {benevolent.map((being, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: `0 0 30px ${being.color}40` }}
                style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  border: `1px solid ${being.color}60`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {being.icon}
                </div>
                <h3 style={{
                  color: being.color,
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {being.name}
                </h3>
                <p style={{
                  color: '#CBD5E1',
                  fontSize: '0.95rem',
                  lineHeight: '1.7'
                }}>
                  {being.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenging Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #FF6B9D 0%, #FFBE0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            ⚡ Challenging Entities
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {challenging.map((being, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: `0 0 30px ${being.color}40` }}
                style={{
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  border: `1px solid ${being.color}60`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {being.icon}
                </div>
                <h3 style={{
                  color: being.color,
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {being.name}
                </h3>
                <p style={{
                  color: '#CBD5E1',
                  fontSize: '0.95rem',
                  lineHeight: '1.7'
                }}>
                  {being.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety Section */}
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
            🛡️ Contact Safety Protocol
          </h3>
          <p style={{
            color: '#CBD5E1',
            fontSize: '0.95rem',
            lineHeight: '1.7'
          }}>
            Always contact with clear intention, spiritual protection, and discernment. Set firm boundaries through visualization, invoke your highest guides, and trust your intuition. Never allow fear - it broadcasts vulnerability. Maintain sovereign consciousness and remember: you have the power to decline any contact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ETContact
