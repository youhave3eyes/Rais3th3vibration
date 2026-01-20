import { motion } from 'framer-motion';
import { useState } from 'react';

const XPMeditationSection = () => {
  const [selectedFreq, setSelectedFreq] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  const frequencies = [
    {
      hz: '432',
      name: 'Universal Harmony',
      description: 'The heartbeat of Earth',
      color: '#0078d4',
      benefits: ['Deep relaxation', 'Natural healing', 'Stress reduction']
    },
    {
      hz: '528',
      name: 'Love Frequency',
      description: 'DNA repair and transformation',
      color: '#d13438', 
      benefits: ['DNA healing', 'Heart opening', 'Miracle frequency']
    },
    {
      hz: '639',
      name: 'Connection',
      description: 'Harmonious relationships',
      color: '#ffc72c',
      benefits: ['Better communication', 'Empathy boost', 'Social healing']
    },
    {
      hz: '741',
      name: 'Awakening',
      description: 'Consciousness expansion',
      color: '#73b955',
      benefits: ['Intuition increase', 'Problem solving', 'Spiritual growth']
    },
    {
      hz: '963',
      name: 'Pineal Activation',
      description: 'Third eye opening',
      color: '#8b4a9c',
      benefits: ['Third eye activation', 'Divine connection', 'Enlightenment']
    }
  ];

  const meditations = [
    { name: 'Transcendental Meditation', icon: '🧘‍♀️', time: '20 min', level: 'Beginner' },
    { name: 'Vipassana Body Scan', icon: '🌊', time: '45 min', level: 'Advanced' },
    { name: 'Loving Kindness', icon: '💚', time: '15 min', level: 'All Levels' },
    { name: 'Kundalini Awakening', icon: '🐍', time: '30 min', level: 'Expert' },
    { name: 'Chakra Balancing', icon: '🌈', time: '25 min', level: 'Intermediate' },
    { name: 'Third Eye Activation', icon: '👁️', time: '35 min', level: 'Advanced' }
  ];

  return (
    <section style={{ padding: '2rem 1rem', paddingBottom: '60px' }}>
      <div className="xp-window" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="xp-window-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🧘</span>
            <span>Meditation_Center.exe - [Consciousness Expansion Tools]</span>
          </div>
          <div className="xp-window-controls">
            <button className="xp-control-btn">_</button>
            <button className="xp-control-btn">□</button>
            <button className="xp-control-btn close">✕</button>
          </div>
        </div>

        <div className="xp-window-content">
          {/* Tab Strip */}
          <div style={{ 
            borderBottom: '1px solid #c0c0c0', 
            marginBottom: '1rem',
            display: 'flex',
            gap: '1px'
          }}>
            <div style={{
              background: '#f0f0f0',
              border: '2px outset #f0f0f0',
              padding: '0.25rem 1rem',
              fontSize: '11px',
              borderBottom: 'none'
            }}>
              Frequencies
            </div>
            <div style={{
              background: '#e0e0e0',
              border: '1px solid #c0c0c0',
              padding: '0.25rem 1rem',
              fontSize: '11px',
              cursor: 'pointer'
            }}>
              Meditations
            </div>
            <div style={{
              background: '#e0e0e0', 
              border: '1px solid #c0c0c0',
              padding: '0.25rem 1rem',
              fontSize: '11px',
              cursor: 'pointer'
            }}>
              Settings
            </div>
          </div>

          {/* Frequency Player Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '14px' }}>
              🎵 Solfeggio Frequency Generator
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {frequencies.map((freq, index) => (
                <motion.div
                  key={freq.hz}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    border: selectedFreq?.hz === freq.hz ? `2px solid ${freq.color}` : '2px outset #f0f0f0',
                    background: selectedFreq?.hz === freq.hz ? '#e6f3ff' : '#ffffff',
                    padding: '1rem',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                  onClick={() => {
                    setSelectedFreq(freq);
                    setShowPlayer(true);
                  }}
                >
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    color: freq.color,
                    marginBottom: '0.5rem'
                  }}>
                    {freq.hz} Hz
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {freq.name}
                  </div>
                  <div style={{ fontSize: '10px', marginBottom: '1rem', opacity: 0.8 }}>
                    {freq.description}
                  </div>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    fontSize: '10px',
                    textAlign: 'left'
                  }}>
                    {freq.benefits.map((benefit, i) => (
                      <li key={i} style={{ marginBottom: '0.25rem' }}>
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Frequency Player */}
            {showPlayer && selectedFreq && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                style={{
                  border: '2px inset #f0f0f0',
                  background: '#f8f8f8',
                  padding: '1rem',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '32px' }}>🎵</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                      Now Playing: {selectedFreq.hz} Hz - {selectedFreq.name}
                    </div>
                    <div style={{ fontSize: '10px', opacity: 0.8, marginBottom: '1rem' }}>
                      {selectedFreq.description}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="xp-progress" style={{ marginBottom: '1rem' }}>
                      <div className="xp-progress-fill" style={{ width: '45%' }}></div>
                    </div>
                    
                    {/* Controls */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="xp-button">⏮️</button>
                      <button className="xp-button primary">⏸️</button>
                      <button className="xp-button">⏭️</button>
                      <button className="xp-button">🔄</button>
                      <button className="xp-button" onClick={() => setShowPlayer(false)}>✕</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Meditation Library */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '14px' }}>
              📚 Guided Meditation Library
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem'
            }}>
              {meditations.map((meditation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    border: '1px solid #c0c0c0',
                    background: '#ffffff',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#316ac5';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#000000';
                  }}
                >
                  <div style={{ fontSize: '32px' }}>{meditation.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      {meditation.name}
                    </div>
                    <div style={{ fontSize: '10px', opacity: 0.8 }}>
                      Duration: {meditation.time} • Level: {meditation.level}
                    </div>
                  </div>
                  <button className="xp-button">▶️</button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="xp-status-bar">
            <div className="xp-status-item">Ready</div>
            <div className="xp-status-item">
              {showPlayer ? `Playing ${selectedFreq?.hz} Hz` : 'No frequency selected'}
            </div>
            <div className="xp-status-item">
              {meditations.length} meditations available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XPMeditationSection;