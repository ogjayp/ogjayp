import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Just One More Game - JP Sanchez Blog'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  const ibmPlexMono = await fetch(
    new URL('../../../public/fonts/IBMPlexMono-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interBold = await fetch(
    new URL('../../../public/fonts/Inter_24pt-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000 0%, #111827 50%, #052e16 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Main content wrapper */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Category badge */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              color: '#10b981',
              fontSize: '20px',
              fontFamily: 'IBM Plex Mono',
              padding: '6px 12px',
              borderRadius: '4px',
              background: 'rgba(5, 150, 105, 0.1)',
              border: '1px solid rgba(5, 150, 105, 0.3)',
              textShadow: '0 0 10px rgba(16, 185, 129, 0.7), 0 0 20px rgba(16, 185, 129, 0.4)',
              letterSpacing: '0.05em',
            }}>
              GAMING
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0',
              lineHeight: '1.2',
              fontFamily: 'Inter',
              maxWidth: '900px',
            }}
          >
            Just One More Game
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              margin: '0',
              fontFamily: 'IBM Plex Mono',
              lineHeight: '1.4',
              maxWidth: '700px',
            }}
          >
            10 straight losses are not that bad.
          </p>
        </div>

        {/* Author tag */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            background: '#047857',
            padding: '12px 24px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '24px',
            fontFamily: 'IBM Plex Mono',
          }}
        >
          @ogjayp
        </div>

        {/* Date */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            color: '#94a3b8',
            fontSize: '20px',
            fontFamily: 'IBM Plex Mono',
          }}
        >
          May 27, 2025
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'IBM Plex Mono',
          data: ibmPlexMono,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
} 