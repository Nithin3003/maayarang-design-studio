'use client'

import { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConsultationForm } from './consultation-form'
import { Logo } from './logo'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConsultation, setShowConsultation] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Enhanced Glassmorphism Navigation Bar */}
      <div className="backdrop-blur-xl bg-background/90 border-b border-border/40 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo with hover effect */}
          <a href="#" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="relative transition-transform group-hover:scale-110">
              <Logo size="default" />
              <div className="absolute -top-1 -right-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Maayarang
              </h1>
              <p className="text-xs text-muted-foreground font-inter tracking-wide">Design Studio</p>
            </div>
          </a>

          {/* Desktop Navigation with hover effects */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="relative text-foreground hover:text-primary transition-colors font-inter text-sm font-medium group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#difference" className="relative text-foreground hover:text-primary transition-colors font-inter text-sm font-medium group">
              Our Difference
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="relative text-foreground hover:text-primary transition-colors font-inter text-sm font-medium group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative text-foreground hover:text-primary transition-colors font-inter text-sm font-medium group">
              Visit Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setShowConsultation(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-4 h-4 mr-2" />
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </nav>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-xl bg-background/95 border-b border-border/40 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-foreground hover:text-primary transition-colors font-inter py-2 px-4 rounded-lg hover:bg-primary/5" onClick={() => setIsOpen(false)}>
                Services
              </a>
              <a href="#difference" className="block text-foreground hover:text-primary transition-colors font-inter py-2 px-4 rounded-lg hover:bg-primary/5" onClick={() => setIsOpen(false)}>
                Our Difference
              </a>
              <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors font-inter py-2 px-4 rounded-lg hover:bg-primary/5" onClick={() => setIsOpen(false)}>
                Reviews
              </a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors font-inter py-2 px-4 rounded-lg hover:bg-primary/5" onClick={() => setIsOpen(false)}>
                Visit Us
              </a>
              <Button 
                onClick={() => {
                  setShowConsultation(true)
                  setIsOpen(false)
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter shadow-lg"
              >
                <Heart className="w-4 h-4 mr-2" />
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Consultation Form Modal */}
      {showConsultation && (
        <div onClick={() => setShowConsultation(false)}>
          <ConsultationForm />
        </div>
      )}
    </header>
  )
}
