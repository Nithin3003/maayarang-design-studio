'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function Gallery() {
  const galleryImages = [
    {
      id: 1,
      title: 'Bridal Blouses',
      description: 'Exquisite hand-embroidered bridal blouses with intricate details',
      image: '/gallery-bridal.jpg',
      bgColor: 'from-primary/20 to-primary/10',
    },
    {
      id: 2,
      title: 'Designer Sarees',
      description: 'Premium designer sarees with traditional patterns and luxury fabrics',
      image: '/gallery-sarees.jpg',
      bgColor: 'from-primary/20 to-primary/10',
    },
    {
      id: 3,
      title: 'Custom Western Wear',
      description: 'Tailored Western wear with hand-embroidered embellishments',
      image: '/gallery-western.jpg',
      bgColor: 'from-primary/20 to-primary/10',
    },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/3 to-accent/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
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
              Our Collections
            </p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-playfair font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
            Luxury Bridal & Custom Wear
          </h2>
          <p className="text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Explore our curated collections of <span className="text-primary font-semibold">premium Indian and Western wear</span>, each piece crafted with meticulous attention to detail
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className={`relative h-96 overflow-hidden bg-gradient-to-br ${item.bgColor}`}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-gray-100 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/0 group-hover:border-accent/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
