"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useRef, useEffect } from "react"
import * as Tone from "tone"

const UploadIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
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

const RemoveIcon = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    className="bi bi-x-circle"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path
      fillRule="evenodd"
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
)

export function AudioPlayerSection() {
  const [isMp3Playing, setIsMp3Playing] = useState(false)
  const [isMidiPlaying, setIsMidiPlaying] = useState(false)
  const [currentMp3Track, setCurrentMp3Track] = useState(0)
  const [currentMidiTrack, setCurrentMidiTrack] = useState(0)

  const [mp3Tracks, setMp3Tracks] = useState([{ id: 1, name: "Remix 1", duration: "03:43", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/remix1-rs6JBqJNAFpZN3bf83BweJ07Cxtbbo.mp3" }])

  const [midiTracks, setMidiTracks] = useState([
    { id: 1, name: "London Bridge (MIDI)", duration: "0:30", src: "/multimedia/midi/london bridge muti.mid" },
  ])

  const mp3AudioRef = useRef<HTMLAudioElement>(null)
  const synthRef = useRef<Tone.PolySynth | null>(null)
  const midiPartRef = useRef<Tone.Part | null>(null)
  const mp3FileInputRef = useRef<HTMLInputElement>(null)
  const midiFileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    synthRef.current = new Tone.PolySynth(Tone.Synth).toDestination()

    return () => {
      if (synthRef.current) {
        synthRef.current.dispose()
      }
      if (midiPartRef.current) {
        midiPartRef.current.dispose()
      }
    }
  }, [])

  const removeMp3Track = (index: number) => {
    if (currentMp3Track === index && isMp3Playing) {
      stopMp3()
    }
    const newTracks = mp3Tracks.filter((_, i) => i !== index)
    setMp3Tracks(newTracks)
    if (currentMp3Track >= newTracks.length) {
      setCurrentMp3Track(Math.max(0, newTracks.length - 1))
    }
  }

  const removeMidiTrack = (index: number) => {
    if (currentMidiTrack === index && isMidiPlaying) {
      stopMidi()
    }
    const newTracks = midiTracks.filter((_, i) => i !== index)
    setMidiTracks(newTracks)
    if (currentMidiTrack >= newTracks.length) {
      setCurrentMidiTrack(Math.max(0, newTracks.length - 1))
    }
  }

  const toggleMp3Play = () => {
    if (mp3AudioRef.current && mp3Tracks[currentMp3Track]?.src) {
      if (isMp3Playing) {
        mp3AudioRef.current.pause()
      } else {
        mp3AudioRef.current.play()
      }
      setIsMp3Playing(!isMp3Playing)
    }
  }

  const stopMp3 = () => {
    if (mp3AudioRef.current) {
      mp3AudioRef.current.pause()
      mp3AudioRef.current.currentTime = 0
      setIsMp3Playing(false)
    }
  }

  const playMp3Track = (index: number) => {
    if (!mp3Tracks[index]?.src) return
    setCurrentMp3Track(index)
    if (mp3AudioRef.current) {
      mp3AudioRef.current.load()
      mp3AudioRef.current.play()
      setIsMp3Playing(true)
    }
  }

  const loadMidiFile = async (url: string) => {
    try {
      const midi = await Tone.Transport.load(url)
      console.log("MIDI file loaded:", url)
      return midi
    } catch (error) {
      console.error("Error loading MIDI file:", error)
      return createDemoMidiSequence()
    }
  }

  const createDemoMidiSequence = () => {
    const notes = [
      { time: 0, note: "G4", duration: "4n" },
      { time: "0:2", note: "A4", duration: "4n" },
      { time: "0:3", note: "G4", duration: "4n" },
      { time: "1:0", note: "F4", duration: "4n" },
      { time: "1:1", note: "E4", duration: "4n" },
      { time: "1:2", note: "F4", duration: "4n" },
      { time: "1:3", note: "G4", duration: "2n" },
      { time: "2:2", note: "D4", duration: "4n" },
      { time: "2:3", note: "E4", duration: "4n" },
      { time: "3:0", note: "F4", duration: "2n" },
    ]
    return notes
  }

  const toggleMidiPlay = async () => {
    if (!synthRef.current) return

    if (isMidiPlaying) {
      Tone.Transport.pause()
      setIsMidiPlaying(false)
    } else {
      await Tone.start()

      if (!midiPartRef.current) {
        const notes = await createDemoMidiSequence()
        midiPartRef.current = new Tone.Part((time, note) => {
          synthRef.current?.triggerAttackRelease(note.note, note.duration, time)
        }, notes)

        midiPartRef.current.loop = true
        midiPartRef.current.loopEnd = "4m"
        midiPartRef.current.start(0)
      }

      Tone.Transport.start()
      setIsMidiPlaying(true)
    }
  }

  const stopMidi = () => {
    Tone.Transport.stop()
    if (midiPartRef.current) {
      midiPartRef.current.stop()
      midiPartRef.current.dispose()
      midiPartRef.current = null
    }
    setIsMidiPlaying(false)
  }

  const playMidiTrack = async (index: number) => {
    if (!midiTracks[index]?.src) return

    if (isMidiPlaying) {
      stopMidi()
    }

    setCurrentMidiTrack(index)

    await toggleMidiPlay()
  }

  const handleMp3FileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file && file.type === "audio/mpeg") {
      const url = URL.createObjectURL(file)

      const newTrack = {
        id: Date.now(),
        name: file.name.replace(".mp3", ""),
        duration: "0:00",
        src: url,
      }

      setMp3Tracks((prev) => {
        const updatedTracks = [...prev, newTrack]
        return updatedTracks
      })

      const audioElement = new Audio(url)
      audioElement.addEventListener("loadedmetadata", () => {
        const duration = Math.floor(audioElement.duration)
        const minutes = Math.floor(duration / 60)
        const seconds = duration % 60
        const formattedDuration = `${minutes}:${seconds.toString().padStart(2, "0")}`

        setMp3Tracks((prev) =>
          prev.map((track) => (track.id === newTrack.id ? { ...track, duration: formattedDuration } : track)),
        )

        setTimeout(() => {
          const newIndex = mp3Tracks.length - 1
          setCurrentMp3Track(newIndex)
          setTimeout(() => {
            if (mp3AudioRef.current) {
              mp3AudioRef.current.load()
              mp3AudioRef.current
                .play()
                .then(() => {
                  setIsMp3Playing(true)
                })
                .catch((err) => {
                  console.error("Play error:", err.message)
                })
            }
          }, 200)
        }, 100)
      })
    }
    event.target.value = ""
  }

  const handleMidiFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file && (file.name.endsWith(".mid") || file.name.endsWith(".midi"))) {
      const url = URL.createObjectURL(file)

      const newTrack = {
        id: Date.now(),
        name: file.name.replace(/\.(mid|midi)$/, ""),
        duration: "0:30",
        src: url,
      }

      setMidiTracks((prev) => {
        const updatedTracks = [...prev, newTrack]
        const newIndex = updatedTracks.length - 1

        setTimeout(() => {
          playMidiTrack(newIndex)
        }, 100)

        return updatedTracks
      })
    }
    event.target.value = ""
  }

  return (
    <section id="audio-player" className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-black mb-8" style={{ color: "#0F051C" }}>
          Players de Áudio
        </h2>

        <p className="text-xl mb-20 max-w-4xl" style={{ color: "rgba(15, 5, 28, 0.7)" }}>
          Arraste arquivos .MP3 ou .MIDI até os players para tocá-los com rapidez
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* MP3 Player */}
          <Card className="p-10 border-2 rounded-2xl bg-white" style={{ borderColor: "#0F051C" }}>
            <h3 className="text-3xl font-bold mb-8" style={{ color: "#0F051C" }}>
              Player MP3
            </h3>

            <audio ref={mp3AudioRef} src={mp3Tracks[currentMp3Track]?.src || undefined} />

            <div className="mb-8 h-32 bg-gray-100 rounded-lg flex items-end justify-center gap-1 p-4">
              {[...Array(50)].map((_, i) => {
                const animationDuration = `${0.5 + Math.random() * 0.5}s`
                const animationName = isMp3Playing ? "waveform" : "none"

                return (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full transition-all duration-300"
                    style={{
                      height: `${Math.random() * 100}%`,
                      animationName: animationName,
                      animationDuration: animationDuration,
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                      animationDelay: `${i * 0.02}s`,
                    }}
                  />
                )
              })}
            </div>

            <div className="flex gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
                onClick={toggleMp3Play}
              >
                {isMp3Playing ? <PauseIcon /> : <PlayIcon />}
              </Button>
            </div>

            <div className="space-y-3 mb-6">
              {mp3Tracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors group ${
                    currentMp3Track === index && isMp3Playing ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex-1 cursor-pointer" onClick={() => playMp3Track(index)}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium" style={{ color: "#0F051C" }}>
                        {track.name}
                      </span>
                      <span style={{ color: "rgba(15, 5, 28, 0.6)" }}>{track.duration}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeMp3Track(index)
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                </div>
              ))}
            </div>

            <input
              ref={mp3FileInputRef}
              type="file"
              accept=".mp3,audio/mpeg"
              className="hidden"
              onChange={handleMp3FileUpload}
            />
            <Button
              variant="outline"
              className="w-full border-2 bg-transparent"
              style={{ borderColor: "#0F051C", color: "#0F051C" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(15, 5, 28, 0.05)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
              onClick={() => mp3FileInputRef.current?.click()}
            >
              <UploadIcon />
              <span className="ml-2">Upload de Arquivo</span>
            </Button>
          </Card>

          {/* MIDI Player */}
          <Card className="p-10 border-2 rounded-2xl bg-white" style={{ borderColor: "#0F051C" }}>
            <h3 className="text-3xl font-bold mb-8" style={{ color: "#0F051C" }}>
              Player MIDI
            </h3>

            <div className="mb-8 h-32 bg-gray-100 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center">
                {[...Array(8)].map((_, i) => {
                  const animationDuration = `${1 + Math.random()}s`
                  const animationName = isMidiPlaying ? "slide" : "none"

                  return (
                    <div
                      key={i}
                      className="h-2 bg-primary rounded-full mx-1 transition-all"
                      style={{
                        width: `${20 + Math.random() * 60}px`,
                        marginTop: `${i * 12}px`,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        animationTimingFunction: "linear",
                        animationIterationCount: "infinite",
                      }}
                    />
                  )
                })}
              </div>
            </div>

            <div className="flex gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
                onClick={toggleMidiPlay}
              >
                {isMidiPlaying ? <PauseIcon /> : <PlayIcon />}
              </Button>
            </div>

            <div className="space-y-3 mb-6">
              {midiTracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors group ${
                    currentMidiTrack === index && isMidiPlaying ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex-1 cursor-pointer" onClick={() => playMidiTrack(index)}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium" style={{ color: "#0F051C" }}>
                        {track.name}
                      </span>
                      <span style={{ color: "rgba(15, 5, 28, 0.6)" }}>{track.duration}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeMidiTrack(index)
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                </div>
              ))}
            </div>

            <input
              ref={midiFileInputRef}
              type="file"
              accept=".mid,.midi"
              className="hidden"
              onChange={handleMidiFileUpload}
            />
            <Button
              variant="outline"
              className="w-full border-2 bg-transparent"
              style={{ borderColor: "#0F051C", color: "#0F051C" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(15, 5, 28, 0.05)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
              onClick={() => midiFileInputRef.current?.click()}
            >
              <UploadIcon />
              <span className="ml-2">Upload de Arquivo</span>
            </Button>
          </Card>
        </div>

        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#0F051C" }}>
            Qual a diferença entre MP3 e MIDI?
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(15, 5, 28, 0.7)" }}>
            MP3 é áudio gravado e comprimido, pronto para ouvir. MIDI não é som: são instruções de notas que dependem de
            um instrumento virtual para tocar. Em resumo: MP3 é o som; MIDI é a partitura.
          </p>
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
