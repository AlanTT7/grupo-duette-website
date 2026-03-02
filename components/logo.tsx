interface LogoProps {
  className?: string
  /** Show only the monogram mark */
  markOnly?: boolean
  /** Override height in px – width scales proportionally */
  size?: number
}

/**
 * Duette Studio logo inspired by the serif‑monogram style.
 * Two elegant "D" letters as the brand mark, with the full
 * name rendered below when `markOnly` is false.
 */
export function Logo({ className, markOnly = false, size = 40 }: LogoProps) {
  if (markOnly) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Duette Studio"
      >
        {/* Left D */}
        <path
          d="M10 16h12c14 0 22 8 22 22s-8 22-22 22H10V16zm6 5v34h6c10.5 0 16.5-6.5 16.5-17S32.5 21 22 21h-6z"
          fill="currentColor"
        />
        {/* Right D, slightly overlapping */}
        <path
          d="M38 16h12c14 0 22 8 22 22s-8 22-22 22H38V16zm6 5v34h6c10.5 0 16.5-6.5 16.5-17S56.5 21 50 21h-6z"
          fill="currentColor"
          opacity="0.6"
        />
        {/* Thin top accent line */}
        <rect x="8" y="12" width="64" height="1.5" rx="0.75" fill="currentColor" opacity="0.25" />
        {/* Thin bottom accent line */}
        <rect x="8" y="63" width="64" height="1.5" rx="0.75" fill="currentColor" opacity="0.25" />
      </svg>
    )
  }

  // Full logo: monogram + wordmark
  const aspectRatio = 200 / 80
  const width = size * aspectRatio
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Duette Studio Development"
    >
      {/* ── Monogram ── */}
      {/* Left D */}
      <path
        d="M10 8h10c12 0 19 7 19 19s-7 19-19 19H10V8zm5 4.5v29h5c9 0 14.5-5.5 14.5-14.5S39 12.5 30 12.5h-5z"
        fill="currentColor"
      />
      {/* Right D */}
      <path
        d="M34 8h10c12 0 19 7 19 19s-7 19-19 19H34V8zm5 4.5v29h5c9 0 14.5-5.5 14.5-14.5S63 12.5 54 12.5h-5z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* Top accent line */}
      <rect x="8" y="4" width="56" height="1.2" rx="0.6" fill="currentColor" opacity="0.2" />
      {/* Bottom accent line */}
      <rect x="8" y="48.5" width="56" height="1.2" rx="0.6" fill="currentColor" opacity="0.2" />

      {/* ── Wordmark ── */}
      <text
        x="74"
        y="24"
        fill="currentColor"
        fontFamily="'Space Grotesk', var(--font-space-grotesk), system-ui, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="3"
      >
        DUETTE STUDIO
      </text>
      <text
        x="74"
        y="40"
        fill="currentColor"
        fontFamily="'Inter', var(--font-inter), system-ui, sans-serif"
        fontSize="9"
        fontWeight="400"
        letterSpacing="5.5"
        opacity="0.5"
      >
        DEVELOPMENT
      </text>

      {/* ── Tagline at bottom ── */}
      <text
        x="10"
        y="72"
        fill="currentColor"
        fontFamily="'Inter', var(--font-inter), system-ui, sans-serif"
        fontSize="7"
        fontWeight="400"
        letterSpacing="2"
        opacity="0.3"
      >
        WEB &amp; IT SOLUTIONS
      </text>
    </svg>
  )
}
