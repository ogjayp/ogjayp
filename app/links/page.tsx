"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail, Twitter, ArrowUpRight, Terminal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ibmPlexMono } from "@/app/_app"
import { HeartIcon } from "@/components/icons/hearticon"

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/johnp-sanchez", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/ogjayp", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/ogjayp", icon: Instagram },
  { label: "Email", href: "mailto:hello@ogjayp.com", icon: Mail },
]

export default function Links() {
  return (
    <main className="min-h-screen bg-[#fffcf5] text-neutral-900">
      <div className="mx-auto max-w-md px-5 pt-12 pb-16 space-y-10">
        {/* Header with profile */}
        <header className="text-center space-y-3">
          <div className="relative w-20 h-20 mx-auto">
            <Image
              src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQ912M4xnABscO4Ckn2uw0QqFYIt6NpodWXzmE"
              alt="John Sanchez"
              fill
              className="object-cover rounded-full ring-2 ring-emerald-800/20 ring-offset-2 ring-offset-[#fffcf5]"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              John Sanchez{" "}
              <span className={`text-sm text-emerald-800 font-normal ${ibmPlexMono.className}`}>
                aka jp
              </span>
            </h1>
            <p className={`text-sm text-neutral-500 ${ibmPlexMono.className}`}>
              Web Designer &amp; Next.js Developer
            </p>
          </div>
        </header>

        {/* Featured Project */}
        <section className="space-y-3">
          <h2 className={`text-xs text-emerald-800 ${ibmPlexMono.className}`}>
            {"// building"}
          </h2>
          <Link
            href="https://pixelshare.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl bg-stone-100 ring-1 ring-neutral-200/60 shadow-[0_2px_24px_-6px_rgba(60,40,10,0.08)] overflow-hidden transition-all active:scale-[0.99] hover:shadow-[0_6px_32px_-6px_rgba(60,40,10,0.16)]"
          >
            <div className="relative aspect-[16/10] m-3">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQJVkuWB4AXPlvxVf8yUtEne5sIjwk3dQHBNub"
                alt="Project: PixelShare"
                fill
                sizes="(min-width: 448px) 448px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold flex items-center gap-2">
                  <HeartIcon className="w-4 h-4 text-emerald-800" /> PixelShare
                </p>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 transition-all group-hover:text-emerald-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="bg-emerald-50/50 text-xs font-normal">
                  Photo + Video Sharing
                </Badge>
                <Badge variant="outline" className="bg-emerald-50/50 text-xs font-normal">
                  Client Galleries
                </Badge>
              </div>
              <p className={`text-xs text-neutral-500 ${ibmPlexMono.className}`}>
                pixelshare.app
              </p>
            </div>
          </Link>
        </section>

        {/* Blog */}
        <section className="space-y-3">
          <h2 className={`text-xs text-emerald-800 ${ibmPlexMono.className}`}>
            {"// blog"}
          </h2>

          <Link
            href="/blogs/just-one-more-game"
            className="group block rounded-xl bg-white/60 ring-1 ring-neutral-200/60 p-4 space-y-2 transition-all active:scale-[0.99] hover:ring-emerald-800/30"
          >
            <div className="flex items-center justify-between gap-2">
              <Badge variant="outline" className="bg-emerald-50/50 text-xs font-normal">
                Gaming
              </Badge>
              <Badge className="bg-emerald-800 hover:bg-emerald-800 text-white text-xs">
                Latest
              </Badge>
            </div>
            <h3 className="font-semibold group-hover:text-emerald-800 transition-colors">
              Just One More Game
            </h3>
            <p className={`text-sm text-neutral-500 ${ibmPlexMono.className}`}>
              10 losses in a row (it&apos;s not that bad). · May 2025
            </p>
          </Link>

          <Link
            href="/blogs"
            className={`group flex items-center justify-between rounded-xl ring-1 ring-neutral-200/60 px-4 py-3.5 text-sm transition-all active:scale-[0.99] hover:ring-emerald-800/30 ${ibmPlexMono.className}`}
          >
            <span className="flex items-center gap-2 text-neutral-700 group-hover:text-emerald-800 transition-colors">
              <Terminal className="w-4 h-4 text-emerald-800" />
              View all posts
            </span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 transition-all group-hover:text-emerald-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </section>

        {/* Social Links */}
        <section className="space-y-3">
          <h2 className={`text-xs text-emerald-800 ${ibmPlexMono.className}`}>
            {"// connect"}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl ring-1 ring-neutral-200/60 px-4 py-3.5 text-sm font-medium transition-all active:scale-[0.98] hover:ring-emerald-800/30 hover:bg-emerald-50/50"
              >
                <Icon className="w-4 h-4 text-emerald-800 shrink-0" />
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* More */}
        <section className="space-y-3">
          <h2 className={`text-xs text-emerald-800 ${ibmPlexMono.className}`}>
            {"// more"}
          </h2>
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center justify-center rounded-xl bg-emerald-800 text-white font-medium py-3.5 transition-all active:scale-[0.98] hover:bg-emerald-900"
            >
              Homepage
            </Link>
            <Link
              href="/weddings"
              className="flex items-center justify-center rounded-xl ring-1 ring-emerald-800/30 text-emerald-800 font-medium py-3.5 transition-all active:scale-[0.98] hover:bg-emerald-50/50"
            >
              Wedding Portfolio
            </Link>
          </div>
        </section>

        <footer className={`text-center text-xs text-neutral-400 ${ibmPlexMono.className}`}>
          hello@ogjayp.com · irvine, ca
        </footer>
      </div>
    </main>
  )
}
