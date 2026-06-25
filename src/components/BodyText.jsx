export default function BodyText({ children, color = 'var(--text-muted)', style = {} }) {
  return (
    <p style={{
      fontFamily: "'Figtree', sans-serif",
      fontSize: '1rem',
      fontWeight: 400,
      color,
      lineHeight: 1.65,
      margin: 0,
      ...style,
    }}>
      {children}
    </p>
  )
}
