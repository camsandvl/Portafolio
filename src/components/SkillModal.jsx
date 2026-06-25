import { useEffect } from 'react'
import Badge from './Badge'

const CARD_DURATION = 250   // ms — card scale+fade
const BADGE_BASE    = 180   // ms — first badge starts after card mostly lands
const BADGE_STAGGER = 40    // ms — each subsequent badge

export default function SkillModal({ label, description, color, badges = [], onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        backdropFilter: 'blur(1px)',
      }}
    >
      <style>{`
        @keyframes skill-card-in {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1);    }
        }
        @keyframes skill-badge-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: `linear-gradient(to bottom, ${color} 40%, var(--cream))`,
          borderRadius: 28,
          padding: '40px 48px',
          position: 'relative',
          width: 380,
          minHeight: 180,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          animation: `skill-card-in ${CARD_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) both`,
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 24,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 13,
            lineHeight: 1,
            color: 'var(--cream)',
            padding: 4,
          }}
          aria-label="Cerrar"
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
            <line x1="1" y1="1" x2="13" y2="13" stroke="var(--cream)" strokeWidth="3" strokeLinecap="round"/>
            <line x1="13" y1="1" x2="1" y2="13" stroke="var(--cream)" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>

        <span style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.4rem, 2vw, 2rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'var(--cream)',
          display: 'block',
          marginBottom: 12,
        }}>
          {label}
        </span>

        <p style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '0.88rem',
          fontWeight: 400,
          color: 'rgba(250,248,239,0.72)',
          lineHeight: 1.6,
          margin: '0 0 16px',
        }}>
          {description}
        </p>

        {badges.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {badges.map((b, i) => (
              <div
                key={b}
                style={{
                  animation: `skill-badge-in 220ms cubic-bezier(0.22, 1, 0.36, 1) both`,
                  animationDelay: `${BADGE_BASE + i * BADGE_STAGGER}ms`,
                }}
              >
                <Badge label={b} color={color} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
