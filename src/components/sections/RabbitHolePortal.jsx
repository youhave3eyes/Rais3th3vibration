import { motion } from 'framer-motion'
import { useState } from 'react'

const RabbitHolePortal = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const truthTopics = [
    {
      id: 'fluoride',
      icon: '💧',
      title: 'Water Fluoridation',
      category: 'Water Toxins',
      tagline: 'The Truth About Your Tap Water',
      description: 'Sodium fluoride in public water supplies - calcifies the pineal gland, reduces IQ, and was used in concentration camps to make prisoners docile.',
      facts: [
        'Fluoride is classified as a neurotoxin by leading medical journals',
        'The pineal gland (third eye) accumulates more fluoride than any other organ',
        'Many European countries have banned water fluoridation',
        'Harvard studies link fluoride to lowered IQ in children',
        'Industrial waste product sold as "dental health"'
      ],
      solutions: [
        'Install reverse osmosis or fluoride water filters',
        'Use fluoride-free toothpaste (look for nano-hydroxyapatite)',
        'Supplement with iodine to displace fluoride',
        'Detox with tamarind, curcumin, and chlorella',
        'Drink spring water from trusted sources'
      ]
    },
    {
      id: 'chemtrails',
      icon: '✈️',
      title: 'Atmospheric Aerosols',
      category: 'Sky Toxins',
      tagline: 'What They\'re Spraying Above You',
      description: 'Geoengineering programs spray aluminum, barium, and strontium into the atmosphere under the guise of "solar radiation management."',
      facts: [
        'Aluminum levels in rainwater have increased 1000x in some areas',
        'Patents exist for stratospheric aerosol injection dating back to 1920s',
        'Barium salts make the atmosphere conductive for HAARP-type technology',
        'Morgellons disease linked to nano-fibers found in atmospheric samples',
        'Cloud seeding is openly admitted - what else are they spraying?'
      ],
      solutions: [
        'Use air purifiers with HEPA and activated carbon filters',
        'Detox heavy metals with cilantro, chlorella, and zeolite',
        'Test your rainwater and soil for aluminum/barium',
        'Support organizations demanding transparency',
        'Grow food in greenhouses to avoid aerial contamination'
      ]
    },
    {
      id: 'seed-oils',
      icon: '🛢️',
      title: 'Industrial Seed Oils',
      category: 'Nutrition Deception',
      tagline: 'The Vegetable Oil Con',
      description: 'Marketed as "heart-healthy," industrial seed oils are pro-inflammatory, oxidized fats linked to chronic disease epidemics.',
      facts: [
        'Require high heat and chemical solvents (hexane) to extract',
        'Contain up to 60% inflammatory omega-6 fatty acids',
        'Oxidize easily, creating harmful free radicals in your body',
        'Linked to heart disease, cancer, diabetes, and neurodegeneration',
        'Replaced traditional saturated fats in the 1960s due to flawed studies'
      ],
      solutions: [
        'Cook with butter, ghee, tallow, coconut oil, and olive oil only',
        'Avoid canola, soybean, corn, cottonseed, safflower, sunflower oils',
        'Read labels - seed oils hide in EVERYTHING processed',
        'Choose grass-fed animal fats for optimal omega-3/6 ratio',
        'Support ancestral nutrition - what grandma used was better'
      ]
    },
    {
      id: 'emf',
      icon: '📡',
      title: '5G & EMF Radiation',
      category: 'Electromagnetic Pollution',
      tagline: 'The Invisible Toxin',
      description: 'Electromagnetic frequencies from WiFi, cell towers, and 5G disrupt cellular function, mitochondria, and the blood-brain barrier.',
      facts: [
        '5G uses millimeter waves (24-90 GHz) never before used on public',
        'Thousands of studies link EMF to cancer, infertility, DNA damage',
        'Weakens immune system and opens blood-brain barrier',
        'Smart meters pulse radiation through your home 24/7',
        'WHO classifies RF radiation as "possibly carcinogenic"'
      ],
      solutions: [
        'Turn off WiFi at night and use ethernet cables',
        'Keep phone on airplane mode and away from body',
        'Use EMF protection devices (shungite, orgonite, faraday bags)',
        'Measure EMF levels in your home with a meter',
        'Ground yourself daily - walk barefoot on earth'
      ]
    },
    {
      id: 'sugar',
      icon: '🍬',
      title: 'The Sugar Conspiracy',
      category: 'Nutrition Deception',
      tagline: 'More Addictive Than Cocaine',
      description: 'The sugar industry paid scientists in the 1960s to blame fat for heart disease, hiding sugar\'s role in the modern health crisis.',
      facts: [
        'Sugar is 8x more addictive than cocaine in rat studies',
        'Average American consumes 150+ lbs of sugar per year',
        'Feeds cancer cells, causes insulin resistance and diabetes',
        'Hidden under 60+ different names on ingredient labels',
        'Sugar industry funded research to blame saturated fat instead'
      ],
      solutions: [
        'Eliminate all refined sugars and high fructose corn syrup',
        'Use natural sweeteners: raw honey, maple syrup, dates (in moderation)',
        'Read labels - sugar hides in bread, sauces, "healthy" foods',
        'Reset your palate with a 30-day sugar detox',
        'Choose whole fruits over juice for fiber and nutrients'
      ]
    },
    {
      id: 'glyphosate',
      icon: '🌾',
      title: 'Glyphosate (Roundup)',
      category: 'Food Contamination',
      tagline: 'In Your Food, Blood, and Breast Milk',
      description: 'The world\'s most widely used herbicide disrupts gut bacteria, chelates minerals, and is found in 93% of Americans\' urine.',
      facts: [
        'Patented as an antibiotic - kills beneficial gut bacteria',
        'Chelates minerals (magnesium, zinc, iron) making them unavailable',
        'Linked to autism, cancer, celiac disease, and infertility',
        'Found in wheat, oats, beans, chickpeas (used as desiccant)',
        'Monsanto knew about cancer risks in the 1980s'
      ],
      solutions: [
        'Buy organic (especially for grains, beans, and oats)',
        'Avoid conventional wheat, soy, corn, and canola',
        'Restore gut health with probiotics and fermented foods',
        'Supplement minerals that glyphosate depletes',
        'Support regenerative farms that don\'t use chemicals'
      ]
    }
  ]

  return (
    <section id="rabbit-hole" className="rabbit-hole-portal" style={{ 
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Matrix Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.5,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: [
                '0 0 20px #FF0000',
                '0 0 40px #FF0000',
                '0 0 20px #FF0000'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ 
              fontSize: '4rem',
              marginBottom: '2rem'
            }}
          >
            🐇
          </motion.div>
          <h2 className="glitch-text" data-text="DOWN THE RABBIT HOLE" style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1.5rem',
            color: '#FF0000',
            textShadow: '0 0 20px #FF0000, 0 0 40px #FF0000'
          }}>
            DOWN THE RABBIT HOLE
          </h2>
          <p className="neon-text" style={{ fontSize: '1.3rem', maxWidth: '900px', margin: '0 auto' }}>
            The truth they don't want you to know. Question everything. Trust nothing. Verify for yourself.
          </p>
          <div style={{ 
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'rgba(255, 0, 0, 0.1)',
            border: '2px solid #FF0000',
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '2rem auto 0'
          }}>
            <p style={{ fontSize: '0.95rem', color: '#FF6666' }}>
              ⚠️ <strong>DISCLAIMER:</strong> This information is for educational purposes. Do your own research. Question authority. Seek multiple sources. Your health is your responsibility.
            </p>
          </div>
        </motion.div>

        {/* Truth Topics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {truthTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="consciousness-card xp-window"
              style={{ cursor: 'pointer', position: 'relative' }}
              onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
            >
              <div className="xp-titlebar">
                <span className="xp-title">{topic.category}</span>
                <div className="xp-controls">
                  <span className="xp-btn">_</span>
                  <span className="xp-btn">□</span>
                  <span className="xp-btn xp-close">×</span>
                </div>
              </div>
              <div className="xp-content">
                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {topic.icon}
                </div>
                <h3 className="neon-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center', color: '#FF4444' }}>
                  {topic.title}
                </h3>
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center', color: '#FFAA00' }}>
                  {topic.tagline}
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {topic.description}
                </p>

                {selectedTopic === topic.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{ marginTop: '1.5rem' }}
                  >
                    <h4 style={{ fontSize: '1.1rem', color: '#FF6666', marginBottom: '1rem', textDecoration: 'underline' }}>
                      ⚠️ The Facts:
                    </h4>
                    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                      {topic.facts.map((fact, i) => (
                        <li key={i} style={{ fontSize: '0.95rem', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                          {fact}
                        </li>
                      ))}
                    </ul>

                    <h4 style={{ fontSize: '1.1rem', color: '#00FF41', marginBottom: '1rem', textDecoration: 'underline' }}>
                      ✅ Solutions & Protection:
                    </h4>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                      {topic.solutions.map((solution, i) => (
                        <li key={i} style={{ fontSize: '0.95rem', marginBottom: '0.5rem', lineHeight: '1.6', color: '#AAFFAA' }}>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button className="awakening-btn" style={{ width: '100%' }}>
                    {selectedTopic === topic.id ? 'COLLAPSE ▲' : 'LEARN MORE ▼'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center',
            padding: '3rem',
            background: 'rgba(255, 0, 0, 0.05)',
            border: '2px solid #FF0000',
            borderRadius: '15px',
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.3)'
          }}
        >
          <h3 className="neon-text" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#FF4444' }}>
            "The Matrix is a system, Neo. That system is our enemy."
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Knowledge is power. Share this information. Wake up your friends and family. The truth will set you free.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="awakening-btn pulse-glow" style={{ background: 'rgba(255, 0, 0, 0.2)', borderColor: '#FF0000', color: '#FF4444' }}>
              SHARE THE TRUTH
            </button>
            <button className="awakening-btn" style={{ background: 'transparent', borderColor: '#00FF41' }}>
              RESEARCH MORE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RabbitHolePortal
