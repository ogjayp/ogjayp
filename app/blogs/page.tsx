

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ibmPlexMono } from "@/app/_app"
import { Terminal, Gamepad2, Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blogs | JP Sanchez",
  description: "Thoughts on web development, tech, and occasional gaming adventures by JP Sanchez, a web developer and Next.js enthusiast.",
  openGraph: {
    title: "Blogs | JP Sanchez",
    description: "Thoughts on web development, tech, and occasional gaming adventures.",
    type: "website",
    url: "https://ogjayp.com/blogs",
    siteName: "@ogjayp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | JP Sanchez",
    description: "Thoughts on web development, tech, and occasional gaming adventures.",
    creator: "@ogjayp",
  },
  authors: [{ name: "JP Sanchez", url: "https://ogjayp.com" }],
}

// You can expand this with real blog posts later
const blogPosts = [
  {
    title: "Just One More Game",
    description: "10 losses in a row (it's not that bad).",
    category: "Gaming",
    date: "May 2025",
    icon: <Gamepad2 className="w-5 h-5" />,
    href: "/blogs/just-one-more-game",
    status: "Latest"
  },
]

export default function BlogsPage() {
  return (
    <div className="space-y-12">
      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <Link 
            key={index} 
            href={post.href}
            className="group transition-all"
          >
            <Card className="h-full bg-slate-800/90 text-white border-0 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-800/20">
              <CardContent className="p-6 space-y-4">
                {/* Category and Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-emerald-400">
                      {post.icon}
                    </div>
                    <Badge variant="outline" className="border-slate-600 bg-slate-700/50 text-slate-200">
                      {post.category}
                    </Badge>
                  </div>
                  {post.status && (
                    <Badge 
                      variant="secondary" 
                      className={`
                        ${post.status === 'Latest' ? 'bg-emerald-500 text-white' : 
                          post.status === 'Draft' ? 'bg-amber-500 text-white' : 
                          'bg-slate-500 text-white'}
                        ${ibmPlexMono.className}
                      `}
                    >
                      {post.status}
                    </Badge>
                  )}
                </div>

                {/* Title and Description */}
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-slate-50 group-hover:text-emerald-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-300">
                    {post.description}
                  </p>
                </div>

                {/* Date */}
                <p className={`text-sm text-slate-400 ${ibmPlexMono.className}`}>
                  {post.date}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Social Media CTA - updated to match home page */}
      <div className="border-t border-slate-200 pt-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span className={`text-sm ${ibmPlexMono.className}`}>
              $ find me elsewhere
            </span>
          </div>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://x.com/ogjayp" target="_blank">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/johnp-sanchez" target="_blank">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/ogjayp/" target="_blank">
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
          </div>
        </div>
      </div>
    </div>
  )
}
