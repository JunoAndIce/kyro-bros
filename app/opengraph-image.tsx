import { ImageResponse } from 'next/og'

export const alt = "Kyro & Bros Party Supply Rentals — Bring the party, we'll bring everything else"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Brand colors match globals.css: red-800 #9f0712 (is-danger) and blue-700 #1447e6 (is-link)
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#ffffff',
          padding: '0 96px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 20, background: '#9f0712', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 20, background: '#1447e6', display: 'flex' }} />
        <div style={{ display: 'flex', flexDirection: 'column', textTransform: 'uppercase', fontWeight: 700, lineHeight: 1.15 }}>
          <div style={{ display: 'flex', fontSize: 76, color: '#9f0712' }}>Bring the Party,</div>
          <div style={{ display: 'flex', fontSize: 76, color: '#171717' }}>We&apos;ll Bring Everything Else</div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 56,
            gap: 20,
            textTransform: 'uppercase',
            fontSize: 30,
            color: '#1447e6',
            fontWeight: 700,
          }}
        >
          <div style={{ display: 'flex', width: 56, height: 6, background: '#9f0712' }} />
          <div style={{ display: 'flex' }}>Kyro &amp; Bros — Party Supply Rentals — Houston, TX</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
