const DOTS = [
  { color: 'var(--coral)',      left: '9%',  top: 36,  size: 22 },
  { color: 'var(--periwinkle)', left: '27%', top: 88,  size: 20 },
  { color: 'var(--teal)',       left: '54%', top: 62,  size: 21 },
  { color: 'var(--dark)',       left: '78%', top: 28,  size: 23 },
  { color: 'var(--coral)',      left: '91%', top: 65,  size: 22 },
]

export default function DotsBand() {
  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      height: 110,
      marginTop: -60,
      background: 'var(--bg)',
      overflow: 'visible',
    }}>
      {DOTS.map(({ color, left, top, size }) => (
        <span
          key={left}
          style={{
            position: 'absolute',
            left,
            top,
            fontSize: size,
            color,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          ✦
        </span>
      ))}
    </div>
  )
}
