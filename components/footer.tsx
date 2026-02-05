'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, Phone, MapPin, Clock, Heart } from 'lucide-react'
import { Logo } from './logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      
      {/* Main Footer */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo size="small" />
                <div>
                  <h3 className="text-2xl font-playfair font-bold">
                    Maayarang
                  </h3>
                  <p className="text-primary-foreground/70 font-inter text-xs">Design Studio</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed mb-4">
                Crafting luxury experiences through expertly designed garments and exceptional service.
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-xs font-inter">Made with love in Bangalore</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6 flex items-center gap-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-all hover:translate-x-1 inline-block">
                    → Services
                  </a>
                </li>
                <li>
                  <a href="#difference" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-all hover:translate-x-1 inline-block">
                    → Our Difference
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-all hover:translate-x-1 inline-block">
                    → Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-all hover:translate-x-1 inline-block">
                    → Visit Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-all hover:translate-x-1 inline-block">
                    → Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-colors">
                    Bridal Blouses
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-colors">
                    Designer Sarees
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-colors">
                    Custom Western Wear
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-colors">
                    Hand Embroidery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-white font-inter text-sm transition-colors">
                    Kids Wear
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect & Contact */}
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6">Get In Touch</h4>
              
              {/* Social Media */}
              <div className="flex gap-3 mb-6">
                <a 
                  href="https://instagram.com/maayarangdesignstudio/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/maayarangbymedha/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:studio@maayarang.com" 
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-3">
                <a href="tel:08031678770" className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-inter text-sm">080 3167 8770</span>
                </a>
                <a href="mailto:studio@maayarang.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-inter text-sm break-all">studio@maayarang.com</span>
                </a>
                <div className="flex items-start gap-2 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="font-inter text-sm leading-relaxed">Sahakar Nagar, Bengaluru</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="font-inter text-sm">Mon-Sat: 10:30 AM - 6 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 font-inter text-sm text-center sm:text-left">
              © {currentYear} Maayarang Design Studio. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a 
                href="https://www.google.com/maps/place/Maayarang+Design+Studio/@13.0640464,77.5784141,17z/data=!4m8!3m7!1s0x3bae19f2b9e57649:0x6e4133152d45e4d0!8m2!3d13.0640464!4d77.578414!9m1!1b1!16s%2Fg%2F11t_k8v0mb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-white font-inter text-sm transition-colors"
              >
                Google Reviews ⭐ 4.6
              </a>
              <a href="#contact" className="text-primary-foreground/70 hover:text-white font-inter text-sm transition-colors">
                Location
              </a>
              <a href="#testimonials" className="text-primary-foreground/70 hover:text-white font-inter text-sm transition-colors">
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
