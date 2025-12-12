"use client"

import { Settings, Zap, Lock, Share2 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Settings,
      title: "Integração Total",
      description: "Todos os tipos de mídias em um único sistema integrado",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Processamento rápido e eficiente de mídia digital",
    },
    {
      icon: Lock,
      title: "Seguro",
      description: "Proteção de direitos autorais e autenticação segura",
    },
    {
      icon: Share2,
      title: "Colaborativo",
      description: "Compartilhe e colabore em projetos em tempo real",
    },
  ]

  return (
    <section className="bg-secondary/5 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">Recursos Principais</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Tudo que você precisa para criar projetos multimedia profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
