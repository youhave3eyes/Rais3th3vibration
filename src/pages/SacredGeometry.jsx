import { motion } from 'framer-motion'
import MatrixRain from '../components/effects/MatrixRain'

const SacredGeometry = () => {
  const sections = [
    {
      title: 'Sacred Geometry Foundations',
      icon: '✡️',
      subtitle: 'The living language of patterns in nature, mind, and cosmos',
      items: [
        {
          title: 'Flower of Life',
          description:
            'A foundational geometric pattern found across cultures—often used as a meditation object for coherence, balance, and creation cycles.'
        },
        {
          title: 'Seed of Life',
          description:
            'Seven interlocking circles—symbolic of genesis, growth, and the blueprint behind biological patterning.'
        },
        {
          title: 'Vesica Piscis',
          description:
            'The intersection of two circles—often linked to polarity, creation, and the emergence of form from duality.'
        },
        {
          title: 'Golden Ratio (φ)',
          description:
            'A proportional relationship seen in spirals, plants, shells, and human design—useful as a study of natural harmony.'
        }
      ]
    },
    {
      title: 'Platonic Solids & Elemental Geometry',
      icon: '🧊',
      subtitle: 'Five archetypal forms and their energetic correspondences',
      items: [
        {
          title: 'Tetrahedron (Fire)',
          description:
            'Structure + ignition. Often associated with transformation, action, and will.'
        },
        {
          title: 'Cube / Hexahedron (Earth)',
          description:
            'Stability + grounding. Often associated with manifestation, structure, and physical coherence.'
        },
        {
          title: 'Octahedron (Air)',
          description:
            'Balance + breath. Often associated with mind, clarity, and circulation of energy.'
        },
        {
          title: 'Icosahedron (Water)',
          description:
            'Flow + emotion. Often associated with intuition, feeling states, and adaptability.'
        },
        {
          title: 'Dodecahedron (Aether)',
          description:
            'Unity + field. Often associated with higher mind, subtle energy, and expanded awareness.'
        }
      ]
    },
    {
      title: 'Energy, Vibration, & Magnetism',
      icon: '🧲',
      subtitle: 'Practical frameworks to raise coherence (body–mind–field)',
      items: [
        {
          title: 'Frequency & Resonance',
          description:
            'How sound, intention, breath, and focus can entrain your state. Explore solfeggio, binaural beats, and rhythmic breathing.'
        },
        {
          title: 'Heart Coherence',
          description:
            'A simple practice: slow breath + gratitude. Used for stabilizing the nervous system and enhancing clarity.'
        },
        {
          title: 'Magnetism & Field Hygiene',
          description:
            'Grounding, sunlight, hydration, and mindful tech boundaries help reduce noise and support a stronger biofield.'
        },
        {
          title: 'Subtle Energy Models',
          description:
            'Chakras, nadis, meridians—maps for attention and energy cultivation. Use them as practical metaphors and tracking tools.'
        }
      ]
    },
    {
      title: 'Meditation & Kundalini',
      icon: '🧘',
      subtitle: 'Inner technology: breath, focus, and nervous system mastery',
      items: [
        {
          title: 'Meditation (Foundations)',
          description:
            'Start with 5–10 minutes daily. Track breath, observe thoughts, return to the anchor. Consistency beats intensity.'
        },
        {
          title: 'Kundalini (Safety First)',
          description:
            'Move slowly. Prioritize grounding, hydration, sleep, and emotional regulation. If symptoms feel overwhelming, reduce intensity.'
        },
        {
          title: 'Breathwork (Practical)',
          description:
            'Try box breathing (4–4–4–4), coherent breathing (5–6 breaths/min), or gentle pranayama as a daily reset.'
        },
        {
          title: 'Visualization & Geometry Meditation',
          description:
            'Use a shape (merkaba, torus, cube) as a focus object—train attention and build a stable inner field.'
        }
      ]
    },
    {
      title: 'Earth, Nature, & Reality Models',
      icon: '🌍',
      subtitle: 'Study the world while staying curious, grounded, and discerning',
      items: [
        {
          title: 'Earth Energetics',
          description:
            'Ley lines, geomagnetism, Schumann resonance—explore how environment may affect mood, sleep, and vitality.'
        },
        {
          title: 'Sacred Sites',
          description:
            'Megolithic structures and ancient temples as potential resonant architectures—study design, location, and alignment.'
        },
        {
          title: 'Discernment',
          description:
            'Keep an open mind without losing critical thinking. Log experiences, test claims, and iterate your understanding.'
        }
      ]
    },
    {
      title: 'Electroforming & Conscious Craft',
      icon: '⚗️',
      subtitle: 'Hands-on alchemy: creating resonant objects and tools',
      items: [
        {
          title: 'Electroforming Basics',
          description:
            'Using electricity to plate metal onto objects—often used for jewelry, crystal tools, and creative builds.'
        },
        {
          title: 'Crystals & Conductivity',
          description:
            'How materials, intent, and design combine. Document your builds and track effects as a personal experiment.'
        },
        {
          title: 'Resonant Tools',
          description:
            'Tuning forks, singing bowls, orgonite-style art, coils—build, test, refine. Craft with safety and precision.'
        }
      ]
    }
  ]

  const suggestedTopics = [
    { title: 'Sound Healing', icon: '🎶', note: 'Tuning forks, bowls, drones, solfeggio, harmonics' },
    { title: 'Lucid Dreaming', icon: '🌙', note: 'Dream recall, reality checks, intention setting' },
    { title: 'Astral & OBE Training', icon: '🌀', note: 'Relaxation, vibrational stage, protection/grounding' },
    { title: 'Detox & Fasting', icon: '🥗', note: 'Nervous system + gut health as a frequency foundation' },
    { title: 'Sunlight & Circadian Rhythm', icon: '☀️', note: 'Morning light, sleep quality, recovery' },
    { title: 'Water Structuring', icon: '💧', note: 'Minerals, hydration rituals, clean sources' },
    { title: 'Qi Gong / Tai Chi', icon: '🥋', note: 'Energy flow, posture, breath–movement integration' },
    { title: 'Electromagnetic Awareness', icon: '📡', note: 'Tech hygiene, grounding, distance, device discipline' }
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
      <MatrixRain color="#9D4EDD" glowColor="#C77DFF" />

      <header style={{ paddingTop: '110px', paddingBottom: '2.5rem' }}>
        <style>{`
          @media (max-width: 480px) {
            .sacred-geo-header {
              padding-top: 92px !important;
            }
          }
        `}</style>
        <div className="sacred-geo-header" style={{ paddingTop: 0 }} />
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 3.5rem)',
              fontWeight: 900,
              marginBottom: '0.75rem',
              background: 'linear-gradient(135deg, #C77DFF 0%, #00D9FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ✡️ Sacred Geometry & Field Mastery
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              color: 'rgba(255,255,255,0.85)',
              background: 'rgba(0,0,0,0.35)',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid rgba(199, 125, 255, 0.25)'
            }}
          >
            A curated hub of patterns, practices, and tools—designed to help you build coherence, raise your vibration, and expand consciousness.
          </motion.p>
        </div>
      </header>

      <main className="container" style={{ paddingBottom: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {sections.map((section, idx) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="neon-border"
              style={{
                background: 'rgba(0,0,0,0.78)',
                borderRadius: '14px',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ fontSize: '1.7rem' }}>{section.icon}</div>
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: '1.15rem',
                      fontWeight: 900,
                      letterSpacing: '0.8px',
                      color: '#C77DFF'
                    }}
                  >
                    {section.title}
                  </h2>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9, color: 'rgba(255,255,255,0.8)' }}>
                    {section.subtitle}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '0.9rem', display: 'grid', gap: '0.75rem' }}>
                {section.items.map((it) => (
                  <div
                    key={it.title}
                    style={{
                      borderRadius: '12px',
                      padding: '0.9rem',
                      background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.10) 0%, rgba(0, 217, 255, 0.06) 100%)',
                      border: '1px solid rgba(0, 255, 65, 0.18)'
                    }}
                  >
                    <div style={{ fontWeight: 900, letterSpacing: '0.6px', marginBottom: '0.35rem', color: '#00FF41' }}>
                      {it.title}
                    </div>
                    <div style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{it.description}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{ marginTop: '2.25rem' }}
          className="neon-border"
        >
          <div
            style={{
              background: 'rgba(0,0,0,0.78)',
              borderRadius: '14px',
              padding: '1.25rem'
            }}
          >
            <h2 style={{
              margin: 0,
              fontSize: '1.2rem',
              fontWeight: 900,
              letterSpacing: '0.8px',
              color: '#C77DFF'
            }}>
              🔮 More “Raise Your Vibration” Topics
            </h2>
            <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.85)' }}>
              These are high-signal categories that fit your mission. We can expand each into full lessons, videos, PDFs, and guided practices.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.9rem',
              marginTop: '1rem'
            }}>
              {suggestedTopics.map((t) => (
                <div
                  key={t.title}
                  style={{
                    padding: '0.9rem',
                    borderRadius: '12px',
                    background: 'rgba(157, 78, 221, 0.09)',
                    border: '1px solid rgba(199, 125, 255, 0.22)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ fontSize: '1.35rem' }}>{t.icon}</div>
                    <div style={{ fontWeight: 900, letterSpacing: '0.6px', color: '#00FF41' }}>{t.title}</div>
                  </div>
                  <div style={{ marginTop: '0.4rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>{t.note}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  )
}

export default SacredGeometry
