export function ProductBackground() {
  return (
    <svg
      viewBox="0 0 1080 1350"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DryOn vertical liquid glass background"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="glassV" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#E8E5DC" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="vignetteV" cx="50%" cy="48%" r="68%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.10" />
        </radialGradient>
        <filter id="softBlurV" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <linearGradient id="navyLineV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23376D" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#23376D" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      <rect width="1080" height="1350" fill="#E8E5DC" />
      <rect width="1080" height="1350" fill="url(#vignetteV)" />

      {/* Blobs liquid glass */}
      <g filter="url(#softBlurV)">
        <path
          d="M140,230 C280,120 540,110 780,210 C940,280 1020,380 960,450 C840,580 520,580 340,540 C190,505 70,340 140,230 Z"
          fill="url(#glassV)"
        />
        <path
          d="M940,1000 C840,1100 600,1125 420,1085 C280,1055 220,990 270,940 C350,865 600,885 770,910 C940,935 1020,935 940,1000 Z"
          fill="url(#glassV)"
        />
      </g>

      {/* Waves verticais (mais densas) */}
      <g stroke="url(#navyLineV)" fill="none">
        <path d="M-20,460 C220,400 520,400 820,460 C960,490 1110,490 1100,460" strokeWidth="7" />
        <path d="M-20,520 C220,460 520,460 820,520 C960,550 1110,550 1100,520" strokeWidth="6" />
        <path d="M-20,580 C220,520 520,520 820,580 C960,610 1110,610 1100,580" strokeWidth="5" />
        <path d="M-20,640 C220,580 520,580 820,640 C960,670 1110,670 1100,640" strokeWidth="4" />
        <path d="M-20,700 C220,640 520,640 820,700 C960,730 1110,730 1100,700" strokeWidth="3.2" />
        <path d="M-20,760 C220,700 520,700 820,760 C960,790 1110,790 1100,760" strokeWidth="2.6" />
        <path d="M-20,820 C220,760 520,760 820,820 C960,850 1110,850 1100,820" strokeWidth="2.2" />
        <path d="M-20,880 C220,820 520,820 820,880 C960,910 1110,910 1100,880" strokeWidth="2" />
      </g>
    </svg>
  )
}
