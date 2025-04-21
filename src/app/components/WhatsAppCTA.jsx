'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <a
        href="https://wa.me/234YOURNUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-xl hover:bg-[#128C7E] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
        
        {/* Pulsing notification dot */}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
          className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
        />
      </a>
    </div>
  )
}