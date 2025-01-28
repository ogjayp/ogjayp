import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ibmPlexMono } from "@/app/_app"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#fffcf5]">
      {/* Left scrollable area */}
      <ScrollArea className="w-full md:w-1/2 h-auto md:h-screen order-2 md:order-1 bg-transparent">
        <div className="p-8 space-y-8">
          <div className="group relative">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQrFdceWvCKu0MzJkBU4oEXHeSqxWjd6ra1gDO"
                alt="Medical research project"
                fill
                className="object-cover transition-all group-hover:blur-sm"
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
                <p className="text-2xl font-semibold mt-auto">
                  Custom single-page marketing website for an advanced LLM-guided medical chart abstraction product
                </p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQrFdceWvCKu0MzJkBU4oEXHeSqxWjd6ra1gDO"
                alt="Email platform project"
                fill
                className="object-cover transition-all group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Brand Design
                  </Badge>
                  <Badge variant="outline" className="bg-transparent text-white border-white/20">
                    Website Design
                  </Badge>
                </div>
                <p className="text-2xl font-semibold mt-auto">
                  Beautifully crafted email marketing platform with modern design system
                </p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQrFdceWvCKu0MzJkBU4oEXHeSqxWjd6ra1gDO"
                alt="Vietnamese food project"
                fill
                className="object-cover transition-all group-hover:blur-sm"
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
                <p className="text-2xl font-semibold mt-auto">Modern restaurant website with online ordering system</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Right fixed sidebar */}
      <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 p-8 flex flex-col order-1 md:order-2">
        <div className="space-y-8">
          <div className="">
            <div className="relative w-32 h-32 mb-6">
              <Image src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQ912M4xnABscO4Ckn2uw0QqFYIt6NpodWXzmE" alt="Profile photo" fill className="rounded-full object-cover" />
            </div>
            <h1 className="text-3xl font-semibold">John Sanchez</h1>
            <p className="text-muted-foreground">Web Designer & Developer</p>
          </div>

          <p className="text-muted-foreground">
            I work with entrepreneurs, marketing teams, and brand designers to create custom marketing websites for
            businesses across industries.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="work">
              <AccordionTrigger>Work Inquiries</AccordionTrigger>
              <AccordionContent>
                Here you can find information about my work and how to get in touch for potential projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="about">
              <AccordionTrigger>About Me</AccordionTrigger>
              <AccordionContent>
                Learn more about my background, skills, and experience in web design and development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="testimonials">
              <AccordionTrigger>Testimonials</AccordionTrigger>
              <AccordionContent>
                Read what my clients have to say about working with me on various projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brands">
              <AccordionTrigger>Brands I&apos;ve Worked With</AccordionTrigger>
              <AccordionContent>
                Explore the list of brands and companies I&apos;ve collaborated with on successful projects.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://x.com/ogjaypee">
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
              <Link href="mailto:originaljayp@gmail.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Floating badge */}
      <div className="fixed bottom-6 right-6 md:bottom-6 md:right-6">
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

