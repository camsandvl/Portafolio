import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Layers, Pen, MousePointer2, Square, Circle, Hand, MoreHorizontal, Lock, Undo2, Redo2, Eraser, Droplet, Move, Database, Server } from 'lucide-react'
import SkillsMarquee from './Skills'

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function Projects() {
  const shouldReduce = useReducedMotion()
  const [hoveredBrowser, setHoveredBrowser] = useState(false)
  const [hoveredBackend, setHoveredBackend] = useState(false)
  const [hoveredFigma,   setHoveredFigma]   = useState(false)
  const [hoveredIpad,    setHoveredIpad]    = useState(false)

  return (
    <section id="projects" style={{ background: 'var(--bg-soft)', padding: 'var(--space-32) 0', overflow: 'hidden' }}>
      <div className="container">

        {/* Section label */}
        <div className="section-label">
          <span className="section-num">01</span>
          <span className="section-rule" />
          <span className="section-name">Stack</span>
        </div>

        <motion.h2
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: 'var(--space-16)',
          }}
        >
          Productos digitales <br />
          <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--text-muted)' }}>
               & experiencias.
          </em>
        </motion.h2>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 'var(--space-6)', marginTop: 'var(--space-16)' }}>
          — Áreas de enfoque
        </p>

        {/* ── ROW 1: Phone + Browser + Backend ── */}
        <div className="mockup-row" style={{ display: 'flex', gap: 24, height: 380, marginBottom: 24 }}>

          {/* MOCKUP 1 — Phone portrait */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            style={{ flex: '0 0 200px', height: '100%' }}
          >
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
          </motion.div>

          {/* MOCKUP 2 — Browser window */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            onHoverStart={() => setHoveredBrowser(true)}
            onHoverEnd={() => setHoveredBrowser(false)}
            style={{ flex: 1, height: '100%' }}
          >
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
                      animate={shouldReduce ? {} : hoveredBrowser ? { scale: 1.2 } : { scale: 1 }}
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
                    animate={shouldReduce ? {} : { opacity: hoveredBrowser ? 1 : 0.6 }}
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
                  <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flex: 2, height: 8, position: 'relative', overflow: 'hidden', borderRadius: 3, background: '#E8E6E0' }}>
                      <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0 }} />
                    </div>
                    <div style={{ flex: 1, height: 8, position: 'relative', overflow: 'hidden', borderRadius: 3, background: '#E8E6E0' }}>
                      <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.2 }} />
                    </div>
                    <div style={{ flex: 1, height: 8, position: 'relative', overflow: 'hidden', borderRadius: 3, background: '#E8E6E0' }}>
                      <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.05 }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                    <div style={{ flex: 3, height: 8, position: 'relative', overflow: 'hidden', borderRadius: 3, background: '#E8E6E0' }}>
                      <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.35 }} />
                    </div>
                    <div style={{ flex: 1, height: 8, position: 'relative', overflow: 'hidden', borderRadius: 3, background: '#E8E6E0' }}>
                      <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.15 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MOCKUP 3 — Backend DER */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            onHoverStart={() => setHoveredBackend(true)}
            onHoverEnd={() => setHoveredBackend(false)}
            style={{ flex: '0 0 340px', height: '100%' }}
          >
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
                  animate={shouldReduce ? {} : hoveredBackend ? { opacity: [1, 0, 1] } : { opacity: 1 }}
                  transition={{ duration: 0.8, repeat: hoveredBackend ? Infinity : 0 }}
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
                        animate={shouldReduce ? {} : hoveredBackend ? { strokeDashoffset: [0, -8] } : { strokeDashoffset: 0 }}
                        transition={{ duration: 0.6, repeat: hoveredBackend ? Infinity : 0, ease: 'linear', delay: i * 0.05 }}
                      />
                    ))}
                    {/* 1-side ticks */}
                    <line x1="47%" y1="33" x2="47%" y2="43" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="47%" y1="137" x2="47%" y2="147" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    {/* N-side ticks */}
                    <line x1="52%"   y1="33"  x2="52%"   y2="43"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="53.5%" y1="33"  x2="53.5%" y2="43"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="52%"   y1="137" x2="52%"   y2="147" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <line x1="53.5%" y1="137" x2="53.5%" y2="147" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                  </svg>

                  {/* Entity grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 28, width: '100%', height: '100%' }}>

                    {/* USER */}
                    <div style={{ background: '#161B22', borderRadius: 6, overflow: 'hidden', border: '0.5px solid #30363D' }}>
                      <div style={{ background: 'rgba(56,139,253,0.12)', padding: '5px 8px', borderBottom: '0.5px solid #30363D' }}>
                        <span style={{ fontSize: 9, fontWeight: 600, color: '#58A6FF', fontFamily: 'monospace' }}>USER</span>
                      </div>
                      <div style={{ padding: '4px 8px 6px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {[{ label: 'id', t: 'pk' }, { label: 'name', t: '' }, { label: 'email', t: '' }].map((r) => (
                          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ fontSize: 7.5, fontWeight: 700, fontFamily: 'monospace', width: 14, flexShrink: 0, color: r.t === 'pk' ? '#E3B341' : 'transparent' }}>PK</span>
                            <span style={{ fontSize: 8, fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)' }}>{r.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ORDER */}
                    <div style={{ background: '#161B22', borderRadius: 6, overflow: 'hidden', border: '0.5px solid #30363D' }}>
                      <div style={{ background: 'rgba(63,185,80,0.1)', padding: '5px 8px', borderBottom: '0.5px solid #30363D' }}>
                        <span style={{ fontSize: 9, fontWeight: 600, color: '#3FB950', fontFamily: 'monospace' }}>ORDER</span>
                      </div>
                      <div style={{ padding: '4px 8px 6px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {[{ label: 'id', t: 'pk' }, { label: 'user_id', t: 'fk' }, { label: 'total', t: '' }].map((r) => (
                          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ fontSize: 7.5, fontWeight: 700, fontFamily: 'monospace', width: 14, flexShrink: 0, color: r.t === 'pk' ? '#E3B341' : r.t === 'fk' ? '#BC8CFF' : 'transparent' }}>
                              {r.t === 'pk' ? 'PK' : r.t === 'fk' ? 'FK' : 'PK'}
                            </span>
                            <span style={{ fontSize: 8, fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)' }}>{r.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY */}
                    <div style={{ background: '#161B22', borderRadius: 6, overflow: 'hidden', border: '0.5px solid #30363D' }}>
                      <div style={{ background: 'rgba(227,179,65,0.1)', padding: '5px 8px', borderBottom: '0.5px solid #30363D' }}>
                        <span style={{ fontSize: 9, fontWeight: 600, color: '#E3B341', fontFamily: 'monospace' }}>CATEGORY</span>
                      </div>
                      <div style={{ padding: '4px 8px 6px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {[{ label: 'id', t: 'pk' }, { label: 'name', t: '' }].map((r) => (
                          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ fontSize: 7.5, fontWeight: 700, fontFamily: 'monospace', width: 14, flexShrink: 0, color: r.t === 'pk' ? '#E3B341' : 'transparent' }}>PK</span>
                            <span style={{ fontSize: 8, fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)' }}>{r.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* PRODUCT */}
                    <div style={{ background: '#161B22', borderRadius: 6, overflow: 'hidden', border: '0.5px solid #30363D' }}>
                      <div style={{ background: 'rgba(188,140,255,0.1)', padding: '5px 8px', borderBottom: '0.5px solid #30363D' }}>
                        <span style={{ fontSize: 9, fontWeight: 600, color: '#BC8CFF', fontFamily: 'monospace' }}>PRODUCT</span>
                      </div>
                      <div style={{ padding: '4px 8px 6px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {[{ label: 'id', t: 'pk' }, { label: 'cat_id', t: 'fk' }, { label: 'price', t: '' }].map((r) => (
                          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ fontSize: 7.5, fontWeight: 700, fontFamily: 'monospace', width: 14, flexShrink: 0, color: r.t === 'pk' ? '#E3B341' : r.t === 'fk' ? '#BC8CFF' : 'transparent' }}>
                              {r.t === 'pk' ? 'PK' : r.t === 'fk' ? 'FK' : 'PK'}
                            </span>
                            <span style={{ fontSize: 8, fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)' }}>{r.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

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
          </motion.div>

        </div>

        {/* ── ROW 2: Figma + iPad ── */}
        <div className="mockup-row" style={{ display: 'flex', gap: 24, height: 360 }}>

          {/* MOCKUP 4 — Figma canvas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            onHoverStart={() => setHoveredFigma(true)}
            onHoverEnd={() => setHoveredFigma(false)}
            style={{ flex: 1.05, height: '100%' }}
          >
            <div style={{
              background: '#1E1E1E', borderRadius: 14, border: '0.5px solid #3A3A3A',
              display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden',
            }}>
              <div style={{
                background: '#2C2C2C', padding: '9px 12px',
                display: 'flex', alignItems: 'center', gap: 10,
                borderBottom: '0.5px solid #3A3A3A', flexShrink: 0,
              }}>
                <motion.div
                  animate={shouldReduce ? {} : hoveredFigma ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <svg width="12" height="18" viewBox="0 0 10 15" fill="none">
                    <rect x="0" y="0" width="5" height="5" rx="2.5" fill="#F24E1E"/>
                    <rect x="5" y="0" width="5" height="5" rx="2.5" fill="#FF7262"/>
                    <rect x="0" y="5" width="5" height="5" rx="2.5" fill="#A259FF"/>
                    <circle cx="7.5" cy="7.5" r="2.5" fill="#1ABCFE"/>
                    <rect x="0" y="10" width="5" height="5" rx="2.5" fill="#0ACF83"/>
                  </svg>
                </motion.div>
                <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 4, padding: '3px 10px', background: 'rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)' }}>Design</span>
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)', padding: '3px 10px' }}>Prototype</span>
              </div>
              <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                <div style={{
                  width: 54, background: '#252525', borderRight: '0.5px solid #3A3A3A',
                  padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0,
                }}>
                  {[
                    { icon: <MousePointer2 size={18} />, active: true },
                    { icon: <Square size={18} />,        active: false },
                    { icon: <Circle size={18} />,        active: false },
                    { icon: <Pen size={18} />,           active: false },
                    { icon: <Hand size={18} />,          active: false },
                  ].map((tool, i) => (
                    <div key={i} style={{
                      width: '100%', height: 36, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', borderRadius: 5,
                      background: tool.active ? 'rgba(255,255,255,0.08)' : 'transparent',
                      color: tool.active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)',
                    }}>
                      {tool.icon}
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, background: '#1A1A1A', padding: 16, position: 'relative' }}>
                  <motion.div
                    animate={shouldReduce ? {} : hoveredFigma ? { x: -4, y: -4 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: 4,
                      position: 'absolute', top: 12, left: 16, width: 110, height: 75, padding: 8,
                    }}
                  >
                    <div style={{ position: 'absolute', top: -14, left: 0, fontSize: 9, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>Frame 1</div>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, marginBottom: 5 }} />
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
                  </motion.div>
                  <motion.div
                    animate={shouldReduce ? {} : hoveredFigma ? { x: 4, y: -4 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    style={{
                      border: '0.5px solid rgba(162,89,255,0.45)', borderRadius: 4,
                      position: 'absolute', top: 12, right: 16, width: 80, height: 55,
                    }}
                  >
                    <div style={{ position: 'absolute', top: -14, left: 0, fontSize: 9, color: 'rgba(162,89,255,0.5)', fontFamily: 'monospace' }}>Component</div>
                  </motion.div>
                  <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', padding: '0 20px', textAlign: 'left' }}>
                    <div style={{ fontSize: 26, fontWeight: 500, color: 'rgba(255,255,255,0.9)', lineHeight: 1.2, fontFamily: 'var(--font-body)' }}>
                      Diseño UI &<br />prototipado
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 8, fontFamily: 'var(--font-body)' }}>Figma</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MOCKUP 5 — iPad (Procreate) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            whileHover={shouldReduce ? {} : { y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            onHoverStart={() => setHoveredIpad(true)}
            onHoverEnd={() => setHoveredIpad(false)}
            style={{ flex: 0.95, height: '100%', position: 'relative', overflow: 'visible' }}
          >
            {/* Apple Pencil */}
            <motion.div
              animate={shouldReduce ? {} : hoveredIpad ? { y: 6, rotate: -3 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', right: -22, top: 16, bottom: 16,
                width: 18, zIndex: 20,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}
            >
              <div style={{ width: '100%', height: 14, background: '#D0D0D0', borderRadius: '4px 4px 0 0', border: '0.5px solid #C0C0C0', flexShrink: 0 }} />
              <div style={{
                flex: 1, width: '100%',
                background: 'linear-gradient(to right, #E8E8E8 0%, #FFFFFF 40%, #F0F0F0 70%, #E0E0E0 100%)',
                border: '0.5px solid #C8C8C8', borderTop: 'none',
                borderRadius: '0 0 2px 2px', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18, background: '#D4A827', borderBottom: '0.5px solid #B8901F' }} />
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'rgba(0,0,0,0.04)' }} />
              </div>
              <div style={{ width: 0, height: 0, flexShrink: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '10px solid #C8C8C8' }} />
            </motion.div>

            {/* iPad body */}
            <div style={{
              background: '#D4D4D2', borderRadius: 22, padding: 16,
              position: 'relative', width: '100%', height: '100%',
              boxSizing: 'border-box', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.12)',
            }}>
              <div style={{ position: 'absolute', top: 7, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, background: '#B8B8B6', borderRadius: '50%', border: '0.5px solid rgba(0,0,0,0.1)' }} />
              <div style={{ position: 'absolute', right: -4, top: 44, width: 4, height: 34, background: '#C0C0BE', borderRadius: '0 3px 3px 0' }} />
              <div style={{ position: 'absolute', right: -4, top: 88, width: 4, height: 26, background: '#C0C0BE', borderRadius: '0 3px 3px 0' }} />
              <div style={{ width: '100%', height: '100%', background: '#F8F4EF', borderRadius: 6, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Procreate top bar */}
                <div style={{ background: '#1F1F1F', height: 44, flexShrink: 0, padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    {[{ icon: <Undo2 size={16} />, active: true }, { icon: <Redo2 size={16} />, active: false }].map((t, i) => (
                      <div key={i} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 5, background: t.active ? 'rgba(255,255,255,0.08)' : 'transparent', color: 'rgba(255,255,255,0.7)' }}>{t.icon}</div>
                    ))}
                    <div style={{ width: '0.5px', height: 14, background: 'rgba(255,255,255,0.1)', margin: '0 2px' }} />
                    {[{ icon: <Pen size={16} />, active: true }, { icon: <Eraser size={16} />, active: false }, { icon: <Droplet size={16} />, active: false }].map((t, i) => (
                      <div key={i} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 5, background: t.active ? 'rgba(255,255,255,0.08)' : 'transparent', color: 'rgba(255,255,255,0.7)' }}>{t.icon}</div>
                    ))}
                  </div>
                  <div style={{ flex: 1 }} />
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    {[{ icon: <Layers size={16} /> }, { icon: <Move size={16} /> }].map((t, i) => (
                      <div key={i} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 5, color: 'rgba(255,255,255,0.7)' }}>{t.icon}</div>
                    ))}
                    <div style={{ width: '0.5px', height: 14, background: 'rgba(255,255,255,0.1)', margin: '0 2px' }} />
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#00D4A0', border: '1.5px solid rgba(255,255,255,0.15)' }} />
                  </div>
                </div>
                {/* Canvas */}
                <div style={{ flex: 1, padding: '18px 20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none' }} viewBox="0 0 300 180" preserveAspectRatio="none">
                    <motion.path
                      d="M 30,140 C 80,40 200,160 270,60"
                      stroke="#00D4A0" strokeWidth="16" strokeLinecap="round" fill="none"
                      strokeDasharray="280"
                      animate={shouldReduce ? {} : hoveredIpad ? { strokeDashoffset: [280, 0] } : { strokeDashoffset: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.path
                      d="M 0,100 C 80,60 160,130 300,80"
                      stroke="#FFD4E8" strokeWidth="10" strokeLinecap="round" fill="none"
                      strokeDasharray="320"
                      animate={shouldReduce ? {} : hoveredIpad ? { strokeDashoffset: [320, 0] } : { strokeDashoffset: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    />
                    <ellipse cx="240" cy="150" rx="50" ry="35" fill="#A8D8FF" opacity="0.18"/>
                    <ellipse cx="45" cy="30" rx="30" ry="25" fill="#FFE566" opacity="0.2"/>
                  </svg>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(0,0,0,0.06)', borderRadius: 99, padding: '5px 12px', marginBottom: 10 }}>
                      <Pen size={12} color="#555" />
                      <span style={{ fontSize: 11, color: '#555', fontWeight: 500, letterSpacing: '0.05em', fontFamily: 'var(--font-body)' }}>PROCREATE</span>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 500, color: '#1A1A1A', lineHeight: 1.25, fontFamily: 'var(--font-body)' }}>
                      Ilustración digital<br />y creación de assets
                    </div>
                  </div>
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {['#00D4A0', '#FFD4E8', '#A8D8FF', '#FFE566', '#C4A8FF'].map((color) => (
                      <div key={color} style={{ width: 20, height: 20, borderRadius: '50%', background: color, border: '1.5px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
                    ))}
                    <div style={{ width: 1, height: 14, background: 'rgba(0,0,0,0.1)', margin: '0 4px' }} />
                    <MoreHorizontal size={17} color="#999" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bridging paragraph */}
      <div style={{ padding: '64px 0 0', display: 'flex', justifyContent: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 680,
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          Me interesa el desarrollo de experiencias digitales desde la implementación hasta la interacción. Trabajo desarrollando interfaces web y móviles, combinando diseño y código para construir experiencias funcionales e intuitivas. También desarrollo soluciones técnicas que me permiten comprender y conectar mejor las distintas partes de un producto digital. Estas áreas representan las habilidades y procesos que utilizo para diseñar y construir experiencias digitales.
        </motion.p>
      </div>

      <SkillsMarquee />

      <style>{`
        @media (max-width: 768px) {
          .mockup-row {
            flex-direction: column !important;
            height: auto !important;
          }
          .mockup-row > * {
            flex: none !important;
            min-height: 280px !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
