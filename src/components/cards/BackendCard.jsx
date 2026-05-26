import { useState } from 'react'
import { motion } from 'framer-motion'
import { Database, Server } from 'lucide-react'
import BackFace from './BackFace'

const backText = 'Actualmente participo en el diseño backend y arquitectura de datos para sistemas empresariales con NestJS, PostgreSQL y Prisma ORM. Participo en la creación de entidades, relaciones y estructuras optimizadas para mantener bases de datos escalables, eficientes y seguras.'

const entities = [
  {
    label: 'USER', headerBg: 'rgba(56,139,253,0.12)', headerBorder: '#30363D', color: '#58A6FF',
    rows: [{ label: 'id', t: 'pk' }, { label: 'name', t: '' }, { label: 'email', t: '' }],
  },
  {
    label: 'ORDER', headerBg: 'rgba(63,185,80,0.1)', headerBorder: '#30363D', color: '#3FB950',
    rows: [{ label: 'id', t: 'pk' }, { label: 'user_id', t: 'fk' }, { label: 'total', t: '' }],
  },
  {
    label: 'CATEGORY', headerBg: 'rgba(227,179,65,0.1)', headerBorder: '#30363D', color: '#E3B341',
    rows: [{ label: 'id', t: 'pk' }, { label: 'name', t: '' }],
  },
  {
    label: 'PRODUCT', headerBg: 'rgba(188,140,255,0.1)', headerBorder: '#30363D', color: '#BC8CFF',
    rows: [{ label: 'id', t: 'pk' }, { label: 'cat_id', t: 'fk' }, { label: 'price', t: '' }],
  },
]

export default function BackendCard({ shouldReduce }) {
  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setFlipped(f => !f)}
      style={{ flex: '0 0 340px', height: '100%', cursor: 'pointer' }}
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
              background: '#0D1117', borderRadius: 14, border: '0.5px solid #30363D',
              display: 'flex', flexDirection: 'column', height: '100%',
            }}>
              {/* Top bar */}
              <div style={{
                background: '#161B22', padding: '9px 14px',
                display: 'flex', alignItems: 'center', gap: 8,
                borderBottom: '0.5px solid #30363D', flexShrink: 0,
              }}>
                <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>~ </span>
                <span style={{ fontSize: 11, color: '#58A6FF', fontFamily: 'monospace' }}>diagram.er</span>
                <motion.span
                  style={{ display: 'inline-block', width: 1, height: 12, background: '#58A6FF', verticalAlign: 'middle', marginLeft: 1 }}
                  animate={shouldReduce ? {} : hovered ? { opacity: [1, 0, 1] } : { opacity: 1 }}
                  transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: '14px 20px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* DER wrapper */}
                <div style={{ position: 'relative', width: '100%', height: 180, marginBottom: 16 }}>
                  {/* SVG connector lines */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 10 }}>
                    {[
                      { x1: '47%', y1: 38,  x2: '53%', y2: 38  },
                      { x1: '47%', y1: 142, x2: '53%', y2: 142 },
                    ].map((l, i) => (
                      <motion.line
                        key={i}
                        x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                        stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                        strokeDasharray="4 4"
                        animate={shouldReduce ? {} : hovered ? { strokeDashoffset: [0, -8] } : { strokeDashoffset: 0 }}
                        transition={{ duration: 0.6, repeat: hovered ? Infinity : 0, ease: 'linear', delay: i * 0.05 }}
                      />
                    ))}
                    <line x1="47%" y1="33" x2="47%" y2="43" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="47%" y1="137" x2="47%" y2="147" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="52%"   y1="33"  x2="52%"   y2="43"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="53.5%" y1="33"  x2="53.5%" y2="43"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="52%"   y1="137" x2="52%"   y2="147" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="53.5%" y1="137" x2="53.5%" y2="147" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                  </svg>

                  {/* Entity grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 28, width: '100%', height: '100%' }}>
                    {entities.map((entity) => (
                      <div key={entity.label} style={{ background: '#161B22', borderRadius: 6, overflow: 'hidden', border: '0.5px solid #30363D' }}>
                        <div style={{ background: entity.headerBg, padding: '5px 8px', borderBottom: '0.5px solid #30363D' }}>
                          <span style={{ fontSize: 9, fontWeight: 600, color: entity.color, fontFamily: 'monospace' }}>{entity.label}</span>
                        </div>
                        <div style={{ padding: '4px 8px 6px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                          {entity.rows.map((r) => (
                            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                              <span style={{ fontSize: 7.5, fontWeight: 700, fontFamily: 'monospace', width: 14, flexShrink: 0, color: r.t === 'pk' ? '#E3B341' : r.t === 'fk' ? '#BC8CFF' : 'transparent' }}>
                                {r.t === 'pk' ? 'PK' : r.t === 'fk' ? 'FK' : 'PK'}
                              </span>
                              <span style={{ fontSize: 8, fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)' }}>{r.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom */}
                <div style={{ flexShrink: 0, borderTop: '0.5px solid #30363D', paddingTop: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3, fontFamily: 'var(--font-body)' }}>
                    Datos &<br />Backend
                  </div>
                  <div style={{ fontSize: 11, color: '#8B949E', marginTop: 4, fontFamily: 'var(--font-body)' }}>
                    Diseño de bases de datos y APIs
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 10, marginBottom: 4 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(88,166,255,0.08)', border: '0.5px solid rgba(88,166,255,0.2)', borderRadius: 99, padding: '3px 8px' }}>
                      <Database size={10} color="#58A6FF" />
                      <span style={{ fontSize: 9.5, color: '#58A6FF', fontFamily: 'var(--font-body)', fontWeight: 600 }}>PostgreSQL</span>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(224,64,251,0.08)', border: '0.5px solid rgba(224,64,251,0.2)', borderRadius: 99, padding: '3px 8px' }}>
                      <Server size={10} color="#E040FB" />
                      <span style={{ fontSize: 9.5, color: '#E040FB', fontFamily: 'var(--font-body)', fontWeight: 600 }}>NestJS</span>
                    </div>
                  </div>
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
