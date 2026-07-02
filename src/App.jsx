import { useEffect, useLayoutEffect, useState } from 'react'
import { HashRouter, Routes, Route, useParams, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import CasosDeEstudio from './sections/CasosDeEstudio'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import CaseStudyPage from './pages/CaseStudyPage'

if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])
  return null
}

function CaseStudyPageKeyed() {
  const { slug } = useParams()
  return <CaseStudyPage key={slug} />
}

function MainPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CasosDeEstudio />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [big, setBig] = useState(false)

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
    <HashRouter>
      <ScrollToTop />
      <div
        className={`cursor-sparkle ${big ? 'hovered' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      >
        ✦
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/caso/:slug" element={<CaseStudyPageKeyed />} />
      </Routes>
    </HashRouter>
  )
}
