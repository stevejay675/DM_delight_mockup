'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-cream py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-amber-900">
            D&M Delight
          </h2>
          <p className="font-body text-pink-700 text-lg">
            Born from a passion for perfection, our cheesecakes blend traditional recipes with modern flair. Each creation is handcrafted in small batches using only the finest ingredients.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-body text-pink-700">
                72-hour slow chilled for optimal texture
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-body text-pink-700">
                Locally-sourced dairy and organic ingredients
              </p>
            </div>
          </div>
          <button className="font-subheading px-6 py-2 border border-amber-600 text-amber-600 rounded-full hover:bg-amber-50 transition-colors">
            Our Story →
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/about.avif" // Your elegant bakery/process image
            alt="D&M Cheesecake preparation"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}