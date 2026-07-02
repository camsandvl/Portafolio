import { useState } from 'react'
import { Link } from 'react-router-dom'

const CARD_W = 'calc((100vw - 48px) / 3.2)'

export default function CaseCard({ title, color = 'var(--dark)', description, image, href = '#', to, width }) {
  const [hovered, setHovered] = useState(false)

  const style = {
    flexShrink: 0,
    width: width ?? CARD_W,
    borderRadius: 20,
    background: `linear-gradient(to bottom, ${color}, var(--cream))`,
    padding: '25px 25px 0 25px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, opacity 0.18s ease',
    transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
    opacity: hovered ? 0.85 : 1,
  }

  const content = (
    <>
      <p style={{ margin: 0, padding: '0 8px 4px', lineHeight: 1.65 }}>
        <span style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'var(--cream)',
          marginRight: '0.3em',
        }}>
          {title}
        </span>
        <span style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '1rem',
          fontWeight: 400,
          color: 'var(--cream)',
          lineHeight: 1.65,
        }}>
          {description}
        </span>
      </p>

      <div className="device-float" style={{
        borderRadius: 12,
        overflow: 'hidden',
        background: 'transparent',
        aspectRatio: '16 / 9',
        flexShrink: 0,
      }}>
        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.5s ease',
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
            }}
          />
        )}
      </div>
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={style}
      >
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {content}
    </a>
  )
}
