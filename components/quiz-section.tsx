"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Check } from "lucide-react"

interface Question {
  question: string
  answers: string[]
  correct: number
}

interface UserAnswer {
  questionIndex: number
  selectedAnswer: number
  correctAnswer: number
  isCorrect: boolean
}

// random selection of 5 questions, and accuracy calculation
export function QuizSection() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])

  const allQuestions: Question[] = [
    {
      question: "O que é mídia digital?",
      answers: [
        "Qualquer conteúdo físico armazenado em papel",
        "Conteúdo criado, gravado ou editado como dados digitais",
        "Apenas vídeos e músicas",
        "Apenas arquivos MP3",
      ],
      correct: 1,
    },
    {
      question: "Como a mídia digital funciona?",
      answers: [
        "Transformando sinais físicos em números",
        "Apenas copiando arquivos",
        "Convertendo texto em imagem",
        "Através de ondas analógicas",
      ],
      correct: 0,
    },
    {
      question: "O que é áudio digital?",
      answers: [
        "Som capturado por amostragem e quantização",
        "Som gravado em fita cassete",
        "Imagem transformada em som",
        "Música em formato MIDI",
      ],
      correct: 0,
    },
    {
      question: "MP3 representa:",
      answers: ["Áudio sem compressão", "Áudio comprimido", "Imagem matricial", "Vídeo digital"],
      correct: 1,
    },
    {
      question: "WAV representa:",
      answers: ["Áudio comprimido com perda", "Áudio sem compressão", "Arquivo MIDI", "Formato de vídeo"],
      correct: 1,
    },
    {
      question: "O que é MIDI?",
      answers: [
        "Um tipo de áudio comprimido",
        "Uma imagem vetorial",
        "Instruções musicais, não áudio digitalizado",
        "Formato de vídeo",
      ],
      correct: 2,
    },
    {
      question: "O que é imagem matricial?",
      answers: [
        "Uma imagem feita de pixels",
        "Uma imagem feita de vetores matemáticos",
        "Uma animação digital",
        "Um arquivo de áudio",
      ],
      correct: 0,
    },
    {
      question: "O que é imagem vetorial?",
      answers: [
        "Uma foto capturada por celular",
        "Imagem feita com formas matemáticas, ideal para logos e animações",
        "Um vídeo em MP4",
        "Áudio em alta qualidade",
      ],
      correct: 1,
    },
    {
      question: "Vídeo digital é:",
      answers: [
        "Uma sequência de imagens + áudio sincronizado",
        "Apenas uma foto animada",
        "Uma música em alta qualidade",
        "Um tipo de documento de texto",
      ],
      correct: 0,
    },
    {
      question: "O que é amostragem?",
      answers: [
        "Processo de converter imagem em áudio",
        "Processo de capturar pedaços do sinal analógico em intervalos regulares",
        "Desenhar vetores digitais",
        "Sincronizar vídeo e áudio",
      ],
      correct: 1,
    },
    {
      question: "O que é quantização?",
      answers: [
        "Aplicar efeitos em uma imagem",
        "Atribuir valores discretos às amostras capturadas",
        "Reduzir o tamanho do arquivo MP3",
        "Criar uma animação em SVG",
      ],
      correct: 1,
    },
    {
      question: "O que são formatos de áudio?",
      answers: [
        "Tipos diferentes de compressão e qualidade, como MP3, WAV e FLAC",
        "Tipos de vetores",
        "Tipos de pixels",
        "Tipos de vídeos",
      ],
      correct: 0,
    },
    {
      question: "O que são aplicações multimídia?",
      answers: [
        "Integração de áudio, vídeo, imagens e texto",
        "Apenas edição de vídeo",
        "Apenas fotos digitais",
        "Só arquivos MIDI",
      ],
      correct: 0,
    },
    {
      question: "O que é síntese sonora?",
      answers: [
        "Criação de som usando processos eletrônicos e algoritmos digitais",
        "Captura de áudio com microfone",
        "Compressão de vídeo",
        "Renderização de imagem 3D",
      ],
      correct: 0,
    },
    {
      question: "O que animação digital pode usar?",
      answers: ["CSS, SVG, quadros ou visualizadores dinâmicos", "Apenas arquivos PDF", "Somente MP3", "Apenas WAV"],
      correct: 0,
    },
  ]

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    setQuizQuestions(shuffled.slice(0, 5))
  }, [])

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    })

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const answers: UserAnswer[] = []
      let correctCount = 0

      quizQuestions.forEach((q, idx) => {
        const userAnswer = idx === currentQuestion ? answerIndex : selectedAnswers[idx]
        const isCorrect = userAnswer === q.correct
        if (isCorrect) correctCount++

        answers.push({
          questionIndex: idx,
          selectedAnswer: userAnswer,
          correctAnswer: q.correct,
          isCorrect,
        })
      })

      const percentage = Math.round((correctCount / quizQuestions.length) * 100)
      setAccuracy(percentage)
      setUserAnswers(answers)
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResult(false)
    setQuizStarted(true)
    setUserAnswers([])
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    setQuizQuestions(shuffled.slice(0, 5))
  }

  const exitQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResult(false)
    setQuizStarted(false)
    setUserAnswers([])
  }

  const startQuiz = () => {
    setQuizStarted(true)
  }

  if (quizQuestions.length === 0) {
    return null
  }

  if (showResult) {
    const correctAnswers = userAnswers.filter((a) => a.isCorrect).length

    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header with exit button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-black">Resultados do Quiz</h2>
              <Button
                onClick={exitQuiz}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-foreground/10"
                aria-label="Sair do quiz"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Score Summary */}
            <div className="bg-primary/10 rounded-2xl p-8 mb-8 text-center space-y-4">
              <p className="text-6xl font-black text-primary">{accuracy}%</p>
              <p className="text-xl text-foreground/70">
                Você acertou <span className="font-bold text-primary">{correctAnswers}</span> de{" "}
                <span className="font-bold">{quizQuestions.length}</span> perguntas
              </p>
              {accuracy >= 80 && (
                <p className="text-lg font-semibold text-green-600">
                  Excelente desempenho! Você é um expert em multimídia!
                </p>
              )}
              {accuracy >= 60 && accuracy < 80 && (
                <p className="text-lg font-semibold text-blue-600">
                  Muito bom! Você tem sólido conhecimento em multimídia.
                </p>
              )}
              {accuracy >= 40 && accuracy < 60 && (
                <p className="text-lg font-semibold text-yellow-600">
                  Bom começo! Considere aprofundar seus conhecimentos.
                </p>
              )}
              {accuracy < 40 && (
                <p className="text-lg font-semibold text-orange-600">Não desista! A prática leva à perfeição.</p>
              )}
            </div>

            {/* Detailed Results */}
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-bold">Revisão das Respostas</h3>
              {quizQuestions.map((question, idx) => {
                const userAnswer = userAnswers[idx]
                return (
                  <Card
                    key={idx}
                    className={`p-6 border-2 rounded-2xl ${
                      userAnswer.isCorrect
                        ? "border-green-500/30 bg-green-50/50 dark:bg-green-950/20"
                        : "border-red-500/30 bg-red-50/50 dark:bg-red-900/20"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          userAnswer.isCorrect ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {userAnswer.isCorrect ? (
                          <Check className="w-5 h-5 text-white" />
                        ) : (
                          <X className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-3">{question.question}</h4>
                        <div className="space-y-2">
                          {question.answers.map((answer, answerIdx) => {
                            const isUserAnswer = answerIdx === userAnswer.selectedAnswer
                            const isCorrectAnswer = answerIdx === userAnswer.correctAnswer
                            const showAsCorrect = isCorrectAnswer && !userAnswer.isCorrect

                            return (
                              <div
                                key={answerIdx}
                                className={`p-3 rounded-lg border ${
                                  isUserAnswer && !userAnswer.isCorrect
                                    ? "border-red-500 bg-red-100 dark:bg-red-900/20"
                                    : showAsCorrect
                                      ? "border-green-500 bg-green-100 dark:bg-green-900/20"
                                      : "border-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-sm">{String.fromCharCode(97 + answerIdx)})</span>
                                  <span className="text-sm">{answer}</span>
                                  {isUserAnswer && !userAnswer.isCorrect && (
                                    <span className="ml-auto text-red-600 text-xs font-semibold">Sua resposta</span>
                                  )}
                                  {showAsCorrect && (
                                    <span className="ml-auto text-green-600 text-xs font-semibold">Correta</span>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={resetQuiz}
                className="flex-1 bg-primary text-primary-foreground px-8 py-6 font-bold text-lg rounded-xl hover:opacity-90 transition-opacity"
              >
                Refazer Quiz
              </Button>
              <Button
                onClick={exitQuiz}
                variant="outline"
                className="flex-1 border-2 px-8 py-6 font-bold text-lg rounded-xl hover:bg-foreground/5 transition-colors bg-transparent"
              >
                Sair do Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!quizStarted) {
    return (
      <section className="bg-background py-32 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/images/musica.gif"
                alt="Musical notes animation"
                className="w-24 h-24 object-contain animate-reverse-loop"
              />
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">Teste seus conhecimentos</h2>

            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Depois de ver os conceitos e formatos multimídia, teste seus conhecimentos no nosso quiz educacional! São
              apenas 5 perguntas sobre áudio, MIDI e formatos diferentes. Vamos lá!
            </p>

            <Button
              size="lg"
              className="text-lg px-12 py-6 bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-bold"
              onClick={startQuiz}
            >
              Iniciar Quiz
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto animate-in fade-in duration-300">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-3xl w-full">
          {/* Header with progress and exit */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-bold text-foreground/60">
              Pergunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {quizQuestions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx < currentQuestion
                        ? "bg-primary"
                        : idx === currentQuestion
                          ? "bg-primary/50"
                          : "bg-foreground/10"
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={exitQuiz}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-foreground/10"
                aria-label="Sair do quiz"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Question Card */}
          <Card className="p-8 border-2 border-foreground/10 rounded-2xl bg-card shadow-lg animate-in slide-in-from-right duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 leading-relaxed">{question.question}</h3>

            <div className="space-y-4">
              {question.answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-left p-6 border-2 border-foreground/10 rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-lg flex-shrink-0 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:border-primary group-hover:text-primary">
                      {String.fromCharCode(97 + idx)}
                    </span>
                    <span className="text-base leading-relaxed">{answer}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
