import { NextResponse } from "next/server"
import { scanWeddingFolders } from "@/app/weddings/utils"

export async function GET() {
  try {
    const weddings = await scanWeddingFolders()
    return NextResponse.json({ weddings })
  } catch (error) {
    console.error("Error scanning wedding folders:", error)
    return NextResponse.json({ weddings: [] }, { status: 500 })
  }
}

