import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            fontSize: 100,
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
