"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2 } from "lucide-react"

interface MusicPlayerProps {
  previewUrl: string
  trackName: string
  artists: string
  albumName: string
}

export function MusicPlayer({ previewUrl, trackName, artists, albumName }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      audioRef.current.currentTime = percent * duration
    }
  }

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="bg-muted border border-foreground/10 p-4 rounded-sm space-y-3">
      <audio ref={audioRef} src={previewUrl} />

      <div className="space-y-1">
        <p className="text-xs font-semibold tracking-wide uppercase opacity-70">{artists}</p>
        <h4 className="text-sm font-bold leading-tight">{trackName}</h4>
        <p className="text-xs opacity-60">{albumName}</p>
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <div
          className="w-full h-1 bg-foreground/10 cursor-pointer hover:bg-foreground/20 transition-colors"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-foreground transition-all"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs opacity-60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={togglePlayPause}
          className="bg-foreground text-background px-3 py-2 rounded-sm hover:opacity-80 transition-opacity flex items-center gap-2 font-bold text-sm"
        >
          {isPlaying ? (
            <>
              <Pause size={16} />
              pause
            </>
          ) : (
            <>
              <Play size={16} />
              play
            </>
          )}
        </button>
        <Volume2 size={18} className="opacity-60" />
      </div>
    </div>
  )
}
