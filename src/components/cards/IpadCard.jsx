import { motion } from 'framer-motion'
import { Layers, Pen, Undo2, Redo2, Eraser, Droplet, Move, MoreHorizontal } from 'lucide-react'
import FlippableCard from '../FlippableCard'
import Badge from '../Badge'

const backText = 'Creo ilustraciones digitales y recursos visuales en Procreate. Trabajo en íconos personalizados, ilustraciones para interfaces y assets que complementan el diseño visual de los proyectos. El proceso manual del dibujo digital me permite explorar una dimensión más expresiva dentro del trabajo de diseño.'

const swatchColors = ['#00D4A0', '#FFD4E8', '#A8D8FF', '#FFE566', '#C4A8FF']

const iconBtn = (t) => ({
  width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: 5, background: t.active ? 'rgba(255,255,255,0.08)' : 'transparent',
  color: 'rgba(255,255,255,0.7)',
})

export default function IpadCard({ shouldReduce }) {
  return (
    <FlippableCard
      backText={backText}
      backRadius={22}
      shouldReduce={shouldReduce}
      delay={0.45}
      style={{ flex: 0.95, height: '100%', position: 'relative', overflow: 'visible' }}
      renderOverlay={({ hovered }) => (
        <motion.div
          animate={shouldReduce ? {} : hovered ? { y: 6, rotate: -3 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', right: -22, top: 16, bottom: 16,
            width: 18, zIndex: 20,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
        >
          <div style={{ width: '100%', height: 14, background: '#D0D0D0', borderRadius: '4px 4px 0 0', border: '0.5px solid #C0C0C0', flexShrink: 0 }} />
          <div style={{
            flex: 1, width: '100%',
            background: 'linear-gradient(to right, #E8E8E8 0%, #FFFFFF 40%, #F0F0F0 70%, #E0E0E0 100%)',
            border: '0.5px solid #C8C8C8', borderTop: 'none',
            borderRadius: '0 0 2px 2px', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18, background: '#D4A827', borderBottom: '0.5px solid #B8901F' }} />
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: 'rgba(0,0,0,0.04)' }} />
          </div>
          <div style={{ width: 0, height: 0, flexShrink: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '10px solid #C8C8C8' }} />
        </motion.div>
      )}
    >
      {({ hovered }) => (
        <div style={{
          background: '#D4D4D2', borderRadius: 22, padding: 16,
          position: 'relative', width: '100%', height: '100%',
          boxSizing: 'border-box', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.12)',
        }}>
          <div style={{ position: 'absolute', top: 7, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, background: '#B8B8B6', borderRadius: '50%', border: '0.5px solid rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', right: -4, top: 44, width: 4, height: 34, background: '#C0C0BE', borderRadius: '0 3px 3px 0' }} />
          <div style={{ position: 'absolute', right: -4, top: 88, width: 4, height: 26, background: '#C0C0BE', borderRadius: '0 3px 3px 0' }} />
          <div style={{ width: '100%', height: '100%', background: '#F8F4EF', borderRadius: 6, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: '#1F1F1F', height: 44, flexShrink: 0, padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {[{ icon: <Undo2 size={16} />, active: true }, { icon: <Redo2 size={16} />, active: false }].map((t, i) => (
                  <div key={i} style={iconBtn(t)}>{t.icon}</div>
                ))}
                <div style={{ width: '0.5px', height: 14, background: 'rgba(255,255,255,0.1)', margin: '0 2px' }} />
                {[{ icon: <Pen size={16} />, active: true }, { icon: <Eraser size={16} />, active: false }, { icon: <Droplet size={16} />, active: false }].map((t, i) => (
                  <div key={i} style={iconBtn(t)}>{t.icon}</div>
                ))}
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {[{ icon: <Layers size={16} />, active: false }, { icon: <Move size={16} />, active: false }].map((t, i) => (
                  <div key={i} style={iconBtn(t)}>{t.icon}</div>
                ))}
                <div style={{ width: '0.5px', height: 14, background: 'rgba(255,255,255,0.1)', margin: '0 2px' }} />
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#00D4A0', border: '1.5px solid rgba(255,255,255,0.15)' }} />
              </div>
            </div>
            <div style={{ flex: 1, padding: '18px 20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none' }} viewBox="0 0 300 180" preserveAspectRatio="none">
                <motion.path
                  d="M 30,140 C 80,40 200,160 270,60"
                  stroke="#00D4A0" strokeWidth="16" strokeLinecap="round" fill="none"
                  strokeDasharray="280"
                  animate={shouldReduce ? {} : hovered ? { strokeDashoffset: [280, 0] } : { strokeDashoffset: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  d="M 0,100 C 80,60 160,130 300,80"
                  stroke="#FFD4E8" strokeWidth="10" strokeLinecap="round" fill="none"
                  strokeDasharray="320"
                  animate={shouldReduce ? {} : hovered ? { strokeDashoffset: [320, 0] } : { strokeDashoffset: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                />
                <ellipse cx="240" cy="150" rx="50" ry="35" fill="#A8D8FF" opacity="0.18"/>
                <ellipse cx="45" cy="30" rx="30" ry="25" fill="#FFE566" opacity="0.2"/>
              </svg>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Badge
                  icon={<Pen size={12} color="#555" />}
                  label="PROCREATE"
                  color="#555"
                  bg="rgba(0,0,0,0.06)"
                  fontSize={11}
                  padding="5px 12px"
                  gap={4}
                  letterSpacing="0.05em"
                  fontWeight={500}
                  style={{ marginBottom: 10 }}
                />
                <div style={{ fontSize: 22, fontWeight: 500, color: '#1A1A1A', lineHeight: 1.25, fontFamily: 'var(--font-body)' }}>
                  Ilustración digital<br />y creación de assets
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                {swatchColors.map((color) => (
                  <div key={color} style={{ width: 20, height: 20, borderRadius: '50%', background: color, border: '1.5px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
                ))}
                <div style={{ width: 1, height: 14, background: 'rgba(0,0,0,0.1)', margin: '0 4px' }} />
                <MoreHorizontal size={17} color="#999" />
              </div>
            </div>
          </div>
        </div>
      )}
    </FlippableCard>
  )
}
