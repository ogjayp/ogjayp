import type { AppProps } from "next/app"
import { IBM_Plex_Mono, Gilda_Display } from "next/font/google"
import { cn } from "@/lib/utils"

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
})

export const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={cn("min-h-screen bg-[#fffcf5]", ibmPlexMono.className)}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

