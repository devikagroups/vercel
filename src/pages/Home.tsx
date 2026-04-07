import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { 
  Building, 
  MapPin, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

const Home = () => {
  const stats = [
    { icon: Building, value: '6.5M+', label: 'Sq Ft Developed', suffix: '' },
    { icon: CheckCircle, value: '46+', label: 'Projects Delivered', suffix: '' },
    { icon: Users, value: '13.4K+', label: 'Happy Customers', suffix: '' },
    { icon: Award, value: '70+', label: 'Years of Excellence', suffix: '' },
  ]

  const projects = [
    {
      id: 1,
      name: 'Devika Sadar Bazaar',
      location: 'Central Delhi',
      description: 'Modern retail in the heart of Delhi\'s most historic commercial marketplace. Structured retail spaces with multi-level parking.',
      image: '/images/sadar-bazaar.jpg',
      features: ['Prime Location', 'Multi-level Parking', 'High Footfall'],
      link: '/devika-sadar-bazaar',
    },
    {
      id: 2,
      name: 'Devika Vibe 110',
      location: 'Sector 110, Noida',
      description: 'Contemporary high-street retail development serving surrounding residential communities with modern planning.',
      image: '/images/vibe-110.jpg',
      features: ['High-Street Retail', 'Growing Catchment', 'Modern Design'],
      link: '/devika-vibe-110',
    },
    {
      id: 3,
      name: 'Devika Aerocidade',
      location: 'Near Dabolim Airport, Goa',
      description: 'Aerocity-style integrated development with residential plots, lifestyle spaces, and commercial zones.',
      image: '/images/aerocidade.jpg',
      features: ['Near Airport', 'Integrated Development', 'Future Growth'],
      link: '/',
    },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Over 70 years of consistent performance and quality construction across 46+ delivered projects.',
    },
    {
      icon: Shield,
      title: 'Trusted Development',
      description: '13.4K+ customers trust our commitment to transparency, timely delivery, and quality execution.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Disciplined approach ensuring projects are completed on schedule with the promised specifications.',
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Strategic location selection focusing on connectivity, growth potential, and urban convenience.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Building Excellence Since 1954"
        subtitle="Premium Real Estate Developer"
        description="Devika Group has established itself as a trusted name in Indian real estate through consistent performance, quality construction, and responsible development for over 70 years."
      />

      {/* Stats Section */}
      <section id="content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="stat-card text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-yellow-100/50 shadow-lg"
              >
                <div className="w-14 h-14 mx-auto mb-4 gold-gradient rounded-xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                About Devika Group
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A Legacy of <span className="gold-gradient-text">Trust & Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With a legacy spanning over 70 years, Devika Group has established itself as a trusted name in Indian real estate through consistent performance, quality construction, and responsible development. Since its inception in 1954, the company has played a significant role in shaping commercial and residential spaces across key regions in India.
                </p>
                <p>
                  Devika Group has developed over 6.5 million square feet and successfully delivered more than 46 projects, earning the trust of 13.4 thousand+ customers. The group&apos;s approach focuses on thoughtful planning, transparency, and long-term value.
                </p>
                <p>
                  Rather than rapid expansion, Devika Group follows a measured growth strategy that prioritizes consistency and reliability. This disciplined approach has helped the company maintain credibility across different real estate cycles while adapting to new market demands.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full gold-gradient border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}K
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">13.4K+</span> Happy Customers
                </span>
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
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
                  <Building className="w-32 h-32 text-yellow-400/50" />
                </div>
                <div className="absolute inset-0 gold-gradient opacity-10" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-display font-bold text-gray-900">Since 1954</span>
                </div>
                <p className="text-sm text-gray-600">70+ years of excellence in real estate development</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              The <span className="gold-gradient-text">Devika Advantage</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="feature-card group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-yellow-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="feature-icon w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-yellow-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="gold-gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Devika Group projects reflect a balanced combination of legacy experience and modern planning, designed to meet evolving urban requirements.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="project-card group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="project-image absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building className="w-20 h-20 text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white/90 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/devika-sadar-bazaar"
              className="inline-flex items-center gold-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Find Your <span className="gold-gradient-text">Perfect Space</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Connect with us to explore our premium commercial and residential developments designed for modern living and business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="gold-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Schedule a Visit
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-yellow-400 hover:text-yellow-400 transition-all">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home