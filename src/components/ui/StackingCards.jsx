import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TRAFFIC_LIGHTS = ['#e2675b', '#e7b94b', '#5fb877']

function Card({ title, color, lightColor, url, description, index, total, progress }) {
  const scale = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1, 1 - (total - index - 1) * 0.04]
  )

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: `${index * 16}px`,
        position: 'sticky',
        top: 0,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          width: '100%',
          maxWidth: 520,
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid #e2ddd0',
          background: '#fff',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* ── Browser chrome bar ── */}
        <div style={{
          height: 40,
          background: '#e6e4e0',
          borderBottom: '1px solid #d8d5d0',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 16,
          paddingRight: 16,
          gap: 8,
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {TRAFFIC_LIGHTS.map((c) => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{
            marginLeft: 8,
            background: '#d8d6d2',
            borderRadius: 999,
            padding: '3px 12px',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            color: '#9a9289',
            letterSpacing: '0.02em',
          }}>
            {url}
          </div>
        </div>

        {/* ── Stage body ── */}
        <div style={{
          background: color,
          padding: '32px 40px 30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 18,
        }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              color: 'rgba(255,255,255,0.8)',
              textTransform: 'uppercase',
            }}>
              Caso {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'var(--font-hero)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            margin: 0,
          }}>
            {title}<span style={{ color: '#fff' }}>.</span>
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.6,
            maxWidth: 400,
            margin: 0,
          }}>
            {description}
          </p>

          {/* CTA */}
          <a
            href={`#${title.toLowerCase()}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#fff',
              color: '#15130f',
              padding: '9px 20px',
              borderRadius: 999,
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              flexShrink: 0,
            }}
          >
            Ver caso de estudio ↗
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackingCards({ cards }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef}>
      {cards.map((card, i) => (
        <Card
          key={i}
          {...card}
          index={i}
          total={cards.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  )
}
