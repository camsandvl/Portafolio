export default function Badge({ icon, label, color, bg, border, fontSize = 11, padding = '4px 10px', gap = 5, letterSpacing = '0.07em', fontWeight = 600, style }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap,
      background: bg,
      ...(border ? { border: `0.5px solid ${border}` } : {}),
      borderRadius: 99,
      padding,
      ...style,
    }}>
      {icon}
      <span style={{ fontSize, color, fontWeight, letterSpacing, fontFamily: 'var(--font-body)' }}>
        {label}
      </span>
    </div>
  )
}
