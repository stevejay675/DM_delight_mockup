'use client'
import { motion } from 'framer-motion'
import { FaCheese, FaIceCream, FaBirthdayCake } from 'react-icons/fa' // Using reliable FA icons

export default function FlavorShowcase() {
  const flavors = [
    {
      id: 1,
      name: 'New York Classic',
      description: 'Velvety smooth with a hint of lemon',
      Icon: FaCheese,
      accent: 'bg-amber-100'
    },
    {
      id: 2,
      name: 'Berry Medley',
      description: 'Mixed berries swirled through creamy filling',
      Icon: FaBirthdayCake,
      accent: 'bg-pink-100'
    },
    {
      id: 3,
      name: 'Salted Caramel',
      description: 'Sweet meets savory in this decadent twist',
      Icon: FaIceCream,
      accent: 'bg-amber-50'
    }
  ]

  return (
    <section className="bg-pink-50 py-16 md:py-24 border-t border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-amber-900 mb-4">
            Our Signature Flavors
          </h2>
          <p className="font-body text-pink-700 max-w-2xl mx-auto">
            Each cheesecake is crafted with premium ingredients and baked to perfection
          </p>
        </motion.div>

        {/* Flavor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${flavor.accent} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white">
                  <flavor.Icon className="text-4xl text-amber-700" />
                </div>
              </div>
              <h3 className="font-subheading text-xl text-amber-900 text-center mb-3">
                {flavor.name}
              </h3>
              <p className="font-body text-pink-700 text-center mb-6">
                {flavor.description}
              </p>
              <button className="w-full py-2 border border-pink-300 text-pink-600 rounded-full font-body hover:bg-pink-100 transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <button className="font-heading px-8 py-3 bg-amber-600 text-white rounded-full text-lg hover:bg-amber-700 transition-colors">
            Explore All Flavors
          </button>
        </motion.div>
      </div>
    </section>
  )
}