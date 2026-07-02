import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NextCaseCard({ title, description, color, image, to }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        background: 'var(--cream)',
        borderRadius: 16,
        padding: '20px 16px 20px 24px',
        textDecoration: 'none',
        width: 300,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.14)' : '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 700,
          fontSize: '1.5rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color,
          margin: '0 0 6px',
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '0.78rem',
          fontWeight: 400,
          color: 'var(--text-muted)',
          margin: 0,
          lineHeight: 1.45,
        }}>
          {description}
        </p>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: 124,
            height: 86,
            objectFit: 'cover',
            borderRadius: 10,
            flexShrink: 0,
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      )}
    </Link>
  )
}
