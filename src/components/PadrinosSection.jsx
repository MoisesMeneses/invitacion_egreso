import { invitationData } from '../data/invitationData'

function PadrinoIcon({ type }) {
  switch (type) {
    case 'medal':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      )
    case 'cake':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <path d="M2 21h20" />
          <path d="M7 8v3" />
          <path d="M12 8v3" />
          <path d="M17 8v3" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
        </svg>
      )
    case 'video':
    default:
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )
  }
}

export function PadrinosSection() {
  return (
    <section
      id="padrinos"
      aria-label="Padrinos de Honor"
      className="print:hidden w-full max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8"
    >
      <div className="text-center max-w-2xl mx-auto px-2">
        <span className="inline-block font-display text-xs font-bold uppercase tracking-[0.2em] text-[#e5c467] mb-1.5">
          Agradecimiento Especial
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Padres y Padrinos de Honor
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#f4f1e8]/80 leading-relaxed">
          Con profundo cariño y gratitud a quienes acompañan y bendicen este importante paso profesional
        </p>
      </div>

      {/* Padres del Egresado */}
      <div className="rounded-2xl bg-gradient-to-r from-[#d4af37]/15 via-[#153729]/85 to-[#d4af37]/15 border border-[#d4af37]/45 p-5 sm:p-7 text-center shadow-xl">
        <div className="font-display text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#e5c467] mb-2">
          PADRES DEL EGRESADO
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10">
          {invitationData.parents.map((parent) => (
            <span
              key={parent}
              className="font-script text-3xl sm:text-4xl md:text-[2.5rem] text-[#fbf3d5]"
            >
              {parent}
            </span>
          ))}
        </div>
      </div>

      {/* Cuadrícula responsive de Padrinos (1 col en móvil, 2 cols en tablet/desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {invitationData.padrinos.map((group) => (
          <article
            key={group.id}
            className="rounded-2xl bg-[#0d241b]/85 border border-[#d4af37]/35 hover:border-[#e5c467] p-6 text-center flex flex-col items-center gap-2.5 shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/45 text-[#f3df9c] flex items-center justify-center">
              <PadrinoIcon type={group.icon} />
            </div>
            <h3 className="font-display text-sm sm:text-base font-bold tracking-wider text-[#f3df9c]">
              {group.role}
            </h3>
            <div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              aria-hidden="true"
            />
            <ul className="flex flex-col gap-1">
              {group.names.map((person) => (
                <li
                  key={person}
                  className="font-serif text-lg sm:text-xl font-semibold text-white"
                >
                  {person}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
