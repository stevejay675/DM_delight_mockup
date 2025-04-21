'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function ProductShowcase() {
  const featuredItems = [
    {
      name: 'New York Classic',
      description: 'Velvety smooth with a hint of lemon',
      price: '₦15,000',
      image: '/classic-cake.png' // Your transparent PNG
    },
    {
      name: 'Berry Medley',
      description: 'Mixed berry compote swirl',
      price: '₦18,000',
      image: '/berry-cake.png'
    }
  ]

  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl text-amber-900 mb-2">
          Our Signature Creations
        </h2>
        <p className="font-body text-pink-700 mb-12">
          Handcrafted with premium ingredients
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {featuredItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="h-48 mb-4 flex justify-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>
              <h3 className="font-subheading text-xl text-amber-900 mb-2">
                {item.name}
              </h3>
              <p className="font-body text-pink-700 mb-4">
                {item.description}
              </p>
              <p className="font-body text-amber-600 mb-6">
                {item.price}
              </p>
              <a 
                href={`https://wa.me/234YOURNUMBER?text=Hi! I'd like to order the ${item.name}`}
                className="inline-flex items-center px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="mr-2" /> Order via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}