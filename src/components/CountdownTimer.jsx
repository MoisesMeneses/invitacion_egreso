import { useEffect, useState } from 'react'
import { invitationData } from '../data/invitationData'

function calculateTimeLeft(targetISO, nowMs) {
  const target = new Date(targetISO).getTime()
  const diff = Math.max(0, target - nowMs)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

export function CountdownTimer() {
  const [nowMs, setNowMs] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNowMs(Date.now())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const timeLeft = calculateTimeLeft(invitationData.receptionDateISO, nowMs)

  const units = [
    { label: 'Días', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Horas', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutos', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Segundos', value: String(timeLeft.seconds).padStart(2, '0') },
  ]

  return (
    <section
      id="cuenta-regresiva"
      aria-label="Cuenta regresiva para la Recepción Social"
      className="print:hidden w-full max-w-3xl mx-auto px-2 sm:px-4"
    >
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#143527]/90 to-[#0b2017]/95 border border-[#d4af37]/40 p-5 sm:p-8 shadow-2xl text-center">
        <span className="inline-block font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#e5c467] mb-1.5">
          Cuenta Regresiva • Recepción Social
        </span>
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5">
          Sábado 28 de Noviembre, 2026 • 19:00 P.M.
        </h2>
        <p className="text-xs sm:text-sm text-[#f4f1e8]/80 mb-6">
          {invitationData.receptionSummary.venueLabel}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-[#091a13]/85 border border-[#d4af37]/45 py-4 sm:py-5 px-3 shadow-lg"
            >
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f3df9c] leading-none tracking-tight">
                {unit.value}
              </span>
              <span className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#f4f1e8]/80">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
