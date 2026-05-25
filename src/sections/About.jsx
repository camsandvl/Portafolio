import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
}

export default function About() {
  const [catOpen, setCatOpen] = useState(false)

  return (
    <section
      id="about"
      style={{ padding: 'var(--space-32) 0', background: 'var(--bg)', overflow: 'hidden' }}
    >
      <div className="container">

        {/* Section label */}
        <div className="section-label">
          <span className="section-num">03</span>
          <span className="section-rule" />
          <span className="section-name">Sobre mí</span>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>

          {/* ── Text column ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-8)',
            }}>
              Mi Recorrido 
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 520 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Desde pequeña me interesó el diseño, especialmente la animación y la ilustración como formas de construir mundos y experiencias visuales. Durante mucho tiempo imaginé formar parte de proyectos creativos capaces de generar esa misma sensación de inmersión.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Con el tiempo descubrí el desarrollo web y encontré otra forma de construir experiencias: a través de la interacción, la estructura y la tecnología. Me atrajo la posibilidad de transformar ideas en productos funcionales, diseñando interfaces y experiencias digitales donde lo visual y lo técnico trabajan en conjunto. Más adelante, ese interés evolucionó hacia el desarrollo de aplicaciones y el mundo interactivo de los videojuegos.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Hoy disfruto combinar creatividad y desarrollo para construir experiencias intuitivas, visualmente cuidadas y centradas en el usuario.
              </p>
            </div>

          </motion.div>

          {/* ── Cat illustration column ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ position: 'relative' }}
          >
            <img
              src="./assets/gato-ilustracion.png"
              alt="Mi gato, ilustrado por Camila Sandoval"
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block' }}
            />

            {/* Clickable hint */}
            <motion.button
              onClick={() => setCatOpen(v => !v)}
              aria-label="Ver foto de mi gato"
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute',
                bottom: 16,
                left: 80,
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                color: 'var(--text)',
                letterSpacing: '0.04em',
                opacity: 0.5,
              }}
            >
              haz clic
            </motion.button>

            {/* Photo bubble */}
            <AnimatePresence>
              {catOpen && (
                <motion.div
                  key="cat-bubble"
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{
                    position: 'absolute',
                    bottom: 56,
                    left: 16,
                    width: 180,
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                    border: '2px solid rgba(255,255,255,0.35)',
                    zIndex: 10,
                    transformOrigin: 'bottom left',
                  }}
                >
                  <img
                    src="./assets/nino-gato.jpg"
                    alt="Niño, mi gato"
                    style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    background: 'rgba(0,0,0,0.55)',
                    backdropFilter: 'blur(4px)',
                    padding: '6px 10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    color: '#fff',
                    letterSpacing: '0.03em',
                  }}>
                    Niño, mi gato 🐱
                  </div>
                </motion.div>
              )}
            </AnimatePresence>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
