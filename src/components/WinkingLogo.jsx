import { useState, useEffect } from 'react'

const WINK_MAP = {
  './assets/logo-periwinkle.png': './assets/logo-wink-periwinkle.png',
  './assets/logo-teal.png':       './assets/logo-wink-teal.png',
  './assets/logo-coral.png':      './assets/logo-wink-coral.png',
}

export default function WinkingLogo({ src, alt = '', style }) {
  const [winking, setWinking] = useState(false)
  const winkSrc = WINK_MAP[src] ?? src

  useEffect(() => {
    const preload = new Image()
    preload.src = winkSrc
  }, [winkSrc])

  useEffect(() => {
    const id = setInterval(() => {
      setWinking(true)
      setTimeout(() => setWinking(false), 300)
    }, 1900)
    return () => clearInterval(id)
  }, [])

  return <img src={winking ? winkSrc : src} alt={alt} aria-hidden="true" style={style} />
}
