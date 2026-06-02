import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { container, slideUp, bigName } from '../lib/animationVariants'

const WORDS = ['desarrolladora web.', 'ilustradora.', 'diseñadora UI.']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [isLanded, setIsLanded] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 2000)
    return () => clearTimeout(id)
  }, [wordIndex])

  return (
    <section
      id="hero"
      style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', background: 'var(--bg)', overflow: 'hidden', paddingTop: 80, position: 'relative' }}
    >
      <div className="container" style={{ width: '100%' }}>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingBottom: 'var(--space-16)',
            paddingTop: 'var(--space-6)',
          }}
        >
{/* Big name */}
          <motion.h1 variants={bigName} style={{ marginBottom: 'var(--space-6)' }} onAnimationComplete={() => setIsLanded(true)}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(4.5rem, 10vw, 10rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
            }}>
              <motion.div
                animate={isLanded ? {
                  rotate: [0, -3, 0, 3, 0],
                } : {}}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'loop',
                }}
                style={{ transformOrigin: 'bottom center', display: 'inline-block', flexShrink: 0 }}
              >
                <img
                  src="./assets/logo-camaleon-grande.png"
                  alt="C"
                  aria-hidden="true"
                  style={{
                    height: '1.15em',
                    width: 'auto',
                    display: 'block',
                    transform: 'scaleX(-1)',
                  }}
                />
              </motion.div>
              amila
            </span>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(4.5rem, 10vw, 10rem)',
              lineHeight: 0.8,
              letterSpacing: '-0.03em',
              color: 'var(--text-muted)',
            }}>
              Sandoval
            </span>
          </motion.h1>

          {/* Tagline — animated rotating word */}
          <motion.div
            variants={slideUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 300,
              color: 'var(--text)',
              marginBottom: 'var(--space-10)',
              lineHeight: 1.55,
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ type: 'spring', stiffness: 50, damping: 12 }}
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={slideUp} style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Ver mi trabajo <span style={{ fontSize: 17 }}>↓</span>
            </a>
            <a href="mailto:camsandvl@gmail.com" className="btn-outline">
              Hablemos
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
