import { Link } from 'react-router-dom'
import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/devika-sadar-bazaar', label: 'Devika Sadar Bazaar' },
    { path: '/devika-vibe-110', label: 'Devika Vibe 110' },
    { path: '/reviews', label: 'Customer Reviews' },
    { path: '/news', label: 'News & Media' },
  ]

  const projects = [
    { path: '/devika-sadar-bazaar', label: 'Devika Sadar Bazaar' },
    { path: '/devika-vibe-110', label: 'Devika Vibe 110' },
    { path: '/', label: 'Devika Aerocidade' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none text-white">
                  Devika
                </span>
                <span className="text-xs tracking-widest font-medium text-yellow-400">
                  GROUP
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              With a legacy spanning over 70 years, Devika Group has established itself as a trusted name in Indian real estate through consistent performance, quality construction, and responsible development.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Our Projects</h4>
            <ul className="space-y-3">
              {projects.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Devika Group Headquarters,<br />
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 11 XXXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@devikagroup.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              {currentYear} Devika Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer