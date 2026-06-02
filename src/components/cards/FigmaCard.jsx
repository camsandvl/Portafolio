import { motion } from 'framer-motion'
import { MousePointer2, Square, Circle, Pen, Hand } from 'lucide-react'
import FlippableCard from '../FlippableCard'

const backText = 'Combino diseño UI/UX y prototipado para construir experiencias digitales claras y funcionales. Disfruto trabajar en Figma creando interfaces, sistemas visuales y prototipos interactivos validados mediante pruebas de usuario.'

const tools = [
  { icon: <MousePointer2 size={18} />, active: true },
  { icon: <Square size={18} />,        active: false },
  { icon: <Circle size={18} />,        active: false },
  { icon: <Pen size={18} />,           active: false },
  { icon: <Hand size={18} />,          active: false },
]

export default function FigmaCard({ shouldReduce }) {
  return (
    <FlippableCard
      backText={backText}
      backRadius={14}
      shouldReduce={shouldReduce}
      delay={0.35}
      style={{ flex: 1.05, height: '100%' }}
    >
      {({ hovered }) => (
        <div style={{
          background: '#1E1E1E', borderRadius: 14, border: '0.5px solid #3A3A3A',
          display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden',
        }}>
          <div style={{
            background: '#2C2C2C', padding: '9px 12px',
            display: 'flex', alignItems: 'center', gap: 10,
            borderBottom: '0.5px solid #3A3A3A', flexShrink: 0,
          }}>
            <motion.div
              animate={shouldReduce ? {} : hovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <svg width="12" height="18" viewBox="0 0 10 15" fill="none">
                <rect x="0" y="0" width="5" height="5" rx="2.5" fill="#F24E1E"/>
                <rect x="5" y="0" width="5" height="5" rx="2.5" fill="#FF7262"/>
                <rect x="0" y="5" width="5" height="5" rx="2.5" fill="#A259FF"/>
                <circle cx="7.5" cy="7.5" r="2.5" fill="#1ABCFE"/>
                <rect x="0" y="10" width="5" height="5" rx="2.5" fill="#0ACF83"/>
              </svg>
            </motion.div>
            <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 4, padding: '3px 10px', background: 'rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)' }}>Design</span>
            </div>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)', padding: '3px 10px' }}>Prototype</span>
          </div>
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            <div style={{
              width: 54, background: '#252525', borderRight: '0.5px solid #3A3A3A',
              padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0,
            }}>
              {tools.map((tool, i) => (
                <div key={i} style={{
                  width: '100%', height: 36, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', borderRadius: 5,
                  background: tool.active ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: tool.active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)',
                }}>
                  {tool.icon}
                </div>
              ))}
            </div>
            <div style={{ flex: 1, background: '#1A1A1A', padding: 16, position: 'relative' }}>
              <motion.div
                animate={shouldReduce ? {} : hovered ? { x: -4, y: -4 } : { x: 0, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: 4,
                  position: 'absolute', top: 12, left: 16, width: 110, height: 75, padding: 8,
                }}
              >
                <div style={{ position: 'absolute', top: -14, left: 0, fontSize: 9, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>Frame 1</div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, marginBottom: 5 }} />
                <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
              </motion.div>
              <motion.div
                animate={shouldReduce ? {} : hovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                style={{
                  border: '0.5px solid rgba(162,89,255,0.45)', borderRadius: 4,
                  position: 'absolute', top: 12, right: 16, width: 80, height: 55,
                }}
              >
                <div style={{ position: 'absolute', top: -14, left: 0, fontSize: 9, color: 'rgba(162,89,255,0.5)', fontFamily: 'monospace' }}>Component</div>
              </motion.div>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', padding: '0 20px', textAlign: 'left' }}>
                <div style={{ fontSize: 26, fontWeight: 500, color: 'rgba(255,255,255,0.9)', lineHeight: 1.2, fontFamily: 'var(--font-body)' }}>
                  Diseño UI &<br />prototipado
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 8, fontFamily: 'var(--font-body)' }}>Figma</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </FlippableCard>
  )
}
