// Reproductor de la marcha policial "Jinetes en el Cielo" (archivo real en /jinetes-en-el-cielo.mp3)

const BACKGROUND_VOLUME = 0.015 // Volumen ultra suave de fondo (~1.5%)

class CeremonialAudioPlayer {
  constructor() {
    this.audio = null
    this.isPlaying = false
  }

  initAudio() {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio('/jinetes-en-el-cielo.mp3')
      this.audio.loop = true
      this.audio.volume = BACKGROUND_VOLUME
      this.audio.preload = 'auto'

      this.audio.addEventListener('play', () => {
        this.isPlaying = true
      })
      this.audio.addEventListener('pause', () => {
        this.isPlaying = false
      })
      this.audio.addEventListener('ended', () => {
        this.isPlaying = false
      })
    }
    if (this.audio) {
      this.audio.volume = BACKGROUND_VOLUME
    }
  }

  async start() {
    this.initAudio()
    if (!this.audio) return false
    this.audio.volume = BACKGROUND_VOLUME
    try {
      await this.audio.play()
      this.isPlaying = true
      return true
    } catch {
      this.isPlaying = false
      return false
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause()
    }
    this.isPlaying = false
  }

  async toggle() {
    this.initAudio()
    if (!this.audio) return false
    this.audio.volume = BACKGROUND_VOLUME
    if (!this.audio.paused) {
      this.stop()
      return false
    }
    return await this.start()
  }
}

export const ceremonialMusic = new CeremonialAudioPlayer()
