"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail, Twitter, Terminal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ibmPlexMono } from "@/app/_app"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

// Add this testimonial data near the top of the file, before the Portfolio component
const testimonials = [
  {
    name: "Rachael Park",
    role: "Marketing Director, GlowyJoy",
    content: "JP is professional, highly responsive, and understands e-commerce and marketing. He built a seamless platform and optimized back-end processes. By updating our site seo, JP helped us increase our visitors by 20%.",
  },
  {
    name: "Rick M.",
    role: "President, American Republic Metals",
    content: "JP's ability to translate our vision into reality was impressive. His technical skills and communication made the project a success. We were able to increase our conversions by 30%.",
  },
  {
    name: "Jon Sandy",
    role: "Founder, PMCEX",
    content: "Through JP's expertise, we were able to create a seamless platform that allowed us to manage our inventory and sales more efficiently. His attention to detail and ability to streamline processes were invaluable.",
  },
]

export default function Portfolio() {
  // Add this state near the top of the component
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#fffcf5]">
      {/* Left scrollable area */}
      <ScrollArea className="w-full md:w-1/2 h-auto md:h-screen order-2 md:order-1 bg-transparent">
        <div className="p-8 space-y-8">
          <div className="group relative p-0 md:p-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              
                <Image
                  src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQrFdceWvCKu0MzJkBU4oEXHeSqxWjd6ra1gDO"
                  alt="Project: Zero Impact Energy"
                  fill
                  className="object-cover object-top transition-all group-hover:blur-sm"
                />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Website Design
                  </Badge>
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Webflow Development
                  </Badge>
                </div>
                <p className="text-lg md:text-2xl font-semibold mt-auto">
                  Design and development of a 20+ page marketing website for Zero Impact Energy.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative p-0 md:p-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQpLmlDB3GFw0Hd4vzZqTm62QeOrSVMLb9hluK"
                alt="Project: Redibit"
                fill
                className="object-cover object-top transition-all group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Next.js Development
                  </Badge>
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Stripe Integration
                  </Badge>
                </div>
                <p className="text-lg md:text-2xl font-semibold mt-auto">
                  Developed Next.js app for Redibit, integrating with Stripe and Supabase.
                </p>
              </div>
            </div>

          </div>

          <div className="group relative p-0 md:p-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQQ2WFv47hWrYxdDlbSEN8ofqOvaJ3ZCRtgPKB"
                alt="Project: ChargeTronix"
                fill
                className="object-cover object-top transition-all group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    WordPress Development
                  </Badge>
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Site Management
                  </Badge>
                </div>
                <p className="text-lg md:text-2xl font-semibold mt-auto">
                  Managed a 20+ page WordPress website for ChargeTronix, including content updates, SEO optimization, and site maintenance.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative p-0 md:p-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQxNzfXrgsO0m3I1MibUtCpu4WLf7aXkZqT6jY"
                alt="Project: American Republic Metals"
                fill
                className="object-cover object-top transition-all group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Website Design
                  </Badge>
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Development
                  </Badge>
                </div>
                <p className="text-lg md:text-2xl font-semibold mt-auto">
                  Managed design process and developed marketing/sales integrations for seamless lead-to-prospect transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Right fixed sidebar */}
      <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 p-8 flex flex-col order-1 md:order-2">
        <div className="space-y-8 m-auto">
          <div className="">
            <div className="relative w-32 h-32 mb-6">
              <Image src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQ912M4xnABscO4Ckn2uw0QqFYIt6NpodWXzmE" alt="Profile photo" fill className="rounded-full object-cover" />
            </div>
            <h1 className="text-3xl font-semibold flex items-center gap-2">
              John Sanchez
              <span className={`text-sm text-emerald-800 ${ibmPlexMono.className}`}>aka JP</span>
            </h1>
            <p className={`text-muted-foreground ${ibmPlexMono.className}`}>Web Designer & Next.js Developer</p>
          </div>

          <p className={`text-muted-foreground ${ibmPlexMono.className}`}>
          I build full-stack web apps and streamline digital marketing automation ⚡️ From custom platforms to seamless integrations, I make workflows faster and more efficient with Next.js, Supabase, and automation.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="work">
              <AccordionTrigger className="text-lg font-semibold">Work Inquiries</AccordionTrigger>
              <AccordionContent>
                Send me a message via <a href="mailto:hello@ogjayp.com" className="text-emerald-800 hover:text-emerald-600 underline underline-offset-4 transition-colors">email.</a> I respond to all inquiries within 24-48 hours. Upon request, I can provide my resume.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="about">
              <AccordionTrigger className="text-lg font-semibold">About Me</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p>👋 Hey, I&apos;m JP. I build web apps, explore backend engineering, and tinker with stock market data. Right now, I&apos;m crafting tools that make workflows smoother—whether it&apos;s dynamic QR codes, job boards, or note-taking apps.</p>

                <p>I&apos;m into <span className="font-semibold">Next.js, Supabase, and cloud hosting</span> (mostly Vercel, but I&apos;m exploring Azure). You&apos;ll also find me digging into market microstructure, EV charging infrastructure, and automation.</p>

                <p>Always down to build cool things. Let&apos;s connect! 🚀</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="testimonials">
              <AccordionTrigger className="text-lg font-semibold">Testimonials</AccordionTrigger>
              <AccordionContent>
                <div className="relative">
                  <Card className="bg-emerald-800 text-white">
                    <CardContent className="pt-6">
                      <p className="text-white mb-4">{testimonials[currentTestimonial].content}</p>
                      <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-gray-300">{testimonials[currentTestimonial].role}</div>
                    </CardContent>
                  </Card>
                  <div className="flex justify-start mt-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={previousTestimonial}
                      
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous testimonial</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextTestimonial}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next testimonial</span>
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>

          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://x.com/ogjayp">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/johnp-sanchez">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/ogjayp/">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:hello@ogjayp.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="gap-2 h-9 px-3" asChild>
              <Link href="/blogs">
                <Terminal className="w-5 h-5" />
                <span className={ibmPlexMono.className}>Blogs</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

