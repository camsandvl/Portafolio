import UILabel from './UILabel'

export default function NavLink({ href, children, onClick, ...props }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color: 'var(--dark)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--coral)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--dark)'}
      {...props}
    >
      <UILabel>{children}</UILabel>
    </a>
  )
}
