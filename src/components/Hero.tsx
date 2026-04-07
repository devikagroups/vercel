import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaLink?: string
  showScrollIndicator?: boolean
  backgroundImage?: string
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText = 'Explore Projects',
  ctaLink = '/#projects',
  showScrollIndicator = true,
  backgroundImage,
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern bg-gradient-to-br from-gray-50 via-white to-yellow-50/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-yellow-100/80 text-yellow-700 text-sm font-semibold rounded-full border border-yellow-200">
              {subtitle}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            {title.split(' ').map((word, idx) => 
              word.toLowerCase().includes('devika') || word.toLowerCase().includes('golden') ? (
                <span key={idx} className="gold-gradient-text">{word} </span>
              ) : (
                <span key={idx}>{word} </span>
              )
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to={ctaLink}
              className="group gold-gradient text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2 hover:scale-105"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/reviews"
              className="px-8 py-4 rounded-full font-semibold text-gray-700 border-2 border-gray-200 hover:border-yellow-400 hover:text-yellow-600 transition-all"
            >
              Read Reviews
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#content" className="flex flex-col items-center text-gray-400 hover:text-yellow-600 transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      )}

      {/* Gold Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
    </section>
  )
}

export default Hero