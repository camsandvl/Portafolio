import { useState, useEffect } from 'react'

export function Typewriter({ text, speed = 100, loop = false, className = '', style = {} }) {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const phrase = text[phraseIdx]

  useEffect(() => {
    if (!deleting && charIdx < phrase.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), speed)
      return () => clearTimeout(t)
    }
    if (!deleting && charIdx === phrase.length) {
      if (!loop) return
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx === 0) {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % text.length)
    }
  }, [charIdx, deleting, phrase, speed, loop])

  return (
    <span className={className} style={style}>
      {phrase.slice(0, charIdx)}
      <span className="tw-cursor" aria-hidden="true" />
    </span>
  )
}
