import { useLayoutEffect, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CASES, CASE_SECTIONS } from '../data/cases'
import SectionHeader from '../components/SectionHeader'
import BodyText from '../components/BodyText'
import UILabel from '../components/UILabel'
import NextCaseCard from '../components/NextCaseCard'

const SUBTITLE_STYLE = {
  fontFamily: "'Figtree', sans-serif",
  fontWeight: 700,
  fontSize: '1rem',
  color: 'var(--dark)',
  lineHeight: 1.4,
  margin: '20px 0 6px',
}

const INLINE_BODY_STYLE = {
  fontFamily: "'Figtree', sans-serif",
  fontSize: '1rem',
  fontWeight: 400,
  color: 'var(--text-muted)',
  lineHeight: 1.45,
}

const IMAGE_LABEL_STYLE = {
  fontFamily: "'Figtree', sans-serif",
  fontSize: '0.72rem',
  color: 'var(--stone)',
  margin: '0 0 5px',
  letterSpacing: '0.02em',
}

function parseInline(text) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}

function groupBlocks(blocks) {
  const groups = []
  let i = 0
  while (i < blocks.length) {
    if (blocks[i].type === 'bullet') {
      const bullets = []
      while (i < blocks.length && blocks[i].type === 'bullet') {
        bullets.push(blocks[i].text)
        i++
      }
      groups.push({ type: 'bullets', items: bullets })
    } else {
      groups.push(blocks[i])
      i++
    }
  }
  return groups
}

