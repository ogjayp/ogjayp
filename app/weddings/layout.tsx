import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding Photography | JP & Seongah",
  description: "Capturing timeless moments with a blend of documentary and artistic styles. Based in Irvine, California, we specialize in authentic wedding photography that captures your special moments.",
  openGraph: {
    title: "Wedding Photography | JP & Seongah",
    description: "Capturing timeless moments with a blend of documentary and artistic styles. Based in Irvine, California, we specialize in authentic wedding photography that captures your special moments.",
    type: "website",
    locale: "en_US",
    siteName: "@ogjayp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photography | JP & Seongah",
    description: "Capturing timeless moments with a blend of documentary and artistic styles. Based in Irvine, California, we specialize in authentic wedding photography that captures your special moments.",
  },
  keywords: [
    "wedding photography",
    "Irvine wedding photographer",
    "documentary wedding photography",
    "artistic wedding photos",
    "JP and Seongah",
    "California wedding photography"
  ]
}

export default function WeddingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 