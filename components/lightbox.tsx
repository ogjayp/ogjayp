"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface LightboxProps {
  images: LightboxImage[]
  initialIndex: number
  onClose: () => void
  weddingTitle?: string
  weddingLocation?: string
}

export default function Lightbox({ images, initialIndex, onClose, weddingTitle, weddingLocation }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }

    document.addEventListener("keydown", handleKeyDown)
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Header with wedding info */}
      <div className="absolute top-0 left-0 right-0 z-10 p-3 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white">
            {weddingTitle && <h3 className="text-base font-medium leading-tight">{weddingTitle}</h3>}
            {weddingLocation && <p className="text-xs opacity-80">{weddingLocation}</p>}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8" onClick={onClose}>
              <X className="w-5 h-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12"
        onClick={handlePrevious}
      >
        <ChevronLeft className="w-8 h-8" />
        <span className="sr-only">Previous</span>
      </Button>

      {/* Main image */}
      <div className="relative w-full max-w-5xl h-[80vh] mx-4">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
        
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12"
        onClick={handleNext}
      >
        <ChevronRight className="w-8 h-8" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Thumbnail navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-3 px-4 overflow-x-auto">
        <div className="flex gap-2 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative h-16 w-24 rounded overflow-hidden transition-all ${
                index === currentIndex ? "ring-2 ring-white scale-105" : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

