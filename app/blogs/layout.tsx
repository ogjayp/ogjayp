"use client"

import { Badge } from "@/components/ui/badge";
import { ibmPlexMono } from "@/app/_app";
import { Terminal, ChevronLeft } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMainBlogPage = pathname === "/blogs";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
          <div className="flex justify-between items-start mb-12 gap-4">
            <div className="space-y-4 flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold flex items-center gap-3">
                <span>Blogs</span>
                <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-800" />
              </h1>
              {isMainBlogPage ? (
                <p className={`text-muted-foreground text-base sm:text-lg ${ibmPlexMono.className}`}>
                  Thoughts on web development, tech, and occasional gaming adventures.
                </p>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 -ml-3 text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <Link href="/blogs">
                    <ChevronLeft className="w-4 h-4" />
                    <span className={ibmPlexMono.className}>back to blogs</span>
                  </Link>
                </Button>
              )}
            </div>
            
            <div className="flex-shrink-0">
              <ModeToggle />
            </div>
          </div>

          {/* Author byline */}
          <div className="mb-12 flex items-center gap-2 text-sm">
            <span>Written by John Sanchez</span>
            <span className={`text-emerald-800 ${ibmPlexMono.className}`}>aka JP</span>
          </div>

          <article className="prose prose-lg max-w-none dark:prose-invert">
            {children}
          </article>
        </div>
      </div>
      
      {/* Floating badge */}
      <div className="fixed bottom-6 right-6 md:bottom-6 md:right-6">
        <Badge
          variant="secondary"
          className={`px-4 py-2 text-lg ${ibmPlexMono.className} rounded-md bg-emerald-800 text-white`}
        >
          @ogjayp
        </Badge>
      </div>
    </ThemeProvider>
  );
}