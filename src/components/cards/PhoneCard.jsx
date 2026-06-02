import { motion } from 'framer-motion'
import FlippableCard from '../FlippableCard'
import Badge from '../Badge'

const backText = 'Para Havit, una aplicación enfocada en fitness y creación de hábitos, combiné diseño de producto y desarrollo frontend. Mi enfoque principal fue crear interfaces reutilizables y experiencias fluidas en React Native para iOS y Android.'

const PulsingDot = ({ shouldReduce }) => (
  <motion.div
    style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D4A0', flexShrink: 0 }}
    animate={shouldReduce ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  />
)

export default function PhoneCard({ shouldReduce }) {
  return (
    <FlippableCard
      backText={backText}
      backRadius={40}
      shouldReduce={shouldReduce}
      delay={0.1}
      style={{ flex: '0 0 200px', height: '100%' }}
    >
      <div style={{
        background: '#1C1C1E', borderRadius: 40, border: '2px solid #3A3A3C',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        height: '100%', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 80, height: 22, background: '#1C1C1E',
          borderRadius: '0 0 16px 16px', zIndex: 10,
        }} />
        <div style={{
          background: '#0F172A', flex: 1, padding: '32px 16px 20px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <Badge
              icon={<PulsingDot shouldReduce={shouldReduce} />}
              label="REACT NATIVE"
              color="#00D4A0"
              bg="rgba(0,212,160,0.12)"
              border="rgba(0,212,160,0.25)"
              fontSize={12}
              style={{ marginBottom: 14 }}
            />
            <div style={{ fontSize: 26, fontWeight: 500, color: '#fff', lineHeight: 1.2, fontFamily: 'var(--font-body)' }}>
              Desarrollo de<br />apps móviles
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 6, fontFamily: 'var(--font-body)' }}>
              iOS & Android
            </div>
          </div>
          <div>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 8,
                padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10,
              }}>
                <div style={{ width: 16, height: 16, background: 'rgba(255,255,255,0.08)', borderRadius: 3, flexShrink: 0 }} />
                <div style={{ height: 6, flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D4A0', flexShrink: 0 }} />
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
              <div style={{ width: 70, height: 5, borderRadius: 2, background: 'rgba(255,255,255,0.2)' }} />
            </div>
          </div>
        </div>
      </div>
    </FlippableCard>
  )
}
