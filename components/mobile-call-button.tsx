'use client'

import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MobileCallButton() {
  const phoneNumber = '08031678770'
  
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-gradient-to-t from-background via-background to-transparent pt-6 pb-6 px-4">
      <a href={`tel:${phoneNumber}`}>
        <Button 
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-inter flex items-center justify-center gap-3 py-7 text-base font-bold rounded-2xl shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
        >
          <Phone className="w-6 h-6" />
          Call Now - 080 3167 8770
        </Button>
      </a>
    </div>
  )
}
