"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ConceptModal } from "./concept-modal"

const SamplingIcon = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 16 16"
    className="text-primary"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
    />
  </svg>
)

const AudioFormatIcon = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 16 16"
    className="text-primary"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
    />
    <path
      fillRule="evenodd"
      d="M10.304 3.13a1 1 0 0 1 1.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3z"
    />
  </svg>
)

const MidiIcon = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 16 16"
    className="text-primary"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
    <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
    <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
    <path
      fillRule="evenodd"
      d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
    />
  </svg>
)

const QuantizacaoIcon = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 16 16"
    className="bi bi-bar-chart text-primary"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
    />
  </svg>
)

const AplicacoesMultimidiaIcon = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 16 16"
    className="bi bi-file-play text-primary"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
    />
    <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
  </svg>
)

const SinteseSonoraIcon = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 16 16"
    className="bi bi-soundwave text-primary"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"
    />
  </svg>
)

export function ConceptsSection() {
  const [openModal, setOpenModal] = useState<number | null>(null)

  const concepts = [
    {
      id: 1,
      title: "Amostragem",
      description:
        "Processo de conversão de sinais analógicos em digitais através da captura de amostras em intervalos regulares",
      icon: <SamplingIcon />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-black/80 leading-relaxed">
            A amostragem é o processo fundamental de converter sinais de áudio analógicos contínuos em representações
            digitais discretas. Este processo envolve capturar &quot;instantâneos&quot; do sinal de áudio em intervalos
            regulares de tempo.
          </p>
          <h3 className="text-2xl font-bold text-black mt-8">Como funciona?</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            Imagine uma onda sonora contínua. A amostragem pega valores dessa onda em momentos específicos, como tirar
            fotos de um objeto em movimento. Quanto mais fotos (amostras) você tira por segundo, mais fiel é a
            representação do movimento original.
          </p>
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h4 className="font-bold text-lg mb-3 text-black">Taxa de Amostragem</h4>
            <p className="text-black/70 leading-relaxed">
              A taxa de amostragem determina quantas amostras são capturadas por segundo. As taxas comuns incluem:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-black/70">
              <li>
                <strong>44.1 kHz</strong> - Padrão para CDs de áudio
              </li>
              <li>
                <strong>48 kHz</strong> - Padrão para vídeo digital
              </li>
              <li>
                <strong>96 kHz / 192 kHz</strong> - Alta resolução para produção profissional
              </li>
            </ul>
          </div>
          <h3 className="text-2xl font-bold text-black mt-8">Teorema de Nyquist-Shannon</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            Para capturar fielmente um sinal, a taxa de amostragem deve ser pelo menos o dobro da frequência mais alta
            presente no sinal. Por isso, áudio de qualidade CD usa 44.1 kHz - capturando frequências até cerca de 22
            kHz, que está além da audição humana (20 Hz - 20 kHz).
          </p>
          <div className="mt-8">
            <div className="rounded-2xl overflow-hidden border border-primary/10">
              <img
                src="/images/sampling-waveform.png"
                alt="Visualização de forma de onda digital no Audacity mostrando áudio amostrado"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-black/50 text-center mt-3">
              Visualização de um sinal de áudio amostrado no Audacity, mostrando a representação digital de ondas
              sonoras
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Quantização",
      description:
        "Atribuição de valores discretos às amostras capturadas, determinando a precisão da representação digital",
      icon: <QuantizacaoIcon />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-black/80 leading-relaxed">
            A quantização é o processo de atribuir valores numéricos discretos às amostras capturadas durante a
            amostragem. É como arredondar números - cada amostra precisa ser representada por um valor digital finito.
          </p>
          <h3 className="text-2xl font-bold text-black mt-8">Profundidade de Bits</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            A profundidade de bits determina quantos valores diferentes podem ser representados. Quanto maior a
            profundidade, mais precisa é a representação do sinal original.
          </p>
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h4 className="font-bold text-lg mb-3 text-black">Profundidades Comuns</h4>
            <ul className="list-disc list-inside space-y-2 text-black/70">
              <li>
                <strong>16 bits</strong> - Qualidade CD (65,536 níveis possíveis)
              </li>
              <li>
                <strong>24 bits</strong> - Produção profissional (16.7 milhões de níveis)
              </li>
              <li>
                <strong>32 bits float</strong> - Processamento de estúdio (alcance dinâmico praticamente ilimitado)
              </li>
            </ul>
          </div>
          <h3 className="text-2xl font-bold text-black mt-8">Alcance Dinâmico</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            O alcance dinâmico é a diferença entre o som mais alto e o mais baixo que pode ser representado. Cada bit
            adicional adiciona aproximadamente 6 dB ao alcance dinâmico, então 16 bits fornecem cerca de 96 dB de
            alcance dinâmico.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Formatos de Áudio",
      description: "MP3, WAV, FLAC, AAC - cada formato oferece diferentes características de compressão e qualidade",
      icon: <AudioFormatIcon />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-black/80 leading-relaxed">
            Os formatos de áudio digital variam em termos de qualidade, tamanho de arquivo e método de compressão. A
            escolha do formato depende do uso pretendido - streaming, armazenamento, produção ou distribuição.
          </p>
          <div className="grid gap-6 mt-8">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">WAV (Waveform Audio File Format)</h4>
              <p className="text-black/70 leading-relaxed mb-3">
                Formato sem compressão que armazena áudio em sua forma pura. Oferece a mais alta qualidade mas resulta
                em arquivos grandes.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Sem perda
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Alta qualidade
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Arquivos grandes
                </span>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">MP3 (MPEG Audio Layer III)</h4>
              <p className="text-black/70 leading-relaxed mb-3">
                Formato com compressão com perda que remove informações consideradas menos perceptíveis ao ouvido
                humano. Excelente para streaming e armazenamento eficiente.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Com perda</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Boa qualidade
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Arquivos pequenos
                </span>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">FLAC (Free Lossless Audio Codec)</h4>
              <p className="text-black/70 leading-relaxed mb-3">
                Compressão sem perda que reduz o tamanho do arquivo mantendo qualidade perfeita. Popular entre
                audiófilos.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Sem perda
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Alta qualidade
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Tamanho médio
                </span>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">AAC (Advanced Audio Coding)</h4>
              <p className="text-black/70 leading-relaxed mb-3">
                Sucessor do MP3 com melhor qualidade no mesmo bitrate. Usado pelo Apple Music, YouTube e plataformas de
                streaming.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Com perda</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Ótima qualidade
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Arquivos pequenos
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "MIDI",
      description: "Protocolo de comunicação que transmite informações sobre notas musicais, não áudio digitalizado",
      icon: <MidiIcon />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-black/80 leading-relaxed">
            MIDI (Musical Instrument Digital Interface) é um protocolo de comunicação que transmite informações sobre
            eventos musicais, não o áudio em si. É como uma partitura digital que diz aos instrumentos o que tocar.
          </p>
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h4 className="font-bold text-lg mb-3 text-black">O que o MIDI contém?</h4>
            <ul className="list-disc list-inside space-y-2 text-black/70">
              <li>Qual nota tocar (altura tonal)</li>
              <li>Quando começar e parar (timing)</li>
              <li>Quão forte tocar (velocidade/dinâmica)</li>
              <li>Qual instrumento usar (número do programa)</li>
              <li>Efeitos como pitch bend, modulação, etc.</li>
            </ul>
          </div>
          <h3 className="text-2xl font-bold text-black mt-8">Vantagens do MIDI</h3>
          <div className="grid gap-4 mt-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-black">Arquivos minúsculos</h4>
                <p className="text-black/70">
                  Um arquivo MIDI de uma música completa pode ter apenas alguns kilobytes, comparado a megabytes de
                  áudio.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-black">Editável</h4>
                <p className="text-black/70">
                  Você pode facilmente mudar notas, instrumentos, tempo e outras características da música.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-black">Flexível</h4>
                <p className="text-black/70">
                  A mesma sequência MIDI pode soar diferente dependendo do sintetizador ou instrumento virtual usado.
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-black mt-8">MIDI vs Áudio Digital</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            Enquanto áudio digital captura o som real, MIDI captura as instruções para criar o som. É como a diferença
            entre uma gravação de uma orquestra (áudio) e a partitura musical que a orquestra toca (MIDI).
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-primary/10">
            <img
              src="/images/midi-editor.png"
              alt="Editor MIDI mostrando interface de piano roll com notas da música London Bridge"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 text-center">
              <p className="text-sm text-black/60">
                Exemplo de editor MIDI (Audacity) mostrando a composição &quot;London Bridge&quot; em formato de piano
                roll
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Aplicações Multimídia",
      description: "Integração de áudio, vídeo, imagens e texto para criar experiências interativas e educacionais",
      icon: <AplicacoesMultimidiaIcon />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-black/80 leading-relaxed">
            Aplicações multimídia combinam diferentes tipos de mídia - texto, áudio, imagens, vídeo e animação - para
            criar experiências ricas e interativas. Esta integração é fundamental na era digital moderna.
          </p>
          <h3 className="text-2xl font-bold text-black mt-8">Áreas de Aplicação</h3>
          <div className="grid gap-6 mt-6">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Educação</h4>
              <p className="text-black/70 leading-relaxed">
                E-learning, tutoriais em vídeo, simulações interativas e cursos online que combinam texto, áudio, vídeo
                e elementos interativos para melhor retenção de conhecimento.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Entretenimento</h4>
              <p className="text-black/70 leading-relaxed">
                Jogos, streaming de música e vídeo, realidade virtual e aumentada que oferecem experiências imersivas
                combinando múltiplos elementos multimídia.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Comunicação</h4>
              <p className="text-black/70 leading-relaxed">
                Videoconferências, apresentações, webinars e redes sociais que integram texto, voz, vídeo e
                compartilhamento de tela em tempo real.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Marketing</h4>
              <p className="text-black/70 leading-relaxed">
                Conteúdo publicitário, vídeos promocionais, infográficos animados e campanhas digitais interativas que
                engajam o público.
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-black mt-8">Tecnologias Chave</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            HTML5, CSS3, JavaScript, WebGL, Web Audio API e outras tecnologias web modernas permitem criar aplicações
            multimídia sofisticadas que rodam diretamente no navegador, sem necessidade de plugins.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Síntese Sonora",
      description: "Geração de sons através de processos eletrônicos e algoritmos digitais",
      icon: <SinteseSonoraIcon />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-black/80 leading-relaxed">
            Síntese sonora é a geração eletrônica ou digital de sons a partir do zero, usando algoritmos e processamento
            de sinais. Diferente da gravação de áudio, a síntese cria sons que podem não existir na natureza.
          </p>
          <h3 className="text-2xl font-bold text-black mt-8">Tipos de Síntese</h3>
          <div className="grid gap-6 mt-6">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Síntese Subtrativa</h4>
              <p className="text-black/70 leading-relaxed">
                Começa com uma forma de onda rica (dente de serra, quadrada) e remove frequências usando filtros. Método
                clássico usado em sintetizadores analógicos.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Síntese Aditiva</h4>
              <p className="text-black/70 leading-relaxed">
                Combina múltiplos osciladores de ondas senoidais simples para criar timbres complexos. Baseada no
                teorema de Fourier.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Síntese FM (Modulação de Frequência)</h4>
              <p className="text-black/70 leading-relaxed">
                Um oscilador modula a frequência de outro, criando timbres complexos e harmônicos. Famosa pelos
                sintetizadores Yamaha DX7 dos anos 80.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Síntese Wavetable</h4>
              <p className="text-black/70 leading-relaxed">
                Usa tabelas de formas de onda pré-gravadas que podem ser percorridas e interpoladas para criar sons em
                evolução e texturas únicas.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-bold text-xl mb-3 text-black">Síntese Granular</h4>
              <p className="text-black/70 leading-relaxed">
                Divide o som em pequenos &quot;grãos&quot; (tipicamente 1-100ms) que são manipulados e reorganizados
                para criar texturas sonoras únicas e atmosféricas.
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-black mt-8">Aplicações</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            A síntese sonora é fundamental na produção musical eletrônica, design de som para filmes e jogos, criação de
            instrumentos virtuais e experimentação musical. Sintetizadores modernos frequentemente combinam múltiplos
            tipos de síntese para máxima flexibilidade criativa.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-black mb-20 text-black">Conceitos de Áudio Digital</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept) => (
            <Card
              key={concept.id}
              onClick={() => setOpenModal(concept.id)}
              className="p-8 border-2 border-black rounded-2xl bg-white hover:translate-y-[-4px] transition-transform group cursor-pointer"
            >
              <div className="w-24 h-24 mb-6">{concept.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-black">{concept.title}</h3>
              <p className="text-black/70 leading-relaxed">{concept.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {concepts.map((concept) => (
        <ConceptModal
          key={concept.id}
          isOpen={openModal === concept.id}
          onClose={() => setOpenModal(null)}
          title={concept.title}
        >
          {concept.content}
        </ConceptModal>
      ))}
    </section>
  )
}
