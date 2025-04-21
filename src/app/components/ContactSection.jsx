'use client'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen md:min-h-[700px]">
      {/* Map Background */}
      <div className="absolute inset-0 z-1">
        <img
          src="/images/map.jpg"
          alt="Location map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-12 md:py-0 md:h-[700px] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {/* Left Side - Contact Info (always top on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="font-heading text-3xl md:text-5xl mb-6">
              Contact Us
            </h2>
            <p className="font-body text-lg text-pink-100 mb-8 max-w-md">
              Reach out to discuss custom orders, events, or visit our bakery for a tasting experience.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl mt-1 text-amber-300" />
                <div>
                  <h3 className="font-subheading text-xl mb-1">Our Bakery</h3>
                  <p className="font-body text-pink-100">
                    123 Sweet Avenue<br />
                    Victoria Island, London
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl mt-1 text-amber-300" />
                <div>
                  <h3 className="font-subheading text-xl mb-1">Call Us</h3>
                  <p className="font-body text-pink-100">
                    +134 812 345 6789<br />
                    Mon-Sat: 9AM - 6PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl mt-1 text-amber-300" />
                <div>
                  <h3 className="font-subheading text-xl mb-1">Email</h3>
                  <p className="font-body text-pink-100">
                    hello@dmcheesecakes.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form (always bottom on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-90 backdrop-blur-sm p-6 md:p-10 rounded-xl shadow-xl mt-8 md:mt-0"
          >
            <h3 className="font-subheading text-2xl text-amber-900 mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="font-body text-amber-800 block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-body text-amber-800 block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-body text-amber-800 block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Tell us about your order..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-subheading rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}