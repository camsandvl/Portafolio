import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import CardTitle from '../components/CardTitle'
import BodyText from '../components/BodyText'

const RISE = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

export default function About() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{
      background: 'var(--bg)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 0',
    }}>
      <div style={{
        maxWidth: 1000,
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        gap: 70,
        width: '100%',
        boxSizing: 'border-box',
      }}>

        {/* Left — slides in from the left */}
        <motion.div
          style={{ flex: 'none' }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader label="Sobre mí" align="left" />
        </motion.div>

        {/* Right — content */}
        <div style={{ flex: 1 }}>
          <CardTitle margin="0 0 20px">
            <span ref={titleRef} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.25em' }}>
              <motion.span
                style={{ display: 'inline-block', color: 'var(--periwinkle)' }}
                initial={{ y: '100%' }}
                animate={{ y: inView ? 0 : '100%' }}
                transition={RISE}
              >Hola soy </motion.span>
            </span>
            {/* Outer span: positioning context for the scribble */}
            <span style={{ position: 'relative', display: 'inline-block', verticalAlign: 'bottom' }}>
              {/* Inner clip span: masks the text slide-up */}
              <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
                <motion.span
                  style={{ display: 'inline-block', color: 'var(--coral)' }}
                  initial={{ y: '100%' }}
                  animate={{ y: inView ? 0 : '100%' }}
                  transition={{ ...RISE, delay: 0.1 }}
                >Cami!</motion.span>
              </span>
              {/* Scribble underline — draws in after text settles */}
              <svg
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
                style={{ position: 'absolute', left: 0, bottom: -2, width: '100%', height: 10, overflow: 'visible' }}
              >
                <motion.path
                  d="M1,5 Q25,1 50,5 Q75,9 99,4"
                  fill="none"
                  stroke="var(--coral)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 1.1 }}
                />
              </svg>
            </span>
          </CardTitle>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <BodyText color="var(--stone)">Soy estudiante de tercer año de Ingeniería en Ciencia de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala, con interés tanto en el desarrollo de software como en el diseño de experiencias digitales. Me apasiona la intersección entre tecnología, diseño y creatividad.<br /><br />Mi formación técnica me permite comprender el proceso completo de desarrollo de productos digitales, mientras que mi experiencia en ilustración digital ha fortalecido mis habilidades de creatividad, comunicación visual y pensamiento centrado en el usuario.</BodyText>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
