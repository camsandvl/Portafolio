import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import ContactPill from '../components/ContactPill'
import BodyText from '../components/BodyText'
function CVIcon({ size = 18, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
  )
}

function MailIcon({ size = 18, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

function GithubIcon({ size = 18, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

const HEADING = {
  fontFamily: "'Open Sauce One', sans-serif",
  fontWeight: 600,
  fontStyle: 'italic',
  fontSize: 'clamp(2.6rem, 5.8vw, 5.6rem)',
  letterSpacing: '-0.08em',
  textAlign: 'center',
  margin: 0,
  lineHeight: 1,
}

const RISE = (delay) => ({
  initial: { y: '110%' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const FADE = (delay) => ({
  initial: { opacity: 0, y: 12 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

const PILLS = [
  { label: 'CV',     href: `${import.meta.env.BASE_URL}assets/Camila_Sandoval_CV.pdf`, icon: CVIcon     },
  { label: 'github', href: 'https://github.com/camsandvl',  icon: GithubIcon },
  { label: 'correo', href: 'mailto:camsandvl@gmail.com',    icon: MailIcon   },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const domeRef    = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start center'],
  })
  const domeY  = useTransform(scrollYProgress, [0, 1], [80, 0])
  const inView = useInView(domeRef, { once: true, amount: 0.35 })

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        background: 'var(--bg)',
        position: 'relative',
        minHeight: '45vw',
        overflow: 'hidden',
      }}
    >
      {/* Dome — outer div owns centering, motion.div owns the rise */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '82vw',
      }}>
        <motion.div
          ref={domeRef}
          style={{
            y: domeY,
            height: '41vw',
            borderRadius: '41vw 41vw 0 0',
            background: 'var(--dark)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          {/* Heading — line-by-line mask reveal */}
          <h2 style={{ ...HEADING, width: 'max-content' }}>
            <span style={{ display: 'block', overflow: 'hidden', paddingRight: '0.1em' }}>
              <motion.span
                style={{ display: 'block', color: 'var(--cream)' }}
                animate={{ y: inView ? 0 : '110%' }}
                {...RISE(0.05)}
              >Trabajemos</motion.span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.18em', color: 'var(--periwinkle)' }}
                animate={{ y: inView ? 0 : '110%' }}
                {...RISE(0.17)}
              >
                Juntos
                <img
                  src="./assets/logo-camaleon-grande.png"
                  alt=""
                  aria-hidden="true"
                  style={{ height: '0.75em', width: 'auto', display: 'block' }}
                />
              </motion.span>
            </span>
          </h2>

          {/* Invitation line */}
          <motion.div
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
            {...FADE(0.42)}
          >
            <BodyText color="var(--stone)" style={{ textAlign: 'center' }}>
              ¿Tienes una idea en mente? Me encantaría convertirla en una experiencia digital memorable.
            </BodyText>
          </motion.div>

          {/* Buttons — left→right cascade */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            {PILLS.map(({ label, href, icon }, i) => (
              <motion.div
                key={label}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                {...FADE(0.62 + i * 0.08)}
              >
                <ContactPill label={label} href={href} icon={icon} />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
