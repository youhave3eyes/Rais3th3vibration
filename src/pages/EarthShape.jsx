import { motion } from 'framer-motion'
import MatrixRain from '../components/effects/MatrixRain'

const EarthShape = () => {
  const cards = [
    {
      title: 'What we can measure',
      icon: '📏',
      body:
        'We can directly measure curvature over long distances, gravity variations, and satellite orbits. A good “truth-seeking” approach is to compare claims against repeatable measurements.',
      color: '#06B6D4'
    },
    {
      title: 'Earth models people discuss',
      icon: '🧭',
      body:
        'You’ll see multiple models discussed online (globe/oblate spheroid, geoid, flat-plane maps, domes, and more). This page is a hub to explore the arguments and the tests people propose.',
      color: '#8B5CF6'
    },
    {
      title: 'Best “experiment mindset”',
      icon: '🧪',
      body:
        'Focus on: (1) clear predictions, (2) accessible tools, (3) control variables, (4) sharing raw data. Repeatability beats debate.',
      color: '#06D6A0'
    },
    {
      title: 'Navigation & astronomy',
      icon: '🌌',
      body:
        'Star trails, time zones, long-haul flight routes, and celestial navigation provide strong constraints on Earth geometry. Compare what each model predicts for observers in different hemispheres.',
      color: '#FFBE0B'
    }
  ]

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

      <section
        style={{
          padding: '6rem 2rem',
          background:
            'linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(30, 41, 59, 0.82) 100%)',
          borderBottom: '2px solid rgba(6, 182, 212, 0.25)',
          position: 'relative'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌍</div>
            <h1
              style={{
                fontSize: '3.2rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem'
              }}
            >
              THE TRUE SHAPE OF EARTH
            </h1>
            <p
              style={{
                color: '#CBD5E1',
                fontSize: '1.1rem',
                maxWidth: '780px',
                margin: '0 auto',
                background: 'rgba(0,0,0,0.35)',
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(6, 182, 212, 0.25)'
              }}
            >
              A curiosity-first hub: compare models, run experiments, and strengthen discernment.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {cards.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -4, boxShadow: `0 0 26px ${c.color}40` }}
                className="rtv-card"
                style={{ borderColor: `${c.color}66` }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem', textAlign: 'center' }}>{c.icon}</div>
                <h3 style={{ color: c.color, fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '0.75rem', textAlign: 'center' }}>
                  {c.title}
                </h3>
                <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.7' }}>{c.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rtv-card"
            style={{ marginTop: '1.5rem', borderColor: 'rgba(139, 92, 246, 0.5)' }}
          >
            <h3 style={{ color: '#8B5CF6', fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              🧿 Discernment note
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.75' }}>
              If you want, I can add “experiments you can do” (laser level + long distance, star observations by latitude,
              time zone consistency checks) and link out to sources. Tell me if you want this page to take a side (one
              model) or remain an experiment-based exploration hub.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default EarthShape
