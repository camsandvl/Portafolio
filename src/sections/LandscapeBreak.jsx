import PlaceholderAsset from '../components/PlaceholderAsset'

/**
 * LandscapeBreak
 * Full-viewport illustration that blends from/to surrounding sections.
 *
 * Pass `src` to show the real image. If omitted, falls back to the colored placeholder.
 * Adjust fromColor / toColor to match the background of adjacent sections.
 */
export default function LandscapeBreak({ id, name, description, colors, fromColor = '#FFFFFF', toColor = '#FFFFFF', label, src }) {
  return (
    <section
      id={id}
      aria-label={label || name}
      className="landscape-break"
      style={{ position: 'relative', height: '100vh' }}
    >
      {/* ── Illustration ── */}
      {src ? (
        <img
          src={src}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <PlaceholderAsset
          name={name}
          description={description}
          colors={colors}
          style={{ height: '100%', width: '100%', borderRadius: 0 }}
        />
      )}

      {/* Gradient: from previous section color (top) → transparent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '28%',
          background: `linear-gradient(to bottom, ${fromColor} 0%, transparent 100%)`,
          pointerEvents: 'none', zIndex: 2,
        }}
      />

      {/* Gradient: transparent → next section color (bottom) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '28%',
          background: `linear-gradient(to top, ${toColor} 0%, transparent 100%)`,
          pointerEvents: 'none', zIndex: 2,
        }}
      />
    </section>
  )
}
