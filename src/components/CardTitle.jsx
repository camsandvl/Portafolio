export default function CardTitle({ children, color = 'var(--text)', margin = '0' }) {
  return (
    <h3 style={{
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 700,
      fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
      letterSpacing: '-0.02em',
      color,
      margin,
      lineHeight: 1.1,
    }}>
      {children}
    </h3>
  )
}
