import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'JP Sanchez - Blog'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  const ibmPlexMono = await fetch(
    new URL('../../public/fonts/IBMPlexMono-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interMedium = await fetch(
    new URL('../../public/fonts/Inter_24pt-Medium.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interBold = await fetch(
    new URL('../../public/fonts/Inter_24pt-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(17, 24, 39) 50%, rgb(5, 46, 22) 100%)',
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
        {/* Add a subtle overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top right, rgba(5, 150, 105, 0.1), transparent 50%)',
            zIndex: 0,
          }}
        />

        {/* Main content wrapper */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 1,
          }}
        >
          {/* Title and Icon wrapper */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: 'white',
                margin: '0',
                lineHeight: '1',
                fontFamily: 'Inter',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              Blogs
            </h1>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
          </div>

          {/* Description */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{
                fontSize: '32px',
                color: '#94a3b8',
                margin: '0',
                fontFamily: 'IBM Plex Mono',
                lineHeight: '1.4',
              }}
            >
              Thoughts on web development, tech, and
            </p>
            <p
              style={{
                fontSize: '32px',
                color: '#94a3b8',
                margin: '0',
                fontFamily: 'IBM Plex Mono',
                lineHeight: '1.4',
              }}
            >
              occasional gaming adventures.
            </p>
          </div>
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          @ogjayp
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
          data: interMedium,
          style: 'normal',
          weight: 500,
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