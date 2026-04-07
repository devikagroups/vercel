import { motion } from 'framer-motion'
import { 
  MapPin, 
  Car, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Building,
  Star
} from 'lucide-react'

const DevikaSadarBazaar = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Located in Central Delhi\'s high-footfall commercial zone near Qutub Road.',
    },
    {
      icon: Building,
      title: 'Organized Retail',
      description: 'Structured and organized retail layouts for better business operations.',
    },
    {
      icon: Car,
      title: 'Multi-level Parking',
      description: 'Multi-level parking facility for improved accessibility and reduced congestion.',
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Improved safety and infrastructure planning throughout the development.',
    },
    {
      icon: Users,
      title: 'Better Circulation',
      description: 'Improved circulation and customer movement within the market.',
    },
    {
      icon: TrendingUp,
      title: 'High Footfall',
      description: 'Consistent customer flow and strong demand for commercial spaces.',
    },
  ]

  const highlights = [
    'Prime location in Central Delhi\'s busiest commercial district',
    'Structured and well-planned retail spaces',
    'Multi-level parking for improved accessibility',
    'High daily footfall and strong business visibility',
    'Modern infrastructure integrated into a traditional marketplace',
  ]

  const faqs = [
    {
      question: 'Where Is Devika Sadar Bazaar Located?',
      answer: 'Devika Sadar Bazaar is located near Qutub Road in Central Delhi, one of the busiest commercial areas in the city.',
    },
    {
      question: 'What Type Of Project Is Devika Sadar Bazaar?',
      answer: 'It is a commercial high-street retail development designed to modernize the traditional Sadar Bazaar market.',
    },
    {
      question: 'Does The Project Offer Parking Facilities?',
      answer: 'Yes, the project includes multi-level parking to improve accessibility and reduce congestion.',
    },
    {
      question: 'Is Devika Sadar Bazaar Suitable For Investment?',
      answer: 'The project is located in a high-footfall area, making it a strong option for long-term business and investment potential.',
    },
    {
      question: 'Who Developed Devika Sadar Bazaar?',
      answer: 'The project is developed by Devika Group, a real estate developer with over 70 years of experience.',
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full border border-yellow-500/30 mb-6">
              Commercial Development
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Devika <span className="gold-gradient-text">Sadar Bazaar</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Modern Retail In The Heart Of Delhi
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A thoughtfully planned commercial development bringing structure and convenience to one of Delhi&apos;s most historic marketplaces.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                Project Overview
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Delhi&apos;s <span className="gold-gradient-text">Historic Marketplace</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Devika Sadar Bazaar represents a significant step toward modernizing one of Delhi&apos;s most historic commercial markets. Located in the heart of Central Delhi, the development introduces structured retail spaces, improved circulation, and multi-level parking to address long-standing infrastructure challenges.
                </p>
                <p>
                  At the same time, the project preserves the traditional commercial character of Sadar Bazaar, ensuring continuity for existing businesses and visitors. The development reflects Devika Group&apos;s ability to upgrade urban spaces without disrupting their identity, creating a more organized and accessible retail environment.
                </p>
                <p>
                  Devika Sadar Bazaar has been designed to address long-standing challenges of traditional markets, including congestion, lack of parking, and unstructured shop layouts. The development introduces a more organized retail format that enhances both business operations and customer experience.
                </p>
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
                  <Building className="w-40 h-40 text-yellow-400/40" />
                </div>
              </div>
              {/* Location Badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-gray-900">Central Delhi</p>
                    <p className="text-sm text-gray-600">Near Qutub Road</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Key Features
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Designed For <span className="gold-gradient-text">Modern Retail</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="feature-card group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all"
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

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Star className="w-32 h-32 text-yellow-400/30" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                Project Highlights
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Why Choose <span className="gold-gradient-text">Devika Sadar Bazaar</span>?
              </h2>
              
              <div className="space-y-4">
                {highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
                <h4 className="font-display font-bold text-gray-900 mb-2">Investment Potential</h4>
                <p className="text-gray-600 text-sm">
                  Being located in one of Delhi&apos;s busiest commercial zones, Devika Sadar Bazaar offers strong potential for long-term business growth. The consistent demand for retail spaces in Sadar Bazaar, combined with modern infrastructure, makes this project a relevant option for investors and business owners.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Devika Group */}
      <section className="py-24 bg-gradient-to-b from-yellow-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              About The Developer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Backed By <span className="gold-gradient-text">70+ Years</span> of Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              With over 70 years of experience, Devika Group has developed more than 6.5 million square feet and delivered 46+ projects across India. The group is known for its disciplined approach to planning, quality construction, and timely execution. Devika Sadar Bazaar reflects this legacy by combining modern retail planning with real-world usability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { value: '70+', label: 'Years Experience' },
                { value: '6.5M+', label: 'Sq Ft Developed' },
                { value: '46+', label: 'Projects' },
                { value: '13.4K+', label: 'Customers' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-display text-3xl font-bold gold-gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Establish Your <span className="gold-gradient-text">Business</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Devika Sadar Bazaar offers a well-planned commercial environment backed by experience, location advantage, and long-term relevance.
            </p>
            <button className="gold-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>
    </div>
  )
}

export default DevikaSadarBazaar