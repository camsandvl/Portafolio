import UILabel from './UILabel'

export default function ContactPill({ label, href, icon: Icon, target, rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        background: 'var(--cream)',
        borderRadius: 999,
        padding: '14px 48px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        minHeight: 52,
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--coral)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
    >
      {Icon && <Icon size={18} color="var(--dark)" strokeWidth={2} />}
      <UILabel color="var(--dark)">{label}</UILabel>
    </a>
  )
}
