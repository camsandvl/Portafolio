import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useHoverColor } from '../hooks/useHoverColor'
import NavLink from './NavLink'

const LEFT_LINKS = [
  { label: 'Casos de estudio', href: '#casos-heading' },
  { label: 'Sobre mí',         href: '#about' },
]
const RIGHT_LINKS = [
  { label: 'Skills y tools', href: '#skills' },
  { label: 'Contacto',              href: '#contact' },
]
const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS]

function scrollTo(href, cb) {
  if (cb) cb()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const desktopLinkHover = useHoverColor('#000', 'var(--accent)')
  const mobileLinkHover  = useHoverColor('var(--text)', 'var(--accent)')

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Desktop centered pill ── */}
      <nav
        className="desk-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          padding: '18px 40px',
          background: 'var(--bg)',
        }}
      >
        {/* Left links */}
        <div style={{ display: 'flex', gap: 28, flex: 1, justifyContent: 'flex-end' }}>
          {LEFT_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Center logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}
        >
          <span style={{ fontSize: 28, color: 'var(--text)', userSelect: 'none' }}>✦</span>
        </a>

        {/* Right links */}
        <div style={{ display: 'flex', gap: 28, flex: 1, justifyContent: 'flex-start' }}>
          {RIGHT_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* ── Mobile hamburger ── */}
      <div
        className="hamburger-wrap"
        style={{ position: 'fixed', top: 20, right: 20, zIndex: 1001 }}
      >
        <button
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{ background: 'none', border: 'none', padding: 6, display: 'flex', flexDirection: 'column', gap: 5 }}
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
            {ALL_LINKS.map((link, i) => (
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
        @media (min-width: 769px) { .hamburger-wrap { display: none !important; } }
        @media (max-width: 768px) { .desk-nav { display: none !important; } }
      `}</style>
    </>
  )
}
