import type { AppProps } from "next/app"
import { IBM_Plex_Mono } from "next/font/google"
import { cn } from "@/lib/utils"

export const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={cn("min-h-screen bg-[#fffcf5]", ibmPlexMono.className)}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

