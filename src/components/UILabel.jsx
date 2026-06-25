export default function UILabel({ children, color, style = {} }) {
  return (
    <span style={{
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 18,
      color,
      ...style,
    }}>
      {children}
    </span>
  )
}