function renderBlock(block, j) {
  if (block.type === 'subtitle')   return <p key={j} style={SUBTITLE_STYLE}>{block.text}</p>
  if (block.type === 'highlight')  return <p key={j} style={{ ...SUBTITLE_STYLE, fontSize: '1rem', margin: '20px 0 6px' }}>{block.text}</p>
  if (block.type === 'table') return (
    <table key={j} style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0 10px', fontFamily: "'Figtree', sans-serif", tableLayout: 'fixed' }}>
      {block.headers && (
        <thead>
          <tr>
            {block.headers.map((h, k) => (
              <th key={k} style={{
                textAlign: 'left',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--dark)',
                padding: '0 16px 10px 0',
                borderBottom: '1px solid var(--border)',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {block.rows.map((row, r) => (
          <tr key={r}>
            {row.map((cell, k) => (
              <td key={k} style={{
                ...INLINE_BODY_STYLE,
                fontWeight: (!block.headers && k === 0) ? 700 : 400,
                color: (!block.headers && k === 0) ? 'var(--dark)' : 'var(--text-muted)',
                width: (!block.headers && k === 0) ? '18%' : undefined,
                padding: '12px 16px 12px 0',
                borderBottom: '1px solid var(--border)',
                verticalAlign: 'top',
                whiteSpace: (!block.headers && k === 0) ? 'nowrap' : undefined,
              }}>{parseInline(cell)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
  if (block.type === 'image') {
    const w = block.width ?? (block.fullWidth ? '70%' : 420)
    const centered = block.centered || block.fullWidth
    return (
      <div key={j} style={{ display: 'block', width: w, margin: centered ? '40px auto 0' : '40px 0 0' }}>
        {block.label && <p style={IMAGE_LABEL_STYLE}>{block.label}</p>}
        <img src={block.src} alt="" style={{ display: 'block', width: '100%', height: block.height ?? 'auto', objectFit: block.height ? 'contain' : 'initial', objectPosition: 'top', border: block.border ? '1px solid #000' : 'none', borderRadius: block.borderRadius ?? 0 }} />
      </div>
    )
  }
  if (block.type === 'row') {
    const img = typeof block.image === 'string' ? { src: block.image } : block.image
    return (
      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 40, margin: '40px auto 0', ...(block.centered ? { maxWidth: 720, justifyContent: 'center' } : {}) }}>
        <div style={{ flex: 1 }}>
          {groupBlocks(block.blocks).map((b, k) => renderBlock(b, k))}
        </div>
        <div style={{ flexShrink: 0 }}>
          {img.label && (
            <p style={IMAGE_LABEL_STYLE}>{img.label}</p>
          )}
          <img src={img.src} alt="" style={{ width: 420, height: 'auto', display: 'block' }} />
        </div>
      </div>
    )
  }
  if (block.type === 'columns') return (
    <div key={j} style={{ display: 'grid', gridTemplateColumns: `repeat(${block.columns ?? block.items.length}, 1fr)`, gap: 24, margin: '40px 0 0', alignItems: 'start' }}>
      {block.items.map((col, k) => (
        <div key={k}>
          <div style={{ width: '90%' }}>
            {col.label && <p style={{ ...IMAGE_LABEL_STYLE, ...(block.labelMinHeight ? { minHeight: block.labelMinHeight } : {}) }}>{col.label}</p>}
            <img src={col.image} alt="" style={{ width: '100%', height: block.itemHeight ?? 'auto', objectFit: block.itemHeight ? 'contain' : 'initial', objectPosition: 'top', display: 'block', marginBottom: col.subtitle || col.text ? 16 : 0, borderRadius: block.noRound ? 0 : (block.radius ?? 12), border: block.border ? '1px solid #000' : 'none', ...(block.clip ? { clipPath: `inset(0 ${block.clip}px round 12px)` } : {}) }} />
          </div>
          {col.subtitle && <p style={{ ...SUBTITLE_STYLE, margin: '0 0 6px' }}>{col.subtitle}</p>}
          {col.text && <p style={{ ...INLINE_BODY_STYLE, fontSize: '0.875rem', marginBottom: 6 }}>{col.text}</p>}
          {col.tag && <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: '0.68rem', color: 'var(--stone)', fontStyle: 'italic', letterSpacing: '0.02em', margin: 0 }}>{col.tag}</p>}
        </div>
      ))}
    </div>
  )
  if (block.type === 'tag') return (
    <p key={j} style={{ fontFamily: "'Figtree', sans-serif", fontSize: '0.72rem', color: 'var(--stone)', fontStyle: 'italic', letterSpacing: '0.02em', margin: '4px 0 16px' }}>{block.text}</p>
  )
  if (block.type === 'bullets') return (
    <ul key={j} style={{ margin: '6px 0 10px', paddingLeft: 20 }}>
      {block.items.map((item, k) => (
        <li key={k} style={{ ...INLINE_BODY_STYLE, marginBottom: 8 }}>{item}</li>
      ))}
    </ul>
  )
  return <BodyText key={j} style={{ marginBottom: 10, lineHeight: 1.45 }}>{block.text}</BodyText>
}

function SidebarNav({ sections, activeId, color }) {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
      {sections.map((section, i) => {
        const isActive = activeId === section.id
        const isLast = i === sections.length - 1
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={e => { e.preventDefault(); document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
            style={{ display: 'flex', gap: 12, textDecoration: 'none', alignItems: 'flex-start' }}
          >
            {/* Line + dot column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 10 }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%', flexShrink: 0, marginTop: 3,
                background: isActive ? color : 'transparent',
                border: `1.5px solid ${isActive ? color : 'var(--stone)'}`,
                transition: 'all 0.3s',
              }} />
              {!isLast && <div style={{ width: 1, flex: 1, minHeight: 28, background: 'var(--border)', marginTop: 4 }} />}
            </div>

            {/* Text column */}
            <div style={{
              paddingBottom: isLast ? 0 : 24,
              opacity: isActive ? 1 : 0.45,
              transition: 'opacity 0.3s',
            }}>
              <p style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--stone)',
                margin: '0 0 2px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <p style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: '0.75rem',
                fontWeight: isActive ? 700 : 400,
                fontStyle: 'italic',
                color: 'var(--dark)',
                margin: 0,
                lineHeight: 1.3,
              }}>
                {section.title}
              </p>
            </div>
          </a>
        )
      })}
    </nav>
  )
}

function SectionContent({ content }) {
  if (Array.isArray(content)) {
    const [first, ...rest] = content
    const grouped = groupBlocks(rest)
    return (
      <>
        {first.type === 'paragraph' ? (
          <span style={{ ...INLINE_BODY_STYLE, marginLeft: '1em' }}>{first.text}</span>
        ) : (
          renderBlock(first, 'first')
        )}
        {grouped.map((block, j) => renderBlock(block, j))}
      </>
    )
  }
  return <span style={{ ...INLINE_BODY_STYLE, marginLeft: '1em' }}>{content}</span>
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = CASES.find(c => c.slug === slug)
  const currentIndex = CASES.findIndex(c => c.slug === slug)
  const nextCase = CASES[(currentIndex + 1) % CASES.length]
  const [backHovered, setBackHovered] = useState(false)
  const sections = CASE_SECTIONS.map(s => ({ ...s, title: study?.sectionTitles?.[s.id] ?? s.title }))
  const [activeId, setActiveId] = useState(sections[0].id)
  useLayoutEffect(() => { window.scrollTo(0, 0) }, [slug])

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.35
      let current = sections[0].id
      sections.forEach(s => {
        const el = document.getElementById(s.id)
        if (el && el.offsetTop <= trigger) current = s.id
      })
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])

  if (!study) {
    return (
      <div style={{ padding: 48, background: 'var(--bg)', minHeight: '100vh' }}>
        <Link to="/" style={{ fontFamily: "'Figtree', sans-serif", color: 'var(--dark)' }}>
          ← Volver al portafolio
        </Link>
        <p style={{ marginTop: 24 }}>Caso no encontrado.</p>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Back nav */}
      <nav style={{ padding: '28px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{
          fontFamily: "'Figtree', sans-serif",
          fontWeight: 700,
          fontSize: '0.9rem',
          color: 'var(--dark)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver al portafolio
        </Link>
        <img src={study.logo} alt="Logo" style={{ height: 48, width: 'auto' }} />
      </nav>

      {/* Hero */}
      <header style={{
        background: `linear-gradient(to bottom, ${study.color} 0%, var(--cream) 100%)`,
        padding: '80px 48px 100px',
      }}>
        <SectionHeader align="left" margin="0 0 8px" color="var(--cream)">
          {study.title}
        </SectionHeader>
        {study.label && (
          <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 28px' }}>
            {study.label}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 56 }}>
          <BodyText color="var(--dark)" style={{ maxWidth: 400, fontSize: '1.1rem', margin: 0, flexShrink: 0 }}>
            {study.description}
          </BodyText>

          {study.meta && (
            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              {[
                { label: 'Equipo',       value: study.meta.team },
                { label: 'Duración',     value: study.meta.timeline },
                { label: 'Herramientas', value: study.meta.tools },
                { label: 'Plataforma',   value: study.meta.platform },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--dark)', margin: '0 0 4px' }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: '0.95rem', color: 'var(--dark)', margin: 0 }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Sections */}
      <div style={{ padding: '0 48px 80px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        {/* Sticky sidebar */}
        <aside style={{ width: 148, flexShrink: 0, position: 'sticky', top: 0, alignSelf: 'flex-start', height: '100vh', display: 'flex', alignItems: 'center' }}>
          <SidebarNav sections={sections} activeId={activeId} color={study.color} />
        </aside>

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
        {sections.map((section, i) => {
          const rawImage = study.sectionImages[section.id]
          const sectionImage = rawImage ? (typeof rawImage === 'string' ? { src: rawImage } : rawImage) : null
          return (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 52 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '80px 0',
                borderTop: '1px solid var(--border)',
              }}
            >
              {/* Float image right so text wraps around it */}
              {sectionImage && (
                <div style={{ float: 'right', width: sectionImage.width ?? '34%', marginLeft: 48, marginBottom: 24 }}>
                  {sectionImage.label && (
                    <p style={IMAGE_LABEL_STYLE}>{sectionImage.label}</p>
                  )}
                  <img
                    src={sectionImage.src}
                    alt=""
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              )}

              {/* Number + heading row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <UILabel color="var(--stone)">
                  {String(i + 1).padStart(2, '0')}
                </UILabel>
                <SectionHeader align="left" margin="0" size="sm">
                  {section.title}
                </SectionHeader>
              </div>

              {/* Content wraps around the floated image */}
              <SectionContent content={study.sections[section.id] ?? section.placeholder} />
            </motion.div>
          )
        })}
        </div>
      </div>

      {/* Bottom gradient + next case teaser */}
      <div style={{ background: `linear-gradient(to bottom, var(--bg), ${study.color})`, height: 300, position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 40, right: 56, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
          <p style={{ ...IMAGE_LABEL_STYLE, color: 'var(--dark)', margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>
            Siguiente caso de estudio
          </p>
          <NextCaseCard
            title={nextCase.title}
            description={nextCase.description}
            color={study.color}
            image={nextCase.image}
            to={`/caso/${nextCase.slug}`}
          />
          <Link
            to="/"
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 700,
              fontSize: '0.82rem',
              color: 'var(--cream)',
              opacity: backHovered ? 1 : 0.6,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            ← Volver al portafolio
          </Link>
        </div>
      </div>

    </div>
  )
}
