"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToExplore = () => {
    document.getElementById("audio-player")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-white pt-16 pb-32 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-10">
            <div className="mb-8">
              <svg
                fill="currentColor"
                className="text-primary"
                width="64px"
                height="64px"
                viewBox="-5.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.688 9.656v10.906c-0.469-0.125-0.969-0.219-1.406-0.219-1 0-2.031 0.344-2.875 0.906s-1.406 1.469-1.406 2.531c0 1.125 0.563 1.969 1.406 2.531s1.875 0.875 2.875 0.875c0.938 0 2-0.313 2.844-0.875s1.375-1.406 1.375-2.531v-11.438l9.531-2.719v7.531c-0.438-0.125-0.969-0.188-1.438-0.188-0.969 0-2.031 0.281-2.875 0.844s-1.375 1.469-1.375 2.531c0 1.125 0.531 2 1.375 2.531 0.844 0.563 1.906 0.906 2.875 0.906 0.938 0 2.031-0.344 2.875-0.906 0.875-0.531 1.406-1.406 1.406-2.531v-14.406c0-0.688-0.469-1.156-1.156-1.156-0.063 0-0.438 0.125-1.031 0.281-1.25 0.344-3.125 0.875-5.25 1.5-1.094 0.281-2.063 0.594-3.031 0.844-0.938 0.281-1.75 0.563-2.469 0.75-0.75 0.219-1.219 0.344-1.406 0.406-0.5 0.156-0.844 0.594-0.844 1.094z"></path>
              </svg>
            </div>

            <div className="space-y-6">
              <h1
                className="text-7xl lg:text-8xl font-black leading-[0.95] text-balance tracking-tight"
                style={{ color: "#0F051C" }}
              >
                Plataforma Interativa de Áudio Digital
              </h1>
              <p className="text-xl font-normal leading-relaxed max-w-xl" style={{ color: "rgba(15, 5, 28, 0.7)" }}>
                Experimente a reprodução de MP3 e MIDI personalizável e aprenda sobre áudio digital de forma interativa,
                incluindo um pequeno quiz!
              </p>
            </div>

            <Button
              onClick={scrollToExplore}
              size="lg"
              className="text-lg px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
            >
              Explorar
            </Button>
          </div>

          {/* Right side - Piano image with hover animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group transition-transform hover:translate-y-[-10px] duration-500 ease-out">
              <img
                src="/images/image.png"
                alt="Teclado MIDI - Áudio Digital"
                className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
