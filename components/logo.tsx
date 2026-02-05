import Image from 'next/image'

export function Logo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const dimensions = {
    small: 40,
    default: 48,
    large: 64
  }

  const dim = dimensions[size]

  return (
    <div className="relative drop-shadow-lg" style={{ width: dim, height: dim }}>
      <Image 
        src="/logo.png" 
        alt="Maayarang Design Studio Logo" 
        width={dim}
        height={dim}
        className="object-contain"
        priority
      />
    </div>
  )
}
