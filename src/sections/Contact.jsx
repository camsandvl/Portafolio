import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: 'var(--space-32) 0 0', overflow: 'hidden' }}>
      <div className="container">

        {/* Section label */}
        <div className="section-label">
          <span className="section-num">04</span>
          <span className="section-rule" />
          <span className="section-name">Contacto</span>
        </div>

        {/* Big CTA heading */}
        <div style={{ maxWidth: 900, marginBottom: 'var(--space-16)' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7.5rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
          }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.1 }}
              >
                Trabajemos
              </motion.span>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.span
                style={{ display: 'block', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-muted)' }}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.22 }}
              >
                juntos.
              </motion.span>
            </div>
          </h2>
        </div>

        {/* Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginBottom: 'var(--space-24)' }}>
          <motion.p
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', maxWidth: 480, lineHeight: 1.75 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          >
            ¿Tienes una idea, proyecto o colaboración en mente? Me interesa crear experiencias digitales donde diseño y desarrollo trabajen juntos.
          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            <a
              href="mailto:camsandvl@gmail.com"
              className="btn-primary"
            >
              camsandvl@gmail.com
            </a>
            <a
              href="https://github.com/camsandvl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 'var(--space-8)' }} />

        {/* Footer */}
        <footer style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
          paddingBottom: 'var(--space-8)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="./assets/logo-camaleon.png" alt="CS" style={{ height: 28, display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)' }}>
              Camila Sandoval
            </span>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', opacity: 0.6 }}>
            Diseñado y desarrollado por Camila Sandoval · {new Date().getFullYear()}
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            <a
              href="mailto:camsandvl@gmail.com"
              style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Email
            </a>
            <a
              href="https://github.com/camsandvl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
