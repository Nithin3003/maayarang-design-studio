'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-accent/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-primary font-inter text-sm tracking-widest uppercase font-semibold">
              Visit Us
            </p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-playfair font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
            Find Us in Sahakar Nagar
          </h2>
          <p className="text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Experience <span className="text-primary font-semibold">luxury craftsmanship</span> at our boutique studio
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-foreground mb-2 text-lg">
                  Phone
                </h3>
                <a href="tel:08031678770" className="text-primary hover:text-primary/80 font-inter text-lg font-semibold transition-colors">
                  080 3167 8770
                </a>
                <p className="text-muted-foreground font-inter text-sm mt-1">
                  Available Mon-Sat, 10:30 AM - 6 PM
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-foreground mb-2 text-lg">
                  Address
                </h3>
                <p className="text-foreground font-inter leading-relaxed">
                  320, 10th Cross F/G Block Rd<br />
                  Opp. Barley and Grapes Cafe<br />
                  Sahakar Nagar, Bengaluru<br />
                  Karnataka 560092, India
                </p>
                <a href="https://maps.google.com/?q=320+10th+Cross+FG+Block+Sahakar+Nagar+Bangalore" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-inter text-sm mt-2 inline-block">
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-foreground mb-2 text-lg">
                  Email
                </h3>
                <a href="mailto:studio@maayarang.com" className="text-primary hover:text-primary/80 font-inter font-semibold transition-colors break-all">
                  studio@maayarang.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-foreground mb-2 text-lg">
                  Hours
                </h3>
                <p className="text-foreground font-inter">
                  Monday - Saturday<br />
                  <span className="text-muted-foreground">10:30 AM - 6:00 PM</span><br />
                  <span className="text-muted-foreground">Sunday: Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/85 p-10 sm:p-14 text-primary-foreground flex flex-col justify-between shadow-2xl">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 leading-tight">
                Ready to Create Your Dream Design?
              </h3>
              <p className="text-primary-foreground/90 font-inter text-lg leading-relaxed mb-8">
                Book a consultation with our expert team and let us bring your vision to life with unparalleled craftsmanship and attention to detail.
              </p>

              <div className="flex flex-col gap-4">
                <a href="tel:08031678770">
                  <Button className="w-full bg-white hover:bg-white/95 text-primary font-inter text-lg py-7 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 080 3167 8770
                  </Button>
                </a>
                <p className="text-center text-primary-foreground/80 font-inter text-sm">
                  or visit our studio to explore our collections
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Google Maps */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl border-2 border-primary/20 h-96 shadow-2xl group hover:border-primary/40 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10883.959686625605!2d77.57841411321607!3d13.064046433164254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19f2b9e57649%3A0x6e4133152d45e4d0!2sMaayarang%20Design%20Studio!5e0!3m2!1sen!2sin!4v1770263278521!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
