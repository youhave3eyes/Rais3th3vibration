import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const WindowsXPTaskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState([
    { id: 'rtv33', title: 'RTV33 Truth Portal', icon: '👁️', active: true },
    { id: 'matrix', title: 'Matrix Terminal', icon: '🟩', active: false },
    { id: 'truth', title: 'Truth Seeker Files', icon: '📁', active: false }
  ]);

  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'numeric', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const startMenuItems = [
    { label: 'Truth Portal', icon: '👁️', path: '/' },
    { label: 'Knowledge Base', icon: '📚', path: '/knowledge' },
    { label: 'Consciousness Hub', icon: '🧘', path: '/community' },
    { label: 'Frequency Player', icon: '🎵', path: '/music' },
    { label: 'Sacred Shop', icon: '🛒', path: '/shop' },
    { label: 'Matrix Terminal', icon: '💻', action: 'terminal' },
    { label: 'Error Log', icon: '⚠️', action: 'error' },
    { label: 'System Info', icon: 'ℹ️', action: 'info' },
    { label: 'Shut Down...', icon: '⏻', action: 'shutdown' }
  ];

  return (
    <>
      <div className="xp-taskbar">
        {/* Start Button */}
        <button 
          className="xp-start-button"
          onClick={() => setStartMenuOpen(!startMenuOpen)}
        >
          <span style={{ fontSize: '16px', marginRight: '0.25rem' }}>🪟</span>
          <span>start</span>
        </button>

        {/* Taskbar Separator */}
        <div className="xp-taskbar-separator"></div>

        {/* Open Applications */}
        <div className="xp-taskbar-apps">
          {openWindows.map((window) => (
            <div 
              key={window.id}
              className={`xp-taskbar-app ${window.active ? 'active' : ''}`}
              onClick={() => {
                setOpenWindows(prev => 
                  prev.map(w => ({ ...w, active: w.id === window.id }))
                );
              }}
            >
              <span>{window.icon}</span>
              <span>{window.title}</span>
            </div>
          ))}
        </div>

        {/* System Tray */}
        <div className="xp-system-tray">
          {/* Tray Icons */}
          <div className="xp-tray-icon" title="Matrix Status">🟢</div>
          <div className="xp-tray-icon" title="Truth Seeker Mode">👁️</div>
          <div className="xp-tray-icon" title="Consciousness Level">🧘</div>
          <div className="xp-tray-icon" title="Frequency Active">🎵</div>
          <div className="xp-tray-icon" title="Volume">🔊</div>
          
          {/* Clock */}
          <div className="xp-taskbar-time">
            <div style={{ fontSize: '11px', lineHeight: '1' }}>
              {formatTime(currentTime)}
            </div>
            <div style={{ fontSize: '9px', lineHeight: '1', opacity: 0.8 }}>
              {formatDate(currentTime)}
            </div>
          </div>
        </div>
      </div>

      {/* Start Menu */}
      {startMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="xp-start-menu"
        >
          {/* Start Menu Header */}
          <div className="xp-start-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '24px' }}>👁️</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Truth Seeker</div>
                <div style={{ fontSize: '11px', opacity: 0.9 }}>Awakening Mode</div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="xp-start-items">
            {startMenuItems.map((item, index) => (
              <div key={index}>
                {item.path ? (
                  <Link 
                    to={item.path} 
                    className="xp-start-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={() => setStartMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <div 
                    className="xp-start-item"
                    onClick={() => {
                      // Handle actions
                      if (item.action === 'terminal') {
                        // Open terminal dialog
                        console.log('Opening Matrix Terminal...');
                      } else if (item.action === 'error') {
                        // Show error log
                        console.log('Error: No errors found in The Matrix');
                      } else if (item.action === 'info') {
                        // Show system info
                        alert('System: Truth Seeker OS v33.3\nMatrix Status: AWAKENED\nConsciousness Level: EXPANDING');
                      } else if (item.action === 'shutdown') {
                        // Shutdown confirmation
                        if (confirm('Are you sure you want to exit the Matrix?')) {
                          alert('You cannot simply exit the Matrix...\n\n"There is no spoon."');
                        }
                      }
                      setStartMenuOpen(false);
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                )}
                {/* Separator before shutdown */}
                {item.action === 'info' && (
                  <div style={{ 
                    height: '1px', 
                    background: '#999', 
                    margin: '0.25rem 0.5rem',
                    borderTop: '1px solid #fff'
                  }}></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Click outside to close start menu */}
      {startMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 997
          }}
          onClick={() => setStartMenuOpen(false)}
        />
      )}
    </>
  );
};

export default WindowsXPTaskbar;