'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rachana Rao',
    role: 'Engagement Blouses',
    content: 'I got my engagement blouses done with Maayarang and I cannot thank them enough! The design, stitching, and fit are absolutely perfect. The team did a fantastic job of understanding my ideas and the final execution was flawless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Supriya Palmur',
    role: 'Wedding Blouses',
    content: 'I had the pleasure of visiting this boutique for wedding blouses, and I couldn\'t be more thrilled with the results! The blouses turned out absolutely amazing, the stitching is flawless, and the designs are just stunning.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Brinda Mukundan',
    role: 'Custom Designs',
    content: 'The team\'s exceptional design, stitching, and styling skills are truly remarkable. Their friendly and accommodating nature ensures that all requests are met promptly and professionally. They consistently adhere to delivery schedules.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Anju Murali',
    role: 'Bridal Blouses',
    content: 'Medha and Brunda ensured that everything fit perfectly and was to my liking. The detailing in their designs were exceptional and the fitting was perfect.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Anjali S',
    role: 'KSIC Sarees',
    content: 'Medha did a fantastic job suggesting multipurpose blouses for my KSIC sarees. From fitting to design & the selection of fabric was perfect.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Keerthi M',
    role: 'Bridal Blouses',
    content: 'I chose Maayarang for my bridal blouses stitching and the output was amazing. They will exactly stitch the way we wanted the design and fits perfectly!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/8 via-background to-primary/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-32 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
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
            <Star className="w-4 h-4 text-accent fill-accent" />
            <p className="text-primary font-inter text-sm tracking-widest uppercase font-semibold">
              Customer Love
            </p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-playfair font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-foreground/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Real stories from our <span className="text-primary font-semibold">cherished customers</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/40 p-10 hover:border-accent/40 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground font-inter leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border/40 pt-6">
                  <h4 className="font-playfair font-bold text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-inter">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-4 right-6 text-accent/10 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5H1v4c0 1.25 1 2 1 2s-1 .75-1 4v6c0 1 0 7 3 7z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Social Proof */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-12 sm:p-16 border border-accent/20 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full -ml-20 -mt-20"></div>
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            <div className="text-center group cursor-default">
              <div className="text-5xl sm:text-6xl font-playfair font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                229
              </div>
              <p className="text-foreground/70 font-inter font-medium">5-Star Reviews</p>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-5xl sm:text-6xl font-playfair font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                4.6★
              </div>
              <p className="text-foreground/70 font-inter font-medium">Google Rating</p>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-5xl sm:text-6xl font-playfair font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                92+
              </div>
              <p className="text-foreground/70 font-inter font-medium">Photos Shared</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
