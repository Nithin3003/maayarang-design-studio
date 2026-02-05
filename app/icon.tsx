import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e5631 0%, #8a7a48 100%)',
          borderRadius: '6px',
          border: '2px solid #8a7a48',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#fefaf3',
            fontFamily: 'serif',
          }}
        >
          M
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
