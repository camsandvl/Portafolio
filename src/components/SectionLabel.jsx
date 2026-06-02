export default function SectionLabel({ num, name }) {
  return (
    <div className="section-label">
      <span className="section-num">{num}</span>
      <span className="section-rule" />
      <span className="section-name">{name}</span>
    </div>
  )
}
