"use client"

export function TutorialSection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-black mb-8 text-black">Como Funciona o Site</h2>
        <p className="text-xl text-black/70 mb-16 max-w-3xl leading-relaxed">
          Assista ao tutorial completo para aprender a usar todas as funcionalidades da plataforma
        </p>

        <div className="relative rounded-2xl overflow-hidden border-2 border-black bg-black aspect-video max-w-5xl mx-auto">
          <video controls className="w-full h-full" preload="metadata">
            <source src="/images/tutorial.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
    </section>
  )
}
