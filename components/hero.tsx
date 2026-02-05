'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { ConsultationForm } from './consultation-form'

export function Hero() {
  const [showConsultation, setShowConsultation] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-accent/5 to-primary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Decorative sparkle elements */}
          <div className="absolute top-32 right-1/4 text-accent/30 animate-pulse">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute top-1/3 left-1/4 text-primary/20 animate-pulse delay-500">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 text-accent/25 animate-pulse delay-1000">
            <Sparkles className="w-10 h-10" />
          </div>
        </div>

        <motion.div 
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subheading with enhanced styling */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <p className="text-primary font-inter text-sm tracking-widest uppercase font-semibold">
              Premium Couture Experience
            </p>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          {/* Main Heading with gradient */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-playfair font-bold mb-8 leading-tight bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            A Magical Makeover
            <span className="block mt-2">Experience</span>
          </motion.h1>

          {/* Decorative divider */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <Star className="w-5 h-5 text-accent fill-accent" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </motion.div>

          {/* Subtext with better spacing */}
          <motion.p 
            className="text-lg sm:text-xl text-foreground/70 font-inter max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Expertly crafted <span className="text-primary font-semibold">Indian and Western wear</span> for Women & Kids, specializing in <span className="text-primary font-semibold">Bridal Blouse stitching</span> and intricate <span className="text-primary font-semibold">Hand Embroidery</span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => setShowConsultation(true)}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-inter px-10 py-6 text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="#services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter px-10 py-6 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-background/80 backdrop-blur-sm"
              >
                Explore Services
              </Button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="group cursor-default">
              <div className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-1 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-sm text-muted-foreground font-inter">Years Experience</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-1 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-muted-foreground font-inter">Happy Clients</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-1 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-muted-foreground font-inter">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Consultation Form Modal */}
      {showConsultation && (
        <ConsultationForm onClose={() => setShowConsultation(false)} />
      )}
    </>
  )
}
