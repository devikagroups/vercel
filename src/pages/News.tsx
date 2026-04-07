import { motion } from 'framer-motion'
import { ExternalLink, Newspaper, Calendar, ArrowRight } from 'lucide-react'

const News = () => {
  const newsItems = [
    {
      title: 'Devika Group\'s Vibe 110: The Perfect Blend of Location, Luxury, and Long-term Growth',
      source: 'Business Standard',
      date: 'November 2025',
      description: 'An in-depth look at how Devika Vibe 110 is setting new standards in commercial real estate with its strategic location and modern design.',
      url: 'https://www.business-standard.com/content/press-releases-ani/devika-group-s-vibe-110-the-perfect-blend-of-location-luxury-and-long-term-growth-125111301888_1.html',
      featured: true,
    },
    {
      title: 'Devika Vibe 110 Continues to Attract Quality Brands, Boost Retail Demand in Sector 110 Noida',
      source: 'The Wire',
      date: 'November 2025',
      description: 'Coverage of the growing brand ecosystem at Devika Vibe 110 and its impact on the retail landscape of Sector 110, Noida.',
      url: 'https://thewire.in/ptiprnews/devika-vibe-110-continues-to-attract-quality-brands-boost-retail-demand-in-sector-110-noida',
      featured: true,
    },
    {
      title: 'Devika Group\'s Vibe 110: The Perfect Blend of Location, Luxury, and Long-term Growth',
      source: 'ANI News',
      date: 'November 2025',
      description: 'Press release highlighting the key features and investment potential of Devika Vibe 110 in Sector 110, Noida.',
      url: 'https://www.aninews.in/news/business/devika-groups-vibe-110-the-perfect-blend-of-location-luxury-and-long-term-growth20251113181731/',
      featured: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full border border-yellow-500/30 mb-6">
              Media Coverage
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Devika Group <span className="gold-gradient-text">In The News</span>
            </h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest news, press releases, and media coverage about Devika Group and our projects.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>

      {/* Featured News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Latest Updates
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Recent <span className="gold-gradient-text">Press Coverage</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {newsItems.map((item, idx) => (
              <motion.article
                key={idx}
                variants={itemVariants}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 hover:border-yellow-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                        <Newspaper className="w-3 h-3 mr-1" />
                        {item.source}
                      </span>
                      <span className="inline-flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                  {/* Icon/Visual */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="w-full h-32 lg:h-full gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                      <Newspaper className="w-12 h-12 text-white/80" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-24 bg-gradient-to-b from-yellow-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                For Media
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Media <span className="gold-gradient-text">Resources</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Journalists and media professionals can access our press kit, high-resolution images, company fact sheets, and executive bios. We are committed to providing timely and accurate information about our projects and initiatives.
              </p>
              <div className="space-y-4">
                {[
                  'High-resolution project images',
                  'Company fact sheets and statistics',
                  'Executive team bios',
                  'Press release archive',
                  'Brand guidelines',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 via-yellow-50 to-white flex items-center justify-center">
                  <Newspaper className="w-32 h-32 text-yellow-400/40" />
                </div>
              </div>
              {/* Contact Card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-display font-bold text-gray-900 mb-2">Media Contact</p>
                <p className="text-sm text-gray-600">
                  For press inquiries, please contact our media relations team at{' '}
                  <span className="text-yellow-600">media@devikagroup.com</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Inquiries */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Press <span className="gold-gradient-text">Inquiries</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              For media inquiries, interview requests, or additional information about Devika Group and our projects, please reach out to our communications team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:media@devikagroup.com"
                className="gold-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Contact Media Team
              </a>
              <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-yellow-400 hover:text-yellow-400 transition-all">
                Download Press Kit
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>
    </div>
  )
}

export default News