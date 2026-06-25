import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import SkillPill from '../components/SkillPill'
import SkillModal from '../components/SkillModal'

const PILLS = [
  { label: 'Frontend Dev',         title: 'Frontend Development', color: 'var(--coral)',      badges: ['HTML 5', 'Kotlin', 'Javascript', 'Typescript', 'CSS', 'React', 'React Native', 'Next.js'], description: 'Mi formación en ingeniería y mi interés por el diseño me permiten convertir prototipos y conceptos visuales en productos web funcionales y atractivos.', top: 'calc(50% - 110px)', left: 'calc(50% - 150px)', rotate: -7 },
  { label: 'DB & Backend',         title: 'DB & Backend',         color: 'var(--periwinkle)', badges: ['Node.js', 'PostgreSQL', 'MariaDB', 'Prisma', 'Neo4J'],                          description: 'Cuento con experiencia en modelado de bases de datos y desarrollo backend, aplicando principios de organización, escalabilidad y manejo eficiente de la información para respaldar aplicaciones digitales.', top: 'calc(50% - 95px)',  left: 'calc(50% + 170px)', rotate: 8  },
  { label: 'Digital Illustration', title: 'Digital Illustration', color: 'var(--teal)',       badges: ['Procreate', 'Character Design', 'Human Anatomy', 'Concept Art', 'Environment Design', 'Visual Storytelling'],                               description: 'A través de la ilustración digital, exploro la narrativa visual, el diseño de personajes y la construcción de entornos. Esta práctica ha enriquecido mi enfoque del diseño, permitiéndome crear experiencias visuales más atractivas y expresivas.', top: 'calc(50% + 110px)', left: 'calc(50% - 170px)', rotate: 7  },
  { label: 'UI/UX Design',         title: 'UI/UX Design',         color: 'var(--dark)',       badges: ['Figma', 'Wireframing', 'Prototyping', 'User Flows'],                            description: 'Diseño interfaces digitales intuitivas y centradas en el usuario, combinando funcionalidad y estética para crear experiencias claras, accesibles y atractivas.', top: 'calc(50% + 115px)', left: 'calc(50% + 160px)', rotate: -8 },
]

function SkillsDoodleHint() {
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
        top: 'calc(50% - 195px)',
        left: 'calc(50% - 278px)',
        pointerEvents: 'none',
        zIndex: 4,
      }}
    >
      <p style={{
        fontFamily: "'Gochi Hand', cursive",
        fontWeight: 400,
        fontSize: '0.95rem',
        color: 'var(--dark)',
        margin: '0 0 4px',
        whiteSpace: 'nowrap',
      }}>Haz clic para ver más</p>
      <svg
        width="56" height="52"
        viewBox="0 0 64 60"
        fill="none"
        style={{ display: 'block' }}
      >
        <path
          d="M14,4 C2,16 2,42 54,46"
          stroke="var(--dark)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M43,36 L60,46 L43,56 Z"
          fill="var(--dark)"
        />
      </svg>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" style={{
      background: 'var(--bg)',
      position: 'relative',
      minHeight: '80vh',
      overflow: 'hidden',
      marginTop: '-15vh',
    }}>

      {/* Doodle hint — upper-left of the Frontend Dev pill */}
      <SkillsDoodleHint />

      {/* Centered title — outer div owns the position, inner motion.div animates */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 2,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader margin="0">Skills<br />& Tools</SectionHeader>
        </motion.div>

      </div>

      {/* Desktop pills */}
      {PILLS.map(({ label, title, description, color, badges, top, left, rotate }, i) => (
        <div
          key={label}
          className="skills-pill"
          style={{
            position: 'absolute',
            top,
            left,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            zIndex: 3,
            cursor: 'pointer',
          }}
          onClick={() => setActive({ label, title, description, color, badges })}
        >
          <div className={`skill-float skill-float-${i}`}>
            <SkillPill label={label} color={color} />
          </div>
        </div>
      ))}

      {/* Mobile pills */}
      <div className="skills-mobile-pills">
        {PILLS.map(({ label, title, description, color, badges }, i) => (
          <div key={label} onClick={() => setActive({ label, title, description, color, badges })} style={{ cursor: 'pointer' }}>
            <div className={`skill-float skill-float-${i}`}>
              <SkillPill label={label} color={color} />
            </div>
          </div>
        ))}
      </div>

      {active && createPortal(
        <SkillModal
          label={active.title}
          description={active.description}
          color={active.color}
          badges={active.badges}
          onClose={() => setActive(null)}
        />,
        document.body
      )}

      <style>{`
        @keyframes skill-float {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-8px);  }
        }
        .skill-float   { animation: skill-float linear infinite; }
        .skill-float-0 { animation-duration: 3.4s; animation-delay:  0.0s; }
        .skill-float-1 { animation-duration: 4.0s; animation-delay: -1.3s; }
        .skill-float-2 { animation-duration: 3.7s; animation-delay: -2.5s; }
        .skill-float-3 { animation-duration: 4.3s; animation-delay: -0.8s; }
        .skill-float { animation-timing-function: ease-in-out; }

        .skills-mobile-pills { display: none; }

        @media (max-width: 768px) {
          .skills-pill { display: none !important; }
          .skills-mobile-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(50% + 90px);
            width: 90%;
          }
        }
      `}</style>
    </section>
  )
}
