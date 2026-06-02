export function useHoverColor(defaultColor, hoverColor) {
  return {
    onMouseEnter: (e) => { e.currentTarget.style.color = hoverColor },
    onMouseLeave: (e) => { e.currentTarget.style.color = defaultColor },
  }
}
