import { motion } from 'framer-motion'
import { useState } from 'react'
import MatrixRain from '../components/effects/MatrixRain'
import MusicHero from '../components/music/MusicHero'
import MusicPlayer from '../components/music/MusicPlayer'
import ArtistGrid from '../components/music/ArtistGrid'
import Playlists from '../components/music/Playlists'

const Music = () => {
  const [activeGenre, setActiveGenre] = useState('all')
  const [currentTrack, setCurrentTrack] = useState(null)

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
      <MusicHero />
      <MusicPlayer currentTrack={currentTrack} />
      <ArtistGrid 
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setCurrentTrack={setCurrentTrack}
      />
      <Playlists setCurrentTrack={setCurrentTrack} />
      
      {/* Sonic Frequency Healing Section */}
      <SonicFrequencyHealing />
    </motion.div>
  )
}

// Sonic Frequency Healing Component
const SonicFrequencyHealing = () => {
  const frequencies = [
    {
      hz: '174 Hz',
      name: 'Base Chakra Grounding',
      description: 'Reduces pain and stress, promotes healing and vitality',
      chakra: '🔴'
    },
    {
      hz: '285 Hz',
      name: 'Cell Regeneration',
      description: 'Repairs tissues and organs, accelerates healing',
      chakra: '🟠'
    },
    {
      hz: '396 Hz',
      name: 'Liberation from Fear',
      description: 'Removes subconscious fears and trauma',
      chakra: '🟡'
    },
    {
      hz: '417 Hz',
      name: 'Undoing Situations',
      description: 'Facilitates change and transformation',
      chakra: '🟢'
    },
    {
      hz: '528 Hz',
      name: 'Love & DNA Repair',
      description: 'The "Miracle Tone" - repairs DNA and increases love frequency',
      chakra: '🔵'
    },
    {
      hz: '639 Hz',
      name: 'Connection & Relationships',
      description: 'Enhances communication and harmony',
      chakra: '🟣'
    },
    {
      hz: '741 Hz',
      name: 'Intuition Awakening',
      description: 'Awakens intuition and inner strength',
      chakra: '🟤'
    },
    {
      hz: '852 Hz',
      name: 'Third Eye Activation',
      description: 'Enhances spiritual awareness and consciousness',
      chakra: '⚪'
    },
    {
      hz: '963 Hz',
      name: 'Crown Activation',
      description: 'Connects to pure cosmic consciousness',
      chakra: '✨'
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
            🎵 Sacred Frequency Healing
          </h2>
          <p style={{
            color: '#94A3B8',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ancient Solfeggio frequencies that attune your body, mind and spirit to higher vibrations
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {frequencies.map((freq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {freq.chakra}
              </div>
              <h3 style={{
                color: '#06B6D4',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                {freq.hz}
              </h3>
              <h4 style={{
                color: '#8B5CF6',
                fontSize: '1.05rem',
                fontWeight: '600',
                marginBottom: '0.8rem',
                textAlign: 'center'
              }}>
                {freq.name}
              </h4>
              <p style={{
                color: '#CBD5E1',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                {freq.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Music
