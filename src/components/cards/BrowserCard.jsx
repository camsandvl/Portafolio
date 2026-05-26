import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import BackFace from './BackFace'

const backText = 'Estoy desarrollando y diseñando el frontend de una Web App y PWA para una empresa utilizando Next.js, diseñando interfaces intuitivas y colaborando directamente en la creación de experiencias claras y funcionales para sistemas en tiempo real. También cuento con experiencia trabajando con React, HTML, CSS y JavaScript.'

const skeletonBars = [
  [{ flex: 2, delay: 0 }, { flex: 1, delay: 0.2 }, { flex: 1, delay: 0.05 }],
  [{ flex: 3, delay: 0.35 }, { flex: 1, delay: 0.15 }],
]

export default function BrowserCard({ shouldReduce }) {
  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setFlipped(f => !f)}
      style={{ flex: 1, height: '100%', cursor: 'pointer' }}
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
              background: '#fff', borderRadius: 14, border: '0.5px solid #D8D6D0',
              display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden',
            }}>
              <div style={{
                background: '#F0F0EF', padding: '10px 14px',
                display: 'flex', alignItems: 'center', gap: 10,
                borderBottom: '0.5px solid #E0DFDC', flexShrink: 0,
              }}>
                <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                  {[
                    { bg: '#FF5F57', delay: 0 },
                    { bg: '#FFBD2E', delay: 0.05 },
                    { bg: '#28C840', delay: 0.1 },
                  ].map(({ bg, delay: d }) => (
                    <motion.div
                      key={bg}
                      style={{ width: 11, height: 11, borderRadius: '50%', background: bg }}
                      animate={shouldReduce ? {} : hovered ? { scale: 1.2 } : { scale: 1 }}
                      transition={{ duration: 0.2, delay: d }}
                    />
                  ))}
                </div>
                <div style={{
                  flex: 1, background: '#E4E3E0', borderRadius: 6, padding: '4px 12px',
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <Lock size={10} color="#9A9895" />
                  <motion.span
                    style={{ fontSize: 11, color: '#9A9895', fontFamily: 'monospace' }}
                    animate={shouldReduce ? {} : { opacity: hovered ? 1 : 0.6 }}
                    transition={{ duration: 0.25 }}
                  >
                    portfolio.dev
                  </motion.span>
                </div>
              </div>
              <div style={{
                background: '#FAFAF9', flex: 1, padding: 28,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#9A9895', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-body)', marginBottom: 10 }}>
                    Frontend
                  </div>
                  <div style={{ fontSize: 42, fontWeight: 500, color: '#0C0C0A', lineHeight: 1.1, fontFamily: 'var(--font-body)' }}>
                    Desarrollo<br />web
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
                    {[
                      { label: 'HTML',  bg: '#FFF0E6', color: '#E44D26' },
                      { label: 'CSS',   bg: '#E6F0FF', color: '#264DE4' },
                      { label: 'JS',    bg: '#FFFBE6', color: '#9A7D0A' },
                      { label: 'React', bg: '#E6F9FF', color: '#0288A7' },
                    ].map((tag) => (
                      <span key={tag.label} style={{
                        fontSize: 13, fontWeight: 600, borderRadius: 6,
                        padding: '6px 14px', background: tag.bg, color: tag.color, fontFamily: 'var(--font-body)',
                      }}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ height: '0.5px', background: '#E8E6E0', margin: '20px 0' }} />
                  {skeletonBars.map((row, ri) => (
                    <div key={ri} style={{ display: 'flex', gap: 10, marginTop: ri > 0 ? 8 : 0 }}>
                      {row.map(({ flex, delay: d }, bi) => (
                        <div key={bi} style={{ flex, height: 8, position: 'relative', overflow: 'hidden', borderRadius: 3, background: '#E8E6E0' }}>
                          <motion.div
                            style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)' }}
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: d }}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Back */}
          <BackFace text={backText} radius={14} />
        </motion.div>
      </div>
    </motion.div>
  )
}
