"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import FadeIn from "@/components/fade-in"
import Lightbox from "@/components/lightbox"
import type { WeddingCollection } from "./utils"

async function getWeddings() {
  try {
    const response = await fetch("/api/weddings")
    const data = await response.json()
    return data.weddings as WeddingCollection[]
  } catch (error) {
    console.error("Error fetching wedding data:", error)
    return []
  }
}

export default function WeddingGallery() {
  const [weddingCollections, setWeddingCollections] = useState<WeddingCollection[]>([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentWedding, setCurrentWedding] = useState<number | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    async function loadWeddings() {
      const weddings = await getWeddings()
      setWeddingCollections(weddings)
      setLoading(false)
    }

    loadWeddings()
  }, [])

  const openLightbox = (weddingIndex: number) => {
    setCurrentWedding(weddingIndex)
    setLightboxIndex(0)
    setLightboxOpen(true)
  }

  if (loading) {
    return (
      <section className="container mx-auto px-6 pb-16">
        <div className="text-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-emerald-700 border-t-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading wedding collections...</p>
        </div>
      </section>
    )
  }

  if (weddingCollections.length === 0) {
    return (
      <section className="container mx-auto px-6 pb-16">
        <div className="text-center py-12 border rounded-lg bg-white">
          <h3 className="text-xl font-medium mb-2">No Wedding Collections Found</h3>
          <p className="text-muted-foreground mb-6">
            Add your first wedding collection by creating a folder in public/images/weddings
          </p>
          <div className="bg-gray-50 p-4 rounded-md mx-auto max-w-lg text-left">
            <code className="text-sm">
              1. Create folder: public/images/weddings/couple-name-date
              <br />
              2. Add featured.webp as the main image
              <br />
              3. Add numbered photos: 01.jpg, 02.jpg, etc.
            </code>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddingCollections.map((wedding, index) => (
            <FadeIn key={wedding.id} delay={index * 100}>
              <div
                className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-black/5 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={wedding.featuredImage || "/placeholder.svg"}
                  alt={`Featured image from ${wedding.title} wedding`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-lg font-medium">{wedding.title}</p>
                  <p className="text-sm opacity-80 mb-2">
                    {wedding.location}, {wedding.date}
                  </p>
                  <p className="text-sm">{wedding.description}</p>
                  <div className="mt-3 text-xs bg-white/20 inline-block px-3 py-1 rounded-full">
                    {wedding.images.length} photos
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentWedding !== null && (
        <Lightbox
          images={weddingCollections[currentWedding].images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          weddingTitle={weddingCollections[currentWedding].title}
          weddingLocation={`${weddingCollections[currentWedding].location}, ${weddingCollections[currentWedding].date}`}
        />
      )}
    </>
  )
}

