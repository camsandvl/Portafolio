import { useState } from 'react'
import { motion } from 'framer-motion'
import BackFace from './cards/BackFace'

export default function FlippableCard({ children, backText, backRadius, shouldReduce, delay = 0, style, renderOverlay }) {
  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setFlipped(f => !f)}
      role="button"
      tabIndex={0}
      style={style}
    >
      {renderOverlay?.({ hovered })}
      <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
        >
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            {typeof children === 'function' ? children({ hovered }) : children}
          </div>
          <BackFace text={backText} radius={backRadius} />
        </motion.div>
      </div>
    </motion.div>
  )
}
