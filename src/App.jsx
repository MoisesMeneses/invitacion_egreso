import { useState } from 'react'
import './App.css'
import { CountdownTimer } from './components/CountdownTimer'
import { EnvelopeOverlay } from './components/EnvelopeOverlay'
import { PadrinosSection } from './components/PadrinosSection'
import { PhysicalCardReplica } from './components/PhysicalCardReplica'
import { PoliceCrest } from './components/PoliceCrest'
import { invitationData } from './data/invitationData'
import { ceremonialMusic } from './utils/ceremonialAudio'

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [shareFeedback, setShareFeedback] = useState('')

  const handleOpenEnvelope = async (withMusic) => {
    setIsEnvelopeOpen(true)
    if (withMusic) {
      const started = await ceremonialMusic.start()
      setIsMusicPlaying(started)
    }
  }

  const handleToggleMusic = async () => {
    const playing = await ceremonialMusic.toggle()
    setIsMusicPlaying(playing)
  }

  const handleShare = async () => {
    const shareData = {
      title: `Invitación de Egreso | ${invitationData.graduate.fullTitle}`,
      text: `${invitationData.parents.join(' y ')} tienen el grato honor de invitarle al Egreso de ${invitationData.graduate.fullTitle} (${invitationData.institution.shortName}) - Sábado 28 de Noviembre 2026, 19:00 hrs en Salón "La Predilecta".`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // Cancelado por el usuario
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
      setShareFeedback('¡Enlace copiado!')
      setTimeout(() => setShareFeedback(''), 2500)
    } catch {
      setShareFeedback('Listo')
    }
  }

  return (
    <div className="min-h-svh flex flex-col print:block print:min-h-0 print:bg-white">
      {/* Portada / Sobre de apertura ceremonial */}
      <EnvelopeOverlay isOpen={isEnvelopeOpen} onOpen={handleOpenEnvelope} />

      {/* Barra superior de navegación (oculta al imprimir) */}
      <header className="print:hidden sticky top-0 z-40 bg-[#091b14]/90 backdrop-blur-md border-b border-[#d4af37]/25">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <a href="#inicio" className="flex flex-col text-left">
            <span className="font-display text-[10px] sm:text-xs tracking-[0.16em] text-[#e5c467] font-bold">
              FATESCIPOL • POTOSÍ
            </span>
            <span className="font-serif text-sm sm:text-lg font-semibold text-white leading-tight">
              {invitationData.graduate.fullTitle}
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#f4f1e8]/85"
            aria-label="Secciones de la invitación"
          >
            <a href="#cuenta-regresiva" className="hover:text-[#f3df9c] transition">
              Cuenta Regresiva
            </a>
            <a href="#tarjeta" className="hover:text-[#f3df9c] transition">
              Tarjeta de Gala
            </a>
            <a href="#padrinos" className="hover:text-[#f3df9c] transition">
              Padrinos
            </a>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handleToggleMusic}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer ${
                isMusicPlaying
                  ? 'bg-[#d4af37]/25 border-[#f3df9c] text-[#fbf3d5] shadow-[0_0_14px_rgba(212,175,55,0.3)]'
                  : 'bg-[#d4af37]/10 border-[#d4af37]/40 text-[#f3df9c] hover:bg-[#d4af37]/20'
              }`}
              title={
                isMusicPlaying
                  ? 'Pausar Marcha Jinetes en el Cielo'
                  : 'Reproducir Marcha Jinetes en el Cielo'
              }
            >
              <span
                className={`music-bars ${isMusicPlaying ? 'music-active' : ''}`}
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </span>
              <span>{isMusicPlaying ? 'Música: ON' : 'Música'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#f3df9c] bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/40 transition cursor-pointer"
              title="Compartir invitación"
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span>{shareFeedback || 'Compartir'}</span>
            </button>
          </div>
        </div>

        {/* Cinta Tricolor Institucional */}
        <div className="grid grid-cols-3 h-[3px] w-full" aria-hidden="true">
          <span className="bg-[#d52b1e]" />
          <span className="bg-[#f9e300]" />
          <span className="bg-[#007934]" />
        </div>
      </header>

      <main className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10 flex flex-col gap-10 sm:gap-14 print:p-0 print:m-0 print:max-w-none print:block">
        {/* Hero Solemne (oculto al imprimir) */}
        <section
          id="inicio"
          className="print:hidden relative text-center rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#16392a]/85 to-[#0b1f17]/95 border border-[#d4af37]/40 px-4 py-8 sm:px-8 sm:py-11 shadow-2xl overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/45 font-display text-[11px] sm:text-xs font-bold tracking-[0.15em] text-[#f3df9c] mb-4">
            <span>POLICÍA BOLIVIANA</span>
            <span className="text-[#d4af37]">✦</span>
            <span>{invitationData.institution.shortName}</span>
          </div>

          <div className="flex justify-center mb-3 drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)]">
            <PoliceCrest size={135} />
          </div>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#fbf3d5] mb-1">
            Brindis de Honor y Recepción Social de Egreso
          </p>

          <h1 className="hero-graduate-title font-script text-4xl sm:text-6xl md:text-[4.1rem] leading-tight my-2 px-2">
            {invitationData.graduate.fullTitle}
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-base text-[#f4f1e8]/90 leading-relaxed mb-6">
            Con la bendición de Dios y el orgullo de sus padres:{' '}
            <strong className="text-[#f3df9c]">{invitationData.parents[0]}</strong> y{' '}
            <strong className="text-[#f3df9c]">{invitationData.parents[1]}</strong>
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#tarjeta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#091d14] bg-gradient-to-r from-[#f7e29c] via-[#d4af37] to-[#b3871c] shadow-lg hover:brightness-105 transition"
            >
              Ver Tarjeta de Gala
            </a>
          </div>
        </section>

        {/* 1. Cuenta Regresiva al principio, antes de Tarjeta de Gala (solo Recepción Social) */}
        <CountdownTimer />

        {/* 2. Tarjeta de Gala (Única sección visible al guardar en PDF) */}
        <section
          id="tarjeta"
          className="flex flex-col gap-5 sm:gap-7 print:block print:m-0 print:p-0"
        >
          <div className="print:hidden text-center max-w-xl mx-auto px-2">
            <span className="inline-block font-display text-xs font-bold uppercase tracking-[0.2em] text-[#e5c467] mb-1">
              Invitación Oficial
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1.5">
              Tarjeta de Gala
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#f4f1e8]/80">
              Diseño oficial en honor al egreso del {invitationData.graduate.fullTitle}
            </p>
          </div>

          <div className="w-full flex justify-center print:block">
            <PhysicalCardReplica />
          </div>

          <div className="print:hidden flex justify-center">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#091d14] bg-gradient-to-r from-[#f7e29c] via-[#d4af37] to-[#b3871c] shadow-lg hover:brightness-105 transition cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Guardar en PDF
            </button>
          </div>
        </section>

        {/* 3. Padrinos de Honor (oculto al imprimir) */}
        <PadrinosSection />
      </main>

      {/* Pie de página institucional (oculto al imprimir) */}
      <footer className="print:hidden mt-auto bg-[#06130e] border-t border-[#d4af37]/25">
        <div className="grid grid-cols-3 h-[3px] w-full" aria-hidden="true">
          <span className="bg-[#d52b1e]" />
          <span className="bg-[#f9e300]" />
          <span className="bg-[#007934]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10 text-center flex flex-col items-center gap-2">
          <PoliceCrest size={74} />
          <p className="font-script text-3xl sm:text-4xl text-[#f3df9c]">
            {invitationData.graduate.fullTitle}
          </p>
          <p className="font-display text-xs tracking-[0.16em] text-white">
            {invitationData.institution.shortName} • Promoción {invitationData.institution.promotionYear}
          </p>
          <p className="text-xs sm:text-sm text-[#f4f1e8]/70">
            Familia Martinez Aguilar • Potosí, Bolivia
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <button
              type="button"
              onClick={() => setIsEnvelopeOpen(false)}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#f3df9c] bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 transition cursor-pointer"
            >
              Ver Sobre de Portada
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
