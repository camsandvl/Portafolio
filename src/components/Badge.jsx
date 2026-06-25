export default function Badge({ label, color }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--cream)',
      borderRadius: 999,
      padding: '5px 14px',
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: '0.78rem',
      letterSpacing: '0.01em',
      color,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}
