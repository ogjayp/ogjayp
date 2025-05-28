import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'JP Sanchez - Blog'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  // Only load the font weights we actually need
  const ibmPlexMono = await fetch(
    new URL('../../public/fonts/IBMPlexMono-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  // We only need Bold for the title
  const interBold = await fetch(
    new URL('../../public/fonts/Inter_24pt-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000 0%, #111827 50%, #052e16 100%)', // Simplified color codes
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
          {/* Title and Icon wrapper */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: 'white',
                margin: '0',
                lineHeight: '1',
                fontFamily: 'Inter',
              }}
            >
              Blogs
            </h1>
            {/* Simplified SVG */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
              <path d="M4 17l6-6-6-6M12 19h8" />
            </svg>
          </div>

          {/* Description - Combined into single element */}
          <p
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              margin: '0',
              fontFamily: 'IBM Plex Mono',
              lineHeight: '1.4',
              maxWidth: '800px',
            }}
          >
            Thoughts on web development, tech, and occasional gaming adventures.
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