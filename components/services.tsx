'use client'

import { motion } from 'framer-motion'
import { Sparkles, BedDouble as Needle, Heart } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Bridal Blouses',
    description: 'Exquisitely designed and perfectly fitted bridal blouses for your special day',
    icon: Sparkles,
    color: 'from-primary/20 to-primary/5',
  },
  {
    id: 2,
    title: 'Designer Sarees',
    description: 'Custom designed sarees with premium fabrics and intricate detailing',
    icon: Needle,
    color: 'from-accent/20 to-accent/5',
  },
  {
    id: 3,
    title: 'Custom Western Wear',
    description: 'Modern and elegant Western wear tailored to your unique style',
    icon: Heart,
    color: 'from-primary/10 to-accent/10',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-accent/3 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <p className="text-primary font-inter text-sm tracking-widest uppercase font-semibold">
              What We Offer
            </p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-playfair font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
            Our Premium Collections
          </h2>
          <p className="text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Each piece is crafted with <span className="text-primary font-semibold">precision, passion,</span> and attention to detail
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link Arrow */}
                  <div className="mt-6 inline-flex items-center text-primary font-inter text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Explore →
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced Feature Highlights */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-10 sm:p-14 border border-accent/20 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-20 -mt-20"></div>
          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                Handcrafted Excellence
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                Every piece is meticulously crafted by our skilled artisans, combining traditional techniques with modern design sensibilities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                Your Vision, Our Creation
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                We work closely with you to understand your preferences and bring your dream designs to life with precision and elegance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
