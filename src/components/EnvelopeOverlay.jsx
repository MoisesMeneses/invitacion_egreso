import { invitationData } from '../data/invitationData'
import { PoliceCrest } from './PoliceCrest'

export function EnvelopeOverlay({ isOpen, onOpen }) {
  if (isOpen) return null

  return (
    <div
      className="print:hidden fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07150f]/95 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Portada de Invitación"
    >
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#133325] to-[#0a1e15] border-2 border-[#d4af37]/55 p-6 sm:p-9 text-center shadow-[0_25px_70px_rgba(0,0,0,0.75)]">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 font-display text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#f3df9c] mb-4">
          POLICÍA BOLIVIANA • {invitationData.institution.shortName}
        </div>

        <div className="flex justify-center mb-3 drop-shadow-[0_10px_18px_rgba(0,0,0,0.5)]">
          <PoliceCrest size={116} />
        </div>

        <p className="font-serif italic text-base sm:text-lg text-[#f4f1e8]/90 mb-1">
          Brindis de Honor y Recepción Social de Egreso
        </p>

        <h1 className="font-script text-4xl sm:text-5xl text-[#f3df9c] leading-tight my-2 drop-shadow">
          {invitationData.graduate.fullTitle}
        </h1>

        <p className="text-xs sm:text-sm text-[#f4f1e8]/85 mb-4">
          Invitan sus padres:{' '}
          <strong className="text-[#f3df9c]">{invitationData.parents[0]}</strong> &amp;{' '}
          <strong className="text-[#f3df9c]">{invitationData.parents[1]}</strong>
        </p>

        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-black/30 border border-[#d4af37]/35 font-display text-xs sm:text-sm font-semibold text-[#fbf3d5] tracking-wider mb-6">
          <span>NOVIEMBRE 2026</span>
          <span className="text-[#d4af37]">•</span>
          <span>SÁBADO 28 • 19:00 P.M.</span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#081c13] bg-gradient-to-r from-[#f7e29c] via-[#d4af37] to-[#b88f22] hover:brightness-105 active:scale-[0.99] transition shadow-lg cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            Abrir Invitación
          </button>

          <button
            type="button"
            onClick={() => onOpen(false)}
            className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#f3df9c] bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/40 transition cursor-pointer"
          >
            Abrir sin música
          </button>
        </div>
      </div>
    </div>
  )
}
