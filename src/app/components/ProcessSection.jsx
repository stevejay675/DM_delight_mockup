'use client'
import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaClock } from 'react-icons/fa'

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Premium Ingredients",
      description: "Locally-sourced dairy, farm-fresh eggs, and organic flavorings",
      Icon: FaLeaf,
      color: "text-pink-500"
    },
    {
      id: 2,
      title: "Handcrafted With Love",
      description: "Each cake mixed and poured by our master pastry chefs",
      Icon: FaHeart,
      color: "text-amber-500"
    },
    {
      id: 3,
      title: "Slow Perfection",
      description: "Baked low and slow for that perfect creamy texture",
      Icon: FaClock,
      color: "text-amber-600"
    }
  ]

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-amber-900 mb-4">
            The D&M Difference
          </h2>
          <p className="font-body text-pink-700">
            Why our cheesecakes stand out from the rest
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-amber-200 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                {/* Icon Circle */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${step.color.replace('text', 'bg')} bg-opacity-20 flex items-center justify-center`}>
                  <step.Icon className={`text-2xl ${step.color}`} />
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-8 text-right' : 'mr-8 text-left'}`}>
                  <h3 className="font-subheading text-xl text-amber-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-pink-700">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="font-heading px-8 py-3 bg-pink-500 text-white rounded-full text-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-pink-200">
            Visit Our Bakery
          </button>
        </motion.div>
      </div>
    </section>
  )
}