import { useState } from 'react'
import { motion } from 'framer-motion'
import BackFace from './BackFace'

const backText = 'Para Havit, una aplicación enfocada en fitness y creación de hábitos, combiné diseño de producto y desarrollo frontend. Mi enfoque principal fue crear interfaces reutilizables y experiencias fluidas en React Native para iOS y Android.'

export default function PhoneCard({ shouldReduce }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      onClick={() => setFlipped(f => !f)}
      style={{ flex: '0 0 200px', height: '100%', cursor: 'pointer' }}
    >
      <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            <div style={{
              background: '#1C1C1E', borderRadius: 40, border: '2px solid #3A3A3C',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              height: '100%', position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: 80, height: 22, background: '#1C1C1E',
                borderRadius: '0 0 16px 16px', zIndex: 10,
              }} />
              <div style={{
                background: '#0F172A', flex: 1, padding: '32px 16px 20px',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    background: 'rgba(0,212,160,0.12)', border: '0.5px solid rgba(0,212,160,0.25)',
                    borderRadius: 99, padding: '4px 10px', marginBottom: 14,
                  }}>
                    <motion.div
                      style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D4A0', flexShrink: 0 }}
                      animate={shouldReduce ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span style={{ fontSize: 12, color: '#00D4A0', fontWeight: 600, letterSpacing: '0.07em', fontFamily: 'var(--font-body)' }}>
                      REACT NATIVE
                    </span>
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 500, color: '#fff', lineHeight: 1.2, fontFamily: 'var(--font-body)' }}>
                    Desarrollo de<br />apps móviles
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 6, fontFamily: 'var(--font-body)' }}>
                    iOS & Android
                  </div>
                </div>
                <div>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.04)', borderRadius: 8,
                      padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10,
                    }}>
                      <div style={{ width: 16, height: 16, background: 'rgba(255,255,255,0.08)', borderRadius: 3, flexShrink: 0 }} />
                      <div style={{ height: 6, flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D4A0', flexShrink: 0 }} />
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
                    <div style={{ width: 70, height: 5, borderRadius: 2, background: 'rgba(255,255,255,0.2)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Back */}
          <BackFace text={backText} radius={40} />
        </motion.div>
      </div>
    </motion.div>
  )
}
