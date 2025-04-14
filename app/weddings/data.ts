// This file will contain your wedding collection data structure
// that connects to your actual photos

export interface WeddingPhoto {
    src: string
    alt: string
    caption?: string
  }
  
  export interface WeddingCollection {
    id: string
    title: string
    location: string
    date: string
    featuredImage: string
    description: string
    images: WeddingPhoto[]
  }
  
  export const weddingCollections: WeddingCollection[] = [
    {
      id: "sarah-michael",
      title: "Sarah & Michael",
      location: "Oceanside Ceremony",
      date: "June 2023",
      featuredImage: "/images/weddings/sarah-michael/featured.jpg",
      description: "An intimate beachside ceremony with close family and friends.",
      images: [
        {
          src: "/images/weddings/sarah-michael/01.jpg",
          alt: "Sarah and Michael exchanging vows",
          caption: "Exchanging vows at sunset",
        },
        {
          src: "/images/weddings/sarah-michael/02.jpg",
          alt: "Sarah and Michael beach portraits",
          caption: "Couple portraits on the beach",
        },
        // Add more images...
      ],
    },
    // Add more wedding collections...
  ]
  
  