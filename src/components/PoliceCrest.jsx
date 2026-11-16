import { useId } from 'react'

export function PoliceCrest({ className = '', size = 135 }) {
  const uid = useId().replace(/:/g, '')
  const goldGrad = `gold-${uid}`
  const darkGoldGrad = `dgold-${uid}`
  const woodGrad = `wood-${uid}`
  const barrelGrad = `barrel-${uid}`
  const leafGrad = `leaf-${uid}`
  const leafLightGrad = `leaflight-${uid}`
  const flameOuter = `flameO-${uid}`
  const flameInner = `flameI-${uid}`
  const skinGrad = `skin-${uid}`

  // Hojas de laurel puntiagudas (izquierda), de abajo hacia arriba
  const leftLeaves = [
    { x: 64, y: 150, rot: -55, scale: 0.95 },
    { x: 48, y: 134, rot: -38, scale: 1.02 },
    { x: 39, y: 114, rot: -20, scale: 1.05 },
    { x: 37, y: 93, rot: -2, scale: 1.02 },
    { x: 42, y: 72, rot: 18, scale: 0.96 },
    { x: 53, y: 54, rot: 36, scale: 0.88 },
    { x: 67, y: 40, rot: 52, scale: 0.76 },
    // Hojas internas izquierda
    { x: 68, y: 132, rot: -78, scale: 0.84 },
    { x: 57, y: 114, rot: -62, scale: 0.88 },
    { x: 54, y: 95, rot: -42, scale: 0.86 },
    { x: 57, y: 76, rot: -22, scale: 0.82 },
    { x: 65, y: 59, rot: -4, scale: 0.75 },
  ]

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Emblema FATESCIPOL Policía Boliviana"
    >
      <defs>
        <linearGradient id={goldGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="45%" stopColor="#E0B841" />
          <stop offset="100%" stopColor="#9A7014" />
        </linearGradient>

        <linearGradient id={darkGoldGrad} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7A560B" />
        </linearGradient>

        <linearGradient id={woodGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8D5524" />
          <stop offset="50%" stopColor="#5C3311" />
          <stop offset="100%" stopColor="#3B1E08" />
        </linearGradient>

        <linearGradient id={barrelGrad} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="50%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#1F2937" />
        </linearGradient>

        <linearGradient id={leafGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2F6B48" />
          <stop offset="55%" stopColor="#1E4D32" />
          <stop offset="100%" stopColor="#123120" />
        </linearGradient>

        <linearGradient id={leafLightGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E825B" />
          <stop offset="100%" stopColor="#1B462E" />
        </linearGradient>

        <linearGradient id={flameOuter} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFF59D" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>

        <linearGradient id={flameInner} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        <linearGradient id={skinGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5CBA7" />
          <stop offset="60%" stopColor="#E0A375" />
          <stop offset="100%" stopColor="#B9774B" />
        </linearGradient>
      </defs>

      {/* ==================== CORONA DE LAURELES ==================== */}
      {/* Tallos principales */}
      <path
        d="M95 170 C52 156, 34 114, 52 56"
        stroke="#1B462E"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M125 170 C168 156, 186 114, 168 56"
        stroke="#1B462E"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hojas de laurel rama izquierda */}
      {leftLeaves.map((lf, idx) => (
        <g
          key={`l-${idx}`}
          transform={`translate(${lf.x}, ${lf.y}) rotate(${lf.rot}) scale(${lf.scale})`}
        >
          <path
            d="M0 0 C-10 -8, -12 -22, 0 -32 C12 -22, 10 -8, 0 0 Z"
            fill={idx % 2 === 0 ? `url(#${leafGrad})` : `url(#${leafLightGrad})`}
            stroke="#9C7A23"
            strokeWidth="0.9"
          />
          <path
            d="M0 -2 L0 -27"
            stroke="#7FA982"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      ))}

      {/* Hojas de laurel rama derecha (espejo exacto) */}
      {leftLeaves.map((lf, idx) => (
        <g
          key={`r-${idx}`}
          transform={`translate(${220 - lf.x}, ${lf.y}) rotate(${-lf.rot}) scale(${lf.scale})`}
        >
          <path
            d="M0 0 C-10 -8, -12 -22, 0 -32 C12 -22, 10 -8, 0 0 Z"
            fill={idx % 2 === 0 ? `url(#${leafGrad})` : `url(#${leafLightGrad})`}
            stroke="#9C7A23"
            strokeWidth="0.9"
          />
          <path
            d="M0 -2 L0 -27"
            stroke="#7FA982"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      ))}

      {/* Bayas doradas en la corona */}
      <circle cx="48" cy="102" r="3" fill={`url(#${goldGrad})`} stroke="#5C3311" strokeWidth="0.6" />
      <circle cx="52" cy="80" r="2.8" fill={`url(#${goldGrad})`} stroke="#5C3311" strokeWidth="0.6" />
      <circle cx="172" cy="102" r="3" fill={`url(#${goldGrad})`} stroke="#5C3311" strokeWidth="0.6" />
      <circle cx="168" cy="80" r="2.8" fill={`url(#${goldGrad})`} stroke="#5C3311" strokeWidth="0.6" />

      {/* ==================== CARABINAS / FUSILES CRUZADOS ==================== */}
      {/* Carabina 1 (Inclinada de arriba-izquierda a abajo-derecha) */}
      <g transform="rotate(-40 110 118)">
        {/* Cañón metálico superior */}
        <rect
          x="107.2"
          y="30"
          width="5.6"
          height="72"
          rx="2"
          fill={`url(#${barrelGrad})`}
          stroke="#1F2937"
          strokeWidth="0.9"
        />
        {/* Punto de mira */}
        <polygon points="107,35 104,38 107,40" fill="#374151" />
        {/* Abrazadera dorada */}
        <rect x="106.2" y="68" width="7.6" height="4.5" rx="1" fill={`url(#${goldGrad})`} />
        {/* Guardamano y caja de madera */}
        <path
          d="M105.5 84 L114.5 84 L115.5 130 L104.5 130 Z"
          fill={`url(#${woodGrad})`}
          stroke="#2A1405"
          strokeWidth="1"
        />
        {/* Cerrojo / Guardamonte metálico */}
        <path
          d="M114.5 122 C119 124, 119 133, 114.5 135"
          stroke="#4B5563"
          strokeWidth="1.8"
          fill="none"
        />
        {/* Culata de madera */}
        <path
          d="M104.5 130 L115.5 130 L121 178 C116 181, 105 180, 101 177 Z"
          fill={`url(#${woodGrad})`}
          stroke="#2A1405"
          strokeWidth="1.1"
        />
        {/* Cantonera dorada en la base de la culata */}
        <path
          d="M101 175 L121 176 L120.5 180 L101.5 179 Z"
          fill={`url(#${goldGrad})`}
        />
      </g>

      {/* Carabina 2 (Inclinada de arriba-derecha a abajo-izquierda) */}
      <g transform="rotate(40 110 118)">
        {/* Cañón metálico superior */}
        <rect
          x="107.2"
          y="30"
          width="5.6"
          height="72"
          rx="2"
          fill={`url(#${barrelGrad})`}
          stroke="#1F2937"
          strokeWidth="0.9"
        />
        {/* Punto de mira */}
        <polygon points="113,35 116,38 113,40" fill="#374151" />
        {/* Abrazadera dorada */}
        <rect x="106.2" y="68" width="7.6" height="4.5" rx="1" fill={`url(#${goldGrad})`} />
        {/* Guardamano y caja de madera */}
        <path
          d="M105.5 84 L114.5 84 L115.5 130 L104.5 130 Z"
          fill={`url(#${woodGrad})`}
          stroke="#2A1405"
          strokeWidth="1"
        />
        {/* Cerrojo / Guardamonte metálico */}
        <path
          d="M105.5 122 C101 124, 101 133, 105.5 135"
          stroke="#4B5563"
          strokeWidth="1.8"
          fill="none"
        />
        {/* Culata de madera */}
        <path
          d="M104.5 130 L115.5 130 L119 177 C115 180, 104 181, 99 178 Z"
          fill={`url(#${woodGrad})`}
          stroke="#2A1405"
          strokeWidth="1.1"
        />
        {/* Cantonera dorada */}
        <path
          d="M99 176 L119 175 L118.5 179 L99.5 180 Z"
          fill={`url(#${goldGrad})`}
        />
      </g>

      {/* ==================== ANTORCHA CENTRAL Y LLAMA ==================== */}
      <g>
        {/* Llama exterior */}
        <path
          d="M110 18 C117 30, 128 38, 125 53 C129 48, 132 56, 126 65 C121 73, 99 73, 94 65 C88 56, 91 48, 95 53 C92 38, 103 30, 110 18 Z"
          fill={`url(#${flameOuter})`}
          stroke="#B45309"
          strokeWidth="0.9"
        />
        {/* Lenguas de fuego intermedias */}
        <path
          d="M110 27 C115 37, 122 44, 119 57 C116 65, 104 65, 101 57 C98 44, 105 37, 110 27 Z"
          fill="#FBBF24"
        />
        {/* Núcleo brillante de la llama */}
        <path
          d="M110 36 C113 44, 116 50, 114 59 C112 63, 108 63, 106 59 C104 50, 107 44, 110 36 Z"
          fill={`url(#${flameInner})`}
        />

        {/* Copa superior de la antorcha */}
        <path
          d="M93 69 L127 69 L122 79 L98 79 Z"
          fill={`url(#${goldGrad})`}
          stroke="#5C3D06"
          strokeWidth="1.1"
        />
        <rect
          x="91"
          y="65"
          width="38"
          height="5"
          rx="2.5"
          fill={`url(#${goldGrad})`}
          stroke="#5C3D06"
          strokeWidth="1.1"
        />
        {/* Estrías de la copa */}
        <line x1="101" y1="69" x2="103" y2="79" stroke="#7A560B" strokeWidth="1" />
        <line x1="110" y1="69" x2="110" y2="79" stroke="#7A560B" strokeWidth="1" />
        <line x1="119" y1="69" x2="117" y2="79" stroke="#7A560B" strokeWidth="1" />

        {/* Anillo del cuello */}
        <rect
          x="96"
          y="79"
          width="28"
          height="4.5"
          rx="2"
          fill={`url(#${darkGoldGrad})`}
          stroke="#5C3D06"
          strokeWidth="1"
        />

        {/* Fuste / Mango cónico de la antorcha */}
        <path
          d="M100 83.5 L120 83.5 L114.5 162 L105.5 162 Z"
          fill={`url(#${goldGrad})`}
          stroke="#5C3D06"
          strokeWidth="1.2"
        />
        {/* Línea de brillo vertical en la antorcha */}
        <line x1="108" y1="85" x2="108.5" y2="158" stroke="#FFF8DC" strokeWidth="1.3" opacity="0.65" />

        {/* Mano empuñando la antorcha */}
        <g>
          {/* Dorso y dedos cerrados */}
          <rect
            x="98"
            y="108"
            width="23"
            height="6.2"
            rx="3"
            fill={`url(#${skinGrad})`}
            stroke="#7A4424"
            strokeWidth="1"
          />
          <rect
            x="97.5"
            y="114"
            width="24"
            height="6.2"
            rx="3"
            fill={`url(#${skinGrad})`}
            stroke="#7A4424"
            strokeWidth="1"
          />
          <rect
            x="98"
            y="120"
            width="23"
            height="6.2"
            rx="3"
            fill={`url(#${skinGrad})`}
            stroke="#7A4424"
            strokeWidth="1"
          />
          <rect
            x="99.5"
            y="126"
            width="20.5"
            height="5.8"
            rx="2.8"
            fill={`url(#${skinGrad})`}
            stroke="#7A4424"
            strokeWidth="1"
          />
          {/* Pulgar cruzado arriba */}
          <path
            d="M97 112 C94 107, 99 103, 108 105 C112 106, 114 109, 110 112 Z"
            fill={`url(#${skinGrad})`}
            stroke="#7A4424"
            strokeWidth="1"
          />
          {/* Muñeca inferior */}
          <path
            d="M101 131.5 L118 131.5 L116 140 L103 140 Z"
            fill={`url(#${skinGrad})`}
            stroke="#7A4424"
            strokeWidth="1"
          />
        </g>
      </g>

      {/* ==================== CINTA TRICOLOR BOLIVIANA ==================== */}
      <g>
        {/* Cola izquierda de la cinta (Rojo, Amarillo, Verde) */}
        <path
          d="M101 164 L78 197 L87 195 L91 202 L108 170 Z"
          fill="#D52B1E"
          stroke="#7A560B"
          strokeWidth="0.6"
        />
        <path
          d="M104 165 L83 196 L88 195 L90 199 L109 170 Z"
          fill="#F9E300"
        />
        <path
          d="M107 166 L88 196 L91 202 L110 171 Z"
          fill="#007934"
        />

        {/* Cola derecha de la cinta (Rojo, Amarillo, Verde) */}
        <path
          d="M119 164 L142 197 L133 195 L129 202 L112 170 Z"
          fill="#D52B1E"
          stroke="#7A560B"
          strokeWidth="0.6"
        />
        <path
          d="M116 165 L137 196 L132 195 L130 199 L111 170 Z"
          fill="#F9E300"
        />
        <path
          d="M113 166 L132 196 L129 202 L110 171 Z"
          fill="#007934"
        />

        {/* Lazo central tricolor ondulado */}
        <path
          d="M84 156 C98 152, 122 152, 136 156 L134 162 C121 158, 99 158, 86 162 Z"
          fill="#D52B1E"
        />
        <path
          d="M86 161.5 C99 157.5, 121 157.5, 134 161.5 L132 167.5 C120 163.5, 100 163.5, 88 167.5 Z"
          fill="#F9E300"
        />
        <path
          d="M88 167 C100 163, 120 163, 132 167 L130 173 C119 169, 101 169, 90 173 Z"
          fill="#007934"
        />
        {/* Borde dorado del lazo central */}
        <path
          d="M84 156 C98 152, 122 152, 136 156 L130 173 C119 169, 101 169, 90 173 Z"
          stroke={`url(#${goldGrad})`}
          strokeWidth="1.2"
          fill="none"
        />
      </g>
    </svg>
  )
}
