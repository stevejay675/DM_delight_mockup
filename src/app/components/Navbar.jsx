'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Flavors', href: '#flavors' },
    { name: 'Story', href: '#story' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://instagram.com' },
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <FaEnvelope />, href: 'mailto:hello@example.com' }
  ]

  return (
    <>
      {/* Desktop Nav */}
      <header className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-pink-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={isScrolled ?   "/images/logo.png" : "/images/logo.jpg"} 
              alt="Logo" 
              className="h-auto w-20"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-1 py-2 text-sm font-medium ${
                  isScrolled ? 'text-amber-900' : 'text-white'
                } hover:text-amber-600 transition-colors`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 hover:w-full" />
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#order"
              className={`ml-4 px-6 py-2 rounded-full text-sm font-medium ${
                isScrolled 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-pink-600'
              } hover:shadow-lg transition-shadow`}
            >
              Order Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FaTimes className={`text-2xl ${
                isScrolled ? 'text-amber-900' : 'text-white'
              }`} />
            ) : (
              <GiHamburgerMenu className={`text-2xl ${
                isScrolled ? 'text-amber-900' : 'text-white'
              }`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 pt-24 bg-amber-50 md:hidden"
          >
            <div className="container mx-auto px-6 py-8 h-full flex flex-col">
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-6 flex-grow"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-medium text-amber-900 py-2"
                    variants={{
                      hidden: { x: -30, opacity: 0 },
                      show: { x: 0, opacity: 1 }
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="#order"
                  className="text-2xl font-medium text-amber-900 py-2"
                  variants={{
                    hidden: { x: -30, opacity: 0 },
                    show: { x: 0, opacity: 1 }
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Order
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-6 justify-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-900 text-2xl hover:text-amber-600 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}