import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useHoverColor } from '../hooks/useHoverColor'

const LINKS = [
  { label: 'Habilidades técnicas',        num: '01', href: '#projects' },
  { label: 'Animaciones & Ilustraciones', num: '02', href: '#illustrations' },
  { label: 'Sobre mí',                    num: '03', href: '#about' },
  { label: 'Contacto',                    num: '04', href: '#contact' },
]

function scrollTo(href, cb) {
  if (cb) cb()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const desktopLinkHover = useHoverColor('var(--text-muted)', 'var(--accent-dark)')
  const mobileLinkHover = useHoverColor('var(--text)', 'var(--accent)')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '14px 0' : '22px 0',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.5s var(--ease)',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <img src="./assets/logo-camaleon.png" alt="Camila Sandoval logo" style={{ height: 34, display: 'block' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 13.5,
              color: 'var(--text)',
              letterSpacing: '0.01em',
            }}>
              Camila Sandoval
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }} className="desk-nav">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.03em',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                  {...desktopLinkHover}
                >
                  <span style={{ color: 'var(--accent)', fontSize: 11, fontWeight: 700 }}>{link.num}.</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Hamburger ── */}
          <button
            className="hamburger"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ background: 'none', border: 'none', padding: 6, display: 'flex', flexDirection: 'column', gap: 5, zIndex: 1001 }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block', width: 22, height: 2,
                  background: 'var(--text)', borderRadius: 2,
                  transition: 'all 0.35s var(--ease)',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 998,
              background: 'var(--bg)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'flex-start', justifyContent: 'center',
              padding: '0 var(--space-12)',
            }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href, () => setMenuOpen(false)) }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 9vw, 4rem)',
                  fontWeight: 800,
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  marginBottom: 'var(--space-3)',
                }}
                {...mobileLinkHover}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: 'var(--space-12)', display: 'flex', gap: 'var(--space-6)' }}
            >
              <a href="mailto:camsandvl@gmail.com" style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-body)' }}>
                camsandvl@gmail.com
              </a>
              <a href="https://github.com/camsandvl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-body)' }}>
                GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) { .hamburger { display: none !important; } }
        @media (max-width: 768px) { .desk-nav { display: none !important; } }
      `}</style>
    </>
  )
}
