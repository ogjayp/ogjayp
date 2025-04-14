import fs from "fs"
import path from "path"

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

// This function converts a folder name like "sarah-michael-june-2023" to a proper title
function formatWeddingTitle(folderName: string): { title: string; date?: string; location?: string } {
  // Remove hyphens and split into words
  const parts = folderName.split("-")

  // Extract potential date (assuming last part might be a date)
  let date = ""
  let location = ""

  // Check if the last part is a year
  if (parts.length > 2 && /^(20\d{2})$/.test(parts[parts.length - 1])) {
    date = `${parts[parts.length - 2]} ${parts[parts.length - 1]}`
    parts.splice(parts.length - 2, 2)
  }

  // Check if there's a location marker (e.g., "at-vineyard")
  const locationIndex = parts.findIndex((part) => part === "at" || part === "in")
  if (locationIndex !== -1 && locationIndex < parts.length - 1) {
    location = parts
      .slice(locationIndex + 1)
      .map(capitalizeWord)
      .join(" ")
    parts.splice(locationIndex)
  }

  // Format the names (assuming first two parts are first names)
  if (parts.length >= 2) {
    const names = `${capitalizeWord(parts[0])} & ${capitalizeWord(parts[1])}`
    return {
      title: names,
      date: date || undefined,
      location: location || undefined,
    }
  }

  // Fallback if the pattern doesn't match
  return {
    title: parts.map(capitalizeWord).join(" "),
    date: date || undefined,
    location: location || undefined,
  }
}

function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export async function scanWeddingFolders(): Promise<WeddingCollection[]> {
  const weddingsDir = path.join(process.cwd(), "public", "images", "weddings")

  // Check if directory exists
  if (!fs.existsSync(weddingsDir)) {
    console.warn("Wedding directory does not exist:", weddingsDir)
    return []
  }

  const weddingFolders = fs
    .readdirSync(weddingsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  const collections: WeddingCollection[] = []

  for (const folder of weddingFolders) {
    const weddingPath = path.join(weddingsDir, folder)
    const files = fs.readdirSync(weddingPath)

    // Check for featured image
    const featuredImage = files.find((file) => file === "featured.webp" || file.startsWith("featured."))
    if (!featuredImage) continue // Skip if no featured image

    // Get all other images (excluding featured)
    const imageFiles = files
      .filter((file) => !file.startsWith("featured.") && /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .sort() // Sort alphabetically

    // Format wedding info from folder name
    const { title, date, location } = formatWeddingTitle(folder)

    // Create the collection
    const collection: WeddingCollection = {
      id: folder,
      title,
      location: location || "Wedding Venue",
      date: date || "Wedding Date",
      featuredImage: `/images/weddings/${folder}/${featuredImage}`,
      description: ``,
      images: imageFiles.map((file, index) => ({
        src: `/images/weddings/${folder}/${file}`,
        alt: `${title} wedding photo ${index + 1}`,
        caption: `${title}'s wedding`, // Default caption
      })),
    }

    collections.push(collection)
  }

  return collections
}

// This function helps create a metadata.json file for each wedding
export function generateMetadataTemplate(weddingId: string): string {
  const { title } = formatWeddingTitle(weddingId)

  const template = {
    title,
    location: "Wedding Venue",
    date: "Month YYYY",
    description: `Beautiful wedding photography from ${title}'s special day.`,
    images: [
      {
        filename: "01.jpg",
        alt: "Ceremony",
        caption: "Exchange of vows",
      },
      {
        filename: "02.jpg",
        alt: "Portraits",
        caption: "Couple portraits",
      },
      // Add more as needed
    ],
  }

  return JSON.stringify(template, null, 2)
}

