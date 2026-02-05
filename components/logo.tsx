export function Logo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizes = {
    small: 'w-10 h-10 text-2xl',
    default: 'w-12 h-12 text-3xl',
    large: 'w-16 h-16 text-4xl'
  }

  return (
    <div className={`${sizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg`}>
      <span className="font-playfair font-bold text-primary-foreground">M</span>
      <div className="absolute inset-0 rounded-xl border-2 border-accent/30"></div>
    </div>
  )
}
