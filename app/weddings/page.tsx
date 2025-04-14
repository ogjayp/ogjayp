"use client"

import { Suspense } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ibmPlexMono, gildaDisplay } from "../_app"
import FadeIn from "@/components/fade-in"
import WeddingGallery from "./wedding-gallery"
import Image from "next/image"

export default function WeddingPortfolio() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fffcf5]">
      

      {/* Gallery intro */}
      <FadeIn>
        <section className="container mx-auto px-6 py-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl mb-4 ${gildaDisplay.className}`}>Capturing Timeless Moments</h1>
              <p className="text-muted-foreground mb-8">
                We specialize in capturing the authentic, emotional moments of your special day with a blend of documentary
                and artistic styles. 
                <br />
                <br />
                Each wedding tells a unique story, and we&apos;re dedicated to preserving those memories in a
                way that feels true to you.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-[360px] h-[200px]">
                {/* First profile photo */}
                <div className="absolute right-3 w-44 h-44 rounded-full border-4 border-white shadow-lg">
                  <Image
                    src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQU3xCzQNbW8kK3Bn4QGgCSOYEtvAaory5bRem"
                    alt="Seongah's profile photo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                {/* Second profile photo */}
                <div className="absolute left-3 w-44 h-44 rounded-full border-4 border-white shadow-lg">
                  <Image
                    src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQ912M4xnABscO4Ckn2uw0QqFYIt6NpodWXzmE"
                    alt="JP's profile photo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h2 className={`text-2xl mb-2 ${gildaDisplay.className}`}>JP & Seongah</h2>
                <p className={`text-muted-foreground ${ibmPlexMono.className}`}>Your Wedding Photography Team</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Wedding Collections Grid */}
      <Suspense fallback={<WeddingGallerySkeleton />}>
        <WeddingGallery />
      </Suspense>

      {/* Completely Redesigned CTA Section */}
      <FadeIn>
        <section className="relative">
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent" />
          
          <div className="container mx-auto px-6 py-32 relative">
            <div className="max-w-7xl mx-auto">
              {/* Main heading with larger, more dramatic typography */}
              <div className="text-center">
                <h2 className={`text-5xl ${gildaDisplay.className}`}>
                  Your Story, From Every Angle
                </h2>
              </div>

              {/* Three columns with large numbers */}
              <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                  <span className={`block text-8xl text-emerald-800/10 mb-8 ${gildaDisplay.className}`}>01</span>
                  <h3 className={`text-2xl mb-4 ${gildaDisplay.className}`}>Complete Photo Access</h3>
                  <p className="text-muted-foreground/80 text-lg leading-relaxed">
                    We provide all photos at no additional cost, your memories belong to you. View every photo color-edited to highlight the natural beauty of your day.
                  </p>
                </div>

                <div>
                  <span className={`block text-8xl text-emerald-800/10 mb-8 ${gildaDisplay.className}`}>02</span>
                  <h3 className={`text-2xl mb-4 ${gildaDisplay.className}`}>Seamless Experience</h3>
                  <p className="text-muted-foreground/80 text-lg leading-relaxed">
                    From your first message to the final gallery delivery, we keep the process smooth, and supportive, so you can just be in the moment.
                  </p>
                </div>

                <div>
                  <span className={`block text-8xl text-emerald-800/10 mb-8 ${gildaDisplay.className}`}>03</span>
                  <h3 className={`text-2xl mb-4 ${gildaDisplay.className}`}>Personal & Professional</h3>
                  <p className="text-muted-foreground/80 text-lg leading-relaxed">
                    Based in Irvine, California, we love working with people who value connection and good communication. We bring a warm, easygoing vibe and make sure the experience is as memorable as the day itself.
                  </p>
                </div>
              </div>

              {/* Bottom CTA with refined styling */}
              <div className="mt-24 text-center">
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-muted-foreground/90 mb-12">
                    Ready to capture your special day? Book us through New Chapter Film&apos;s contact page, and we&apos;ll create beautiful memories together.
                  </p>
                  <Link 
                    href="https://newchapterfilms.com/contact" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xl text-emerald-800 hover:text-emerald-900 transition-all group"
                  >
                    <span className={`relative ${gildaDisplay.className}
                      after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full 
                      after:h-px after:bg-emerald-800/30 after:transition-all after:duration-300
                      group-hover:after:h-[3px] group-hover:after:bg-emerald-800/50`}>
                      Get in Touch
                    </span>
                    <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Floating badge */}
      <div className="fixed bottom-6 right-6">
        <Badge
          variant="secondary"
          className={`px-4 py-2 text-lg ${ibmPlexMono.className} rounded-md bg-emerald-700 text-white`}
        >
          @ogjayp
        </Badge>
      </div>
    </div>
  )
}

function WeddingGallerySkeleton() {
  return (
    <section className="container mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-lg bg-gray-100 animate-pulse" />
        ))}
      </div>
    </section>
  )
}

