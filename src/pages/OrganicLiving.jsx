import { motion } from 'framer-motion'
import MatrixRain from '../components/effects/MatrixRain'

const OrganicLiving = () => {
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
        borderBottom: '2px solid rgba(6, 214, 160, 0.3)',
        position: 'relative'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #06D6A0 0%, #3A86FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              ORGANIC LIVING & VITALITY
            </h1>
            <p style={{
              color: '#94A3B8',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Cleanse Your Temple & Attune to Nature's High Frequency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <OrganicLivingContent />
    </motion.div>
  )
}

const OrganicLivingContent = () => {
  const principles = [
    {
      title: 'Organic Nutrition',
      icon: '🥗',
      description: 'Raw, living foods that vibrate at the highest frequency. No pesticides, no GMOs, no synthetic chemicals. Your body is a frequency receiver - feed it only the purest information.',
      color: '#06D6A0'
    },
    {
      title: 'Superfoods & Adaptogens',
      icon: '💪',
      description: 'Goji berries, spirulina, ashwagandha, reishi, cacao. These ancient superfoods contain crystalline structures that align with cosmic frequencies and enhance cellular vitality.',
      color: '#3A86FF'
    },
    {
      title: 'Water Consciousness',
      icon: '💧',
      description: 'Water holds memory and frequency. Drink structured, energized water. Bless your water with gratitude and intention. Filtered spring water resonates at the healing frequency of 528Hz.',
      color: '#06B6D4'
    },
    {
      title: 'Detoxification Protocol',
      icon: '🧹',
      description: 'Remove heavy metals, fluoride, parasites, and toxins from your physical vessel. Activated charcoal, bentonite clay, herbal teas. A clean body vibrates higher.',
      color: '#FFBE0B'
    },
    {
      title: 'Fasting & Cellular Renewal',
      icon: '⏰',
      description: 'Intermittent and extended fasting trigger autophagy - your cells cleaning themselves at the quantum level. Fasting raises spiritual frequency and accelerates healing.',
      color: '#FB5607'
    },
    {
      title: 'Herbal Medicine',
      icon: '🌱',
      description: 'Turmeric, ginger, St. Johns Wort, mugwort, chamomile. Ancient herbal allies that heal the body and expand consciousness naturally without synthetic interference.',
      color: '#8B5CF6'
    },
    {
      title: 'EMF Protection',
      icon: '🛡️',
      description: 'Minimize exposure to WiFi, 5G, and cell radiation. Use Faraday cages, grounding mats, shungite. Protect your bioelectric field from technological pollution.',
      color: '#F5576C'
    },
    {
      title: 'Earthing & Grounding',
      icon: '🌍',
      description: 'Direct contact with Earth\'s electromagnetic field. Walk barefoot on soil daily. This grounds your frequency and syncs you with planetary harmonics.',
      color: '#06D6A0'
    },
    {
      title: 'Sunlight & Circadian Rhythm',
      icon: '☀️',
      description: 'Morning sunlight activates vitamin D and synchronizes your pineal gland. Get 20+ minutes of sun daily without sunscreen. Align with natural rhythms.',
      color: '#FFBE0B'
    },
    {
      title: 'Breathwork & Pranayama',
      icon: '💨',
      description: 'Your breath is life force energy. Practice conscious breathing, box breathing, Wim Hof method. Oxygenate your cells and raise your cellular frequency.',
      color: '#06B6D4'
    },
    {
      title: 'Movement & Exercise',
      icon: '🧘',
      description: 'Yoga, Qigong, dance, hiking. Movement aligns your chakras and moves energy through your meridians. Exercise is spiritual practice, not just physical.',
      color: '#3A86FF'
    },
    {
      title: 'Holistic Healing Modalities',
      icon: '✨',
      description: 'Acupuncture, massage, sound baths, crystal healing, energy work. These align your energy body and facilitate deep healing at the quantum level.',
      color: '#8B5CF6'
    }
  ]

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -5, boxShadow: `0 0 30px ${principle.color}40` }}
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: `1px solid ${principle.color}60`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                {principle.icon}
              </div>
              <h3 style={{
                color: principle.color,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.8rem',
                textAlign: 'center'
              }}>
                {principle.title}
              </h3>
              <p style={{
                color: '#CBD5E1',
                fontSize: '0.95rem',
                lineHeight: '1.7'
              }}>
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Daily Routine Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 214, 160, 0.2) 100%)',
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
            🌅 Daily Vitality Routine
          </h3>
          <div style={{
            color: '#CBD5E1',
            fontSize: '0.95rem',
            lineHeight: '1.8'
          }}>
            <p><strong>Morning (Sunrise):</strong> Sunlight exposure, cold water immersion, breathwork, meditation</p>
            <p><strong>Breakfast:</strong> Raw smoothie with superfoods, adaptogens, and frequency-aligned nutrition</p>
            <p><strong>Midday:</strong> Earthing (barefoot on soil), movement, herbal tea</p>
            <p><strong>Afternoon:</strong> Intermittent fasting window, hydration with intention</p>
            <p><strong>Evening:</strong> Dinner with organic whole foods, light movement, gratitude practice</p>
            <p><strong>Night (Pre-Sleep):</strong> Reduce EMF exposure, meditation, journaling, adequate rest</p>
          </div>
        </motion.div>

        {/* Transformation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(6, 214, 160, 0.2) 0%, rgba(3, 166, 255, 0.2) 100%)',
            border: '1px solid rgba(6, 214, 160, 0.4)',
            borderRadius: '12px'
          }}
        >
          <h3 style={{
            color: '#06D6A0',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            ✨ The 90-Day Transformation
          </h3>
          <p style={{
            color: '#CBD5E1',
            fontSize: '0.95rem',
            lineHeight: '1.7'
          }}>
            Commit to 90 days of organic living, detoxification, and frequency alignment. By week 4, you'll notice energy increases. By week 8, mental clarity improves dramatically. By week 12, your entire reality shifts - you'll vibrate higher, attract better people and opportunities, and experience life-changing healing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OrganicLiving
