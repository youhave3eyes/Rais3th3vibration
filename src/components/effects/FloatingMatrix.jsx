import { useEffect, useRef } from 'react'

// Renders small floating matrix characters within a relatively positioned parent
const FloatingMatrix = ({ count = 24, color = '#00FF41' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Generate matrix chars (numbers + katakana fragments)
    const chars = 'アイウエオカキクケコ0123456789'

    const nodes = []
    for (let i = 0; i < count; i++) {
      const span = document.createElement('span')
      span.className = 'matrix-float-char'
      span.textContent = chars[Math.floor(Math.random() * chars.length)]
      span.style.left = Math.random() * 100 + '%'
      span.style.top = Math.random() * 100 + '%'
      const dur = 4 + Math.random() * 6
      const delay = Math.random() * -10
      span.style.animationDuration = `${dur}s`
      span.style.animationDelay = `${delay}s`
      span.style.color = color
      container.appendChild(span)
      nodes.push(span)
    }

    return () => {
      nodes.forEach(n => n.remove())
    }
  }, [count, color])

  return <div ref={containerRef} className="matrix-float-overlay" aria-hidden="true" />
}

export default FloatingMatrix
