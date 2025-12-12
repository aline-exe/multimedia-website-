"use client"

import { useState } from "react"

export function InteractiveDemo() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-black">Demo Interativo</h2>
              <p className="text-foreground/70 leading-relaxed">
                Teste nosso sistema multimedia em tempo real. Veja como todos os tipos de mídia funcionam juntos de
                forma harmoniosa.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-full bg-primary text-primary-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
              >
                {playing ? "⏸ Pausar" : "▶ Iniciar Demo"}
              </button>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 flex items-center justify-center h-80">
            {playing && (
              <div className="flex items-end justify-center gap-2 h-40 w-full">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-accent rounded-full waveform-bar"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      height: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
              </div>
            )}
            {!playing && (
              <div className="text-center space-y-4">
                <div className="text-6xl">🎵</div>
                <p className="text-foreground/60 font-medium">Clique em "Iniciar Demo" para começar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
