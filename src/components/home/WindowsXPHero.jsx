import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const WindowsXPHero = () => {
  const [currentDialog, setCurrentDialog] = useState('boot');
  const [typedText, setTypedText] = useState('');
  const [showPillChoice, setShowPillChoice] = useState(false);
  const [showError, setShowError] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  const bootText = 'TRUTH_SEEKER_OS.exe Loading...';

  useEffect(() => {
    if (currentDialog === 'boot') {
      // Boot sequence
      const progressInterval = setInterval(() => {
        setBootProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => setCurrentDialog('welcome'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    } else if (currentDialog === 'welcome') {
      // Typing effect for welcome message
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= bootText.length) {
          setTypedText(bootText.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setShowPillChoice(true), 1000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentDialog]);

  const handlePillChoice = (choice) => {
    if (choice === 'blue') {
      setShowError(true);
    } else {
      setCurrentDialog('matrix');
      setShowPillChoice(false);
    }
  };

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      paddingBottom: '100px' // Account for taskbar
    }}>
      <div className="xp-desktop-bg"></div>

      {/* Boot Screen */}
      {currentDialog === 'boot' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="xp-window"
          style={{ width: '500px' }}
        >
          <div className="xp-window-title">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>💻</span>
              <span>System Startup</span>
            </div>
            <div className="xp-window-controls">
              <button className="xp-control-btn" disabled>_</button>
              <button className="xp-control-btn" disabled>□</button>
              <button className="xp-control-btn" disabled>✕</button>
            </div>
          </div>
          
          <div className="xp-window-content" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '32px', marginBottom: '1rem' }}>👁️</div>
            <h3 style={{ marginBottom: '1rem' }}>Truth Seeker OS</h3>
            <p style={{ marginBottom: '2rem', fontSize: '11px' }}>
              Initializing consciousness expansion protocols...
            </p>
            
            {/* Progress Bar */}
            <div className="xp-progress" style={{ marginBottom: '1rem' }}>
              <div 
                className="xp-progress-fill"
                style={{ width: `${bootProgress}%` }}
              ></div>
            </div>
            
            <div style={{ fontSize: '11px', opacity: 0.8 }}>
              {bootProgress}% Complete
            </div>
          </div>
        </motion.div>
      )}

      {/* Welcome Screen */}
      {currentDialog === 'welcome' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="xp-window"
          style={{ width: '600px' }}
        >
          <div className="xp-window-title">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🔮</span>
              <span>Welcome to the Real World</span>
            </div>
          </div>
          
          <div className="xp-window-content">
            {/* Terminal Section */}
            <div className="xp-terminal" style={{ marginBottom: '2rem', minHeight: '150px' }}>
              <div style={{ color: '#00ff00' }}>
                C:\Matrix\Reality&gt; {typedText}<span className="xp-terminal-cursor">_</span>
              </div>
              {typedText.length >= bootText.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ marginTop: '1rem', color: '#00ff00' }}
                >
                  <div>System Status: OPERATIONAL</div>
                  <div>Matrix Glitches: DETECTED</div>
                  <div>Reality.dll: CORRUPTED</div>
                  <div>Consciousness.exe: EXPANDING</div>
                  <div>&nbsp;</div>
                  <div style={{ color: '#ffff00' }}>
                    WARNING: You are about to discover the truth.
                  </div>
                  <div style={{ color: '#ffff00' }}>
                    This is your last chance to turn back.
                  </div>
                </motion.div>
              )}
            </div>

            {showPillChoice && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center' }}
              >
                <h4 style={{ marginBottom: '1rem' }}>Choose Your Path</h4>
                <p style={{ fontSize: '11px', marginBottom: '2rem' }}>
                  This is your last chance. After this, there is no going back.
                </p>
                
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                  {/* Blue Pill */}
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      style={{
                        width: '80px',
                        height: '40px',
                        background: 'linear-gradient(145deg, #4ba6ff, #0078d4)',
                        borderRadius: '20px',
                        border: '2px outset #4ba6ff',
                        cursor: 'pointer',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                      }}
                      onClick={() => handlePillChoice('blue')}
                    >
                      💊
                    </div>
                    <button 
                      className="xp-button"
                      onClick={() => handlePillChoice('blue')}
                      style={{ width: '120px' }}
                    >
                      Blue Pill
                    </button>
                    <div style={{ fontSize: '10px', marginTop: '0.5rem', opacity: 0.8 }}>
                      Stay in the simulation
                    </div>
                  </div>

                  {/* Red Pill */}
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      style={{
                        width: '80px',
                        height: '40px',
                        background: 'linear-gradient(145deg, #ff4444, #d13438)',
                        borderRadius: '20px',
                        border: '2px outset #ff4444',
                        cursor: 'pointer',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                      }}
                      onClick={() => handlePillChoice('red')}
                    >
                      💊
                    </div>
                    <button 
                      className="xp-button primary"
                      onClick={() => handlePillChoice('red')}
                      style={{ width: '120px' }}
                    >
                      Red Pill
                    </button>
                    <div style={{ fontSize: '10px', marginTop: '0.5rem', opacity: 0.8 }}>
                      See the truth
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Blue Pill Error */}
      {showError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="xp-error-dialog"
        >
          <div className="xp-error-title">
            <span>⚠️</span>
            <span>System Error</span>
          </div>
          <div className="xp-error-content">
            <div className="xp-error-icon">!</div>
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Access Denied
              </div>
              <div style={{ fontSize: '11px' }}>
                You cannot simply choose comfort once you've seen this far.<br/>
                The blue pill is no longer available.<br/><br/>
                Try again with the red pill.
              </div>
            </div>
          </div>
          <div className="xp-dialog-buttons">
            <button 
              className="xp-button primary"
              onClick={() => setShowError(false)}
            >
              OK
            </button>
          </div>
        </motion.div>
      )}

      {/* Matrix Mode */}
      {currentDialog === 'matrix' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="xp-window"
          style={{ width: '700px' }}
        >
          <div className="xp-window-title">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🟢</span>
              <span>Matrix Terminal - [REALITY BREACH DETECTED]</span>
            </div>
          </div>
          
          <div className="xp-window-content" style={{ padding: 0 }}>
            <div className="xp-terminal" style={{ margin: 0, minHeight: '300px' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: '#00ff00' }}
              >
                <div>Welcome to the real world, Neo.</div>
                <div>&nbsp;</div>
                <div>The Matrix has you...</div>
                <div>Follow the white rabbit 🐇</div>
                <div>&nbsp;</div>
                <div style={{ color: '#ffff00' }}>Available Systems:</div>
                <div>├── Truth_Portal.exe</div>
                <div>├── Consciousness_Expansion.dll</div>
                <div>├── Sacred_Geometry.sys</div>
                <div>├── Meditation_Engine.exe</div>
                <div>├── Nutrition_Database.db</div>
                <div>└── Ancient_Wisdom.txt</div>
                <div>&nbsp;</div>
                <div style={{ color: '#ffffff' }}>How deep does the rabbit hole go?</div>
                <div>&nbsp;</div>
                <div>Press any key to continue...</div>
              </motion.div>
            </div>
            
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <button 
                className="xp-button matrix"
                style={{ marginRight: '1rem' }}
              >
                Enter the Matrix
              </button>
              <button 
                className="xp-button primary"
                onClick={() => {
                  document.querySelector('.xp-truth-seeker-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Begin Awakening
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Overlay for error dialog */}
      {showError && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
          }}
        />
      )}
    </section>
  );
};

export default WindowsXPHero;