import React from 'react'

// Patrón de hexágonos tecnológicos
export const HexagonPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="hexagons" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
        <polygon
          points="10,0 20,5.77 20,17.32 10,23.09 0,17.32 0,5.77"
          fill="none"
          stroke="rgba(96, 165, 250, 0.1)"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#hexagons)" />
  </svg>
)

// Patrón de circuitos tecnológicos
export const CircuitPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="circuits" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <path
          d="M0,12.5 L25,12.5 M12.5,0 L12.5,25 M0,0 L25,25 M0,25 L25,0"
          stroke="rgba(96, 165, 250, 0.08)"
          strokeWidth="0.3"
          fill="none"
        />
        <circle cx="12.5" cy="12.5" r="1" fill="rgba(96, 165, 250, 0.15)" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#circuits)" />
  </svg>
)

// Patrón de puntos tecnológicos
export const DotPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="0.5" fill="rgba(96, 165, 250, 0.1)" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dots)" />
  </svg>
)

// Patrón de ondas tecnológicas
export const WavePattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="waves" x="0" y="0" width="50" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M0,10 Q12.5,5 25,10 T50,10 M0,15 Q12.5,10 25,15 T50,15"
          stroke="rgba(96, 165, 250, 0.06)"
          strokeWidth="0.5"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#waves)" />
  </svg>
)

// Patrón de cuadrícula tecnológica
export const GridPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" stroke="rgba(96, 165, 250, 0.05)" strokeWidth="0.3" fill="none" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#grid)" />
  </svg>
)

// Patrón de triángulos tecnológicos
export const TrianglePattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="triangles" x="0" y="0" width="15" height="13" patternUnits="userSpaceOnUse">
        <polygon
          points="7.5,0 15,13 0,13"
          fill="none"
          stroke="rgba(96, 165, 250, 0.08)"
          strokeWidth="0.3"
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#triangles)" />
  </svg>
)

// Patrón de estrellas tecnológicas
export const StarPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <polygon
          points="10,0 12,8 20,8 14,13 16,20 10,16 4,20 6,13 0,8 8,8"
          fill="rgba(96, 165, 250, 0.06)"
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#stars)" />
  </svg>
)

// Patrón de espirales tecnológicas
export const SpiralPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="spirals" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <path
          d="M15,15 Q22.5,7.5 15,0 Q7.5,7.5 0,15 Q7.5,22.5 15,30 Q22.5,22.5 30,15 Q22.5,7.5 15,0"
          stroke="rgba(96, 165, 250, 0.04)"
          strokeWidth="0.5"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#spirals)" />
  </svg>
)

// Patrón de código binario
export const BinaryPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="binary" x="0" y="0" width="8" height="12" patternUnits="userSpaceOnUse">
        <text x="0" y="8" fontSize="6" fill="rgba(96, 165, 250, 0.08)" fontFamily="monospace">01</text>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#binary)" />
  </svg>
)

// Patrón de conexiones de red
export const NetworkPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(96, 165, 250, 0.1)" />
        <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(96, 165, 250, 0.05)" strokeWidth="0.3" />
        <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(96, 165, 250, 0.05)" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#network)" />
  </svg>
)

// Patrón de gradiente tecnológico
export const TechGradientPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(96, 165, 250, 0.1)" />
        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.05)" />
        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#techGradient)" />
  </svg>
)

// Componente de fondo con múltiples patrones
export const TechBackground: React.FC<{ 
  patterns?: Array<'hexagon' | 'circuit' | 'dot' | 'wave' | 'grid' | 'triangle' | 'star' | 'spiral' | 'binary' | 'network'>,
  className?: string 
}> = ({ patterns = ['hexagon', 'circuit'], className = "" }) => {
  const patternComponents = {
    hexagon: HexagonPattern,
    circuit: CircuitPattern,
    dot: DotPattern,
    wave: WavePattern,
    grid: GridPattern,
    triangle: TrianglePattern,
    star: StarPattern,
    spiral: SpiralPattern,
    binary: BinaryPattern,
    network: NetworkPattern,
  }

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {patterns.map((pattern, index) => {
        const PatternComponent = patternComponents[pattern]
        return <PatternComponent key={index} className="opacity-30" />
      })}
      <TechGradientPattern className="opacity-20" />
    </div>
  )
}
