import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "JP & Seongah - Wedding Photography"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  const gildaDisplay = await fetch(
    new URL('../../public/fonts/GildaDisplay-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const ibmPlexMono = await fetch(
    new URL('../../public/fonts/IBMPlexMono-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #fffcf5, #f8f5ee)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        {/* Main content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: "72px",
              fontFamily: "Gilda Display",
              color: "#064e3b", // emerald-900
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Capturing Timeless Moments
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "28px",
              fontFamily: "IBM Plex Mono",
              color: "#374151", // gray-700
              maxWidth: "800px",
              opacity: 0.8,
            }}
          >
            Documentary & Artistic Wedding Photography
          </p>

          {/* Signature */}
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontSize: "32px",
                fontFamily: "Gilda Display",
                color: "#064e3b", // emerald-900
              }}
            >
              JP & Seongah
            </p>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "IBM Plex Mono",
                color: "#047857", // emerald-700
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(4, 120, 87, 0.1)", // emerald-700 with opacity
              }}
            >
              @ogjayp
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "200px",
            height: "4px",
            background: "linear-gradient(to right, transparent, #047857)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "200px",
            height: "4px",
            background: "linear-gradient(to left, transparent, #047857)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Gilda Display",
          data: gildaDisplay,
        },
        {
          name: "IBM Plex Mono",
          data: ibmPlexMono,
        },
      ],
    }
  )
} 