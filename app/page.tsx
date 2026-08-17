"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Terminal, ArrowUpRight } from "lucide-react"
import { ibmPlexMono } from "@/app/_app"

type Project = {
  title: string
  href: string
  image: string
  tags: string
  description: string
  outcome?: string
}

const projects: Project[] = [
  {
    title: "PixelShare",
    href: "https://pixelshare.app",
    image: "https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQJVkuWB4AXPlvxVf8yUtEne5sIjwk3dQHBNub",
    tags: "next.js · s3 · full-stack",
    description: "Designed and shipped a photo + video sharing platform with multipart S3 uploads.",
  },
  {
    title: "Xenoscapers",
    href: "https://xenocapers.com",
    image: "https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQqU2TIlemOVWnxBz8wtTACsZokjJf57SPUFLc",
    tags: "next.js · lead automation",
    description: "Designed and shipped a Next.js marketing site with end-to-end lead capture automation.",
  },
  {
    title: "Zero Impact Energy",
    href: "https://zeroimpactenergy.com",
    image: "https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQrFdceWvCKu0MzJkBU4oEXHeSqxWjd6ra1gDO",
    tags: "webflow · seo · 20+ pages",
    description: "Designed and shipped a 20+ page marketing site, then ran the SEO program against it.",
    outcome: "+30% organic",
  },
  {
    title: "JoinPSS",
    href: "https://joinpss.com",
    image: "https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQ3eemp1xKwBSXefPZJ0uyxm6soYLAlzWRNVGd",
    tags: "next.js · job board · light ATS",
    description: "Built a custom job board and light ATS for a local recruiting firm, with applicant tracking and local SEO baked in.",
    outcome: "3x applications",
  },
  {
    title: "OpenFont",
    href: "https://openfont.dev",
    image: "https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQT9zYmhtR4X9jJVaHivcKz5AL8mhe6UZbDlg3",
    tags: "edge runtime · open source · font api",
    description: "Open-source alternative to Google Fonts — edge routing and edge scripting for low-latency font delivery.",
  },
  {
    title: "ChargeTronix",
    href: "https://chargetronix.com",
    image: "https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQIXBnTuDC5uSy1kqoeUnQiIfEAOgG8bBJhwjs",
    tags: "wordpress · seo · ops",
    description: "Managed a 20+ page WordPress site — content, SEO, and ongoing maintenance.",
  },
]

const stack = [
  "next.js",
  "typescript",
  "react",
  "shopify",
  "liquid",
  "webflow",
  "sanity",
  "klaviyo",
  "zapier",
  "make",
  "ga4",
  "posthog",
  "hotjar",
  "figma",
  "supabase",
  "stripe",
  "postgres",
]

const stats = [
  { value: "+25%", label: "email engagement", source: "zero impact energy" },
  { value: "+30%", label: "organic traffic", source: "zero impact energy" },
  { value: "3x", label: "applications", source: "joinpss" },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#fffcf5] text-neutral-900">
      <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24 space-y-20">
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="https://ordpwm1r5u.ufs.sh/f/mSbi2RxqVfoQ912M4xnABscO4Ckn2uw0QqFYIt6NpodWXzmE"
                alt="JP Sanchez"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">John Sanchez</div>
              <div className={`text-sm text-neutral-500 ${ibmPlexMono.className}`}>
                aka jp · irvine, ca ·{" "}
                <Link
                  href="https://github.com/ogjayp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-800 underline underline-offset-4 hover:text-emerald-600 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  github
                </Link>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight">
            <span className="block">Full-stack dev that runs growth.</span>
            <span className="block text-neutral-500">Six years shipping at startups.</span>
          </h1>

          <div
            className={`grid grid-cols-3 gap-4 border-t border-b border-neutral-200 py-5 ${ibmPlexMono.className}`}
          >
            {stats.map((s) => (
              <div key={s.label} className="space-y-1.5">
                <div className="text-xl md:text-2xl text-emerald-800">{s.value}</div>
                <div className="text-[11px] text-neutral-500 leading-snug">
                  {s.label}
                  <br />
                  <span className="text-neutral-400">/ {s.source}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2
            className={`m-0 text-xs font-normal leading-tight text-emerald-800 ${ibmPlexMono.className}`}
          >
            // what i do
          </h2>
          <ul className="space-y-2 text-base">
            <li>Ship full-stack apps in Next.js + TypeScript.</li>
            <li>Architect MarTech + RevOps stacks that actually move numbers.</li>
            <li>Bridge the gap between marketing systems and shipped code.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2
            className={`m-0 text-xs font-normal leading-tight text-emerald-800 ${ibmPlexMono.className}`}
          >
            // stack
          </h2>
          <div
            className={`flex flex-wrap gap-x-3 gap-y-2 text-sm text-neutral-600 ${ibmPlexMono.className}`}
          >
            {stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2
            className={`m-0 text-xs font-normal leading-tight text-emerald-800 ${ibmPlexMono.className}`}
          >
            // shipping
          </h2>
          <div className="space-y-12">
            {projects.map((p) => (
              <article key={p.title} className="group relative space-y-4">
                <div className="rounded-xl bg-stone-100 p-3 md:p-5 ring-1 ring-neutral-200/60 shadow-[0_2px_24px_-6px_rgba(60,40,10,0.08)] transition-shadow duration-300 group-hover:shadow-[0_6px_32px_-6px_rgba(60,40,10,0.16)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.image}
                      alt={`Project: ${p.title}`}
                      fill
                      sizes="(min-width: 768px) 640px, 100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="font-medium">
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors group-hover:text-emerald-800 after:absolute after:inset-0 after:content-['']"
                    >
                      {p.title}
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 transition-all duration-200 group-hover:text-emerald-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </h3>
                  <span className={`text-xs text-neutral-500 ${ibmPlexMono.className}`}>
                    {p.tags}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {p.description}
                  {p.outcome && (
                    <span className={`ml-1.5 text-emerald-800 ${ibmPlexMono.className}`}>
                      → {p.outcome}
                    </span>
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2
            className={`m-0 text-xs font-normal leading-tight text-emerald-800 ${ibmPlexMono.className}`}
          >
            // currently
          </h2>
          <ul className={`space-y-2 text-sm text-neutral-700 ${ibmPlexMono.className}`}>
            <li>- walking my puppy Charlie</li>
            <li>- writing dev + growth notes on /blogs</li>
            <li>- open to intrapreneurial product / growth-eng roles</li>
          </ul>
        </section>

        <footer className="space-y-5 border-t border-neutral-200 pt-8">
          <div className={`text-xs text-neutral-500 ${ibmPlexMono.className}`}>
            hello@ogjayp.com · irvine, ca
          </div>
          <div className={`flex flex-wrap items-center gap-x-5 gap-y-3 text-sm ${ibmPlexMono.className}`}>
            <Link
              href="https://github.com/ogjayp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>github</span>
            </Link>
            <Link
              href="https://x.com/ogjayp"
              className="text-neutral-600 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <Twitter className="w-4 h-4" />
              <span>twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/johnp-sanchez"
              className="text-neutral-600 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin</span>
            </Link>
            <Link
              href="mailto:hello@ogjayp.com"
              className="text-neutral-600 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>email</span>
            </Link>
            <Link
              href="/blogs"
              className="text-neutral-600 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
            >
              <span>/blogs</span>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
