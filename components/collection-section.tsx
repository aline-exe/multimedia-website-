"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "@/components/icons"
import { useState, useRef } from "react"

const DiamondIcon = () => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      fillRule="evenodd"
      d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"
    />
  </svg>
)

const PlayIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
    />
  </svg>
)

const PauseIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
    />
  </svg>
)

const UploadIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
    />
    <path
      fillRule="evenodd"
      d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 0 1-.708-.708l3-3z"
    />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
    />
    <path
      fillRule="evenodd"
      d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 0 0-.708.708l3 3z"
    />
  </svg>
)

export function CollectionSection() {
  const remixes = [
    {
      id: 1,
      name: "Remix 1",
      format: "MP3",
      description: "Remix original de alta qualidade",
      audioSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/remix1-rs6JBqJNAFpZN3bf83BweJ07Cxtbbo.mp3",
    },
    {
      id: 2,
      name: "Remix 2",
      format: "MP3",
      description: "Remix criativo com elementos únicos",
      audioSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/remix1-rs6JBqJNAFpZN3bf83BweJ07Cxtbbo.mp3", // Updated to use same audio file as Remix 1
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingId, setPlayingId] = useState<number | null>(null)
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({})

  const handlePlayPause = (id: number) => {
    const audio = audioRefs.current[id]
    if (!audio) return

    if (playingId === id) {
      audio.pause()
      setPlayingId(null)
    } else {
      // Pause any currently playing audio
      if (playingId !== null) {
        audioRefs.current[playingId]?.pause()
      }
      audio.play()
      setPlayingId(id)
    }
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? remixes.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === remixes.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-32 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <DiamondIcon />
            <h3 className="text-5xl lg:text-6xl font-black" style={{ color: "#0F051C" }}>
              Remixes
            </h3>
          </div>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: "rgba(15, 5, 28, 0.7)" }}>
            Aproveite nossos remixes originais de músicas
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {remixes.map((item, index) => (
                <Card
                  key={item.id}
                  className={`p-8 border-2 rounded-2xl bg-white transition-all ${
                    index === currentIndex ? "ring-4 scale-105" : "opacity-60"
                  }`}
                  style={{
                    borderColor: "#0F051C",
                    ...(index === currentIndex && { boxShadow: "0 0 0 4px rgba(15, 5, 28, 0.2)" }),
                  }}
                >
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#0F051C" }}>
                    {item.name}
                  </h4>
                  <span
                    className="inline-block px-3 py-1 text-white text-sm font-bold rounded mb-4"
                    style={{ backgroundColor: "#0F051C" }}
                  >
                    {item.format}
                  </span>
                  <p className="mb-6 leading-relaxed text-sm" style={{ color: "rgba(15, 5, 28, 0.7)" }}>
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-8">
                    <div className="flex justify-center">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground border-0"
                        onClick={() => handlePlayPause(item.id)}
                      >
                        {playingId === item.id ? <PauseIcon /> : <PlayIcon />}
                      </Button>
                    </div>

                    <Button
                      variant="outline"
                      className="border-2 bg-transparent"
                      style={{ borderColor: "#0F051C", color: "#0F051C" }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(15, 5, 28, 0.05)"
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                      }}
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = item.audioSrc
                        link.download = `${item.name}.mp3`
                        link.click()
                      }}
                    >
                      <DownloadIcon />
                      <span className="ml-2">Download de Arquivo</span>
                    </Button>
                  </div>

                  <audio
                    ref={(el) => (audioRefs.current[item.id] = el)}
                    src={item.audioSrc}
                    onEnded={() => setPlayingId(null)}
                  />
                </Card>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="border-2 bg-transparent"
                style={{ borderColor: "#0F051C", color: "#0F051C" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(15, 5, 28, 0.05)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
                onClick={handlePrevious}
              >
                <ChevronLeft />
              </Button>
              <div className="flex items-center gap-2">
                {remixes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="border-2 bg-transparent"
                style={{ borderColor: "#0F051C", color: "#0F051C" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(15, 5, 28, 0.05)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
                onClick={handleNext}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#0F051C" }}>
            O que são remixes?
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(15, 5, 28, 0.7)" }}>
            Remixes são versões recriadas de uma música, usando elementos do original com novos arranjos, batidas e
            efeitos. Em resumo: a mesma música, com outra vibe.
          </p>
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
