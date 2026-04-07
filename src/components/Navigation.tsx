import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Building2 } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/devika-sadar-bazaar', label: 'Sadar Bazaar' },
    { path: '/devika-vibe-110', label: 'Vibe 110' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/news', label: 'News' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl leading-none transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>
                Devika
              </span>
              <span className={`text-xs tracking-widest font-medium transition-colors ${
                isScrolled ? 'text-yellow-600' : 'text-yellow-600'
              }`}>
                GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-yellow-600'
                    : isScrolled
                    ? 'text-gray-700 hover:text-yellow-600'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="gold-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-yellow-600'
                      : 'text-gray-700 hover:text-yellow-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="gold-gradient text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg w-full">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation