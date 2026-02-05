'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const differences = [
  {
    title: 'Perfect Fit',
    description: 'Custom measurements and multiple fittings ensure your garment fits like a dream',
  },
  {
    title: 'Custom Detailing',
    description: 'From hand-picked fabrics to bespoke embroidery, every detail is personalized',
  },
  {
    title: 'Hand & Machine Embroidery',
    description: 'Expert combination of traditional hand embroidery and precision machine work',
  },
  {
    title: 'Quality Materials',
    description: 'We source only premium fabrics and materials for durability and elegance',
  },
  {
    title: 'Expert Consultation',
    description: 'Our experienced designers guide you through every step of the process',
  },
  {
    title: 'Timely Delivery',
    description: 'Professional turnaround times without compromising on quality and detail',
  },
]

export function Difference() {
  return (
    <section id="difference" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/8 via-background to-primary/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
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
            <Check className="w-4 h-4 text-primary" />
            <p className="text-primary font-inter text-sm tracking-widest uppercase font-semibold">
              Why Choose Us
            </p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-playfair font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
            The Maayarang Difference
          </h2>
          <p className="text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            What sets us apart in creating <span className="text-primary font-semibold">unforgettable pieces</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 p-8 hover:border-accent/40 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Check className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Trust Statement */}
        <motion.div 
          className="mt-20 text-center p-10 sm:p-16 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl border border-accent/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mb-20"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Trusted by Hundreds of Happy Customers
            </h3>
            <p className="text-lg text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we've crafted beautiful moments through our exceptional designs and unparalleled customer service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
