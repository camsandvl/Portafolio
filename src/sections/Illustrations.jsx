import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { revealUp } from '../lib/animationVariants'

export default function Illustrations() {
  return (
    <section id="illustrations" style={{ background: 'var(--bg)', paddingBottom: 'var(--space-32)' }}>

      {/* ─── SECTION HEADER ─────────────────────────────── */}
      <div className="container" style={{ paddingTop: 'var(--space-32)' }}>
        <SectionLabel num="02" name="Animaciones e Ilustraciones" />

        <motion.h2
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            maxWidth: 700,
            marginBottom: 'var(--space-20)',
          }}
        >
          Diseño <br />
          <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--text-muted)' }}>
            e identidad.
          </em>
        </motion.h2>
      </div>

      {/* ─── CHARACTER DESIGN ────────────────────────────── */}
      <div className="container">
        <SubTitle label="Diseño de personajes" />

        {/* FAVORITE #1 — Character brief 10 poses */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="char-img-wrap"
        >
          <img
            src="./assets/character-brief-10poses.png"
            alt="Diseño de personaje — 10 poses"
            className="char-img"
            style={{ borderRadius: 'var(--radius-lg)', display: 'block' }}
          />
        </motion.div>

        {/* FAVORITE #2 — Plush characters */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="char-img-wrap"
        >
          <img
            src="./assets/character-brief-plush.png"
            alt="4 personajes estilo felpa"
            className="char-img"
            style={{ borderRadius: 'var(--radius-lg)', display: 'block' }}
          />
        </motion.div>

      </div>

      {/* ─── ENVIRONMENTS ────────────────────────────────── */}
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <SubTitle label="Diseño de entornos" />

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-2"
          style={{ marginBottom: 'var(--space-16)' }}
        >
          <img
            src="./assets/enviroment-casas.png"
            alt="Casas con personalidades exóticas"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block' }}
          />

          <img
            src="./assets/enviroment-cuarto.png"
            alt="Cuarto de personaje — diseño de entorno"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 'var(--space-16) 0 0',
          }}
        >
          <p style={{
            maxWidth: 680,
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            color: 'var(--text-muted)',
            lineHeight: 1.9,
            fontWeight: 300,
          }}>
            Esta sección reúne parte de mi trabajo en ilustración, diseño de personajes, exploración visual y conceptos de animación. Me interesa crear mundos, identidades visuales y composiciones que comuniquen personalidad, atmósfera y narrativa a través de la imagen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Small reusable subsection title ── */
function SubTitle({ label }) {
  return (
    <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.65rem',
      fontWeight: 700,
      letterSpacing: '0.2em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-6)',
    }}>
      — {label}
    </p>
  )
}
