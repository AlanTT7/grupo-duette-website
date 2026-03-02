interface LogoProps {
  className?: string
  /** Show only the TT monogram mark */
  markOnly?: boolean
  /** Override height in px - width scales proportionally */
  size?: number
}

/**
 * Duette Group / Grupo Duette logo.
 * Two serif capital "T" letters as the monogram brand mark,
 * faithfully reproducing the original TT logo style with thick
 * horizontal serifs and vertical strokes.
 */
export function Logo({ className, markOnly = false, size = 40 }: LogoProps) {
  if (markOnly) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Duette Group"
      >
        {/* Left T */}
        {/* Top horizontal bar */}
        <rect x="6" y="10" width="46" height="6" fill="currentColor" />
        {/* Top serif left */}
        <rect x="6" y="8" width="8" height="8" fill="currentColor" />
        {/* Top serif right (shared center) */}
        <rect x="44" y="8" width="8" height="8" fill="currentColor" />
        {/* Vertical stroke */}
        <rect x="24" y="16" width="8" height="68" fill="currentColor" />
        {/* Bottom serif */}
        <rect x="16" y="82" width="24" height="6" fill="currentColor" />
        <rect x="16" y="80" width="6" height="8" fill="currentColor" />
        <rect x="34" y="80" width="6" height="8" fill="currentColor" />

        {/* Right T */}
        {/* Top horizontal bar */}
        <rect x="48" y="10" width="46" height="6" fill="currentColor" />
        {/* Top serif left (shared center) */}
        <rect x="48" y="8" width="8" height="8" fill="currentColor" />
        {/* Top serif right */}
        <rect x="86" y="8" width="8" height="8" fill="currentColor" />
        {/* Vertical stroke */}
        <rect x="68" y="16" width="8" height="68" fill="currentColor" />
        {/* Bottom serif */}
        <rect x="58" y="82" width="24" height="6" fill="currentColor" />
        <rect x="58" y="80" width="6" height="8" fill="currentColor" />
        <rect x="76" y="80" width="6" height="8" fill="currentColor" />
      </svg>
    )
  }

  // Full logo: TT monogram + "DUETTE GROUP" + "DEVELOPMENT" text
  const monogramHeight = size
  const totalHeight = size + size * 0.55
  const totalWidth = size * 2.6

  return (
    <svg
      width={totalWidth}
      height={totalHeight}
      viewBox="0 0 260 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Duette Group Development"
    >
      {/* ---- TT Monogram ---- */}
      {/* Left T */}
      <rect x="56" y="8" width="46" height="5.5" fill="currentColor" />
      <rect x="56" y="6" width="7" height="7.5" fill="currentColor" />
      <rect x="95" y="6" width="7" height="7.5" fill="currentColor" />
      <rect x="74" y="13.5" width="7.5" height="66" fill="currentColor" />
      <rect x="65" y="78" width="24" height="5.5" fill="currentColor" />
      <rect x="65" y="76" width="5.5" height="7.5" fill="currentColor" />
      <rect x="83.5" y="76" width="5.5" height="7.5" fill="currentColor" />

      {/* Right T */}
      <rect x="100" y="8" width="46" height="5.5" fill="currentColor" />
      <rect x="100" y="6" width="7" height="7.5" fill="currentColor" />
      <rect x="139" y="6" width="7" height="7.5" fill="currentColor" />
      <rect x="118" y="13.5" width="7.5" height="66" fill="currentColor" />
      <rect x="109" y="78" width="24" height="5.5" fill="currentColor" />
      <rect x="109" y="76" width="5.5" height="7.5" fill="currentColor" />
      <rect x="127.5" y="76" width="5.5" height="7.5" fill="currentColor" />

      {/* ---- Text below ---- */}
      <text
        x="100"
        y="110"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Space Grotesk', var(--font-space-grotesk), system-ui, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="4"
      >
        DUETTE GROUP
      </text>
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Inter', var(--font-inter), system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="400"
        letterSpacing="6"
        opacity="0.45"
      >
        DEVELOPMENT
      </text>
    </svg>
  )
}
