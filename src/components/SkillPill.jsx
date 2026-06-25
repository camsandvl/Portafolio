import UILabel from './UILabel'

export default function SkillPill({ label, color = '#6e6e6e' }) {
  return (
    <div
      style={{
        background: color,
        borderRadius: 999,
        padding: '14px 36px',
        whiteSpace: 'nowrap',
        minHeight: 44,
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.18s ease, opacity 0.18s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.opacity = '0.85' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.opacity = '1' }}
    >
      <UILabel color="#fff">{label}</UILabel>
    </div>
  )
}
