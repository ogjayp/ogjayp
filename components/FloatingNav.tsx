"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ibmPlexMono } from "@/app/_app"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

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
          <div className="grid gap-2 p-2 bg-emerald-800/5 dark:bg-emerald-800/10 backdrop-blur-sm rounded-md border border-emerald-800/20">
            <Link 
              href="/"
              target="_blank"
              className={`
                ${ibmPlexMono.className} 
                select-none rounded-md p-3 
                leading-none no-underline outline-none 
                transition-all duration-200
                ${pathname === '/' 
                  ? 'bg-emerald-800 text-white cursor-default'
                  : 'hover:bg-emerald-800/10 hover:text-emerald-800 focus:bg-emerald-800/10 focus:text-emerald-800'
                }
                flex items-center justify-between
              `}
            >
              <span>Home</span>
              <ExternalLink className={`h-4 w-4 ${pathname === '/' ? 'text-white' : ''}`} />
            </Link>
            <Link 
              href="/blogs"
              className={`
                ${ibmPlexMono.className} 
                select-none rounded-md p-3 
                leading-none no-underline outline-none 
                transition-all duration-200
                ${pathname === '/blogs'
                  ? 'bg-emerald-800 text-white cursor-default'
                  : 'hover:bg-emerald-800/10 hover:text-emerald-800 focus:bg-emerald-800/10 focus:text-emerald-800'
                }
                flex items-center gap-2
              `}
            >
              Blogs
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
} 