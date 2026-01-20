import { useEffect, useRef } from 'react';

const WindowsXPRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // XP-style matrix characters - more Windows/tech focused
    const xpChars = '01WINDOWSXPMATRIXERRORLOADINGTRUTHSEEKERHACKTHEPLANETCONSCIOUSNESSAWAKENINGREALITYBLUEPILLREDPILL{}[]()<!>@#$%^&*+-=';
    const chars = xpChars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to store y-coordinate of each column
    const drops = Array(Math.floor(columns)).fill(1);

    // Colors for XP Matrix effect
    const colors = [
      '#00ff00', // Matrix green
      '#0078d4', // XP blue
      '#ffffff', // White
      '#ffff00', // Yellow
      '#ff0000'  // Red for errors
    ];

    function draw() {
      // Dark background with slight transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.font = fontSize + 'px "Courier New", monospace';

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Pick color based on position and randomness
        let color = colors[0]; // Default green
        
        if (Math.random() > 0.95) {
          color = colors[1]; // XP Blue
        } else if (Math.random() > 0.98) {
          color = colors[2]; // White
        } else if (Math.random() > 0.99) {
          color = colors[3]; // Yellow
        } else if (Math.random() > 0.995) {
          color = colors[4]; // Red
        }

        ctx.fillStyle = color;
        
        // Add glow effect for special characters
        if (Math.random() > 0.97) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = color;
        } else {
          ctx.shadowBlur = 0;
        }

        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.fillText(text, x, y);

        // Reset drop to top randomly after it crosses the screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment Y coordinate
        drops[i]++;
      }
    }

    // Animation loop - slower for XP feel
    const intervalId = setInterval(draw, 50);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="xp-matrix-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.2,
        pointerEvents: 'none'
      }}
    />
  );
};

export default WindowsXPRain;