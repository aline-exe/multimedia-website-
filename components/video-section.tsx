export function VideoSection() {
  const educationalTopics = [
    {
      id: "digital-media",
      title: "O que é mídia digital?",
      description:
        "Mídia digital é qualquer conteúdo criado, gravado ou editado como dados. Pode ser áudio, vídeo, imagens, animações, música MIDI e tudo que existe em formato numérico. Exemplos de software podem ser Canva, Photoshop, CapCut, etc.",
    },
    {
      id: "how-works",
      title: "Como a mídia digital funciona?",
      description:
        "O computador transforma sinais físicos em números. Isso permite editar, manipular, comprimir, sincronizar e combinar diferentes mídias. Exemplos: VLC, FFmpeg.",
    },
    {
      id: "digital-audio",
      title: "Áudio digital",
      description:
        "Som capturado por amostragem e quantização. MP3 é comprimido, WAV é sem compressão, MIDI são instruções musicais, não áudio. Exemplos são WAV, MP3.",
    },
    {
      id: "digital-image",
      title: "Imagem digital",
      description:
        "Matricial = pixels (JPG/PNG). Vetorial = formas matemáticas (SVG), ideal para logos e animação. Exemplo: GIMP, Photoshop.",
    },
    {
      id: "digital-video",
      title: "Vídeo digital",
      description:
        "Sequência de imagens + áudio sincronizado. Fácil de editar, acelerar, juntar trilha sonora e exportar como MP4. Exemplos como CapCut, Figma, Inkscape, etc.",
    },
    {
      id: "digital-animation",
      title: "Animação digital",
      description:
        "Pode ser feita com CSS, SVG, quadros ou visualizadores dinâmicos. Exemplos como After Effects, efeitos com HTML, CSS e SVG, Three.js, etc.",
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl lg:text-8xl font-black mb-20 text-black text-center text-balance">
          Entenda a mídia digital
        </h1>

        <div className="mb-24 flex justify-center">
          <div className="w-full max-w-5xl">
            <video
              controls
              loop
              autoPlay
              muted
              playsInline
              className="w-full rounded-3xl shadow-2xl"
              style={{
                borderRadius: "24px",
              }}
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/202512040252-8cJnAPKPWrAW6Qc9t8phl9xRd6IQYc.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalTopics.map((topic) => (
              <div
                key={topic.id}
                className="flex flex-col gap-4 p-8 bg-white border border-black/10 rounded-2xl hover:border-black/20 transition-colors"
              >
                <h3 className="text-xl font-bold text-primary">{topic.title}</h3>
                <p className="text-black/70 leading-relaxed text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
