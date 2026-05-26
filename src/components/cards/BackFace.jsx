import { motion } from 'framer-motion'

export default function BackFace({ text, radius }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      transform: 'rotateY(180deg)',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      background: '#1C1B18',
      borderRadius: radius,
      border: '0.5px solid rgba(255,255,255,0.09)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '28px 24px',
      overflow: 'hidden',
    }}>
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%)',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }}
        animate={{ x: ['-100%', '150%'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        fontWeight: 300,
        lineHeight: 1.9,
        color: 'rgba(255,255,255,0.55)',
        margin: 0,
        position: 'relative',
      }}>
        {text}
      </p>
    </div>
  )
}
