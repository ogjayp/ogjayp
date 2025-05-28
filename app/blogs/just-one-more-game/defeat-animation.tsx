"use client"

import { Card } from "@/components/ui/card"

export function DefeatAnimation() {
  return (
    <Card className="w-full h-[150px] mx-auto mb-8 overflow-hidden bg-gradient-to-r from-red-900 via-red-700 to-red-800 border-none shadow-xl relative rounded-xl">
      {/* Angular design elements - modified to be rounded */}
      <div className="absolute top-0 left-0 w-[30px] h-[30px] border-l-4 border-t-4 border-red-500 opacity-80 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-[30px] h-[30px] border-r-4 border-t-4 border-red-500 opacity-80 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-[30px] h-[30px] border-l-4 border-b-4 border-red-500 opacity-80 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-r-4 border-b-4 border-red-500 opacity-80 rounded-br-xl"></div>

      {/* Horizontal lines */}
      <div className="absolute top-[15px] left-[40px] right-[40px] h-[2px] bg-red-500 opacity-40"></div>
      <div className="absolute bottom-[15px] left-[40px] right-[40px] h-[2px] bg-red-500 opacity-40"></div>

      {/* Main text animation container - modified for better centering */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="animate-pulse-defeat w-full flex items-center justify-center h-full">
          <div className="animate-scroll-text whitespace-nowrap absolute">
            <span
              className="text-white font-extrabold text-6xl italic tracking-wider uppercase flex items-center"
              style={{ textShadow: "0 0 10px rgba(255, 50, 50, 0.8), 0 0 20px rgba(255, 50, 50, 0.5)" }}
            >
              DEFEAT
            </span>
          </div>
        </div>
      </div>

      {/* Tech pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <style jsx>{`
        @keyframes scroll-text {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        .animate-scroll-text {
          animation: scroll-text 8s linear infinite;
        }
        
        @keyframes pulse-defeat {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }
        
        .animate-pulse-defeat {
          animation: pulse-defeat 2s ease-in-out infinite;
        }
      `}</style>
    </Card>
  )
}
