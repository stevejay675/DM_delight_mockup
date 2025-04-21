'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';


export default function Hero() {
  return (
    <section className="relative w-full border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Transparent Cake Image (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 md:h-[400px]"
        >
          <Image
            src="/images/banner.png" // Replace with your image path
            alt="Artisan Cheesecake"
            fill
            className="object-contain object-left"
            priority
          />
        </motion.div>

        {/* Content (Right) */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-heading sm:text-5xl font-bold lg:text-6xl text-amber-900"
          >
            Artisan Cheesecakes
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-amber-800 max-w-lg mx-auto md:mx-0"
          >
            Handcrafted with premium ingredients and baked to perfection for that melt-in-your-mouth experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1 rounded-full font-medium transition-colors shadow-lg hover:shadow-amber-200">
              Order Now <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-50 to-transparent" />
    </section>
  )
}