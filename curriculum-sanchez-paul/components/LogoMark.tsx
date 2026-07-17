import type React from "react"

export const LOGO_PATH =
  "M 61 146.500 C 61 178.675, 61.244 205, 61.542 205 C 62.197 205, 65.756 197.173, 75.638 174 C 79.743 164.375, 83.711 155.150, 84.455 153.500 C 88.793 143.889, 89 142.791, 89 129.378 L 89 116 126.435 116 C 148.715 116, 164.924 116.401, 166.473 116.990 C 176.724 120.887, 176.655 135.322, 166.364 139.621 C 163.782 140.700, 155.758 141, 129.477 141 L 95.889 141 93.531 146.250 C 92.234 149.137, 88.161 158.700, 84.480 167.500 C 80.799 176.300, 75.616 188.450, 72.961 194.500 C 70.306 200.550, 66.521 209.272, 64.548 213.883 L 60.962 222.265 68.241 221.798 C 81.767 220.930, 93.810 212.889, 99.388 201 C 101.099 197.355, 101.595 193.935, 102 183 L 102.500 169.500 136.500 169 L 170.500 168.500 178.203 164.654 C 212.079 147.741, 208.188 100.129, 172.068 89.585 C 167.414 88.227, 159.083 88, 113.818 88 L 61 88 61 146.500 M 187 90.692 C 193.967 96.006, 199.855 102.909, 202.947 109.388 C 206.097 115.988, 206.109 116, 210.301 115.995 C 214.338 115.990, 215.058 115.452, 229 102.024 L 243.500 88.057 213.500 88.040 L 183.500 88.022 187 90.692 M 203.083 146.512 C 199.998 153.956, 194.186 161.148, 187.759 165.477 L 182.527 169 193.198 169 C 204.890 169, 208.113 169.804, 212.250 173.751 C 216.050 177.376, 216.205 185.414, 212.559 189.747 C 208.467 194.610, 205.224 195, 168.870 195 L 135.472 195 122 208.500 L 108.528 222 158.082 222 C 200.368 222, 208.434 221.767, 213.068 220.415 C 239.019 212.840, 250.809 184.300, 237.424 161.460 C 231.743 151.767, 219.727 143.212, 209.456 141.549 L 205.412 140.894 203.083 146.512"

export const LOGO_VIEWBOX = "55 82 194 146"

export const LogoMark: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox={LOGO_VIEWBOX} className={className} aria-hidden="true" focusable="false">
    <path d={LOGO_PATH} fill="currentColor" fillRule="evenodd" />
  </svg>
)

export const LogoPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" focusable="false">
    <defs>
      <pattern
        id="ps-logo-pattern"
        width="240"
        height="210"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(-10)"
      >
        <path
          d={LOGO_PATH}
          fill="currentColor"
          fillRule="evenodd"
          transform="translate(30 24) scale(0.28) translate(-55 -82)"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ps-logo-pattern)" />
  </svg>
)

export default LogoMark
