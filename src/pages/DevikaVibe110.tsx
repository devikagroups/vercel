import { motion } from 'framer-motion'
import { 
  MapPin, 
  Store, 
  Users, 
  Utensils,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Building,
  Train,
  Car
} from 'lucide-react'

const DevikaVibe110 = () => {
  const features = [
    {
      icon: Store,
      title: 'High-Street Retail',
      description: 'Contemporary high-street concept with modern planning and organized layouts.',
    },
    {
      icon: Users,
      title: 'Strong Catchment',
      description: 'Strategic location in a growing residential catchment ensuring consistent footfall.',
    },
    {
      icon: TrendingUp,
      title: 'High Visibility',
      description: 'Organized shop layouts with strong visibility for all retail units.',
    },
    {
      icon: Car,
      title: 'Easy Accessibility',
      description: 'Easy accessibility and smooth customer flow throughout the development.',
    },
    {
      icon: Utensils,
      title: 'Mixed Use',
      description: 'Ideal mix for retail, food, and service-based businesses.',
    },
    {
      icon: Train,
      title: 'Metro Connectivity',
      description: 'Well connected through major infrastructure routes and metro stations.',
    },
  ]

  const highlights = [
    'Strategic location in Sector 110 Noida with strong connectivity',
    'High residential catchment ensuring consistent footfall',
    'Modern high-street retail design with wide walkways',
    'Balanced mix of retail, dining, and lifestyle offerings',
    'Growing brand presence and market response',
    'Designed for everyday convenience and daily visits',
  ]

  const brands = [
    'Operational Brands',
    'Food & Beverage',
    'Convenience Stores',
    'Service Categories',
    'Well-known Brands',
    'Upcoming Openings',
  ]

  const faqs = [
    {
      question: 'Where Is Devika Group Vibe 110 Located?',
      answer: 'Devika Vibe 110 is located in Sector 110, Noida, surrounded by established residential communities and strong connectivity.',
    },
    {
      question: 'What Type Of Project Is Devika Vibe 110?',
      answer: 'It is a modern high-street commercial development offering retail, dining, and lifestyle spaces.',
    },
    {
      question: 'What Makes Devika Vibe 110 A Strong Commercial Destination?',
      answer: 'Its location, residential catchment, organised design, and growing brand presence make it a reliable and active commercial hub.',
    },
    {
      question: 'Is Devika Vibe 110 Suitable For Daily Visits?',
      answer: 'Yes, the project is designed for everyday convenience, allowing residents to visit regularly for shopping, dining, and services.',
    },
    {
      question: 'Who Is The Developer Of Devika Group Vibe 110?',
      answer: 'Devika Vibe 110 is developed by Devika Group, a trusted real estate developer known for strategic and user-focused developments.',
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
              High-Street Retail
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Devika <span className="gold-gradient-text">Vibe 110</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              A Modern High-street Retail Destination In Sector 110 Noida
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Thoughtfully designed to meet the evolving needs of modern retail, dining, and lifestyle experiences within a high-density residential catchment.
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
                Your Daily Destination For <span className="gold-gradient-text">Shopping & Dining</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Devika Vibe 110 is a thoughtfully designed commercial development in Sector 110, Noida, created to meet the evolving needs of modern retail, dining, and lifestyle experiences. Positioned within a high-density residential catchment, the project offers a well-structured high-street environment where convenience, accessibility, and community interaction come together seamlessly.
                </p>
                <p>
                  Devika Group Vibe 110 is designed as a premium high-street commercial hub that integrates retail, food and beverage outlets, and lifestyle services within a clean and organised layout. Its strategic positioning ensures that it serves as a daily-use destination for nearby residential communities.
                </p>
                <p>
                  The project features modern architectural design, wide pedestrian-friendly walkways, and a layout that enhances visibility for all retail units. Every element has been planned to support smooth visitor movement, comfortable browsing, and longer engagement time.
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
                  <Store className="w-40 h-40 text-yellow-400/40" />
                </div>
              </div>
              {/* Location Badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-gray-900">Sector 110</p>
                    <p className="text-sm text-gray-600">Noida</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-24 bg-gradient-to-b from-yellow-50/30 to-white">
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
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Train className="w-32 h-32 text-gray-400" />
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
                Strategic Location
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Strong <span className="gold-gradient-text">Connectivity</span> & Access
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Located in Sector 110 Noida, Devika Vibe 110 benefits from strong connectivity and a well-established residential ecosystem. The project is surrounded by prominent residential communities, ensuring a steady and reliable customer base.
                </p>
                <p>
                  Its proximity to major roads, expressways, and metro connectivity makes it easily accessible from different parts of Noida and nearby regions. This location advantage allows Vibe 110 to function as a convenient and preferred commercial destination for everyday needs.
                </p>
                <p>
                  The project is well connected through major infrastructure routes, ensuring smooth accessibility for residents and visitors. Its location allows easy movement across Noida, Greater Noida, and nearby regions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
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
                className="feature-card group p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white transition-all"
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

      {/* Brand Presence */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Brand Ecosystem
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Growing <span className="gold-gradient-text">Brand Presence</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {brands.map((brand, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 gold-gradient rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-display font-semibold text-white">{brand}</h4>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              Devika Vibe 110 already hosts a growing number of operational brands across food, convenience, and service categories, contributing to steady footfall and active engagement. Several well-known brands are in the fit-out stage, further strengthening the project&apos;s retail ecosystem.
            </p>
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
            >
              <span className="text-yellow-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Choose Vibe 110
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                A Community-Centric <span className="gold-gradient-text">Commercial Hub</span>
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
                <h4 className="font-display font-bold text-gray-900 mb-2">Community Hub</h4>
                <p className="text-gray-600 text-sm">
                  Beyond retail, Vibe 110 functions as a community-oriented space where people can meet, interact, and spend time. Its open environment, seating areas, and organised layout encourage social engagement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center">
                  <Building className="w-32 h-32 text-yellow-400/50" />
                </div>
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
              Devika Group: <span className="gold-gradient-text">Strategic & User-Focused</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Devika Group is a well-established real estate developer known for its strategic planning and focus on delivering practical, user-oriented developments. The group has built a reputation for identifying high-potential locations and creating projects that remain relevant over time. With a clear emphasis on quality, usability, and market alignment, Devika Group continues to contribute to the evolving real estate landscape.
            </p>
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
              Be Part of Noida&apos;s <span className="gold-gradient-text">Premier Retail</span> Destination
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Devika Vibe 110 represents the next generation of commercial development in Noida. With its strong location, high residential catchment, and modern high-street design, it offers a well-balanced environment that supports both daily convenience and lifestyle experiences.
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

export default DevikaVibe110