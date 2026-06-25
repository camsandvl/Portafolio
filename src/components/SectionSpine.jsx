export default function SectionSpine({ label }) {
  return (
    <div style={{
      marginTop: '50vh',
      marginBottom: '-50vh',
      position: 'sticky',
      top: '50vh',
      height: 0,
      zIndex: 2,
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute',
        left: 58,
        top: 0,
        transform: 'translateY(-50%) rotate(180deg)',
        writingMode: 'vertical-rl',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: '0.34em',
          color: '#211e1a',
          textTransform: 'uppercase',
        }}>{label}</span>
        <div style={{ width: 60, height: '1.5px', background: '#211e1a' }} />
      </div>
    </div>
  )
}
