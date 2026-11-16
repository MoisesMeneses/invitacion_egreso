import { invitationData } from '../data/invitationData'
import { PoliceCrest } from './PoliceCrest'

export function PhysicalCardReplica() {
  const { parents, greeting, graduate, bodyText, institution, padrinos, footerDate } =
    invitationData

  return (
    <article
      id="printable-gala-card"
      aria-label="Tarjeta de Gala Oficial"
      className="relative w-full max-w-[660px] mx-auto rounded-2xl bg-gradient-to-b from-[#faf7f0] to-[#f1ece0] text-[#2c4138] px-5 pt-11 pb-12 sm:px-10 sm:pt-12 sm:pb-14 shadow-[0_28px_65px_rgba(0,0,0,0.55)] ring-1 ring-[#d4af37]/60 overflow-hidden print:shadow-none print:ring-1 print:ring-[#c4a14a] print:max-w-[640px] print:mx-auto print:my-0"
    >
      {/* Borde punteado superior igual al diseño físico */}
      <div
        className="parchment-dots-top absolute top-3 left-4 right-4 h-1.5 opacity-80"
        aria-hidden="true"
      />

      {/* Esquina geométrica superior derecha (Verde policial y Dorado) */}
      <svg
        className="pointer-events-none absolute top-5 right-0 w-[68%] h-20 sm:h-24"
        viewBox="0 0 380 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="80,0 380,0 380,75" fill="#d9be7a" opacity="0.88" />
        <polygon points="150,0 380,0 380,52" fill="#214d3c" />
        <polygon points="220,18 380,48 380,92" fill="#214d3c" />
        <line x1="125" y1="4" x2="380" y2="58" stroke="#d4af37" strokeWidth="3.5" />
      </svg>

      {/* Esferas doradas decorativas (bokeh sutil igual a la tarjeta) */}
      <span
        className="bokeh-dot w-8 h-8 sm:w-10 sm:h-10 top-12 left-10 sm:left-14"
        aria-hidden="true"
      />
      <span
        className="bokeh-dot w-5 h-5 top-20 left-3 sm:left-4"
        aria-hidden="true"
      />
      <span
        className="bokeh-dot w-6 h-6 top-36 left-7 sm:left-9"
        aria-hidden="true"
      />
      <span
        className="bokeh-dot w-8 h-8 sm:w-9 sm:h-9 top-44 left-2.5 sm:left-3"
        aria-hidden="true"
      />
      <span
        className="bokeh-dot w-10 h-10 bottom-56 right-6 sm:right-8"
        aria-hidden="true"
      />
      <span
        className="bokeh-dot w-6 h-6 bottom-44 right-11 sm:right-14"
        aria-hidden="true"
      />
      <span
        className="bokeh-dot w-10 h-10 bottom-16 right-10 sm:right-14"
        aria-hidden="true"
      />

      {/* Marco interior dorado fino */}
      <div className="relative z-10 border-[1.5px] border-[#c4a14a]/70 px-4 py-7 sm:px-8 sm:py-9 text-center">
        {/* Padres / Anfitriones */}
        <header className="mb-3 sm:mb-4">
          {parents.map((parent) => (
            <p
              key={parent}
              className="font-script text-3xl sm:text-4xl md:text-[2.5rem] leading-[1.15] text-[#3a5247]"
            >
              {parent}
            </p>
          ))}
        </header>

        {/* Saludo */}
        <p className="max-w-md mx-auto mb-3 sm:mb-4 text-xs sm:text-[15px] leading-relaxed text-[#364b41] font-medium">
          {greeting}
        </p>

        {/* Nombre del Graduado */}
        <h2 className="font-script text-4xl sm:text-5xl md:text-[2.95rem] font-normal text-[#264136] my-2.5 sm:my-4 leading-[1.15]">
          {graduate.fullTitle}
        </h2>

        {/* Cuerpo de la invitación */}
        <p className="max-w-lg mx-auto mb-5 text-xs sm:text-[15.5px] leading-relaxed text-[#2f443b] font-medium">
          {bodyText}
        </p>

        {/* Institución */}
        <div className="font-sans text-sm sm:text-base md:text-[17px] font-extrabold tracking-[0.08em] text-[#263f35] mb-5">
          {institution.shortName}
        </div>

        {/* Padrinos en disposición escalonada izquierda/derecha como en la tarjeta */}
        <div className="flex flex-col gap-3.5 sm:gap-4 mb-7">
          {padrinos.map((group) => (
            <div
              key={group.id}
              className={`flex flex-col gap-0.5 text-center w-full sm:w-[58%] ${
                group.align === 'left'
                  ? 'sm:self-start'
                  : 'sm:self-end'
              } print:w-[58%] ${
                group.align === 'left' ? 'print:self-start' : 'print:self-end'
              }`}
            >
              <h3 className="font-sans text-xs sm:text-[15px] font-extrabold tracking-[0.03em] text-[#2b4339]">
                {group.role}
              </h3>
              {group.names.map((person) => (
                <p
                  key={person}
                  className="text-xs sm:text-[15px] text-[#364b41] font-medium leading-snug"
                >
                  {person}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Pie de fecha y hora */}
        <footer className="mt-2 pl-20 sm:pl-14 flex flex-col items-center gap-1">
          <div className="font-sans text-xs sm:text-[15px] font-bold tracking-[0.14em] text-[#4f5f56]">
            {footerDate.month}
          </div>
          <div className="font-serif text-lg sm:text-2xl font-bold tracking-[0.06em] text-[#3b4f45]">
            {footerDate.dayAndTime}
          </div>
        </footer>
      </div>

      {/* Emblema Policial en la esquina inferior izquierda */}
      <div
        className="absolute bottom-3 left-2.5 sm:bottom-4 sm:left-3.5 z-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] print:drop-shadow-none scale-75 sm:scale-100 origin-bottom-left print:scale-100"
        aria-hidden="true"
      >
        <PoliceCrest size={136} />
      </div>

      {/* Esquina geométrica inferior izquierda (Verde policial y Dorado) */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-[66%] h-20 sm:h-24"
        viewBox="0 0 380 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,35 280,110 0,110" fill="#d9be7a" opacity="0.88" />
        <polygon points="0,58 240,110 0,110" fill="#214d3c" />
        <line x1="0" y1="45" x2="255" y2="108" stroke="#d4af37" strokeWidth="3" />
      </svg>
    </article>
  )
}
