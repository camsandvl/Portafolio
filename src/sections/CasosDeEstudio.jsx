import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CaseCard from '../components/CaseCard'
import SectionHeader from '../components/SectionHeader'
import { CASES } from '../data/cases'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 72 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

function DoodleHint() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      animate={inView ? { opacity: 0 } : { opacity: 1 }}
      transition={{ delay: 5, duration: 1.5, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        bottom: 'calc(100% - 22px)',
        left: -24,
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <p style={{
        fontFamily: "'Gochi Hand', cursive",
        fontWeight: 400,
        fontSize: '0.95rem',
        color: 'var(--dark)',
        margin: '0 0 4px',
        whiteSpace: 'nowrap',
        transform: 'rotate(3deg)',
        transformOrigin: 'left center',
      }}>Haz clic para ver el caso</p>

      {/* Doodle arrow — pronounced C-curve, tip points right onto card */}
      <svg
        width="66" height="50"
        viewBox="-8 0 84 62"
        fill="none"
        style={{ display: 'block' }}
      >
        <path
          d="M50,4 C-6,4 -6,46 64,50"
          stroke="var(--dark)"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M52,40 L72,50 L52,60 Z"
          fill="var(--dark)"
        />
      </svg>
    </motion.div>
  )
}

export default function CasosDeEstudio() {
  return (
    <section
      id="casos"
      style={{ background: 'var(--bg)', padding: '160px 0 80px', marginTop: '-15vh' }}
    >
      <style>{`
        @keyframes device-float {
          0%, 100% { transform: translateY(0);   }
          50%       { transform: translateY(-6px); }
        }
        .device-float { animation: device-float 4s ease-in-out infinite; }
      `}</style>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: 48 }}
      >
        <SectionHeader label="Casos de Estudio" margin="0" />
      </motion.div>

      {/* Cards — staggered deal-out */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        style={{ display: 'flex', gap: 12, justifyContent: 'center' }}
      >
        {CASES.map((c, i) => (
          <motion.div key={c.title} variants={cardVariants} style={{ position: 'relative' }}>
            {i === 0 && <DoodleHint />}
            <CaseCard {...c} to={`/caso/${c.slug}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
