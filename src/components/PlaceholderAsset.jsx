/**
 * PlaceholderAsset
 * Renders a gradient placeholder for illustration/animation spots.
 * Each color array is derived from the described palette of the actual artwork.
 *
 * USAGE:
 *   Replace the entire <PlaceholderAsset ... /> with:
 *     <img src="./assets/[filename]" alt="[description]" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
 *   OR for Lottie:
 *     import Lottie from 'lottie-react'
 *     import animData from '../assets/lottie/[file].json'
 *     <Lottie animationData={animData} loop style={{ width: '100%', height: '100%' }} />
 */
export default function PlaceholderAsset({ name, description, colors = ['#D8D6D0', '#C4C2BC'], style, className = '' }) {
  const stops = colors.map((c, i) => `${c} ${Math.round(i / Math.max(colors.length - 1, 1) * 100)}%`).join(', ')
  const gradient = `linear-gradient(135deg, ${stops})`

  return (
    <div className={`ph ${className}`} style={{ background: gradient, ...style }}>
      <div className="ph-info">
        <span className="ph-tag">📸 Reemplazar con</span>
        <span className="ph-name">{name}</span>
        {description && <span className="ph-desc">{description}</span>}
      </div>
    </div>
  )
}
