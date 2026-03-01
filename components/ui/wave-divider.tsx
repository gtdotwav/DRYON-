interface WaveDividerProps {
  variant?: "light" | "dark" | "blue" | "yellow" | "gradient"
  position?: "top" | "bottom"
  flip?: boolean
  className?: string
  sourceColor?: string // Color of the section above the wave
  targetColor?: string // Color of the section below the wave
}

export function WaveDivider({
  variant = "light",
  position = "bottom",
  flip = false,
  className = "",
  sourceColor, // Accept source color for top layer
  targetColor,
}: WaveDividerProps) {
  const getGradientId = () => `waveGradient${variant}${position}${flip ? "Flip" : ""}`

  const gradients = {
    light: {
      layer1: sourceColor || "var(--color-primary)", // Start with primary blue
      layer2: "var(--color-accent)", // Transition through accent blue
      layer3: "#93c5fd", // Light blue transition
      layer4: targetColor || "#dbeafe", // End with very light blue
    },
    dark: {
      layer1: sourceColor || "var(--color-primary-dark)", // Dark primary
      layer2: "var(--color-primary)", // Primary blue
      layer3: "var(--color-accent)", // Accent blue
      layer4: targetColor || "#ffffff", // White target
    },
    blue: {
      layer1: sourceColor || "var(--color-accent)", // Accent blue
      layer2: "#60a5fa", // Medium blue
      layer3: "#93c5fd", // Light blue
      layer4: targetColor || "#dbeafe", // Very light blue
    },
    yellow: {
      layer1: sourceColor || "var(--color-secondary)", // Yellow
      layer2: "#fde047", // Light yellow
      layer3: "#fef08a", // Very light yellow
      layer4: targetColor || "#fffbeb", // Cream
    },
    gradient: {
      layer1: sourceColor || "var(--color-primary)", // Primary blue
      layer2: "var(--color-accent)", // Accent blue
      layer3: "#93c5fd", // Light blue
      layer4: targetColor || "#dbeafe", // Very light blue
    },
  }

  const currentGradient = gradients[variant]
  const gradientId = getGradientId()
  const shadowId = `shadow${gradientId}`

  return (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{
        marginBottom: position === "bottom" ? "-5px" : undefined,
        marginTop: position === "top" ? "-5px" : undefined,
      }}
    >
      <svg
        className="relative block w-full h-[105px] md:h-[125px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={shadowId}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <feOffset dx="0" dy="3" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layer 1 - Back layer (matches source section color) */}
        <path
          d="M0,20 C200,80 400,80 600,50 C800,20 1000,20 1200,50 L1200,120 L0,120 Z"
          fill={currentGradient.layer1}
          opacity="0.7"
        />

        {/* Layer 2 - Middle transition layer */}
        <path className="bg-[rgba(34,55,109,1)]"
          d="M0,40 C250,95 450,95 650,70 C850,45 1050,45 1200,70 L1200,120 L0,120 Z"
          fill={currentGradient.layer2}
          opacity="0.8"
        />

        {/* Layer 3 - Front transition */}
        <path
          d="M0,55 C300,110 500,110 700,85 C900,60 1100,60 1200,85 L1200,120 L0,120 Z"
          fill={currentGradient.layer3}
          opacity="0.9"
        />

        {/* Layer 4 - Bottom solid layer (matches target section color) */}
        <path
          className="bg-primary"
          d="M0,70 C320,115 520,115 720,95 C920,75 1120,75 1200,95 L1200,120 L0,120 Z"
          fill={currentGradient.layer4}
          opacity="1"
        />
      </svg>
    </div>
  )
}
