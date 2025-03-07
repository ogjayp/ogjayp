"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ibmPlexMono } from "@/app/_app"


export default function Links() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fffcf5]">
      {/* Header with profile */}
      <div className="w-full max-w-3xl mx-auto pt-12 px-4 text-center mb-16">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQ912M4xnABscO4Ckn2uw0QqFYIt6NpodWXzmE"
            alt="Profile"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <h1 className="text-3xl font-semibold flex items-center justify-center gap-2">
          John Sanchez
          <span className={`text-sm text-emerald-800 ${ibmPlexMono.className}`}>aka JP</span>
        </h1>
        <p className={`text-muted-foreground ${ibmPlexMono.className}`}>Web Designer & Next.js Developer</p>
      </div>

      {/* Links section */}
      <ScrollArea className="w-full max-w-3xl mx-auto px-4 pb-12">
        <div className="space-y-4">
          {/* Featured Project */}
          <h2 className="text-xl font-semibold mb-4 text-center">Featured Project</h2>
          
          <Link href="https://chipme.app" target="_blank" className="block">
            <div className="group relative rounded-lg overflow-hidden transition-all border-2 border-emerald-800/20 hover:border-emerald-800/40">
              <div className="relative aspect-video">
                <Image
                  src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQPuL88Q0tgD5oX3v0BAS2dYuKP9QishZbaOzx"
                  alt="Project: Chipme"
                  fill
                  className="object-cover object-top transition-all group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-transparent text-white border-white/20">
                      Chat-style Notes
                    </Badge>
                    <Badge variant="outline" className="bg-transparent text-white border-white/20">
                      Chipmunk Emojis
                    </Badge>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-semibold">🐿️ Chipme</p>
                    <p className="text-sm opacity-80">Visit chipme.app</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Social Links */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6 text-center">Connect With Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="https://linkedin.com/in/jayp-sanchez" target="_blank">
                <Button variant="outline" className="w-full justify-start gap-3 py-5 px-4 hover:bg-emerald-50/50">
                  <Linkedin className="h-5 w-5 text-emerald-800" />
                  <span className="font-medium">LinkedIn</span>
                  <ExternalLink className="h-4 w-4 ml-auto opacity-50" />
                </Button>
              </Link>
              
              <Link href="https://twitter.com/ogjayp" target="_blank">
                <Button variant="outline" className="w-full justify-start gap-3 py-5 px-4 hover:bg-emerald-50/50">
                  <Twitter className="h-5 w-5 text-emerald-800" />
                  <span className="font-medium">Twitter</span>
                  <ExternalLink className="h-4 w-4 ml-auto opacity-50" />
                </Button>
              </Link>
              
              <Link href="https://instagram.com/ogjayp" target="_blank">
                <Button variant="outline" className="w-full justify-start gap-3 py-5 px-4 hover:bg-emerald-50/50">
                  <Instagram className="h-5 w-5 text-emerald-800" />
                  <span className="font-medium">Instagram</span>
                  <ExternalLink className="h-4 w-4 ml-auto opacity-50" />
                </Button>
              </Link>
              
              <Link href="mailto:hello@ogjayp.com" target="_blank">
                <Button variant="outline" className="w-full justify-start gap-3 py-5 px-4 hover:bg-emerald-50/50">
                  <Mail className="h-5 w-5 text-emerald-800" />
                  <span className="font-medium">Email</span>
                  <ExternalLink className="h-4 w-4 ml-auto opacity-50" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Portfolio Link */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-emerald-800 text-white hover:bg-emerald-900 px-8">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
} 