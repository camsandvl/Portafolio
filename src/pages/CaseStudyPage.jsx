import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CASES, CASE_SECTIONS } from '../data/cases'
import SectionHeader from '../components/SectionHeader'
import BodyText from '../components/BodyText'
import UILabel from '../components/UILabel'

const SUBTITLE_STYLE = {
  fontFamily: "'Figtree', sans-serif",
  fontWeight: 700,
  fontStyle: 'italic',
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
    <table key={j} style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0 10px', fontFamily: "'Figtree', sans-serif" }}>
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
                width: '50%',
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
              }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
  if (block.type === 'image') return (
    <img key={j} src={block.src} alt="" style={{ display: 'block', width: block.fullWidth ? '70%' : 420, height: 'auto', margin: (block.centered || block.fullWidth) ? '20px auto 0' : '20px 0 0' }} />
  )
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
  if (block.type === 'bullets') return (
    <ul key={j} style={{ margin: '6px 0 10px', paddingLeft: 20 }}>
      {block.items.map((item, k) => (
        <li key={k} style={{ ...INLINE_BODY_STYLE, marginBottom: 8 }}>{item}</li>
      ))}
    </ul>
  )
  return <BodyText key={j} style={{ marginBottom: 10, lineHeight: 1.45 }}>{block.text}</BodyText>
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

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

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
        <img src="./assets/logo-camaleon-grande.png" alt="Logo" style={{ height: 36, width: 'auto' }} />
      </nav>

      {/* Hero */}
      <header style={{
        background: `linear-gradient(to bottom, ${study.color} 0%, var(--cream) 100%)`,
        padding: '80px 48px 100px',
      }}>
        <SectionHeader align="left" margin="0 0 12px" color="var(--cream)">
          {study.title}
        </SectionHeader>
        <BodyText color="rgba(250,248,239,0.85)" style={{ maxWidth: 480, fontSize: '1.1rem', marginBottom: study.meta ? 24 : 0 }}>
          {study.description}
        </BodyText>

        {study.meta && (
          <>
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
          </>
        )}
      </header>

      {/* Sections */}
      <div style={{ padding: '0 48px 160px' }}>
        {CASE_SECTIONS.map((section, i) => {
          const rawImage = study.sectionImages[section.id]
          const sectionImage = rawImage ? (typeof rawImage === 'string' ? { src: rawImage } : rawImage) : null
          return (
            <div
              key={section.id}
              id={section.id}
              style={{
                padding: '80px 0',
                borderTop: '1px solid var(--border)',
                overflow: 'hidden',
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
            </div>
          )
        })}
      </div>

    </div>
  )
}
