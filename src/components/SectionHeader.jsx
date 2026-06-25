const SIZES = {
  lg: 'clamp(2.6rem, 5.8vw, 5.6rem)',
  sm: 'clamp(2rem, 3.4vw, 3.4rem)',
}

export default function SectionHeader({ label, children, align = 'center', margin = '0', color = 'var(--dark)', size = 'lg', style = {} }) {
  return (
    <h2 style={{
      fontFamily: "'Open Sauce One', sans-serif",
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: SIZES[size],
      letterSpacing: '-0.08em',
      color,
      textAlign: align,
      margin,
      lineHeight: 1,
      ...style,
    }}>
      {children ?? label}
    </h2>
  )
}
