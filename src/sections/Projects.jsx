import { motion, useReducedMotion } from 'framer-motion'
import SkillsMarquee from './Skills'
import PhoneCard from '../components/cards/PhoneCard'
import BrowserCard from '../components/cards/BrowserCard'
import BackendCard from '../components/cards/BackendCard'
import FigmaCard from '../components/cards/FigmaCard'
import IpadCard from '../components/cards/IpadCard'
import SectionLabel from '../components/SectionLabel'
import { revealUp } from '../lib/animationVariants'

export default function Projects() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="projects" style={{ background: 'var(--bg-soft)', padding: 'var(--space-32) 0', overflow: 'hidden' }}>
      <div className="container">

        <SectionLabel num="01" name="Stack" />

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

        {/* Click hint */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 300, lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: 'var(--space-16)', marginBottom: 'var(--space-6)' }}>
          Dale click a las cartas para saber más sobre mi experiencia y proyectos
        </p>

        {/* ── ROW 1: Phone + Browser + Backend ── */}
        <div className="mockup-row" style={{ display: 'flex', gap: 24, height: 380, marginBottom: 24 }}>
          <PhoneCard shouldReduce={shouldReduce} />
          <BrowserCard shouldReduce={shouldReduce} />
          <BackendCard shouldReduce={shouldReduce} />
        </div>

        {/* ── ROW 2: Figma + iPad ── */}
        <div className="mockup-row" style={{ display: 'flex', gap: 24, height: 360 }}>
          <FigmaCard shouldReduce={shouldReduce} />
          <IpadCard shouldReduce={shouldReduce} />
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
