'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConsultationFormProps {
  onClose?: () => void
}

export function ConsultationForm({ onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', eventDate: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Create WhatsApp message to business number
      const message = `Hello! I would like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}`
      const whatsappLink = `https://wa.me/918031678770?text=${encodeURIComponent(message)}`
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank')
      
      // Close form immediately
      setFormData({ name: '', phone: '', eventDate: '' })
      if (onClose) onClose()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-gradient-to-br from-background via-background to-accent/5 rounded-3xl p-8 sm:p-12 max-w-md w-full text-center border border-accent/20 shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sparkle Icon with Animation */}
            <motion.div 
              className="mb-6 flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(138, 122, 72, 0.4)',
                      '0 0 0 20px rgba(138, 122, 72, 0)',
                    ]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                >
                  <Heart className="w-10 h-10 text-accent" />
                </motion.div>
                
                {/* Floating Hearts */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-5 h-5 text-accent" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 -left-1"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Heart className="w-4 h-4 text-accent" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-playfair font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-4"
            >
              Thank You!
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-foreground/80 font-inter mb-6 leading-relaxed text-base sm:text-lg"
            >
              Thank you for reaching out to <span className="font-semibold text-accent">Maayarang</span>! Your request has been sent via WhatsApp. <span className="font-semibold">Medha</span> or a member of our design team will contact you shortly to discuss your dream outfit.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-xl p-6 mb-6 border border-accent/30"
            >
              <p className="text-sm font-inter text-foreground/90">
                We look forward to creating something magical for you! ✨
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                onClick={() => {
                  if (onClose) {
                    setSubmitted(false)
                    onClose()
                  }
                }}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-inter py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-card rounded-2xl p-8 sm:p-12 max-w-md w-full border border-border/40" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
          Book a Consultation
        </h2>
        <p className="text-muted-foreground font-inter mb-8">
          Fill in your details and we'll contact you via WhatsApp
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-inter font-semibold text-foreground mb-2">
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-inter font-semibold text-foreground mb-2">
              Phone Number
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXXXXXXX"
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-inter font-semibold text-foreground mb-2">
              Event Date
            </label>
            <Input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter py-6 mt-6"
          >
            {loading ? 'Sending...' : 'Send via WhatsApp'}
          </Button>
        </form>
      </div>
    </div>
  )
}
