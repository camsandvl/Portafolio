import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function CreamCursor({ active }) {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return createPortal(
    <div style={{
      position: 'fixed',
      left: pos.x - 12,
      top: pos.y - 12,
      width: 24,
      height: 24,
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: active ? 1 : 0,
      transition: 'opacity 0.15s',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23faf8ef' d='M12%2C1 L16%2C8 L23%2C12 L16%2C16 L12%2C23 L8%2C16 L1%2C12 L8%2C8 Z'%2F%3E%3C%2Fsvg%3E")`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }} />,
    document.body
  )
}
