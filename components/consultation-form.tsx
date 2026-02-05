'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle } from 'lucide-react'

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
      // Create WhatsApp message
      const message = `Hello! I would like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}`
      const whatsappLink = `https://wa.me/916364362136?text=${encodeURIComponent(message)}`
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank')
      
      // Show success message
      setSubmitted(true)
      setFormData({ name: '', phone: '', eventDate: '' })
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-card rounded-2xl p-8 sm:p-12 max-w-md w-full text-center border border-border/40" onClick={(e) => e.stopPropagation()}>
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Thank You!
          </h2>
          
          <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
            We've received your consultation request. Our WhatsApp message window has opened - please send us your details or feel free to reach out directly.
          </p>
          
          <div className="bg-primary/10 rounded-lg p-4 mb-6">
            <p className="text-sm font-inter text-foreground">
              <span className="font-semibold">Phone:</span> +91 6364362136
            </p>
          </div>

          <p className="text-muted-foreground font-inter text-sm mb-6">
            We'll be in touch soon to confirm your appointment and discuss your design preferences.
          </p>

          <Button
            onClick={() => {
              setSubmitted(false)
              onClose?.()
            }}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter"
          >
            Close
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-card rounded-2xl p-8 sm:p-12 max-w-md w-full border border-border/40" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
          Book a Consultation
        </h2>
        <p className="text-muted-foreground font-inter mb-8">
          Fill in your details and we'll get back to you via WhatsApp
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
