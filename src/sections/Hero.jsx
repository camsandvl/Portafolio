import { useState } from 'react'
import { motion } from 'framer-motion'
import UILabel from '../components/UILabel'
import { Typewriter } from '../components/ui/TypewriterText'
import { container, slideUp, bigName } from '../lib/animationVariants'

const LOGO_VARIANTS = ['./assets/logo-periwinkle.png', './assets/logo-teal.png', './assets/logo-coral.png']

export default function Hero() {
  const [logo] = useState(() => {
    const prevIndex = Number(localStorage.getItem('heroLogoIndex') ?? -1)
    const nextIndex = (prevIndex + 1) % LOGO_VARIANTS.length
    localStorage.setItem('heroLogoIndex', String(nextIndex))
    return LOGO_VARIANTS[nextIndex]
  })

  return (
    <section
      id="hero"
      style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', background: 'var(--bg)', overflow: 'hidden', paddingTop: 80, position: 'relative', zIndex: 1 }}
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
          {/* Name row: "Camila Sandoval" + logo */}
          <motion.h1 variants={bigName} style={{ marginBottom: '0.05rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.15em',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(3rem, 7.5vw, 8.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--dark)',
            }}>
              <Typewriter
                text={["Camila Sandoval"]}
                speed={165}
                loop={false}
              />
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                style={{ height: '1em', width: 'auto', display: 'block', flexShrink: 0 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={slideUp} style={{ margin: 0 }}>
            <UILabel color="var(--stone)">UI/UX Designer y Software Developer</UILabel>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
