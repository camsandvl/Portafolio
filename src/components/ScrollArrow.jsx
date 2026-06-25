export default function ScrollArrow() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      background: 'var(--bg)',
      position: 'relative',
      zIndex: 2,
    }}>
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
        <style>{`
          @keyframes sketch-arrow {
            from { stroke-dashoffset: 57; }
            to   { stroke-dashoffset: 0;  }
          }
          .arrow-shaft {
            stroke-dasharray: 57;
            stroke-dashoffset: 57;
            animation: sketch-arrow 2.4s ease-out infinite alternate;
          }
        `}</style>

        {/* Arrowhead — always visible */}
        <polyline
          points="47,61 60,75 73,61"
          stroke="#ED6A5A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Shaft — draws & un-draws */}
        <path
          className="arrow-shaft"
          d="M 60 5 L 60 62"
          stroke="#ED6A5A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
