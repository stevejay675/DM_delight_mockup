import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { PiCakeDuotone } from 'react-icons/pi'

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-cream border-t border-pink-600">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4 pb-6 md:pb-0 border-b md:border-b-0 border-pink-700">
            <div className="flex items-center gap-2">
              <PiCakeDuotone className="text-3xl text-amber-300" />
              <span className="font-heading text-2xl text-white">D&M Delight</span>
            </div>
            <p className="font-body text-pink-100">
              Artisan cheesecakes crafted with passion and premium ingredients.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-pink-800 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-pink-800 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-pink-800 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 pb-6 md:pb-0 border-b md:border-b-0 border-pink-700">
            <h3 className="font-subheading text-lg text-white font-medium">Explore</h3>
            <ul className="font-body space-y-2">
              <li><a href="#" className="text-pink-200 hover:text-amber-300 transition-colors">Our Flavors</a></li>
              <li><a href="#" className="text-pink-200 hover:text-amber-300 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-pink-200 hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-pink-200 hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 pb-6 md:pb-0 border-b md:border-b-0 border-pink-700">
            <h3 className="font-subheading text-lg text-white font-medium">Visit Us</h3>
            <address className="font-body not-italic space-y-2">
              <p className="text-pink-200">123 downstreet Avenue</p>
              <p className="text-pink-200">Victoria Island, London</p>
              <p className="text-pink-200">Mon-Sat: 9AM - 6PM</p>
              <a href="tel:+2348123456789" className="text-pink-200 hover:text-amber-300 transition-colors block">
                +123767888846
              </a>
            </address>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-subheading text-lg text-white font-medium">Sweet Updates</h3>
            <p className="font-body text-pink-100">
              Join our newsletter for seasonal flavors and special offers.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 bg-pink-800 border border-pink-700 placeholder-pink-300 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-pink-700">
          <p className="font-body text-center text-pink-300">
            &copy; {new Date().getFullYear()} D&M Cheesecakes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}