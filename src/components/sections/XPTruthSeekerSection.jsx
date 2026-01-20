import { motion } from 'framer-motion';
import { useState } from 'react';

const XPTruthSeekerSection = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const topics = [
    {
      id: 'meditation',
      icon: '🧘',
      title: 'Meditation & Consciousness',
      description: 'Expand your awareness through ancient and modern meditation techniques.',
      fileType: 'consciousness.exe',
      size: '432 KB',
      details: 'Contains: Guided meditations, breathing techniques, consciousness expansion protocols'
    },
    {
      id: 'nutrition',
      icon: '🥗',
      title: 'Sacred Nutrition Database',
      description: 'High-vibrational foods that align with universal frequencies.',
      fileType: 'nutrition.db',
      size: '528 KB', 
      details: 'Contains: Superfood database, frequency alignments, conscious eating guides'
    },
    {
      id: 'geometry',
      icon: '🔺',
      title: 'Sacred Geometry Patterns',
      description: 'The mathematical blueprints of creation and universal harmony.',
      fileType: 'geometry.cad',
      size: '963 KB',
      details: 'Contains: Flower of Life, Metatron\'s Cube, Golden Ratio calculations'
    },
    {
      id: 'thirdeye',
      icon: '👁️',
      title: 'Third Eye Activation Kit',
      description: 'Pineal gland decalcification and intuitive perception enhancement.',
      fileType: 'pineal.sys',
      size: '741 KB',
      details: 'Contains: Decalcification protocols, vision enhancement, intuition training'
    },
    {
      id: 'quantum',
      icon: '🌌',
      title: 'Quantum Consciousness Files',
      description: 'Where science meets spirituality in the quantum field.',
      fileType: 'quantum.dll',
      size: '639 KB',
      details: 'Contains: Observer effect studies, unified field theory, reality creation'
    },
    {
      id: 'wisdom',
      icon: '📿',
      title: 'Ancient Wisdom Archive',
      description: 'Hidden knowledge from mystery schools and esoteric traditions.',
      fileType: 'wisdom.dat',
      size: '∞ KB',
      details: 'Contains: Hermetic principles, mystery school teachings, esoteric knowledge'
    }
  ];

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setSelectedTopic(null);
  };

  return (
    <section style={{ 
      padding: '2rem 1rem', 
      paddingBottom: '60px', // Account for taskbar
      position: 'relative'
    }}>
      {/* XP Window Container */}
      <div className="xp-window" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Window Title Bar */}
        <div className="xp-window-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="xp-window-icon">👁️</span>
            <span>Truth_Seeker_Portal.exe - [CLASSIFIED]</span>
          </div>
          <div className="xp-window-controls">
            <button className="xp-control-btn">_</button>
            <button className="xp-control-btn">□</button>
            <button className="xp-control-btn close">✕</button>
          </div>
        </div>

        {/* Window Content */}
        <div className="xp-window-content">
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#d13438'
            }}>
              ⚠️ CLASSIFIED FILES DETECTED ⚠️
            </h2>
            <p style={{ fontSize: '11px', marginBottom: '1rem' }}>
              The following files contain sensitive information about consciousness expansion and reality manipulation. 
              Access requires elevated truth-seeker privileges.
            </p>
            <div style={{ 
              background: '#ffffa0', 
              border: '1px solid #999', 
              padding: '0.5rem',
              fontSize: '11px',
              marginBottom: '1rem'
            }}>
              <strong>WARNING:</strong> These files may cause permanent changes to your perception of reality. 
              Proceed only if you have chosen the red pill.
            </div>
          </div>

          {/* File Explorer Style Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #c0c0c0',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  transition: 'background 0.1s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#316ac5';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.color = '#000000';
                }}
                onClick={() => handleTopicClick(topic)}
              >
                {/* File Icon */}
                <div style={{ 
                  fontSize: '32px', 
                  width: '40px', 
                  textAlign: 'center',
                  flexShrink: 0
                }}>
                  {topic.icon}
                </div>
                
                {/* File Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ 
                    fontSize: '11px', 
                    fontWeight: 'bold',
                    marginBottom: '0.25rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {topic.fileType}
                  </div>
                  <div style={{ 
                    fontSize: '10px', 
                    opacity: 0.8,
                    marginBottom: '0.25rem'
                  }}>
                    Size: {topic.size}
                  </div>
                  <div style={{ 
                    fontSize: '10px',
                    opacity: 0.7,
                    lineHeight: 1.3
                  }}>
                    {topic.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status Bar */}
          <div className="xp-status-bar">
            <div className="xp-status-item">
              {topics.length} objects
            </div>
            <div className="xp-status-item">
              Truth Level: AWAKENING
            </div>
            <div className="xp-status-item">
              Matrix Status: GLITCHING
            </div>
          </div>
        </div>
      </div>

      {/* XP Dialog for File Details */}
      {showDialog && selectedTopic && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="xp-dialog"
        >
          <div className="xp-dialog-title">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📁</span>
              <span>{selectedTopic.fileType} Properties</span>
            </div>
            <button 
              className="xp-control-btn close"
              onClick={handleDialogClose}
            >
              ✕
            </button>
          </div>
          
          <div className="xp-dialog-content">
            <div className="xp-dialog-icon" style={{ fontSize: '48px' }}>
              {selectedTopic.icon}
            </div>
            <div>
              <div className="xp-dialog-text">
                <strong>File:</strong> {selectedTopic.fileType}<br/>
                <strong>Type:</strong> Consciousness Expansion Data<br/>
                <strong>Size:</strong> {selectedTopic.size}<br/>
                <strong>Created:</strong> Since the beginning of time<br/>
                <strong>Modified:</strong> Every moment you evolve<br/><br/>
                <strong>Description:</strong><br/>
                {selectedTopic.details}
              </div>
            </div>
          </div>
          
          <div className="xp-dialog-buttons">
            <button className="xp-button primary" onClick={handleDialogClose}>
              Access Files
            </button>
            <button className="xp-button" onClick={handleDialogClose}>
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Dialog Overlay */}
      {showDialog && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
          onClick={handleDialogClose}
        />
      )}
    </section>
  );
};

export default XPTruthSeekerSection;