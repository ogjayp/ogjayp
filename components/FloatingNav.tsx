"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ibmPlexMono } from "@/app/_app"
import { usePathname } from "next/navigation"

export function FloatingNav() {
  const pathname = usePathname()
  
  // Render on root page and all blog paths
  if (pathname !== '/' && !pathname.startsWith('/blogs')) return null

  return (
    <div className="fixed bottom-6 right-6 md:bottom-6 md:right-6">
      <Popover>
        <PopoverTrigger className={`
          px-4 py-2 
          text-lg 
          ${ibmPlexMono.className} 
          rounded-md 
          bg-emerald-800 
          hover:bg-emerald-800 
          text-white
          border-0
          transition-all
          duration-200
          shadow-lg
          hover:shadow-emerald-800/20
        `}>
          @ogjayp
        </PopoverTrigger>
        <PopoverContent 
          className="w-[200px] p-0 -translate-x-4 mb-2 border-none shadow-lg" 
          side="top"
          sideOffset={6}
          align="end"
        >
          <div className="grid gap-2 p-2 bg-background/95 backdrop-blur-sm rounded-md border border-border/50">
            <a 
              href="/"
              className={`
                ${ibmPlexMono.className} 
                select-none rounded-md p-3 
                leading-none no-underline outline-none 
                transition-all duration-200
                hover:bg-emerald-800/10 hover:text-emerald-800
                focus:bg-emerald-800/10 focus:text-emerald-800
                flex items-center gap-2
              `}
            >
              Home
            </a>
            <a 
              href="/blogs"
              className={`
                ${ibmPlexMono.className} 
                select-none rounded-md p-3 
                leading-none no-underline outline-none 
                transition-all duration-200
                hover:bg-emerald-800/10 hover:text-emerald-800
                focus:bg-emerald-800/10 focus:text-emerald-800
                flex items-center gap-2
              `}
            >
              Blogs
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
} 