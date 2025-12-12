import { AudioPlayerSection } from "@/components/audio-player-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Players de Áudio - Plataforma Interativa",
  description: "Arraste arquivos .MP3 ou .MIDI até os players para tocá-los com rapidez",
}

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <AudioPlayerSection />
      <Footer />
    </main>
  )
}
