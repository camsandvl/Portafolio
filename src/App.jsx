import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import LandscapeBreak from './sections/LandscapeBreak'
import About from './sections/About'
import Illustrations from './sections/Illustrations'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [big, setBig] = useState(false)

  /* Custom cursor — desktop only */
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY })
    const over = (e) => setBig(!!e.target.closest('a, button, [role="button"]'))
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-sparkle ${big ? 'hovered' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      >
        ✦
      </div>

      <Navbar />

      <main>
        {/* ── 1. Hero ──────────────────────────────────── */}
        <Hero />

        {/* ── 2. Habilidades técnicas ──────────────────── */}
        <Projects />

        {/* ── Landscape break: Campo ─────────────────── */}
        <LandscapeBreak
          id="landscape-campo"
          name="Paisaje campo con casa — estilo Pixar"
          description="Morados, rosados y verdes"
          colors={['#9B7FD4', '#F0A0C8', '#6CC070', '#D4A0E8', '#A8E6A8']}
          src="./assets/paisaje-campo.jpg"
          fromColor="#141414"
          toColor="#0A0A0A"
        />

        {/* ── 3. Ilustraciones & Animaciones ───────────── */}
        <Illustrations />

        {/* ── Landscape break: Piscina ─────────────────── */}
        <LandscapeBreak
          id="landscape-piscina"
          name="Paisaje piscina — perspectiva del nadador"
          description="Ilustración realista · celestes, amarillos, azules brillantes"
          colors={['#5AC8FA', '#FFE34A', '#1A9EFF', '#B8EDFF', '#FFD000']}
          src="./assets/paisaje-piscina.png"
          fromColor="#0A0A0A"
          toColor="#0A0A0A"
        />

        {/* ── 4. Sobre mí ──────────────────────────────── */}
        <About />

        {/* ── 5. Contacto ──────────────────────────────── */}
        <Contact />
      </main>
    </>
  )
}
