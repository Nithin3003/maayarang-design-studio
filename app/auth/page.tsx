'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/logo'
import { Lock } from 'lucide-react'

export default function AuthPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Set your password here
    const correctPassword = 'Maayarang2024'
    
    if (password === correctPassword) {
      // Set cookie for 24 hours
      document.cookie = `auth=true; max-age=86400; path=/`
      router.push('/')
      router.refresh()
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-primary/10 px-4">
      <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-3xl shadow-2xl border border-border/50">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Logo size="large" />
          </div>
          <h2 className="text-3xl font-playfair font-bold text-primary">
            Welcome to Maayarang
          </h2>
          <p className="text-muted-foreground font-inter">
            Enter password to access the design studio
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`pl-10 ${error ? 'border-red-500' : ''}`}
                placeholder="Enter access password"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 animate-fade-in">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter shadow-lg hover:shadow-xl transition-all"
          >
            Access Studio
          </Button>
        </form>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Don't have access? Contact{' '}
            <a href="mailto:studio@maayarang.com" className="text-primary hover:underline">
              studio@maayarang.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
