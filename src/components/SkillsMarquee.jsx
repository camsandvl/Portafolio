import { motion } from 'framer-motion'

const SKILLS_ROW1 = [
  { name: 'JavaScript', logo: 'https://skillicons.dev/icons?i=js' },
  { name: 'TypeScript', logo: 'https://skillicons.dev/icons?i=ts' },
  { name: 'React',      logo: 'https://skillicons.dev/icons?i=react' },
  { name: 'Next.js',   logo: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'Node.js',   logo: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Java',      logo: 'https://skillicons.dev/icons?i=java' },
  { name: 'Kotlin',    logo: 'https://skillicons.dev/icons?i=kotlin' },
  { name: 'Expo',      logo: 'https://avatars.githubusercontent.com/u/12504344?s=200&v=4' },
]

const SKILLS_ROW2 = [
  { name: 'PostgreSQL', logo: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'Docker',     logo: 'https://skillicons.dev/icons?i=docker' },
  { name: 'AWS',        logo: 'https://skillicons.dev/icons?i=aws' },
  { name: 'GitHub',     logo: 'https://skillicons.dev/icons?i=github' },
  { name: 'Neo4J',      logo: 'https://avatars.githubusercontent.com/u/201120?s=48&v=4' },
  { name: 'NPM',        logo: 'https://skillicons.dev/icons?i=npm' },
  { name: 'TanStack',   logo: 'https://avatars.githubusercontent.com/u/72518640?s=48&v=4' },
]

function SkillIcon({ name, logo, ...rest }) {
  return (
    <div
      {...rest}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.2s, opacity 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.opacity = '0.75' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';   e.currentTarget.style.opacity = '1' }}
    >
      <img src={logo} alt={name} width={80} height={80} style={{ objectFit: 'contain', display: 'block', borderRadius: '18%' }} />
    </div>
  )
}

function MarqueeRow({ skills, direction, bg }) {
  const anim = direction === 'right' ? 'tickerRight 30s linear infinite' : 'tickerLeft 30s linear infinite'
  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0,  width: 80, height: '100%', zIndex: 2, background: `linear-gradient(to right, ${bg}, transparent)`, pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: 80, height: '100%', zIndex: 2, background: `linear-gradient(to left,  ${bg}, transparent)`, pointerEvents: 'none' }} />
      <div className="skills-track" style={{ display: 'flex', gap: 28, width: 'max-content', alignItems: 'center', animation: anim }}>
        {skills.map(s => <SkillIcon key={s.name}         name={s.name} logo={s.logo} />)}
        {skills.map(s => <SkillIcon key={`dup-${s.name}`} name={s.name} logo={s.logo} aria-hidden="true" />)}
      </div>
    </div>
  )
}

export default function SkillsMarquee({ bg = 'var(--bg)' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderTop: '0.5px solid rgba(0,0,0,0.08)', padding: '48px 0' }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <div style={{ flexShrink: 0 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Tech Stack
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', marginTop: 10, fontWeight: 400, lineHeight: 1.5 }}>
              Tecnologías que uso en mis proyectos
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <MarqueeRow skills={SKILLS_ROW1} direction="left"  bg={bg} />
            <MarqueeRow skills={SKILLS_ROW2} direction="right" bg={bg} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
